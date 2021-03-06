var grid = {
  render : function() {
    var table = $('<table></table>');

    for(i=0; i<40; i++){
      var row = $('<tr></tr>');
      for(j=0; j< 40; j++){
        var col = $('<td class="cell" id ="' + i + '-' + j + '"></td>');
        row.append(col);
      };
      table.append(row);
    };
    $('#grid').append(table);
  }
}

var snake = {
  start : function() {
    this.headPosition(20,20);
    this.direction = 'right'
  },
  headPosition : function(x,y) {
    var idName = "#" + x + "-" + y; 
    $(idName).addClass('snakeHead');
  },
  bodyPositions : [[20,20]],
  move : function() {
    
  }
}

var game = {
  start : function() {
    snake.start();
    setInterval(snake.move(), 500);
  }
}

$(document).ready(function(){
  grid.render();
  game.start();
  $(document).keydown(function(event){
    snake.direction = event.key.substring(5, event.key.length).toLowerCase();
    console.log(event.key.substring(5, event.key.length).toLowerCase())
  });
});


