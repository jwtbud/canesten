var  rotate = $(".rotate"),
    szirom = $(".szirom"),
    virag = $(".virag"),
    csepp = $(".csepp"),
    nyil = $(".nyil"),

    // start = $("#huvgsite .main-top h1"),

    content0 = $(".uj"),
    content1 = $(".kenyelmes"),
    content2 = $(".innovativ"),
    content3 = $(".gyors"),
    content4 = $(".hatekony"),
    content5 = $(".gyenged"),

    tl = new TimelineMax({repeat:-1});

tl.set(rotate,  {autoAlpha:1})
  .to(nyil, 0, {width: 0, height: 0,})
  .to(csepp, 0, {width: 0, height: 0})


// ELSŐ

  .to(szirom, 1.2, {left: 110, top: 80, delay: 1.5, opacity: 0,})
  .to(szirom, 1.2, {opacity: 0, width: 0, height: 0})
  .to(csepp, 0, {width: 71, height: 41, opacity: 0, left: 100, top: 78,}, "-=2.4")
  .to(csepp, 1.2, { opacity: 1, left: 110, top: 80,}, "-=2.0")

  .to(nyil, 0, { width: 26, height: 35, opacity: 0, top: 113, left: 120, rotation: "20deg"}, "-=3.4")
  .to(nyil, 2.6, { opacity: 1, top: 125, left: 126, rotation: "0deg", ease:Elastic.easeInOut}, "-=3")

  .to(content0, 0, {left:0, opacity: 0, top: 0}, "-=2.6")
  .to(content0, 1.0, {left:0, opacity: 1, top: 0}, "-=1.4")

   .to([nyil, csepp], 0.5, { opacity: 0, delay: 5})

  .to(rotate, 0, { rotation:"0deg"})
  .to(rotate, 2.6, { rotation:"360deg"})

  .to(content0, 0.5, {opacity: 0}, "-=2.3")
  .to(content0, 0, {left:500, opacity: 0}, "-=1.3")

  .to(szirom, 0, { opacity: 0, width: 71, height: 41, top: 67, left: 74,}, "-=2.8")
  .to(szirom, 1.5, { opacity: 1, }, "-=2.2")


  // MÁSODIK

  .to(szirom, 1.2, {left: 110, top: 80, delay: 0.2, opacity: 0,})
  .to(szirom, 1.2, {opacity: 0, width: 0, height: 0})
  .to(csepp, 0, {width: 71, height: 41, opacity: 0, left: 100, top: 78,}, "-=2.4")
  .to(csepp, 1.2, { opacity: 1, left: 110, top: 80,}, "-=2.0")

  .to(nyil, 0, { width: 26, height: 35, opacity: 0, top: 113, left: 120, rotation: "20deg"}, "-=3.4")
  .to(nyil, 2.6, { opacity: 1, top: 125, left: 126, rotation: "0deg", ease:Elastic.easeInOut}, "-=3")

  .to(content1, 0, {left:0, opacity: 0, top: 0}, "-=2.6")
  .to(content1, 1.0, {left:0, opacity: 1, top: 0}, "-=1.4")

   .to([nyil, csepp], 0.5, { opacity: 0, delay: 5})

  .to(rotate, 0, { rotation:"0deg"})
  .to(rotate, 2.6, { rotation:"360deg"})

  .to(content1, 0.5, {opacity: 0}, "-=2.3")
  .to(content1, 0, {left:500, opacity: 0}, "-=1.3")

  .to(szirom, 0, { opacity: 0, width: 71, height: 41, top: 67, left: 74,}, "-=2.8")
  .to(szirom, 1.5, { opacity: 1, }, "-=2.2")


  // HARMADIK

  .to(szirom, 1.2, {left: 110, top: 80, delay: 0.2, opacity: 0,})
  .to(szirom, 1.2, {opacity: 0, width: 0, height: 0})
  .to(csepp, 0, {width: 71, height: 41, opacity: 0, left: 100, top: 78,}, "-=2.4")
  .to(csepp, 1.2, { opacity: 1, left: 110, top: 80,}, "-=2.0")

  .to(nyil, 0, { width: 26, height: 35, opacity: 0, top: 113, left: 120, rotation: "20deg"}, "-=3.4")
  .to(nyil, 2.6, { opacity: 1, top: 125, left: 126, rotation: "0deg", ease:Elastic.easeInOut}, "-=3")

  .to(content2, 0, {left:0, opacity: 0, top: 0}, "-=2.6")
  .to(content2, 1.0, {left:0, opacity: 1, top: 0}, "-=1.4")

   .to([nyil, csepp], 0.5, { opacity: 0, delay: 5})

  .to(rotate, 0, { rotation:"0deg"})
  .to(rotate, 2.6, { rotation:"360deg"})

  .to(content2, 0.5, {opacity: 0}, "-=2.3")
  .to(content2, 0, {left:500, opacity: 0}, "-=1.3")

  .to(szirom, 0, { opacity: 0, width: 71, height: 41, top: 67, left: 74,}, "-=2.8")
  .to(szirom, 1.5, { opacity: 1, }, "-=2.2")


