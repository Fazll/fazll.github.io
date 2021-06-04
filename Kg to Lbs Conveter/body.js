alert(" Welcome!!!! \n kg 2 lbs converter")
function conversion(){
var convert = prompt("Enter the weight in Kg to Convert into lbs");
var result= convert / 0.454 ;   
var h1=document.createElement('h1');
var answerText=document.createTextNode(" "+ result+" lbs"+" !!");
h1.setAttribute("id","results");
h1.appendChild(answerText);
document.getElementById("resultDiv").appendChild(h1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

function Delete()
{
    document.getElementById("results").remove();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

