let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let h2 = document.querySelector("h2");

const playgame = (userchoice) =>{
    // console.log("user choose " + userchoice);
    let compchoice = getcompchoice();
    // console.log("computer choose " + compchoice);
    winner(userchoice,compchoice);
}
const winner = (userchoice,compchoice) =>{
    if(userchoice == compchoice){
        console.log("draw");
        h2.innerText = "Draw";
    }else{
        if(userchoice == "rock" && compchoice == "paper"){
            h2.innerText = "computer won";
            console.log("computer won")
        }else if(userchoice == "rock" && compchoice == "scissors"){
            h2.innerText = "user won";
            console.log("user won")
        }else if(userchoice == "paper" && compchoice == "rock"){
            h2.innerText = "user won";
            console.log("user won")
        }else if(userchoice == "paper" && compchoice == "scissors"){
            h2.innerText = "computer won";
            console.log("computer won")
        }else if(userchoice == "scissors" && compchoice == "rock"){
            h2.innerText = "computer won";
            console.log("computer won")
        }else if(userchoice == "scissors" && compchoice == "paper"){
            h2.innerText = "computer won";
            console.log("user won")
        }
    }  
}
choices.forEach((choices) => {
    choices.addEventListener("click", ()=>{
        let userchoice = choices.getAttribute("id");
        // console.log(userchoice);
        playgame(userchoice);
    });
});

const getcompchoice = () =>{
    const arr = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
}
