//if else

var val1= "50"

// if(val1==50){
//     console.log("value is equal")
// }
// else{
//     console.log("value is not equal")
// }

//let val2=[]
 let val2=['good','bad','great']

// if(!val2.length){
//     console.log("arrayis empty")

// }else{
//     console.log(val2[1])
// }

//else if

let val3=['good','bad','great']

if(!val3.length){
    console.log("array is empty")

}
else if(val3[2]=== 'great1'){
    console.log("Great!!!")
}
else{
    console.log("Wrong")
}
//
let val4=['good','bad','great']

if(!val3.length){
    console.log("array is empty")

}
else if(val4[2]=== 'great1' || val4[val4.length-1]==="great"){
    console.log("Great!!!")
}
else{
    console.log("Wrong")
}



//nested if

var val5=["dog","cat","goat","fish","rat"]

if(val5[3]==="goat"){
    if(val5[6]==="rat"){
        console.log("It is a carnivorous  Goood")
    }
    else{
        console.log("not a carnivorous bad")
    }
}
else{
    console.log("not a carnivorous")

//switch case
  
var wresteler="roman"

var w1="cena"
var w2="rock"
var w3="lesnar"

switch (wresteler) {
    case w1="cena":
        console.log("16 times world champion")
        break;
        case w2="rock":
            console.log("a wrestler and hollywood star")
            break;
            case w3="lesnar":
        console.log("beaten undertaker undefeated streak")
        break;    

    default:
        console.log("not in the list")
        break;
}

 




}

