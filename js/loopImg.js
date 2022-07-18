
let photos = document.getElementsByClassName('photos')[0]
let loopPhoto = document.getElementsByClassName('loop_photo')[0]
let loopdots =document.getElementsByClassName('dots_item')
let arrow = document.getElementsByClassName('jt')
//默认偏移
let newLeft = -540;
let inil = -540

let prevLeft = 0
let timer = null
//获取当前所有的index绑定到左右按钮
let currentIdx = 0

//底部小圆点绘制，同时需要修改掉当前的index
function setDots(ctr,a) {
	currentIdx = a 
	
	for(let i=0;i<ctr.length;i++) {
				ctr[i].classList.remove('on')
	}
	ctr[a].classList.add('on')
}

function autoPlay() {
    timer=setInterval(function(){
    	currentIdx = Math.floor(newLeft/inil)-1
        if(newLeft <= -2700){
            newLeft = 0;
        }else{
            newLeft = parseInt(photos.style.left) - 20;
        }
        photos.style.left = newLeft + 'px';
        if(currentIdx==-1) currentIdx = 4
 		setDots(loopdots,currentIdx)
    },50)
}

//开启定时器，自动播放
autoPlay()

//暂停
loopPhoto.onmouseenter = function() {
	clearInterval(timer)
	var index=Math.floor(parseInt(photos.style.left)/inil)
	currentIdx= index-1
	prevLeft = index*inil
	
	//左右按钮区点击事件
	arrow[1].onclick = function() {
			prevLeft+=inil
			currentIdx++
			if(prevLeft <=-2700) {
				prevLeft=0
			}
			photos.style.left = prevLeft + 'px';
			if(currentIdx==5) currentIdx = 0
			setDots(loopdots,currentIdx)
	}
	
	arrow[0].onclick = function() {
			prevLeft-=inil
			currentIdx--
			if(prevLeft >=0) {

			}
			photos.style.left = prevLeft + 'px';
			if(currentIdx==-1) currentIdx = 4
			setDots(loopdots,currentIdx)
	}
}

loopPhoto.onmouseleave = function() {
	autoPlay()
}

//绑定小圆点对应点击事件
for(let i=0;i<loopdots.length;i++) {
	(function(i) {
		loopdots[i].addEventListener('click',function() {
			newLeft = (i+1)* inil
			photos.style.left = newLeft + 'px'
			setDots(loopdots,i)
		},false)
	})(i)
}