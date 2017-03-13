<?php

if ( ! function_exists( 'experiensa_theme_taxonomy' ) ) {
    function experiensa_theme_taxonomy() {
        $labels = array(
            'name'                       => _x( 'Themes', 'Taxonomy General Name', 'experiensa' ),
            'singular_name'              => _x( 'Theme', 'Taxonomy Singular Name', 'experiensa' ),
            'menu_name'                  => __( 'Themes', 'experiensa' ),
            'all_items'                  => __( 'All Themes', 'experiensa' ),
            'parent_item'                => __( 'Parent Theme', 'experiensa' ),
            'parent_item_colon'          => __( 'Parent Theme:', 'experiensa' ),
            'new_item_name'              => __( 'New Theme Name', 'experiensa' ),
            'add_new_item'               => __( 'Add New Theme', 'experiensa' ),
            'edit_item'                  => __( 'Edit Theme', 'experiensa' ),
            'update_item'                => __( 'Update Theme', 'experiensa' ),
            'view_item'                  => __( 'View Theme', 'experiensa' ),
            'separate_items_with_commas' => __( 'Separate Themes with commas', 'experiensa' ),
            'add_or_remove_items'        => __( 'Add or remove Themes', 'experiensa' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
            'popular_items'              => __( 'Popular Themes', 'experiensa' ),
            'search_items'               => __( 'Search Themes', 'experiensa' ),
            'not_found'                  => __( 'Not Found', 'experiensa' ),
            'items_list'                 => __( 'Themes list', 'experiensa' ),
            'items_list_navigation'      => __( 'Themes list navigation', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                       => 'exp_themes',
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
        register_taxonomy( 'exp_theme', array( 'post', 'attachment', 'exp_voyage', 'exp_service', 'exp_host' ), $args );
    }
}