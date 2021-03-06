$(document).ready(function () {
    var dateStart = new Date(),
        day = dateStart.getDate(),
        month = dateStart.getMonth() + 2,
        year = dateStart.getFullYear(),
        dateEnd = new Date(year, month, day);

    $('.js-date-picker').datepicker({
        dateFormat: "dd.mm.yy",
        dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь","Ноябрь", "Декабрь" ]
    });
    $('.js-date-start').datepicker("setDate", dateStart);
    $('.js-date-end').datepicker("setDate", dateEnd);

    var popoverTemplateCustom = [
        '<div class="popover-custom" role="tooltip">',
            '<div class="arrow popover-custom-arrow"></div>',
            '<span class="popover-custom-close js-dismis-popover">&times;</span>',
            '<div class="popover-custom-content popover-content"></div>',
        '</div>'
    ].join('');

    var popoverContent = [
        '<div class="information">',
            '<p class="information-title">Адрес</p>',
            '<p>г. Комсомольск-на-Амуре</p>',
            '<p>ул. Двадцати восьми бакинских комиссаров</p>',
            '<p>дом 187, кор. 3, кв. 145</p>',
        '</div>',
        '<div class="information">',
            '<p class="information-title">Страхователь</p>',
            '<p>Семипалатинский Константин Апполинарьевич</p>',
            '<p>+7 499 123-34-43</p>',
            '<p>Дата рождения: 11.01.1987</p>',
        '</div>',
    ].join('');

    $('.js-popover-custom').popover({
        container: 'body',
        template: popoverTemplateCustom,
        placement: "bottom",
        html: true,
        content:  function () {
            return popoverContent;
        },
    });
});

$(document)
    .on('hidden.bs.popover', function (e) {
        $(e.target).data("bs.popover").inState = { click: false, hover: false, focus: false }
    })
    .on('click', '.js-dismis-popover', function () {
        $(this).closest('.popover-custom').popover('hide');
    });


