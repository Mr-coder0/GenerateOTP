// Generate OTP one Time Password

function generateOTP(){
    let OTP = "";
    let digits = "1234567890";
for (let i = 0; i < 4; i++){
    OTP += digits[Math.floor(Math.random()*10)];
}
return OTP;
}

console.log (`${generateOTP()} is your one time password (OTP).`)