$.webshims.polyfill();

$(function() {

	var nameInput = document.getElementById('name');
	var ageInput = document.getElementById('age');
	var emailInput = document.getElementById('email');
	var colorInput = document.getElementById('color');

	// Retrieve values from local storage
	if(Modernizr.localstorage) {

		nameInput.value = localStorage.getItem('name');
		ageInput.value = localStorage['age'];
		emailInput.value = localStorage['email'];
		colorInput.value = localStorage['color'];
		
	}

	// Store values in local storage
	var regForm = document.getElementById('reg-form');
	regForm.onsubmit = function(event) {
		event.preventDefault();

		if(Modernizr.localstorage) {

			// Retrieve the values from the form
			var name = nameInput.value;
			var age = ageInput.value;
			var email = emailInput.value;
			var color = colorInput.value;
			
			// Store the values in local storage
			localStorage.setItem('name', name);
			localStorage.setItem('age', age);
			localStorage.setItem('email', email);
			localStorage.setItem('color', color);
			
		}
	
	};
	
	// Source: http://www.htmlgoodies.com/html5/javascript/drag-files-into-the-browser-from-the-desktop-HTML5.html#fbid=v1T4jCcE85g
	if(Modernizr.draganddrop) {
		
		var imageInput = document.getElementById('image');
		imageInput.ondrop = function(event) {
			event.preventDefault();
			
			var file = event.dataTransfer.files[0];
			
			if(file.type.match('image.*')) {
				
				var reader = new FileReader();
				reader.readAsDataURL(file);
				console.log(file);
				
				reader.onloadend = function(event) {
					
					var img = document.createElement('img');
					img.src = this.result;
					
					imageInput.innerHTML = "";
					imageInput.appendChild(img);
					
				}
				
			}
		}
		
		imageInput.ondragover = function(event) {
			event.preventDefault();
		}
	
	}

});