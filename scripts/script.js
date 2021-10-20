// Get current time
let nowDate = new Date();

let startDate;
let endDate;

// Calendar widget
$( function() {
    // Options
    $.datepicker.setDefaults({
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        firstDay: 1,
        dateFormat: "dd.mm.yy",
        changeYear: true
    });

    var dateFormat = "dd.mm.yy",
        from = $("#from")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true
        })
        .on("change", function() {
            to.datepicker("option", "minDate", getDate(this));
            startDate = $(this).datepicker("getDate");
            createVisualize();
        }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true
        })
        .on("change", function() {
            from.datepicker("option", "maxDate", getDate(this));
            endDate = $(this).datepicker("getDate");
            createVisualize();
        });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }
        
        return date;
    }


    // Construct visual
    function createVisualize() {
        if(startDate && endDate) {
            $('.root__container').html('');

            let all = (endDate - startDate) / (24 * 3600 * 1000);
            let progress = (nowDate - startDate) / (24 * 3600 * 1000);
            //alert(progress);

            for (let i = 1; i <= all; i++) {
                if (i <= progress) {
                    $('.root__container').append('<span title="' + i + '" class="square square_active"></span>');
                } else {
                    $('.root__container').append('<span title="' + i + '" class="square"></span>');
                }
            }
            $('.root__container').css('display', 'inline-block');
        }
    }



    // FOR DEBAGGING ***********
    function testAlert() {
        alert((nowDate - $('#from').datepicker("getDate"))  / (24 * 3600 * 1000));
        //alert(($('#to').datepicker("getDate") - $('#from').datepicker("getDate")) / (24 * 3600 * 1000));
    }
    $('#test').on('click', testAlert);

});