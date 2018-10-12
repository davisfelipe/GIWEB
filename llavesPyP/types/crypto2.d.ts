export function createIv(...args: any[]): any;
export function createKeyPair(...args: any[]): any;
export function createPassword(_x2: any, ...args: any[]): any;
export function decrypt(_x10: any, _x11: any, _x12: any, ...args: any[]): any;
export namespace decrypt {
    // Circular reference from crypto2.decrypt
    const aes256cbc: any;
    function rsa(_x15: any, _x16: any, ...args: any[]): any;
}
export function encrypt(_x7: any, _x8: any, _x9: any, ...args: any[]): any;
export namespace encrypt {
    // Circular reference from crypto2.encrypt
    const aes256cbc: any;
    function rsa(_x13: any, _x14: any, ...args: any[]): any;
}
export function hash(_x24: any, ...args: any[]): any;
export namespace hash {
    function md5(_x22: any, ...args: any[]): any;
    function sha1(_x23: any, ...args: any[]): any;
    // Circular reference from crypto2.hash
    const sha256: any;
}
export function hmac(_x27: any, _x28: any, ...args: any[]): any;
export namespace hmac {
    function sha1(_x25: any, _x26: any, ...args: any[]): any;
    // Circular reference from crypto2.hmac
    const sha256: any;
}
export function readPrivateKey(_x5: any, ...args: any[]): any;
export function readPublicKey(_x6: any, ...args: any[]): any;
export function sign(_x17: any, _x18: any, ...args: any[]): any;
export namespace sign {
    // Circular reference from crypto2.sign
    const sha256: any;
}
export function verify(_x19: any, _x20: any, _x21: any, ...args: any[]): any;
export namespace verify {
    // Circular reference from crypto2.verify
    const sha256: any;
}