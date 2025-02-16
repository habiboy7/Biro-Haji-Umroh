
  document.getElementById('umrahRegistrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const namaLengkap = document.getElementById('namaLengkap').value;
    const tempatLahir = document.getElementById('tempatLahir').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.getElementById('jenisKelamin').value;
    const alamat = document.getElementById('alamat').value;
    const noTelepon = document.getElementById('noTelepon').value;
    const email = document.getElementById('email').value;
    const pekerjaan = document.getElementById('pekerjaan').value;
    const noPaspor = document.getElementById('noPaspor').value;
    const tempatDikeluarkan = document.getElementById('tempatDikeluarkan').value;
    const tanggalDikeluarkan = document.getElementById('tanggalDikeluarkan').value;
    const masaBerlaku = document.getElementById('masaBerlaku').value;
    const golonganDarah = document.getElementById('golonganDarah').value;
    const riwayatPenyakit = document.getElementById('riwayatPenyakit').value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Formulir Pendaftaran Umroh', 10, 10);
    doc.setFontSize(12);
    doc.text(`Nama Lengkap: ${namaLengkap}`, 10, 20);
    doc.text(`Tempat Lahir: ${tempatLahir}`, 10, 30);
    doc.text(`Tanggal Lahir: ${tanggalLahir}`, 10, 40);
    doc.text(`Jenis Kelamin: ${jenisKelamin}`, 10, 50);
    doc.text(`Alamat: ${alamat}`, 10, 60);
    doc.text(`Nomor Telepon: ${noTelepon}`, 10, 70);
    doc.text(`Email: ${email}`, 10, 80);
    doc.text(`Pekerjaan: ${pekerjaan}`, 10, 90);
    doc.text(`Nomor Paspor: ${noPaspor}`, 10, 100);
    doc.text(`Tempat Dikeluarkan: ${tempatDikeluarkan}`, 10, 110);
    doc.text(`Tanggal Dikeluarkan: ${tanggalDikeluarkan}`, 10, 120);
    doc.text(`Masa Berlaku: ${masaBerlaku}`, 10, 130);
    doc.text(`Golongan Darah: ${golonganDarah}`, 10, 140);
    doc.text(`Riwayat Penyakit: ${riwayatPenyakit}`, 10, 150);

    doc.save('pendaftaran-umroh.pdf');
  });

