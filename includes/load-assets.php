<?php

add_action( 'wp_enqueue_scripts', 'dld_enqueue_css_js' );

function dld_enqueue_css_js() {

    $version = "0.1.0";

    // wp_enqueue_style( $handle, $src, $deps, $ver, $media );
    wp_enqueue_style( 'dld_styles', get_stylesheet_directory_uri() . '/css/styles.min.css', array(), $version );

    // wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer );
    // NOTE: this combined script is loading in the footer
    wp_enqueue_script( 'dld_js', get_stylesheet_directory_uri() . '/js/scripts.min.js', array('jquery'), $version, true );

    wp_localize_script( 'dld_js', 'rest_data', array(
        'api_url' => untrailingslashit( rest_url() ),
        'nonce'   => wp_create_nonce( 'wp_rest' ),
    ) );
}
