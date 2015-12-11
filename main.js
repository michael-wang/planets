/*
 * These functions refer to values defined in planets.js.
 */

// Show planets sorted by metric chosen by user.
function update_planets(metric) {
  // Update header with chosen metric.
  var header = "Rank by: " + METRIC_NAME[metric];
  $('h1#rank_header').html(header);

  var RANK = RANKS[metric];

  for (i = 0; i < RANK.length; i++) {
    var planet_index = RANK[i];

    var img = $('#rank-' + i + ' img');
    img.attr('src', IMG[planet_index]);

    var text = $('#rank-' + i + ' h3');
    text.html(NAME[planet_index] + ' : ' + VALUES[metric][planet_index]);
  }
}

// With bootstrap, I can highlight sidebar item by adding 'active' to the class attribute.
// On the other hand, I have to remove 'active' from other elements' class attribute.
function highlight_metric(metric) {
  $('[id^=metric-]').removeClass('active');
  $('#metric-' + metric).addClass('active');
}

function main() {
  // When user click sidebar item, this anonymous function will be called.
  $('[id^=metric-]').click(function() {
    // We find out metric index by parsing element's 'id' attributes.
    // Notice metric index started by zero (not one).
    var metric = parseInt($(this).attr('id').slice(-1));

    highlight_metric(metric);
    update_planets(metric);
  });

  // Set default metric to planet's mass.
  highlight_metric(MASS);
  update_planets(MASS);
}

// Run main function when document ready.
$(document).ready(main);