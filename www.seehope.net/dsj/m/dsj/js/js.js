// JavaScript Document
$(function(){
	var data=new Date();
	 var aYear=data.getFullYear();
	 $('.zg_yetime').html(aYear)

	/*��Դ��*/
		$(".from").val(window.location.pathname+window.location.search);
})