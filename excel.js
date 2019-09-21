// Total sales: F = E * C
//Total Profit: G = E * D

console.log("Run");

var unitCol = document.querySelector("#units");
console.log(unitCol);

unitCol.style.backgroundColor = "red";
unitCol.style.border = "2px solid black";
unitCol.textContent = "0";


unitCol.addEventListener("input", handleClick);


function handleClick(e) {
    // G = E * D (Columns)
    // E: 
    let unitsProjected = e.target; 
    // G:
    let G = unitsProjected.nextElementSibling.nextElementSibling;
    // D:
    let D = unitsProjected.previousElementSibling;
    let valE = unitsProjected.textContent;
    let valD = D.textContent;
    valE = parseFloat(valE);
    valD = parseInt(valD);
    console.log(typeof valE, typeof valD);
    console.log("G = ", (valE * valD));
    G.textContent = valE * valD;
    console.log("valE: ", valE, typeof valE);
    console.log("valE: ", valD, typeof valD);
    console.log(Number.isNaN(valE));

    if (Number.isNaN(valE)){

        G.textContent = '';
    }else{
        G.textContent = valE * valD;
    }
}




// GIAGKAS
// let unitCol = document.querySelector("#units");
// ​
// unitCol.addEventListener("input",handler);
// ​
// //hoesting
// function handler(e){
//     let profit = e.target.previousElementSibling;
//     let totalProfit = e.target.nextElementSibling.nextElementSibling;
//     totalProfit.textContent =  parseInt(e.target.textContent) *   parseInt(profit.textContent);
// }





// kati pou den petyxe
// function handler(){
//     var unitCol = document.querySelector("#units");
//     for (var i=0; i<Infinity; i++){
// if(i%2==0){

//     unitCol.style.backgroundColor = "red";
// }else {
//     unitCol.style.backgroundColor = "blue";
// }

//     }




// }

// setInterval(handler, 1000);