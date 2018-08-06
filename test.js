    function getNum(n) {
        let num = 0, flag = true
        for (let i =  0; i <= n; i++) {
            if (num === 1) flag = true
            if (num === 9) flag =false
            flag ? num++ : num--
        }
        return num

    }
console.log(getNum(15))