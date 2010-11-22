var InteractivePanel = Ext.extend( Ext.Panel, {

  eventStats: {},

  initComponent : function() {
    InteractivePanel.superclass.initComponent.call(this);
    this.addEvents('interact');
    this.addListener({
      el: {
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
      }
    });
    this.resetStats();
  },

  handleEvent: function(e) { this.fireEvent('interact', e.type, e); },

  resetStats: function () {
    this.eventStats = {
      tap: 0,
      doubletap: 0,
      touchstart: 0,
      touchend: 0,
      touchmove: 0,
      touchdown: 0,
      scrollstart: 0,
      scroll: 0,
      scrollend: 0,
      singletap: 0,
      taphold: 0,
      tapcancel: 0,
      swipe: 0,
      pinch: 0,
      pinchstart: 0,
      pinchend: 0
    }
    this.update(this.eventStats);
  }

});
