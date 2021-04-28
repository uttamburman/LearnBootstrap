$(document).ready(function(){
    $('.batchOffering').keypress(function (e) {
      if (e.which == 13) {
        var i=$('.batchOffering').val();
        console.log(i);
        $('.schedules_wrapper').append("<div class=\"row\"><div class=\"col\"><label for=\"batchSchedule\">Day</label></div><div class=\"col\"><label for=\"batchSchedule\">Time</label></div></div>");
        while(i>0){
          
          $('.schedules_wrapper').append("<div class=\"row\"><div class=\"col\"><div class=\"form-group col-md-10\"><input type=\"text\" class=\"form-control batchSchedule"+i+"\" id=\"batchOffering\"></div></div><div class=\"col\"><div class=\"form-group col-md-10\"><input type=\"text\" class=\"form-control batchSchedule"+i+"\" id=\"batchOffering\"></div></div> <button class=\"btn btn-light\" type=\"button\" onClick=\"addBatch("+i+")\">Add</button><button class=\"btn btn-light\" type=\"button\">Delete</button></div");
          i--;
        }
        
        return false;    //<---- Add this line
      } 
    });
});

