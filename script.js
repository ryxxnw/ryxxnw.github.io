const buttonFemale = document.getElementById('buttonFemale')
const buttonMale = document.getElementById('buttonMale')

/* Jika tombol male dipencet keluar pilihan siapa nama kamu? [menggunakan prompt] setelah diinput, dijawab f*ck you (namanya) [itu gunakan confirm atau alert kalo gamau cape]*/

buttonMale.onclick = function() {
    let namaOrang = prompt('Tulis nama kamu:');
    if (namaOrang != null) {
        let konfirmasi = confirm('Fuck you ' + namaOrang + '!');
    };

    if (konfirmasi = true) {
        alert('hehehe becanda jgn marah yaaaa');
    };
}

buttonFemale.onclick = function() {
    let namaOrang = prompt('Tulis nama kamu:');
    if (namaOrang != null) {
        let konfirmasi = confirm('I love you ' + namaOrang + "<3");
    };

    if (konfirmasi = true) {
        alert('hehehe becanda jgn baper yaaaa');
    };
}