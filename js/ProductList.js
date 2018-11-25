'use strict';
var textproductname = document.getElementById('txtproductname');
var textproductcost = document.getElementById('txtproductcost');
var numproductid = document.getElementById('numproductid');
var productcount = document.getElementById('numproductcount');

var textproductname1 = document.getElementById('txtproductname1');
var textproductcost1 = document.getElementById('txtproductcost1');
var numproductid1 = document.getElementById('numproductid1');
var productcount1 = document.getElementById('numproductcount1');
var validationmessage = document.getElementById('validation-message');
var productObjects = [];
var SaveProduct = function(product) {
    debugger;
    var product = {
        name: textproductname.value,
        cost: textproductcost.value,
        id: generateId(),
        count: 1

    };

    SaveProductToLocalStorage(product);
    retrieveProductFromLocalStorage();
};

var SaveProductToLocalStorage = function(product) {
    debugger;
    if (txtproductname.value === "" || txtproductcost.value === "") {
        document.getElementById('validation-message').innerHTML = 'Please Add the Product';
    } else {
        productObjects.push(product); //Adding the objects values to Array

        // JSON.stringify-converts json format object value to string value
        localStorage.setItem('productObjects', JSON.stringify(productObjects));
        txtproductname.value = '';
        txtproductcost.value = '';
        numproductid.value = '';
    }
    var str = localStorage.getItem('productObjects');
    if (str) {
        // JSON.parse-converts json format string value to object value
        productObjects = JSON.parse(str);
        var len = productObjects.length;
        for (var i = 0; i < len; i++) {

            var product1 = productObjects[i]['name'];
            if (product1 === txtproductname.value) {
                var countincrement = productObjects[i]['count'];
                var totalcountitem = countincrement + 1;
                productObjects[i]['count'] = totalcountitem;
                // JSON.stringify-converts json format object value to string value
                localStorage.setItem('productObjects', JSON.stringify(productObjects));
                txtproductname.value = '';
                validationmessage.style.display = 'none';
            }
        }

    }

}
var retrieveProductFromLocalStorage = function() {
    // debugger;
    var str = localStorage.getItem('productObjects');
    if (str) {
        // JSON.parse-converts json format string value to object value 
        productObjects = JSON.parse(str);
        var len = productObjects.length;
        var render = "<table border='1'>";
        render += "<th>Id</th><th>Name</th><th>Cost</th><th>Count</th><th>Action</th><th>Action</th></tr>";
        for (var i = 0; i < len; i++) {
            render += "<tr><td>" + productObjects[i]['id']; + " </td>";
            render += "<td>" + productObjects[i]['name']; + "</td>";
            render += "<td>" + productObjects[i]['cost']; + "</td>";
            render += "<td>" + productObjects[i]['count']; + "</td>";
            render += '<button onclick="editproductitem(' + productObjects[i]['id'] + ')">Edit</button>';
            render += ' <button onclick="decrementitem(' + productObjects[i]['id'] + ')">Delete</button>';

        }
        render += "</table>";
        dvcontainer.innerHTML = render;
    }
}
var generateId = function() {
    // debugger;
    var charSet = '0123456789';
    var charSetSize = charSet.length;
    var charCount = 2;
    var id = '';
    for (var i = 1; i <= charCount; i++) {
        var randPos = Math.floor(Math.random() * charSetSize);
        id += charSet[randPos];
    }
    return id;
};
var editproductitem = function(id) {
    debugger;
    var str = localStorage.getItem('productObjects');
    if (str) {
        // JSON.parse-converts json format string value to object value 
        productObjects = JSON.parse(str);
        var len = productObjects.length;

        for (var i = 0; i < len; i++) {

            var product1 = productObjects[i]['id'];
            if (product1 == id) {
                var product4 = productObjects[i]['id'];
                var product1 = productObjects[i]['name'];
                var product2 = productObjects[i]['cost'];
                var product3 = productObjects[i]['count'];
                numproductid.value = product4;
                txtproductname.value = product1;
                txtproductcost.value = product2;
                productcount.value = product3;
            }

        }
    }
    var createbtn = document.getElementById("btnProductsave");
    var updatebtn = document.getElementById("btnProductupdate");
    createbtn.style.display = "none";
    updatebtn.style.display = "block";

};
var editproductitemrecords = function(product) {
    var str = localStorage.getItem('productObjects');
    if (str) {
        // JSON.parse-converts json format string value to object value 
        productObjects = JSON.parse(str);
        var len = productObjects.length;
        debugger;
        for (var i = 0; i < len; i++) {
            var product1 = productObjects[i]['id'];
            if (product1 === numproductid.value) {
                var product2 = txtproductname.value;
                var product3 = txtproductcost.value;
                productObjects[i]['name'] = product2;
                productObjects[i]['cost'] = product3;
                // JSON.stringify-converts json format object value to string value
                localStorage.setItem('productObjects', JSON.stringify(productObjects));
                txtproductname.value = '';
                txtproductcost.value = '';
                numproductid.value = '';
            }
        }


    }
    retrieveProductFromLocalStorage();
    var Createbtn = document.getElementById("btnProductsave");
    var Updatebtn = document.getElementById("btnProductupdate");
    console.log(Createbtn);
    Updatebtn.style.display = "none";
    Createbtn.style.display = "block";


};
var incrementitem = function() {
    debugger;
    if (txtproductname.value === '') {
        document.getElementById('validation-message').innerHTML = 'Pleases enter some product';
    } else

    {
        var str = localStorage.getItem('productObjects');
        if (str) {
            // JSON.parse-converts json format string value to object value 
            productObjects = JSON.parse(str);
            var len = productObjects.length;
            for (var i = 0; i < len; i++) {
                var product1 = productObjects[i]['name'];
                var countincrement = productObjects[i]['count'];
                if (product1 === txtproductname.value) {
                    var totalcountitem = countincrement + 1;
                    productObjects[i]['count'] = totalcountitem;
                    // JSON.stringify-converts json format object value to string value
                    localStorage.setItem('productObjects', JSON.stringify(productObjects));

                }

            }
        }
    }

}
var decrementitem = function(id) {
    debugger;
    var str = localStorage.getItem('productObjects');
    if (str) {
        // JSON.parse-converts json format string value to object value
        productObjects = JSON.parse(str);
        var len = productObjects.length;
        for (var i = 0; i < len; i++) {

            var productid = productObjects[i]['id'];
            if (productid == id) {
                var countincrement = productObjects[i]['count'];
                var totalcountitem = countincrement - 1;
                productObjects[i]['count'] = totalcountitem;
                localStorage.setItem('productObjects', JSON.stringify(productObjects));
            }

        }
    }
    retrieveProductFromLocalStorage();
}
var logoutUser = function(e) {
    debugger;
    window.localStorage.removeItem("userObjects");
    window.location.href = "login.html";
}
document.getElementById('btnProductsave').addEventListener('click', SaveProduct, false);
document.getElementById('btnProductupdate').addEventListener('click', editproductitemrecords, false);
document.getElementById('btnlogout').addEventListener('click', logoutUser, false);
window.onload = function() {

    retrieveProductFromLocalStorage();
    // exuserchecking();
}
retrieveProductFromLocalStorage();
var userInputid = document.getElementById('add-user-id');
var userInputpass = document.getElementById('add-user-pass');
var exuserchecking = function() {
    var str = localStorage.getItem('userObjects');
    debugger;
    if (!str) {
        // document.getElementById('validation-message').innerHTML = 'Unknown user';
        alert("Unknown user,Please login");
        window.location.href = "login.html";

    }
}
exuserchecking();