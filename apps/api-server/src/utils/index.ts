import { createHash } from 'crypto';

export function passwordHashing(plainText: string): {
  hashedPassword: string;
  salt: string;
} {
  const salt = generateSalt();

  const hashedPassword = createHash('sha256')
    .update(plainText)
    .update(createHash('sha256').update(salt, 'utf8').digest('hex'))
    .digest('hex');

  return { hashedPassword, salt };
}

export function comparePassword(
  password: string,
  enterPassword: string,
  salt: string,
): boolean {
  const hashedPassword = createHash('sha256')
    .update(enterPassword)
    .update(createHash('sha256').update(salt, 'utf8').digest('hex'))
    .digest('hex');

  return password === hashedPassword;
}

export function generateSalt(length: number = 6) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let salt = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    salt += characters.charAt(randomIndex);
  }

  return salt;
}
