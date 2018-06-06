var c = document.getElementById("canvasSpace");

var ctx = c.getContext("2d");
console.log(c);
console.log(ctx);
/*
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // drawing code here
  } else {
    // canvas-unsupported code here
  }


  function draw1() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
    }
  }
*/

  function draw() {
    var canvas = document.getElementById('canvasSpace');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
    }
  }

  $(function(){
    $('.like').on('click', draw);
})
