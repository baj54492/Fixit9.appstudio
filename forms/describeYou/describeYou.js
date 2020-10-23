rdbPerson.onclick=function(){ 
  lblResponse.value=`I would agree that you are a ${$("input[name=rdbPerson]:checked").prop("value")} person too!`
}
btnSubmit2.onclick=function(){
  ChangeForm(favExercises)
}
