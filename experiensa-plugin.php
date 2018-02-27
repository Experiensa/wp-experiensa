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
function init_experiensa(){
    
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
    // var_dump(get_post_types(array('public' => true)));
    require_once EXPERIENSA_ABS . '/src/Modules/Extensions/LiveComposer/live-composer-loader.php';
}
// add_action('plugins_loaded', 'init_experiensa');
add_action('init','init_experiensa');
function experiensa_rewrite_flush(){
    Experiensa\Plugin\Models\Register::register_flush_rewrite_rules();
}
register_activation_hook(EXPERIENSA_FILE, 'experiensa_rewrite_flush');



