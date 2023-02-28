//display elements
var displayPageCount = document.getElementById("page_count_span")
var displayTotalPrice = document.getElementById("display_cost")
const tbody = document.getElementById("tbody")

//input elelments
const paperSize=document.getElementById("paper_size")
const paperType = document.getElementById("paper_type")
const noOfCopies= document.getElementById("no_copies")
const singlSide = document.getElementById("single_side")
const blackAndWhite = document.getElementById("black_and_white")
const cash = document.getElementById("Cash")


var jsonCollection = []


function submitUserInput(){
    const dateobj = new Date()
    var paperProsJSON = {paper_size_name:"",paper_size_price:"",paper_type_name:"",paper_type_price:"",printing_sides:"",paper_color:"",paper_color_price:"",no_of_copies:"",no_of_page:"",fileName:"",payment_method:"",total_price:"",payment_status:"",status:"",s_no:SNO,date:`${dateobj.getDate()}-${dateobj.getMonth()+1}-${dateobj.getFullYear()}`,time:`${dateobj.getHours()}Hrs ${dateobj.getMinutes()}Mins ${dateobj.getSeconds()}Sec`}

    let paperSizeValue = paperSize.value
    let paperSizeName;
    for (let i =0;i<paperSize.children.length;i++){
           var each_element = paperSize.children[i]
           if (paperSizeValue ==each_element.value ){
           paperSizeName = each_element.innerText
        }
    } 
   paperProsJSON.paper_size_name = paperSizeName
  paperProsJSON.paper_size_price = paperSizeValue


   let paperTypeValue = paperType.value
   let paperTypename;
  for (let i =0;i<paperType.children.length;i++){
          var each_element = paperType.children[i]
          if (paperTypeValue == each_element.value)
          {
          paperTypename = each_element.innerText
        }
  } 
  paperProsJSON.paper_type_name = paperTypename
  paperProsJSON.paper_type_price = paperTypeValue


  let paperSides;
  if (singlSide.checked){
    paperSides ="Single Side"
  }else{paperSides="Double Side"}

 paperProsJSON.printing_sides = paperSides
  

  let paperColorName;
  let paperColorValue
  if(blackAndWhite.checked){
      paperColorName = "Black And White"
      paperColorValue = 0.5
    }else{
        paperColorName = "Color";
        paperColorValue = 2.5
    }
    paperProsJSON.paper_color = paperColorName
    paperProsJSON.paper_color_price = paperColorValue
    
    let noOfCopiesValue = noOfCopies.value
    paperProsJSON.no_of_copies = noOfCopiesValue
    paperProsJSON.no_of_page = count
    paperProsJSON.fileName= pdf_name

    let paymentMethod ;
    let paymentStauts;

    if (cash.checked){
        paymentMethod="Cash"
        paymentStauts ="not_paid"

    }else {
        paymentMethod ="UPI"
        paymentStauts ="paid"
    
    }

    paperProsJSON.payment_method= paymentMethod
    paperProsJSON.payment_status= paymentStauts
    paperProsJSON.total_price= total_price;
    paperProsJSON.status = "Initiated"
    

    if (pdf_name==""){
        alert("Please Upload A pdf File")
    }
    else{ 
        //to server (Hard coded values)
        let sendJOSN = {user_name:"harish",contact:948654051,paperPros:paperProsJSON}
        jsonCollection.push(sendJOSN)
        modal_container.style.display = "none"
        SNO++
        buildTable(jsonCollection)
    }


console.log(paperProsJSON)



}

function testing(){
}

function buildTable(arg){
   
    tbody.innerHTML = ""
    var jsonFiles = arg

    for (let i =0;i<jsonFiles.length;i++){
        var each_element = jsonFiles[i]
        var localPaperPros = each_element.paperPros;
        var tr = document.createElement("tr")
        var sNoTD = document.createElement("td")
        sNoTD.innerText = localPaperPros.s_no
        tr.appendChild(sNoTD)

        var documentNameTD = document.createElement("td")
        documentNameTD.innerText = localPaperPros.fileName
        tr.appendChild(documentNameTD)

        var pagesTD = document.createElement("td")
        pagesTD.innerText = localPaperPros.no_of_page
        tr.appendChild(pagesTD)

        var priceTD = document.createElement("td")
        priceTD.innerText = localPaperPros.total_price+"/-"
        tr.appendChild(priceTD)

        var statusTD = document.createElement("td")
        statusTD.innerText = localPaperPros.status
        tr.appendChild(statusTD)

        tbody.appendChild(tr)


    }
}