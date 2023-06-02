function tampilData(){
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var layanan = document.querySelector("input[name=layanan]:checked").value;
    var kritiksaran = document.getElementById("kritiksaran").value;
    var tujuan = document.getElementById("tujuan").value;


    alert(
        "Nama : " + nama +
        "\nUmur : " + umur +
        "\nJenis Kelamin : " + jeniskelamin +
        "\nKota Tujuan Anda : " + layanan +
        "\nAlamat Penjemputan : " + kritiksaran +
        "\nAlamat Tujuan : " + kritiksaran
    );
}