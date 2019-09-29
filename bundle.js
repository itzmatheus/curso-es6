"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  // Metodo executado toda vez que a classe for instanciada.
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    // Chamando o construtor da classe pai (List) no construtor da classe filha. 
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Matheus';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

var MinhaList = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaList.add('Novo todo');
};

MinhaList.mostraUsuario();
console.log('Valor de 4 + 6 = ' + Matematica.soma(4, 6));
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
var sum = arr.reduce(function (total, next) {
  return total + next;
}); // tatal inicialmente será 0 e o next será o primeiro elemento da lista;

console.log('total: ' + sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log('filtro: ' + filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log('find: ' + find);
var newArray = arr.map(function (item) {
  return item * 2;
});
console.log(newArray);

var teste = function teste() {
  return [1, 2, 3];
};

console.log(teste());

var teste2 = function teste2() {
  return {
    nome: 'matheus'
  };
};

console.log(teste2());
var usuario = {
  nome: 'Matheus Leite',
  idade: 20,
  disciplinas: {
    titulo: 'Soft Basico',
    professor: 'Jadilson'
  }
};
var _usuario = usuario,
    nome = _usuario.nome,
    idade = _usuario.idade,
    titulo = _usuario.disciplinas.titulo;
console.log('Nome: ' + nome + ' Idade: ' + idade + ' - ' + titulo); //REST

var usuario = {
  nome: 'Matheus',
  empresa: 'Nenhuma',
  idade: 19
};

var _usuario2 = usuario,
    nome = _usuario2.nome,
    resto = _objectWithoutProperties(_usuario2, ["nome"]);

console.log(nome);
console.log(resto);
var a = arr[0],
    b = arr[1],
    c = arr[2],
    novoArray = arr.slice(3);
console.log(a);
console.log(b);
console.log(c);
console.log(novoArray);

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (todos, item) {
    return todos + item;
  });
};

console.log(soma(1, 2, 3, 5)); //SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var newArray12 = [].concat(arr1, arr2);
console.log(newArray12);

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Leite'
});

console.log(usuario2); //Object Short Syntax

var nome_usuario = 'José';
var idade_usuario = 20;
var novoUsuario = {
  nome_usuario: nome_usuario,
  idade_usuario: idade_usuario,
  'Curso': 'Ciência da Computação'
};
console.log(novoUsuario);
