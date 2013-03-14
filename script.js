$(document).ready(function(){


	function swapTitleContents(){		
		$('#listName').replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "">');
		$('#inputField').focus();
		//commmitTitle();
		}	//SWAPS THE HEADER CONTENT
	function titleClickLabel(){
		$(listTitle).replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "">');
		$('#inputField').focus();
		}	
	function editLabel(){
		//CLICK ON LABEL - CHANGES TO INPUT BOX	
		$('#listNameNew').replaceWith('<input type="text" id="inputField" class = "input" name="listName"  value= "">');
		$('#inputField').focus();
		}			
	function titleSwapContent(){
		// ON F0CUS, SWITCHES CONTENT
		$('input[name=listName]').focus(function(){
			$('input[name=listName]').val('');
			});
		}		
	function saveTitle(){
		var newTitle = $('input[name=listName]').val();
		$('input[name=listName]').replaceWith('<div id="namedList" class="title">' + newTitle +'</div>');
		editTitle();
	}
	function checkInput(){
	
		if ($('input[name=listName]').val() ===""){

		};
		};

	var addButton = $('#addButton');
	var listTitle = $('#listName');
	
	newListTitle();
	
	
	
	function newListTitle(){ 
		$('#listName').click(function(){
			titleClickLabel(); 
	});
	};// FUNCTION TO ADD NAME TO UNAMED LIST	
	function editTitle(){
		$('#namedList').click(function(){
			swapTitleContents();
		});
		}; // FUNCTION TO EDTI A NAMED LIST	
	
	
	//MAKE THESE INTO FUNCTIONS
	
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


