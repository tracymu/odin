      var operators = ['add', 'subtract', 'multiply', 'divide']
      var resolvers = ['clear', 'equals']

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


      $(document).click(function(event) {
        if(!resolvers.includes(event.target.id)) {
          entries.push(event.target.id)
        }
      });

      $(function(){
        $("#clear").click(function() {
          entries = [];
        })

        $("#equals").click(function() {
          var calcs = []
          for(i = 0; i < entries.length; i++) {
            if(!operators.includes(entries[i])) {
              // something about adding the numbers until it gets to an operator
              // but adding it to what?
            }
          }


          var answer = window[entries[1]](Number(entries[0]), Number(entries[2]));
          console.log(answer);
          entries = [];
        })
      })
