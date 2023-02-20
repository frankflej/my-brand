window.addEventListener('load',function(){
this.document.getElementById('myload').style.display='none'
})
document.getElementById('mysubmit').addEventListener('click',function(e){
    e.preventDefault();
    
    const myemail=document.getElementById('client_email')
    const myname=document.getElementById('client_name')
    const mymsg=document.getElementById('client_msg')
    const em_err=document.getElementById('email_error')
    const msg_err=document.getElementById('msg_error')
    const name_error=document.getElementById('name_error')
    
    if(myemail.value.trim()=="" || myname.value.trim()=="" || mymsg.value.trim()==""){
        if(myname.trim()==""){
            name_error.style.visibility='unset';
            return
        }
        if(myemail.trim()==""){
            em_err.style.visibility='unset';
            return
        }
        
        if(mymsg.trim()==""){
            mymsg_error.style.visibility='unset';
            return
        }
    }else{
        if(myemail.dataset.err=="error" || myname.dataset.err=="error" || mymsg.dataset.err=="error"){
            return 
        }
        else{
            queries();
            myemail.value='';
            myname.value='';
            mymsg.value='';
        }
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
const display_blogs=()=>{
    document.getElementById('home_all_blogs').innerHTML=''
    const blogs=JSON.parse(localStorage.getItem('all_post')) || [];
    if(blogs != ''){
        blogs.forEach((b) => {
           document.getElementById('home_all_blogs').innerHTML+=`
           <div class="blog_details ">
                        <div class="blog_img">
                            <img src="${b.p_img}" alt="">
                        </div>
    
                        <div class="blog_news">
                            <div class="sub_title">
                                <p>${b.p_title}</p>
                            </div>
                            <div>
                                <p>
                                ${b.p_details}
                                </p>
                            </div>
                            <div class="like_section myflex pt_20">
    
                                <div>
                                    <p>By: Admin</p>
                                </div>
    
                                <div class="myflex mylikes">
                                    
                                   <div class="like_btn_section myflex">
                                        <div class="red_heart ">
                                        <img src="images/liked.png" alt="">
                                        </div>
                                        <div class="white_heart">
                                        <img src="images/unliked.png" alt="">
                                        </div>
                                   </div>
                                   <div>
                                    <p>10</p>
                                </div>
                                </div>
    
                                <div class="cmnt_btn myflex">
                                    <div class="cmnt_img">
                                        <img src="images/cmnt.png" alt="">
                                    </div>
                                    <div>
                                        <p>233</p>
                                    </div>
                                </div>
    
                            </div>
                            <div class="read_more myorange pt_20">
                                <p>Read more...</p>
                            </div>
                        </div>
                    </div>
           `
           
        });
    }
}
display_blogs();
const queries=()=>{
    const the_client_email=document.getElementById('client_email').value;
    const the_client_name=document.getElementById('client_name').value;
    const the_client_msg=document.getElementById('client_msg').value;
    const myobj={};
    myobj.the_client_email=the_client_email;
    myobj.the_client_name=the_client_name;
    myobj.the_client_msg=the_client_msg;
    cmnts=[];
    if(localStorage.getItem('mycmnts')){
        cmnts=JSON.parse(localStorage.getItem('mycmnts'))
    }
    cmnts.push(myobj);
    localStorage.setItem('mycmnts',JSON.stringify(cmnts));
}
 