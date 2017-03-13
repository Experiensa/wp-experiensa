<?php
if ( ! defined( 'ABSPATH' ) ) {
    header( 'HTTP/1.0 403 Forbidden' );
    exit;
}

final class Assets{
    public static function init(){
        add_action( 'wp_enqueue_scripts', array( __CLASS__, 'load_frontend_scripts' ) );
    }
    public static function load_frontend_scripts(){
        wp_enqueue_script('experiensa/vendor_js', EXPERIENSA_URL . 'dist/vendor.js');
        wp_enqueue_script('experiensa/bundle_js', EXPERIENSA_URL . 'dist/bundle.js');
    }
    public static function load_admin_scripts(){

    }
}
Assets::init();