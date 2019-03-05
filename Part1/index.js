let arr = [];

function play(click) {
    let player = document.getElementById('player');
    let clicked = document.getElementById(click);
   
    if(clicked.innerText === ""){
     clicked.innerText = player.innerText;
   
     if (player.innerText === "X") {
        player.innerText = "O";
        arr[click] = "X";
   
      } else {
        player.innerText = "X";
        arr[click] = "O";
      }
      // arr.push(clicked.innerText)
    // for (i = 0; i < arr.length; i++){
      // if ()
    // }
  }
  // console.log(arr)  
  
  let sq1 = arr[0];
  let sq2 = arr[1];
  let sq3 = arr[2];
  let sq4 = arr[3];
  let sq5 = arr[4];
  let sq6 = arr[5];
let sq7 = arr[6];
let sq8 = arr[7];
let sq9 = arr[8];

if (sq1 !== undefined && sq1 === sq2 && sq1 === sq3){
  alert("Winner")
}else if (sq4 !== undefined && sq4 === sq5 && sq4 === sq6){
  alert("Winner")
}else if (sq7 !== undefined && sq7 === sq8 && sq7 === sq9){
  alert("Winner")
}else if (sq1 !== undefined && sq1 === sq4 && sq1 === sq7){
  alert("Winner")
}else if (sq1 !== undefined && sq1 === sq5 && sq1 === sq9){
  alert("Winner")
}else if (sq2 !== undefined && sq2 === sq5 && sq2 === sq8){
  alert("Winner")
}else if (sq3 !== undefined && sq3 === sq5 && sq3 === sq7){
  alert("Winner")
}else if (sq3 !== undefined && sq3 === sq6 && sq3 === sq9){
  alert("Winner")
}else {
  alert("Cat")
}
  

}