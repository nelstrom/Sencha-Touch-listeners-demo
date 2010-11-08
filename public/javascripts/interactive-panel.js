var InteractivePanel = Ext.extend( Ext.Panel, {

  initComponent : function() {
    InteractivePanel.superclass.initComponent.call(this);
    this.addEvents('interact');
  },

  afterRender: function() {
    InteractivePanel.superclass.afterRender.call(this);
    this.addManagedListener(this.el, {
      touchstart: this.handleEvent,
      touchend: this.handleEvent,
      touchmove: this.handleEvent,
      touchdown: this.handleEvent,
      scrollstart: this.handleEvent,
      scroll: this.handleEvent,
      scrollend: this.handleEvent,
      singletap: this.handleEvent,
      tap: this.handleEvent,
      doubletap: this.handleEvent,
      taphold: this.handleEvent,
      tapcancel: this.handleEvent,
      swipe: this.handleEvent,
      scope: this
    });
  },

  handleEvent: function(e) { this.fireEvent('interact', e.type, e); }

});
