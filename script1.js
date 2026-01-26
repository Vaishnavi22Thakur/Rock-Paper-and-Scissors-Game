let userscore=0;
let compscore=0;
const choices=document.querySelectorAll("#choices img");
const generateCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}
const gameDraw=()=>{
    display.innerText="Game was a Draw.";
    container.style.backgroundColor="yellow";
};
const gameWin=(result)=>{
    if(result){
        console.log("Win");
        userscore++;
        playerscore.innerText=userscore;
        container.style.backgroundColor="green";
        display.innerText="Congrats! You Won.";
        confetti({
            particleCount:200,
            spread:200,
            origin: { y: 0.6 },
            colors: ['#ff0a54', '#0acf83', '#2196F3', '#ff6f61']
        });
    }
    else{
        console.log("lose");
        compscore++;
        computerscore.innerText=compscore;
        container.style.backgroundColor="red";
        display.innerText="Oops! You Lost.";
    }
};
const gameResult=(userChoice)=>{
    const compChoice=generateCompChoice();
    if(userChoice==compChoice){
        return gameDraw();
    }
    else if(userChoice=="rock"){
        if(compChoice=="scissors") return gameWin(true);
        else{
            return gameWin(false);
        }
    }
    else if(userChoice=="paper"){
        if(compChoice=="rock") return gameWin(true);
        else return gameWin(false);
    }
    else if(userChoice=="scissors"){
        if(compChoice=="paper") return gameWin(true);
        else return gameWin(false);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        console.log("choice was clicked");
        const userChoice=choice.getAttribute("id");
        gameResult(userChoice);
    });
});