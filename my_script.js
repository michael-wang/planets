const MERCURY = 0;
const VENUS   = 1;
const EARTH   = 2;
const MARS    = 3;
const JUPITER = 4;
const SATURN  = 5;
const URANUS  = 6;
const NEPTUNE = 7;
const PLUTO   = 8;

var NAME = [];
NAME[MERCURY] = 'Mercury';
NAME[VENUS]   = 'Venus';
NAME[EARTH]   = 'Earth';
NAME[MARS]    = 'Mars';
NAME[JUPITER] = 'Jupiter';
NAME[SATURN]  = 'Saturn';
NAME[URANUS]  = 'Uranus';
NAME[NEPTUNE] = 'Neptune';
NAME[PLUTO]   = 'Pluto';

var IMG = [];
IMG[MERCURY] = 'images/mercury.jpg';
IMG[VENUS]   = 'images/venus.jpg';
IMG[EARTH]   = 'images/earth.jpg';
IMG[MARS]    = 'images/mars.jpg';
IMG[JUPITER] = 'images/jupiter.jpg';
IMG[SATURN]  = 'images/saturn.jpg';
IMG[URANUS]  = 'images/uranus.jpg';
IMG[NEPTUNE] = 'images/neptune.jpg';
IMG[PLUTO]   = 'images/pluto.jpg';

var RANK = [MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE, PLUTO];

function show_planets() {
  for (rank_index = 0; rank_index < RANK.length; rank_index++) {
    var planet_index = RANK[rank_index];

    var img = $('#rank-' + rank_index + ' img');
    img.attr('src', IMG[planet_index]);

    var h4 = $('#rank-' + rank_index + ' h4');
    h4.html(NAME[planet_index]);
  }
}

var metric_index = 4;

function select_metric() {
  $('[id^=metric]').removeClass('active');
  $(this).addClass('active');
  metric_index = parseInt($(this).attr('id').slice(-1));
  console.log('metric_index: ', metric_index);
}

function main() {
  $('[id^=metric]').click(select_metric);

  show_planets();
}

$(document).ready(main);