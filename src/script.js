$('.mobile-nav-links i').on('click', function () {
    $('.nav-links').toggleClass('show')
})

$('.nav-link-item').on('click', function () {
    $('.nav-links').toggleClass('show')
})

$('.outside-link i').on('mouseover', function () {
    $(this).addClass("fa-flip")
})
$('.outside-link i').on('mouseout', function () {
    $(this).removeClass("fa-flip")
})
console.log(123)


