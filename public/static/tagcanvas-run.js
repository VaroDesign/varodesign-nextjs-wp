setTimeout(function() {
    try {
      TagCanvas.Start('myCanvas','tags',{
        textColour: '#000',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        minSpeed: 0.01
      });
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
    TagCanvas.SetSpeed('myCanvas', [0.03, -0.04]);
  }, 50);