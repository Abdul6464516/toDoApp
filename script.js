const button = document.querySelector("#btn");
const input = document.querySelector("#input");
function changeHandler (){
   
   if(input.value.trim().length===0){
        console.log("true part of the code")
    button.setAttribute('disabled','true');
}else {
    console.log("else part of the code")

    button.removeAttribute('disabled');
}
}
input.addEventListener("input",changeHandler)


function deleteLi(event){
    const li = event.target.parentElement;
    li.remove();
}

function todoHandler(event){
    event.preventDefault();
    const inputValue = input.value;
    const ul = document.getElementById("ul");

     let li = document.createElement("li")
     let deleteButton = document.createElement("button");
     const buttonText = document.createTextNode('Click Me');
     deleteButton.appendChild(buttonText)
     console.log(deleteButton)
     
     li.innerText = inputValue;
     li.appendChild(deleteButton)
     ul.appendChild(li);
     deleteButton.addEventListener("click",deleteLi);

     input.value = "";
     input.value.trim();
     button.setAttribute('disabled','true');
}

button.addEventListener("click",todoHandler)
