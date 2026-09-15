const API_URL = "/api/employees";

async function loadEmployees() {

    const response = await fetch(API_URL);

    const employees = await response.json();

    const list = document.getElementById("employeeList");

    list.innerHTML = "";

    employees.forEach(employee => {

        const li = document.createElement("li");

        li.innerText =
            employee.id + " - " +
            employee.name + " - " +
            employee.role;

        list.appendChild(li);
    });
}


document
    .getElementById("employeeForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const role =
            document.getElementById("role").value;

        await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                role: role
            })
        });

        document.getElementById("name").value = "";
        document.getElementById("role").value = "";

        loadEmployees();
    });


loadEmployees();
