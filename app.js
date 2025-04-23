let cl = console.log ;

const todoform = document.getElementById("todoform")
const todoitemcontrol = document.getElementById("todoitem")
const todocontainer = document.getElementById("todocontainer")

let todoarr = [];
if(localStorage.getItem("todoarr")){
    todoarr = JSON.parse(localStorage.getItem(todoarr))
}



let createlis = (arr) => {
    result = ''
    arr.forEach((ele) => {
        result +=`<li class='list-group-item d-flex justify-content-between'>${ele.item}</li>
                    <li><i class="fa-solid fa-pen-to-square"></i></li>
                    <li><i class="fa-solid fa-trash"></i></li>
    `
        
    });
    todocontainer.innerHTML = result;
}
createlis(todoarr);



const onaddtodo = (eve) => {
    eve.preventDefault()

    let obj = {
        item : todoitemcontrol.value
    }
    todoform.reset();
    todoarr.push(obj)
    localStorage.setItem("todoarr",JSON.stringify(todoarr))

    let li = document.createElement("li")
    li.className = "list-group-item d-flex justify-content-between"
    li.innerHTML = `<li>${obj.item}</li>
                    <li><i class="fa-solid fa-pen-to-square"></i></li>
                    <li><i class="fa-solid fa-trash"></i></li>
    `
    todocontainer.prepend()
}





todoform.addEventListener("submit" , onaddtodo)