// Get current time
let nowDate = new Date();

let startDate;
let endDate;

// Calendar widget
$( function() {
    // Options
    $.datepicker.setDefaults({
        dayNamesMin: [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
        monthNames: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
        firstDay: 1,
        dateFormat: "dd.mm.yy",
        changeYear: true
    });

    var dateFormat = 'dd.mm.yy',
        from = $('#from')
        .datepicker({
            defaultDate: '+1w',
            changeMonth: true
        })
        .on('change', function() {
            to.datepicker('option', 'minDate', getDate(this));
            startDate = $(this).datepicker('getDate');
            createVisualize();
        }),
        to = $('#to').datepicker({
            defaultDate: '+1w',
            changeMonth: true
        })
        .on("change", function() {
            from.datepicker('option', 'maxDate', getDate(this));
            endDate = $(this).datepicker('getDate');
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
            $('.visual-block').html('');

            //let all = (endDate - startDate) / (24 * 3600 * 1000);
            //let progress = (nowDate - startDate) / (24 * 3600 * 1000);

            let all = 2000;
            let progress = 35;
            
            let vBlockWidth = $(document).width() - 50 - 3;
            let vBlockHeight = $(document).height() - 190 - 3;
            let itemPadding = (vBlockWidth) * (vBlockHeight) / all;
            itemPadding = ((Math.sqrt(itemPadding) + 3) / 4).toFixed(3);

            for (let i = 1; i <= all; i++) {
                if (i <= progress) {
                    $('.visual-block').append('<span title="' + i + '" class="square square_active" style="padding: ' + itemPadding + 'px;"></span>');
                } else {
                    $('.visual-block').append('<span title="' + i + '" class="square" style="padding: ' + itemPadding + 'px;"></span>');
                }
            }
            $('.setting').fadeOut();            
            $('.visual-block').css('display', 'flex');
        }
    }


    



    // FOR DEBAGGING ***********
    function testAlert() {
        //let all = 2000;
        //alert($('.visual-block').width());
        //alert($('.visual-block').height());
        //let itog = (($('.visual-block').width() - 3) * ($('.visual-block').height() - 3)) / all;
        //alert((Math.sqrt(itog) + 3) / 4);
        //alert((nowDate - $('#from').datepicker("getDate"))  / (24 * 3600 * 1000));
        //alert(($('#to').datepicker("getDate") - $('#from').datepicker("getDate")) / (24 * 3600 * 1000));
    }
    $('#test').on('click', testAlert);

});