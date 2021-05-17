setTimeout(function() {
    try {
      TagCanvas.Start('myCanvas','tags',{
        textColour: '#fff',
        outlineColour: 'rgba(0,0,0,0)',
        reverse: true,
        depth: 0.8,
        zoomMax: 1.05,
        maxSpeed: 0.02,
        minSpeed: 0.01
      });
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
    TagCanvas.SetSpeed('myCanvas', [0.03, -0.04]);
  }, 50);