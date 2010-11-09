Ext.setup({
  onReady: function() {
    var eventPanel, viewport;

    eventPanel = new InteractivePanel({
      reportEvent: function() {console.log('interacted with panel');}
    });
    eventPanel.on('interact', eventPanel.reportEvent);

    viewport = new Ext.Panel({
      fullscreen: true,
      layout: "fit",
      items: [eventPanel]
    });

  }
});
