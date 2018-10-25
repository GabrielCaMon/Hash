class Table{
constructor(){
    array= new Array();
    array["user"] = [];
}

tablesize (size) {
    let i = 0;
    while (i < size) {
        array["user"][i] = new Array();
        i++;
    }
}
}
let array = new Array();



class User {
    constructor(id, name, height) {
        this.id = id;
        this.name = name;
        this.height = height;
    }




 ord (string) {
    let sum = 0;
    let i = 0;
    while (i < string.length) {
        sum = sum + string.charCodeAt(i);
        i++;
    }

    return sum;

}
hashPosition (name) {
    return ord(name) % size;
}

addUser(us) {
    array["user"][hashPosition(us.name)].push(us);

}

search (busca) {
    let element = array["user"][hashPosition(busca)];
    for (let i = 0; i <= element.length; i++) {

        if (element[i] != null) {
            if (element[i].name === busca) {
                return busca + " está na coluna de indice " + hashPosition(busca) + " e linha de indice " + i + "\n" + "id " + "     nome      " + "    altura" + "\n" + element[i].id + "   " + element[i].name + "    " + element[i].height;
            }
        }
    }
    return "não deu certo"
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
        let random = Math.floor(Math.random() * (18 - 3) + 3);
        let posi = Math.floor(Math.random() * 2);
        if (posi == 0) {
            for (let i = random; i >= 0; i--) {
                if (i % 2 == 0) {
                    posi = Math.floor(Math.random() * (this.consoante.length));
                    this.name += this.consoante[posi];
                } else {
                    posi = Math.floor(Math.random() * (this.vogal.length) );
                    this.name += this.vogal[posi];
                }
            }
        } else {
            for (let i = random; i >= 0; i--) {
                if (i % 2 == 0) {
                    posi = Math.floor(Math.random() * (this.vogal.length));
                    this.name += this.vogal[posi];
                    
                } else {
                    posi = Math.floor(Math.random() * (this.consoante.length));
                    this.name += this.consoante[posi];
                }
            }
        }
        return this.name;
    }


}




let user1 = new User(1, "Gabriel", 3);

let size = 5;
tablesize(size);

console.log(user1.search("Gabriel"));
console.log(user1.addUser(user1));


let wordRam = new GerarUser();


//console.log(search("Gabriel"));
//console.log(wordRam.gerador());