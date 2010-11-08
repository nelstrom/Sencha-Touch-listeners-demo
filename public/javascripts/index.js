// http://www.sencha.com/forum/showthread.php?105114-COMPLETE-198-Inline-method-for-attaching-dom-events&p=509711#post509711
//

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