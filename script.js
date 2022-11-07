class Password {

    generateSuperStrongPassword(length) {

        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    generateStrongPassword(length) {

        let resultStrong = '';
        let charactersForStrong = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = charactersForStrong.length;
        for (var i = 0; i < length; i++) {
            resultStrong += charactersForStrong.charAt(Math.floor(Math.random() * charactersLength));
        }
        return resultStrong;
    }
    generateWeakPassword() {

        let charactersForWeak = ["123456", '123456789', "qwerty", "password", "12345", "12345678", "111111", "1234567", "123123", "qwerty123", "1q2w3e", "1234567890", "DEFAULT", "000000", "abc123", "654321", "123321", "qwertyuiop", "Iloveyou", "666666", "jishnu", "myname", "arjun", "ajay", "anurag", "mathew", "rohit"];
        const random = charactersForWeak[(Math.random() * charactersForWeak.length) | 0];
        console.log(random);
    }


}

let passwordObj = new Password();
console.log(passwordObj.generateSuperStrongPassword(14))
console.log(passwordObj.generateStrongPassword(10))
passwordObj.generateWeakPassword()
