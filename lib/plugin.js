require(['gitbook', 'jQuery'], function (gitbook, $) {
  var src = ''
  var style = ''
  var link = ''

  var insertLogo = function (src, style, link) {
    $('.book-summary').children().eq(0).before('<a class="book-logo" href="' + link + '"><img src="' + src + '" style="' + style + '"></a>')
  }

  gitbook.events.bind('start', function (e, config) {
    src = config['insert-logo']['src']
    style = config['insert-logo']['style']
    link = config['insert-logo']['link']
  })

  gitbook.events.bind("page.change", function() {
    insertLogo(src, style, link)
  })
})
