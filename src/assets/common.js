export default function Common() {
     // if element is on screen
    function isScrolledIntoView(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
      // if element is on screen go
    $(window).scroll(function () {
        $('.counter-value-wrapper, .image-wrapper').each(function () {
        if (isScrolledIntoView($(this)) && !isEnd) {
            countUp()
        }
        });
    });
}

