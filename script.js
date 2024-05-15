let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    // boxes.forEach(box => {
    //     box.style.backgroundColor = '#fff';
    // });
    // turnO = true;
    // enableBoxes();
    // msgContainer.classList.add("hide");

    location.reload();
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        } else{
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

// const enableBoxes = () => {
//     for (const box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// }
const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Winner is - ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        let winnerBoxes = () => {
            pos1Val = boxes[pattern[0]].style.backgroundColor = "rgb(109, 255, 47)";
            pos2Val = boxes[pattern[1]].style.backgroundColor = "rgb(109, 255, 47)";
            pos3Val = boxes[pattern[2]].style.backgroundColor = "rgb(109, 255, 47)";
        }

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                winnerBoxes();
            }
        }
    }
};

reset_btn.addEventListener("click", resetGame);