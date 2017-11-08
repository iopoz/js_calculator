window.onload = function() {


  function scale(block) {
    var step = 0.1,
        minfs = 9,
        scw = block.scrollWidth,
        w = block.offsetWidth;
    if (scw < w) {
      var fontsize = parseInt($(block).css('font-size'), 10) - step;
      if (fontsize >= minfs){
        $(block).css('font-size',fontsize+'px')
        scale(block);
      }
    }
  }

  var current,
      screen,
      output,
      limit,
      zero,
      period,
      operator;
      
      screen = document.getElementById("result");



  var elem = document.querySelectorAll(".num");
      
  var len = elem.length;

  for(var i = 0; i < len; i++ ) {
    
    elem[i].addEventListener("click",function() {
              
        num = this.value;
                 
        output = screen.innerHTML +=num;
              
        limit = output.length;
     
     if(limit > 16 ) {
        scale($('#result')[0])
      }
    },false);
    
  } 

  document.querySelector(".zero").addEventListener("click",function() {
      zero = this.value;      
      if(screen.innerHTML === "") {
        output = screen.innerHTML = zero;  
      }      
      else if(screen.innerHTML === output) {
        output = screen.innerHTML +=zero;          
      }
        
  },false);
    
  document.querySelector(".period").addEventListener("click",function() {
      period = this.value;
      if(screen.innerHTML === "") {
        output = screen.innerHTML = screen.innerHTML.concat("0.");
          
      }
      else if(screen.innerHTML === output) {
        screen.innerHTML = screen.innerHTML.concat(".");  
      }
      
  },false);
    
    
  document.querySelector("#eqn-bg").addEventListener("click",function() {      
      if(screen.innerHTML === output) {
        res = eval(output);
        screen.innerHTML = res.toFixed(2)
      }
      else {
        screen.innerHTML = "";
      }
        
  },false);
    
  document.querySelector("#delete").addEventListener("click",function() {

      screen.innerHTML = "";
      document.getElementById('result').style.fontSize = '20px'

  },false);


  var elem1 = document.querySelectorAll(".operator");

  var len1 = elem1.length;

  for(var i = 0; i < len1; i++ ) {

    elem1[i].addEventListener("click",function() {
      operator = this.value;
      if(screen.innerHTML == "" && operator != '-') {
        screen.innerHTML = screen.innerHTML.concat("");
      }
      else if (screen.innerHTML == "" && operator == '-'){
        screen.innerHTML += operator
      }
      else if(output && output.length < 16) {
        // if (output.length > 14){
        //   scale($('#result')[0])
        // }
        screen.innerHTML = output.concat(operator);
      }
      else {
        screen.innerHTML = output.concat(operator);
        scale($('#result')[0])
      }
     
    },false); 
  }
}