$(document).ready(function() {
    var defaultRevealBottom = {
        distance: '150%',
        origin: 'bottom',
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
    }

    var defaultRevealTop = {
        distance: '150%',
        origin: 'top',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        delay: 500
    }

    var defaultWithIntervalTop = {
        distance: '150%',
        origin: 'top',
        interval: 300
    }

    var defaultWithIntervalBottom = {
        distance: '150%',
        origin: 'bottom',
        interval: 300
    }

    var defaultWithIntervalLeft = {
        distance: '150%',
        origin: 'left',
        delay: 500,
        interval: 300
    }

    var defaultWithIntervalRight = {
        distance: '150%',
        origin: 'right',
        interval: 300
    }

    const srreveal = ScrollReveal().reveal;

    srreveal('.course-data', defaultRevealBottom);
    srreveal('.course-name', defaultRevealTop);
    srreveal('.course-info', defaultWithIntervalLeft);
    srreveal('.fast-access-link', defaultWithIntervalBottom);
    srreveal('.phone', defaultWithIntervalTop);
    srreveal('.social-item', defaultWithIntervalTop);
    srreveal('.school-areas-link-item', defaultWithIntervalRight);
    srreveal('.footer .brand', defaultWithIntervalLeft);
    srreveal('.app-link', defaultWithIntervalBottom);
    srreveal('.footer .social-item', defaultWithIntervalBottom);

});