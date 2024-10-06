const image = document.getElementById("img")
const dark = document.getElementById("dark")
const search = document.getElementById("search") 
const searching = document.getElementById("searching")
const row = document.getElementById("row")
const country = document.getElementById("country")
const popu = document.getElementById("popu")
const continent = document.getElementById("continent")
const capital = document.getElementById("capital")
const subregion = document.getElementById("subregion")
const currencies = document.getElementById("currencies")
const languages= document.getElementById("languages")
const nativeName = document.getElementById("nativeName")
const header = document.getElementById("header")
const title = document.getElementById("title")
const sele = document.getElementById ("sele")
const domain= document.getElementById("domain")
const btn = document.getElementById("btn")
const border = document.getElementById("border")
const region = document.getElementById("region")
const filteresult = document.getElementById("filteresult")
const maincontainer = document.getElementById("main-container")
const population = document.getElementById("population")
const reg = document.getElementById("reg")
const cap = document.getElementById("cap")
const regiontext = document.getElementById("regiontext")
const doc = document.getElementById("doc")



dark.addEventListener("click",()=>{
  document.body.classList.toggle("background")
  document.body.style.color = "white"
  header.style.background = "rgb(44, 44, 65)"
  // header.style.background = "rgb(255, 255, 255);"

  document.regiontext.style.background =  "rgb(44, 44, 65)"
  regiontext.style.color =  "black"
  search.style.background = "rgb(44, 44, 65)"

  // row.style.color = "white"
  // search.style.color = "white"
  // title.style.color = "white"
  // dark.style.color = "white"
  filteresult.style.color = "black"
  


})

searching.addEventListener("change",()=>{
    let searchBtn = searching.value;
    filteresult.innerText = ""
   

   fetch (`https://restcountries.com/v3.1/name/${searchBtn}`)
   .then(data => data.json())
   .then(data => {
  
    
let imgSrc = data[0].flags.svg
image.setAttribute("src",imgSrc)
country.innerText = `${data [0].name.common}`

popu.innerText = `Population: ${data [0].population}`

continent.innerText = `Region: ${data [0].region}`

capital.innerText = `Capital: ${data [0].capital}`

subregion.innerText = `Sub Region : ${data [0].subregion}`

domain.innerText = `Top Level Domain : ${data [0].tld}`
console.log(domain);


const obj = data[0].currencies 
  const outerKeys = Object.keys(obj); 

  const innerKeys = Object.keys(obj[outerKeys[0]]); 

 const Currency = obj[outerKeys[0]][innerKeys[0]]; 
currencies.innerText = `Currencies : ${Currency}`


const obj2 = data[0].languages
const Language = Object.values(obj2)

 languages.innerText = `Languages : ${Language}`
 


 const native = data[0].name 
 const objNative = native;
 const arr = objNative.nativeName
 const outter = Object.values(arr);
 
 const official = outter[0].common
 
 nativeName.innerText = `Native Name : ${official}`

 maincontainer.innerHTML = doc.innerHTML
 
 
})
})

region.addEventListener("change",()=>{
 let regionVal = region.value
 maincontainer.innerText = ""
 filteresult.innerText = ""
  fetch (`https://restcountries.com/v3.1/region/${regionVal}`)
  .then (data => data.json())
  .then (data=>{
    data.forEach(element => { 
      filteresult.innerHTML += `
      <div class ="regiontext">
        <img src= "${element.flags.svg}"/>
        <h3 id="element"> ${element.name.common}</h3>
        <p class ="reg"><b> Population</b>: ${element.population}</p>
        <p class="reg"><b>Region </b>: ${element.region}</p>
        <p class="reg"><b>Capital</b>: ${element.capital}</p>
      </div>
      `

    });
    
  })

 })


 
 fetch (`https://restcountries.com/v3.1/all`)
 .then(data => data.json())
 .then(data =>{
  data.forEach(element =>{
     filteresult.innerHTML += 
     `
     <div class ="regiontext" id = "regiontext">
        <img src= "${element.flags.svg}"/>
        <h3 id="element"> ${element.name.common}</h3>
        <p class ="reg"><b> Population</b>: ${element.population}</p>
        <p class="reg"><b>Region </b>: ${element.region}</p>
        <p class="reg"><b>Capital</b>: ${element.capital}</p>
      </div>
      `
     
     
  })
  
})






  


    