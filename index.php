<!DOCTYPE html>
<html>
	<head>
		<?php wp_head() ?>
		<title><?php wp_title() ?></title>

		<meta name="viewport" content="width=device-width, user-scalable=no">
	</head>
	<body>
		<header class="site-header">
		<?php
			$primary_nav_walker = new PrimaryNavWalker();
		
//			error_log( print_r( $primary_nav_walker, true ) );
		
			$menu_args = array(
				'theme_location'    => 'primary',
				'menu'              => 'Primary Navigation',
				'walker'            => new PrimaryNavWalker()
			);
			wp_nav_menu( $menu_args );
		?>
		</header>
		<div id="app"></div>
	
		<?php wp_footer() ?>
	</body>
</html>