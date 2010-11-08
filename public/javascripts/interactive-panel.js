var InteractivePanel = Ext.extend( Ext.Panel, {

  initComponent : function() {
    InteractivePanel.superclass.initComponent.call(this);
    this.addEvents('interact');
  },

  afterRender: function() {
    InteractivePanel.superclass.afterRender.call(this);
    this.addManagedListener(this.el, {
      tap: function(e) { this.fireEvent('interact', e.type, e); },
      scope: this
    });
  }

});
