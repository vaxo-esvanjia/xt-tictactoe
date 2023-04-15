var boxes = document.querySelectorAll(".box")
var style = document.querySelectorAll(".box").classList
var xo = document.querySelectorAll(".xo")
var canvas1 = document.querySelector('canvas')
var newGame = document.querySelector(".newgame")
var restart = document.querySelector('.restart')
var results = document.querySelectorAll(".result")
var resultColor =document.querySelector(".results")
var h2 =document.querySelectorAll("h2")

var t = 0
var x = 0
var counter = 0
var xPlayer = prompt('X Player name')
var tPlayer = prompt('T Player name')
var pl1 = document.querySelector('.pl1')
var pl2 = document.querySelector('.pl2')
pl1.innerText=xPlayer+':'
pl2.innerText=tPlayer+':'
var body = document.querySelector('body')
var back1 = document.getElementsByTagName("option")
var back =document.querySelector(".back")
function changeColorX(){
  var r = document.querySelector(".range1").value
  var g = document.querySelector(".range2").value
  var b = document.querySelector(".range3").value
  var cubeX = document.querySelector(".cubeX")
  var colorX = 'rgb(' + r + ',' + g + ',' + b + ')';
  cubeX.style.background = colorX
  var rx = document.querySelector(".rx")
  var gx = document.querySelector(".gx")
  var bx = document.querySelector(".bx")
  rx.innerHTML = 'R: ' + r
  gx.innerHTML = 'G: ' + g
  bx.innerHTML = 'B: ' + b
  
}
function changeColorT(){
  var red = document.querySelector(".range4").value
  var green = document.querySelector(".range5").value
  var blue = document.querySelector(".range6").value
  var cubeT = document.querySelector(".cubeT")
  var colorT = 'rgb(' + red + ',' + green + ',' + blue + ')';
  cubeT.style.background = colorT
  var rt = document.querySelector(".rt")
  var gt = document.querySelector(".gt")
  var bt = document.querySelector(".bt")
  rt.innerHTML = 'R: '+ red
  gt.innerHTML = 'G: '+ green
  bt.innerHTML = 'B: '+ blue
  
  
}
document.querySelector(".range1").addEventListener("input", changeColorX)
document.querySelector(".range2").addEventListener("input", changeColorX)
document.querySelector(".range3").addEventListener("input", changeColorX)
document.querySelector(".range4").addEventListener("input", changeColorT)
document.querySelector(".range5").addEventListener("input", changeColorT)
document.querySelector(".range6").addEventListener("input", changeColorT)

