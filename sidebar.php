<div id="choose">
	<a href="http://localhost/wordpress/?p=121"><div
			class="choose_same choose_1 <?php if ( (is_category('9') || in_category('9')) && !is_page() && !is_home() ) { echo 'current-cat'; } ?>">
			主题介绍</div></a> <a href="http://localhost/wordpress/?p=158"><div
			class="choose_same choose_2 <?php if ( (is_category('14') || in_category('14')) && !is_page() && !is_home() ) { echo 'current-cat'; } ?>">
			作品欣赏</div></a>
</div>
<div id="inSide">

	<?php 
			if ( is_single() ) : 
			global $post; 
			$categories = get_the_category(); 
			foreach ($categories as $category) : 
			?>
	<div class="catName">
		<?php echo $category->name; ?>
	</div>

	<?php 
			$posts = get_posts('numberposts=20&category='. $category->term_id); 
			foreach($posts as $post) : 
			?>

	<a href="<?php the_permalink(); ?>"><div class="list">
			<?php the_title(); ?>
		</div></a>

	<?php endforeach; ?>

	<?php 
			endforeach; endif ; ?>


	<div id="backHome">
		<a href="http://www.lzdda.com/%E5%9C%A8%E7%BA%BF%E9%A2%84%E7%BA%A6/"><div
				class="reserve">在线预约</div></a> <a href="#"><div class="reserve">
				发表评论</div></a>
	</div>

</div>
