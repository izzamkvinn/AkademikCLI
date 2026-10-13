import * as readline from "readline";

const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Konstanta untuk bobot nilai
const BOBOT_TUGAS: number = 0.3;
const BOBOT_UTS: number = 0.35;
const BOBOT_UAS: number = 0.35;

// Fungsi utama untuk menjalankan CLI Akademik
function jalankanAkademikaCLI(): void {
  console.log("=== AKADEMIKCLI ===");

  // input data dengan menggunakan string
  rl.question("Masukkan Nama Mahasiswa: ", (inputNama: string) => {
    rl.question("Masukkan Nilai Tugas (0-100): ", (inputTugas: string) => {
      rl.question("Masukkan Nilai UTS (0-100): ", (inputUts: string) => {
        rl.question("Masukkan Nilai UAS (0-100): ", (inputUas: string) => {
          rl.question("Masukkan Persentase Kehadiran (%): ", (inputKehadiran: string) => {
              rl.question("Apakah Mahasiswa Aktif? (y/t): ",(inputAktif: string) => {
                  rl.question("Pilih Kode Jalur Khusus (1, 2, atau 3): ",(inputJalur: string) => {

                      // Mengonversi input ke variabel mutable (let) dengan tipe data string, number, boolean
                      let namaMahasiswa: string = inputNama;
                      let nilaiTugasNum: number = parseFloat(inputTugas);
                      let nilaiUtsNum: number = parseFloat(inputUts);
                      let nilaiUasNum: number = parseFloat(inputUas);
                      let persentaseKehadiran: number =
                        parseFloat(inputKehadiran);
                      let statusAktif: boolean =
                        inputAktif.toLowerCase() === "y";
                      let kodeJalur: number = parseInt(inputJalur);

                      // kalkulasi aritmatika (*) dan (+)
                      let skorTugas: number = nilaiTugasNum * BOBOT_TUGAS;
                      let skorUts: number = nilaiUtsNum * BOBOT_UTS;
                      let skorUas: number = nilaiUasNum * BOBOT_UAS;
                      let totalNilaiAkhir: number =
                        skorTugas + skorUts + skorUas;

                      // (beban if ke 3): operator perbandingan (>=) dan (+=)
                      if (persentaseKehadiran >= 90) {
                        totalNilaiAkhir += 5; // Operator +=
                      }

                      // menentukan kategori predikat awal
                      let kategoriPredikat: string = "D";
                      if (totalNilaiAkhir >= 80) {
                        kategoriPredikat = "A";
                      } else if (totalNilaiAkhir >= 70) {
                        kategoriPredikat = "B";
                      } else if (totalNilaiAkhir >= 60) {
                        kategoriPredikat = "C";
                      } else {
                        kategoriPredikat = "D";
                      }

                      let statusKelulusan: string = "Belum Diketahui";

                      //
                      // struktur kendali: 2 switch, 3 if, 3 level nested
                      //

                      // (beban switch ke 1) (Level 1 - Luar)
                      switch (kategoriPredikat) {
                        case "A":
                        case "B":
                          // (beban if ke 1) (Nested Level 2) - operator logika (&&, !) & (===)
                          if (
                            persentaseKehadiran >= 75 &&
                            statusAktif === true
                          ) {
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
                            } else {
                              statusKelulusan = "Lulus Bersyarat Komponen";
                            } // Akhir If 2
                          } else {
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
                      console.log(
                        "\n=========================================",
                      );
                      console.log(`Nama Mahasiswa    : ${namaMahasiswa}`);
                      console.log(
                        `Total Nilai Akhir : ${totalNilaiAkhir.toFixed(2)}`,
                      );
                      console.log(`Predikat Huruf    : ${kategoriPredikat}`);
                      console.log("=========================================");

                      rl.close();
                    },
                  );
                },
              );
            },
          );
        });
      });
    });
  });
}

// run fungsi utama
jalankanAkademikaCLI();