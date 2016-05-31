<?php

/**
 * Include all php files in the /includes directory
 *
 * https://gist.github.com/theandystratton/5924570
 */

add_action( 'init', 'dld_load_include_files', 15 );
function dld_load_include_files() {

    foreach ( glob( dirname( __FILE__ ) . '/includes/*.php' ) as $file ) { include $file; }
}
