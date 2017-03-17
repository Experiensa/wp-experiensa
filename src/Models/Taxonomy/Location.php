<?php namespace Experiensa\Plugin\Models\Taxonomy;

class Location{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addTaxonomy'), 0 );
//        add_action( 'after_switch_theme', 'flush_rewrite_rules' );
    }
    public static function addTaxonomy(){
		$labels = array(
			'name'                       => _x( 'Locations', 'Taxonomy General Name', 'experiensa' ),
			'singular_name'              => _x( 'Location', 'Taxonomy Singular Name', 'experiensa' ),
			'menu_name'                  => __( 'Locations', 'experiensa' ),
			'all_items'                  => __( 'All Locations', 'experiensa' ),
			'parent_item'                => __( 'Parent Location', 'experiensa' ),
			'parent_item_colon'          => __( 'Parent Location:', 'experiensa' ),
			'new_item_name'              => __( 'New Location Name', 'experiensa' ),
			'add_new_item'               => __( 'Add New Location', 'experiensa' ),
			'edit_item'                  => __( 'Edit Location', 'experiensa' ),
			'update_item'                => __( 'Update Location', 'experiensa' ),
			'view_item'                  => __( 'View Location', 'experiensa' ),
			'separate_items_with_commas' => __( 'Separate Locations with commas', 'experiensa' ),
			'add_or_remove_items'        => __( 'Add or remove Locations', 'experiensa' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
			'popular_items'              => __( 'Popular Locations', 'experiensa' ),
			'search_items'               => __( 'Search Locations', 'experiensa' ),
			'not_found'                  => __( 'Not Found', 'experiensa' ),
			'items_list'                 => __( 'Locations list', 'experiensa' ),
			'items_list_navigation'      => __( 'Locations list navigation', 'experiensa' ),
		);
		$rewrite = array(
			'slug'                       => 'exp_location',
			'with_front'                 => true,
			'hierarchical'               => false,
		);
		$args = array(
			'labels'                     => $labels,
			'hierarchical'               => true,
			'public'                     => true,
			'show_ui'                    => true,
			'show_admin_column'          => true,
			'show_in_nav_menus'          => true,
			'show_tagcloud'              => true,
			'rewrite'                    => $rewrite,
		);
		register_taxonomy( 'exp_location', array( 'post', 'attachment', 'exp_voyage', 'exp_estimate', 'exp_service', 'exp_host', 'exp_partner', 'exp_place' ), $args );
	}
}