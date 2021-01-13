angular.module("listaTelefonica").directive("uiAlert", ()=>{
  return {
    templateUrl:"view/alert.html",
    replace:true,
    restrict:"AE",
    scope:{
      title:"@",
      message:"="
    }, 
    transclude:true,

  };
});