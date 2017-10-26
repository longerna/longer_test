$(function(){
	bg.init();
});

var bg = {
	init:function(){
		$('body').css('background-image','url(' + bg.time_pic() + ')');
	},
	time_pic:function(){
		var now = new Date();
		var h = now.getHours();
		//dawn
		if(h >= 5 && h < 7){
			return './images/dawn/' + bg.index_pic();
		}
		//morning
		else if(h >= 7 && h < 11){
			return './images/morning/' + bg.index_pic();
		}
		//noon
		else if(h >= 11 && h < 14){
			return '';
		}
		//afternoon
		else if(h >= 14 && h < 18){
			return '';
		}
		//evening
		else if(h >= 18 && h < 23){
			return '';
		}
		//night
		else{
			return '';
		}
	},
	index_pic:function(){
		return (parseInt(Math.random() * 10) % 3 + 1) + '.jpg';
	}
}