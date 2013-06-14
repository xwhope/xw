<?php get_header(); ?>


<div id="center_single-about">

	<?php if (have_posts()) : the_post(); update_post_caches($posts); ?>

	<div id="content-about">
		<h3 id="title">
			<a href="<?php the_permalink(); ?>"> <?php the_title(); ?></a>
		</h3>

		<?php edit_post_link('编辑', ' &bull; ', ''); ?>

		<?php the_content(); ?>
	</div>
	<?php else : ?>
	<div class="errorbox">没有文章！</div>
	<?php endif; ?>


	<div id="singleSide_about">
		<?php 
	if ( is_single() ) : 
	global $post; 
	$categories = get_the_category(); 
	foreach ($categories as $category) : 
	?>
		<div id="name_about">
			<?php echo $category->name; ?>
		</div>

		<?php 
	$posts = get_posts('numberposts=20&category='. $category->term_id); 
	foreach($posts as $post) : 
	?>

		<a href="<?php the_permalink(); ?>">
		<div class="list-about">   <div class="about-bg"></div>
		
				  <div class="about-bg-font">
				  	<?php the_title(); ?> 
				  </div>	
			</div>
			</a>
		<!-- 背景图片的 -->
		<?php endforeach; ?>

		<?php endforeach; endif ; ?>
	</div>

</div>



<?php get_footer();?>

