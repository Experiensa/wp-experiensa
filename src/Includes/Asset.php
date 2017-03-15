<?php namespace Experiensa\Plugin\Includes;

use Experiensa\Plugin\Modules\Helpers;
use Experiensa\Plugin\Modules\Settings;

if ( ! defined( 'ABSPATH' ) ) {
    header( 'HTTP/1.0 403 Forbidden' );
    exit;
}
/**
 * Class Assets
 * Load all custom javascript and CSS files on front-end and wp-admin
 */
final class Asset{
    public static function init(){
        add_action( 'wp_enqueue_scripts', array( __CLASS__, 'load_frontend_scripts' ) );
        add_action( 'admin_enqueue_scripts', array( __CLASS__, 'load_admin_scripts' ) );
    }
    public static function load_frontend_scripts($hook){
        $protocol = 'http';
        if ( is_ssl() ) {
            $protocol = 'https';
        }
        $localized_array = array(
            'ajaxurl'=>admin_url('admin-ajax.php',$protocol),
            'siteurl'=>get_bloginfo('url')
        );
        wp_enqueue_script('experiensa/vendor_js', EXPERIENSA_URL . 'dist/vendor.js');
        wp_enqueue_script('experiensa/js', EXPERIENSA_URL . 'dist/main.js');
        wp_localize_script('experiensa/js', 'experiensa_vars', $localized_array);
        /**
         * Estimate enqueues
         */
        if(is_single() && get_post_type() == 'exp_estimate' && Helpers::check_internet_connection()){
            wp_enqueue_script('stripe/js', 'https://js.stripe.com/v2/');
        }
    }
    public static function load_admin_scripts($hook){
        $cpt = (isset($_GET['post_type'])?$_GET['post_type']:false);
        $action = (isset($_GET['action'])?$_GET['action']:false);
//        var_dump($hook);
//        var_dump($cpt);
//        var_dump($action);
        $protocol = 'http';
        if ( is_ssl() ) {
            $protocol = 'https';
        }
        $localized_array = array(
            'ajaxurl'=>admin_url('admin-ajax.php',$protocol),
            'siteurl'=>get_bloginfo('url')
        );
        wp_enqueue_script('experiensa/vendor_js', EXPERIENSA_URL . 'dist/vendor.js');
        wp_enqueue_script('experiensa/admin_js', EXPERIENSA_URL . 'dist/admin.js');
        wp_localize_script('experiensa/admin_js', 'experiensa_vars', $localized_array);
        /**
         * Load Google MAPS API
         */
        $api_key = Settings::getGoogleMapsAPIKey();
        $lang = Helpers::getSiteLanguageCode();
        var_dump($api_key);
        if($hook == 'post-new.php' && $cpt == 'exp_place'){
            wp_enqueue_script('gplace_api/js', 'https://maps.googleapis.com/maps/api/js?libraries=places&key='.$api_key.'&language='.$lang);
        }
        if($hook == 'post.php' && $cpt == 'exp_place' && $action == 'edit'){
            wp_enqueue_script('gplace_api/js', 'https://maps.googleapis.com/maps/api/js?libraries=places&key='.$api_key.'&language='.$lang);
        }
    }
}