const Cryptr = require("cryptr");

// Create Secret;
// =============:
function CreateSecret(secret) {
	const crypter = Cryptr(secret);
	// console.log(crypter);
	return crypter;
}

// Encrypt;
// =============: - Secret & message to translate;
function Encrypt(cryptr, message) {
	const encryptedMessage = cryptr.encrypt(message);
	// console.log(encryptedMessage);
	return encryptedMessage;
}

// Decrypt;
// =============: - Secret & encrypted message;
function Decrypt(cryptr, encryptedMessage) {
	const message = cryptr.decrypt(encryptedMessage);
	// console.log(message);
	return message;
}

export default { CreateSecret, Encrypt, Decrypt };
