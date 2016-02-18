window.onload=
    function(){
        //var y1=document.getElementById("h1");
        //var y2=document.getElementById("p1");
        //var y3=document.getElementById("p2");
        //var y4=document.getElementById("lh");
        //var y5=document.getElementById("qr");
        //y1.style.visibility="hidden";
        //y2.style.visibility="hidden";
        //y3.style.visibility="hidden";
        //y4.style.visibility="hidden";
        //y5.style.visibility="hidden";
        try{
        var louhao=localStorage.getItem("louhao");
        var dongxi=localStorage.getItem("dongxi");
        var name=localStorage.getItem("name");
        if(louhao==null){
            var y1=document.getElementById("h1");
            var y2=document.getElementById("p1");
            var y3=document.getElementById("p2");
            var y4=document.getElementById("lh");
            var y5=document.getElementById("qr");
            var y6=document.getElementById("h2");
            var y7=document.getElementById("b1");
            var y8=document.getElementById("b2");
            var y9=document.getElementById("line1");
            var y10=document.getElementById("line2");
            var y11=document.getElementById("sc");
            y11.style.visibility="hidden";
            y1.style.visibility="hidden";
            y2.style.visibility="hidden";
            y3.style.visibility="hidden";
            y4.style.visibility="hidden";
            y5.style.visibility="hidden";
            y6.style.visibility="hidden";
            y7.style.visibility="hidden";
            y8.style.visibility="hidden";
            y9.style.visibility="hidden";
            y10.style.visibility="hidden";

        }else{
            var nameinput=document.getElementById("nameinput");
            nameinput.value=name;
            if(dongxi=="河西"){
                jihuo("1");
                jinyong("河西");
                var m=document.getElementById("lh");
                var nownumber=louhao-1;
                m.selectedIndex=nownumber;

            }
            if(dongxi=="河东"){
                jihuo("2");
                jinyong("河东");
                var m=document.getElementById("lh");
                var nownumber=louhao-7;
                m.selectedIndex=nownumber;

            }
        }
        }catch(e){

        }
    }

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

    localStorage.setItem("dongxi",vv);
    jinyong(vv);
    xuanze();
}
function jinyong(i){
    var id=document.getElementById("lh");
    var y1=document.getElementById("h1");
    var y2=document.getElementById("p1");
    var y3=document.getElementById("p2");
    var y5=document.getElementById("qr");
    var y11=document.getElementById("sc");
    var y9=document.getElementById("line2");
    y1.style.visibility="visible";
    y2.style.visibility="visible";
    y3.style.visibility="visible";
    y5.style.visibility="visible";
    id.style.visibility="visible";
    y9.style.visibility="visible";
    y11.style.visibility="visible";

    if(i=="河西"){
        y2.innerHTML="河西";
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
        y2.innerHTML="河东";
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
function namechange(){
    var name=document.getElementById("nameinput").value;
    localStorage.setItem("name",name);
    var y6=document.getElementById("h2");
    var y7=document.getElementById("b1");
    var y8=document.getElementById("b2");
    var y9=document.getElementById("line1");
    y9.style.visibility="visible";
    y8.style.visibility="visible";
    y7.style.visibility="visible";
    y6.style.visibility="visible";
}