<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <title><?php bloginfo( 'name' ); ?><?php wp_title( '&mdash;' ); ?></title>
    <?php if ( is_singular() && get_option( 'thread_comments') ) wp_enqueue_script( 'comment-reply' ); ?>
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>

    <div class="out">
      <header class="header">
          <div class="main-container">
              <a class="logo header__logo" href="<?php bloginfo('url'); ?>">
                <h1><?php bloginfo( 'name' ); ?> </h1>
              </a>

                <div class="phone header__phone">
                  <div class="phone__number">
                    <p>(383) 381 71 03</p>
                  </div>
                  <button class="btn-call-back js-btn-callback"><i class="icon-phone"></i><span>ЗАКАЗАТЬ ЗВОНОК</span></button>
                </div>
                <button class="btn-burger js-show-menu"></button>
                <?php wp_nav_menu( array('theme_location' => 'menu', 'menu_class'=>'menu header__menu', 'container'=>'false'));  ?>
            </div>
      </header><!-- header -->
      <div id="content">
          <div class="action js-action">
            <div class="main-container">
                <?php $actiontext = new WP_Query(array(
                    'post_type' => 'action_t'
                )) ?>

              <div class="action__inner">

                <div class="action__text"><i class="icon-procent"></i>
                    <?php while ( $actiontext -> have_posts() ) : $actiontext ->the_post(); ?>
                          <p>
                                <?php echo the_field('action_text') ?>
                          </p>
                    <?php endwhile;?>
                </div>
                <button class="btn-close-action js-close-action"><i class="icon-close"></i></button>
              </div>
            </div>
          </div>
