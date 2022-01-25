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
    row_data_3.innerHTML = `
                            <input type="file" id="real-file-${n}" hidden="hidden" accept="image/*" />
                            <button type="button" class="custom-button" id="custom-button-${n}" onclick="upFile(${n})"><i class="far fa-file-image"></i>Seleccionar imagen</button>
                            <span class="custom-text" id="custom-text-${n}">No hay imagen</span>
                           `;
    let row_data_4 = document.createElement('td');
    row_data_4.innerHTML = `<button type="button" class="trash-alt" onclick="deleteRow( ${n} )"><i class="fas fa-trash-alt"></i></button>`;

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


// Input File code
const upFile = (index) => {
    const customBtn = document.getElementById(`custom-button-${index}`);
    customBtn.addEventListener("click", index => {
        const realFileBtn = document.getElementById(`real-file-${(index.target.id).substr(-1)}`);
        realFileBtn.click();
        realFileBtn.addEventListener("change", index => {
            const customTxt = document.getElementById(`custom-text-${(index.target.id).substr(-1)}`);
            if (realFileBtn.value) {
                customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
            } else {
                customTxt.innerHTML = "No hay imagen";
            }
        });
    })
}