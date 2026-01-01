let boxes=document.querySelectorAll(".box");
let container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let btn=document.querySelector(".RESTART");
let winner=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,4,2],
    [6,7,8],
];
let turn=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn===true){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
let disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

let win=()=>{
    container.classList.remove("hide");
    disable();
}
const checkwinner=()=>{
    for(let partten of winner){
        let position1=boxes[partten[0]].innerText;
        let position2=boxes[partten[1]].innerText
        let position3=boxes[partten[2]].innerText;
        if(position1!="" && position2!="" && position3!="" ){
            if(position1===position2 && position2===position3){
                console.log("WINNER",position1);
                win(position1);
            }
        }
    }
};
const reset=()=>{
    turn=true;
    enable();
    container.classList.add("hide");
}
btn.addEventListener("click",reset);
