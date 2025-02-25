/**
 * Mengembalikan hasil penjumlahan dua angka.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function tambah(a, b) {
  return a + b;
}

/**
 * Mengembalikan hasil pengurangan dua angka.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function kurang(a, b) {
  return a - b;
}

/**
 * Mengembalikan hasil perkalian dua angka.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function kali(a, b) {
  return a * b;
}

/**
 * Mengembalikan hasil pembagian dua angka.
 * @param {number} a
 * @param {number} b
 * @returns {number | string}
 */
function bagi(a, b) {
  if (b === 0) {
    return "Pembagian oleh nol tidak diperbolehkan";
  }
  return a / b;
}

/**
 * Mengembalikan hasil pangkat dari dua angka.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function pangkat(a, b) {
  return Math.pow(a, b);
}

/**
 * Mengembalikan faktorial dari sebuah angka.
 * @param {number} n
 * @returns {number}
 */
function faktorial(n) {
  if (n < 0) return "Faktorial tidak terdefinisi untuk bilangan negatif";
  let hasil = 1;
  for (let i = 2; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}

/**
 * Mengembalikan true jika angka adalah bilangan prima, false jika tidak.
 * @param {number} n
 * @returns {boolean}
 */
function isPrima(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Mengembalikan hasil dari a modulus b.
 * modulus adalah sisa pembagian a dengan b.
 * contoh 10 mod 3 = 1, karena 10 dibagi 3 adalah 3 sisa 1.
 * 10 / 3 = 3 sisa 1. dan 1 adalah jawabannya
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function modulus(a, b) {
  return a % b;
}

/**
 * Mengembalikan nilai absolut dari sebuah angka.
 * @param {number} a
 * @returns {number}
 */
function absolut(a) {
  return Math.abs(a);
}

/**
 * Mengembalikan nilai terbesar dari dua angka.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function maksimum(a, b) {
  return Math.max(a, b);
}

/**
 * Mengembalikan nilai terkecil dari dua angka.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function minimum(a, b) {
  return Math.min(a, b);
}

/**
 * Mengembalikan hasil dari a dibulatkan ke bilangan bulat terdekat.
 * @param {number} a
 * @returns {number}
 */
function bulatkan(a) {
  return Math.round(a);
}

// Export hasil akhir
module.exports = {
  tambah,
  kurang,
  kali,
  bagi,
  pangkat,
  faktorial,
  isPrima,
  modulus,
  absolut,
  maksimum,
  minimum,
  bulatkan,
};
