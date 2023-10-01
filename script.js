const check = document.getElementById("check");
const priceTags = document.getElementsByClassName("price");
const annualy = ["&dollar;199.99","&dollar;249.99", "&dollar;399.99"];
const monthly = ["&dollar;19.99","&dollar;29.99", "&dollar;39.99"];

$("#check").on("input",function(){
    if($("#check").is(":checked")){
        for(let i = 0; i<3; i++){
            priceTags[i].innerHTML = monthly[i]
        }
    }
    else{
        for(let i = 0; i<3; i++){
            priceTags[i].innerHTML = annualy[i]
        }
    }
});




