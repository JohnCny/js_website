//��������div�л�
function change_div(obj,id){
	var list=document.getElementById("gywm-list").getElementsByTagName("li");
	for(i=0;i<list.length;i++){
		list[i].className="";
	}
	obj.className="active";
	$(".right").hide();
	$("#"+id).show();
}
//��ʾ������Ϣ
function show(id){	
	$(".right").hide();
	$("#"+id).show();
}