        AkademikaCLI
Sistem Akademik Berbasis Terminal

Sistem CLI berbasis TypeScript ini dirancang untuk mengotomatisasi perhitungan nilai akhir ujian mahasiswa berdasarkan komponen tugas, UTS, UAS, kehadiran, keaktifan, dan jalur khusus. Di balik layar, sistem melakukan validasi kendali alur yang kompleks, lalu menyaring hasilnya untuk menyajikan informasi ringkas secara presisi.
Pengguna Sistem: Dosen, staf akademik, atau mahasiswa yang ingin mengevaluasi nilai ujian secara cepat melalui terminal.

Data Input:
1.	Nama Mahasiswa (string)
2.	Nilai Tugas (0 - 100, number)
3.	Nilai UTS (0 - 100, number)
4.	Nilai UAS (0 - 100, number)
5.	Persentase Kehadiran (0 - 100%, number)
6.	Status Keaktifan Kuliah (boolean, ya/tidak)
7.	Kode Jalur Khusus (1, 2, atau 3, number)
Data Output:
1.	Nama Mahasiswa (string)
2.	Total Nilai Akhir (number, dibulatkan 2 desimal)
3.	Predikat Huruf (string: A, B, C, atau D)

Masalah dibagi menjadi 2 sub masalah/sub proses utama:
Sub-proses Input dan Kalkulasi Aritmatika: Menerima input teks dari terminal, mengonversinya ke tipe data yang sesuai (string, number, boolean), menghitung skor komponen terbobot menggunakan operator aritmatika(*, +), serta memperbarui nilai menggunakan operator compound(+=).

Pola pembobotan nilai: Setiap komponen nilai ujian selalu dikalikan dengan persentase bobot tetap (Tugas 30%, UTS 35%, UAS 35%) untuk membentuk akumulasi skor parsial yang konsisten.
Pola keputusan berjenjang: valuasi status kelulusan dan predikat mengikuti pola berjenjang mulai dari validasi predikat dasar, pemeriksaan administratif (&&, !), hingga penentuan jalur khusus sebelum difilter menjadi luaran ringkas.

Relevan	Tidak Relevan
Informasi Relevan (Digunakan dalam Program)	Informasi Tidak Relevan (Diabaikan / Diabstrakkan)
Nama Mahasiswa, Nilai Tugas, UTS, dan UAS	Alamat tempat tinggal dan nomor telepon mahasiswa
Persentase kehadiran dan status keaktifan kuliah	Merek laptop atau spesifikasi perangkat keras pengguna
Bobot persentase nilai ujian dan batas predikat	Nama dosen pengampu dan nomor ruang ujian
Kode jalur evaluasi khusus (1, 2, atau 3)	Jadwal mata kuliah lain atau riwayat semester sebelumnya

1. Mengimpor modul readline Node.js dan menetapkan konstanta bobot nilai (BOBOT_TUGAS, BOBOT_UTS, BOBOT_UAS, MIN_KEHADIRAN).
2. Menerima data input dari pengguna secara berurutan melalui terminal CLI: Nama, Nilai Tugas, Nilai UTS, Nilai UAS, Persentase Kehadiran, Status Aktif, dan Kode Jalur Khusus.
3. Mengonversi data input mentah (string) menjadi tipe data variabel yang sesuai (number dan boolean).
4. Menghitung skor parsial masing-masing komponen menggunakan operator aritmatika perkalian (*) dan menjumlahkannya menggunakan operator penjumlahan (+).
5. Memperbarui total nilai menggunakan operator compound penambahan (+=) untuk memberikan bonus kehadiran jika persentase ≥90%, serta membatasi nilai maksimum hingga 100.
6. Menentukan kategori predikat awal (A, B, C, D) berdasarkan besaran total nilai menggunakan rantai if / else if.
7. Menjalankan struktur kendali alur bersarang 4 tingkat (Switch 1 -> If 1 -> If 2 -> Switch 2) yang memanfaatkan operator logika (&&, ||, !) dan perbandingan (>=, ===, !==) untuk memproses aturan akademik secara komprehensif di balik layar.
8. Menyaring data hasil pemrosesan agar terminal hanya mengambil dan menampilkan tiga informasi utama: Nama Mahasiswa, Total Nilai Akhir (format 2 desimal), dan Predikat Huruf.
9. Menutup sesi interaksi terminal CLI secara bersih menggunakan perintah rl.close().
