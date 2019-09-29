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

const arr = [1,2,3,4,5,6];
console.log(arr);
const sum = arr.reduce(function(total, next){
    return total + next;
});
// tatal inicialmente será 0 e o next será o primeiro elemento da lista;
console.log('total: ' + sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log('filtro: ' + filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log('find: ' + find);
const newArray = arr.map(item => item * 2 );
console.log(newArray);

const teste = () => [1,2,3];
console.log(teste());
const teste2 = () => ({ nome: 'matheus'});
console.log(teste2());

const usuario = {
    nome: 'Matheus Leite',
    idade: 20,
    disciplinas:
        {
            titulo: 'Soft Basico',
            professor: 'Jadilson',
        },
}
const { nome, idade, disciplinas: {titulo} } = usuario;
console.log('Nome: ' + nome + ' Idade: ' + idade + ' - ' + titulo);