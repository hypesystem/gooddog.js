(function($) {
    //Centering an element
    function gd_center($element, duration) {
        duration = typeof duration !== "undefined" ? duration : 0;

        $element.animate({
            'left': ($(window).width() / 2) -
                    ($element.width() / 2) -
                    parseInt($element.css('padding-left'))
        }, duration);
    }
    
    //Placing element in middle
    function gd_middle($element, duration) {
        duration = typeof duration !== "undefined" ? duration : 0;

        $element.animate({
            'top': ($(window).height() / 2) -
                   ($element.width() / 2) -
                   parseInt($element.css('padding-top'))
        }, duration);
    }

    //Main function delegates responsibility
    function gooddog(options) {
        //Find settings for call
        //TODO: Add options: animate (true|false), stretch (x|y|both)
        options = typeof options !== "undefined" ? options : {};
        options = $.extend({
            fix: "leave",        /* fix|unfix|leave */
            y: "leave",            /* natural|middle|top|bottom|leave */
            x: "leave"            /* natural|center|left|right|leave */
        }, options);
        
        //Act on each element of potential set
        return this.each(function() {
            var $this = $(this);
        
            //Find current position
            var current = $this.offset();
            
            //Find natural position (unset positioning vars)
            var old_pos = $this.css('position');
            $this.css('position','static');
            var natural = $this.offset();
            
            //Fix or absolute
            switch(options.fix) {
                case "fix":
                    $this.css('position','fixed');
                    break;
                case "unfix":
                    $this.css('position','absolute');
                    break;
                case "leave":
                    $this.css('position',old_pos);
                    break;
                default:
                    $.error("Unknown option fix '"+options.fix+"' in goddog");
            }
            
            //Set x
            switch(options.x) {
                case "left":
                    $this.css('left',0).css('right','');
                    break;
                case "right":
                    $this.css('left','').css('right',0);
                    break;
                case "natural":
                    $this.css('left',natural.left).css('right','');
                    break;
                case "leave":
                    $this.css('left',current.left).css('right','');
                    break;
                case "center":
                    gd_center($this);
                    break;
                default:
                    $.error("Unknown option x '"+options.x+"' in gooddog");
                    break;
            }
            
            //Set y
            switch(options.y) {
                case "top":
                    $this.css('top',0).css('bottom','');
                    break;
                case "bottom":
                    $this.css('top','').css('bottom',0);
                    break;
                case "natural":
                    $this.css('top',natural.top).css('bottom','');
                    break;
                case "leave":
                    $this.css('top',current.top).css('bottom','');
                    break;
                case "middle":
                    gd_middle($this);
                    break;
                default:
                    $.error("Unknown option y '"+options.y+"' in gooddog");
                    break;
            }
            
        }
    }
    
    //Bind function to jQuery prototype
    $.fn.gooddog = gooddog;
})(jQuery);