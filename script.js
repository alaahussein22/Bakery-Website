// /////////////////////////////////////////////////////

function showMsg() {
    location.assign('./email-form.html')
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

var inp = document.getElementById('validationCustom02');

function sentMail() {

    if (!inp.length == '') {
        setTimeout(function() {
            alert('Your Message sent successfully');

        },2000)
    } else {
          
        console.log('ggggggggggggggggggggggggggggggg');
    }
}

// ///////////////
//function to open login form
function openLoginForm() {
    location.assign("./LoginForm.html");
}

// login Script
function confirmData(e) {
    e.preventDefault();
    var emailText = document.getElementById("emailAddress").value;
    var passText = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open("get", "userData.json", true);
    xhr.send("");

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var jsonResponse = JSON.parse(xhr.response);
            // console.log(jsonResponse);
            var checkValid = false;
            for (var user in jsonResponse) {
                if (emailText === jsonResponse[user].email && passText === jsonResponse[user].password) {
                    //alert("alf mabrouk");
                    checkValid = true;
                    break;
                }
            }
            if (!checkValid) {
                //alert("your email or password is not valid!!!");
                document.getElementById("errorText").innerHTML =
                    "your email or password not valid!!!";

            } else {
                var checked = document.getElementById("checkBox").checked;
                if (checked) {
                    localStorage.setItem("email", emailText);
                    localStorage.setItem("password", passText);
                } else {
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                }

                var golink = sessionStorage.getItem("orderLogin") ? "./userCart (1).html" : "./index.html";
                sessionStorage.setItem("loggedIn", true);
                location.replace(golink);

                console.log(localStorage.email);
                console.log(localStorage.password);
            }
        }
    }
}

function saveData(e) {
    e.preventDefault();
    var passText = document.getElementById("regPassword").value;
    var userText = document.querySelector("#userName").value;
    var emailText = document.querySelector("#regEmailAddress").value;
    var regName = /^[a-zA-Z]{3,}$/;
    var regEmail = /^[a-zA-Z]{3}@[0-9]{2,}(.com)$/;

    if ( (!regName.test(userText) && (!userText.length == ''))
            && (!regEmail.test(emailText) && (!emailText.length == ''))) {
                document.getElementById("errorValidation").innerHTML =
                "this value not match";
                return false;
    }

    else if ( (userText.length  == '') || (emailText.length  == '') || (passText.length  == '')) {
        document.getElementById("errorRegister").innerHTML =
            "you should register first!";

    } else {
        alert('you registered successfully')
        location.assign('./LoginForm.html')
    }


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "userData.json", true);
    var newId = 0;
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var jsonResponse = JSON.parse(xhr.responseText);
            jsonResponse.push({
                "id": "3",
                "name": userText,
                "email": emailText,
                "password": passText,
                "address": "",
                "cart": []
            });

            xhr.open("POST", "userData.json", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send("jsonTxt=" + JSON.stringify(jsonResponse));

        }
    }
    xhr.send(null);

}

// /////////////////////////////////////////////////////////////////////////////////////////////////

// end navbar//////////////////////////////////////////////////////////////


// /////////////////////////////////////////////////////


//userCart form
function goOrder() {
    if (sessionStorage.getItem("loggedIn")) {
        document.getElementById("orderForm").classList.remove("d-none");

    } else {
        sessionStorage.setItem("orderLogin", true);
        location.assign("./LoginForm.html");
    }
}


//code of shop page
function addToCart(e) {
    //console.log(e.target.localName);
    if (e.target.localName == "a") {
        var cartContent = (localStorage.getItem("cartContent")) ? localStorage.getItem("cartContent") : [];
        cartContent.push({
            itemCode: document.getElementById("item-code" + e.target.parent.id)
        });
    }
}
if (document.title == "shop") {
    var btnAdd = document.querySelector(".addtoQueueBtn").addEventListener("click", function () {

    });

}
//Add to Queue button
//event delegation

//display product in cart html
function generateCartProduct(productImg, productName, productPrice, productId) {
    var cartProduct =
        '<div class="card card-shadow shadow-lg my-2" onclick="removeItem(event)" id="cart-' + productId + '">' +
        '<div class="card-body row">' +
        '<div class="col-3 my-5">' +
        '<img src="' + productImg + '" alt="" class="card-img" id="cart-productImg" style="width: 200px; max-width: 100%; height: auto;">' +
        '</div>' +
        '<div class="col-7 my-5 d-flex" style="flex-direction: column; justify-content: space-between;">' +
        '<div>' +
        '<h4 class="card-title">' + productName + '</h4>' +
        // '<p class="card-text">' + productDisc + '</p>' +
        '<h5 class="card-text">' + productPrice + 'EG' + '</h5>' +

        '</div>' +
        // '<p class="m-0 item-code">item code: ' + productId + '</p>' +
        '</div>' +
        '<div class="col-2 d-flex my-5 text-center" style="flex-direction: column; justify-content: space-between;"> ' +
        '<i class="fas fa-trash remove-item " style="font-size:20px; "></i>' +
        '</div>' +

        '</div>' +
        '</div>';

    return cartProduct;
}

function removeItem(e) {
    if (e.target.classList.contains("remove-item")) {
        e.target.parentNode.parentNode.parentNode.remove();
        var removedId = e.target.parentNode.parentNode.parentNode.id.split("-")[1];
        var newCartContent = JSON.parse(localStorage.getItem("cartContent")).filter(function (index) {
            if (index.id != removedId) {
                return index;
            }
            //console.log(index);
        });
        // console.log(document.querySelector(".card-text").innerHTML);
        localStorage.setItem("cartContent", JSON.stringify(newCartContent));

    }

}

