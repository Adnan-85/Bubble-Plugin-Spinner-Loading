function(instance, properties) {

    let el =$('<div><img src="//meta-q.cdn.bubble.io/f1713440327377x206108890199849800/sp.gif"></div>');  
       instance.canvas.append(el);
       el.css('background-color','white' );
       el.css('opacity','0.5');
       el.css('position' , 'absolute');
       el.css('height', properties.bubble.height);
       el.css('width' ,properties.bubble.width);

}