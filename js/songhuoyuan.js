/**
 * Created by zhangyue on 16/2/19.
 */
var dongxi=localStorage.getItem("dongxi");
var louhao=localStorage.getItem("louhao");
var name=localStorage.getItem("name");
var quhuoma=localStorage.getItem("quhuoma");
var guihao=localStorage.getItem("guihao");
var beizhu=localStorage.getItem("beizhu");
var danhao=localStorage.getItem("danhao");
var shy;
var shyphone;
var shyid;

songhuo();
function songhuo(){
    if(dongxi=="河西"){
        if(louhao<7) {
            shy = "窦照通";
            shyphone = "15201986157";
            shyid = "DouZhaoTong"
        }else{
            shy = "张越";
            shyphone = "18149763032";
            shyid = "ZhangYue"
        }

    }
    if(dongxi=="河东") {

        if(louhao<21){
            shy="柏朝玲";
            shyphone="15201965638";
            shyid="BaiZhaoLin";
        }else{
            shy="马秀云";
            shyphone="15201963031";
            shyid="MaXiuYun";
        }
    }

    localStorage.setItem("shy",shy);
    localStorage.setItem("shyid",shyid);
    localStorage.setItem("shyphone",shyphone);
}