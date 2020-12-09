const Cryptr = require("cryptr");

function CreateSecret(secret) {
	const crypter = Cryptr(secret);
	// console.log(crypter);
	return crypter;
}

function Encrypt(cryptr, message) {
	const encryptedMessage = cryptr.encrypt(message);
	// console.log(encryptedMessage);
	return encryptedMessage;
}

function Decrypt(cryptr, encryptedMessage) {
	const message = cryptr.decrypt(encryptedMessage);
	// console.log(message);
	return message;
}

export default { CreateSecret, Encrypt, Decrypt };
