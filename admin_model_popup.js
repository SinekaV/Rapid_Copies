// Get the modal
var adminModal = document.getElementById('modelContainer');

// Get the button that opens the modal
var adminBtn = document.getElementById("mySizeChart");

// Get the <span> element that closes the modal
var adminSpan = document.getElementsByClassName("admin_close")[0];

// When the user clicks the button, open the modal 
adminBtn.onclick = function() {
    adminModal.style.display = "block";
    thead.className = "thead-dark"
}

// When the user clicks on <span> (x), close the modal
adminSpan.onclick = function() {
    adminModal.style.display = "none";
    thead.className = "thead-dark sticky-top"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == adminModal) {
        adminModal.style.display = "none";
        thead.className = "thead-dark sticky-top"
    }
}