function tampilData(){
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var nilaikepuasan = document.getElementById("nilaikepuasan").value;
    var layanan = document.querySelector("input[name=layanan]:checked").value;
    var kritiksaran = document.getElementById("kritiksaran").value;
    var tauproduk = document.getElementsByName("tauproduk");
    var daftarjawaban = ''

    for(var tauproduk2 of tauproduk) {
        if(tauproduk2.checked) {
            daftarjawaban += ', '+ tauproduk2.value
        }
    }

    daftarjawaban = daftarjawaban.substring(1)


    alert(
        "Nama : " + nama +
        "\nUmur : " + umur +
        "\nJenis Kelamin : " + jeniskelamin +
        "\nNilai Kepuasan(1-5) : " + nilaikepuasan +
        "\nMengetahui aplikasi kami : " + daftarjawaban +
        "\nMenggunakan layanan : " + layanan +
        "\nKritik dan Saran : " + kritiksaran
    );
}