
function checkGraduation() {
  const nisn = document.getElementById("nisnInput").value.trim();
  const resultDiv = document.getElementById("result");
  const student = students.find(s => s.nisn === nisn);

  if (student) {
    resultDiv.innerHTML = `
      <p><strong>Nama:</strong> ${student.name}</p>
      <p><strong>Status Kelulusan:</strong> <span style="color:green;">${student.status}</span></p>
    `;
  } else {
    resultDiv.innerHTML = "<p style='color:red;'>NISN tidak ditemukan. Silakan periksa kembali.</p>";
  }
}
