var InteractivePanel = Ext.extend( Ext.Panel, {

  initComponent : function() {
    InteractivePanel.superclass.initComponent.call(this);
    this.addEvents('interact');
    this.addListener({
      el: {
        touchstart: this.handleEvent,
        touchend: this.handleEvent,
        touchmove: this.handleEvent,
        touchdown: this.handleEvent,
        dragstart: this.handleEvent,
        drag: this.handleEvent,
        dragend: this.handleEvent,
        singletap: this.handleEvent,
        tap: this.handleEvent,
        doubletap: this.handleEvent,
        taphold: this.handleEvent,
        tapcancel: this.handleEvent,
        swipe: this.handleEvent,
        scope: this
      }
    });
  },

  handleEvent: function(e) { this.fireEvent('interact', e.type, e); }

});
