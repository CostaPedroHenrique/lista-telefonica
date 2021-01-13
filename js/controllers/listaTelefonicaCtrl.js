app.controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI){
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];

  var carregarContatos = function(){
    contatosAPI.getContatos().then(function(data, status){
      $scope.contatos = data.data;
    }).catch((data, status)=>{
      $scope.error = "Não foi possível carregar os contatos!"
    });
  };
  
  var carregarOperadoras = function(){
    operadorasAPI.getOperadoras().then((data, status)=>{
      $scope.operadoras = data.data;
    });
  };
  
  $scope.adicionarContato = function(contato){
    contato.data = new Date();
    contatosAPI.saveContato(contato).then((data, status)=>{
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
    
  }; 

  $scope.apagarSelecionado = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if (contato.selecionado){
        contatosAPI.deleteContato(contato).then((data, status)=>{
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