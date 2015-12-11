
function show_planets(metric) {
  var header = "Rank by: " + METRIC_NAME[metric];
  $('h1#rank_header').html(header);

  var RANK = RANKS[metric];

  for (rank_index = 0; rank_index < RANK.length; rank_index++) {
    var planet_index = RANK[rank_index];

    var img = $('#rank-' + rank_index + ' img');
    img.attr('src', IMG[planet_index]);

    var text = $('#rank-' + rank_index + ' h3');
    text.html(NAME[planet_index] + ' : ' + VALUES[metric][planet_index]);
  }
}


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