for(var i of boxes){
    
    i.addEventListener("click", function(){
        
        counter++
        if(counter%2==1){
          
            console.log(counter)
            this.innerText = "X"
            this.style.fontSize = '70px'
            this.style['pointer-events'] = 'none'; 
            this.style.color = "green"
            this.style.background = 'rgb(' + document.querySelector(".range1").value + ',' + document.querySelector(".range2").value + ',' + document.querySelector(".range3").value + ')';
        }else{
          this.style.background = 'rgb(' + document.querySelector(".range4").value + ',' + document.querySelector(".range5").value + ',' + document.querySelector(".range6").value + ')';
            this.innerText = "T"
            this.style.fontSize = '70px'
            this.style.color = "red"
            this.style['pointer-events'] = 'none'; 
        }
        if(boxes[0].innerText==='X'&&boxes[1].innerText==='X'&&boxes[2].innerText==='X' ||
        boxes[0].innerText==='X'&&boxes[4].innerText==='X'&&boxes[8].innerText==='X' ||
        boxes[0].innerText==='X'&&boxes[3].innerText==='X'&&boxes[6].innerText==='X' ||
        boxes[1].innerText==='X'&&boxes[4].innerText==='X'&&boxes[7].innerText==='X' ||
        boxes[2].innerText==='X'&&boxes[5].innerText==='X'&&boxes[8].innerText==='X' ||
        boxes[2].innerText==='X'&&boxes[4].innerText==='X'&&boxes[6].innerText==='X' ||
        boxes[3].innerText==='X'&&boxes[4].innerText==='X'&&boxes[5].innerText==='X' ||
        boxes[6].innerText==='X'&&boxes[7].innerText==='X'&&boxes[8].innerText==='X'){
            x++
            results[0].innerText=x
            console.log('winner is X beeeeeeeetch')
            for(var i of boxes){
                i.style['pointer-events'] = 'none';
            }
            
        }else if(boxes[0].innerText==='T'&&boxes[1].innerText==='T'&&boxes[2].innerText==='T' ||
        boxes[0].innerText==='T'&&boxes[4].innerText==='T'&&boxes[8].innerText==='T' ||
        boxes[0].innerText==='T'&&boxes[3].innerText==='T'&&boxes[6].innerText==='T' ||
        boxes[1].innerText==='T'&&boxes[4].innerText==='T'&&boxes[7].innerText==='T' ||
        boxes[2].innerText==='T'&&boxes[5].innerText==='T'&&boxes[8].innerText==='T' ||
        boxes[2].innerText==='T'&&boxes[4].innerText==='T'&&boxes[6].innerText==='T' ||
        boxes[3].innerText==='T'&&boxes[4].innerText==='T'&&boxes[5].innerText==='T' ||
        boxes[6].innerText==='T'&&boxes[7].innerText==='T'&&boxes[8].innerText==='T'){

            t++
            results[1].innerText=t
            for(var i of boxes){
                i.style['pointer-events'] = 'none';
            }
            
        }

    })
    
}
newGame.addEventListener("click", function(){
    
    counter=0

    
    for (var i of boxes){
        i.style.background = 'gray'
        i.innerText = ''

        i.style['pointer-events'] = 'auto';
    }
    
})
restart.addEventListener('click', function(){
    document.location.reload()
})
var backgroundchanger = document.querySelector(".backgroundchanger")
backgroundchanger.addEventListener("click", function(){
    console.log(back.value)

    if(back.value=="background 1"){
        canvas1.style.display="flex"
        body.style.backgroundImage = ""
        body.style.background = "black"
        resultColor.style.color="aqua"
        for(var i of h2){
            i.style.color = "aqua"
        }
        /*          *     .        *  .    *    *   . 
 .  *  move your mouse to over the stars   .
 *  .  .   change these values:   .  *
   .      * .        .          * .       */
const STAR_COLOR = '#fff';
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;
const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 8;

const canvas = document.querySelector( 'canvas' ),
      context = canvas.getContext( '2d' );

let scale = 1, // device pixel ratio
    width,
    height;

let stars = [];

let pointerX,
    pointerY;

let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

let touchInput = false;

generate();
resize();
step();

window.onresize = resize;
canvas.onmousemove = onMouseMove;
canvas.ontouchmove = onTouchMove;
canvas.ontouchend = onMouseLeave;
document.onmouseleave = onMouseLeave;

function generate() {

   for( let i = 0; i < STAR_COUNT; i++ ) {
    stars.push({
      x: 0,
      y: 0,
      z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )
    });
   }

}

function placeStar( star ) {

  star.x = Math.random() * width;
  star.y = Math.random() * height;

}

function recycleStar( star ) {

  let direction = 'z';

  let vx = Math.abs( velocity.x ),
	    vy = Math.abs( velocity.y );

  if( vx > 1 || vy > 1 ) {
    let axis;

    if( vx > vy ) {
      axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
    }
    else {
      axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
    }

    if( axis === 'h' ) {
      direction = velocity.x > 0 ? 'l' : 'r';
    }
    else {
      direction = velocity.y > 0 ? 't' : 'b';
    }
  }
  
  star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );

  if( direction === 'z' ) {
    star.z = 0.1;
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  }
  else if( direction === 'l' ) {
    star.x = -OVERFLOW_THRESHOLD;
    star.y = height * Math.random();
  }
  else if( direction === 'r' ) {
    star.x = width + OVERFLOW_THRESHOLD;
    star.y = height * Math.random();
  }
  else if( direction === 't' ) {
    star.x = width * Math.random();
    star.y = -OVERFLOW_THRESHOLD;
  }
  else if( direction === 'b' ) {
    star.x = width * Math.random();
    star.y = height + OVERFLOW_THRESHOLD;
  }

}

function resize() {

  scale = window.devicePixelRatio || 1;

  width = window.innerWidth * scale;
  height = window.innerHeight * scale;

  canvas.width = width;
  canvas.height = height;

  stars.forEach( placeStar );

}

function step() {

  context.clearRect( 0, 0, width, height );

  update();
  render();

  requestAnimationFrame( step );

}

function update() {

  velocity.tx *= 0.96;
  velocity.ty *= 0.96;

  velocity.x += ( velocity.tx - velocity.x ) * 0.8;
  velocity.y += ( velocity.ty - velocity.y ) * 0.8;

  stars.forEach( ( star ) => {

    star.x += velocity.x * star.z;
    star.y += velocity.y * star.z;

    star.x += ( star.x - width/2 ) * velocity.z * star.z;
    star.y += ( star.y - height/2 ) * velocity.z * star.z;
    star.z += velocity.z;
  
    // recycle when out of bounds
    if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {
      recycleStar( star );
    }

  } );

}

function render() {

  stars.forEach( ( star ) => {

    context.beginPath();
    context.lineCap = 'round';
    context.lineWidth = STAR_SIZE * star.z * scale;
    context.globalAlpha = 0.5 + 0.5*Math.random();
    context.strokeStyle = STAR_COLOR;

    context.beginPath();
    context.moveTo( star.x, star.y );

    var tailX = velocity.x * 2,
        tailY = velocity.y * 2;

    // stroke() wont work on an invisible line
    if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
    if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;

    context.lineTo( star.x + tailX, star.y + tailY );

    context.stroke();

  } );

}

function movePointer( x, y ) {

  if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {

    let ox = x - pointerX,
        oy = y - pointerY;

    velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );
    velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );

  }

  pointerX = x;
  pointerY = y;

}

