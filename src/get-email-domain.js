const { NotImplementedError } = require("../lib");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regex = /@([^@]+)$/; //Это регулярное выражение ищет последний @ в строке и всё, что идёт после него, до конца строки, не включая другие @
  const match = email.match(regex);
  return match ? match[1].trim() : null;
}

module.exports = {
  getEmailDomain,
};
