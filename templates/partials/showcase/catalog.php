<!-- React component to show Catalog-->
<?php
    $catalog_options = json_encode($catalog_options);
    $filters = json_encode(explode(' ',$filters));
?>
<div id="catalogProps"
     style="display: none"
     data-options=<?=$catalog_options?>
     data-filters=<?=$filters?>
></div>

<div id="catalogApp"></div>