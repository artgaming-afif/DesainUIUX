<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $warna = $_POST['warna'];
    $ukuran = $_POST['ukuran'];
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Pesanan</title>
    <link rel="stylesheet" href="product-css/output.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <h2>Pesanan Anda</h2>
            <p><strong>Warna:</strong> <?= htmlspecialchars($warna); ?></p>
            <p><strong>Ukuran:</strong> <?= htmlspecialchars($ukuran); ?></p>
            <p>Terima kasih telah memesan produk kami! lain kali beli lagi, lumayan ada promo, beli 2 gratis 100, tapi boong, HAHAHAHAHAHAHA 😊</p>
            <a href="index.html" class="btn">Kembali ke Beranda</a>
        </div>
    </div>
</body>
</html>
