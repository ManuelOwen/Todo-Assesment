
document.addEventListener("DOMContentLoaded",()=>{
      const list=document.querySelector("#list ul");
      const forms=document.querySelector.forms
      const addForms =document.forms["add-task-form"];
      // console.log(addForms)
      const input = document.querySelector("#create-todo");
//Delete task
list.addEventListener("click",(e)=>{
      if(e.target.className=="del"){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);
      }
})
//Add task
addForms.addEventListener("submit", (e)=>{
      e.preventDefault();
                  
            //add elements

            const value =addForms.querySelector('input[type="text"]').value;

            // console.log(value);

            const li= document.createElement("li");
            const todo =document.createElement("span");
            const deleteBtn =document.createElement("span"); 

            //add text content

            todo.textContent =value;
            deleteBtn.textContent="DELETE";

            //add class

            todo.classList.add("task");
            deleteBtn.classList.add("del");

            //validation

            if(value === "" ){
              alert("Please enter a task");
              return;

            }    

            //apend Dom

            li.appendChild(todo);
            li.appendChild(deleteBtn);
            list.appendChild(li);
            swal({
                  title:"success",
                  text:"Todo added succesfully",
                  icon:"success",
                  button:"ok"
            })

            //clear input

            addForms.querySelector('input[type="text"]').value=" " 
});
});