function onMouseMove( event ) {

  touchInput = false;

  movePointer( event.clientX, event.clientY );

}

function onTouchMove( event ) {

  touchInput = true;

  movePointer( event.touches[0].clientX, event.touches[0].clientY, true );

  event.preventDefault();

}

function onMouseLeave() {

  pointerX = null;
  pointerY = null;

}

    }

        
else if(back.value==="background 2"){
    console.log(body)
    canvas1.style.display= "none"
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundImage="url('https://external-preview.redd.it/Tf2MC-orVRAI8OL5tjyF4k4H2Q6QLHTWllekGfqdt3c.png?width=960&crop=smart&auto=webp&s=be4ab9a2fa3ca2f7011799377f118a8dbc64aacb')"
    body.style.backgroundSize="cover"
}
else if(back.value==="background 3"){
  canvas1.style.display= "none"
  body.style.backgroundRepeat = "repeat"
  body.style.backgroundSize="500px 500px"
 
  body.style.backgroundImage = "url('https://i1.sndcdn.com/avatars-000479040675-wog8es-t500x500.jpg')"
}
else if(back.value==="background 4"){
  canvas1.style.display= "none"
  body.style.backgroundSize="cover"
  body.style.backgroundRepeat = "no-repeat"
  body.style.backgroundImage = "url('https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5518C4CDDE7FB69C6A7DB55A4B956E37662D3A4B9636803109D56FD064F80051/scale?width=1200&aspectRatio=1.78&format=jpeg')"
}
else if(back.value==="background 5"){
  canvas1.style.display= "none"
  body.style.backgroundSize="cover"
  body.style.backgroundRepeat = "no repeat"
  body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/041/264/432/large/alexander-walter-samurai.jpg?1631207045')"
}
else if(back.value==="background 6"){
  canvas1.style.display= "none"
  body.style.backgroundSize="cover"
  body.style.backgroundRepeat = "no-repeat"
  body.style.backgroundImage = "url('https://assetsio.reedpopcdn.com/chess-playing-hand.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp')"
}
else if(back.value==="background 7"){
  canvas1.style.display= "none"
  body.style.backgroundSize="cover"
  body.style.backgroundRepeat = "no-repeat"
  body.style.backgroundImage = "url('https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/176455/s960_Football_gov.uk.jpg')"
}
else if(back.value==="background 8"){
  canvas1.style.display= "none"
  body.style.background = "white"
  body.style.backgroundSize="100%"
  body.style.backgroundRepeat = "no-repeat"
  body.style.backgroundImage = "url('https://www.disneyclips.com/images/images/pooh-piglet-honey2.png')"
}


  
})