const img_area = document.getElementById("img-area")
let arr = JSON.parse(localStorage.getItem("Saved_Img")) || [];
let rem_arr = JSON.parse(localStorage.getItem("Del_Img")) || [];
const btn = document.getElementsByClassName("edit")
const delbtn = document.getElementsByClassName("del")

Window.onload = showImg();
function showImg(){
    rem_arr.map((key, index) => {
        let div1 = document.createElement("div");
        div1.className = "div1";
        div1.accessKey = `${index}`
        div1.innerHTML = `<img src = "${key}"><div class = "div2" ><button class = "edit">Restore</button><button class = "del">Delete</button></div>`
        img_area.appendChild(div1)
    })
}

for(const res of btn){
    res.addEventListener("click", (e) => {
        let a = (e.target.parentNode).parentNode;
        arr.push(a.querySelector('img').src)
        rem_arr.splice(a.accessKey, 1);
        localStorage.setItem("Saved_Img", JSON.stringify(arr))
        localStorage.setItem("Del_Img", JSON.stringify(rem_arr));
        refreshalt();
    })
}

for(const del of delbtn){
    del.addEventListener("click", (e) => {
        let a = (e.target.parentNode).parentNode;
        if(confirm("Do you want to delete")){
            rem_arr.splice(a.accessKey, 1);
            localStorage.setItem("Del_Img", JSON.stringify(rem_arr))
            refreshalt();
        }
        else{
            return
        }

    })
}
function refreshalt(){
        img_area.innerHTML = ""
        showImg();
}
