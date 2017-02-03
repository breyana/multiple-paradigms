  var addImages = {
    xmute(content) {
      return content.replace(/!\[(.+)\]\((.+)\)/gm, '<img src="$2" alt= "$1">')
    }
  }

  var addLinks = {
    xmute(content) {
      return content.replace(/\[(.+)\]\((.+)\)/gm, '<a href="$2">$1</a>')
    }
  }

  var addCodeBlock = {
    xmute(content) {
      return content.replace(/^(```\n)((.)+(\n))+(```)$/gm, `<pre><code>
$?
</pre><code>`)
    }
  }

  var addInlineCode = {
    xmute(content) {
      return content.replace(/`[^`].+`/gm, "<code>$&</code>")
    }
  }

  var addBlockQuotes = {
    xmute(content) {
      return content.replace(/^(>(.+)(\n){1})+/gm, `<quote>
$&</quote>
`)
    }
  }

  var addH6 = {
    xmute(content) {
      return content.replace(/(^#{6})(.+)/, '<h6>$2</h6>')
    }
  }

  var addH5 = {
    xmute(content) {
      return content.replace(/(^#{5})(.+)/gm, '<h5>$2</h5>')
    }
  }

  var addH4 = {
    xmute(content) {
      return content.replace(/(^#{4})(.+)/gm, '<h4>$2</h4>')
    }
  }

  var addH3 = {
    xmute(content) {
      return content.replace(/(^#{3})(.+)/gm, '<h3>$2</h3>')
    }
  }

  var addH2 = {
    xmute(content) {
      return content.replace(/(^#{2})(.+)/gm, '<h2>$2</h2>')
    }
  }

  var addH1 = {
    xmute(content) {
      return content.replace(/(^#{1})(.+)/gm, '<h1>$2</h1>')
    }
  }

  var addHorizontalRule = {
    xmute(content) {
      return content.replace(/(\*{3,})|(\* \* \*)|(- - -)|(-{3,})/gm, '<hr>')
    }
  }

  var addOrderedList = {
    xmute(content) {
      return content.replace( /^((\d+\. )(.+)(\n){1})+/gm, `<ol>
$&</ol>
`)
    }
  }

  var addUnorderedList = {
    xmute(content) {
      return content.replace( /^(-(.+)(\n){1})+/gm, `<ul>
$&</ul>
`)
    }
  }

  var addListItems = {
    xmute(content) {
      return content.replace( /^(- |\d+\. )(.+)/gm, '<li>$2</li>')
    }
  }

  var addBoldHTML = {
    xmute(content) {
      return content.replace(/(\*\*|\_\_)(.+?)(\*\*|\_\_)/, '<b>$2</b>')
    }
  }

  var addItalicsHTML = {
    xmute(content) {
      return content.replace(/(\*|\_)(.+?)(\*|\_)/, '<i>$2</i>')
    }
  }

  var addParagraph = {
    xmute(content) {
      return content.replace(/^(?!<li>|<h[0-6]>|<\/*hr>|<\/*ol>|<\/*ul>|<\/*quote>|<\/*pre><code>|<img|<a href| )(.+\n)*(.+)(?=\n\n)/gm,
    '<p>$1$2</p>')
    }
  }



exports.addImages = addImages
exports.addLinks = addLinks
exports.addCodeBlock = addCodeBlock
exports.addInlineCode = addInlineCode
exports.addBlockQuotes = addBlockQuotes
exports.addH6 = addH6
exports.addH5 = addH5
exports.addH4 = addH4
exports.addH3 = addH3
exports.addH2 = addH2
exports.addH1 = addH1
exports.addHorizontalRule = addHorizontalRule
exports.addOrderedList = addOrderedList
exports.addUnorderedList = addUnorderedList
exports.addListItems = addListItems
exports.addBoldHTML = addBoldHTML
exports.addItalicsHTML = addItalicsHTML
exports.addParagraph = addParagraph

/*
addImages
addLinks
addCodeBlock
addInlineCode
addBlockQuotes
addH6
addH5
addH4
addH3
addH2
addH1
addHorizontalRule
addOrderedList
addUnorderedList
addListItems
addBoldHTML
addItalicsHTML
addParagraph
*/
