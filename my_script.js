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


function show_planets(metric) {
  var header = "Rank by: " + METRIC_NAME[metric];
  $('h1#rank_header').html(header);

  var RANK = RANKS[metric];

  for (rank_index = 0; rank_index < RANK.length; rank_index++) {
    var planet_index = RANK[rank_index];

    var img = $('#rank-' + rank_index + ' img');
    img.attr('src', IMG[planet_index]);

    var h4 = $('#rank-' + rank_index + ' h4');
    h4.html(NAME[planet_index]);

    var span = $('#rank-' + rank_index + ' span');
    span.html(VALUES[metric][planet_index]);
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

var RANK_BY_MASS     = [PLUTO, MERCURY, MARS, VENUS, EARTH, URANUS, NEPTUNE, SATURN, JUPITER];
var RANK_BY_DIAMETER = [PLUTO, MERCURY, MARS, VENUS, EARTH, NEPTUNE, URANUS, SATURN, JUPITER];
var RANK_BY_GRAVITY  = [PLUTO, MARS, MERCURY, URANUS, VENUS, SATURN, EARTH, NEPTUNE, JUPITER];
var RANK_BY_LENOFDAY = [JUPITER, SATURN, NEPTUNE, URANUS, EARTH, MARS, PLUTO, VENUS, MERCURY];
var RANK_BY_DISTSUN  = [MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE, PLUTO];
var RANK_BY_ORBPERIOD= [MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE, PLUTO];
var RANK_BY_NUMMOON  = [MERCURY, VENUS, EARTH, MARS, PLUTO, NEPTUNE, URANUS, SATURN, JUPITER];

var RANKS = []
RANKS[MASS]          = RANK_BY_MASS;
RANKS[DIAMETER]      = RANK_BY_DIAMETER;
RANKS[GRAVITY]       = RANK_BY_GRAVITY;
RANKS[LEN_OF_DAY]    = RANK_BY_LENOFDAY;
RANKS[DIST_FROM_SUN] = RANK_BY_DISTSUN;
RANKS[ORB_PERIOD]    = RANK_BY_ORBPERIOD;
RANKS[NUM_OF_MOON]   = RANK_BY_NUMMOON;

var METRIC_NAME = [];
METRIC_NAME[MASS]          = "Mass (10^24 kg)";
METRIC_NAME[DIAMETER]      = "Diameter (km)";
METRIC_NAME[GRAVITY]       = "Gravity (m/s^2)";
METRIC_NAME[LEN_OF_DAY]    = "Length of Day (hours)";
METRIC_NAME[DIST_FROM_SUN] = "Distance from Sun (km)";
METRIC_NAME[ORB_PERIOD]    = "Orbital Period (days)";
METRIC_NAME[NUM_OF_MOON]   = "Number of Moons";

var VALUES = [];
var UNIT = [];

VALUES[MASS] = [];
VALUES[MASS][MERCURY] = '0.330';
VALUES[MASS][VENUS]   = '4.87';
VALUES[MASS][EARTH]   = '5.97';
VALUES[MASS][MARS]    = '0.642';
VALUES[MASS][JUPITER] = '1898';
VALUES[MASS][SATURN]  = '568';
VALUES[MASS][URANUS]  = '86.8';
VALUES[MASS][NEPTUNE] = '102';
VALUES[MASS][PLUTO]   = '0.0146';

VALUES[DIAMETER] = [];
VALUES[DIAMETER][MERCURY] = '4879';
VALUES[DIAMETER][VENUS]   = '12,104';
VALUES[DIAMETER][EARTH]   = '12,756';
VALUES[DIAMETER][MARS]    = '6792';
VALUES[DIAMETER][JUPITER] = '142,984';
VALUES[DIAMETER][SATURN]  = '120,536';
VALUES[DIAMETER][URANUS]  = '51,118';
VALUES[DIAMETER][NEPTUNE] = '49,528';
VALUES[DIAMETER][PLUTO]   = '2370';

VALUES[GRAVITY] = [];
VALUES[GRAVITY][MERCURY] = '3.7';
VALUES[GRAVITY][VENUS]   = '8.9';
VALUES[GRAVITY][EARTH]   = '9.8';
VALUES[GRAVITY][MARS]    = '3.7';
VALUES[GRAVITY][JUPITER] = '23.1';
VALUES[GRAVITY][SATURN]  = '9.0';
VALUES[GRAVITY][URANUS]  = '8.7';
VALUES[GRAVITY][NEPTUNE] = '11.0';
VALUES[GRAVITY][PLUTO]   = '0.7';

VALUES[LEN_OF_DAY] = [];
VALUES[LEN_OF_DAY][MERCURY] = '4222.6';
VALUES[LEN_OF_DAY][VENUS]   = '2802';
VALUES[LEN_OF_DAY][EARTH]   = '24.0';
VALUES[LEN_OF_DAY][MARS]    = '24.7';
VALUES[LEN_OF_DAY][JUPITER] = '9.9';
VALUES[LEN_OF_DAY][SATURN]  = '10.7';
VALUES[LEN_OF_DAY][URANUS]  = '17.2';
VALUES[LEN_OF_DAY][NEPTUNE] = '16.1';
VALUES[LEN_OF_DAY][PLUTO]   = '155.3';

VALUES[DIST_FROM_SUN] = [];
VALUES[DIST_FROM_SUN][MERCURY] = '57.9';
VALUES[DIST_FROM_SUN][VENUS]   = '108.2';
VALUES[DIST_FROM_SUN][EARTH]   = '149.6';
VALUES[DIST_FROM_SUN][MARS]    = '227.9';
VALUES[DIST_FROM_SUN][JUPITER] = '778.6';
VALUES[DIST_FROM_SUN][SATURN]  = '1433.5';
VALUES[DIST_FROM_SUN][URANUS]  = '2872.5';
VALUES[DIST_FROM_SUN][NEPTUNE] = '4495.1';
VALUES[DIST_FROM_SUN][PLUTO]   = '5906.4';

VALUES[ORB_PERIOD] = [];
VALUES[ORB_PERIOD][MERCURY] = '88.0';
VALUES[ORB_PERIOD][VENUS]   = '224.7';
VALUES[ORB_PERIOD][EARTH]   = '365.2';
VALUES[ORB_PERIOD][MARS]    = '687.0';
VALUES[ORB_PERIOD][JUPITER] = '4331';
VALUES[ORB_PERIOD][SATURN]  = '10,747';
VALUES[ORB_PERIOD][URANUS]  = '30,589';
VALUES[ORB_PERIOD][NEPTUNE] = '59,800';
VALUES[ORB_PERIOD][PLUTO]   = '90,560';

VALUES[NUM_OF_MOON] = [];
VALUES[NUM_OF_MOON][MERCURY] = '0';
VALUES[NUM_OF_MOON][VENUS]   = '0';
VALUES[NUM_OF_MOON][EARTH]   = '1';
VALUES[NUM_OF_MOON][MARS]    = '2';
VALUES[NUM_OF_MOON][JUPITER] = '67';
VALUES[NUM_OF_MOON][SATURN]  = '62';
VALUES[NUM_OF_MOON][URANUS]  = '27';
VALUES[NUM_OF_MOON][NEPTUNE] = '14';
VALUES[NUM_OF_MOON][PLUTO]   = '5';

function select_metric(metric) {
  $('[id^=metric-]').removeClass('active');
  $('#metric-' + metric).addClass('active');
}

function main() {
  $('[id^=metric-]').click(function() {
    var metric = parseInt($(this).attr('id').slice(-1));

    select_metric(metric);
    show_planets(metric);
  });

  select_metric(MASS);
  show_planets(MASS);
}

$(document).ready(main);