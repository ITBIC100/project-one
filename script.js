fetch("data/inventory.csv")
.then(res => res.text())
.then(text => {
    const rows = text.split("\n").slice(1);
    const table = document.getElementById("inventory");

    rows.forEach(row => {
        if (!row.trim()) return;
        const cols = row.split(",");
        table.innerHTML += `
            <tr>
                <td>${cols[0]}</td>
                <td>${cols[1]}</td>
                <td>${cols[2]}</td>
                <td>Rp ${cols[3]}</td>
            </tr>
        `;
    });
});

// fitur search
document.getElementById("search").addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    document.querySelectorAll("tbody tr").forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";
    });
});
