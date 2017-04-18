<?php namespace Experiensa\Plugin\Modules\Api;

use Experiensa\Plugin\Modules\Api\EndPoint\ConfigData;
use Experiensa\Plugin\Modules\Api\Field\Posts;
use Experiensa\Plugin\Modules\Api\Field\Voyages;
use Experiensa\Plugin\Modules\Api\Field\Partner;
use Experiensa\Plugin\Modules\Api\EndPoint\Catalog;
class RegisterApi{
    public function __construct(){
        new Posts();
        new Voyages();
        new Partner();
        new Catalog();
        new ConfigData();
    }
}
