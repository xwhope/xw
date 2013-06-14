<div id="center_single">

	<?php if (have_posts()) : the_post(); update_post_caches($posts); ?>

	<div id="content">
		<h3 id="title">
			<a href="<?php the_permalink(); ?>"> <?php the_title(); ?></a>
		</h3>

		<?php edit_post_link('编辑', ' &bull; ', ''); ?>

		<?php the_content(); ?>
	</div>


	<div id="singleSide">
		<?php get_sidebar(); ?>

	</div>



	<?php else : ?>
	<div class="errorbox">没有文章！</div>
	<?php endif; ?>

</div>

<?php get_footer();?>