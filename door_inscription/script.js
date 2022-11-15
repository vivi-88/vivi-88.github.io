


var text = {
  h: 
  "I.,L.,V.: Abbiamo rispolverato questo vecchio trucco,\n" + 
  "spero vi torni in mente. Siamo tornati da poco, re Oberon\n" + 
  "sembra aver perso il senno. Diffidate delle guardie cittadine,\n" + 
  "e non fatevi trovare allo scoperto. La città non è sicura, ci",
  v: 
  "siamo rifugiati all'esterno -- il richiamo delle armi certo vi\n" + 
  "condurrà al nostro rifugio. Avanzate attraverso le rovine:\n" + 
  "sono pericolanti, ma danno protezione. E non c'è rischio che\n" + 
  "il cielo vi caschi sulla testa per nostra mano. A presto.\n"
};

function update(canvas_id, text) {
	
  var canvas = document.getElementById(canvas_id)
  var ctx = canvas.getContext('2d');
  
  canvas.width = 500;
  canvas.height = 500;
  
  var scale = {
    h: canvas.height/15,
	v: canvas.width/15
  };

  ctx.font = '18px Apple Chancery';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "#000";
  ctx.font = '25px Arial';
    
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

update('tilt1', {h: 'I.,L.,V.: Abbiamo rispolverato questo vecchio',    v: 'siamo rifugiati all\'esterno - il richiamo delle'});
update('tilt2', {h: 'trucco, spero vi torni in mente. Siamo tornati',   v: 'armi certo vi condurrà al nostro rifugio. Avanzate'});
update('tilt3', {h: 'da poco, re Oberon sembra aver perso il senno.',   v: 'attraverso le rovine: sono pericolanti, ma danno'});
update('tilt4', {h: 'Diffidate delle guardie cittadine,e non fatevi',   v: 'protezione. E non c\'è rischio che il cielo vi'});
update('tilt5', {h: 'trovare allo scoperto. La città non è sicura, ci', v: 'caschi sulla testa per nostra mano. A presto.'});