window.onload=
	function () {
		Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");

		var ts=document.getElementById("tishi");
		ts.style.visibility="hidden";

        var url2=localStorage.getItem("linkurl");
		if(url2==null){
			var y1=document.getElementById("queren");
			y1.style.visibility="hidden";
			sessionStorage.setItem("shifoushangchuan2","f");

		}else{
			var tu=document.getElementById("imgs");
			tu.src=url2;
			var y1=document.getElementById("queren");
			y1.style.visibility="visible";
			sessionStorage.setItem("shifoushangchuan2","t");


			var CZ = Bmob.Object.extend("linkurl");
			var query = new Bmob.Query(CZ);
// 查询所有数据
			query.find({
				success: function(results) {

					for (var i = 0; i < results.length; i++) {
						var object = results[i];
						if(results[i].get('name')==localStorage.getItem('name')){
							sessionStorage.setItem("shifoushangchuan2","t");
							var id=results[i].id;
							sessionStorage.setItem("scid2",id);
							break;
							//shangchuan();
						}else{
							sessionStorage.setItem("shifoushangchuan2","f");
							//var TJ = Bmob.Object.extend("users");
							//var tj = new TJ();
							//tj.set("name", localStorage.getItem("name"));
							//tj.set("phone",localStorage.getItem("userphone"));
							//tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
							//tj.save(null, {
							//    success: function(tj) {
							//
							//    },
							//    error: function(gameScore, error) {
							//
							//    }
							//});
						}
					}
				},
				error: function(error) {
					//alert("查询失败: " + error.code + " " + error.message);
				}
			});







		}





	}
function dianji() {
	//判断上传文件的类型
	filepath = $("#file").val();
	var extStart = filepath.lastIndexOf(".");
	var ext = filepath.substring(extStart, filepath.length).toUpperCase();
	if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
		alert("图片限于png,gif,jpeg,jpg格式");
		//return false;
	}
	//正在上传
	$("#loading_up").show();
	var ts=document.getElementById("tishi");
	ts.style.visibility="visible";
	//使用jquery.form插件异步提交表单，详细内容参考官方文档
	$("#upform").ajaxForm(function (data, status) {
		var imginfo = data;
		//获取图片宽度
		var img_width = imginfo.width;
		//获取图片高度
		var img_height = imginfo.height;

		//如果图片像素大于600px，则等比例缩放
		if (img_width >= 600) {
			var b = img_width / 580;		//计算缩小倍数
			img_width = img_width / b;
			img_height = img_height / b;
		}
		if (status == "success") {
            var a=imginfo.linkurl;
            localStorage.setItem("linkurl",a);
			//document.getElementById("linkurl").value = imginfo.linkurl;
			//document.getElementById("htmlurl").value = imginfo.htmlurl;
			var ts=document.getElementById("tishi");
			ts.style.visibility="hidden";
			//$("#show_img").src = data.linkurl;

			var tu=document.getElementById("imgs");
			tu.src=data.linkurl;
			var y1=document.getElementById("queren");
			y1.style.visibility="visible";



			tongji();





		}
		else {
			alert('上传错误！请重新上传图片。');
			var ts=document.getElementById("tishi");
			ts.style.visibility="hidden";
		}
	});
}

function tiaozhuan(){
	window.location.href="index.html";
}

function tongji(){
	//var TJ = Bmob.Object.extend("linkurl");
	//var tj = new TJ();
	//tj.set("name", localStorage.getItem("name"));
	//tj.set("linkurl", localStorage.getItem("linkurl"));
	//tj.set("phone",localStorage.getItem("userphone"));
	//tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
	//tj.save(null, {
	//	success: function(tj) {
    //
	//	},
	//	error: function(gameScore, error) {
    //
	//	}
	//});
	if(sessionStorage.getItem("shifoushangchuan2")=="t"){
		shangchuan();
	}
	if(sessionStorage.getItem("shifoushangchuan2")=="f"){
		var TJ = Bmob.Object.extend("linkurl");
		var tj = new TJ();
		tj.set("name", localStorage.getItem("name"));
		tj.set("linkurl", localStorage.getItem("linkurl"));
		tj.set("phone",localStorage.getItem("userphone"));
		tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
		tj.save(null, {
			success: function(tj) {
				//alert("数据同步成功1");
			},
			error: function(gameScore, error) {

			}
		});
	}

}

function shangchuan(){
	var shangchuan = Bmob.Object.extend("linkurl");
	var query = new Bmob.Query(shangchuan);
	var scid=sessionStorage.getItem("scid2");
	query.get(scid, {
		success: function(sc) {
			sc.set("linkurl", localStorage.getItem("linkurl"));
			sc.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
			sc.save();
			//alert("数据同步成功2");

			// The object was retrieved successfully.
		},
		error: function(object, error) {

		}
	});
}