<?php
/* Custom Post Types Includes */
include EXPERIENSA_ABS . '/models/post-type/brochure.php';
include EXPERIENSA_ABS . '/models/post-type/estimate.php';
include EXPERIENSA_ABS . '/models/post-type/facility.php';
include EXPERIENSA_ABS . '/models/post-type/feedback.php';
include EXPERIENSA_ABS . '/models/post-type/host.php';
include EXPERIENSA_ABS . '/models/post-type/partner.php';
include EXPERIENSA_ABS . '/models/post-type/place.php';
include EXPERIENSA_ABS . '/models/post-type/service.php';
include EXPERIENSA_ABS . '/models/post-type/voyage.php';
/* Custom Post Types Registration Action */
add_action( 'init', 'experiensa_brochure_cpt' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
add_action( 'init', 'experiensa_estimate_cpt' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
add_action( 'init', 'experiensa_facility_cpt' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
add_action( 'init', 'experiensa_feedback_cpt' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
add_action( 'init', 'experiensa_host_cpt' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
add_action( 'init', 'experiensa_partner_cpt' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
add_action( 'init', 'experiensa_place_cpt' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
add_action( 'init', 'experiensa_service_cpt' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
add_action( 'init', 'experiensa_voyage_cpt' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
/* Taxonomies Include */
include EXPERIENSA_ABS . '/models/taxonomy/country.php';
include EXPERIENSA_ABS . '/models/taxonomy/excluded.php';
include EXPERIENSA_ABS . '/models/taxonomy/facility-type.php';
include EXPERIENSA_ABS . '/models/taxonomy/included.php';
include EXPERIENSA_ABS . '/models/taxonomy/location.php';
include EXPERIENSA_ABS . '/models/taxonomy/product-type.php';
include EXPERIENSA_ABS . '/models/taxonomy/theme.php';
/* Taxonomy Registration Action */
add_action( 'init', 'experiensa_country_taxonomy', 0 );
add_action( 'init', 'experiensa_excluded_taxonomy', 0 );
add_action( 'init', 'experiensa_facility_type_taxonomy', 0 );
add_action( 'init', 'experiensa_included_taxonomy', 0 );
add_action( 'init', 'experiensa_location_taxonomy', 0 );
add_action( 'init', 'experiensa_product_type_taxonomy', 0 );
add_action( 'init', 'experiensa_theme_taxonomy', 0 );
/* Flush rewrite rules for custom post types. */
add_action( 'after_switch_theme', 'flush_rewrite_rules' );
//flush_rewrite_rules( false );