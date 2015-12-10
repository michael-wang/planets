/* Planet index */
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


function show_planets() {
  var RANK = RANKS[metric_index];

  for (rank_index = 0; rank_index < RANK.length; rank_index++) {
    var planet_index = RANK[rank_index];

    var img = $('#rank-' + rank_index + ' img');
    img.attr('src', IMG[planet_index]);

    var h4 = $('#rank-' + rank_index + ' h4');
    h4.html(NAME[planet_index]);
  }
}

/* Metric index */
const MASS          = 0;
const DIAMETER      = 1;
const GRAVITY       = 2;
const LEN_OF_DAY    = 3;
const DIST_FROM_SUN = 4;
const ORB_PERIOD    = 5;
const NUM_OF_MOON   = 6;

var RANK_BY_MASS     = [JUPITER, SATURN, NEPTUNE, URANUS, EARTH, VENUS, MARS, MERCURY, PLUTO];
var RANK_BY_DIAMETER = [JUPITER, SATURN, URANUS, NEPTUNE, EARTH, VENUS, MARS, MERCURY, PLUTO];
var RANK_BY_GRAVITY  = [JUPITER, NEPTUNE, EARTH, SATURN, VENUS, URANUS, MERCURY, MARS, PLUTO];
var RANK_BY_LENOFDAY = [MERCURY, VENUS, PLUTO, MARS, EARTH, URANUS, NEPTUNE, SATURN, JUPITER];
var RANK_BY_DISTSUN  = [MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE, PLUTO];
var RANK_BY_ORBPERIOD= [PLUTO, NEPTUNE, URANUS, SATURN, JUPITER, MARS, EARTH, VENUS, MERCURY];
var RANK_BY_NUMMOON  = [JUPITER, SATURN, URANUS, NEPTUNE, PLUTO, MARS, EARTH, MERCURY, VENUS];

var RANKS = []
RANKS[MASS]          = RANK_BY_MASS;
RANKS[DIAMETER]      = RANK_BY_DIAMETER;
RANKS[GRAVITY]       = RANK_BY_GRAVITY;
RANKS[LEN_OF_DAY]    = RANK_BY_LENOFDAY;
RANKS[DIST_FROM_SUN] = RANK_BY_DISTSUN;
RANKS[ORB_PERIOD]    = RANK_BY_ORBPERIOD;
RANKS[NUM_OF_MOON]   = RANK_BY_NUMMOON;

var metric_index = DIST_FROM_SUN;

function select_metric() {
  $('[id^=metric-]').removeClass('active');
  $(this).addClass('active');
  metric_index = parseInt($(this).attr('id').slice(-1));
  console.log('metric_index: ', metric_index);

  show_planets();
}

function main() {
  $('[id^=metric-]').click(select_metric);

  show_planets();
}

$(document).ready(main);