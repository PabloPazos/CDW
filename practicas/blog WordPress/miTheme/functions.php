<!-- <?php

  function enqueue_fa_script()
  {
    wp_enqueue_script('fascript', 'https://kit.fontawesome.com/a4898f7598.js');
  }

  add_action('wp_enqueue_scripts', 'enqueue_fa_script');

  add_theme_support('post-thumbnails');

  add_image_size('homapage-thumb', 745, 372, true);

  register_nav_menus(array(
    'menu_top' => 'Menu Princial',
    'menu_footer' => 'Menu Footer'
  ));

  register_sidebar (array(
    'name' => 'Header',
    'before_widget' => '<div>',
    'after_widget' => '</div>',
    'before_title' => '<h3>',
    'after_title' => '</h3>'
  ));
  
  register_sidebar (array(
    'name' => 'Sidebar',
    'before_widget' => '<div class="widget"><div class="titulo-seccion">',
    'after_widget' => '</div></div>',
    'before_title' => '<h3>',
    'after_title' => '</h3>'
  ));

  register_sidebar (array(
    'name' => 'Footer',
    'before_widget' => '<div>',
    'after_widget' => '</div>',
    'before_title' => '<h3>',
    'after_title' => '</h3>'
  ));

?> -->