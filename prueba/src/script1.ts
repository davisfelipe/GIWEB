import NodeRSA from 'node-rsa'
const key = new NodeRSA({b:512})
const text= "Hola Amigos"
const keyData="-----BEGIN CERTIFICATE-----MIHgMIGaAgEBMA0GCSqG...-----END CERTIFICATE-----"
const privado=key.exportKey('pkcs1-der')
console.log(privado)