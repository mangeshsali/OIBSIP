const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
const increase=document.getElementById("increase");
const cnt=document.getElementById("cnt");
let count=0;


function changeColor(count){
    if(count<0){
        color="red"
    }
    else if(count>0){
        color="green"
    }
    else{
        color="black";
    }
    return color;
}
decrease.addEventListener("click",function(){
    count--;
    cnt.innerHTML=count;
    cnt.style.color=changeColor(count);
})

increase.addEventListener("click",function(){
    count++;
    cnt.innerHTML=count;
    cnt.style.color=changeColor(count);
})

reset.addEventListener("click",function(){
    cnt.innerHTML=count=0
    changeColor(count);
    cnt.style.color=changeColor(count);
})