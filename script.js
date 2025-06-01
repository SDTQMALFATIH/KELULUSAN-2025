function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, '') // hilangkan karakter khusus seperti titik, strip, dll
    .replace(/\s+/g, ' ')     // hilangkan spasi berlebihan
    .trim();
}

function checkGraduation() {
  const nameInput = normalize(document.getElementById("nameInput").value);
  const resultDiv = document.getElementById("result");

  const matches = students.filter(s => normalize(s.name).includes(nameInput));

  if (matches.length === 1) {
    const student = matches[0];
    resultDiv.innerHTML = `
      <p><strong>Nama:</strong> ${student.name}</p>
      <p><strong>Status Kelulusan:</strong> <span style="color:green;">${student.status}</span></p>
    `;
  } else if (matches.length > 1) {
    let resultHTML = `<p>Ditemukan ${matches.length} hasil. Perjelas nama Anda:</p><ul>`;
    matches.forEach(s => {
      resultHTML += `<li><strong>${s.name}</strong> - ${s.status}</li>`;
    });
    resultHTML += "</ul>";
    resultDiv.innerHTML = resultHTML;
  } else {
    resultDiv.innerHTML = "<p style='color:red;'>Nama tidak ditemukan. Silakan cek kembali penulisan nama Anda.</p>";
  }
}
