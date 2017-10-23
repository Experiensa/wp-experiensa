<?php
/**
* Plugin Name: Experiensa Plugin
* Plugin URI: https://github.com/Experiensa/wp-experiensa
* Description: This plugin adds tourist information to your website
* Plugin Type: Piklist
* Version: 0.8.2
* Author: Experiensa
* License: GPL2
*/

if ( ! defined( 'ABSPATH' ) ) {
	header( 'HTTP/1.0 403 Forbidden' );
	exit;
}
if (!defined('EXPERIENSA_VER' )) {
    function init_experiensa()
    {
        // Define multiple PHP Constanst 
        define('EXPERIENSA_VER', '0.0.1');
        define('EXPERIENSA_FILE', __FILE__);
        define('EXPERIENSA_PLUGIN_PATH',  WP_PLUGIN_DIR . '/wp-experiensa/');
        define('EXPERIENSA_BASENAME', plugin_basename(__FILE__));
        define('EXPERIENSA_ABS', dirname(__FILE__));
        define('EXPERIENSA_DIST', dirname(__FILE__) . '/dist');
        define('EXPERIENSA_TEMPLATES', dirname(__FILE__) . '/templates/');
        define('EXPERIENSA_URL', plugin_dir_url(__FILE__));
        define('EXPERIENSA_ASSETS_URL', plugin_dir_url(__FILE__) . 'assets/');
        define('EXPERIENSA_DIST_URL', plugin_dir_url(__FILE__) . 'dist/');
        define('EXPERIENSA_MAIN_API_URL', get_bloginfo('url') . '/wp-json/wp/v2');
        define('EXPERIENSA_DIR_NAME', dirname(plugin_basename(__FILE__)));   
        //Include the custom autoloader
        require_once EXPERIENSA_ABS . '/autoloader.php';
        new Experiensa\Plugin\Includes\Requires();
        new Experiensa\Plugin\Includes\Asset();
        new Experiensa\Plugin\Modules\Ajax();
        Experiensa\Plugin\Models\Register::init();
        // register_deactivation_hook( $file, array($this, 'plugin_activated' ));
        Experiensa\Plugin\Modules\Settings::addSettingPages();
        new \Experiensa\Plugin\Modules\Defaults();
        new Experiensa\Plugin\Modules\Api\RegisterApi();
        // TODO: this include need to be like this because LIVEComposer modules are external 
        require_once EXPERIENSA_ABS . '/src/Modules/Extensions/LiveComposer/live-composer-loader.php';
    }
    add_action('plugins_loaded', 'init_experiensa');
//    add_action('init','init_experiensa');
    function add_exp_theme_taxonomy() {
        $taxonomy = 'exp_theme';
        $df_theme_en = ['City','Safari','Nature','Sport','Wellness','Leisure','Beach','Honeymoon','Adventure','Party','Mountain','Cruise','Culinary','Shopping','Culture','Romance'];
        $df_theme_fr = ['Ville','Safari','Nature','Sport','Bien-être','Loisir','Plage','Voyage de noces','Aventure','Fetes','Montagne','Croisieres','Culinaire','Shopping','Cuture','Romance'];
        $df_theme_es = ['Ciudad','Safari','Naturaleza','Deporte','Bienestar','Ocio','Playa','Luna de miel','Aventura','Fiesta','Montaña','Cruceros','Culinario','Shopping','Cultura','Romance'];
        $df_theme = $df_theme_en;
        //
        $code = false;
        //Check if WPML is installed
        if ( function_exists('icl_object_id') ) {
            //Active WPML language code
            $code = ICL_LANGUAGE_CODE;
        }
        if(!$code){
            $code = get_bloginfo("language");
            $code = explode("-",$code,2);
            $code = $code[0];
        }
        $language = strtolower($code);
        // $language = Helpers::getSiteLanguageCode();
        if($language == 'es'){
            $df_theme = $df_theme_es;
        }else{
            if($language == 'fr'){
                $df_theme = $df_theme_fr;
            }
        }
        if(taxonomy_exists($taxonomy)){
            $terms = get_terms([
                'taxonomy'   => $taxonomy,
                'orderby'    => 'none',
                'hide_empty' => false,
            ]);
            if(!empty($terms)){
                foreach($terms as $t){
                    $name = ucfirst(strtolower($t->name));
                    if(in_array($name, $df_theme)){
                        $df_theme = array_diff($df_theme, array($name));
                    }
                }
            }
            foreach($df_theme as $theme){
                wp_insert_term($theme, $taxonomy);
            }
        }
    }
    register_activation_hook(__FILE__, 'add_exp_theme_taxonomy');
}
