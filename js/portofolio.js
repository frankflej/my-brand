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
localStorage.removeItem('online')
const display_blogs=()=>{
    document.getElementById('home_all_blogs').innerHTML=''
    fetch('http://localhost:2100/myapi/blog')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        const blogs=data.data
     if(blogs != ''){
        blogs.forEach((b,index) => {
            let myinfo=(b.content).split(' ')
                let info=[]
                for(let i=0 ;i<=myinfo.length;i++){
                    if(i<40){
                        info.push(myinfo[i])
                    }
                }

                info=info.join(' ')
                document.getElementById('home_all_blogs').innerHTML+=`
           <div class="blog_details ">
                        <div class="blog_img">
                            <img src="${b.image}" alt="">
                        </div>
    
                        <div class="blog_news">
                            <div class="sub_title">
                                <p>${b.title}</p>
                            </div>
                            <div>
                                <p>
                                ${info}...<span ><a href="single_blog.html?p_id=${b._id}" class="myorange"> Read more>></a></span>
                                </p>
        
                            </div>
                            <div class="like_section myflex pt_20" id=''>
    
                                <div>
                                    <p>By: Admin</p>
                                </div>
    
                                <div class="myflex mylikes" onclick='liking(event)'>
                                    
                                   <div class="like_btn_section myflex" data-pid=${b._id}' >
                                   <div id='liking_${b._id}'>

                                   </div>
                                   </div>
                                   <div>
                                    <p id='like_${b.Id}'>${b.likes.name.length}</p>
                                   </div>
                                </div>
    
                                <div class="cmnt_btn myflex" >
                                    <div class="cmnt_img">
                                        <img src="images/cmnt.png" alt="">
                                    </div>
                                    <div>
                                        <p id='cmnt_count'>${b.comment.length}</p>
                                    </div>
                                </div>
    
                            </div>
                            <div class='user_cmnt'>
                            <div>
                            <textarea name="" class='' cols="45" rows="1" placeholder="Leave a comment" id=${b._id}></textarea>
                            </div>
                            <div class="cmnt_btns mywhite" onclick='btn(event)'>
                            <p data-pid=${b._id}>Send</p>
                            </div>
                            </div>
                            
                        </div>
                    </div>
           `
        //    like_hide(`${b.id}`)
            })
        }
        });
    
}
function shading_like(){
    fetch('http://localhost:2100/myapi/blog')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        const blogs= data.data
        blogs.forEach((blog)=>{
            if(blog.likes.name.includes(localStorage.getItem('email'))){
                // console.log("hereeeee")
                document.getElementById(`liking_${blog._id}`).innerHTML=`
                <svg  onclick='liking(event)' class='mylike_hearts'  data-like=''  data-pid=${blog._id} xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="transparent" class="w-6 h-6">
                <path  stroke-linecap="round" id='like_${blog._id}'  data-pid=${blog._id}  stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                `
            }
            else{
                // console.log('not here')
                document.getElementById(`liking_${blog._id}`).innerHTML=`
                <svg onclick='liking(event)' class='mylike_hearts'  data-like=''  data-pid=${blog._id} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path  id='unlike_${blog._id}' data-pid=${blog._id} stroke-linecap="round"   stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                `
            }
        })
    })
}
display_blogs();
shading_like()
const queries=()=>{
    const clientname=document.getElementById('client_name').value;
    const clientemail=document.getElementById('client_email').value;
    const clientmessage=document.getElementById('client_msg').value;
    const myobj={clientname,clientemail,clientmessage};
    fetch('http://localhost:2100/myapi/query',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(myobj)
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    
}
 
function btn(e){
    const post_id=e.target.dataset.pid
    localStorage.setItem('post_id',post_id)
    const cookie=document.cookie.split('=')[1];
    
   if(!cookie){
    alert("First log in")
    location.href='./login.html?action=true'
   }else{
       const id=localStorage.getItem('id')
       const p_id=localStorage.getItem('post_id')
       const message=document.getElementById(`${p_id}`).value
       const data={message}
       document.getElementById(`${p_id}`).value=''
       console.log(data)
    console.log(p_id)
    fetch(`http://localhost:2100/myapi/blog/${p_id}/comments`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'credentials':`${cookie}`
        },
        body:JSON.stringify(data)
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
        location.reload()
    }).catch((error)=>{
        console.log(error)
    })
   }
}

// function liking(e){
//     let cookies=document.cookie.split('=')[1]
//     const pid=e.target.dataset.pid
//     const clicked=e.target.id
//     console.log(pid)
// if(cookies==undefined){
// alert('First log in')
// location.href='./login.html?action=true'

// }else{
   

// fetch(`http://localhost:2100/myapi/blog/${pid}`)
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
    // console.log('data')
//     const loggedin=localStorage.getItem('email')
//     const allusersliked=data.data.likes.name
//     let cookies=document.cookie.split('=')[1]
//     if(!allusersliked.includes(loggedin)){
//         document.getElementById(clicked).setAttribute('fill','red')
//         document.getElementById(`like_${pid}`).innerText=data.data.likes.name.length+1
//         fetch(`http://localhost:2100/myapi/blog/${pid}/like`,{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json',
//                 'credentials':`${cookies}`
//             }
//         }).then((response)=>{
//             return response.json()
//         }).then((data)=>{
//             console.log(data.message)
            
//         })

//     }
//     else{
//         document.getElementById(clicked).setAttribute('fill','red')
//         document.getElementById(`like_${pid}`).innerText=data.data.likes.name.length-1
//         fetch(`http://localhost:2100/myapi/blog/${pid}/like`,{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json',
//                 'credentials':`${cookies}`
//             }
//         }).then((response)=>{
//             return response.json()
//         }).then((data)=>{
//            console.log(data.message)
            
//         })
//     }
// })
// }
// }

function liking(e){
    let cookies=document.cookie.split('=')[1]
        const pid=e.target.dataset.pid
        const clicked=e.target.id
        
        if(cookies==undefined){
            alert('First log in')
            location.href='./login.html?action=true'
        }
        else{
        
        document.getElementById(clicked).addEventListener('click',function(){
            fetch(`http://localhost:2100/myapi/blog/${pid}/like`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'credentials':`${cookies}`
                }

            })
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                console.log(data.message)
                // shading_like()
            })
            .catch((error)=>{
                console.log(error)
            })
        })
    }
   
}


const locate_user=()=>{
    const cookie=document.cookie.split('=')[1];
    if(cookie){
        document.getElementById('locate_user').href='./dashboard.html'
    }
    else{
        document.getElementById('locate_user').href='./login.html'
    }
}