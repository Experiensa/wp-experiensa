<?php namespace Experiensa\Plugin\Modules\Api;

use Experiensa\Plugin\Modules\Api\Field\Voyages;
use Experiensa\Plugin\Modules\Api\Field\Partner;
use Experiensa\Plugin\Modules\Api\EndPoint\Catalog;
class RegisterApi{
    public function __construct(){
        new Voyages();
        new Partner();
        new Catalog();
    }
}
