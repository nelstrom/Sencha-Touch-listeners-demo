Ext.setup({
  onReady: function() {
    var eventPanel, viewport;

    eventPanel = new InteractivePanel();
    eventPanel.addListener({
      interact: function() {console.log('interacted with panel');}
    });

    viewport = new Ext.Panel({
      fullscreen: true,
      layout: "fit",
      items: [eventPanel]
    });

  }
});