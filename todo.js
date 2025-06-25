// document.getElementById("addButton").addEventListener("click", function(){
//   const taskInput= document.getElementById("todoInput");
//   const taskText=taskInput.value.trim();

//   if(taskText==="") {
//     return;
//   }
//     // create list 
//     const li = document.createElement("li")
//     li.textContent=taskText;
    
//     // remove btn 
//     const rmvBtn=document.createElement("button");
//     rmvBtn.textContent="Remove";
//     rmvBtn.className="remove-btn"
//     rmvBtn.addEventListener("click",function(){
//       li.remove();
//     })


//     li.addEventListener("click", function(){
//       li.classList.toggle("completed")
//     })


// li.appendChild(rmvBtn)
// document.getElementById("todoList")
// this.appendChild(li);
// todoInput.value="";


// })

 document.getElementById("addBtn").addEventListener("click", function () {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();

      if (taskText === "") return;

      // ✅ 4. Create new task list item
      const li = document.createElement("li");
      li.textContent = taskText;

      // ✅ 6. Add remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";
      removeBtn.addEventListener("click", function () {
        li.remove(); // ✅ 7. Delete task
      });

      // ✅ 5. Mark task as completed
      li.addEventListener("click", function () {
        li.classList.toggle("completed");
      });

      li.appendChild(removeBtn);

      document.getElementById("taskList").appendChild(li); // ✅ 4. Append task
      taskInput.value = ""; // Clear input
    });