function LocalStorage()
{
	//alert("hiii");
		if(LocalStorage)
		{
			document.getElementById("1").addEventListener("submit",LoSto());
			createtable();
		}

}
function LoSto()
{
	//alert("hi");
	var user = document.getElementById("User").value;
	localStorage.setItem("User", user);
	var password = document.getElementById("Password").value;
	localStorage.setItem("Password", password);
	var email = document.getElementById("Email").value;
	localStorage.setItem("Email", email);
	var phn = document.getElementById("Phone").value;
	localStorage.setItem("Phone", phn);
	var address = document.getElementById("Address").value;
	localStorage.setItem("Address", address);

}
function createtable()
{
//alert("hello");
	document.getElementById("usertab").innerHTML="User:";
	var printuser=document.getElementById("printuser");
	printuser.innerHTML=localStorage.getItem("User");
	
	document.getElementById("passwordtab").innerHTML="Password:";
	var printpassword=document.getElementById("printpassword");
	printpassword.innerHTML=localStorage.getItem("Password");

	document.getElementById("emailtab").innerHTML="Email:";
	var printemail=document.getElementById("printemail");
    printemail.innerHTML=localStorage.getItem("Email");

    document.getElementById("phonetab").innerHTML="Phone:";
	var printphone=document.getElementById("printphone");
    printphone.innerHTML=localStorage.getItem("Phone");

    document.getElementById("addresstab").innerHTML="Address:";
	var printaddress=document.getElementById("printaddress");
    printaddress.innerHTML=localStorage.getItem("Address");

}
    
