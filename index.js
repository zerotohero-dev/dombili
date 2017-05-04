
const scrollTop = () => window.pageYOffset ||
    ( document.documentElement && document.documentElement.scrollTop ) ||
    document.body.scrollTop;

const scrollToTop = () => window.scrollTo(0, 0);

export { scrollToTop, scrollTop };
