$(document).ready(function(){

	var newTitle = $('#listName');
	var addButton = $('#addButton');

	// EDITS AN EXISTING TITLE
	function existingTitleClick(){
		$('#existingTitle').click(function(){
			$('#existingTitle').replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "'+ $('#existingTitle').text() + '">');
			$('#inputField').focus(); // PUTS INPUT INTO FOCUS
			$('#inputField').focusout(function(){  // SETS TITLE ON CLICK OUT OF INPUT BOX
				$('#inputField').replaceWith('<span id="existingTitle" class = "title"><p>' + $('#inputField').val() + '</p></span>');
				existingTitleClick();
		}); //REPLACES TITLE ON CLICK OUT
			$(document).keypress(function(e) {  // SETS TITLE ON ENTER KEY
   				if(e.keyCode == 13) {
        		$('#inputField').replaceWith('<span id="existingTitle" class = "title"><p>' + $('#inputField').val() + '</p></span>');
    	}
    			existingTitleClick();
    		}); // REPLACES TITLE ON ENTER
		});
		
		
	} 
	
	// ADDS A NEW TITLE
	newTitle.click(function(){
		newTitle.replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "">');
		$('#inputField').focus(); // PUTS INPUT INTO FOCUS
		$('#inputField').focusout(function(){  // SETS TITLE ON CLICK OUT OF INPUT BOX
			$('#inputField').replaceWith('<span id="existingTitle" class = "title"><p>' + $('#inputField').val() + '</p></span>');
			existingTitleClick();
		}); //REPLACES TITLE ON CLICK OUT
		$(document).keypress(function(e) {  // SETS TITLE ON ENTER KEY
   			if(e.keyCode == 13) {
        		$('#inputField').replaceWith('<span id="existingTitle" class = "title"><p>' + $('#inputField').val() + '</p></span>');
    	}
    		existingTitleClick();
    	}); // REPLACES TITLE ON ENTER
    	
	});
	
	
	// EDIT A LIST ITEM
	function editListItem(){
		$('p.list').click(function(){
			console.log("I work");
			$(this).replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "Replace Me">');
		});	
	}
		
	
	addButton.click(function(){
		$('p').last().append('<div><input type="text" id = "toDoItem" class = "input" value= ""></div>');
		$('#toDoItem').focus();
		$('#toDoItem').focusout(function(){
			$('#toDoItem').replaceWith('<p class = "list">' + $('#toDoItem').val() + '</p>');
			editListItem();
		});	
		$(document).keypress(function(e) {  // SETS TITLE ON ENTER KEY
   			if(e.keyCode == 13) {
        		$('#toDoItem').replaceWith('<p class = "list">' + $('#toDoItem').val() + '</p>');
        		editListItem();
    		}    		
		});
	});	
	addButton.hover(function(){
		addButton.css('color', 'red');
	});
	addButton.mouseout(function(){
		addButton.css('color', 'blue');
	});

});