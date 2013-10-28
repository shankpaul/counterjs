(function ($) {
	$.fn.counter = function (options,callback) {
	var callback = callback || "";
	var self=$(this);
	var defaults = {limit:100,speed:1000}
	options = $.extend(defaults, options);
	$({ value: self.text() }).animate({ value: options.limit }, {
            duration: options.speed,
            easing: 'linear',
            step: function (a,b) {
                self.text(Math.floor(a));
            },
            complete: function () {
			if(callback!="")
				callback();
            }
        });
};
})(jQuery);
