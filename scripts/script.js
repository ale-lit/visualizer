// Change page size
$('.root').css('min-height', $(document).height() + 'px');

// Get current time
let nowDate = new Date();

let startDate;
let endDate;

// Calendar widget
$(function () {
  // Options
  $.datepicker.setDefaults({
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    firstDay: 1,
    dateFormat: "dd.mm.yy",
    changeYear: true,
  });

  var dateFormat = "dd.mm.yy",
    from = $("#from")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
      })
      .on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
        startDate = $(this).datepicker("getDate");
        if (endDate) createVisualize(startDate, endDate);
      }),
    to = $("#to")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
      })
      .on("change", function () {
        from.datepicker("option", "maxDate", getDate(this));
        endDate = $(this).datepicker("getDate");
        if (startDate) createVisualize(startDate, endDate);
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }

  // Construct visual
  function createVisualize(start, end) {
    if (start && end) {
      // Clear container
      $(".visual-block").html("");

      // Calculate number of items and progress
      let all = (end - start) / (24 * 3600 * 1000);
      let progress = (nowDate - start) / (24 * 3600 * 1000);

      // test
      //let all = 510;
      //let progress = 29;

      // Calculate size work area
      let vBlockWidth = $(document).width() - 50 - 3;
      if (vBlockWidth > 1227) vBlockWidth = 1227;
      let vBlockHeight = $(document).height() - 190 - 3;

      // Calculate item size
      let itemSize = (vBlockWidth * vBlockHeight) / all;
      itemSize = Math.floor(Math.sqrt(itemSize) - 3);
      if (itemSize < 1) {
        itemSize = 1;
      } else if (itemSize > 50) {
        itemSize = 50;
      }

      // Add items
      for (let i = 1; i <= all; i++) {
        if (i <= progress) {
          $(".visual-block").append(
            `<span title="${i}" class="square square_active" style="width: ${itemSize}px; height: ${itemSize}px;"></span>`
          );
        } else {
          $(".visual-block").append(
            `<span title="${i}" class="square" style="width: ${itemSize}px; height: ${itemSize}px;"></span>`
          );
        }
      }

      // Display result

      $(".setting").fadeOut();
      $(".visual-block").css("display", "flex");
    }
  }

  // FOR DEBAG ***********
  let st = new Date(2021, 7, 23); 
  let en = new Date(2022, 4, 9); 
  $("#test").on("click", function() {
    createVisualize(st, en);
  });
});
