document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.querySelector("#calendar tbody");
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    function generateCalendar(year, month) {
        calendarBody.innerHTML = ""; // Clear previous calendar
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        let row = document.createElement("tr");
        for (let i = 0; i < firstDay; i++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            if (row.children.length === 7) {
                calendarBody.appendChild(row);
                row = document.createElement("tr");
            }
            
            let cell = document.createElement("td");
            cell.textContent = day;
            
            if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
                cell.classList.add("today");
            }
            
            row.appendChild(cell);
        }
        
        calendarBody.appendChild(row);
    }
    
    generateCalendar(year, month);
});
