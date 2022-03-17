function onReset() {
    let fName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let designation = document.getElementById('designation').value;
    let salary = document.getElementById('salary').value;
    
    let recordArray = [fName, email, designation, salary];
    let tr = document.createElement('tr');
    for (let i=0; i < recordArray.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = recordArray[i];
        tr.append(td);
    }
    tbody.append(tr);
}