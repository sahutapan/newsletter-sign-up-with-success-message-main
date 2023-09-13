const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
document.getElementById("subscribe-btn").addEventListener("click",(event)=>{
    event.preventDefault();
    let inputEmail = document.getElementById("email");
    const email=inputEmail.value;
    if(!emailRegex.test(email))
    {
        document.getElementById("errorMsg").style.display = 'block';
        inputEmail.className = "error";
        return;
    }
    else{
        document.getElementById("errorMsg").style.display = 'none';
        inputEmail.className = "";
        document.getElementsByClassName("main-container")[0].style.display ='none';
        document.getElementsByClassName("success-msg")[0].style.display = 'block';
        
        document.getElementById("success-email").textContent=email;
    }
});
document.getElementById("dismiss").addEventListener("click",()=>{
    document.getElementsByClassName("main-container")[0].style.display ='flex';
    document.getElementsByClassName("success-msg")[0].style.display = 'none';
});