<?php namespace Experiensa\Plugin\Modules;

use WP_Query;

class QueryBuilder
{
    /**
     * Create an Array with all post types registered. Structure: ['<post type id>'] => 'post type name'
     * @return array
     */
    public static function getPostTypes(){
        $cpt_list = get_post_types();
        $post_types = array();
        foreach ($cpt_list as $cpt){
            if($cpt === 'jetpack-testimonial')
                $post_types[$cpt] = 'Testimonial';
            else
                $post_types[$cpt] = ucwords(str_replace('_',' ',$cpt));
        }
        $post_types['none'] = __('None','sage');
        $post_types['team'] = __('Team','sage');
        return $post_types;
    }
    /**
     * Check if post type exist
     * @param $cpt_name
     * @return mixed
     */
    public static function checkPostTypeExist($cpt_name){
        return post_type_exists($cpt_name);
    }

    /**
     * @param array $args
     * @param string $output
     * @return array
     */
    public static function getTaxonomies($args=[],$output='names'){
        $taxonomies_list = get_taxonomies($args,$output);
        $taxonomies = array();
        foreach ($taxonomies_list as $taxonomy){
            $taxonomies[$taxonomy] = ucwords(str_replace('_',' ',$taxonomy));
        }
        $taxonomies['location'] = __('Destinations','sage');
        $taxonomies['all'] = __('All Posts','sage');
        $taxonomies['news'] = __('News','sage');
        return $taxonomies;
    }

    /**
     * Get term by taxonomy
     * @param $taxonomy
     * @param array $terms
     * @return array
     */
    public static function getTermsByTaxonomy($taxonomy,$terms = array()){
        if(!empty($terms)){
            $args = array(
                'taxonomy'   => $taxonomy,
                'orderby'    => 'none',
                'slug'       => $terms,
                'hide_empty' => true,
            );

        }else {
            $args = array(
                'taxonomy'   => $taxonomy,
                'orderby'    => 'none',
                'hide_empty' => true,
            );
        }
        $terms = get_terms($args);
        return $terms;
    }

    /**
     * Get all posts by arguments
     * @param $post_type
     * @param $taxonomy
     * @param $terms
     * @param int $limit
     * @return WP_Query
     */
    public static function getPostByArguments($post_type,$taxonomy,$terms = [],$limit=-1){
//        echo "<h3>getPostByArguments </h3>";
//        var_dump($post_type);
//        var_dump($taxonomy);
//        var_dump($terms);
        if(empty($terms)) {
            $terms = self::getTermsByTaxonomy($taxonomy);
        }else {
            $terms = self::getTermsByTaxonomy($taxonomy, $terms);
            if(empty($terms)) {
                $terms = self::getTermsByTaxonomy($taxonomy);
            }
        }

        $args = array (
            'posts_per_page' => $limit,
            'post_type'      => array($post_type),
            'post_status'    => array('publish', 'inherit'),
            'tax_query'      => array(
                array(
                    'taxonomy' => $taxonomy,
                    'field'    => 'slug',
                    'terms'    => wp_list_pluck($terms, 'slug')
                )
            )
        );
        $query = new WP_Query($args);
//        var_dump($query);
        return $query;
    }
}