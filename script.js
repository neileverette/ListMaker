$(document).ready(function(){


	function editTitle(){
		//CLICK ON LABEL - CHANGES TO INPUT BOX	
		$('#listName').replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "">');
		$('#inputField').focus();
		titleClickLabel();
		titleSaveTitle();
		}	

	function titleClickLabel(){
		//CLICK ON LABEL - CHANGES TO INPUT BOX	
		$(listTitle).replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "">');
		$('#inputField').focus();
		}	
	function editLabel(){
		//CLICK ON LABEL - CHANGES TO INPUT BOX	
		$('#listNameNew').replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "">');
		$('#inputField').focus();
		}		
	function updateHeader(){
		console.log("I work");
	}	
	function titleSwapContent(){
		// ON F0CUS, SWITCHES CONTENT
		$('input[name=listName]').focus(function(){
			$('input[name=listName]').val('');
			});
		}		
	function titleSaveTitle(){
		// ON F0CUS OUT, SWITCHES CONTENT
		$('input[name=listName]').focusout(function(){
		var newTitle = $('input[name=listName]').val();
			$('input[name=listName]').replaceWith('<div id="listName" class="title">' + newTitle +'</div>');
		$('#listName').click(function(){
				console.log("I work");
				editTitle();
			});
			});
}


	var addButton = $('#addButton');
	var listTitle = $('#listName');
	
	
	$(listTitle).click(function(){
		
		titleClickLabel(); // CLICK TITLE TO EDIT
		titleSaveTitle();	// SAVES TITLE TO PAGE	
	});	
	
	$(addButton).mouseover(function(){
		$(addButton).css('color', 'red');
	});
	
	$(addButton).mouseout(function(){
		$(addButton).css('color', 'blue');
	});
	
	$(addButton).click(function(){
		console.log("I work");
	})	

});


