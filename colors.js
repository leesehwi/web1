var Links = {
  Setcolor:function(color){
  $('a').css('color',color)
  }
}

var Body = {
  Setbackgroundcolorandfontcolor: function(color1,color2){
  $('body').css('background',color1)
  $('body').css('color',color2)
  }
}

function modeswitch(self){
  var varlogo = document.getElementById('logo');
    if(self.value ==='Dark Mode'){
      Body.Setbackgroundcolorandfontcolor('black','white');
      self.value = 'White Mode';
      varlogo.src = 'lsh_logo2.png';
      Links.Setcolor('powderblue');
      }
    else{
      Body.Setbackgroundcolorandfontcolor('white','black');
      self.value = 'Dark Mode';
      varlogo.src = 'lsh_logo.png';
      Links.Setcolor('black');
      }
    }
