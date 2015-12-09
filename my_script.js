var metric_index = 4;

function select_metric() {
  $('[id^=metric]').removeClass('active');
  $(this).addClass('active');
  metric_index = parseInt($(this).attr('id').slice(-1));
  console.log('metric_index: ', metric_index);
}

function main() {
  $('[id^=metric]').click(select_metric);
}

$(document).ready(main);