<?php //namespace Experiensa\Plugin\Modules\Extensions\LiveComposer\Modules;

use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Catalog as CatalogOpt;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Color;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Font;
use Experiensa\PLugin\Includes\Requires;

if ( defined( 'DS_LIVE_COMPOSER_URL' ) ) {
    class Catalog_LC_Module extends DSLC_Module{
        // Module Attributes
        var $module_id = 'Catalog_LC_Module';
        var $module_title = 'Catalog';
        var $module_icon = 'newspaper-o';
        var $module_category = 'Experiensa';
        function options() {
            // The options array
            $options = array(
                CatalogOpt::type(),
                CatalogOpt::elements(),
                Font::fontFamily('title_font','Source Sans Pro','Title','.catalog-title'),
                Color::colorField('title_text_color','Content Color','#000','.catalog-title','styling','Title'),
                Font::fontFamily('content_font','Source Sans Pro','Content','.catalog-content'),
                Color::colorField('content_text_color','Content Color','#000','.catalog-content','styling','Content'),
                Font::fontFamily('button_font','Source Sans Pro','Buttons','.catalog-button'),
                Color::colorField('button_text_color','Content Color','#000','.catalog-button','styling','Buttons'),
                Color::colorField('button_detail_color','Detail Color','#fff','.catalog-detail-button','styling','Buttons'),
                array(
                    'label' => __( 'Background', 'experiensa' ),
                    'id' => 'css_bg_button_group',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Buttons', 'experiensa' )
                ),
                Color::colorField('button_bg_color','Color','#fff','.button.catalog-button','styling','Buttons','background'),
                Color::colorField('button_bg_hover_color','Color - Hover','#fff','.catalog-button:hover','styling','Buttons','background'),
                Color::colorField('button_bg_active_color','Color - Active','#fff','.ui.button.toggle.active.catalog-button','styling','Buttons','background'),
                array(
                    'id' => 'css_bg_button_group',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Buttons', 'experiensa' )
                ),
            );

                // Return the array
            return apply_filters( 'dslc_module_options', $options, $this->module_id );

        }
        // Module Output
        function output( $options ) {
            $type = $options['type'];
            $elements = $options['elements'];
            $button_bg_color = $options['button_bg_color'];
            $button_bg_hover_color = $options['button_bg_hover_color'];
            $button_bg_active_color = $options['button_bg_active_color'];


            set_query_var('type',$type);
            set_query_var('elements',$elements);
            set_query_var('button_bg_color',$button_bg_color);
            set_query_var('button_bg_hover_color',$button_bg_hover_color);
            set_query_var('button_bg_active_color',$button_bg_active_color);

            ob_start();
            Requires::experiensaLoadTemplate('partials/showcase/catalog.php');
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
        create_function('', 'return dslc_register_module( "Catalog_LC_Module" );')
    );
}