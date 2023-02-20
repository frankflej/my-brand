window.addEventListener('load',function(){
    display_blogs();
})

const mypic=()=>{
    const myimg_input=document.getElementById('img_input').files[0];
    const myimg=document.getElementById('myimg_post')
    document.getElementById('myimg_post').style.display='block'
    const reader=new FileReader();
    reader.readAsDataURL(myimg_input);
    reader.addEventListener('load',function(){
        myimg.src=reader.result
    })
}
myall_post=[];


document.getElementById('save_post').addEventListener('click',function(e){

    e.preventDefault();
    let p_title=document.getElementById('post_title').value;
    let p_details=document.getElementById('post_details').value;
    let img_input=document.getElementById('img_input').value;
    let myimg=document.getElementById('myimg_post').src;
    let myobj={};
    if(localStorage.getItem('all_post')){
        myall_post=JSON.parse(localStorage.getItem('all_post'))
    }
    myobj.p_title=p_title;
    myobj.p_details=p_details;
    myobj.p_file=img_input
    myobj.p_img=myimg;
    myall_post.push(myobj);
    localStorage.setItem('all_post',JSON.stringify(myall_post))
    document.getElementById('post_title').value='';
    document.getElementById('post_details').value='';
    document.getElementById('img_input').value='';
    document.getElementById('myimg_post').src='';
    document.getElementById('myimg_post').style.display='none'
    display_blogs()
    location.reload();
})

const display_blogs=()=>{
    
    document.getElementById('all_blogs').innerHTML=''
    let blogs= [];
    if(localStorage.getItem('all_post')){
        blogs=JSON.parse(localStorage.getItem('all_post'))
        if(blogs != ''){
            let c=0;
            blogs.forEach((b)=>{
                document.getElementById('all_blogs').innerHTML+=`<div class="blog_details_dash blog_details">
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
        
                    <div class="read_more read_more_dash myflex_end myorange pt_20">
                
                        <div class="mydelete" data-num=${c} onclick='deleting()'>
                          <p>Delete</p>
                        </div>
                        
    
                        <div class="myupdate" data-num=${c} onclick='updating()'>
                          <p>Update</p>
                        </div>
                    </div>
                </div>
            </div>`
            c+=1;
            })
        }
        else{
        
        document.getElementById('all_blogs').innerHTML=`
        <div class='noitem'><h1>No Blogs</h1></div>
        `
        }
    }
   
}

const display_queries=()=>{
    document.getElementById('myqueries').innerHTML=''
    let queries= [];
    if(localStorage.getItem('mycmnts')){
        queries=JSON.parse(localStorage.getItem('mycmnts'))
        if(queries != ''){
            queries.forEach((b)=>{
                document.getElementById('myqueries').innerHTML+=`
                <tr>
                <td>${b.the_client_name}</td>
                <td>${b.the_client_email}</</td>
                <td>${b.the_client_msg}</</td>
            </tr>
                `
            })

        }else{
        document.getElementById('myqueries').innerHTML=`
        <div class='noitem'><h1>No queries</h1></div>
        `
    }
}
   
}

display_queries()

const updating=()=>{
    const update=document.getElementsByClassName('myupdate');
    const updateBtn=Array.from(update);
    updateBtn.forEach((u)=>{
        u.addEventListener('click',function(){
            
                mypages('dashboard_update');
                let myid=u.dataset.num
                myall_post=JSON.parse(localStorage.getItem('all_post'));
                for(let i=0;i<=myall_post.length;i++){
                    if(myid==i){
                       
                        document.getElementById('post_title_upd').value=`${myall_post[i].p_title}`
                        document.getElementById('post_details_upd').value=`${myall_post[i].p_details}`
                        document.getElementById('myimg_post_upd').src=`${myall_post[i].p_img}`
                    }
                }
                const update_btn=document.getElementsByClassName('upd');
                const upd_btn=Array.from(update_btn);
                upd_btn.forEach((n)=>{
                   n.addEventListener('click',function(){
                    if(n.id == 'cancel_upd'){
                        display_blogs();
                    }
                    else{
                        myall_post.splice(myid,1)
                        let myobj={};
                        myobj.p_title=document.getElementById('post_title_upd').value;
                        myobj.p_details=document.getElementById('post_details_upd').value;
                        myobj.p_file=document.getElementById('img_input_upd').value;
                        myobj.p_img=document.getElementById('myimg_post_upd').src;
                        myall_post.push(myobj);
                        localStorage.setItem('all_post',JSON.stringify(myall_post))
                        display_blogs();
                    }
                   })
                })
        })
})
}
const deleting=()=>{
    const deletes=document.getElementsByClassName('mydelete');
    const deleteBtn=Array.from(deletes);
    deleteBtn.forEach((d)=>{
        d.addEventListener('click',function(){
            let myid=d.dataset.num
            myall_post=JSON.parse(localStorage.getItem('all_post'));
            document.getElementById('confirmation').style.display='block';
            for(let i=0;i<=myall_post.length;i++){
                if(myid==i){
                       document.getElementById('confirmation').style.display='block';
                       const deletion=document.getElementsByClassName('deletion');
                       const del=Array.from(deletion)
                       del.forEach((n)=>{
                        n.addEventListener('click',function(){
                            if(n.id == 'delete_blog'){
                                myall_post.splice(myid,1)
                                localStorage.setItem('all_post',JSON.stringify(myall_post))
                                document.getElementById('confirmation').style.display='none';
                                display_blogs();
                                
                            }
                            else{
                                document.getElementById('confirmation').style.display='none';
                                
                            }
                            location.reload();
                            
                        })

                       })
                    }
                    
            }
        })
    })
}
const mypages=(x)=>{
    let clicked=document.getElementById(x)
    const all_pages=['all_dashboard_post','all_dashboard_query','dashboard_new_post','dashboard_update']
    all_pages.forEach((n)=>{
    if(clicked.id == n){
        document.getElementById(`${clicked.id}`).style.display='block'
    }else{
        document.getElementById(`${n}`).style.display='none'
    }
})




}
