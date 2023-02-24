window.addEventListener('load',function(){
    let mylink=this.window.location.href;
    let url=new URL(mylink);
    let myid=url.searchParams.get('p_id')
    let all_blogs=JSON.parse(localStorage.getItem('all_post'))
    console.log(all_blogs)
    this.document.getElementById('single_blog').innerHTML=`
            <div class="single_img myflex_center pt_20 pb_10">
                        <div class="pt_10">
                            <img src="${all_blogs[myid].p_img}" alt="">
                        </div>
                    </div>

                    <div class="blog_news">
                        <div class="sub_title">
                            <p>${all_blogs[myid].p_title}</p>
                        </div>
                        <div>
                            <p>
                            ${all_blogs[myid].p_details}
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
                    </div>
        `
})