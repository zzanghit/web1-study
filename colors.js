var Links = {
      setColor:function(color) {
        // var alist = document.querySelectorAll('a');
        // var i=0;
        // while (i<alist.length) {
        //   alist[i].style.color=color;
        //   i++;
        // }
         $('a').css('color',color); // 이 웹페이지의 모든 a 태그를 jquery로 제어
       }
};
var Body = {
  setColor:function(color) {
    // document.querySelector('body').style.color = color; jquery 로 변경
    $('body').css('color',color);
  },
  setBackgroundColor:function(color) {
    // document.querySelector('body').style.backgroundColor = color; jquery 로 변경
    $('body').css('backgroundColor',color);
  }
};
function ND_Handler(self) {
  var target = document.querySelector('body');
  if (self.value === 'Night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'Day';
    Links.setColor('white');
  }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'Night';
    Links.setColor('blue');
  }
}
