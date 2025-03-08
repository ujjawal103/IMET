let allFlash = document.querySelectorAll(".flash");
for(let flash of allFlash){
    if(flash.innerHTML){
        setInterval(()=>{
        flash.innerHTML = "";
        },3000);
    }
}

 