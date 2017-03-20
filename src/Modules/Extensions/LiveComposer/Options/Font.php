<?php
/**
 * Created by PhpStorm.
 * User: victor
 * Date: 20/03/17
 * Time: 09:06 AM
 */

namespace Experiensa\Plugin\Modules\Extensions\LiveComposer\Options;


class Font
{
    public static function fontFamily($id = 'text_font', $default = 'Source Sans Pro', $tab = 'Content',$class){
        return array(
            'label' => __( 'Font Family', 'experiensa' ),
            'id' => $id,
            'std' => $default,//'Open Sans',
            'type' => 'font',
            'refresh_on_change' => false,
            'affect_on_change_el' => $class,
            'affect_on_change_rule' => 'font-family',
            'section' => 'styling',
            'tab' => __( $tab, 'experiensa' )
        );
    }
    public static function fontSize($id = 'font_size',$label = 'Text Size',$default = '1.8',$tab){
        return array(
            'label'   => __($label, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'text',
//            'refresh_on_change' => false,
//            'min' => 0.1,
//            'max' => 3,
//            'step' => 0.1,
            'section' => 'styling',
            'tab' => __($tab,'sage')
        );
    }
    public static function textTransform($id = 'text_transform',$label = 'Text Transtransform',$default = 'capitalize',$tab){
        return array(
            'label'   => __($label, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'select',
            'choices' => array(
                array(
                    'label' => __('Uppercase', 'experiensa'),
                    'value' => 'uppercase'
                ),
                array(
                    'label' => __('Lowercase', 'experiensa'),
                    'value' => 'lowercase'
                ),
                array(
                    'label' => __('Capitalize', 'experiensa'),
                    'value' => 'capitalize'
                )
            ),
            'section' => 'styling',
            'tab' => __($tab,'experiensa')
        );
    }
}