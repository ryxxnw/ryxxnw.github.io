const buttonFemale = document.getElementById('buttonFemale')
const buttonMale = document.getElementById('buttonMale')

/* Jika tombol male dipencet keluar pilihan siapa nama kamu? [menggunakan prompt] setelah diinput, dijawab f*ck you (namanya) [itu gunakan confirm atau alert kalo gamau cape]*/

buttonMale.onclick = function() {
    let namaOrang = prompt('Tulis nama kamu:');
    if (namaOrang === '') {
        alert('tulis nama lu etdah, ulang ulang');
        return;
    } else if (namaOrang) {
        var konfirmasi = confirm('Fuck you ' + namaOrang + '!');
    } else {
        alert('yaelah dicancel');
        return;
    };

    if (konfirmasi != false) {
        alert('hehehe becanda jgn marah yaaaa');
    } else {
        alert('becanda bang');
    };
}

buttonFemale.onclick = function() {
    let namaOrang = prompt('Tulis nama kamu:');
    if (namaOrang === '') {
        alert('kamu belum ketik apa-apa, ulang ya');
        return;
    } else if (namaOrang) {
        var konfirmasi = confirm('I love you ' + namaOrang + "<3");
    } else {
        alert('yaah dicancel');
        return;
    };

    if (konfirmasi != false) {
        alert('hehehe becanda jgn baper yaaaa');
    } else {
        alert('iya, engga');
    };
}