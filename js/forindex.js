/**
 * Created by zhangyue on 16/2/18.
 */
window.onload=
    function () {


        //localStorage.clear();
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
        if(localStorage.getItem("gx6.7")==null){
            alert("更新公告:\n v6.7:\n" +
                "1.解决了无法上传校园卡的bug\n"+
                    "2.恢复强制上传校园卡"
                );
            localStorage.setItem("gx6.7","t");
        }
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


function check1(){

        if(localStorage.getItem("yuedu")=="t") {
            var m = localStorage.getItem("louhao");
            if (m == null) {
                alert("请先输入用户信息");
                window.location.href = "choose.html";

            } else {
                window.location.href = "quhuoxg.html";
            }
        }else{
            alert("请先阅读并同意服务详情");
            window.location.href="fuwuxiangqing.html";
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

function check2() {
    if (localStorage.getItem("yuedu") == "t") {
        var m = localStorage.getItem("louhao");
        if (m == null) {
            alert("请完善用户信息");
            window.location.href = "choose.html";

        } else {

            var n = localStorage.getItem("linkurl");
            if (n == null) {

                if(confirm("检测到你没有上传校园卡,请上传"))

                {

                    window.location.href="shangchuan.html";

                }

                else

                {

                 //window.location.href="quhuohj.html";

                }


            } else {
                window.location.href = "quhuohj.html";
            }
        }
    }
    else
        {
            alert("请先阅读并同意服务详情");
            window.location.href = "fuwuxiangqing.html";
        }

}
function check3(){

window.location.href="dingdan.html";


}

