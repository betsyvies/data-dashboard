/* Iniciamos extrayendo los datos de las sedes */
window.addEventListener('load', function() {
  var containerSedes = document.getElementById('sedes');
  containerSedes.addEventListener('click', function() {
    var sedes = document.getElementById('container-sedes');
    
    /* Creando la lista de las sedes */
    for (var i = 0; i < Object.keys(data).length; i++) {
      var containerList = document.createElement('ul');
      containerList.className = 'container-list';
      var list = document.createElement('li');
      list.className = 'list';
      var text = document.createTextNode(Object.keys(data)[i]);
    
      list.appendChild(text);
      containerList.appendChild(list);
      sedes.appendChild(containerList);
    
      /* Creando la lista de las generaciones */
      var containerListGenerations = document.createElement('ul');
      containerListGenerations.className = 'container-generations hide';
    
      for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
        var listGenerations = document.createElement('li');
        listGenerations.className = 'generations';
        var textGenerations = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[a]);
            
        listGenerations.appendChild(textGenerations);
        containerListGenerations.appendChild(listGenerations);
        list.appendChild(containerListGenerations);
      
        /* Variables del total de alumnas, total de desercion y activas */
        var totalCurrent = 0;
        var totalDesertion = 0;
        var totalAprobSprint = 0;
        var totalAprob = 0; 
        var totalNps = 0;

        // console.log(Object.values(data)); 
        for (var b = 0; b < Object.values((Object.values(Object.values(data)[i]))[a])[0].length; b++) {
          // console.log(Object.values(Object.values(Object.values((Object.values(Object.values(data)[0]))[0])[0][3])[3][0])[0]);
          // debugger;
          for (var c = 0; c < Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3].length; c++) {
            var sprint = document.getElementById('sprint');
            text.textContent = '';
            // var containerListSprint = document.createElement('option');
            // containerListSprint.className = 'container-option';
            var text = document.createTextNode(Object.keys(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3] + '-' + Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[0]);
              
            if (Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[2]) {
              totalCurrent = totalCurrent + 1;
              var tech = Object.values(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[1])[0];
      
              var hse = Object.values(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[1])[1];
   
              var sumTechHse = tech + hse;

              // console.log(totalSum);

              if (sumTechHse >= 2100) {
                totalAprobSprint = totalAprobSprint + 1;
                if (totalAprobSprint % Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3].length === 0) {
                  totalAprob = totalAprob + 1;
                }
              }
              containerListGenerations.appendChild(text);
            } else {
              totalDesertion = totalDesertion + 1;
            }                         
          } 
        } 

        for (var b = 0; b < Object.values((Object.values(Object.values(data)[i]))[a])[1].length; b++) {
          // console.log(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[1][b])[1]));
          var promoters = Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[1][b])[1])[0];
          var passive = Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[1][b])[1])[1];
          var detractors = Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[1][b])[1])[2];

          var totalNps = promoters - detractors;
        }
        /* Total y porcentajes  */
        total = (Object.values((Object.values(Object.values(data)[i]))[a])[0].length);
                           
        porcentageDesertion = parseInt((totalDesertion) * 100 / total);

        porcentageRelation = parseInt((totalAprob) * 100 / totalCurrent);

        /* Contenedores ocultos  */
        var numberStudent = document.createElement('input');
        numberStudent.className = 'number-student hide';
        numberStudent.value = totalCurrent;
                
        var numberApproved = document.createElement('input');
        numberApproved.className = 'number-approved hide';
        numberApproved.value = totalAprob;  
                                
        var numberDesertion = document.createElement('input');
        numberDesertion.className = 'number-desertion hide';
        numberDesertion.value = porcentageDesertion + '%'; 

        var numberRelation = document.createElement('input');
        numberRelation.className = 'number-relation hide';
        numberRelation.value = porcentageRelation + '%';
                
        var numberNps = document.createElement('input');
        numberNps.className = 'number-nps hide';
        numberNps.value = totalNps + '%';  
                                
        var numberPromoters = document.createElement('input');
        numberPromoters.className = 'number-promoters hide';
        numberPromoters.value = promoters + '%'; 

        var numberPassive = document.createElement('input');
        numberPassive.className = 'number-passive hide';
        numberPassive.value = passive + '%';
                
        var numberDetractors = document.createElement('input');
        numberDetractors.className = 'number-detractors hide';
        numberDetractors.value = detractors + '%';  
                                
        // var textOption = document.createElement('option');
        // textOption.className = 'text-option';
        // textOption.value = text; 

        // var numberStudent = document.createElement('input');
        // numberStudent.className = 'number-student';
        // numberStudent.value = total;
                
        // var numberApproved = document.createElement('input');
        // numberApproved.className = 'number-approved';
        // numberApproved.value = totalAprob;  
                                
        // var numberDesertion = document.createElement('input');
        // numberDesertion.className = 'number-desertion';
        // numberDesertion.value = PorcentajeDesertion + '%'; 

        // var numberDesertion = document.createElement('input');
        // numberDesertion.className = 'number-desertion';
        // numberDesertion.value = PorcentajeDesertion + '%';
                
        containerListGenerations.appendChild(numberStudent);

        containerListGenerations.appendChild(numberDesertion);

        containerListGenerations.appendChild(numberApproved);
                
        containerListGenerations.appendChild(numberRelation);

        containerListGenerations.appendChild(numberNps);

        containerListGenerations.appendChild(numberPromoters);
                
        containerListGenerations.appendChild(numberPassive);

        containerListGenerations.appendChild(numberDetractors);

        // containerListGenerations.appendChild(text);

        // containerListGenerations.appendChild(numberApproved);
                        
        // containerListGenerations.appendChild(numberStudent);
        
        // containerListGenerations.appendChild(numberDesertion);
        
        // containerListGenerations.appendChild(numberApproved);

        // containerListGenerations.appendChild(numberApproved);
                
        totalDesertion = 0;
        totalAprobSprint = 0; 
        totalNps = 0;
      }
    }
    /* Desglose del las sedes en el menu */
    if (sedes.classList.contains('hide')) {
      sedes.classList.remove('hide');
      sedes.classList.add('show');
    } else {
      sedes.textContent = '';       
      sedes.classList.remove('show');
      sedes.classList.add('hide');
    }
    /* Desglose del las generaciones en el menu */
    var list = document.getElementsByClassName('list');
    
    for (var i = 0; i < list.length; i++) {
      list[i].addEventListener('click', function(event) {
        var containerGenerations = this.getElementsByClassName('container-generations')[0];
   
        if (containerGenerations.classList.contains('hide')) {
          containerGenerations.classList.remove('hide');
          containerGenerations.classList.add('show');
        } else {  
          containerGenerations.classList.remove('show');
          containerGenerations.classList.add('hide');
        }
      });
    } 
    /* Contenedores visibles  */
    var generations = document.getElementsByClassName('generations');
  
    for (var a = 0; a < generations.length; a++) {
      generations[a].addEventListener('click', function() {
        var secondContainer = document.getElementById('second-container');
        var containerParagraph = document.getElementsByClassName('container-paragraph');
        var numberStudent = document.getElementsByClassName('number-student');
        var numberApproved = document.getElementsByClassName('number-approved');
        var numberDesertion = document.getElementsByClassName('number-desertion');
        var numberRelation = document.getElementsByClassName('number-relation');
        var numberNps = document.getElementsByClassName('number-nps');
        var numberPromoters = document.getElementsByClassName('number-promoters');
        var numberPassive = document.getElementsByClassName('number-passive');
        var numberDetractors = document.getElementsByClassName('number-detractors');
                        
        for (var a = 0; a < generations.length; a++) {
          if (event.target === generations[a]) {
            console.log(event.target);
            var containerStudent = document.createElement('p');
            containerStudent.className = 'container';
            containerStudent.textContent = numberStudent[a].value;  
    
            var containerApproved = document.createElement('p');
            containerApproved.className = 'container';
            containerApproved.textContent = numberApproved[a].value;
                    
            var containerDesertion = document.createElement('p');
            containerDesertion.className = 'container';
            containerDesertion.textContent = numberDesertion[a].value;

            var containerRelation = document.createElement('p');
            containerRelation.className = 'container';
            containerRelation.textContent = numberRelation[a].value;

            var containerNps = document.createElement('p');
            containerNps.className = 'container';
            containerNps.textContent = numberNps[a].value;
            
            var containerPorcentage = document.createElement('div');
            containerPorcentage.className = 'container-porcentage';
            var containerPromoters = document.createElement('p');
            var containerPassive = document.createElement('p');
            var containerDetractors = document.createElement('p');
            containerPromoters.textContent = numberPromoters[a].value;
            containerPassive.textContent = numberPassive[a].value;
            containerDetractors.textContent = numberDetractors[a].value; 
            
            containerPorcentage.appendChild(containerPromoters);
            containerPorcentage.appendChild(containerPassive);
            containerPorcentage.appendChild(containerDetractors);

            containerParagraph[0].appendChild(containerStudent);
            containerParagraph[1].appendChild(containerDesertion);  
            containerParagraph[2].appendChild(containerApproved);
            containerParagraph[3].appendChild(containerRelation);
            containerParagraph[4].appendChild(containerNps);
            containerParagraph[5].appendChild(containerPorcentage);
          }
        }
      });
    }    
  });
});


// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Sedes', 'Total de alumnas'],
//     ['Arequipa', 30],
//     ['Santiago de Chile', 95],
//     ['Ciudad de México', 70],
//     ['Lima', 66],
//   ]);

//   var options = {
//     title: 'Total de alumnas por sedes'
//   };

//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

//   chart.draw(data, options);

//   google.charts.load('current', {packages:['corechart']});
//   google.charts.setOnLoadCallback(drawChart);
//   function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//       ['Desercion', 'Total y porcentaje'],
//       ['Arequipa', 51],
//       ['Santiago de Chile', 27],
//       ['Ciudad de México', 18],
//       ['Lima', 59],
//     ]);

//     var options = {
//       title: 'Total de alumnas que desertaron por sede',
//       pieHole: 0.4,
//     };

//     var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
//     chart.draw(data, options);
//   };
// };
