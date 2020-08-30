


const shopItems = [{
    itemOne:{
        name:"On the Fringe - Pink",
        cost: "$55",
        design: "Neon-Pink Fringe",
        style: "Neon, Fringe",
        index:1,
        image: "./assets/swimsuits/1.png"
    },
    itemTwo:{
        name:"Neon Lights",
        cost: "$55",
        design: "Neon Yellow, Orange, and Pink w/ bow",
        style: "Neon",
        index:2,
        image: "./assets/swimsuits/2.png"
    },
    itemThree:{
        name:"Oceanic Greenery - Threads",
        cost: "$55",
        design: "Sea Green w/ threads knotted on sides",
        style: "Sea-Green",
        index:3,
        image: "./assets/swimsuits/3.png"
    },
    itemFour:{
        name:"Oceanic Greenery - Beads",
        cost: "$55",
        design: "Sea Green w/ beads on sides",
        style: "Sea-Green",
        index:4,
        image: "./assets/swimsuits/4.png"
    },
    itemFive:{
        name:"Fall Floral - Strap",
        cost: "$55",
        design: "Fall-colored floral pattern with strap sides",
        style: "Floral",
        index:5,
        image: "./assets/swimsuits/5.png"
    },
    itemSix:{
        name:"Tropical Sunset",
        cost: "$55",
        design: "Palm-leave pattern, with sunset colors (peach, purple, red)",
        style: "Palm Leaves",
        index:6,
        image: "./assets/swimsuits/6.png"
    },
    itemSeven:{
        name:"Fall Floral- String",
        cost: "$55",
        design: "Fall-colored floral pattern with string sides",
        style: "FLoral",
        index:7,
        image: "./assets/swimsuits/7.png"
    },
    itemEight:{
        name:"On the Fringe - Green",
        cost: "$55",
        design: "Neon-green fringe, with belt through bottom",
        style: "Neon, Fringe",
        index:8,
        image: "./assets/swimsuits/8.png"
    },
    itemNine:{
        name:"Amazon",
        cost: "$55",
        design: "Green and black floral pattern, with string sides",
        style: "Green-black, floral",
        index:9,
        image: "./assets/swimsuits/9.png"
    },
    itemTen:{
        name:"Sunny Day",
        cost: "$55",
        design: "Green and black floral pattern, with string sides",
        style: "Green-black, floral",
        index:9,
        image: "./assets/swimsuits/9.png"
    },
    itemEleven:{
        name:"Red Letter",
        cost: "$55",
        design: "Green and black floral pattern, with string sides",
        style: "Green-black, floral",
        index:9,
        image: "./assets/swimsuits/9.png"
    },
    itemTwelve:{
        name:"Old Movie",
        cost: "$55",
        design: "Green and black floral pattern, with string sides",
        style: "Green-black, floral",
        index:9,
        image: "./assets/swimsuits/9.png"
    },

    

}]


shopItems.map(items => {

    const shopSection = document.getElementById("main");
    
    const shopWrapper = document.createElement("div")
    const shopCards = document.createElement("div");
    const itemName = document.createElement("h1");
    const itemCost = document.createElement("h2");
    const itemDesign = document.createElement("h3");
    const itemStyle = document.createElement("h5");
    const itemImage = document.createElement("img");

    shopWrapper.classList.add("main-wrapper");
    
    itemImage.classList.add("itemImage");
    shopCards.classList.add("shopCard");

    const name = itemName.innerHTML(items.name);
    shopCards.innerHTML = name;
    
    const cost = itemCost.innerText(items.cost);
    shopCards.innerHTML = cost;

    const design = itemDesign.innerText(items.design);
    shopCards.innerHTML = design;
     
    const style = itemStyle.innerText(items.style);
    shopCards.innerHTML = style;

    itemImage.src = items.image;
    shopCards.innerHTML = itemImage;

    shopWrapper.appendChild(shopCards);

    shopSection.appendChild(shopWrapper);
})