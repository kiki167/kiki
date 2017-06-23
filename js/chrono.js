
var cpt = 1500 ;
var x ;
var pause=0;

function decompte()
{
     if(cpt>=0){
        if(pause==0)
        {
            if(cpt>60)
           {	
        	var m=Math.trunc(cpt/60);
           	var s=(cpt % 60);
          	var min = " minutes et ";
            var sec = " secondes.";
            } 
            else if(cpt==1){
                var m=0;
                var s=cpt%60;
                var min = " minute et ";
                var sec = " seconde.";
            }
            else {
            	var m=0;
            	var s=cpt%60;
            	var min = " minute et ";
                var sec = " secondes.";
            }
            document.getElementById("chrono").innerHTML = "<p>temps restant: " +m+min+s+sec +"</p>"
            document.getElementById("pause").innerHTML ="<button onclick='myFunction()'>Pause</button>";
            document.getElementById("continue").innerHTML = "";
            cpt-- ;
            x = setTimeout("decompte()",1000) ;
        }else{
            document.getElementById("pause").innerHTML = "";
            document.getElementById("continue").innerHTML = "<button onclick='myFunction()'>continuez</button>";
            x = setTimeout("decompte()",1000) ;
        }
        
    }
    else
    {
        clearTimeout(x) ;
    }
}

function myFunction() {
    if(pause==0){
        pause=1;
    }else{
        pause=0;
    }
}
