// 1-misol
Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : -1;
};

let sonlar = [1, 2, 3, 4, 5];
console.log(sonlar.last());

let newArray = [];
console.log(newArray.last());

// 2-misol
const hisoblagich = (n) => {
    let qiymat=n
    return () => {
        return qiymat = qiymat + 1
    }
}
const natija = hisoblagich(2)
console.log(natija());
console.log(natija());
console.log(natija());
console.log(natija());

// 3-misol
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
(async () => {
    console.log('loading...');
    await sleep(2000);  
    console.log('success.');
})();

// 4a-misol













// 5-misol
class Shakl {
    constructor(name) {
        this.name = name
    }
}
class Togri_tortburchak extends Shakl {
    constructor(name) {
        super(name)
    }
    perimetr(a, b) {
        return 2 * (a + b)
    }
    yuza(a, b) {
        return a * b
    }
}
class Aylana extends Shakl {
    constructor(name) {
        super(name)
    }
    perimetr(r) {
        return 2 * 3.14 * r
    }
    yuza(r) {
        return 3.14 * 3.14 * r
    }
}
const tortburchak = new Togri_tortburchak("Torburchak")
const aylana = new Aylana("Aylana")
console.log(tortburchak.perimetr(2, 3));
console.log(tortburchak.yuza(2, 3));
console.log(aylana.perimetr(2, 3));
console.log(aylana.yuza(2, 3));

// 6-misol
const chegirma = (narx, foiz) => {

    return () => {
        return narx = narx - narx * foiz / 100
    }
}
const res = chegirma(100, 10)
console.log(res());

// 7-misol
function savatcha() {
    const savat = []
    return function (mevalar) {
        if (mevalar) {
            savat.push(mevalar)


        }
        return savat
    }

}
const result = savatcha()
console.log(result("olma"));
console.log(result("nok"));
console.log(result("Anor"));
console.log(result());

// 8-misol
const plusnum = (a) => {
    return (b) => {
        return a + b
    }
}
const yigindi = plusnum(26)
console.log(yigindi(24));

// 9-misol
const ucercode = (ucer) => {
    return (ucer1) => {
        if (ucer === ucer1) {
            return true
        } else {
            return false
        }
    }
}
const check = ucercode("Khamidov-online")
console.log(check("Khamidov-online"));
console.log(check("Binyaminn"));

// 10-misol
function teskariRaqam(num) {
    if (num < 10) {
        return num;
    }

    return parseInt(num % 10 + teskariRaqam(Math.floor(num / 10)).toString());
}

console.log(teskariRaqam(1234));

// 11-misol
const daraja = (son, darajasi) => {
    if (darajasi === 0) {
        return 1
    }
    return son * daraja(son, darajasi - 1)
}
console.log(daraja(3, 2));

// 12-misol
const faktorial = (n) => {
    let k = 1
    for (let i = 1; i <= n; i++) {

        k = k * i
    }
    return k
}
faktorial(3)

// 13-misol
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Bismillaxu rahmonu rahim"), 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Assalomu alaykum"), 1000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Khamidov"), 1000);
});

Promise.all([promise1, promise2, promise3])
    .then((natijalar) => {
        console.log(natijalar);
    })
    .catch((error) => {
        console.error(error);
    });
// 14-misol
const promise01 = new Promise((resolve) => {
    setTimeout(() => resolve("Bismillaxu rahmonu rahim"), 1000);
});

const promise02 = new Promise((resolve) => {
    setTimeout(() => resolve("Assalomu alaykum"), 2000);
});

const promise03 = new Promise((resolve) => {
    setTimeout(() => resolve("Khamidov"), 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((natijalar) => {
        console.log(natijalar);
    })
    .catch((error) => {
        console.error(error);
    });








// https://github.com/Khamidov-online/v1.git

"# v1" 
