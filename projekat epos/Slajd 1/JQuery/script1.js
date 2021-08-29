const vl = gsap.timeline({defaults:{ease:'pover1.out'}});


vl.to('#tekst',{y:"0%",duration:2,stagger:0.5});
vl.to('#slajder',{y:"-100%",duration:1.5,delay:0.5});
vl.to('#uvod',{y:"-100%",duration:1},"-=1.1");
vl.fromTo('nav',{opacity:0},{opacity:1});
vl.fromTo('#slikaPozadina',{opacity:0},{opacity:1});

//JQuery gsap//