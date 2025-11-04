const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    return this.cipher(str, key, true);
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    return this.cipher(str, key, false);
  }

  cipher(str, key, encrypt) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let j = 0;

    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        let k = key.charCodeAt(j % key.length) - 65; //сдвиг по ключу
        let base = 65;
        if (encrypt) {
          c = ((c - base + k) % 26) + base; //шифруем
        } else {
          c = ((c - base - k + 26) % 26) + base; //расшифровываем
        }
        j++;
      }
      res += String.fromCharCode(c); //Преобразуем ASCII-код обратно в символ и добавляем в результат.
    }

    return this.direct ? res : res.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
