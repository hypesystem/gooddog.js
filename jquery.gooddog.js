(function($) {
	//Main function delegates responsibility
	function gooddog(options) {
		//Find settings for call
		//TODO: Add options: animate (true|false), stretch (x|y|both)
		options = typeof options !== "undefined" ? options : {};
		options = $.extend({
			fix: "leave",		/* fix|unfix|leave */
			y: "leave",			/* natural|middle|top|bottom|leave */
			x: "leave"			/* natural|center|left|right|leave */
		}, options);
		
		//Act on each element of potential set
		return this.each(function() {
			var $this = $(this);
		
			//Find current position
			//TODO: ...
			var curX, curY;
			
			//Find natural position (unset positioning vars)
			//TODO: ...
			var natX, natY;
			
			//Fix or absolute
			//TODO: ...
			
			//Set x
			switch(options.x) {
				case "left":
					$this.css('left',0).css('right','');
					break;
				case "right":
					$this.css('left','').css('right',0);
					break;
				case "natural":
					$this.css('left',natX).css('right','');
					break;
				case "leave":
					$this.css('left',curX).css('right','');
					break;
				case "center":
					gd_center($this);
					break;
				default:
					$.error("Unknown option x '"+options.x+"' in gooddog");
					break;
			}
			
			//Set y
			//TODO: ...
			
		}
	}
	
	//Bind function to jQuery prototype
	$.fn.gooddog = gooddog;
})(jQuery);