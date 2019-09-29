class List{

    // Metodo executado toda vez que a classe for instanciada.
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data)
    }

}

class TodoList extends List {

    constructor(){
        // Chamando o construtor da classe pai (List) no construtor da classe filha. 
        super();
        this.usuario = 'Matheus';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }

}
class Matematica {
    static soma(a, b){
        return a + b;
    }
}

var MinhaList = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaList.add('Novo todo');
}

MinhaList.mostraUsuario();

console.log('Valor de 4 + 6 = '+Matematica.soma(4,6));