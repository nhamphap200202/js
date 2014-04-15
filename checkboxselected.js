
/*
 Created on : Mar 28, 2014, 10:08:59 AM
 Author: Tran Trong Thang
 Email: trantrongthang1207@gmai.com
 */

(function($) {
    $.fn.TTSelectcheckbox = function(option) {
        var settings = $.extend({
            checkboxname: 'ids[]',
            checkboxclass: 'pcheckbox'
        }, option)
        var Checkchild = false;
        var isCheckchild = false;
        return this.each(function(countObj, obj) {
            $(obj).bind('click', function() {
                var isChecked = $(this).is(":checked");
                var cbs = document.getElementsByTagName('input');
                for (var i = 0; i < cbs.length; i++) {
                    if (cbs[i].type == 'checkbox') {
                        if (cbs[i].name == settings.checkboxname) {
                            cbs[i].checked = isChecked;
                        }
                    }
                }
                if (isChecked)
                    Checkchild = true;
                else
                    Checkchild = false;
            });
            $("input[name='" + settings.checkboxname + "']").bind('click', function() {
                var countChecked = $("input[name='" + settings.checkboxname + "']:checked").length;
                var countCheckbox = $("input[name='" + settings.checkboxname + "']").length;

                if (countChecked == 0) {
                    $(obj).click();
                } else if (countCheckbox == countChecked) {
                    $(obj).click();
                }
            })
        })

        function pinArray($arr, $v) {
            var isInArray = false;
            for (var i = 0; i < $arr.length; i++) {
                if ($arr[i] == $v) {
                    isInArray = true;
                }
            }
            return isInArray;
        }
    }
})(jQuery)

