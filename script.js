const todoCard = document.getElementById('todoCard');
const inProgressCard = document.getElementById('inProgressCard');
const inreviewCard = document.getElementById('inreviewCard');
const acceptCard = document.getElementById('acceptCard');



const allBoards = document.querySelectorAll('.board');


allBoards.forEach(board =>{
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector('.flying')
        console.log(board, 'Kuch toh mere upr se gaya',flyingElement);
        if(flyingElement !=  null){
            board.appendChild(flyingElement);
        }
    })
})
