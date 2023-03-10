const email_name="frankflej@gmail.com";
const password_pass='frankfrank';

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
        const data={email:myemail,password:mypassword}
        fetch('http://localhost:2100/myapi/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            const token=data.token
            if(token){
                document.cookie=`token=${token}; Path=/;`
                location.href="./dashboard.html"
            }
            else{
                return console.log("Wrong credentials")
            }
        })
    }
})

const btn_check=()=>{
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
}
setInterval(function(){
  btn_check()
},500) 

// Login local storage



