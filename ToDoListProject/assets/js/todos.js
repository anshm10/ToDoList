// Check off specific todos by clickinng
$("ul").on("click", "li", function() {
	// if($(this).css("color")==="rgb(128, 128, 128)") {
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none"	
	// 	})
	// }
	// else {
	// 	$(this).css({
	// 	color: "grey",
	// 	textDecoration: "line-through"
	// 	})//end of this
	// }//end of else
	$(this).toggleClass("completed");
})//end of function

//Click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove()
	});
	event.stopPropergation();
})

$("input[type='text'").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
	}
})

$(".fa-pencil-alt").click(function() {
	$("input[type='text'").fadeToggle();

})