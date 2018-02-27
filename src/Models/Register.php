<?php namespace Experiensa\Plugin\Models;
/* Custom Post Types */
use Experiensa\Plugin\Models\PostType\Brochure;
use Experiensa\Plugin\Models\PostType\Estimate;
use Experiensa\Plugin\Models\PostType\Facility;
use Experiensa\Plugin\Models\PostType\Feedback;
use Experiensa\Plugin\Models\PostType\Host;
use Experiensa\Plugin\Models\PostType\Partner;
use Experiensa\Plugin\Models\PostType\Place;
use Experiensa\Plugin\Models\PostType\Service;
use Experiensa\Plugin\Models\PostType\Voyage;
/* Taxonomies */
use Experiensa\Plugin\Models\Taxonomy\Country;
use Experiensa\Plugin\Models\Taxonomy\Excluded;
use Experiensa\Plugin\Models\Taxonomy\FacilityType;
use Experiensa\Plugin\Models\Taxonomy\Included;
use Experiensa\Plugin\Models\Taxonomy\Location;
use Experiensa\Plugin\Models\Taxonomy\ProductType;
use Experiensa\Plugin\Models\Taxonomy\Theme;
/* Register custom post types and taxonomies */
class Register{
    public static function init(){
        /**
         * Post types
         */
        Brochure::addCustomPostType();
        Estimate::addCustomPostType();
        Facility::addCustomPostType();
        Feedback::addCustomPostType();
        Host::addCustomPostType();
        Partner::addCustomPostType();
        Place::addCustomPostType();
        Service::addCustomPostType();
        Voyage::addCustomPostType();
        /**
         * Taxonomies
         */
        Country::addTaxonomy();
        Excluded::addTaxonomy();
        FacilityType::addTaxonomy();
        Included::addTaxonomy();
        Location::addTaxonomy();
        ProductType::addTaxonomy();
        Theme::addTaxonomy();
        // register_activation_hook( EXPERIENSA_FILE, array( __CLASS__, 'register_flush_rewrite_rules') );
    }
    public static function register_flush_rewrite_rules(){
        self::init();
        flush_rewrite_rules();
    }
}