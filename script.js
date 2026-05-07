async function addBooking() {
  await fetch("/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      hotel: document.getElementById("hotel").value,
      cost: Number(document.getElementById("cost").value),
      sale: Number(document.getElementById("sale").value)
    })
  });

  loadBookings();
}

async function loadBookings() {
  const res = await fetch("/api/bookings");
  const data = await res.json();

  document.getElementById("list").innerHTML =
    data.map(b =>
      `<li>${b.name} - ${b.hotel} - Profit: ${b.sale - b.cost}</li>`
    ).join("");
}

loadBookings();
