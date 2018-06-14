

const req = new XMLHttpRequest();
      req.open('GET', 'http://localhost/Exo/JS/Json/Exos-Javascript-Quiz/argent.json',false);
      req.onreadystatechange=myFonction;
      req.send(null);

    // FONCTION POUR RECUPERER LA BONNE REPONSE
      function retourner(){
        var doc = JSON.parse(req.responseText);
        return doc.quiz.q1.reponse;
      }
      var z=retourner();
      console.log(z);

      function myFonction(){
      };
    // AFFICHAGE QUESTIONS FIN DE VIDEO

  var affichquest = document.getElementsByClassName("video1")[0].addEventListener("ended", (affiche) => {
    var p = document.createElement('p');
    var ligne =  document.createElement('hr');
        ligne.style.width = "80%";
        document.body.appendChild(ligne);
        p.setAttribute("class", "vivify fadeIn para1");
        p.innerHTML = "Lorsqu'un pancake tombe dans la neige avant le 31 décembre, on dit qu'il est:";
        p.style.color = "white";
        document.body.appendChild(p);

    // CREATION DIV BOUTONS REPONSES

        var div = document.createElement('div');
            div.setAttribute("class", "box_reponse q1");
            document.body.appendChild(div);


    // CREATION BOUTONS REPONSES
        myFonction();
          if (req.readyState == 4) {
            var doc = JSON.parse(req.responseText);
        for (i=0 ; i<doc.quiz.q1.option.length; i++){


          var bouton = document.createElement('input');
              bouton.setAttribute('class', 'vivify fadeIn');
              bouton.setAttribute('type','button');
              bouton.setAttribute('value',doc.quiz.q1.option[i]);
              bouton.setAttribute('id','bouton'+[i]);
              div.appendChild(bouton);

          console.log(doc);
        }}
        // COMPARER VALUE ET REPONSE

        for (var i = 0; i < 4; i++) {
              var test = document.getElementsByTagName('input')[i];
              test.addEventListener('click', function() {

              var confirmRep = confirm("C'est votre ultime bafouille?");

              if ( this.value == z ){

                  this.style.backgroundColor='green';
                  this.style.color='white';
                  this.style.animationDelay = "3.5s";



            }else{

                  this.style.backgroundColor='orange';
                  if (confirmRep == true){
                  this.style.color='black';
                  var x = document.getElementsByTagName('input')[2].style.background = "green";
                          document.getElementsByTagName('input')[2].style.transition = "2s";
}

              else {
                this.style.backgroundColor = "black";
              }
}
          })};



  });
