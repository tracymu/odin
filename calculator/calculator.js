      var operators = {
        'add' : '+', 
        'subtract' : '-', 
        'multiply' : '*', 
        'divide' : '/' }

      var resolvers = {
        'clear' : 'C', 
        'equals': '=' }


      add = function(a, b) {
        return a + b;
      }

      multiply = function(a, b) {
        return a * b;
      }

      divide = function(a, b) {
        return a / b;
      }

      subtract = function(a, b) {
        return a - b;
      }

      var entries = []
      var number_entered = []

      $(document).click(function(event) {
        if(!Object.keys(resolvers).includes(event.target.id) && !Object.keys(operators).includes(event.target.id)) {
          number_entered.push(event.target.id)
          $("#display").text(number_entered.join(""))
        }
        else if(Object.keys(operators).includes(event.target.id)) {
          entries.push(number_entered);
          entries.push(event.target.id);
          number_entered = []
          $("#display").text(operators[event.target.id])
        }
      });

      $(function(){
        $("#clear").click(function() {
          number_entered = [];
          entries = [];
          $("#display").empty();
        })

        $("#equals").click(function() {
          if(entries.length > 2) {
            var answer = window[entries[1]](Number(entries[0]), Number(entries[2]))
            console.log(answer)
            $("#display").text(answer)
            number_entered = [];
            entries = [];
          }
        })
      })
