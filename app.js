var app = angular.module("listaTelefonica", ["ngMessages"]);
app.controller("listaTelefonicaCtrl", function($scope){
  $scope.app = "Lista Telefonica";
  $scope.contatos = [
    {nome: "Pedro", telefone: "9999-9999", data: new Date(), cor:'blue', operadora: {nome: "Oi", codigo: 14}},
    {nome: "Eduardo", telefone: "9999-9999", data: new Date(), cor:'red', operadora: {nome: "Claro", codigo: 17}},
    {nome: "Alex", telefone: "9999-9999", data: new Date(), cor:'gray', operadora: {nome: "Tim", codigo: 16}},
    {nome: "Artur", telefone: "9999-9999", data: new Date(), cor:'blue', operadora: {nome: "Tim", codigo: 16}}
  ];

  $scope.operadoras = [
    {nome: "Oi", codigo: 14, preco: 2},
    {nome: "Vivo", codigo: 15, preco: 3},
    {nome: "Tim", codigo: 16, preco: 1},
    {nome: "Claro", codigo: 17, preco: 4}
  ];

  $scope.adicionarContato = function(contato){
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
    $scope.contatoForm.$setPristine();
  };

  $scope.apagarSelecionado = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if (!contato.selecionado) return contato;
    });

  };

  $scope.ordenarPor = (campo) => {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
  };

  $scope.isContatosSelecionado = function(contatos){
    return contatos.some(function(contato){
      return contato.selecionado;
    });
  };

  $scope.classe = "selecionado";
});