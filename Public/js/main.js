"use strict";

$(document).ready(async () => {
    const data = await fetch('/data');
    const areaCode = await data.json();
    for (let i = 0; i < areaCode.length; i++) {
        const str2 = `
        <option value=${areaCode[i].dial_code} >${areaCode[i].dial_code}</option>`;
        $("select").append(str2);
        const str = `
        <li value=${areaCode[i].dial_code} ><span> ${areaCode[i].name} (${areaCode[i].dial_code})</span></li>`;
        $("#area-codes").append(str);
    }
});

$("#area-codes").on('click', 'li', (e) => {
    // console.log(e.currentTarget.value)
    $("#area-code-value").attr("value", e.currentTarget.innerText)
    $("#countryCode").text(`+${e.currentTarget.value}`);
    $("select option").filter(function () {
        return $(this).text() == e.currentTarget.value;
    }).attr('selected', true);
    $('#area-codes').toggleClass('animate');
})


$('.bi-chevron-down').click(() => {
    $('#area-codes').toggleClass('animate')
})


// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();


// Initiate the wowjs
new WOW().init();


// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});


// Typed Initiate
if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    var typed = new Typed('.typed-text-output', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}


// Smooth scrolling to section
$(".btn-scroll").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 0
        }, 1, 'easeInOutExpo');
    }
});


// Skills
$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, { offset: '80%' });


// Portfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});
$('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
});


// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1
});


// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1, 'easeInOutExpo');
    return false;
});

// Bootstrap Validations
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
