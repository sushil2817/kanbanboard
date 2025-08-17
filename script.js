const addTask = document.getElementById('addTask')
const todoCard = document.getElementById('todoCard');
const allBoards = document.querySelectorAll('.board');
const openPopupBtn = document.getElementById('openPopupBtn');
const popupOverlay = document.getElementById('popupOverlay');
const closePopupBtn = document.getElementById('closePopupBtn');

addTask?.addEventListener('click',(event )=>{
    const taskValue1 = document.getElementById('taskText')
    const taskValue = taskValue1.value;
    
    // console.log(taskValue);
    
    const newElement = document.createElement('p');
    const trashButton = document.createElement('i');
    trashButton.classList.add('fa', 'fa-trash', 'text-red-500', 'cursor-pointer','deleteTask');
    newElement.classList.add('taskItems', 'border-1', 'border-gray-300', 'rounded', 'p-3', 'mb-2', 'bg-gray-200', 'flex', 'justify-between', 'items-center');
    newElement.setAttribute('draggable','true');
    newElement.innerText = taskValue;
    newElement.appendChild(trashButton);

    newElement.addEventListener('dragstart',()=>{
        newElement.classList.add('flying');
    })
    newElement.addEventListener('dragend',()=>{
        newElement.classList.remove('flying')
    })
    todoCard?.append(newElement);   
    console.log(newElement);
    
    
    taskValue1.value = " ";
    
    popupOverlay.style.display = 'none';
    
    trashButton.addEventListener('click',()=>{
        console.log('delete button clicked');
        
        newElement.remove();
    })
    
})





allBoards.forEach(board =>{
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector('.flying')
        // console.log(board, 'Kuch toh mere upr se gaya',flyingElement);
        if(flyingElement !=  null){
            board.appendChild(flyingElement);
        }
    })
})



openPopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex'; 
});

closePopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none'; 
});

popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});