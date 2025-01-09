'use strict';

const table = document.querySelector('table');
const rowsIndex = 1;
const rowsReplace = 4;

const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].cells[rowsIndex];
  const cellClone = cell.cloneNode(true);
  const newCell = rows[i].insertCell(rowsReplace);

  newCell.appendChild(cellClone);
}
