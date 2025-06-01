function checkGraduation() {
  const nameInput = document.getElementById("nameInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  // Cari semua siswa yang mengandung input tersebut
  const matches = students.filter(s => s.name.toLowerCase().includes(nameInput));

  if (matches.length === 1) {
    // Jika hanya satu hasil yang cocok, tampilkan langsung
    const student = matches[0];
    resultDiv.innerHTML = `
      <p><strong>Nama:</strong> ${student.name}</p>
      <p><strong>Status Kelulusan:</strong> <span style="color:green;">${student.status}</span></p>
    `;
  } else if (matches.length > 1) {
    // Jika lebih dari satu cocok, tampilkan daftar hasil
    let resultHTML = `<p>Ditemukan ${matches.length} hasil, mohon perjelas input:</p><ul>`;
    matches.forEach(s => {
      resultHTML += `<li><strong>${s.name}</strong> - ${s.status}</li>`;
    });
    resultHTML += "</ul>";
    resultDiv.innerHTML = resultHTML;
  } else {
    // Tidak ditemukan
    resultDiv.innerHTML = "<p style='color:red;'>Nama tidak ditemukan. Silakan periksa kembali penulisan nama Anda.</p>";
  }
}
