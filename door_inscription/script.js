var canvas = document.getElementById('tilt');
var ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;
ctx.font = '25px Bradley Hand ITC';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

var scale = {
  h: canvas.height/20,
  v: canvas.width/20
};
var text = {
  h: 
  'I.,L.,V.: Abbiamo rispolverato questo vecchio trucco,\n' + 
  'spero vi torni in mente. Siamo tornati da poco, re Oberon\n' + 
  'sembra aver perso il senno. Diffidate delle guardie cittadine,' + 
  'e non fatevi trovare allo scoperto. La città non è sicura, ci',
  v: 'You look like an idiot right now'
};



function update() {
    ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = "#000";
    ctx.font = '25px Bradley Hand ITC';
    
  ctx.save();
  ctx.scale(1, scale.h);
  ctx.fillText(text.h, canvas.width/2, canvas.height/scale.h/2);
  ctx.restore();
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(Math.PI/2);
  ctx.translate(-canvas.width/2, -canvas.width/2);
  ctx.scale(1, scale.v);
  ctx.fillText(text.v, canvas.width/2, canvas.height/scale.v/2);
  ctx.restore();
}

update();