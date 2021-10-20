let container = document.querySelector('.root__container');
let all = '2000';
let progress = '35';

for (let i = 1; i <= all; i++) {
    if (i <= progress) {
        container.insertAdjacentHTML('beforeend', '<span title="' + i + '" class="square square_active"></span>');
        //container.innerHTML += '<span class="square square_active"></span>';
    } else {
        container.insertAdjacentHTML('beforeend', '<span title="' + i + '" class="square"></span>');
        //container.innerHTML += '<span class="square"></span>';
    }
}


let startTime = document.querySelector('#from').value;

//startTime.value = '2017-06-01T08:30';

let test = document.querySelector('#test');

function testAlert() {
    alert(($('#to').datepicker("getDate") - $('#from').datepicker("getDate")) / (24 * 3600 * 1000));
}

test.addEventListener('click', testAlert);


var date = new Date();
console.log(date);


$( function() {


    $.datepicker.setDefaults({
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        firstDay: 1,
        dateFormat: "dd.mm.yy",
        changeYear: true
    });

    //var monthNames = $("#from").datepicker( "option", "monthNames" );

    var dateFormat = "dd.mm.yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
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
  } );

//   $.datepicker.formatDate( "DD, MM d, yy", new Date( 2007, 7 - 1, 14 ), {
//     dayNamesShort: $.datepicker.regional[ "fr" ].dayNamesShort,
//     dayNames: $.datepicker.regional[ "fr" ].dayNames,
//     monthNamesShort: $.datepicker.regional[ "fr" ].monthNamesShort,
//     monthNames: $.datepicker.regional[ "fr" ].monthNames
//   });
