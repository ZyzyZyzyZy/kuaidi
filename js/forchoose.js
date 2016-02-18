function jihuo(j1){
    var b1=document.getElementById("b1");
    var b2=document.getElementById("b2");
   if(j1=="1"){
      b1.className="btn btn-primary btn-lg";
      b2.className="btn btn-default btn-lg";
   }
   if(j1=="2"){
      b1.className="btn btn-default btn-lg";
      b2.className="btn btn-primary btn-lg";
   }
}
function x1(v1){
    var weizhi1=document.getElementById("dongxi");
    var vv=v1;
    weizhi1.innerHTML=vv;
    localStorage.setItem("dongxi",vv);
    jinyong(vv);
    xuanze();
}
function jinyong(i){
    if(i=="河西"){
        var id=document.getElementById("lh");

        for(var q= 1;q<id.options.length+1;i++){
            id.options[0]=null;
        }
        for(var a= 1;a<8;a++)
        {
            var neirong ="    "+a.toString();
            id.options.add(new Option(neirong, a.toString()));
        }

    }
    if(i=="河东"){
        var id=document.getElementById("lh");
        for(var q= 1;q<id.options.length+1;i++){
            id.options[0]=null;
        }
        for(var a= 7;a<27;a++)
        {
            var neirong =a.toString();
            id.options.add(new Option(neirong, a.toString()));
        }

    }


}
function xuanze(){
    var id=document.getElementById("lh");
    var neirong=id.value;
    localStorage.setItem("louhao",neirong);
}
