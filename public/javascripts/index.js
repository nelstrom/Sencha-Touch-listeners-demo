Ext.setup({
  onReady: function() {
    var eventPanel, viewport;

    // this doesn't work!
    // eventPanel = new Ext.Panel({
    //   listeners: {
    //     tap: function() {console.log('tapped on body');},
    //     scope: this
    //   }
    // });

    // To access DOM events directly from a Component's HTMLElement, listeners must
    // be added to the Element after the Component has been rendered
    // eventPanel = new Ext.Panel({
    //   listeners: {
    //     el: {
    //       tap: function() {console.log('tapped on element');}
    //     },
    //     scope: this
    //   }
    // });

    // You can also add events after creating an object, 2 ways.
    // passing 2-4 arguments:
    // eventPanel = new Ext.Panel();
    // eventPanel.addListener(
    //   'tap',                                          // eventName
    //   function() {console.log('tapped on body');},    // handler
    //   this,                                           // scope
    //   { element: 'body'}                              // options
    // );

    // passing a single configuration object:
    // allows for multiple listeners to be created at once
    eventPanel = new Ext.Panel();
    eventPanel.addListener({
      body: {
        tap: function() {console.log('tapped on body');},
        swipe: function() {console.log('swiped body');}
      }
    });

    viewport = new Ext.Panel({
      fullscreen: true,
      layout: "fit",
      items: [eventPanel]
    });

  }
});