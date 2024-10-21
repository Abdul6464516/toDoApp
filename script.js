const button = document.querySelector("#btn");


function todoHandler(event){
    event.preventDefault();
    
    const input = document.querySelector("#input");
    const inputValue = input.value;
    const ul = document.getElementById("ul");

     let li = document.createElement("li")
     li.innerText = inputValue;
     ul.appendChild(li);
     input.value = " "
}
button.addEventListener("click",todoHandler)
