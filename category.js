// const url = "https://kea-alt-del.dk/t7/api/prs";
const subCat = "https://kea-alt-del.dk/t7/api/subcategories"

fetch(subCat)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        showSubList(data);
    })

function showSubList(data) {
    console.log(data);
    data.forEach(showSub);
}

function showSub(product) {
    console.log(product);
    // 1.grab the template
    const template = document.querySelector(".subcategories").content;
    // 2.clone it 
    const clone = template.cloneNode(true);


    // 3.change the content 
    clone.querySelector("span").textContent = `${product.subcategory}`;

    clone.querySelector("a").setAttribute('href', `list.html?subcategory=${product.subcategory}`)


    // 4.grab the parent
    const parent = document.querySelector("main");
    // 5.append 
    parent.appendChild(clone);
}

// function showCat(data) {
//     console.log(data)
// }