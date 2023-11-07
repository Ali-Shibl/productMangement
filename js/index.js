var productName=document.getElementById("productName") 
var productPrice=document.getElementById("productPrice") 
var productCategory=document.getElementById("productCategory") 
var productDescription=document.getElementById("productDescription") 

var productsContainer=[]

if(localStorage.getItem(`products`) != null ){
    productsContainer=JSON.parse(localStorage.getItem(`products`));
    displayproduct();
}

function AddProduct(){
    if (vaildateproductName() == true) {
        var product={
            
            name:productName.value,
            price:productPrice.value,
            category:productCategory.value,
            description:productDescription.value
        }
        productsContainer.push(product);
        
        
        displayproduct();
        localStorage.setItem(`products`,JSON.stringify(productsContainer));
        clearform();
    }else{
        window.alert(`invalid productName`)
    }
   }

function clearform(){
    productName.value=""
    productPrice.value=""
    productCategory.value=""
    productDescription.value=""
}
function displayproduct(){
    var cartonaa=``
    for (let i = 0; i < productsContainer.length; i++) {
        cartonaa+=`
        <tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].description}</td>
        <td><button class="btn btn-sm btn-outline-danger" onclick="deleteproduct(${i})"> delete</button> </td>
        <td><button class="green btn btn-sm btn-outline-info" onclick="updataProduct(${i})">update</button>
        </td>
        
        </tr>
        `
    }
    document.getElementById("tablebody").innerHTML=cartonaa;
}


function deleteproduct(deleteindex){
    
    productsContainer.splice(deleteindex,1)
    localStorage.setItem(`products`,JSON.stringify(productsContainer));
    displayproduct()
}

function updataProduct(index){
    
       
        productName.value=productsContainer[index].name
        productPrice.value=productsContainer[index].price
        productCategory.value=productsContainer[index].category
        productDescription.value=productsContainer[index].description
        productsContainer.splice(index,1)
    
        displayproduct();
        localStorage.setItem(`products`,JSON.stringify(productsContainer));
}

function searchproduct(term){
    var cartonaa=``
for (var i = 0; i < productsContainer.length; i++) {
    if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true){
        cartonaa+=`
        <tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].description}</td>
        <td><button class="btn btn-sm btn-outline-danger" onclick="deleteproduct(${i})"> delete</button> </td>
        <td><button class="btn btn-sm btn-outline-info" onclick="updateproduct">update</button>
        </td>
        
        </tr>
        `
    }
}    
        document.getElementById("tablebody").innerHTML=cartonaa;

}

function vaildateproductName() {
    var rejax=/^[a-z]{2,20}( |-)?.{0,3}[0-9]{0,2}$/ig;
    if (rejax.test(productName.value) == true) {
        return true
    }
    else{
        return false
    }
    
}
