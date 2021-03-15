function validate2() {
	var email = emailCheck(document.getElementById("email").value);
	var phone = phoneCheck(document.getElementById("phone").value);
	var address = addressCheck(document.getElementById("address").value);
	var emailImg = getImage(email, "email");
	var emailError = getNotification(email, "email");
	document.getElementById("Email").appendChild(emailImg);
	document.getElementById("Email").appendChild(emailError);
	var phoneImg = getImage(phone, "phone");
	var phoneError = getNotification(phone, "phone");
	document.getElementById("Phone").appendChild(phoneImg);
	document.getElementById("Phone").appendChild(phoneError);
	var addressImg = getImage(address, "address");
	var addressError = getNotification(address, "address");
	document.getElementById("Address").appendChild(addressImg);
	document.getElementById("Address").appendChild(addressError);
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

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }
	switch(ID){
		case "email":
			label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric.";
			break;
		case "phone":
			label.innerHTML = bool ? "" : "Phone number should be in the form xxx-xxx-xxxx or xxxxxxxxxx where x are digits.";
			break;
		case "address":
			label.innerHTML = bool ? "" : "Address should be a city state pair seperated by a commma, where the state is in abreviated form. Example: Ames,IA";
			break;
		default:
			label.innerHTML  = "";
	}
    return label;
}

function emailCheck(email) {
    var atSplit = email.split('@');
	let regex = /^[a-z0-9]+$/i;
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0],regex)) {
        var periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1],regex)) {
            return true;
        }
    }
    return false;
}

function phoneCheck(phone) {
	var split = phone.split('-');
	let regex = /^[0-9]+$/;
	console.log(split[0].length);
	console.log(split.length);
	console.log(alphaNumCheck(split[0],regex));
	if ( split.length == 1 && split[0].length == 10 && alphaNumCheck(split[0],regex)){
		return true;
	}else if( split.length == 3 && split[0].length == 3 && split[1].length == 3
	&& alphaNumCheck(split[0] + split[1] + split[2],regex)) {
		return true;
	}
	return false;
}

function addressCheck(address) {
	var split = address.split(',');
	let regex1 = /^[a-z]+$/i;
	let regex2 = /^[A-Z]+$/;
	if( split.length == 2 && split[1].trim().length == 2 && alphaNumCheck(split[0],regex1) && alphaNumCheck(split[1].trim(),regex2)) {
		return true;
	}
	return false;
}


function alphaNumCheck(entry, reg) {
    let regex = reg;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}