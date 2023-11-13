const data = [
  {topic: `How to Phrase it Without Saying "You're Wrong!"`,
  intro: `Expressing alternative ideas, processes, and methods assertively without making others feel like they're wrong requires careful communication. Here are some tips:`,
  1: `Use "I" Statements**: Instead of saying "you should do this", say "I suggest" or "I believe". This shifts the focus from what the other person is doing wrong to what you believe could be done differently.`,
  2: `Acknowledge Other Views**: Before presenting your alternative, acknowledge the current method or idea. You might say something like, "I understand that currently we are doing X, and it has been effective in these ways...".`,
  3: `Present Alternatives as Options**: Introduce your alternative as another option to consider, rather than the only correct way. For example, you could say, "One option we might consider is...".`,
  4: `Use Positive Language**: Frame your alternative in a positive light. For example, instead of saying "This process is too slow", you could say "We might speed up the process by...".`,
  5: `Explain the Benefits**: Clearly outline the benefits of your alternative idea, process, or method. If possible, provide evidence or examples to support your points.`,
  6: `Be Open to Discussion**: Make it clear that you're open to discussion and feedback about your alternative. Encourage others to ask questions and share their thoughts.`,
  7: `Avoid Absolute Terms**: Avoid using words like "always", "never", "best", or "worst". These words can make your alternative seem like the only correct option, which can be off-putting.`,
  8: `Remember, the goal is to communicate your ideas in a way that is respectful of others' opinions and open to collaboration.`
  },
  {topic: 'Agreement vs Alignment',
  1: `Strong relationships don't need agreement. They need alignment.`,
  2: `Agreement is having identical opinions. Alignment is having shared values.`,
  3: `Agreement is taking the same path. Alignment is heading in the same direction`,
  4: `Closeness is a matter of commitment, not consensus.`
  },
  {
    topic: 'HTML Notes',
    basic: {
      1: 'Basic Structure of an HTMl File',
      2: './img/basic-html.png'
    },
    tags: {
      description: 'The structure of HTML Tags typically have an opening an a closing tag.  For example the opening paragraph tag looks like "<p>" and the closing paragraph tag looks like "</p>.  The "p" stands for "paragraph". and both the opening and closing tags are surrounded by the less-than and greater-than symbols ',
      html: ['<html> ... </html>', 'The html tag envelopes the entire html document.  It tells the browser that the page should be interpreted as html'],
      head: ['<head> ... </head>', `The head area of HTML files contains meta information which DO NOT show up on the html page. Toms of the most noticeable items in the head are the link to CSS files, the connection to a javascript script file, links to fonts, a title which is displayed on the browser's tab`],
      body: ['<body> ... </body>', 'The body contains all the information that actually gets displayed on the web page'],
      headings: ['h1, h2, h3, h4, h5, h6','There are six levels of header text with h1 being the largest font and h6 being the smallest'],
      paragraph: ['<p> ...</p> ','Paragraphs make it easier to organize paragraphs on a web page.  A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after the paragraph.'],
      links: ['<a href="http://www.url.com">title for url</a>', 'The anchor tag creates a link that connects (or links) to a resource on the web.'],
      div: ['<div> ... </div> ', 'The "div" tag allows information to be separated into divisions for organizational purposes.'],
      span: ['<span> ... </span>'],
      article: ['<article> ... </article>'],
      img: ['<img src= "image-location">','Allows images to be displayed on the web page.'],
      ol: ['<ol> ... </ol>','Ordered list'],
      ul: ['<ul> ... </ul>','Un-ordered list'],
      li: ['<li> ... </li>','List Item - used inside either an Ordered List or and Un-ordered list.  Within an ordered list, list items are numbered sequentially.  Withing an un-ordered list the list items have bullets'],
      table: ['<table> ... </table>','The table tag is used to define tables in an HTML document.'],
      th: ['<th> ... </th>','The table header tag is used to define the header row in tables in an HTML document.'],
      tr: ['<tr> ... </tr>','The table row tag is used to define rows in the body of HTML tables.'],
      form: ['<form> ... </form>','HTML forms are used to collect user input, which is sent to some place for storage.'],
      blockElements: {description: 'A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).',elements: ['<address>', '<article>', '<aside>', '<blockquote>', '<canvas>', '<dd>', '<div>', '<dl>', '<dt>', '<fieldset>', '<figcaption>', '<figure>', '<footer>', '<form>', '<h1>-<h6>', '<header>', '<hr>', '<li>', '<main>', '<nav>', '<noscript>', '<ol>', '<p>', '<pre>', '<section>', '<table>', '<tfoot>', '<ul>', '<video>', '</video>']},
      inlineElements: {description: 'An inline element does not start on a new line.  An inline element only takes up as much width as necessary.', elements: ['<a>', '<abbr>', '<acronym>', '<b>', '<bdo>', '<big>', '<br>', '<button>', '<cite>', '<code>', '<dfn>', '<em>', '<i>', '<img>', '<input>', '<kbd>', '<label>', '<map>', '<object>', '<output>', '<q>', '<samp>', '<script>', '<select>', '<small>', '<span>', '<strong>', '<sub>', '<sup>', '<textarea>', '<time>', '<tt>', '<var>']},
      layoutElements: {
        header: '<header> - Defines a header for a document or a section',
        nav: '<nav> - Defines a set of navigation links'
        section: '<section> - Defines a section in a document'
        article: '<article> - Defines an independent, self-contained content'
        aside: '<aside> - Defines content aside from the content (like a sidebar)'
        footer: '<footer> - Defines a footer for a document or a section'
        details: '<details> - Defines additional details that the user can open and close on demand'
        summary: '<summary> - Defines a heading for the <details> element'
      }

      
    },
    attributes: {
      class: 'Arbitrary names or labels that can be used in CSS to target HTML elements for the application of style',
      id: 'Arbitrary names or labels that can be used in CSS to target HTML elements for the application of style'
      

    }
  }, 
  


  {topic: 'CSS Notes'},
  {topic: 'JavaScript Notes'},
  {topic: 'Express Coding for Backend Servers'},
  {topic: 'SQL Cheatsheet'},
  {topic: 'React Cheatshet'},
  {topic: 'PERN Concepts'},
  {topic: 'Data Structures'},
  {topic: 'Web Development Roles'},
  {topic: 'Example of an Image Carousel'},
  {topic: 'How to Build An Image Carousel'},
  {topic: 'Test of adding multiple classes to an HTML Node'}
]