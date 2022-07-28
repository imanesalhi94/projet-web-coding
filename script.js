function text(){
    if(document.form1.nom.value==""||document.form1.prenom.value==""||document.form1.email.value==""||
    document.form1.pass.value==""||document.form1.pass2.value=="" )
    {
          alert("remplir les champs vide");
    }
    if(document.form1.pass.value!=document.form1.pass2.value)
    {
        alert("mot de passe non identique");
    }
    if(document.form1.flexRadioDefault1.checked || document.form1.flexRadioDefault2.checked)
    {
        alert("good")
    }
    else{
        alert("choisiser votre sex")
    }
    }
    


function text2(){
if(document.form1.t1.checked==true)
{
   document.form1.sub.disabled=false;
}
else{
  document.form1.sub.disabled=true;
}
}