<?php namespace Experiensa\Plugin\Modules\Api\Field;

use Experiensa\Plugin\Modules\Request\Media;

class Voyages{
    public $ctp;
    public function __construct(){
        $this->cpt = 'exp_voyage';
        $this->registerFields();
    }
    public function registerFields(){
        add_action( 'rest_api_init', array($this,'register_voyage_price' ));
        add_action( 'rest_api_init', array($this,'register_voyage_cover_image' ));
        add_action( 'rest_api_init', array($this,'register_voyage_currency' ));
        add_action( 'rest_api_init', array($this,'register_voyage_website' ));
        add_action( 'rest_api_init', array($this,'register_voyage_website_name' ));
        add_action( 'rest_api_init', array($this,'register_voyage_itinerary' ));
        add_action( 'rest_api_init', array($this,'register_voyage_duration' ));
        add_action( 'rest_api_init', array($this,'register_voyage_country' ));
        add_action( 'rest_api_init', array($this,'register_voyage_location' ));
        add_action( 'rest_api_init', array($this,'register_voyage_theme' ));
        add_action( 'rest_api_init', array($this,'register_voyage_categories' ));
        add_action( 'rest_api_init', array($this,'register_voyage_included' ));
        add_action( 'rest_api_init', array($this,'register_voyage_excluded' ));
    }
    //////////////////////////
    //  FIELD REGISTER SECTION
    //////////////////////////
    public function register_voyage_price(){
        register_rest_field( $this->cpt, 'price',
            array(
                'get_callback'    => array($this,'get_voyage_price'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_cover_image() {
        register_rest_field( $this->cpt, 'cover_image',
            array(
                'get_callback'    => array($this,'get_voyage_cover_image'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_currency() {
        register_rest_field( $this->cpt, 'currency',
            array(
                'get_callback'    => array($this,'get_voyage_currency'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_website() {
        register_rest_field( $this->cpt, 'website',
            array(
                'get_callback'    => array($this,'get_voyage_website'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_website_name() {
        register_rest_field( $this->cpt, 'website_name',
            array(
                'get_callback'    => array($this,'get_voyage_website_name'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_itinerary() {
        register_rest_field( $this->cpt, 'itinerary',
            array(
                'get_callback'    => array($this,'get_voyage_itinerary'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_duration() {
        register_rest_field( $this->cpt, 'duration',
            array(
                'get_callback'    => array($this,'get_voyage_duration'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_country() {
        register_rest_field( $this->cpt, 'country',
            array(
                'get_callback'    => array($this,'get_voyage_country'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_location() {
        register_rest_field( $this->cpt, 'location',
            array(
                'get_callback'    => array($this,'get_voyage_location'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_theme() {
        register_rest_field( $this->cpt, 'theme',
            array(
                'get_callback'    => array($this,'get_voyage_theme'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_categories() {
        register_rest_field( $this->cpt, 'category',
            array(
                'get_callback'    => array($this,'get_voyage_category'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_included() {
        register_rest_field( $this->cpt, 'included',
            array(
                'get_callback'    => array($this,'get_voyage_included'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_voyage_excluded() {
        register_rest_field( $this->cpt, 'excluded',
            array(
                'get_callback'    => array($this,'get_voyage_excluded'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    //////////////////////////
    //  GET META-FIELD SECTION
    //////////////////////////
    public function get_voyage_price( $object, $field_name, $request ) {
        return get_post_meta( $object[ 'id' ], $field_name, true );
    }
    public function get_voyage_cover_image( $object, $field_name, $request ) {
        $images = array();
        //Get images from feature image
        $cover_image = wp_get_attachment_image_src( get_post_thumbnail_id($object['id']), 'full' );
        if(!empty($cover_image)){
            for($i=0;$i < count($cover_image);$i++){
                if(strpos($cover_image[$i],'http')===0){
                    $images['feature_image'] = $cover_image[$i];
                }
            }
        }else{
            $images['feature_image'] = false;
        }
        $gallery = array();
        $images_list = get_post_meta($object['id'],'gallery');
        //Get images from gallery
        if(!empty($images_list[0])){
            foreach($images_list as $img_id){
                $img_url = wp_get_attachment_image_src($img_id,'full')[0];
                if(strpos($img_url,'http')===0){
                    $gallery[] = $img_url;
                }
            }
            $images['gallery'] = $gallery;
        }else{
            //Get images from Guanaima API
            $terms = get_the_terms($object['id'],'exp_location');
            if(!empty($terms)){
                $location = array();
                foreach($terms as $term){
                    $row['taxonomy'] = 'location';
                    $row['term'] = $term->name;
                    $location[] = $row;
                }
                $response = Media::get_media_request_api('media',$location);
                if(!empty($response)){
                    foreach($response as $image){
                        if(strpos($image['full_size'],'http')===0){
                            $gallery[] = $image['full_size'];
                        }
                    }
                }
            }
            $images['gallery'] = $gallery;
        }
        return $images;
    }
    public function get_voyage_currency( $object, $field_name, $request ) {
        $agency_options = get_option('agency_settings');
        return $agency_options['agency_currency'];
    }
    public function get_voyage_website( $object, $field_name, $request ) {
        return get_bloginfo('url');
    }
    public function get_voyage_website_name( $object, $field_name, $request ) {
        return get_bloginfo('name');
    }
    public function get_voyage_itinerary( $object, $field_name, $request ) {
        $itinerary = "";
        $day            = get_post_meta($object[ 'id' ],'itinerary_day');
        $title          = get_post_meta($object[ 'id' ],'itinerary_title');
        $subtitle       = get_post_meta($object[ 'id' ],'itinerary_subtitle');
        $description    = get_post_meta($object[ 'id' ],'itinerary_description');
        if(!empty($day) && !empty($title) && !empty($subtitle)){
            $count = count($day);
            for($i=0;$i < $count;$i++){
                if(isset($title[$i]) && !empty($title[$i])){
                    $itinerary .= "<strong>".$day[$i]." - ".$title[$i]."</strong>";
                }else{
                    if(!empty($day[$i]))
                        $itinerary .= "<strong>".$day[$i]."</strong>";
                }
                if(isset($subtitle[$i]) && !empty($subtitle[$i])){
                    $itinerary .= ": ".$subtitle[$i];
                }
                if(isset($description[$i]) && !empty($description[$i])){
                    $itinerary .= "<br><p>".$description[$i]."</p>";
                }
            }
        }
        return $itinerary;
    }
    public function get_voyage_duration( $object, $field_name, $request ) {
        $duration = "";
        $days            = get_post_meta($object[ 'id' ],'days');
        $nights          = get_post_meta($object[ 'id' ],'nights');
        if(!empty($days[0])){
            $duration.= implode($days) .' '.__('Days', 'sage');
            if(!empty($nights[0])){
                $duration.= ' / ' . implode($nights) . ' ' . __('Nights', 'sage');
            }
        }else{
            if(!empty($nights[0])){
                $duration.= implode($nights) . ' ' . __('Nights', 'sage');
            }
        }
        return $duration;
    }
    public function get_voyage_country( $object, $field_name, $request ) {
        $country = "";
        $terms = get_the_terms($object[ 'id' ],'exp_country');
        if(!empty($terms)){
            if(count($terms) < 2){
                $country = $terms[0]->name;
            }else {
                foreach ($terms as $term) {
                    if (!empty($term->name)){
                        $country .= $term->name.", ";
                    }
                }
            }
        }
        $country = rtrim(rtrim($country),',');
        return $country;
    }
    public function get_voyage_location( $object, $field_name, $request ) {
        $location = "";
        $terms = get_the_terms($object[ 'id' ],'exp_location');
        if(!empty($terms)){
            if(count($terms) < 2){
                $location = $terms[0]->name;
            }else {
                foreach ($terms as $term) {
                    if (!empty($term->name)){
                        $location .= $term->name.", ";
                    }
                }
            }
        }
        $location = rtrim(rtrim($location),',');
        return $location;
    }
    public function get_voyage_theme( $object, $field_name, $request ) {
        $themes = "";
        $terms = get_the_terms($object[ 'id' ],'exp_theme');
        if(!empty($terms)){
            if(count($terms) < 2){
                $themes = $terms[0]->name;
            }else {
                foreach ($terms as $term) {
                    if (!empty($term->name)){
                        $themes .= $term->name.", ";
                    }
                }
            }
        }
        $themes = rtrim(rtrim($themes),',');
        return $themes;
    }
    public function get_voyage_category( $object, $field_name, $request ) {
        $row = [];
        $terms = get_the_terms($object[ 'id' ],'category');
        if(!empty($terms)){
            if(count($terms) < 2){
                $row['array'][]= ucfirst($terms[0]->name);
                $row['text'] = ucfirst($terms[0]->name);
            }else {
                $text = "";
                foreach ($terms as $term) {
                    if (!empty($term->name)){
                        $name = ucfirst($term->name);
                        $text .= $name.", ";
                        $row['array'][] = $name;
                    }
                }
                $row['text'] = rtrim(rtrim($text),',');
            }
        }
        $categories = $row;
        return $categories;
    }
    public function get_voyage_included( $object, $field_name, $request ) {
        $row = [];
        $terms = get_the_terms($object[ 'id' ],'exp_included');
        if(!empty($terms)){
            if(count($terms) < 2){
                $row['array'][]= ucfirst($terms[0]->name);
                $row['text'] = ucfirst($terms[0]->name);
            }else {
                $text = "";
                foreach ($terms as $term) {
                    if (!empty($term->name)){
                        $name = ucfirst($term->name);
                        $text .= $name.", ";
                        $row['array'][] = $name;
                    }
                }
                $row['text'] = rtrim(rtrim($text),',');
            }
        }
        $includes = $row;
        return $includes;
    }
    public function get_voyage_excluded( $object, $field_name, $request ) {
        $row = [];
        $terms = get_the_terms($object[ 'id' ],'exp_excluded');
        if(!empty($terms)){
            if(count($terms) < 2){
                $row['array'][]= ucfirst($terms[0]->name);
                $row['text'] = ucfirst($terms[0]->name);
            }else {
                $text = "";
                foreach ($terms as $term) {
                    if (!empty($term->name)){
                        $name = ucfirst($term->name);
                        $text .= $name.", ";
                        $row['array'][] = $name;
                    }
                }
                $row['text'] = rtrim(rtrim($text),',');
            }
        }
        $excludes = $row;
        return $excludes;
    }
}