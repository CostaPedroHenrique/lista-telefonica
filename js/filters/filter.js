angular.module("listaTelefonica").filter("name", function(){
  return function(input){
    var lista_nomes = input.split(' ');
    var lista_formatada = lista_nomes.map(function (nome){
      if(/(da|de)/.test(nome)) return nome;
      return nome[0].toUpperCase() + nome.substring(1).toLowerCase();
    });
    return lista_formatada.join(' ');
  };
});