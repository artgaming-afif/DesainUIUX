function validateForm() {

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let jam = document.getElementById("jam").value;
    let tujuan = document.getElementById("tujuan").value;
    let tiket = document.getElementById("tiket").value;

    let errNama = document.getElementById("err_nama");
    let errEmail = document.getElementById("err_email");
    let errJam = document.getElementById("err_jam");
    let errTujuan = document.getElementById("err_tujuan");
    let errTiket = document.getElementById("err_tiket");

    errNama.innerHTML = "";
    errEmail.innerHTML = "";
    errJam.innerHTML = "";
    errTujuan.innerHTML = "";
    errTiket.innerHTML = "";

    let isValid = true;

    if (nama === "" || nama.length > 30) {
        errNama.innerHTML = "Nama wajib diisi (maks 30 karakter)";
        isValid = false;
    }

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        errEmail.innerHTML = "Format email tidak valid";
        isValid = false;
    }

    let regexJam = /^([01]\d|2[0-3]).[0-5]\d$/;
    if (!regexJam.test(jam)) {
        errJam.innerHTML = "Format jam harus 00.00 - 23.59";
        isValid = false;
    }

    if (tujuan === "") {
        errTujuan.innerHTML = "Tujuan wajib diisi";
        isValid = false;
    }

    if (tiket < 1 || tiket > 10) {
        errTiket.innerHTML = "Jumlah tiket harus 1 - 10";
        isValid = false;
    }

    if (!isValid) return false;

    document.getElementById("hasil").innerHTML = `
        <h3>Data Berhasil Divalidasi</h3>
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Jam:</b> ${jam}</p>
        <p><b>Tujuan:</b> ${tujuan}</p>
        <p><b>Tiket:</b> ${tiket}</p>
    `;

    return false;
}
