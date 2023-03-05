
let count = 0 ;
document.getElementById('add-btn').addEventListener('click', function(){

    count += 1 ;
   const todoText = document.getElementById('todo-text');
   const todoItems = todoText.value ;

//    table section 

    const container = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML  = `
    <td>${count}</td>
    <td>${todoItems}</td>
    <td>
    <button class = "btn btn-error dlt-btn">Delete</button>
    <button class = "btn btn-success">Done</button
    
    </td>
    
    
    `;
    container.appendChild(tr);
    todoText.value = '' ;

    const buttons =   document.querySelectorAll(".dlt-btn");

    for( const button of buttons){
        button.addEventListener('click', function(event){
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }
 


})