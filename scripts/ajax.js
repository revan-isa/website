$("#contact").submit(function (event) {
  $(".send").css("display", "none");
  $(".sending").css("display", "block");

  let ajaxRequest;

  event.preventDefault();

  /* Get from elements values */
  let values = $(this).serialize();

  ajaxRequest = $.ajax({
    url: "send.php",
    type: "post",
    data: values,
  });

  ajaxRequest.done(function () {
    $("#msg").css("display", "block");
    $(".send").css("display", "block");
    $(".sending").css("display", "none");
    $("input, textarea").val(function () {
      return this.defaultValue;
    });
  });

  ajaxRequest.fail(function () {
    $("#msg").html("There is error while submit");
  });
});

$("#cancel-btn").on("click", function () {
  $("#msg").hide();
});
