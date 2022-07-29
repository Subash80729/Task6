//function =function declare with keyword

// function proverb (world){
//     // console.log(world)

// }
// proverb(["old is gold","tik for tat","health is wealth"])

 // function using for loop
 function proverb (king){
    for( var i=0;i< king.length;i++){
    console.log(king[i])

}
}
proverb(["old is gold","tik for tat","health is wealth"])

//anonymous function= var decalare with function<var declare=function()
var proverb = function (king){
    for( var i=0;i< king.length;i++){
    console.log(king[i])

}
}
proverb(["old ","tik ","health "])

//arrow function= without keyword and function

var proverb = (king)=>{
    for( var i=0;i< king.length;i++){
    console.log(king[i])

}
}
proverb([" gold"," tat"," wealth"])

//IIFE (()=>{IIFE})()

((king) =>  {
    for( var i=0; i< king.length; i++){
        console.log(king[i])
}
})(["old is gold","tik for tat","health is wealth"])


