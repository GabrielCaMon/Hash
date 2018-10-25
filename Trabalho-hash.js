

class User {
    constructor(id, name, height) {
        this.id = id;
        this.name = name;
        this.height = height;
    }
    addUser(us) {
        console.log(this.name)
        console.log(hashPosition(this.name))
        
        array["user"][hashPosition(us.name)].push(us);
    
    }
}
class GerarUser {
    constructor() {
        this.name = ""
        this.height = 0
        this.consoante = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
        this.vogal = ["a", "e", "i", "o", "u"]
    }
    gerador() {
    let randomName = Math.floor(Math.random() * (18 - 3) + 3);
        let posi = Math.floor(Math.random() * 2);
        if (posi == 0) {
            for (let i = randomName; i >= 0; i--) {
                if (i % 2 == 0) {
                    posi = Math.floor(Math.random() * (this.consoante.length));
                    this.name += this.consoante[posi];
                } else {
                    posi = Math.floor(Math.random() * (this.vogal.length) );
                    this.name += this.vogal[posi];
                }
            }
        } else {
            for (let i = randomName; i >= 0; i--) {
                if (i % 2 == 0) {
                    posi = Math.floor(Math.random() * (this.vogal.length));
                    this.name += this.vogal[posi];
                    
                } else {
                    posi = Math.floor(Math.random() * (this.consoante.length));
                    this.name += this.consoante[posi];
                }
            }
        }
        let randomAltura = Math.random() * 4;
        let randomUser = new User(1,this.name,randomAltura);
        return randomUser;
    }

}

let array = new Array();
array["user"] = [];


const tablesize = function (size) {
    let i = 0;
    while (i < size) {
        array["user"][i] = new Array();
        i++;
    }

}

const ord = function (string) {
    let sum = 0;
    let i = 0;
    while (i < string.length) {
        sum = sum + string.charCodeAt(i);
        i++;
    }

    return sum;

}
const hashPosition = function (name) {
    return ord(name) % size;
}



const search = function (busca) {
    let element = array["user"][hashPosition(busca)];
    for (let i = 0; i <= element.length; i++) {

        if (element[i] != null) {
            if (element[i].name === busca) {
                return busca + " está na coluna de indice " + hashPosition(busca) + " e linha de indice " + i + "\n" + "id " + "     nome      " + "    altura" + "\n" + element[i].id + "   " + element[i].name + "    " + element[i].height;
            }
        }
    }
    return "não foi enncontrado"
}

let size=5;
tablesize()
let user1 = new User(1, "Gabriel", 1.2);
user1.addUser(user1);
let user2 = new User(2, "João", 2);
//let user3 = new User(3, "Ferreira", );




//addUser(user1);
//addUser(user2);
//addUser(user3);



let wordRam = new GerarUser();


///console.log(search("João"));
//addUser(wordRam.gerador());
//console.log(wordRam);
console.log(array["user"][4]);