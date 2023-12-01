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
    html_basic: ['Basic Structure of an HTMl File', './img/basic-html.png'],
    tags: {
      cheat_sheet_img: '../img/html-cheatsheet.png',
      article: ['<article> ... </article>'],
      body: ['<body> ... </body>', 'The body contains all the information that actually gets displayed on the web page'],
      button: ['<button>','Create a button to perform some action when clicked'],
      description: 'The structure of HTML Tags typically have an opening an a closing tag.  For example the opening paragraph tag looks like "<p>" and the closing paragraph tag looks like "</p>.  The "p" stands for "paragraph". and both the opening and closing tags are surrounded by the less-than and greater-than symbols ',
      div: ['<div> ... </div> ', 'The "div" tag allows information to be separated into divisions for organizational purposes.'],
      em: ['em','Provide emphasis, may look like italic or bolding. This helps emphasize words of phrases for people with accessibility requirements.'],
      figure: ['figure','Used to group an image and it caption'],
      figcaption: ['figcaption','Optional; adds a caption for the image in a <figure>'],
      form: ['<form> ... </form>','HTML forms are used to collect user input, which is sent to some place for storage.'],
      head: ['<head> ... </head>', `The head area of HTML files contains meta information which DO NOT show up on the html page. Toms of the most noticeable items in the head are the link to CSS files, the connection to a javascript script file, links to fonts, a title which is displayed on the browser's tab`],
      headings: ['h1, h2, h3, h4, h5, h6','There are six levels of header text with h1 being the largest font and h6 being the smallest'],
      hr: ['<hr>','"hr" stands for "Horizontal Rule, which creates a horizontal line across the page.'],
      html: ['<html> ... </html>', 'The html tag envelopes the entire html document.  It tells the browser that the page should be interpreted as html'],
      input: ['input','Creates a field for to accept user entered data.'],
      img: ['<img src= "image-location">','Allows images to be displayed on the web page.'],
      li: ['<li> ... </li>','List Item - used inside either an Ordered List or and Un-ordered list.  Within an ordered list, list items are numbered sequentially.  Withing an un-ordered list the list items have bullets'],
      links: ['<a href="http://www.url.com">title for url</a>', 'The anchor tag creates a link that connects (or links) to a resource on the web.'],
      paragraph: ['<p> ...</p> ','Paragraphs make it easier to organize paragraphs on a web page.  A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after the paragraph.'],
      ol: ['<ol> ... </ol>','Ordered list'],
      p: ['<p>','Paragraph tags are used to hold paragraph, and by default is a block element, meaning it occupies the entire row on which it appears and has spacing before and after it to separate it from other elements on the page.'],
      span: ['<span> ... </span>'],
      ul: ['<ul> ... </ul>','Un-ordered list'],
      table: ['<table> ... </table>','The table tag is used to define tables in an HTML document.'],
      th: ['<th> ... </th>','The table header tag is used to define the header row in tables in an HTML document.'],
      title: ['<title>','Meta tag used in the "head" section of the html document. The title'],
      tr: ['<tr> ... </tr>','The table row tag is used to define rows in the body of HTML tables.'],
      blockElements: {
        description: 'A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).',
        elements: ['<address>', '<article>', '<aside>', '<blockquote>', '<canvas>', '<dd>', '<div>', '<dl>', '<dt>', '<fieldset>', '<figcaption>', '<figure>', '<footer>', '<form>', '<h1>-<h6>', '<header>', '<hr>', '<li>', '<main>', '<nav>', '<noscript>', '<ol>', '<p>', '<pre>', '<section>', '<table>', '<tfoot>', '<ul>', '<video>', '</video>']},
      inlineElements: {description: 'An inline element does not start on a new line.  An inline element only takes up as much width as necessary.', elements: ['<a>', '<abbr>', '<acronym>', '<b>', '<bdo>', '<big>', '<br>', '<button>', '<cite>', '<code>', '<dfn>', '<em>', '<i>', '<img>', '<input>', '<kbd>', '<label>', '<map>', '<object>', '<output>', '<q>', '<samp>', '<script>', '<select>', '<small>', '<span>', '<strong>', '<sub>', '<sup>', '<textarea>', '<time>', '<tt>', '<var>']},
      layoutElements: {
        // [ element name, description ]
      1: ['header', '<header> - Defines a header for a document or a section'],
      2: ['nav', '<nav> - Defines a set of navigation links'],
      3: ['section', '<section> - Defines a section in a document'],
      4: ['article', '<article> - Defines an independent, self-contained content'],
      5: ['aside', '<aside> - Defines content aside from the content (like a sidebar)'],
      6: ['footer', '<footer> - Defines a footer for a document or a section'],
      7: ['details', '<details> - Defines additional details that the user can open and close on demand'],
      8: ['summary', '<summary> - Defines a heading for the <details> element']
      }

      
    },
    attributes: {
      class: 'Arbitrary names or labels that can be used in CSS to target HTML elements for the application of style',
      id: 'Arbitrary names or labels that can be used in CSS to target HTML elements for the application of style'

    }
  }, 
  


  {topic: 'CSS Notes'},
  {topic: 'JavaScript Basics',
    keywords:{
      // [ JS keyword, Description ]
    1: ['break', 'Exit from the innermost loop or switch or from a named enclosing statement'],
    2: ['case', 'Label for a statement within a switch statement'],
    3: ['class', 'Declare a class'],
    4: ['const', 'Declare and initialize one or more constants'],
    5: ['continue', 'Begin the next iteration of the innermost loop or named loop'],
    6: ['debugger', 'Debugger breakpoint'],
    7: ['default', 'Label the default statement within a switch'],
    8: ['do_while', 'An alternative to the while loop'],
    9: ['export', 'Declare values that can be imported into other modules'],
    10: ['for', 'An easy-to-use-loop'],
    11: ['for_await', 'Asynchronously iterate the values of an async iterator'],
    12: ['for_in', 'Enumerate the property names of an object'],
    13: ['for_of', 'Enumerate the values of an iterable object such an array'],
    14: ['function', 'declare a function'],
    15: ['if_else', 'Execute one statement or another depending on a condition'],
    16: ['import', 'Declare names for values defined in other modules'],
    17: ['label', 'Give statement a name for use with break and continue'],
    18: ['let', 'Declare and initialize one or more block-scoped variables (ES6)'],
    19: ['repeat', 'Syntax: repeat(n, function) -- repeats the function n times.'],
    20: ['return', 'Return a value from a function'],
    21: ['switch', 'Multi-path branch to "case" or "default:" labels'],
    22: ['throw', 'Throw or execute an exception or error based on a condition'],
    23: ['try_catch_finally',  'Handle exceptions and code cleanup'],
    24: ['use_strict', 'Apply strict mode restrictions to script or function'],
    25: ['var', 'Declare and initialize one or more variables (pre ES6)'],
    26: ['while', 'A basic loop construct'],
    27: [yield, 'Provide a vale to be iterated; only used in generator functions']
    },
    operators: ['+ (plus)', '- (minus)', '* (multiply)', '/ divide', '% (modulus)'],
    arrays: {
      array_methods: {
        map: {
          map_img: `../img/map-figure-01.png`,
          map_syntax: `array.map((element) => {
            console.log(element)
          })`,
          map_description: ""
        },
        filter: {
          filter_img: '',
          filter_syntax: '["A", "B", "C"].filter(element => element === "B");',
          filter_description: `let filtered = ["A", "B", "C"].filter(element => element === "B"));
          console.log(filtered[0]) // B`
        },
        for_each: {
          for_each_img: '',
          for_each_syntax: '["A", "B"].forEach(element => console.log(element));' 
        }
      },
    },
    objects: {
      object_methods: {
        for_in: {
          for_in_img: `../img/for_in-figure-01.png`,
          for_in_description: ""
        },
      },

    },
    classes: {

    }
  },
  {topic: 'JavaScript Notes'},
  {topic: 'Express Coding for Backend Servers',
    minimal_server_setup: [
      `const express = require('express')
      const app = express()
      const port = 3000
      
      app.get('/', (req, res) => {
        res.send('Hello World!')
      })
      
      app.listen(port, () => {
        console.log(Example app listening on port $ {port})
      })`
  ]},
  {topic: 'SQL Cheatsheet'},
  {topic: 'React Cheatshet'},
  {topic: 'PERN Concepts'},
  {topic: 'Data Structures'},
  {topic: 'Web Development Roles'},
  {topic: 'Example of an Image Carousel'},
  {topic: 'How to Build An Image Carousel'},
  {topic: 'Test of adding multiple classes to an HTML Node'}
]

export default data;
