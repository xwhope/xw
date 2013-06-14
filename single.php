<?php get_header(); ?>

<?php
if ( in_category('15') ) {
include(TEMPLATEPATH . '/single-about.php');
}
// //elseif  在一次判断 想在加判断复制代码
// elseif ( in_category('') ) {   // pro 为category的别名
// include(TEMPLATEPATH . '/single-plugin.php');
// }
//elseif 结束
else {
include(TEMPLATEPATH . '/single-single.php');
}
?>




