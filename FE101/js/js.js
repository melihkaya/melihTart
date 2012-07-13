var selecTicArray =[];
var ticArray=[]; //duruma gˆre kaldirila bilir.
var XArray =[];
var OArray =[];
var turn = 0;
$(document).ready(function(){

		for (i=0; i<=8;i++){
			ticArray.push(i);
			
			var myDiv = $("<div id='"+i+"' name='zone"+i+"'></div>");		
			$("#container").append( myDiv );
				myDiv.click(function(e){
					var cell =$(this);
					processingTic(cell.attr("id"));

				}
			);
		
		}
	
		
		 	 
		

//Array Áalistigimdan var dikkate almayin		
//var x = [0, 3, 1, 2];
//x.reverse() // [2, 1, 3, 0]
//x.join(" ñ ") // "2 - 1 - 3 - 0"
//x.pop() // [0, 3, 1]
// x.unshift(-1) // [-1, 0, 3, 1, 2]
//x.shift() // [3, 1, 2]
//x.sort() // [0, 1, 2, 3]
//x.splice(1, 2) // [2, 3]
//alert(x);

});
function processingTic(e){

selecTicArray.push(e);

						$("#"+e).css("background","url(img/O.png)");
						var randomNum = Math.floor(Math.random()* ticArray.length);
						var temp=true;
						while(temp){
							if(jQuery.inArray(randomNum , selecTicArray) ){
								$("#"+randomNum).css("background","url(img/X.png)");
								selecTicArray.push(randomNum);
								temp=false;}
						}
						
}