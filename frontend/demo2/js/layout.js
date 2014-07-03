jQuery(document).ready(function($) {

  layout_left_width = 200;
  layout_right_width = 200;
  layout_header_height = 63;
  layou_footer_height = 63;

  $( window ).resize(function() {
    rebuildLayout();
  });

  rebuildLayout();

});

function rebuildLayout() {
  window_width = $( window ).width();
  window_height = $( window ).height();
  $('#header')
    .css('position', 'absolute')
    .css('width', '100%')
    .css('height', layout_header_height+'px')
    .css('top', '0')
    .css('left', '0');
  $('#left')
    .css('position', 'absolute')
    .css('width', layout_left_width+'px')
    .css('height', (window_height-layout_header_height)+'px')
    .css('top', layout_header_height+'px')
    .css('left', '0');
  $('#right')
    .css('position', 'absolute')
    .css('width', layout_right_width+'px')
    .css('height', (window_height-layout_header_height-layou_footer_height)+'px')
    .css('top', layout_header_height+'px')
    .css('right', '0');
  $('#main')
    .css('position', 'absolute')
    .css('width', (window_width-layout_left_width-layout_right_width)+'px')
    .css('height', (window_height-layout_header_height-layou_footer_height)+'px')
    .css('top', layout_header_height+'px')
    .css('left', layout_left_width+'px');
  $('#footer')
    .css('position', 'absolute')
    .css('width', (window_width-layout_left_width)+'px')
    .css('height', layou_footer_height+'px')
    .css('top', (window_height-layou_footer_height)+'px')
    .css('left', layout_left_width+'px');
}