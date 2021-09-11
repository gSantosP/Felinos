import {st} from "/dados.js"


var obj = JSON.parse(st)



for(var i = 0; i < obj.length; i++){
    
    var body = document.querySelector("body")
    body.style.backgroundColor = "#6B8E23"
    body.style.display = "flex"
    body.style.flexDirection = "column"
    body.style.alignItems = "center"

    var divCard = window.document.createElement("div")
    divCard.style.maxWidth = "30%"
    divCard.style.maxHeight = "100%"
    divCard.style.margin = "30px"
    divCard.style.backgroundColor = "#CDAD00"
    divCard.style.borderRadius = "10px"
    divCard.style.borderColor = "red"
    divCard.setAttribute("id",`${obj[i].title}`)
    divCard.innerHTML += `<h2 style = "text-align: center">${obj[i].title}</h2>`
    
    var img = window.document.createElement("img")
    img.setAttribute("src",`${obj[i].imgUrl}`)
    img.style.marginLeft = "75px"
    img.style.right = "50%"
    img.style.height = "100px"
    img.style.width = "100px"
    divCard.appendChild(img)

    var desc = window.document.createElement("p")
    desc.style.textAlign = "center"
    desc.style.width = "250px"
    desc.innerHTML += `${obj[i].description}`
    divCard.appendChild(desc)

    divCard.innerHTML += `<p style = "text-align: center">${obj[i].createdAt}</p>` 

    document.body.appendChild(divCard)
}