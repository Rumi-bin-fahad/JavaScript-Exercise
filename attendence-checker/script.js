const history = [];

document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const designation = document.getElementById("designation").value;
    const arrivalTime = document.getElementById("arrivalTime").value;

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const expectedTime = arrivalTime.split(":");
    const expectedHour = parseInt(expectedTime[0]);
    const expectedMinute = parseInt(expectedTime[1]);

    let status;
    if (currentHour < expectedHour || (currentHour === expectedHour && currentMinute < expectedMinute)) {
        status = "On Time";
    } else {
        status = "Late";
        // Kaatna means Deduct in Urdu/Hindi
        const salaryDeduction = "Your salary has been deducted for late arrival!";
        document.getElementById("attendanceStatus").innerHTML = `<div class="alert">${salaryDeduction}</div>`;
    }

    const userInfo = { name, designation, arrivalTime, status };
    history.push(userInfo);

    updateHistory();
});

function updateHistory() {
    let historyHTML = "<h2>Attendance History</h2>";
    history.forEach(user => {
        historyHTML += `
            <div>
                <p>Name: ${user.name}</p>
                <p>Designation: ${user.designation}</p>
                <p>Arrival Time: ${user.arrivalTime}</p>
                <p>Status: ${user.status}</p>
            </div>
        `;
    });

    document.getElementById("history").innerHTML = historyHTML;
}
