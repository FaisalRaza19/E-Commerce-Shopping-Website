const products = [
    {
        id : 0,
        image : 'products/f1.jpg',
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 78,
    },
    {
        id : 1,
        image : "products/f2.jpg",
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 150,
    },
    {
        id : 2,
        image : "products/f3.jpg",
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 150,
    },
    {
        id : 3,
        image : "products/f4.jpg",
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 150,
    },
    {
        id : 4,
        image : "products/f5.jpg",
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 78,
    },
    {
        id : 5,
        image : "products/f6.jpg",
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 130,
    },
    {
        id : 6,
        image : "products/f7.jpg",
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 100,
    },
    {
        id : 7,
        image : "products/f8.jpg",
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 57,
    },
];
const categories = [...new Set(products.map((items)=>{
    return items
}))];
const displayItem = (items)=>{
    document.getElementById("root").innerHTML = items.map((items)=>{
        var{image,price,title,company} = items
        return(
            `<div class="box">
               <div class="img-box">
                  <img src="${image}"></img>
                  <p id="company">${company}</p>
                  <h3>${title}</h3>
                  <div class="rate">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <h3>$${price}</h3>
                  <i class="fa-solid fa-shopping-cart"></i>
               </div>
            </div>`
        )
    }).join('')
}
displayItem(categories);

const item = [
    {
        id : 0,
        image : 'products/n1.jpg',
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 80,
    },
    {
        id : 1,
        image : 'products/n2.jpg',
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 80,
    },
    {
        id : 2,
        image : 'products/n3.jpg',
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 80,
    },
    {
        id : 3,
        image : 'products/n4.jpg',
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 80,
    },
    {
        id : 4,
        image : 'products/n5.jpg',
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 80,
    },
    {
        id : 5,
        image : 'products/n6.jpg',
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 30,
    },
    {
        id : 6,
        image : 'products/n7.jpg',
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 100,
    },
    {
        id : 7,
        image : 'products/n8.jpg',
        company : "adidas",
        title : "Cartoon Astranaut T-Shirt",
        price : 80,
    },
]
const company = [...new Set(item.map((item)=>{
    return item
}))];
const display = (item)=>{
    document.getElementById("cloth").innerHTML = item.map((items)=>{
        var{image,price,title,company}=items;
        return(
            `<div class="box">
               <div class="img-box">
                  <img src="${image}"></img>
                  <p id="company">${company}</p>
                  <h3>${title}</h3>
                  <div class="rate">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <h3>$${price}</h3>
                  <i class="fa-solid fa-shopping-cart"></i>
               </div>
            </div>`
        )
    })
}
display(company);