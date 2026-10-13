import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const BOBOT_TUGAS = 0.3;
const BOBOT_UTS = 0.35;
const BOBOT_UAS = 0.35;
function jalankanAkademikaCLI() {
    console.log("=== AKADEMIKACLI ===");
    rl.question("Masukkan Nama Mahasiswa: ", (inputNama) => {
        rl.question("Masukkan Nilai Tugas (0-100): ", (inputTugas) => {
            rl.question("Masukkan Nilai UTS (0-100): ", (inputUts) => {
                rl.question("Masukkan Nilai UAS (0-100): ", (inputUas) => {
                    rl.question("Masukkan Persentase Kehadiran (%): ", (inputKehadiran) => {
                        rl.question("Apakah Mahasiswa Aktif? (y/t): ", (inputAktif) => {
                            rl.question("Pilih Kode Jalur Khusus (1, 2, atau 3): ", (inputJalur) => {
                                // Mengonversi input ke variabel mutable (let) dengan tipe data string, number, boolean
                                let namaMahasiswa = inputNama;
                                let nilaiTugasNum = parseFloat(inputTugas);
                                let nilaiUtsNum = parseFloat(inputUts);
                                let nilaiUasNum = parseFloat(inputUas);
                                let persentaseKehadiran = parseFloat(inputKehadiran);
                                let statusAktif = inputAktif.toLowerCase() === "y";
                                let kodeJalur = parseInt(inputJalur);
                                // aritmatika (*) dan (+)
                                let skorTugas = nilaiTugasNum * BOBOT_TUGAS;
                                let skorUts = nilaiUtsNum * BOBOT_UTS;
                                let skorUas = nilaiUasNum * BOBOT_UAS;
                                let totalNilaiAkhir = skorTugas + skorUts + skorUas;
                                // (beban if ke 3): operator perbandingan (>=) dan (+=)
                                if (persentaseKehadiran >= 90) {
                                    totalNilaiAkhir += 5; // Operator +=
                                }
                                let kategoriPredikat = "D";
                                if (totalNilaiAkhir >= 80) {
                                    kategoriPredikat = "A";
                                }
                                else if (totalNilaiAkhir >= 70) {
                                    kategoriPredikat = "B";
                                }
                                else if (totalNilaiAkhir >= 60) {
                                    kategoriPredikat = "C";
                                }
                                else {
                                    kategoriPredikat = "D";
                                }
                                let statusKelulusan = "Belum Diketahui";
                                // (beban switch ke 1) (Level 1 - Luar)
                                switch (kategoriPredikat) {
                                    case "A":
                                    case "B":
                                        // (beban if ke 1) (Nested Level 2) - operator logika (&&, !) & (===)
                                        if (persentaseKehadiran >= 75 &&
                                            statusAktif === true) {
                                            // (beban if ke 2) (Nested Level 3) - operator logika (||) & (>, !==)
                                            if (nilaiTugasNum > 50 || nilaiUasNum !== 0) {
                                                // (beban s2) (Nested Level 4 / 3 tingkat kedalaman bersarang)
                                                switch (kodeJalur) {
                                                    case 1:
                                                        statusKelulusan =
                                                            "Lulus dengan Pujian (Cumlaude)";
                                                        break;
                                                    case 2:
                                                        statusKelulusan = "Lulus Reguler";
                                                        break;
                                                    case 3:
                                                        statusKelulusan = "Lulus Bersyarat";
                                                        break;
                                                    default:
                                                        statusKelulusan = "Lulus Standar";
                                                        break;
                                                } // Akhir s2
                                            }
                                            else {
                                                statusKelulusan = "Lulus Bersyarat Komponen";
                                            } // Akhir If 2
                                        }
                                        else {
                                            statusKelulusan = "Tidak Lulus (Administrasi)";
                                        } // Akhir If 1
                                        break;
                                    case "C":
                                        statusKelulusan = "Lulus Remedial";
                                        break;
                                    case "D":
                                        statusKelulusan = "Tidak Lulus Ujian";
                                        break;
                                    default:
                                        statusKelulusan = "Status Tidak Valid";
                                        break;
                                } // Akhir s1
                                // output ke terminal
                                console.log("\n=========================================");
                                console.log(`Nama Mahasiswa    : ${namaMahasiswa}`);
                                console.log(`Total Nilai Akhir : ${totalNilaiAkhir.toFixed(2)}`);
                                console.log(`Predikat Huruf    : ${kategoriPredikat}`);
                                console.log("=========================================");
                                rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
}
//# sourceMappingURL=akademikcli.js.map