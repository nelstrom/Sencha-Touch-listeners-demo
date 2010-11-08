Ext.setup({
  onReady: function() {
    var eventPanel1, eventPanel2, resetButton, viewport;

    eventPanel1 = new InteractivePanel({
      tpl: Ext.XTemplate.from('report-interactions'),
      styleHtmlContent: true,
      style: 'background-color: #ccc;',
      listeners: {
        interact: function(type,event) {
          this.eventStats[type] += 1;
          this.update(this.eventStats);
        },
        delay: 2000
      }
    });

    eventPanel2 = new InteractivePanel({
      tpl: Ext.XTemplate.from('report-interactions'),
      styleHtmlContent: true,
      style: 'background-color: #999;',
      listeners: {
        interact: function(type,event) {
          this.eventStats[type] += 1;
          this.update(this.eventStats);
        },
        buffer: 2000
      }
    });

    resetButton = new Ext.Button({
      text: 'reset',
      dock: 'bottom',
      handler: function() {
        eventPanel1.resetStats();
        eventPanel2.resetStats()
      }
    });

    viewport = new Ext.Panel({
      fullscreen: true,
      defaults: {flex: 1},
      layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'center'
      },
      items: [eventPanel1, eventPanel2],
      dockedItems: [resetButton]
    });

  }
});