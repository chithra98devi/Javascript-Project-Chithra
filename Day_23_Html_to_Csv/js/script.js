class csvExport {
  constructor(table, header = true) {
    this.table = table;
    this.rows = Array.from(table.querySelectorAll("tr"));
    if (!header && this.rows[0].querySelectorAll("td")) {
      this.rows.shift();
    }
  }

  exportCSV() {
    const lines = [];
    const ncols = this._longestRow();

    for (const row of this.rows) {
      let line = "";
      for (let i = 0; i < ncols; i++) {
        if (row.children[i] !== undefined) {
          line += row.children[i].textContent;
        }
        line += i !== ncols - 1 ? "," : "";
      }
      lines.push(line);
    }

    return lines.join("\n");
  }

  _longestRow() {
    let colNo = this.rows.reduce(
      (length, row) =>
        row.childElementCount > length ? row.childElementCount : length,
      0
    );
    return colNo;
  }
}

const btnExport = document.querySelector("#btnExport");
const tableElement = document.querySelector("#table");

btnExport.addEventListener("click", function () {
  const obj = new csvExport(tableElement);
  const exportData = obj.exportCSV();
  const blob = new Blob([exportData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "file.csv";
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 500);
});
