function checkGraduation() {
  const nameInput = document.getElementById("nameInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  const student = students.find(s => s.name.toLowerCase() === nameInput);

  if (student) {
    resultDiv.innerHTML = `
      <p><strong>Nama:</strong> ${student.name}</p>
      <p><strong>Status Kelulusan:</strong> <span style="color:green;">${student.status}</span></p>
    `;
  } else {
    resultDiv.innerHTML = "<p style='color:red;'>Nama tidak ditemukan. Silakan periksa kembali penulisan nama Anda.</p>";
  }
}