var totalpriceAll = 0;
if (document.title == "Cart-shopping") {

    var cartContent = (localStorage.getItem("cartContent")) ? 
    localStorage.getItem("cartContent") : [];
    cartContent = JSON.parse(cartContent);

    var cartContainer = document.getElementById("cartContainer");
    var totalPrice = 0;
    for (var i in cartContent) {
        //han7to fen fl div
        cartContent[i].price = parseInt(cartContent[i].price);
        totalPrice += cartContent[i].price;
        cartContainer.insertAdjacentHTML("beforeend", generateCartProduct(cartContent[i].img,
            cartContent[i].name, cartContent[i].description, cartContent[i].price, cartContent[i].id))

    }
    totalpriceAll = document.querySelectorAll(".total-price");
    for (var i = 0; i < totalpriceAll.length; i++) {
        totalpriceAll[i].innerHTML = totalPrice;
    }
    //document.querySelector(".total-price").innerHTML = totalPrice;
}







// //////////////////////////////////////////////////////////////////////////////////

function addToCart(e) {
    if (e.target.localName == "button") {
        e.target.innerHTML = '<i class="bi bi-check-circle" aria-hidden="true"></i>  Added';
        var productData = e.target.parentNode.parentNode.children;
        var proImage = productData[0].src;
        var proName = productData[1].children[0].innerText;
        var proPrice = productData[1].children[2].innerText;
        // var proDisc= productData[1].children[3].innerText;
        var proId = (productData[1].children[4].innerText).split(":")[1];

        var cartContent = (localStorage.getItem("cartContent")) ? localStorage.getItem("cartContent") : "[]";
        cartContent = JSON.parse(cartContent);
        cartContent.push({
            id: proId,
            img: proImage,
            name: proName,
            price: proPrice,
          
        });
        localStorage.setItem("cartContent", JSON.stringify(cartContent));
    }
}


//fetch Data ////////////////////////////////////////////////////////////////////////////////////////
var bakeryAPI = './bakeryData.json';
var candyAPI = './candyData.json';

// API for get requests
let fetchBakeryData = fetch("./bakeryData.json");

fetchBakeryData.then(res =>
    res.json()).then(data => {
    console.log(data);
    showBakeryData(data)
})

function showBakeryData(data) {
    data.forEach((item) => {
        document.getElementById('products').innerHTML +=
            `<div class="card" id="product-${item.id}">
        <img src="${item.img}" class="card-img-top w-100 h-50"/>
        <div class="card-body">
            <h4 class="card-title">${item.name}</h4>
            <p class="card-text">${item.description}</p>
            <h5 class="price">${item.price}</h5><br>
            <button id="btn-add-${item.id}" onclick="addToCart(event)"
            class="btn btn-primary icon-added">Add to Cart</button>
        </div>
    </div>`
    })
}



// API for get requests
let fetchCandyData = fetch("./candyData.json");

fetchCandyData.then(res =>
    res.json()).then(obj => {
    console.log(obj);
    for (let i = 0; i < obj.length; i++) {
        // console.log(obj[i].name);
    }
    showArabicCandyData(obj);
    showFrenchCandyData(obj);
    showTurkeyCandyData(obj)
})

function showArabicCandyData(obj) {
    for (let i in obj) {
        // console.log(obj[i].name);

        if (obj[i].category == 'arabic') {

            document.getElementById('arabicCandy').innerHTML +=
                `<div class="card" id="desserts-${obj[i].id}">
        <img src="${obj[i].img}" class="card-img-top w-100 h-50"/>
        <div class="card-body">
            <h4 class="card-title">${obj[i].name}</h4>
            <p class="card-text">${obj[i].description}</p>
            <h5 class="price">${obj[i].price}</h5><br>
            <button id="btn-add-${obj[i].id}" onclick="addToCart(event)"
            class="btn btn-primary icon-added">Add to Cart</button>
        </div>
    </div>`
        }
    }
}


function showFrenchCandyData(obj) {
    for (let i in obj) {
        // console.log(obj[i].name);

        if (obj[i].category == 'french') {

            document.getElementById('frenchCandy').innerHTML +=
                `<div class="card" id="desserts-${obj[i].id}">
        <img src="${obj[i].img}" class="card-img-top w-100 h-50"/>
        <div class="card-body">
            <h4 class="card-title">${obj[i].name}</h4>
            <p class="card-text">${obj[i].description}</p>
            <h5 class="price">${obj[i].price}</h5><br>
            <button id="btn-add-${obj[i].id}" onclick="addToCart(event)"
            class="btn btn-primary icon-added">Add to Cart</button>
        </div>
    </div>`
        }
    }
}

function showTurkeyCandyData(obj) {
    for (let i in obj) {
        // console.log(obj[i].name);

        if (obj[i].category == 'turkey') {

            document.getElementById('turkeyCandy').innerHTML +=
                `<div class="card" id="desserts-${obj[i].id}">
        <img src="${obj[i].img}" class="card-img-top w-100 h-50"/>
        <div class="card-body">
            <h4 class="card-title">${obj[i].name}</h4>
            <p class="card-text">${obj[i].description}</p>
            <h5 class="price">${obj[i].price}</h5><br>
            <button id="btn-add-${obj[i].id}" onclick="addToCart(event)"
            class="btn btn-primary icon-added">Add to Cart</button>
        </div>
    </div>`
        }
    }
}