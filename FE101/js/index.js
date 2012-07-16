var selecTicArray =[];
var ticArray=[]; //duruma göre kaldirila bilir.
var xArray =[];
var oArray =[];
var randomArray = [];
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
	
		
		 	 
		

//Array çalistigimdan var dikkate almayin		
//var x = [0, 3, 1, 2];
//x.reverse() // [2, 1, 3, 0]
//x.join(" – ") // "2 - 1 - 3 - 0"
//x.pop() // [0, 3, 1]
// x.unshift(-1) // [-1, 0, 3, 1, 2]
//x.shift() // [3, 1, 2]
//x.sort() // [0, 1, 2, 3]
//x.splice(1, 2) // [2, 3]
//alert(x);

});
function processingTic(e){

xArray.push(e);
selecTicArray.push(e);

var randomNum = Math.floor(Math.random()* ticArray.length);

for(var i=0;i<=selecTicArray.length;i++){
	
/*	if(selecTicArray[i] != randomNum){
		while(selecTicArray[i] != randomNum){
		
			randomNum = Math.floor(Math.random()* ticArray.length);
		
		}
	}	*/
	
		
}

oArray.push(randomNum);
selecTicArray.push(randomNum);						
var xNum = xArray.length;
var oNum = oArray.length;
							if(selecTicArray.length <= ticArray.length){
							
								$("#"+ xArray[xNum-1]).css("background","url(img/X.png)");
								$("#"+ oArray[oNum-1]).css("background","url(img/O.png)");
							}
							//console.log(oArray);		
						
}




