/**
  * jQuery Dynamic Fields
  * v0.1
  */

(function( $ ){
    /**
     * If data-attribute and options in jQuery options is both available, will use data-attribute instead of jQuery options.
     */
    $.fn.dynamicFields = function (_options) {

        var TAG = "jquery-dynamic-field | ";

        // This is the easiest way to have default options.
        var options = $.extend({
            template: ".dynamic-fields-template",
            buttonAdd: ".dynamic-fields-button-add",
            maxFields: Number.MAX_VALUE, // Infinite
            startFields: 1, // Always start with 1 counter fields
        }, _options);

        var stringTemplate = this.data("template") ? this.data("template") : options.template;
        if (stringTemplate.startsWith(".")) { // class
            if (this.find(stringTemplate).length > 0) {
                this.find(stringTemplate).addClass("dynamic-fields-row");
                this.template = this.find(stringTemplate).clone();
            } else {
                console.log(TAG+"Cannot find template element for class='"+stringTemplate+"'. Make sure the element is within the dynamic fields.");
                return this;
            }
        } else if (stringTemplate.startsWith("#")) { // id
            if ($(stringTemplate).length > 0) {
                $(stringTemplate).addClass("dynamic-fields-row");
                this.template = $(stringTemplate).clone();
            } else {
                console.log(TAG+"Cannot find template element for id='"+stringTemplate+"'.");
                return this;
            }
        } else {
            console.log(TAG+"Currently, template can only use class (use '.class-name') and id (use '#id-name')");
        }

        var stringButtonAdd = this.data("button-add") ? this.data("button-add") : options.buttonAdd;
        if (stringButtonAdd.startsWith(".")) { // class
            if (this.find(stringButtonAdd).length > 0) {
                this.buttonAdd = this.find(stringButtonAdd);
            } else {
                console.log(TAG+"Cannot find add button element for class='"+stringButtonAdd+"'. Make sure the element is within the dynamic fields.");
                return this;
            }
        } else if (stringButtonAdd.startsWith("#")) { // id
            if ($(stringButtonAdd).length > 0) {
                this.buttonAdd = $(stringButtonAdd);
            } else {
                console.log(TAG+"Cannot find add button element for id='"+stringButtonAdd+"'");
                return this;
            }
        } else {
            console.log(TAG+"Currently, buttonAdd can only use class (use '.class-name') and id (use '#id-name')");
        }

        var self = this;
        var container = this; // TODO: add container attributes
        var fieldsCount = options.startFields;
        this.buttonAdd.on("click", function (e) {
            e.preventDefault();
            if (fieldsCount < options.maxFields) {
                var clone = self.template.clone();
                container.append(clone);

                clone.find('[data-role="remove-field"]').on("click", function (e) {
                    e.preventDefault();
                    $(this).parents('.dynamic-fields-row').remove();
                    fieldsCount--;
                });
                fieldsCount++;
            } else {
                alert("lebih"+fieldsCount+" | "+options.maxFields);
            }
        });

        container.find('[data-role="remove-field"]').remove();
    }
})( jQuery );

$(document).on("ready", function () {
    if ($('*[data-role="dynamic-fields"]').length > 0) {
        $('*[data-role="dynamic-fields"]').dynamicFields();
    }
});