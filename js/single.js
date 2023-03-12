window.addEventListener('load',function(){
    let mylink=this.window.location.href;
    let url=new URL(mylink);
    let myid=url.searchParams.get('p_id')
    console.log(myid)
    let info=[]
    fetch(`http://localhost:2100/myapi/blog/${myid}`)
    .then((response)=>{
        return response.json()
    })
    .then(async (data)=>{
        info=await data.data
        this.document.getElementById('single_blog').innerHTML=`
            <div class="single_img myflex_center pt_20 pb_10">
                        <div class="pt_10">
                            <img src="${info.image}" alt="">
                        </div>
                    </div>

                    <div class="blog_news">
                        <div class="sub_title">
                            <p>${info.title}</p>
                        </div>
                        <div>
                            <p>
                            ${info.content}
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
                                <p>${info.likes.name.length}</p>
                            </div>
                            </div>

                            <div class="cmnt_btn myflex">
                                <div class="cmnt_img">
                                    <img src="images/cmnt.png" alt="">
                                </div>
                                <div>
                                    <p>${info.comment.length}</p>
                                </div>
                            </div>

                        </div>
                    </div>
        `
    })
    
})