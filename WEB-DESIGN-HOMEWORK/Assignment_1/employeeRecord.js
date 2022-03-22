function onReset() {
    // obtaining values of input fields using id and assigning to variables 
    let fName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let designation = document.getElementById('designation').value;
    let salary = document.getElementById('salary').value;
    let phone_number = document.getElementById('cell').value
    
    // created array of the obtained data to make it iterable
    let recordArray = [fName, email, designation, salary, phone_number];
    
    // row creation
    let tr = document.createElement('tr');
    
    /* with every iteration loop creates 'td' element, 
    assign input field value to it and append the element to
    row created */
    for (let i=0; i < recordArray.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = recordArray[i];
        tr.append(td);
    }

    // row will be appended to the tbody
    tbody.append(tr);
}