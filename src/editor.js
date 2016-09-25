require("../css/editor.css");
require("./glimpser-extension.js");

$(function() {

    var editor = new MediumEditor('.editable', {
        buttonLabels: 'fontawesome',
        toolbar: {
            buttons: ['bold', 'italic', 'underline', 'anchor', 'glimpser']
        },
        extensions: {
            'glimpser': new GlimpserExtension()
        }
    });

});