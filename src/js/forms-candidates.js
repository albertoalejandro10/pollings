let n = 2;
const addRow = () => {
    let tbody = document.getElementById('tbody');
    let row = document.createElement('tr');
    n++;
    row.id = `row-${n}`;
    

    let row_data_1 = document.createElement('td');
    row_data_1.innerHTML = "Messi";
    let row_data_2 = document.createElement('td');
    row_data_2.innerHTML = "Partido raro";
    let row_data_3 = document.createElement('td');
    row_data_3.innerHTML = "messi.jpg";
    let row_data_4 = document.createElement('td');
    row_data_4.innerHTML = `<button type="button" onclick="deleteRow( ${n++} )"><i class="fas fa-trash-alt"></i></button>`;

    row.appendChild(row_data_1);
    row.appendChild(row_data_2);
    row.appendChild(row_data_3);
    row.appendChild(row_data_4);
    tbody.appendChild(row);
}

const deleteRow = (index) => {
    let table = document.getElementById("candidates");
    let rowCount = table.rows.length;
    
    if(rowCount <= 2)
        alert('No se puede eliminar más');
    else
        document.getElementById(`row-${index}`).remove();
}