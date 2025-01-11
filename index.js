let catul = document.querySelector(".left ul")





let displayCat = async () => {
    api = await fetch("https://dummyjson.com/products/categories")
    try {
        apidata = await api.json()
        //   console.log(apidata);

        catul.innerHTML = "";
        apidata.forEach((v) => {
            // console.log(v)
            catul.innerHTML += `<li onclick="singlecat('${v.url}' )">${v.name} </li>`

        });
    }
    catch (error) {
        console.log(error)
    }

    //    catul.innerHTML="";
    //    apidata.forEach((v)=>{
    //     console.log(v)
    //     catul.innerHTML +=`<li>${v.name} </li>`

    //    });


}
displayCat()

////////////////////produt detail

let rightdiv = document.querySelector(".right1")

let fetchdata = (catpro, inputvalue) => {
    // fetch("https://dummyjson.com/products?limit=100")
    // console.log(catpro);
    // console.log(inputvalue)
    let api;
    if (catpro == undefined) {
        api = "https://dummyjson.com/products?limit=100"
    }
    else if (inputvalue != undefined) {
        api = `https://dummyjson.com/products/search?q=${inputvalue}`
    }
    else {
        api = catpro

    }
    fetch(api)
        .then((ress) => {
            // console.log(ress.json())
            return ress.json()
        })
        .then((finalress) => {
            // console.log(finalress.products)
            finaldata = finalress.products;
            // console.log(finaldata);

            rightdiv.innerHTML = '';
            finaldata.forEach((v) => {
                // console.log(v)
                rightdiv.innerHTML += `
             <div class="box">
            <img src="${v.thumbnail}" alt="">
            <h3>${v.title} </h3>
            <h4>Price:- $ ${v.price} </h4>
            <h5>Id: ${v.id}</h5>
            <button onclick='getid(${v.id})'><a href="productdetali.html"> SAVE TO CART</a></button>

           </div>   `
            })
        })
        .catch((error) => {
            console.log(error)
        })


}
fetchdata()

singlecat = (catpro) => {
    // console.log(catpro)
    // alert("hello")
    fetchdata(catpro)
}


let myInput = document.querySelector("#myInput")

myInput.addEventListener("keyup", (e) => {
    // console.log(e.target.value)
    let inputvalue = e.target.value;
    fetchdata("", inputvalue)
})

getid=(getitem)=>{
         localStorage.setItem("ecomid",JSON.stringify(getitem))
        // alert(getitem)
        // console.log(getitem);
}





//////////////////product click to single product//////////
// let midclass = document.querySelector(".middiv")
// let getidLocal = () => {


//     getid = JSON.parse(localStorage.getItem('ecomid'))
//     // alert(getid)

//     fetch(`https://dummyjson.com/products/${getid}`)

//         .then((prod) => {
//             // console.log(prod.json());
//             return prod.json()
//         })
//         .then((finalprod) => {
//             console.log(finalprod)
//             // let finalproddata=finalprod;

//             midclass.innerHTML = `
//      <div class="boximg">
//                 <img src="${finalprod.thumbnail}" alt="">
//             </div>
//     `

//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }
// getidLocal()
////////////
