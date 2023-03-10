
document.getElementById('signUp').addEventListener('submit',(e)=>{
    e.preventDefault();
    
    // Getting submitted values
    const userName=document.getElementById('signup_name').value;
    const userEmail=document.getElementById('signup_email').value;
    const userPassword=document.getElementById('signup_password').value;
    const data={username:userName,email:userEmail,password:userPassword};

    // Sending data in our backend
    fetch('http://localhost:2100/myapi/signup',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
})
