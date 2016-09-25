module.exports = GlimpserExtension = MediumEditor.extensions.button.extend({
  
  name: 'glimpser',
  contentDefault: '<b>G</b>', // default innerHTML of the button
  contentFA: '<i class="fa fa-eye"></i>', // innerHTML of button when 'fontawesome' is being used

  init: function () {
    MediumEditor.extensions.button.prototype.init.call(this);
    this.getEditorElements().forEach(function (element) {
      this.base.on(element, 'contextmenu', this.handleContextmenu.bind(this));
    }, this);
  },

  handleContextmenu: function (event) {
      event.preventDefault();
      console.log("test");
  }
});