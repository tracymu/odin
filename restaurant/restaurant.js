function home(){
    $('#tab-content')
      .append('<h1>This was supposed to be about restaurants</h1>')
      .append('<img src="http://imgs.abduzeedo.com/files/articles/baby-animals/Baby-Animals-011.jpg" />')
      .append("<p>I think it should be about cute baby animals instead.</p>")
}

function otters(){
    $('#tab-content')
      .append('<h1>Otters are pretty cute</h1>')
      .append('<h2>Especially baby ones</h2>')
      .append('<img src="http://img.huffingtonpost.com/asset/2000_1000/5751a756130000fb0738383d.jpeg?cache=2ainbbh601" />');
}

function raccoons(){
    $('#tab-content')
      .append('<h1>Racoons are also adorable</h1>')
      .append('<h2>Even if people call them trash pandas</h2>')
      .append('<img src="http://www.cutestpaw.com/wp-content/uploads/2014/11/baby-raccoon.jpg" />');
}

$('.tabs li').click(function(){
  var tabName = $(this).text().trim().toLowerCase();

  $('#tab-content').empty();
  window[tabName]();

  $('.active').removeClass('active');
  $(this).addClass('active');
});

home();