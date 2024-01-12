const buton = document.getElementsByTagName("button")[0]
buton.onclick = function(){
    const textareaValue = document.getElementsByTagName("textarea")[0].value
    if(textareaValue.trim() !== ""){
    let dataURL = "data:text/html;charset=utf-8,"+encodeURIComponent(textareaValue)
    document.getElementsByTagName("p")[0].textContent = "sitenizin URL si: "+dataURL
    }
    else{
        alert("lütfen bir değer girin.")
    }
}