function getFormvalue() {
    // Get form by ID
    var form = document.getElementById('form1');
    
    // Get first and last name values
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;
    
    // Display alert with full name
    alert(firstName + " " + lastName);
}
