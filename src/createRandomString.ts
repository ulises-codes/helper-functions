import * as Crypto from 'crypto';

export default function createRandomString(size = 16): string {
  return Crypto.randomBytes(size)
    .toString('hex')
    .slice(0, size);
}
