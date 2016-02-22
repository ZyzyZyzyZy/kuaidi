/**
 * Created by zhangyue on 16/2/18.
 */
window.onload=
    function () {


        //localStorage.clear();
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
        if(localStorage.getItem("yuedu")==null){
            alert("第一次进入系统,请先阅读服务详情");
            window.location.href="fuwuxiangqing.html";
        }

        var GameScore = Bmob.Object.extend("danhao");
        var query = new Bmob.Query(GameScore);
        query.get("19f10b7978", {
            success: function (object) {
                // The object was retrieved successfully.
                localStorage.setItem("danhao", object.get("dh"));
            },
            error: function (object, error) {
                alert("query object fail");
            }
        });
          songhuo();





        //if(localStorage.getItem("yuedu")==null){
        //    alert("第一次进入系统,请先阅读服务详情");
        //    window.location.href="fuwuxiangqing.html";
        //}

    }


function check(a){
    if(a=="1"){
        var m=localStorage.getItem("louhao");
        if(m==null){







            alert("请先输入用户信息");
            window.location.href="choose.html";

        }else{
            window.location.href="quhuoxg.html";
        }
     //if(a=="2"){
     //    var n=localStorage.getItem("linkurl");
     //    if(n==null){
     //        alert("请先上传校园卡");
     //        window.location.href="shangchuan.html";
     //    }else{
     //        window.location.href="quhuohj.html";
     //    }
     //}
    }
}

function check2(){
    var n=localStorage.getItem("linkurl");
    if(n==null){
        alert("请先上传校园卡");
        window.location.href="shangchuan.html";
    }else{
        window.location.href="quhuohj.html";
    }
}

function check3(){

window.location.href="dingdan.html";


}