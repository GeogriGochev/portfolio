const eventScroll = () => {
    window.onscroll = () => {
        const body = document.body;
        let doc = document.documentElement;
        doc = (doc.clientHeight) ? doc : body;
    
        const distance = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    
        distance > 100 ? document.querySelectorAll('.header, .page-wrapper').forEach( e => e.classList.add('scroll')) :  document.querySelectorAll('.header, .page-wrapper').forEach( e => e.classList.remove('scroll'));
        distance > 700 ? document.querySelector('.scrollTop').classList.add('show') : document.querySelector('.scrollTop').classList.remove('show');

        let isInViewport = function (elem) {
            let sectionPosition = elem.getBoundingClientRect();
            return (
                sectionPosition.top >= 0 &&
                sectionPosition.left >= 0 &&
                sectionPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                sectionPosition.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        let animatedSections = document.querySelectorAll('.animated');
        animatedSections.forEach( (el) => {        
        if (isInViewport( el)) {
            el.classList.add('go');
        }
        })
    };
    
    
}
export default eventScroll;
