<?php
/**
* Plugin Name: Experiensa Plugin
* Plugin URI: https://github.com/Experiensa/wp-experiensa
* Description: This plugin adds tourist information to your website
* Plugin Type: Piklist
* Version: 0.7.2
* Author: Experiensa
* License: GPL2
*/

if ( ! defined( 'ABSPATH' ) ) {
	header( 'HTTP/1.0 403 Forbidden' );
	exit;
}
if ( ! defined( 'EXPERIENSA_VER' )){
    function init_experiensa()
    {
        // Define multiple PHP Constanst 
        define('EXPERIENSA_VER', '0.0.1');
        define('EXPERIENSA_FILE', __FILE__);
        define('EXPERIENSA_BASENAME', plugin_basename(__FILE__));
        define('EXPERIENSA_ABS', dirname(__FILE__));
        define('EXPERIENSA_DIST', dirname(__FILE__) . '/dist');
        define('EXPERIENSA_TEMPLATES', dirname(__FILE__) . '/templates/');
        define('EXPERIENSA_URL', plugin_dir_url(__FILE__));
        define('EXPERIENSA_ASSETS_URL', plugin_dir_url(__FILE__) . 'assets/');
        define('EXPERIENSA_DIST_URL', plugin_dir_url(__FILE__) . 'dist/');
        define('EXPERIENSA_MAIN_API_URL',get_bloginfo('url') . '/wp-json/wp/v2');
        define('EXPERIENSA_DIR_NAME', dirname(plugin_basename(__FILE__)));        
        //Include the custom autoloader
        include EXPERIENSA_ABS . '/autoloader.php';
        new Experiensa\Plugin\Includes\Requires();
        new Experiensa\Plugin\Includes\Asset();
        Experiensa\Plugin\Models\Register::init();
        Experiensa\Plugin\Modules\Settings::addSettingPages();
        new \Experiensa\Plugin\Modules\Defaults();
        new Experiensa\Plugin\Modules\Api\RegisterApi();
        // TODO: this include need to be like this because LIVEComposer modules are external 
        include EXPERIENSA_ABS . '/src/Modules/Extensions/LiveComposer/live-composer-loader.php';
    }
    add_action('plugins_loaded','init_experiensa');
//    add_action('init','init_experiensa');
}