function addCart(id) {
    var cart;
    if(localStorage.getItem("cart") == null) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    if(id==1) {
        var item = {
            name: "Angus Beef Grass-Fed Ribeye Steak",
            price: "109.25",
            image: "./assets/img/item/633abef580f75c368f25f1ba-angus-beef-grass-fed-ribeye-steak-10.jpg"
        }
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    if(id==2) {
        var item = {
            name: "USDA Choice Bone-In Short Ribs",
            price: "139.95",
            image: "./assets/img/item/Short-Rib-056_landing-page_900x.webp"
        }
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    if(id==3) {
        var item = {
            name: "Rack Of Lamb ( 9 Bones Full Rack)",
            price: "82.99",
            image: "./assets/img/item/180418_Ginger_Pig_Rack_Lamb_36_960x960.webp"
        }
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    if(id==4) {
        var item = {
            name: "Salmon Fillet",
            price: "32.79",
            image: "./assets/img/item/Salmon-Fillet-800g-1.1kg2-Custom-1.jpg"
        }
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    if(id==5) {
        var item = {
            name: "Japanese herring with eggs",
            price: "15.37",
            image: "./assets/img/item/009.png"
        }
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    if(id==6) {
        var item = {
            name: "Star Anise",
            price: "0.68",
            image: "./assets/img/item/star-anise.webp"
        }
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    if(id==7) {
        var item = {
            name: "LUX White Dogal Millesimato 2020 Sparkling Extra Dry",
            price: "120",
            image: "./assets/img/item/Dogal-White-Lux.jpg"
        }
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    alert("Add cart sucess")
}

function removeCart(id) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(id, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}