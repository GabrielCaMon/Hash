var readline = require('readline'),
    menu;
let id = 0;
let name = '';
let height = 0;
let size = 0;

//Classe do Usuário
class User {
    constructor(id, name, height) {
        this.id = id;
        this.name = name;
        this.height = height;
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
            id = parseInt(hashPosition(this.name).toString() + array["user"][hashPosition(this.name)].length.toString());
            let randomUser = new User(id,this.name,randomAltura);
            addUser(randomUser);

            return randomUser.id +"  "+randomUser.name+" "+randomUser.height;
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

const addUser = function (us) {
    array["user"][hashPosition(us.name)].push(us);

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



function showTable() {

    process.stdout.write('\033c');

    console.log('Digite a quantidade de arrays que você quer na memória \n\n');

 
    if(menu) menu.close();
    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    menu.question('', function(input) {
        size = parseInt(input.trim());
        tablesize(size);
        showMain();

    });
}


// Main
function showMain() {
    // Clear screen
    process.stdout.write('\033c');

    // Log the menu
    console.log(
        'Main menu\n\n' +
        '1 = Adicione uma Pessoa\n' +
        '2 = Gere uma nova pessoa aleatóriamente\n' +
        '3 = Busque uma Pessoa\n' +
        '4 = Mostre os Arrays\n' +
        '5 = Sair'
        );

    // Check if there is already a menu active. If true, close it.
    if(menu) menu.close();

    //Creates a readline Interface instance
    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Ask question
    menu.question('A onde você quer ir? ', function(input) {
        switch(input) {
            case '1': showName(); break;
            case '2': showGenerator(); break;
            case '3': showBusca(); break;
            case '4': showArray(); break;
            case '5': process.exit(); break;
            default: showMain() /* show menu again if input does not match */;
        }
    });
}


function showName() {
    process.stdout.write('\033c');
    console.log('User\n\n');
    if(menu) menu.close();

    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    menu.question('Adicione o Nome? ', function(input) {
        if(!input.trim()){
            showName();
        }else{
            name=input.trim(); showHeight();
        }  
    });
}
function showHeight() {
    process.stdout.write('\033c');
    console.log('User\n\n' );

    if(menu) menu.close();

    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    menu.question('Adicione a Altura ', function(input) {
        if(!input.trim()){
            showHeight();
        }else{
            id = parseInt(hashPosition(name).toString() + array["user"][hashPosition(name)].length.toString());
           
            height= Number(input.trim());
            let user = new User(id,name,height);
            addUser(user);
            showMain();
           
        }
    });
}

function showBusca() {
    process.stdout.write('\033c');
    console.log('Busca\n\n' );

    if(menu) menu.close();

    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    menu.question('Adicione o Nome que você quer buscar ', function(input) {
        if(!input.trim()){
            showBusca();
        }else{
            menu.question(`${search(input.trim())}`, function(input){
               showMain();
            })
            
        }
    });
}
function showGenerator() {
    process.stdout.write('\033c');
    console.log('Busca\n\n' );

    if(menu) menu.close();

    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let max=0;
    
    menu.question(`Quantas pessoas você quer gerar?`, function(input) {
       max=input;
       for (let i = 0;i<max;i++){
        let generatorUser = new GerarUser();
        console.log(generatorUser.gerador()+"\n")
       }
            menu.question('', function(input){
               showMain();
            })
            
        
    });

}
function showArray() {
    process.stdout.write('\033c');
    console.log(array['user']);
    if(menu) menu.close();

    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    menu.question(' ', function(input) {
        showMain();
    });
}


showTable();


