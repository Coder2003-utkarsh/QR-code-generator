const { type } = require('os');
const qr = require('qrcode');

let data = {
    "name": "Utkarsh Coder 2003",
    "email": "utkarsh063.cse21@kipm.edu.in",
    "gender": "male",
    "id": 123
}

let stJSON = JSON.stringify(data);
qr.toFile("qr.png", stJSON, function(err, code) {
    if (err) return console.log('Error');
    console.log(code);
});