var app = angular.module("listaTelefonica", []);
app.controller("listaTelefonicaCtrl", function($scope){
  $scope.app = "Lista Telefonica";
  $scope.contatos = [
    {nome: "Pedro", telefone: "9999-9999", cor:'blue', operadora: {nome: "Oi", codigo: 14}},
    {nome: "Eduardo", telefone: "9999-9999", cor:'red', operadora: {nome: "Claro", codigo: 17}},
    {nome: "Alex", telefone: "9999-9999", cor:'gray', operadora: {nome: "Tim", codigo: 16}},
    {nome: "Artur", telefone: "9999-9999", cor:'blue', operadora: {nome: "Tim", codigo: 16}}
  ];

  $scope.operadoras = [
    {nome: "Oi", codigo: 14},
    {nome: "Vivo", codigo: 15},
    {nome: "Tim", codigo: 16},
    {nome: "Claro", codigo: 17}
  ];

  $scope.adicionarContato = function(contato){
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
  };

  $scope.apagarSelecionado = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if (!contato.selecionado) return contato;
    });

  };

  $scope.isContatosSelecionado = function(contatos){
    return contatos.some(function(contato){
      return contato.selecionado;
    });
  };

  $scope.classe = "selecionado";
});