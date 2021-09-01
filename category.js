const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        showList(data);
    })

function showSubList(data) {
    console.log(data);
    data.forEach(showSub);
}

// function showSub(subcategory) {
//     console.log(subcategory);
//     // 1.grab the template
//     const template = document.querySelector(".categories").content;

//     // 2.clone it 
//     const clone = template.cloneNode(true);


//     // 3.change the content 
//     clone.querySelector("span").textContent = `${product.subcategory}`;

//     // 4.grab the parent
//     const parent = document.querySelector("main");
//     // 5.append 
//     parent.appendChild(clone);
// }