<?php namespace Experiensa\Plugin\Modules;

use WP_Query;

class QueryBuilder
{
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
}