document.getElementById('mylogin').addEventListener('click',function(e){
    e.preventDefault()
    
    const myemail=document.getElementById('login_email').value
    const mypassword=document.getElementById('mypassword').value
    const pss_err=document.getElementById('p_error')
    const em_err=document.getElementById('em_error')
    
    if(myemail.trim()=="" || mypassword.trim()==""){
        if(myemail.trim()==""){
            em_err.style.visibility='unset';
            return
        }
        if(mypassword.trim()==""){
            pss_err.style.visibility='unset';
            return
        }
    }else{
        myemail.value="";
        mypassword.value="";
        location.href="dashboard.html"
    }
})

setInterval(function(){
    const email=document.getElementById('login_email').dataset.err;
    const password=document.getElementById('mypassword').dataset.err;
    
    if(email=='pass'  && password=='pass'){
        document.getElementById('mylogin').style.color='white'
        document.getElementById('mylogin').style.backgroundColor='#fa4b63'
    }
    else{
        document.getElementById('mylogin').style.color='rgba(255, 255, 255, 0.321)'
        document.getElementById('mylogin').style.backgroundColor='#fa4b622e'
    }
},500)