<?php
/*
Title: Voyage
Post Type: exp_voyage
Meta box: true
*/

$price = array(
    'type'  => 'number',
    'field' => 'price',
    'label' => __('Price','experiensa'),
    'attributes'    => array( 'step' => 'any' ),
    'columns'   => 4
);

$expiry_date = array(
    'type'      => 'datepicker',
    'field'     => 'expiry_date',
    'label'     => __('Expiry date','experiensa'),
    'options'   => array( 'dateFormat' => 'dd/mm/yy'),
    'columns'   => 4
);

$from = array(
    'type'      => 'checkbox',
    'field'     => 'display_from',
    'label'     => __('Display from','experiensa'),
    'choices'   => array( 'TRUE'  => 'Yes' ),
    'columns'   => 4
);

$slogan = array(
    'type'      => 'text',
    'field'     => 'slogan',
    'columns'   => 12,
    'label'     => __('Voyage slogan','experiensa')
);

piklist('field', array(
    'type'      => 'group',
    'label'     => __('General info','experiensa'),
    'fields'    => array(
        $price,
        $expiry_date,
        $from,
        $slogan
    )
));

piklist('field', array(
    'type' => 'group',
    'scope' => 'post_meta',
    'label' => __('Number of Days'),
    'fields' => array(
        array(
            'type'          => 'number',
            'field'         => 'days',
            'columns'       => 2,
            'attributes'    => ['placeholder' => __('Days','experiensa')],
        ),
        array(
            'type'          => 'number',
            'field'         => 'nights',
            'columns'       => 2,
            'attributes' => array( 'placeholder' => __('Nights')),
        ),
    ),
));

piklist('field', array(
    'type'      => 'group',
    'label'     => __('Resell to other agencies?','experiensa'),
    'fields'    => array(
        array(
            'type'      => 'checkbox',
            'field'     => 'resell',
            'label'     => __('Resell','experiensa'),
            'columns'   => 6,
            'choices'   => array( 'TRUE'  => 'Yes' )
        ),
        array(
            'type'          => 'number',
            'field'         => 'tour_operator_margin',
            'columns'       => 6,
            'label'         => __('Margin (%)','experiensa'),
            'attributes'    => array( 'step' => 'any' ),
            'conditions'    => array(
                array(
                    'field' => 'resell',
                    'value' => 'TRUE'
                ),
            ),
        ),
    ),
));

piklist('field', array(
    'type'  => 'editor',
    'field' => 'information_conditions',
    'label' => __('Additional information & Conditions','experiensa')
));

piklist('field', array(
    'type'          => 'file',
    'field'         => 'gallery',
    'description'   => __('Photos should be 1920x1080 pixels','experiensa'),
    'label'         => __('Photo Gallery','experiensa')
));
