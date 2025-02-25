const readline = require("readline");
const operasi = require("./solution");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tampilkanMenu() {
  console.log("\n┌───────────────────────────┐");
  console.log("│    📌 KALKULATOR CERDAS    │");
  console.log("├───────────────────────────┤");
  console.log("│ 1. ➕ Penjumlahan         │");
  console.log("│ 2. ➖ Pengurangan         │");
  console.log("│ 3. ✖ Perkalian          │");
  console.log("│ 4. ➗ Pembagian          │");
  console.log("│ 5. 🔢 Perpangkatan       │");
  console.log("│ 6. 🎭 Faktorial         │");
  console.log("│ 7. 🔍 Cek Bilangan Prima │");
  console.log("│ 8. % Modulus             │");
  console.log("│ 9. 📏 Nilai Absolut      │");
  console.log("│10. 📊 Nilai Maksimum     │");
  console.log("│11. 📉 Nilai Minimum      │");
  console.log("│12. 🔄 Pembulatan         │");
  console.log("│ 0. ❌ Keluar             │");
  console.log("└───────────────────────────┘\n");
}

function jalankanKalkulator() {
  tampilkanMenu();
  rl.question("📌 Pilih operasi (0-12): ", (pilihan) => {
    if (pilihan === "0") {
      console.log("\n✅ Terima kasih telah menggunakan Kalkulator Cerdas!\n");
      rl.close();
      return;
    }

    if (["1", "2", "3", "4", "5", "8", "10", "11"].includes(pilihan)) {
      rl.question("🔢 Masukkan angka pertama: ", (num1) => {
        rl.question("🔢 Masukkan angka kedua: ", (num2) => {
          prosesOperasi(pilihan, Number(num1), Number(num2));
        });
      });
    } else if (["6", "7", "9", "12"].includes(pilihan)) {
      rl.question("🔢 Masukkan angka: ", (num) => {
        prosesOperasi(pilihan, Number(num));
      });
    } else {
      console.log("⚠️ Pilihan tidak valid! Silakan coba lagi.\n");
      jalankanKalkulator();
    }
  });
}

function prosesOperasi(pilihan, a, b = null) {
  let hasil;
  switch (pilihan) {
    case "1": hasil = operasi.tambah(a, b); break;
    case "2": hasil = operasi.kurang(a, b); break;
    case "3": hasil = operasi.kali(a, b); break;
    case "4": hasil = operasi.bagi(a, b); break;
    case "5": hasil = operasi.pangkat(a, b); break;
    case "6": hasil = operasi.faktorial(a); break;
    case "7": hasil = operasi.isPrima(a) ? "✔️ Bilangan Prima" : "❌ Bukan Bilangan Prima"; break;
    case "8": hasil = operasi.modulus(a, b); break;
    case "9": hasil = operasi.absolut(a); break;
    case "10": hasil = operasi.maksimum(a, b); break;
    case "11": hasil = operasi.minimum(a, b); break;
    case "12": hasil = operasi.bulatkan(a); break;
    default: console.log("⚠️ Terjadi kesalahan!"); jalankanKalkulator(); return;
  }
  console.log(`📢 Hasil: ${hasil}\n`);
  jalankanKalkulator();
}

jalankanKalkulator();
