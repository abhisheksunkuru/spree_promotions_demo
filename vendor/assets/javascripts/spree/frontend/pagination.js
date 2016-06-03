$(document).ready(function() {
  var win = $(window)
  if ($('.pagination').length) {
    $(window).on("scroll", function() {
      var more_posts_url;
      more_posts_url = $('span.next a').attr('href');
      if (more_posts_url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').html('<img src="/assets/spree/frontend/ajax_loader.gif" alt="Loading..." title="Loading..." />');
        $('#show_more').remove();
        $('#loader-gif').show();
        $.getScript(more_posts_url);
      }
    });
  }
});
