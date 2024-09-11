
function roll(){

  const numDice= document.getElementById("numDice").value;
  const result= document.getElementById("result");
  const diceimage= document.getElementById("diceimage");
  const values= [];
  const img=[];

  for(i=0; i< numDice; i++){
    const temp= Math.floor((Math.random() *6)+1);
    values.push(temp);
    img.push(`<img src="images/dice${temp}.png">`);
  }
  result.textContent = `dice: ${values}`;
  diceimage.innerHTML = img.join(' ');
}