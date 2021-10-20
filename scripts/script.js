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
        from = $( "#from" )
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true
        })
        .on( "change", function() {
            to.datepicker("option", "minDate", getDate(this));
            startDate = $(this).datepicker("getDate");
            createVisualize();
        }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true
        })
        .on( "change", function() {
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
});


// Construct visual
const container = document.querySelector('.root__container');

function createVisualize() {
    let all = (endDate - startDate) / (24 * 3600 * 1000);
    let progress = (nowDate - startDate) / (24 * 3600 * 1000);
    //alert(progress);

    for (let i = 1; i <= all; i++) {
        if (i <= progress) {
            container.insertAdjacentHTML('beforeend', '<span title="' + i + '" class="square square_active"></span>');
            //container.innerHTML += '<span class="square square_active"></span>';
        } else {
            container.insertAdjacentHTML('beforeend', '<span title="' + i + '" class="square"></span>');
            //container.innerHTML += '<span class="square"></span>';
        }
    }
}




// FOR DEBAGGING ***********
let test = document.querySelector('#test');
function testAlert() {
    alert((nowDate - $('#from').datepicker("getDate"))  / (24 * 3600 * 1000));
    //alert(($('#to').datepicker("getDate") - $('#from').datepicker("getDate")) / (24 * 3600 * 1000));
}
test.addEventListener('click', testAlert);