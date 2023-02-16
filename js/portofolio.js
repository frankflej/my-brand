document.getElementById('mysubmit').addEventListener('click',function(e){
    e.preventDefault();
    
    const myemail=document.getElementById('client_email').value
    const myname=document.getElementById('client_name').value
    const mymsg=document.getElementById('client_msg').value
    const em_err=document.getElementById('email_error')
    const msg_err=document.getElementById('msg_error')
    const name_error=document.getElementById('name_error')
    
    if(myemail.trim()=="" || myname.trim()=="" || mymsg.trim()==""){
        if(myname.trim()==""){
            name_error.style.visibility='unset';
            return
        }
        if(myemail.trim()==""){
            em_err.style.visibility='unset';
            return
        }
        
        if(mymsg.trim()==""){
            msg_error.style.visibility='unset';
            return
        }
    }else{
        document.getElementById('client_email').value="";
        document.getElementById('client_name').value="";
        document.getElementById('client_msg').value="";
    }
})
setInterval(function(){
    const email=document.getElementById('client_email').dataset.err;
    const name=document.getElementById('client_name').dataset.err;
    const msg=document.getElementById('client_msg').dataset.err;
    
    if(email=='pass' && name=='pass' && msg=='pass'){
        document.getElementById('mysubmit').style.color='white'
        document.getElementById('mysubmit').style.backgroundColor='#fa4b63'
        
    }
    else{
        document.getElementById('mysubmit').style.color='rgba(255, 255, 255, 0.321)'
        document.getElementById('mysubmit').style.backgroundColor='#fa4b622e'
    }
},500)
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