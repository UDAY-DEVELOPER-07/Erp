const pass = document.getElementById("pass")
const cpass = document.getElementById("confpass")
const btn = document.getElementById("submit");
const box = document.getElementsByName("check")
const fname = document.getElementById("First-name")
const lname = document.getElementById("Last-name");
const department = document.getElementById("drop");
const pno = document.getElementById("pno");
const add = document.getElementById("add");
const pcode = document.getElementById("pcode");
const email = document.getElementById("email");
const genbtn = document.getElementsByName("gen")
const b1 = document.getElementsByTagName("input")
const form = document.getElementById("left")
let gender;
let skills = "";
let key = 0;
let array = [];

form.addEventListener("submit", checkpass);

function checkpass(e) {
    e.preventDefault();
    const p = pass.value;
    const c = cpass.value
    console.log("helllo")
    if (cpass.length == 0) {
        return alert("Please fill Confirm Password")
    }
    if (!(p === c)) {
        return alert("Confirm Password should be same as Password")

    }
    for(let i =0 ; i<3 ;i++){
        if(box[i].checked){
            skills = skills + "," + box[i].attributes.value.value
        }
    }

    if(skills == ""){
        return alert("Please Check atleast one box")
    }


    if(genbtn[0].checked){
        gender = "Male"
    }else{
        gender = "Female"
    }

    const details = {
        Firstname: fname.value,
        Lastname: lname.value,
        Department: department.value,
        Mobile_No: pno.value,
        Gender : gender,
        Address: add.value,
        Pincode: pcode.value,
        Email: email.value,
        Password: pass.value,
        Skills : skills
    }

    if(((genbtn[0].checked) || (genbtn[1].checked)) && ((box[2].checked) || (box[1].checked) || (box[0].checked))){
        
        array.push(details)
        localStorage.setItem("data", JSON.stringify(array));
        alert("Form Submitted")
    }else{
        alert("Please check atleast one box");
    }
    return false
}    


