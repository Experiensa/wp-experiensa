<?php

use Experiensa\Plugin\Includes\Requires;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Query;

if ( defined( 'DS_LIVE_COMPOSER_URL' ) ) {
    class Button_LC_Module extends DSLC_Module
    {
        var $module_id = 'Button_LC_Module';
        var $module_title = 'Buttons';
        var $module_icon = 'play-sign';
        var $module_category = 'Experiensa';
        function options(){
            $options = [
                Query::postType(),
                Query::taxonomies(),
                Query::terms('terms'),
                Query::max('max','5'),
            ];
            // Return the array
            return apply_filters( 'dslc_module_options', $options, $this->module_id );
        }
        function output($options){
            $post_type = $options['posttype'];
            ob_start();
            Requires::experiensaLoadTemplate('partials/showcase/button.php');
            $html = ob_get_clean();
            // REQUIRED
            $this->module_start( $options );
            echo $html;
            // REQUIRED
            $this->module_end( $options );
        }
    }
    // Register Module
    add_action('dslc_hook_register_modules',
        create_function('', 'return dslc_register_module( "Button_LC_Module" );')
    );
}