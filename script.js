async function addBooking() {
  await fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      hotel: hotel.value,
      cost: cost.value,
      sale: sale.value
    })
  });

  loadBookings();
}

async function loadBookings() {
  const res = await fetch("/api/bookings");
  const data = await res.json();

  list.innerHTML = data.map(b =>
    `<li>${b.name} - ${b.hotel} - Profit: ${b.sale - b.cost}</li>`
  ).join("");
}

loadBookings();