// NEGYEDIK

  .to(szirom, 1.2, {left: 110, top: 80, delay: 0.2, opacity: 0,})
  .to(szirom, 1.2, {opacity: 0, width: 0, height: 0})
  .to(csepp, 0, {width: 71, height: 41, opacity: 0, left: 100, top: 78,}, "-=2.4")
  .to(csepp, 1.2, { opacity: 1, left: 110, top: 80,}, "-=2.0")

  .to(nyil, 0, { width: 26, height: 35, opacity: 0, top: 113, left: 120, rotation: "20deg"}, "-=3.4")
  .to(nyil, 2.6, { opacity: 1, top: 125, left: 126, rotation: "0deg", ease:Elastic.easeInOut}, "-=3")

  .to(content3, 0, {left:0, opacity: 0, top: 0}, "-=2.6")
  .to(content3, 1.0, {left:0, opacity: 1, top: 0}, "-=1.4")

   .to([nyil, csepp], 0.5, { opacity: 0, delay: 5})

  .to(rotate, 0, { rotation:"0deg"})
  .to(rotate, 2.6, { rotation:"360deg"})

  .to(content3, 0.5, {opacity: 0}, "-=2.3")
  .to(content3, 0, {left:500, opacity: 0}, "-=1.3")

  .to(szirom, 0, { opacity: 0, width: 71, height: 41, top: 67, left: 74,}, "-=2.8")
  .to(szirom, 1.5, { opacity: 1, }, "-=2.2")


  // ÖTÖDIK

  .to(szirom, 1.2, {left: 110, top: 80, delay: 0.2, opacity: 0,})
  .to(szirom, 1.2, {opacity: 0, width: 0, height: 0})
  .to(csepp, 0, {width: 71, height: 41, opacity: 0, left: 100, top: 78,}, "-=2.4")
  .to(csepp, 1.2, { opacity: 1, left: 110, top: 80,}, "-=2.0")

  .to(nyil, 0, { width: 26, height: 35, opacity: 0, top: 113, left: 120, rotation: "20deg"}, "-=3.4")
  .to(nyil, 2.6, { opacity: 1, top: 125, left: 126, rotation: "0deg", ease:Elastic.easeInOut}, "-=3")

  .to(content4, 0, {left:0, opacity: 0, top: 0}, "-=2.6")
  .to(content4, 1.0, {left:0, opacity: 1, top: 0}, "-=1.4")

   .to([nyil, csepp], 0.5, { opacity: 0, delay: 5})

  .to(rotate, 0, { rotation:"0deg"})
  .to(rotate, 2.6, { rotation:"360deg"})

  .to(content4, 0.5, {opacity: 0}, "-=2.3")
  .to(content4, 0, {left:500, opacity: 0}, "-=1.3")

  .to(szirom, 0, { opacity: 0, width: 71, height: 41, top: 67, left: 74,}, "-=2.8")
  .to(szirom, 1.5, { opacity: 1, }, "-=2.2")


   // HATODIK

  .to(szirom, 1.2, {left: 110, top: 80, delay: 0.2, opacity: 0,})
  .to(szirom, 1.2, {opacity: 0, width: 0, height: 0})
  .to(csepp, 0, {width: 71, height: 41, opacity: 0, left: 100, top: 78,}, "-=2.4")
  .to(csepp, 1.2, { opacity: 1, left: 110, top: 80,}, "-=2.0")

  .to(nyil, 0, { width: 26, height: 35, opacity: 0, top: 113, left: 120, rotation: "20deg"}, "-=3.4")
  .to(nyil, 2.6, { opacity: 1, top: 125, left: 126, rotation: "0deg", ease:Elastic.easeInOut}, "-=3")

  .to(content5, 0, {left:0, opacity: 0, top: 0}, "-=2.6")
  .to(content5, 1.0, {left:0, opacity: 1, top: 0}, "-=1.4")

   .to([nyil, csepp], 0.5, { opacity: 0, delay: 5})

  .to(rotate, 0, { rotation:"0deg"})
  .to(rotate, 2.6, { rotation:"360deg"})

  .to(content5, 0.5, {opacity: 0}, "-=2.3")
  .to(content5, 0, {left:500, opacity: 0}, "-=1.3")

  .to(szirom, 0, { opacity: 0, width: 71, height: 41, top: 67, left: 74,}, "-=2.8")
  .to(szirom, 1.5, { opacity: 1, }, "-=2.2")


  // HETEDIK

  .to(szirom, 1.2, {left: 110, top: 80, delay: 0.2, opacity: 0,})
  .to(szirom, 1.2, {opacity: 0, width: 0, height: 0})
  .to(csepp, 0, {width: 71, height: 41, opacity: 0, left: 100, top: 78,}, "-=2.4")
  .to(csepp, 1.2, { opacity: 1, left: 110, top: 80,}, "-=2.0")

  .to(nyil, 0, { width: 26, height: 35, opacity: 0, top: 113, left: 120, rotation: "20deg"}, "-=3.4")
  .to(nyil, 2.6, { opacity: 1, top: 125, left: 126, rotation: "0deg", ease:Elastic.easeInOut}, "-=3")

  .to(content6, 0, {left:0, opacity: 0, top: 0}, "-=2.6")
  .to(content6, 1.0, {left:0, opacity: 1, top: 0}, "-=1.4")

   .to([nyil, csepp], 0.5, { opacity: 0, delay: 5})

  .to(rotate, 0, { rotation:"0deg"})
  .to(rotate, 2.6, { rotation:"360deg"})

  .to(content6, 0.5, {opacity: 0}, "-=2.3")
  .to(content6, 0, {left:500, opacity: 0}, "-=1.3")

  .to(szirom, 0, { opacity: 0, width: 71, height: 41, top: 67, left: 74,}, "-=2.8")
  .to(szirom, 1.5, { opacity: 1, }, "-=2.2")




$("#pause").click(function() {
		tl.pause();
});
$("#reverse").click(function() {
		tl.reverse();
});
$("#resume").click(function() {
		tl.resume();
});
$("#restart").click(function() {
		tl.restart();
});

