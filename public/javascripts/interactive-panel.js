var InteractivePanel = Ext.extend( Ext.Panel, {

  initComponent: function() {
    InteractivePanel.superclass.initComponent.call(this);
    this.addEvents('interact');
    this.on({
      el: {
        tap: function(e) { this.fireEvent('interact', e.type, e); },
        scope: this
      }
    });
  }

});
