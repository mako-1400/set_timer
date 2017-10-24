

jQuery(function($){
  $(".up_timer01").each(function(index, target) {
    var startDate = new Date("2017/10/25 14:15");
    var endDate = new Date("2017/10/25 14:30");
    var nowDate = new Date();

    if (startDate) {
      startDate = new Date(startDate);
    } else {
      startDate = nowDate;
    }
    if (endDate) {
      endDate = new Date(endDate);
    }

    if (startDate <= nowDate && (!endDate || nowDate <= endDate)) {
      $(this).show();
    } else {
      $(this).remove();
    }
  });
});
