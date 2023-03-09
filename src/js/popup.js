import $ from 'jquery';

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.btn').popover();

$('.btn').on('click', function () {
    $('.btn').not(this).popover('hide');
});