//script
$(document).ready(function () {
    $("form#toDo").submit(function (event) {
        event.preventDefault();
        $("h2#taskTitle").text("");

        $(".pop-up-list").empty();
        $("h2#taskTitle").text("");

        var todo = {
          lists: []
        }

        var List = {
            name: "",
            tasks: []
        }

        var task = {
            message: ""
        }

        var inputtedList = $("input#userList").val();

        $("#userList").val("");
        todo.lists.push(inputtedList);
       // console.log(List.name);
       // console.log(List)
        $("#initial-list").append("<li><span class='selector'>" + inputtedList + "</span></li>");
    });
});
