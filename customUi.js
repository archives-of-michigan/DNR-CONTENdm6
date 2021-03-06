$(document).ready(function(){
	
	$('#nav_top').hide();
	$('#top_content').hide();
	$('#search').hide();
	$('#cdmFooterWrapper').hide();
	$('#content_footer').hide();
	$('body').prepend('<div id="main_wrapper" />');
	$('#main_wrapper').hide();
	$('#main_wrapper').prepend('<div id="header_wrapper" />');
	$('#header_wrapper').prepend('<div id="header" />');
	
	var logo = '<div id="logo"><a href="http://dnr.seekingmichigan.org"><img src="http://dnr.seekingmichigan.org/wp-content/uploads/2013/02/dnr-logo.png" alt="Digital DNR"></a></div>';
	$('#header').append(logo);
	$('#breadcrumb_top_content').html('');	
		
	//move the search box & style
	$("#search").appendTo("#header");
	$("#adv_search").appendTo("#main_wrapper");
	//$('#search').wrap('<div class="rightside" id="searchyContainer" />');
	$('#simple_search_button').attr('value','go');
	$('.search_content_container').css('margin-top','0');	
	$('.search_content_container_advanced').insertBefore('#searchyContainer');
	$('#search_content_text').parent().css('margin-top', '5px');
	$('.search_content_container_advanced').removeClass('float_left');
	$('#search_content_text').html('Search Digital Archive:');
	$('#search_content_close_icon').remove();
	//$('#adv_search').prepend('<span class="clear"></span>');
	
	var navbar = '<div id="navigation"><div id="navigation"><ul id="menu-main-navigation" class="sf-menu sf-js-enabled sf-shadow"><li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-20 current_page_item menu-item-22"><a href="http://dnr.seekingmichigan.org/">Home</a></li><li id="menu-item-38" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-38"><a href="http://dnr.seekingmichigan.org/?page_id=36">Discover</a></li></ul><br class="clear"></div><br class="clear">';
	//$('#header_wrapper').append('<div id="header" />');
	//$('#main_wrapper').append('<div id="header_wrapper" />');
	//$('#header_wrapper').append('<div id="header" />');
	$('#main_wrapper').append(navbar);

	
	//on item page
	//$('#results_box').appendTo('#image_title');
	$('#results_box').appendTo('#breadcrumb_top');
	
	// OCLC is using <a> when it's not really a link--the onClick is causing open/close.  replace <a> with <div>.
	$('#search_content_adv_link').replaceWith('<div id="search_content_adv_link" tabindex="6">Advanced Search</div>');
	$('#search_results_dd_link').replaceWith('<div id="search_results_dd_link" class="search_content_button_link" tabindex="2">within results<span id="search_results_button_arrow" class="icon_10 icon_nav_top_left ui-icon-triangle-1-s"></span></div>');
	$('#adv_search_by_date_link').replaceWith('<div id="adv_search_by_date_link" class="action_link_10">Search by date</div>');
	
	//we've done our adjustments, now show the page content
	//$('#archivesWrapMain').css("display","block");
	//$('#archivesWrapMain').show();
	$('#main_wrapper').show();
	$('#search').show();
	$('#top_content').show();
	$('#cdmFooterWrapper').show();
	$('#content_footer').show();
	
 });





