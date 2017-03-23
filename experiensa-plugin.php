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
        define('EXPERIENSA_FILE', __FILE__);
        define('EXPERIENSA_BASENAME', plugin_basename(__FILE__));
        define('EXPERIENSA_URL', plugin_dir_url(__FILE__));
        define('EXPERIENSA_DIR_NAME', dirname(plugin_basename(__FILE__)));
        define('EXPERIENSA_ABS', dirname(__FILE__));
        define('EXPERIENSA_DIST', dirname(__FILE__) . '/dist');
        define('EXPERIENSA_TEMPLATES', dirname(__FILE__) . '/templates/');
        define('EXPERIENSA_REDUX_OPT_NAME','experiensa_redux');
        define('EXPERIENSA_MAIN_API_URL',get_bloginfo('url') . '/wp-json/wp/v2');
        $expsa_active_ctp = array();
//        var_dump(EXPERIENSA_FILE);
//    var_dump(EXPERIENSA_ABS);
        include EXPERIENSA_ABS . '/autoloader.php';
        Experiensa\Plugin\Includes\Requires::init();
        Experiensa\Plugin\Includes\Asset::init();
        Experiensa\Plugin\Models\Register::init();
        Experiensa\Plugin\Modules\Settings::addSettingPages();
        new \Experiensa\Plugin\Modules\Defaults();
//        var_dump(get_post_types());
//        var_dump(\Experiensa\Plugin\Modules\QueryBuilder::getTaxonomies());
//        die();
//    add_action('admin_init', function(){
//        $post_types = get_post_types( array( 'public' => true ), 'names' );
//        var_dump($post_types);
//    });
//        var_dump(\Experiensa\Plugin\Modules\QueryBuilder::getTermsByTaxonomy('exp_location'));
//        \Experiensa\Plugin\Modules\QueryBuilder::getPostByArguments('exp_voyage','exp_location',\Experiensa\Plugin\Modules\QueryBuilder::getTermsByTaxonomy('exp_location'));
        //$s = Experiensa\Plugin\Modules\Settings::getSeasonDates();
        //var_dump($s);
//        include EXPERIENSA_ABS . '/includes/customizer.php';
        include EXPERIENSA_ABS . '/src/Modules/Extensions/LiveComposer/Modules/Catalog_LC_Module.php';
        include EXPERIENSA_ABS . '/src/Modules/Extensions/LiveComposer/Modules/Example_LC_Module.php';
        new Experiensa\Plugin\Modules\Api\RegisterApi();
        //172.24.12.182/experiensa
//        $asd = Experiensa\Plugin\Modules\Request\Http::getApiResponse('http://fiestatravel.ch/wp-json/wp/v2/voyage');
//        var_dump($asd);
//        $asd = Experiensa\Plugin\Modules\Request\Http::getUrlHeaders('http://fiestatravel.ch/wp-json/wp/v2/voyage');
//        var_dump($asd);
//        $asd = Experiensa\Plugin\Modules\Request\Http::isPage404('http://fiestatravel.ch/wp-json/wp/v2/voyage');
//        var_dump($asd);
//        var_dump(@get_headers('http://fiestatravel.ch/wp-json/wp/v2/voyage'));
//        var_dump(wp_http_validate_url('http://fiestatravel.ch/wp-json/wp/v2/voyage'));
//        var_dump(EXPERIENSA_MAIN_API_URL.'/exp_partner');
//        print_r(\Experiensa\Plugin\Modules\Request\Partner::getPartners());
//        die();
//    }
//    add_action('plugins_loaded','init_experiensa');
}