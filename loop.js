//for loop

var val=10

for ( var i=0 ; i <= val ;i++){
    // console.log(i)
}

var val1=["dog","cat","goat","fish","rat"]

for( var i=0; i< val1.length;i++){
    // console.log(val1[i])
}

//while loop
var val2=["dog","cat","goat","fish","rat"]

var i=0;
while(i < val2.length){
    // console.log(val2[i])
    i++
}  

//do while
var val3=["dog","cat","goat","fish","rat","mammal"]

var i=0;
do{
    // console.log(val3[i])
    i++
}
while(i < val3.length)

//for-in<index value>
var val3=["dog","cat","goat","fish","rat","mammal"] 
for(i in val3){
console.log(i)
}
 //for-of<indev value name>

 
var val3=["dog","cat","goat","fish","rat","mammal"] 
for(i of val3){
console.log(i)
}
