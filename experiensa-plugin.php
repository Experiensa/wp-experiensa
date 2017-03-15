<?php
/**
* Plugin Name: Experiensa Plugin
* Plugin URI: https://github.com/Experiensa/wp-experiensa
* Description: This plugin adds tourist information to your website
* Plugin Type: Piklist
* Version: 0.0.1
* Author: Experiensa
* License: GPL2
*/

if ( ! defined( 'ABSPATH' ) ) {
	header( 'HTTP/1.0 403 Forbidden' );
	exit;
}
if ( ! defined( 'EXPERIENSA_VER' )){
//    function init_experiensa()
//    {
        define('EXPERIENSA_VER', '0.0.1');
        define('EXPERIENSA_BASENAME', plugin_basename(__FILE__));
        define('EXPERIENSA_URL', plugin_dir_url(__FILE__));
        define('EXPERIENSA_DIR_NAME', dirname(plugin_basename(__FILE__)));
        define('EXPERIENSA_ABS', dirname(__FILE__));
        define('EXPERIENSA_DIST', dirname(__FILE__) . '/dist');
        define('EXPERIENSA_TEMPLATES', dirname(__FILE__) . '/templates/');
        define('EXPERIENSA_REDUX_OPT_NAME','experiensa_redux');
        $expsa_active_ctp = array();

        include EXPERIENSA_ABS . '/autoloader.php';
        Experiensa\Plugin\Includes\Requires::init();
        Experiensa\Plugin\Includes\Asset::init();
        Experiensa\Plugin\Models\Register::init();
        Experiensa\Plugin\Modules\Settings::addSettingPages();
//        include EXPERIENSA_ABS . '/includes/customizer.php';
//        include EXPERIENSA_ABS . '/modules/extensions/live-composer/modules/Example_LC_Module.php';
//    }
//    add_action('plugins_loaded','init_experiensa');
}