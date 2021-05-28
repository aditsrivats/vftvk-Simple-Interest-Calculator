function check() {      
     document.getElementById("principal").focus();
}
function validate() { /*validate principal input-filled value*/ 
  p = document.getElementById("principal").value;
   if(parseInt(p)<=0) {
     alert("Please enter a positive number");
     document.getElementById("principal").focus();
   }
}
function compute() { /* calculate and display actual interest */
    p = document.getElementById("principal").value;
    if(parseInt(p)>0 ) { /*validate principal input field after calculate button onclick */
    r=document.getElementById("rate").value;   
    y=document.getElementById("years").value; 
    i=parseInt(p)*parseInt(r)*parseInt(y)/100;
    total = parseInt(p)+i;
    var d = new Date();
    var n = d.getFullYear();
    years=n+parseInt(y);
    str="<br/> If you deposit <span style='background-color:yellow;'>"+p+"</span>";
    str=str+"<br/> at an interest rate of <span style='background-color:yellow;'>"+r+"%,</span>";
    str=str+"<br/> you will receive <span style='background-color:yellow;'>"+total+"</span>";
    str=str+"<br/> in the year <span style='background-color:yellow;'>"+years+".</span>";
    document.getElementById("result").innerHTML=str; 
    }
    else { /*move focus to principal, alert message */
      alert("Enter a positive number");
     document.getElementById("principal").focus();
    }
}

function rangeShow() {
    var slider = document.getElementById("rate").value;
    document.getElementById("rval").innerHTML=slider+"%";
}        