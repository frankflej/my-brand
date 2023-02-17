const email_name="frankflej@gmail.com";
const password_pass='frankfrank';
localStorage.setItem('email_name',email_name);
localStorage.setItem('password_pass',password_pass);
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
        if(myemail == localStorage.getItem('email_name') && mypassword == localStorage.getItem('password_pass') ){
            location.href='dashboard.html'
            myemail='';
            mypassword='';
        }
        else{
            alert('Wrong credentials')
        }
    }
})
window.addEventListener("scroll",function(){
    const myheight=this.scrollY
    const mywidth=screen.availWidth
    
    if(myheight>613 && mywidth>768){
        document.getElementById("h_navbar").classList.add('myposition')
        document.getElementById("h_mylogin").style.display=`none`
        document.getElementById("login_2").style.display=`block`
        
    }
    else{
        document.getElementById("h_navbar").classList.remove('myposition')
        document.getElementById("h_mylogin").style.display=`block`
        document.getElementById("login_2").style.display=`none`
    }
    
    if(mywidth<770 && myheight>500){
        this.document.getElementById("mymenu_bar").style.backgroundColor="#eee";
        this.document.getElementById("line_1").style.backgroundColor="black";
        this.document.getElementById("line_2").style.backgroundColor="black";
        this.document.getElementById("line_3").style.backgroundColor="black";   
    }
    else{
        this.document.getElementById("mymenu_bar").style.backgroundColor="transparent";
        this.document.getElementById("line_1").style.backgroundColor="#eee";
        this.document.getElementById("line_2").style.backgroundColor="#eee";
        this.document.getElementById("line_3").style.backgroundColor="#eee";
    }
    function mynav_bar(){
        if(myheight>10){
            document.getElementById('home_nav').style.color='black'
        }
        else{
            document.getElementById('home_nav').style.color='#fa4b63'
        }
        if (myheight>10 && myheight<1000){
            document.getElementById('about_nav').classList.add('myorange')
        }
        else{
            document.getElementById('about_nav').classList.remove('myorange')
        }
        if (myheight>1000 && myheight<1450){
            document.getElementById('skill_nav').classList.add('myorange')
        }
        else{
            document.getElementById('skill_nav').classList.remove('myorange')
        }

        if (myheight>1450 && myheight<2300){
            document.getElementById('portofolio_nav').classList.add('myorange')
        }else{
            document.getElementById('portofolio_nav').classList.remove('myorange')
        }
        if (myheight>2300 && myheight<3000){
            document.getElementById('blog_nav').classList.add('myorange')
        }
        else{
            document.getElementById('blog_nav').classList.remove('myorange')
        }
        if(myheight>3000){
            document.getElementById('contact_nav').classList.add('myorange')
        }else{
            document.getElementById('contact_nav').classList.remove('myorange')
        }
        
    }
    mynav_bar()
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



