
function testName(name){
	var regEx=/^[a-zA-Z]+$/;
	return regEx.test(name);
}

function nameInputVal(){
		var name=$("#name").val();
		if(testName(name)){
			alert("Name is valid!");
			$("#newUserName").html(name);
			return true;
		}
		else{
			alert("That is not a valid name!");
			return false;
		}
}

function testSurname(surname){
	var regEx=/^[a-zA-Z]+$/;
	return regEx.test(surname);
}

function surnameInputVal(){
		var surname=$("#surname").val();
		if(testSurname(surname)){
			alert("Surname is valid!");
			$("#newUserSurname").html(surname);
			return true;
		}
		else{
			alert("That is not a valid surname!");
			return false;
		}
}


function testPass(pass){
	var regEx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	return regEx.test(pass);
}

function passInputVal(){
		var pass=$("#password").val();
		if(testPass(pass)){
			alert("Password is valid!");
			$("#newUserPassword").html(pass);
			return true;
		}
		else{
			alert("That is not a valid password!");
			return false;
		}
}

function testEmail(email){
	var regEx=/[a-z0-9]+([-+._][a-z0-9]+){0,2}@.*?(\.(a(?:[cdefgilmnoqrstuwxz]|ero|(?:rp|si)a)|b(?:[abdefghijmnorstvwyz]iz)|c(?:[acdfghiklmnoruvxyz]|at|o(?:m|op))|d[ejkmoz]|e(?:[ceghrstu]|du)|f[ijkmor]|g(?:[abdefghilmnpqrstuwy]|ov)|h[kmnrtu]|i(?:[delmnoqrst]|n(?:fo|t))|j(?:[emop]|obs)|k[eghimnprwyz]|l[abcikrstuvy]|m(?:[acdeghklmnopqrstuvwxyz]|il|obi|useum)|n(?:[acefgilopruz]|ame|et)|o(?:m|rg)|p(?:[aefghklmnrstwy]|ro)|qa|r[eosuw]|s[abcdeghijklmnortuvyz]|t(?:[cdfghjklmnoprtvwz]|(?:rav)?el)|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw])\b){1,2}/;
	return regEx.test(email);
}

function emailInputVal(){
		var email=$("#email").val();
		if(testEmail(email)){
			alert("Email is valid!");
			$("#newUserEmail").html(email);
			return true;
		}
		else{
			alert("That is not a valid email address!");
			return false;
		}
}

function checkAll(){
	
	if(nameInputVal()&&surnameInputVal()&&passInputVal()&&emailInputVal())
	{
		alert("All inputs are correct.");
		
		$("#showForm").show();
	}
	else{
		alert("Please check your input.");
	}
}





		
$("#chkBtn").on("click",checkAll);