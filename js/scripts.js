$(document).ready(function () {
  var currentList;
  $("form#toDo").submit(function (event) {
    event.preventDefault();
    $("h2#taskTitle").text("");

    $(".pop-up-list").empty();
    $("h2#taskTitle").text("");

    var inputtedList = $("input#userList").val();

    var list = {
        name: inputtedList,
        tasks: []
    }
    currentList = list;

    $("#userList").val("");
    console.log(list.name);
    console.log(list)
    $("#initial-list").append("<li><span class='selector'>" + inputtedList + "</span></li>");
    $(".selector").last().click(function () {
      $("#pop-up").show();
      $("h2#taskTitle").text(inputtedList);
      $(".pop-up-list").text("")
      currentList = list;
      console.log(currentList.tasks.length);
      for (var i = 0; i<currentList.tasks.length; i++){
        $(".pop-up-list").append("<li><span class='task-selector'>" + currentList.tasks[i] + "</span></li>");
      };

    });
  });

  $("form#tasks").submit(function(event) {
    //console.log(currentList.name);
    event.preventDefault();
    //want each ?
    var inputtedTask = $("input#listToDo").val();
    $("#listToDo").val("");
    currentList.tasks.push(inputtedTask);
    console.log(currentList.tasks);

    //console.log(inputtedTask);
    $(".pop-up-list").append("<li><span class='task-selector'>" + inputtedTask + "</span></li>");

  });
});
