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
		
			if ($('#inputField').val()===""){
				$('#inputField').replaceWith('<span id="existingTitle" class = "title"><p>List Name</p></span>');
				existingTitleClick();
				}else{
					$('#inputField').replaceWith('<span id="existingTitle" class = "title"><p>' + $('#inputField').val() + '</p></span>');
					existingTitleClick();
					}
					}); //REPLACES TITLE ON CLICK OUT
					
					
		$(document).keypress(function(e) {  // SETS TITLE ON ENTER KEY
   			if(e.keyCode == 13) {
   				if($('#inputField').val()===""){
        			$('#inputField').replaceWith('<span id="existingTitle" class = "title"><p>List Name</p></span>');
        		}else{
        			$('#inputField').replaceWith('<span id="existingTitle" class = "title"><p>' + $('#inputField').val() + '</p></span>');
        		}
    	}
    		existingTitleClick();
    	}); // REPLACES TITLE ON ENTER
    	
	});
	
	// TOGGLE CROSS OUT STYLE OF LIST
	function changeStyle(){
		//if($(this).)
	}
	
	// EDIT A LIST ITEM
	function editListItem(){
		$("span.notDone").click(function(){
			$(this).removeClass("notDone").addClass("done");
			editListItem();
		});	
		
		$("span.done").click(function(){
			$(this).removeClass("done").addClass("notDone");
			editListItem();
		});	
	}	
	
	
	
	function listItemHover(){
		
		$('span.notDone').mouseover(function(){
			$(this).css('color', 'red');
			//$(this)
		});
		
		$('span.notDone').mouseout(function(){
			$(this).css('color', 'black');
		});	
	}	
	
	addButton.click(function(){

		$('#addButton').after('<div><input type="text" id = "toDoItem" class = "listInput" value= ""></div>');
		$('#toDoItem').focus();
		$('#toDoItem').focusout(function(){
			$('#toDoItem').replaceWith('<div class = "listItem"><span class="notDone"><p>' + $('#toDoItem').val() + '</p></div>');
			editListItem();
			listItemHover();
		});	
		$(document).keypress(function(e) {  // SETS TITLE ON ENTER KEY
   			if(e.keyCode == 13) {
        		$('#toDoItem').replaceWith('<div class = "listItem"><span class="notDone"><p>' + $('#toDoItem').val() + '</p></div>');
        		editListItem();
        		listItemHover();
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