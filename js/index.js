let navBtns = document.getElementsByClassName("btn_item")
let navAreas = document.getElementsByClassName('nav_area_item')

for(let i=0;i<navBtns.length;i++) {
	(function(btn) {
		btn[i].onclick=function() {
			this.classList.add('btn_item_focus')
			navAreas[i].classList.add('nav_area_item_show')
			for(let j=0;j<btn.length;j++) {
				if(j==i) continue
					btn[j].classList.remove('btn_item_focus')
					navAreas[j].classList.remove('nav_area_item_show')
				}	
		}
	})(navBtns)
}
