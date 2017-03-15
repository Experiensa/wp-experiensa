<?php namespace Experiensa\Plugin\Modules;

use WP_Query;

class Settings
{
    public static function addSettingPages(){
        add_filter('piklist_admin_pages', array( __CLASS__, 'defineDefaultSettingPage' ));
        add_filter('piklist_admin_pages', array( __CLASS__, 'defineTutorialSettingPage' ));
    }
    /**
    * sub_menu define where to put it in the admin menu (wordpress left sidebar), for more information please visit:
    * https://codex.wordpress.org/Administration_Menus
    * https://developer.wordpress.org/reference/functions/add_submenu_page/
    * examples:
    * Dashboard: ‘index.php’
    * Posts: ‘edit.php’
    * Media: ‘upload.php’
    * Pages: ‘edit.php?post_type=page’
    * Comments: ‘edit-comments.php’
    * Custom Post Types: ‘edit.php?post_type=your_post_type’
    * Appearance: ‘themes.php’
    * Plugins: ‘plugins.php’
    * Users: ‘users.php’
    * Tools: ‘tools.php’
    * Settings: ‘options-general.php’
    * Network Settings: ‘settings.php’
    **/
    public static function defineDefaultSettingPage($pages){
        $pages[] = array(
            'page_title'    => __('Options','sage'),
            'menu_title'    => __('Options', 'sage'),
            'capability'    => 'manage_options',
            'sub_menu'      => 'themes.php',
            'menu_slug'     => 'experiensa-settings',
            'setting'       => 'agency_settings',
            'menu_icon'     => 'dashicons-editor-kitchensink',
            'page_icon'     => 'dashicons-editor-kitchensink',
            'single_line'   => false,
            'save_text'     => __('Save options','sage'),
        );
        return $pages;
    }
    public static function defineTutorialSettingPage($pages){
        $pages[] = array(
            'page_title'    => __('Trainning','sage'),
            'menu_title'    => __('Trainning', 'sage'),
            'sub_menu'      => 'index.php',
            'capability'    => 'manage_options',
            'menu_slug'     => 'experiensa-tutorials',
            'setting'       => 'experiensa_tutorials',
            'single_line'   => false,
            'save_text'     => __('Save Tutorials','sage'),
        );
        return $pages;
    }
}