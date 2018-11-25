'use strict()';
var userInputid = document.getElementById('add-user-id');
var userInputpass = document.getElementById('add-user-pass');
var validate=document.getElementById('validation-message');
var userObjects = [];
var userdetails = function() {
    // debugger;
    var user = {
        username: userInputid.value,
        password: userInputpass.value
    };
    adduserdetailsStorage(user);
    loaduserFromStorage();
};
var adduserdetailsStorage = function(user) {
    debugger;
    userObjects.push(user); //Adding the objects to Array
    //JSON.stringify-to convert the Array of object to JSON format,After
    // coverting to store the Array of objects to localStorage property
    localStorage.setItem('userObjects', JSON.stringify(userObjects));
}
var loaduserFromStorage = function() {
    debugger;
    var str = localStorage.getItem('userObjects');
    if (str) {
        //JSON.parse-to convert the JSON format to Array of object. 
        userObjects = JSON.parse(str);
    }
};
var AddUser = function(event) {
    debugger;
    event.preventDefault();
    if (userInputid.value === "" || userInputpass.value === "") {
        document.getElementById('validation-message').innerHTML = 'Please Add the User';
    } else {
        userdetails();
        userInputid.value = '';
        userInputpass.value = '';
        document.getElementById('validation-message').innerHTML = 'User added successfully';
        

    }

};
var validateUser = function(user) {
    debugger;
    if (userInputid.value === "" || userInputpass.value === "")
    {
document.getElementById('validation-message').innerHTML = 'Please enter the username and password';
    }
    else
    {
        debugger;
      validateuser1();
    
    }
    
    
};
var validateuser1=function(user)
{
  var str = localStorage.getItem("userObjects");
    var str1 = JSON.parse(str);
    for (var i = 0; i < str1.length; i++) {
    var str3 = str1[i]['username'];
    var str4 = str1[i]['password'];
  if (userInputid.value === str3 || userInputpass.value === str4) {
        document.getElementById('validation-message').innerHTML = 'Login successfully';
        window.location.href = "ProductList.html";
    } else {
        document.getElementById('validation-message').innerHTML = 'Login failed';
    }
  }
  };
document.getElementById('btn-submit').addEventListener('click', validateUser, false);
document.getElementById('btn-adduser').addEventListener('click', AddUser, false);
window.onload = function() {
    debugger;
};

loaduserFromStorage();
