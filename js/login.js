const email_name="frankflej@gmail.com";
const password_pass='frankfrank';
localStorage.setItem('email_name',email_name);
localStorage.setItem('password_pass',password_pass);
localStorage.removeItem('online')
document.getElementById('mylogin').addEventListener('click',function(e){
    e.preventDefault()
    const myemail=document.getElementById('login_email').value
    const mypassword=document.getElementById('mypassword').value
    const pss_err=document.getElementById('p_error')
    const em_err=document.getElementById('em_error')
    let msg="";
    if(myemail.trim()=="" || mypassword.trim()==""){
        if(myemail.trim()==""){
            
            em_err.style.visibility='unset';
            em_err.innerText=msg
            return
        }
        if(mypassword.trim()==""){
            pss_err.style.visibility='unset';
            pss_err.innerText=msg;
            return
        }
    }else{
        if(myemail == localStorage.getItem('email_name') && mypassword == localStorage.getItem('password_pass') ){
            localStorage.setItem('online',1)
            location.href='dashboard.html'
            myemail='';
            mypassword='';
        }
        else{
            msg='Email or password incorrect'
            pss_err.style.visibility='unset';
            pss_err.innerText=msg;
            return
        }
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

// Login local storage



