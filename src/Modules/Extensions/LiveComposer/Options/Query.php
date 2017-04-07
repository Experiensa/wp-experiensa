<?php namespace Experiensa\Plugin\Modules\Extensions\LiveComposer\Options;


use Experiensa\Plugin\Modules\QueryBuilder;

class Query
{
    public static function postType($id = 'posttype',$default = 'post',$title = 'Post Type')
    {
        $pt = QueryBuilder::getPostTypes();
        $cpt = [];
        $post_type_to_ignore = array(
            'page',
            'dslc_templates',
            'team'
        );
        foreach ($pt as $key => $value) {
            if(!in_array($key,$post_type_to_ignore))
                $cpt[] = ['label' => str_replace('Exp ','',$value), 'value' => $key];
        }
        return array(
            'label'   => __($title, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'select',
            'choices' => $cpt,
            'tab' => __('Query','sage')
        );
    }
    public static function taxonomies($id = 'taxonomy',$default = 'all', $title = 'Category')
    {
        $taxonomies = QueryBuilder::getTaxonomies();
        $tax = [];
        foreach ($taxonomies as $key => $value) {
            $tax[] = ['label' => $value, 'value' => $key];
        }
        return array(
            'label'   => __($title, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'select',
            'choices' => $tax,
            'tab' => __('Query','sage')
        );
    }

    public static function terms($id = 'terms',$default='',$title='Categories')
    {
        return array(
            'label' => __($title, 'experiensa'),
            'id'    => $id,
            'std'   => $default,
            'type'  => 'text',
            'tab' => __('Query','sage')
        );
    }
    public static function max($id = 'max',$max = '2',$title ='Max post #')
    {
        return array(
            'label'               => __($title, 'experiensa'),
            'id'                  => $id,
            'std'                 => $max,
            'type'                => 'slider',
            'affect_on_change_el' => '.element-to-affect',
            'min'                 => -1,
            'max'                 => 50,
            'tab' => __('Query','sage')
        );
    }
}