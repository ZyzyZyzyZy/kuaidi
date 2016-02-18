/**
 * Created by zhangyue on 16/2/18.
 */
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