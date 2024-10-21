const button = document.querySelector("#btn");


function todoHandler(event){
    event.preventDefault();
    const div = document.querySelector("#div");
    
    const input = document.querySelector("#input");
    const inputValue = input.value;
    if(inputValue.trim()===""){
        const span = document.createElement("span");
        span.innerText = "Input must not be empty";
        span.classList.add("spanColor");
        div.appendChild(span);
        return 
    }
    const ul = document.getElementById("ul");

     let li = document.createElement("li")
     let deleteButton = document.createElement("button");
     const buttonText = document.createTextNode('Click Me');
     deleteButton.appendChild(buttonText)
     console.log(deleteButton)
     
     li.innerText = inputValue;
     li.appendChild(deleteButton)
     ul.appendChild(li,deleteButton);
     console.log(li)
     input.value = " "
}
button.addEventListener("click",todoHandler)
