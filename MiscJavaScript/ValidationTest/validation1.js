function validate1() {
	var first = nameCheck("first name");
	var last = nameCheck("last name");
	var gender = dropCheck("gender");
	var state = dropCheck("state");
	var firstImg = getImage(first, "first name");
	var firstError = getNotification(first, "first name");
	document.getElementById("First name").appendChild(firstImg);
	document.getElementById("First name").appendChild(firstError);
	var lastImg = getImage(last, "last name");
	var lastError = getNotification(last, "last name");
	document.getElementById("Last name").appendChild(lastImg);
	document.getElementById("Last name").appendChild(lastError);
	var genderImg = getImage(gender, "gender");
	var genderError = getNotification(gender, "gender");
	document.getElementById("Gender").appendChild(genderImg);
	document.getElementById("Gender").appendChild(genderError);
	var stateImg = getImage(state, "state");
	var stateError = getNotification(state, "state");
	document.getElementById("State").appendChild(stateImg);
	document.getElementById("State").appendChild(stateError);
	
	if(first && last && gender && state){
		location.replace("validation2.html");
	}
}

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }
	switch(ID){
		case "first name":
			label.innerHTML = bool ? "" : "Please enter first name";
			break;
		case "last name":
			label.innerHTML = bool ? "" : "Please enter last name";
			break;
		case "gender":
			label.innerHTML = bool ? "" : "Please select an option";
			break;
		case "state":
			label.innerHTML = bool ? "" : "Please select an option";
			break;
		default:
			label.innerHTML  = "";
	}
    return label;
}

function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function nameCheck(ID) {
	console.log(document.getElementById(ID).value);
	if(document.getElementById(ID).value != ""){
		return true;
	}
	return false;
}

function dropCheck(ID) {
	console.log(document.getElementById(ID).value);
	if(document.getElementById(ID).value != "select"){
		return true;
	}
	return false;
}
