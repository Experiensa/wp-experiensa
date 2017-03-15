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
        new Brochure();
        new Estimate();
        new Facility();
        new Feedback();
        new Host();
        new Partner();
        new Place();
        new Service();
        new Voyage();

        new Country();
        new Excluded();
        new FacilityType();
        new Included();
        new Location();
        new ProductType();
        new Theme();
    }
}