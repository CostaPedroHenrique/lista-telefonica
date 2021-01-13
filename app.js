var app = angular.module("listaTelefonica", ["ngMessages"]);

app.controller("listaTelefonicaCtrl", function($scope, $http){
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];

  var carregarContatos = function(){
    $http.get("http://localhost:3333/contatos").then(function(data, status){
      $scope.contatos = data.data;
    });
  };
  
  var carregarOperadoras = function(){
    $http.get("http://localhost:3333/operadoras").then(function(data, status){
      console.log(data)
      $scope.operadoras = data.data;
    });
  };
  
  $scope.adicionarContato = function(contato){
    contato.data = new Date();
    $http.post("http://localhost:3333/contatos", contato).then((data, status)=>{
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
    
  }; 

  $scope.apagarSelecionado = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if (contato.selecionado){
        $http.delete("http://localhost:3333/contatos", contato).then((data, status)=>{
        carregarContatos();
    });
      }
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

  carregarContatos();
  carregarOperadoras();
});