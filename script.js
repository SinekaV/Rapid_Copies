const modal_container = document.querySelector(".modal-container")
const modal_manual = document.querySelector(".modal-manual")
const close_manual = document.querySelector(".close-manual")
const open_modal = document.querySelector(".open-modal")


close_manual.addEventListener('click',()=>{
    modal_container.style.display = "none"
})



open_modal.addEventListener('click',()=>{
    modal_container.style.display = "flex"
})
 

//globel values
var count =1
var pdf_name =""
var total_price =0
var SNO = 1 //should be change while calling the api

function page_counter(){
var input = document.getElementById("user_file");
var reader = new FileReader();
reader.readAsBinaryString(input.files[0]);

console.log(input)
if (input.files[0].type !=="application/pdf"){
    alert("Please select appropriate File");
    
}
else{
reader.onloadend = function(){
    pdf_name =input.files[0].name
    count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
    displayPageCount.innerText =('Number of Pages:',count );
    console.log(count)
    calculatePaper(count)
}
}
}


 
var display_cost = document.getElementById("display_cost")

function calculatePaper(){

var paper_size_value = parseFloat( paperSize.value)
var paper_type_value = parseFloat( paperType.value)
var printing_sides;
var paper_color;
var payment_method;
var no_of_copies_value = parseFloat(noOfCopies.value)

if (blackAndWhite.checked){
    paper_color=0.5
}else {
    paper_color=2.5
}

if (singlSide.checked){
    printing_sides="single_side"
}else {
    printing_sides ="double_side"
}


if (cash.checked){
    payment_method="Cash"
}else {
    payment_method ="UPI"

}



var price_per_page = (paper_size_value + paper_type_value+paper_color)
var price_per_set =price_per_page*count
 total_price = price_per_set*no_of_copies_value
 total_price.toFixed(2)
if (count>=100){
    total_price = total_price/2
    total_price.toFixed(2)
}
// console.log(price_per_page)
// console.log(price_per_set)
// console.log(total_price)
display_cost.innerText=total_price
// console.log(payment_method)


} 