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
        shy="张越";
        shyphone="15201966695";
        shyid="ZhangYue"
    }
    if(dongxi=="河东"){
        if(louhao<21){
            shy="董婧";
            shyphone="13046625806";
            shyid="DongJing"
        }else{
            shy="秦盼吉";
            shyphone="18217400015";
            shyid="QinPanJi";
        }
    }


    localStorage.setItem("shy",shy);
    localStorage.setItem("shyid",shyid);
    localStorage.setItem("shyphone",shyphone);
}