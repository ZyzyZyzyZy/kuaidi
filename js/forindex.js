/**
 * Created by zhangyue on 16/2/18.
 */
window.onload=
    function () {
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");


        var GameScore = Bmob.Object.extend("danhao");
        var query = new Bmob.Query(GameScore);
        query.get("2a80a6d4dc", {
            success: function (object) {
                // The object was retrieved successfully.
                localStorage.setItem("danhao", object.get("dh"));
            },
            error: function (object, error) {
                alert("query object fail");
            }
        });
          songhuo();

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