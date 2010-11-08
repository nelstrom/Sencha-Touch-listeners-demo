Ext.setup({
  onReady: function() {
    var eventPanel, resetButton, viewport;

    eventPanel = new InteractivePanel({
      tpl: Ext.XTemplate.from('report-interactions'),
      styleHtmlContent: true
    });
    eventPanel.addListener({
      interact: function(type,event) {
        this.eventStats[type] += 1;
        this.update(this.eventStats);
      }
    });

    resetButton = new Ext.Button({
      text: 'reset',
      dock: 'bottom',
      handler: function() { eventPanel.resetStats() }
    });

    viewport = new Ext.Panel({
      fullscreen: true,
      layout: "fit",
      items: [eventPanel],
      dockedItems: [resetButton]
    });

  }
});