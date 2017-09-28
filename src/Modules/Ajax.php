<?php namespace Experiensa\Plugin\Modules;

use Experiensa\Plugin\Modules\Request\Http;
use Experiensa\Plugin\Modules\Helpers;
use Experiensa\Plugin\Modules\Settings;

class Ajax{
  public function __construct( ) {
    add_action('wp_ajax_requestCountryName', array( $this, 'requestCountryName' ));
    add_action('wp_ajax_nopriv_requestCountryName', array( $this, 'requestCountryName' ));
  }
  public function requestCountryName() {
    $apiURL = $_POST['apiURL']; 
    $input = $_POST['input'];
    $key = Settings::getGoogleAPIKey();
    $regions = $_POST['regions'];
    $language = Helpers::getSiteLanguageCode();
    $apiURL .= '?input='.$input.'&regions='.$regions.'&key='.$key.'&language='.$language;
		$response = Http::getStandardApiResponse($apiURL);
		header('Content-Type: application/json');
    echo $response;
    die();
  }
}