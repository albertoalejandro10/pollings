let m = 2;
const addRowCensus = () => {
    let tbody_2 = document.getElementById('tbody-census');
    let row_2 = document.createElement('tr');
    m++;
    row_2.id = `row-${m}-census`;

    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = `<input type="number" name="" id="" placeholder="Número">`;

    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = `<input type="text" name="" id="" placeholder="Nombre">`;

    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = `<input type="email" name="" id="" placeholder="Email">`;

    let row_2_data_4 = document.createElement('td');
    row_2_data_4.innerHTML = `<select name="select" id="">
                                <option value="Wallet">Wallet</option>
                                <option value="Token">Token</option>
                              </select>`;
    
    let row_2_data_5 = document.createElement('td');
    row_2_data_5.innerHTML = `<button type="button" onclick="deleteRowCensus( ${m++} )"><i class="fas fa-trash-alt"></i></button>`;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    row_2.appendChild(row_2_data_5);
    tbody_2.appendChild(row_2);
}

const deleteRowCensus = (index) => {
    let table = document.getElementById("census");
    let rowCount = table.rows.length;
    
    if(rowCount <= 2)
        alert('No se puede eliminar más');
    else
        document.getElementById(`row-${index}-census`).remove();
}