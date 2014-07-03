jQuery(document).ready(function($) {

  /* configuration */

  layout_body_minwidth = 1024;
  layout_left_width = 200;
  layout_header_height = 63;
  layou_footer_height = 61;
  layout_main_inner_minwidth = 800;
  layout_main_inner_border_width = 1;
  layout_main_inner_margin = 10;
  layoyt_animate_speed = 500;
  layout_right_target_width = 0;

  /* start */

  layout_main_inner_outside = layout_main_inner_border_width + layout_main_inner_margin;

  $('#main-inner')
    .css('min-width', layout_main_inner_minwidth+'px')
    .css('border-width', layout_main_inner_border_width+'px')
    .css('margin', layout_main_inner_margin+'px')

  $( window ).resize(function() {
    rebuildLayout();
  });

  rebuildLayout();

  $('#show-small-sidebar').click(function(event) {
    toggleSidebar(300);
  });

  $('#show-big-sidebar').click(function(event) {
    toggleSidebar(550);
  });

  $('#hide-sidebar').click(function(event) {
    toggleSidebar(0);
  });

});

function rebuildLayout() {
  var window_width = $( window ).width();
  var window_height = $( window ).height();
  if (window_width < layout_body_minwidth) {
    container_width = layout_body_minwidth;
  } else {
    container_width = window_width;
  }

  var main_inner_width = container_width-layout_left_width-layout_right_target_width-layout_main_inner_outside*2;

  $('#header')
    .css('position', 'absolute')
    .css('width', container_width+'px')
    .css('height', layout_header_height+'px')
    .css('top', '0')
    .css('left', '0');
  $('#left')
    .css('position', 'absolute')
    .css('width', layout_left_width+'px')
    .css('height', (window_height-layout_header_height-layou_footer_height)+'px')
    .css('top', layout_header_height+'px')
    .css('left', '0');
  $('#right')
    .css('position', 'absolute')
    .css('width', layout_right_target_width+'px')
    .css('height', (window_height-layout_header_height-layou_footer_height)+'px')
    .css('top', layout_header_height+'px')
    .css('left', (container_width-layout_right_target_width)+'px');
  $('#main')
    .css('position', 'absolute')
    .css('width', (container_width-layout_left_width)+'px')
    .css('height', (window_height-layout_header_height-layou_footer_height)+'px')
    .css('top', layout_header_height+'px')
    .css('left', layout_left_width+'px');
  $('#main-inner')
    .css('width', main_inner_width)
    .css('height', (window_height-layout_header_height-layou_footer_height-layout_main_inner_outside*2)+'px');
  $('#footer')
    .css('position', 'absolute')
    .css('width', container_width+'px')
    .css('height', layou_footer_height+'px')
    .css('top', (window_height-layou_footer_height)+'px')
    .css('left', '0');
}

function toggleSidebar(target_width) {
  layout_right_target_width = target_width;
  $('#right').animate({width: layout_right_target_width+'px', left: (container_width-layout_right_target_width)+'px'}, layoyt_animate_speed);

  var main_inner_width = container_width-layout_left_width-layout_right_target_width-layout_main_inner_outside*2;
  $('#main-inner').animate({width: main_inner_width+'px'});
}