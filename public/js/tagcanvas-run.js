setTimeout(function() {
    try {
      TagCanvas.Start('VaroBoy__Tags','tags',{
        textColour: '#ffffff',
        outlineColour: 'rgba(0,0,0,0)',
        depth: 0.8,
        zoomMax: 1.1,
        maxSpeed: 0.02,
        minSpeed: 0.01
      });
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('VaroBoy__Tags').style.display = 'none';
    }
    TagCanvas.SetSpeed('VaroBoy__Tags', [0.03, -0.04]);
  }, 50);