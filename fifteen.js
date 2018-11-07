/* global $ */ 

$(document).ready(function(){
{
 var puzzlearea = $("#puzzlearea");
   var c = puzzlearea.children();
   var x = 0;
   var y = 0;
   var emprow ='300px';
   var empcol = '300px';
   var cnt = 0;
   var sbutton = document.getElementById("shufflebutton");
   sbutton.style.backgroundColor="grey";
   sbutton.style.color="white";

   
	for (let i=0; i< c.length; i++) //to display puzzle
	{

	 c[i].classList.add("puzzlepiece");
	 c[i].style.top = y + "px";
	 c[i].style.left = x + "px";
	 c[i].style.backgroundPosition =`${-x}px ${-y}px`;
	 x+= 100;
	 cnt+=1;
	 if (cnt%4 == 0){
        y +=100;
        x = 0;
	}
			
	c[i].onclick = function(){
		c[i].classList.add("movablepiece");
		if(moveTile(parseInt(this.innerHTML))){
			change(this.innerHTML-1);
			return;
		}
	};	
			
	sbutton.onclick = function(){
		for (var i=0; i<100; i++){
			let n = parseInt(Math.random()* 4);
			if (n == 0){
				let act = moveUp(emprow,empcol);
				if ( act != -1){
					change(act);
				}
			}
			if (n == 1){
				let act = moveDown(emprow,empcol);
				if ( act != -1){
					change(act);
				}
			}
			if (n == 2){
				let act = moveLeft(emprow,empcol);
				if ( act != -1){
					change(act);
				}
			}
			if (n == 3){
				let act = moveRight(emprow,empcol);
				if (act != -1){
					change(act);
				}
			}
		}
	}		
	}	
		
	function moveUp(x,y){
	    var xint= parseInt(x);
	    var yint= parseInt(y);
	    if (yint> 0){
	        for (var i=0; i<c.length; i++){
	            if (parseInt(c[i].style.top) + 100 == yint && 
	            parseInt(c[i].style.left) == xint){
	                return i;
	            }
	        } 
	    }
	    else {
	        return -1;
	    }
	}

	function moveLeft(x,y){
	    var xint = parseInt(x);
	    var yint = parseInt(y);

	    if (xint > 0){
	        for (var i = 0; i < c.length; i++){
	            if (parseInt(c[i].style.left) + 100 == xint
	            && parseInt(c[i].style.top) == yint){
	                return i;
	            } 
	        }
	    }
	    else{
	        return -1;
	    }
	}

	function moveDown(x,y){
	    var xint= parseInt(x);
	    var yint = parseInt(y);
	    if (yint < 300){
	        for (var i=0; i<c.length; i++){
	            if (parseInt(c[i].style.top) - 100 == yint && 
	            parseInt(c[i].style.left) == xint){
	                return i;
	            }
	        }
	    } 
	    else{
	        return -1;
	    } 
	}
	
	function moveRight(x,y){
	    var xint = parseInt(x);
	    var yint = parseInt(y);
	    if (xint < 300){
	        for (var i =0; i<c.length; i++){
	            if (parseInt(c[i].style.left) - 100 == xint
	            && parseInt(c[i].style.top) == yint){
	                return i;
	            }
	        }
	    }
	    else{
	        return -1;
	    } 
	}
		
	function moveTile(p){
		if(moveUp(emprow,empcol) == (p-1)){
			return true;
		}
		if (moveLeft(emprow,empcol) == (p-1)){
			return true;
		}
		if(moveDown(emprow,empcol) == (p-1)){
			return true;
		}
		if(moveRight(emprow,empcol) == (p-1)){
			return true;
		}
	}

	function change(p){
		var t = c[p].style.top;
		c[p].style.top= empcol;
		empcol = t;

		t=c[p].style.left;
		c[p].style.left = emprow;
		emprow = t;
	}
}
})
