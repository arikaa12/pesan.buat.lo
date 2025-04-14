function tampilkanPesan() {
  const pesan = document.getElementById("pesan").value;
  const hasil = document.getElementById("hasil");
  if (pesan.trim() !== "") {
    hasil.innerHTML = <strong>Pesan Rahasia:</strong><br>${pesan};
    hasil.classList.remove("hidden");
  }
}
