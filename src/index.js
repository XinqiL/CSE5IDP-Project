import { fetchData } from "./firestore.js";

async function render(event) {
  const tableBody = document.getElementById("eventTableBody");
  const row = document.createElement("tr");

  const organiserCell = document.createElement("td");
  organiserCell.textContent = event.organiserName;
  row.appendChild(organiserCell);

  const jsDate = event.time.toDate();
  const dateCell = document.createElement("td");
  const formattedDate = jsDate.toLocaleDateString();
  dateCell.textContent = formattedDate;
  row.appendChild(dateCell);

  const timeCell = document.createElement("td");
  const formattedTime = jsDate.toLocaleTimeString();
  timeCell.textContent = formattedTime;
  row.appendChild(timeCell);

  const wifiCell = document.createElement("td");
  wifiCell.textContent = event.wifi;
  row.appendChild(wifiCell);

  const categoryCell = document.createElement("td");
  categoryCell.textContent = event.category;
  row.appendChild(categoryCell);

  tableBody?.appendChild(row);
}

async function fetchDataAndRender() {
  const events = await fetchData();
  events.forEach((event) => {
    render(event);
  });
}

// Fetch the data and render
fetchDataAndRender();
