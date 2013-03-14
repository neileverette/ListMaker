$(document).ready(function(){

	var newTitle = $('#listName');
	var addButton = $('#addButton');
	var existingTitle = $('#existingTitle');

	function existingTitleClick(){
		console.log("I work");
	}

	newTitle.click(function(){
		newTitle.replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "">');
		$('#inputField').focus(); // PUTS INPUT INTO FOCUS
		$('#inputField').focusout(function(){  // SETS TITLE ON CLICK OUT OF INPUT BOX
			$('#inputField').replaceWith('<span id="listName" class = "title">' + $('#inputField').val() + '</span>');
			existingTitleClick();
		}); //REPLACES TITLE ON CLICK OUT
		$(document).keypress(function(e) {  // SETS TITLE ON ENTER KEY
   			if(e.keyCode == 13) {
        		$('#inputField').replaceWith('<span id="existingTitle" class = "title">' + $('#inputField').val() + '</span>');
    	}
    		existingTitleClick();
    	}); // REPLACES TITLE ON ENTER
    	
	});	

	addButton.click(function(){
	//console.log("Add Button Clicked");
	});	
	addButton.hover(function(){
		addButton.css('color', 'red');
	});
	addButton.mouseout(function(){
		addButton.css('color', 'blue');
	});

});