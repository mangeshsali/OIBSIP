const color=()=>{
    const randNumber=Math.floor(Math.random()*0xffffff);
    const colorCode="#"+randNumber.toString(16);
    document.body.style.backgroundColor=colorCode;
    document.getElementById("color-txt").innerText="Background-color : "+colorCode;
    
    //for text copy//
    navigator.clipboard.writeText(colorCode);
}
document.getElementById("btn").addEventListener("click",color);

color();
