const img_area = document.getElementById("img-area")
let arr = JSON.parse(localStorage.getItem("Saved_Img")) || [];
let rem_arr = JSON.parse(localStorage.getItem("Del_Img")) || [];
flag = document.getElementById("Error_Area");
const lbtn = document.querySelector('dialog');
const editurl = document.getElementById('editurl')
const onsub = document.getElementById('onsub');
const onclose = document.getElementById('onsub');

// let a = localStorage.getItem("Del_Img");
// reg = /https?:\/\/[^\s]+/
// var b = []
// ownparse(a)
// function ownparse(a){
//     a.slice(1 ,-1).split(',').map((x,index) => {b[index] = x.match(reg)[0].slice(0,-1)})
//     console.log(b)
// }
// console.log(rem_arr)
 window.onload = showImg();
function showImg(){
    arr.map((key, index) => {
        let div1 = document.createElement("div");
        div1.className = "div1";
        div1.accessKey = `${index}`
        div1.innerHTML = `<img src = "${key}"><div class="div2"><button class ="edit" id ="${index}" onclick = edit(id)>Edit</button><button class = "del" id = "del${index}" onclick = clicked(this.id)> Delete</button></div>`
        img_area.appendChild(div1)
    })
}

document.getElementById("url").addEventListener('input', (e) => {
    console.log(e.target.value)
    let img = new Image();
    img.src = e.target.value;
    let error_area = document.getElementById("Error_Area")
    return new Promise(() => {
        img.onload = () => {
            if(img.width > 50 && img.height > 50) {
                 error_area.innerHTML = "Valid Url"
            } else {
                 error_area.innerHTML = "Invalid Url"
            }
        }
        img.onerror = () => {
             error_area.innerHTML = "Invalid Url"
        }
    })
})

document.getElementById("Submit").addEventListener('click', (e) => {
    if (flag.innerHTML == "Invalid Url" || flag.innerHTML == "") {
        return alert("Please enter a valid url")
    }
    let input = document.getElementById("url")
    arr.push(input.value);
    input.value = ""
    localStorage.setItem("Saved_Img", JSON.stringify(arr))
    flag.style.display = "none";
    refreshalt();  
})

function edit(id) {
    console.log(id)
    let a = document.getElementById(id);
    let z = (a.parentNode).parentNode;
    let url = z.querySelector('img').src
    lbtn.showModal();
    editurl.value = url
    editurl.addEventListener('input', (e) => {
        let x = e.target.value;
        onsub.addEventListener("click", () => {
            arr[id] = x;
            console.log(arr)
            localStorage.setItem("Saved_Img", JSON.stringify(arr))
            refreshalt();
        })
        onclose.addEventListener('click', () => {
            lbtn.close()
        })
    })
}


function clicked(id) {
    let a = document.getElementById(id);
    if (confirm("Do you want to delete")) {
        let z = (a.parentNode).parentNode;
        let url = z.querySelector('img').src
        rem_arr.push(url)
        arr.splice(id, 1);
        localStorage.setItem("Del_Img", JSON.stringify(rem_arr));
        localStorage.setItem("Saved_Img", JSON.stringify(arr))
        refreshalt();
    } else {
        return
    }
}

function refreshalt(){
    img_area.innerHTML = ""
    showImg()
}