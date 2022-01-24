let n = 2;
const addRow = () => {
    let tbody = document.getElementById('tbody');
    let row = document.createElement('tr');
    n++;
    row.id = `row-${n}`;
    

    let row_data_1 = document.createElement('td');
    row_data_1.innerHTML = `<input type="text" name="" id="" placeholder="Nombre">`;
    let row_data_2 = document.createElement('td');
    row_data_2.innerHTML = `<input type="text" name="" id="" placeholder="Partido">`;
    let row_data_3 = document.createElement('td');
    row_data_3.innerHTML = `<input class="upload-box" type="file" name="" accept="image/*">`;
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