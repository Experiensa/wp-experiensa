<?php namespace Experiensa\Plugin\Modules\Request;

use Experiensa\Plugin\Modules\Request\Http;
class Partner
{
    public static function getPartners(){
        $partner_api_url = EXPERIENSA_MAIN_API_URL.'/exp_partner';
        return Http::getApiResponse($partner_api_url);
    }
    public static function getPartnersApi(){
        $partners = json_decode(self::getPartners(),true);
        $apis = [];
        if(is_array($partners)) {
            foreach ($partners as $partner) {
                if ($partner['api']) {
                    $row['url'] = $partner['website'];
                    $row['name'] = $partner['title']['rendered'];
                    $row['email'] = $partner['email'];
                    $apis[] = $row;
                }
            }
        }
        return $apis;
    }
}