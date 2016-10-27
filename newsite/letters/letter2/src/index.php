        <?php get_header() ?>
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

          <div <?php post_class(); ?>>

            <div class="banner"
            style="background-image: url(<?php echo get_field('banner_bg') ?>);">
              <div class="banner__inner">

                <h2 class="h2"><?php echo get_field('title1') ?></h2>
                <h3 class="h3"><?php echo get_field('title2') ?></h3>
                <h4 class="h4"><?php echo get_field('title3') ?></h4>
                <button class="btn js-btn-bron"><?php echo get_field('btn_bunner_text') ?></button>
                <div class="banner__advanteges">
                    <?php $blocksBanner = new WP_Query(array(
                        'post_type' => 'block_image_banner'
                    )) ?>
                <?php while ( $blocksBanner -> have_posts() ) : $blocksBanner ->the_post(); ?>

                  <a href="<?php echo the_field('link') ?>" class="advantege">
                    <div class="advantege__image" style="background-image: url('<?php echo the_field('block_img') ?>')">
                      <div class="advantege__bg">
                        <div class="advantege__text">
                          <h4 class="advantege__title"><?php the_field('block_title') ?></h4>
                          <p>
                              <?php the_field('block_sub_title') ?>
                          </p>
                        </div>
                      </div>
                    </div>
                </a>
                <?php endwhile;?>

                </div>
              </div>
            </div>
            <main class="main">

                <div class="main-container">
                    <div class="advanteges-block">

                            <?php $blocksmain = new WP_Query(array(
                                'post_type' => 'block_image'
                            )) ?>
                            <?php while ( $blocksmain -> have_posts() ) : $blocksmain ->the_post(); ?>

                          <a href="<?php echo the_field('link') ?>" class="advantege">
                            <div class="advantege__image" style="background-image: url('<?php echo the_field('block_img') ?>')">
                              <div class="advantege__bg">
                                <div class="advantege__text">
                                  <h4 class="advantege__title"><?php the_field('block_title') ?></h4>
                                  <p>
                                      <?php the_field('block_sub_title') ?>
                                  </p>
                                </div>
                              </div>
                            </div>
                        </a>
                        <?php endwhile;?>

                    </div>
                </div>
            </main>
            <div class="comments">
              <div class="main-container">
                  <?php $commentMain = new WP_Query(array(
                      'post_type' => 'comment_main'
                  )) ?>
                <h3 class="comments__title" style="color: black"><?php echo get_field('comment_title') ?></h3>
                <div class="comments__box">
                    <?php while ( $commentMain -> have_posts() ) : $commentMain ->the_post(); ?>
                        <div class="comment">
                          <div class="comment__text">
                            <p>
                                <?php the_field('comment_text') ?>
                            </p>
                          </div>
                          <div class="comment__person">
                            <div class="comment__photo" style="background-image: url(<?php the_field('comment_img') ?>);"></div>
                            <div class="comment__name">
                              <?php the_field('comment_name') ?>
                            </div>
                          </div>
                        </div>
                    <?php endwhile;?>

                </div>
              </div>
            </div>
            <div class="map" id="map"></div>
            <?php wp_reset_query(); ?>
            <div class="promo promo_main">
              <div class="main-container">
                <h3 class="promo__title" style="color: black"><?php echo get_field('promo_title') ?></h3>
                <div class="promo__box">
                  <div class="promo__img" style="background-image: url( <?php echo get_field('promo_text') ?>)"></div>
                  <div class="promo__text promo-text">
                    <h4 class="promo__sub-title" > <?php echo get_field('promo_sub_title') ?></h4>
                    <p> <?php echo get_field('promo_text') ?></p>
                    <button class="btn btn_promo js-btn-bron"> <?php echo get_field('promo_btn_text') ?></button>
                  </div>
                </div>
              </div>
            </div>

          </div><!-- post_class() -->

        <?php endwhile; else: ?>
          <div class="hentry"><h2>Sorry, the page you requested cannot be found</h2></div>
        <?php endif; ?>

        <?php if ( is_active_sidebar( 'widgets' ) ) : ?>

          <div class="widgets"><?php dynamic_sidebar( 'widgets' ); ?></div>

        <?php endif; ?>
        <?php if ( is_singular() || is_404() ) : ?>
          <!-- <div class="left"><a href="<?php bloginfo( 'url' ); ?>">&laquo; Home page</a></div> -->
        <?php else : ?>
          <!-- <div class="left"><?php next_posts_link( '&laquo; Older posts' ); ?></div> -->
          <!-- <div class="right"><?php previous_posts_link( 'Newer posts &raquo;' ); ?></div> -->
        <?php endif; ?>

      </div><!-- content -->
    </div><!-- container -->
    <?php wp_footer(); ?>
    <?php get_footer(); ?>
