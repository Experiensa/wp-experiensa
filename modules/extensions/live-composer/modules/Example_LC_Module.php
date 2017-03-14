<?php

use Experiensa\Includes\Requires;

if ( defined( 'DS_LIVE_COMPOSER_URL' ) ) {
    class Example_LC_Module extends DSLC_Module{
        var $module_id = 'Button_LC_Module';
        var $module_title = 'Buttons';
        var $module_icon = 'play-sign';
        var $module_category = 'Experiensa';
        // Module Options
        function options() {
            // The options array
            $options = array();

            // Return the array
            return apply_filters( 'dslc_module_options', $options, $this->module_id );

        }
        // Module Output
        function output( $options ) {
            set_query_var('foo','test');
            ob_start();
            Requires::experiensaLoadTemplate('test.php');
//            get_template_part("templates/partials/showcase/button/button");
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
        create_function('', 'return dslc_register_module( "Example_LC_Module" );')
    );
}