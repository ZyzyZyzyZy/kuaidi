/**
 * Created by zhangyue on 16/2/18.
 */
window.onload=
    function () {


        //localStorage.clear();
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
        if(localStorage.getItem("gx7.1")==null){
            alert("更新公告:\n v7.1:\n" +
                "1.修改了信息上传逻辑,修补了直接按返回首页信息不保存的bug\n"


                );
            localStorage.setItem("gx7.1","t");
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
            var n2=localStorage.getItem("name");
            var n3=localStorage.getItem("yhid");
            if (m == null || n2==null ||n3==null) {
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
        var n2=localStorage.getItem("name");
        var n3=localStorage.getItem("yhid");
        if (m == null || n2==null ||n3==null) {
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

