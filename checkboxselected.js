
/*
 Created on : Mar 28, 2014, 10:08:59 AM
 Author: Tran Trong Thang
 Email: trantrongthang1207@gmai.com
 
 $("#id/.class").TTSelectcheckbox();
 */

(function($) {
    $.fn.TTSelectcheckbox = function(option) {
        var settings = $.extend({
            checkboxname: 'ids[]'
        }, option);
        return this.each(function(countObj, obj) {
            $(obj).bind('click', function() {
                var isChecked = $(this).is(":checked");

                $("input[name='" + settings.checkboxname + "']").attr("checked", isChecked);

            });
            $("input[name='" + settings.checkboxname + "']").bind('click', function() {
                var countChecked = $("input[name='" + settings.checkboxname + "']:checked").length;
                var countCheckbox = $("input[name='" + settings.checkboxname + "']").length;

                if (countChecked == 0) {
                    $(obj).attr('checked', false);
                } else if (countCheckbox == countChecked) {
                    $(obj).attr('checked', true);
                }
            });
        });

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



