const homes = document.querySelectorAll(".box1");
const restart = document.querySelector(".botton");
let arr = Array.from(document.querySelectorAll(".box1"));
let nobatplayer = 0;
let player = "X";

/********************** */

function nobat(){
  nobatplayer++;
    if(nobatplayer % 2 == 0){
        player = "X";
    }else{
        player = "O";
    }
    return player;
}   


/********************** */

homes.forEach(home => {
    home.addEventListener("click", choose);
});
function choose(ali) {
    if (ali.innerHTML == "a") {
        ali.innerHTML = nobat();
    }
}

/********************** */

restart.addEventListener("click" , reload);
function reload() {
   location.reload();
}

/********************** */

function win(){
    const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i of winner){
        const [a,b,c] = i;
        if(arr[a].innerHTML !== "a" && arr[a].innerHTML == arr[b].innerHTML && arr[b].innerHTML == arr[c].innerHTML){
            alert("player "+ player +" win !!");
        }
    }
}

/**********************/

function isfull(){
    for(let i=0 ; i<9 ; i++){
        if( arr[i].innerHTML != 'X' && arr[i].innerHTML != 'O'){
            return false;
        }
    }
    alert("player draw !! ");
}