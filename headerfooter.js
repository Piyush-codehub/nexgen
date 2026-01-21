fetch("headerfooter/header.html")
  .then(res => res.text())
  .then(data => document.getElementById("header").innerHTML = data);

fetch("headerfooter/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);
