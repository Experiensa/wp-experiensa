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

class Register{
    public static function init(){
        Brochure::init();
        Estimate::init();
        Facility::init();
        Feedback::init();
        Host::init();
        Partner::init();
        Place::init();
        Service::init();
        Voyage::init();

        Country::init();
        Excluded::init();
        FacilityType::init();
        Included::init();
        Location::init();
        ProductType::init();
        Theme::init();
        register_activation_hook( EXPERIENSA_FILE, array( __CLASS__, 'register_flush_rewrite_rules') );
    }
    public static function register_flush_rewrite_rules(){
        Brochure::addCustomPostType();
        Estimate::addCustomPostType();
        Facility::addCustomPostType();
        Feedback::addCustomPostType();
        Host::addCustomPostType();
        Partner::addCustomPostType();
        Place::addCustomPostType();
        Service::addCustomPostType();
        Voyage::addCustomPostType();

        Country::addTaxonomy();
        Excluded::addTaxonomy();
        FacilityType::addTaxonomy();
        Included::addTaxonomy();
        Location::addTaxonomy();
        ProductType::addTaxonomy();
        Theme::addTaxonomy();
        flush_rewrite_rules();
    }
}