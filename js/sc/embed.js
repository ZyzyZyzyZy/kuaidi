function dianji() {
	//判断上传文件的类型
	filepath = $("#file").val();
	var extStart = filepath.lastIndexOf(".");
	var ext = filepath.substring(extStart, filepath.length).toUpperCase();
	if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
		alert("图片限于png,gif,jpeg,jpg格式");
		return false;
	}
	//正在上传
	$("#loading_up").show();
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

			//document.getElementById("linkurl").value = imginfo.linkurl;
			//document.getElementById("htmlurl").value = imginfo.htmlurl;

			//$("#show_img").src = data.linkurl;
			var tu=document.getElementById("imgs");
			tu.src=data.linkurl;

		}
		else {
			alert('上传错误！请重新上传图片。');
		}
	});
}
