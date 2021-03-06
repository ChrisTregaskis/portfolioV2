$(document).ready(function() {

    position = 0;

    $(window).scroll(function() {
        console.log(document.scrollingElement.scrollTop);
        var scroll = document.scrollingElement.scrollTop;

        //header -- 1
        if(scroll > position) {
            if(scroll > 500) {
                $('.headers-1').css('opacity', '0');
                $('.headers-1').css('transition', 'opacity 0.6s');
                $('.headers-2').css('opacity', '1');
                $('.headers-2').css('transition', 'opacity 0.6s');
            }
        } else {
            $('.headers-1').css('opacity', '1');
            $('.headers-1').css('transition', 'opacity 0.6s');
            $('.headers-2').css('opacity', '0');
            $('.headers-2').css('transition', 'opacity 0.6s');
            $('.title-about-me').css('margin', '0');
            $('.title-about-me').css('transition', 'margin 1s');
        }

        position = scroll;

        //header -- 2
        if(scroll > 500) {
            $('.header-content-2').css('visibility', 'visible');
        }

        if(scroll > 550) {
            $('.header-content-2').css('opacity', '1');
            $('.header-content-2').css('transition', 'opacity 2s');
            $('.title-about-me').css('margin', '10px 0');
            $('.title-about-me').css('transition', 'margin 1s');
            $('.chrisPicMain').css('transform', 'scale(1)');
            $('.chrisPicMain').css('transition', 'transform 1s');
        }

        if(scroll < 400) {
            $('.header-content-2').css('visibility', 'hidden');
        }

        if(scroll < 549) {
            $('.header-content-2').css('opacity', '0');
            $('.header-content-2').css('transition', 'opacity 2s');
        }

        //disable wave fixed position when skills section hit
        function checkOffSet() {
            if($('.wave').offset().top + $('.wave').height() >= $('.skills-container').offset().top - 10)
                $('.wave').css('position', 'absolute');
            if($(document).scrollTop() + window.innerHeight < $('.skills-container').offset().top)
                $('.wave').css('position', 'fixed');
        }

        checkOffSet();

        if(scroll > 750) {
            $('.header-content').css('z-index', '-1');
        }

        if(scroll < 749) {
            $('.header-content').css('z-index', '20');

        }

        if(scroll > 1150) {
            $('.headers-1').css('opacity', '0');
            $('.headers-1').css('transition', 'opacity 0.6s');
            $('.headers-2').css('opacity', '0');
            $('.headers-2').css('transition', 'opacity 0.6s');
        }

        if(scroll > 1000) {
            $('.skills-box').css('opacity', '1');
            $('.skills-box').css('transition', 'opacity 1s');

            $('#skills-container-h1').css('padding', '10px 0 0 0');
            $('#skills-container-h1').css('transition', 'padding 1s');
            $('.skills-buttons').css('margin', '10px 0 0 0');
            $('.skills-buttons').css('transition', 'margin 1s');
            $('#radar-chart-overview').css('margin', '10px 0 0 0');
            $('#radar-chart-overview').css('transition', 'margin 1s');

        }

        if (scroll < 1100) {
            $('.skills-box').css('opacity', '0');
            $('.skills-box').css('transition', 'opacity 1s');

            $('#skills-container-h1').css('padding', '100px 0 0 0');
            $('#skills-container-h1').css('transition', 'padding 1s');
            $('.skills-buttons').css('margin', '80px 0 0 0');
            $('.skills-buttons').css('transition', 'margin 1s');
            $('#radar-chart-overview').css('margin', '50px 0 0 0');
            $('#radar-chart-overview').css('transition', 'margin 1s');
        }

        if (scroll > 1200) {
            $('.header-content-2').css('opacity', '0');
            $('.header-content-2').css('transition', 'opacity 1s');
        }

        if (scroll < 1199) {
            $('.header-content-2').css('opacity', '1');
            $('.header-content-2').css('transition', 'opacity 1s');
        }

        if (scroll > 1339) {
            $('.header-content-2').css('display', 'none');
        }

        if (scroll < 1338) {
            $('.header-content-2').css('display', 'block');
        }

        //progress bar --
        var scrollView = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        scrollPercent = (scrollView / (dh-wh)) * 100;
        $('#progressBar1').css('height', scrollPercent + '%');

    });

});