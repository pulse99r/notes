const data = [
  {'01': `How to Phrase it Without Saying "You're Wrong!"`,
  '01.0': `Expressing alternative ideas, processes, and methods assertively without making others feel like they're wrong requires careful communication. Here are some tips:`,
  '1.01': `Use "I" Statements**: Instead of saying "you should do this", say "I suggest" or "I believe". This shifts the focus from what the other person is doing wrong to what you believe could be done differently.`,
  '01.02': `Acknowledge Other Views**: Before presenting your alternative, acknowledge the current method or idea. You might say something like, "I understand that currently we are doing X, and it has been effective in these ways...".`,
  '01.03': `Present Alternatives as Options**: Introduce your alternative as another option to consider, rather than the only correct way. For example, you could say, "One option we might consider is...".`,
  '01.04': `Use Positive Language**: Frame your alternative in a positive light. For example, instead of saying "This process is too slow", you could say "We might speed up the process by...".`,
  '01.05': `Explain the Benefits**: Clearly outline the benefits of your alternative idea, process, or method. If possible, provide evidence or examples to support your points.`,
  '01.06': `Be Open to Discussion**: Make it clear that you're open to discussion and feedback about your alternative. Encourage others to ask questions and share their thoughts.`,
  '01.7': `Avoid Absolute Terms**: Avoid using words like "always", "never", "best", or "worst". These words can make your alternative seem like the only correct option, which can be off-putting.`,
  '01.08': `Remember, the goal is to communicate your ideas in a way that is respectful of others' opinions and open to collaboration.`
  },
  {'02': 'Agreement vs Alignment',
  '02.01': `Strong relationships don't need agreement. They need alignment.`,
  '02.02': `Agreement is having identical opinions. Alignment is having shared values.`,
  '02.03': `Agreement is taking the same path. Alignment is heading in the same direction`,
  '02.04': `Closeness is a matter of commitment, not consensus.`
  },
  {'03': 'HTML Notes',
    '03.0': ['Basic Structure of an HTMl File', './img/basic-html.png'],
    '03.01': {
      '03.01.0': 'The structure of HTML Tags typically have an opening an a closing tag.  For example the opening paragraph tag looks like "<p>" and the closing paragraph tag looks like "</p>.  The "p" stands for "paragraph". and both the opening and closing tags are surrounded by the less-than and greater-than symbols ',
      '03.01.0.i': '../img/html-cheatsheet.png',
      '03.01.01': ['<article> ... </article>'],
      '03.01.02': ['<body> ... </body>', 'The body contains all the information that actually gets displayed on the web page'],
      '03.01.03': ['<button>','Create a button to perform some action when clicked'],
      '03.01.04': ['<div> ... </div> ', 'The "div" tag allows information to be separated into divisions for organizational purposes.'],
      '03.01.05': ['em','Provide emphasis, may look like italic or bolding. This helps emphasize words of phrases for people with accessibility requirements.'],
      '03.01.06': ['figure','Used to group an image and it caption'],
      '03.01.07': ['figcaption','Optional; adds a caption for the image in a <figure>'],
      '03.01.08': ['<form> ... </form>','HTML forms are used to collect user input, which is sent to some place for storage.'],
      '03.1.09': ['<head> ... </head>', `The head area of HTML files contains meta information which DO NOT show up on the html page. Toms of the most noticeable items in the head are the link to CSS files, the connection to a javascript script file, links to fonts, a title which is displayed on the browser's tab`],
      '03.01.10': ['h1, h2, h3, h4, h5, h6','There are six levels of header text with h1 being the largest font and h6 being the smallest'],
      '03.01.11': ['<hr>','"hr" stands for "Horizontal Rule, which creates a horizontal line across the page.'],
      '03.01.12': ['<html> ... </html>', 'The html tag envelopes the entire html document.  It tells the browser that the page should be interpreted as html'],
      '03.01.13': ['input','Creates a field for to accept user entered data.'],
      '03.01.14': ['<img src= "image-location">','Allows images to be displayed on the web page.'],
      '03.01.15': ['<li> ... </li>','List Item - used inside either an Ordered List or and Un-ordered list.  Within an ordered list, list items are numbered sequentially.  Withing an un-ordered list the list items have bullets'],
      '03.01.16': ['<a href="http://www.url.com">title for url</a>', 'The anchor tag creates a link that connects (or links) to a resource on the web.'],
      '03.01.17': ['<p> ...</p> ','Paragraphs make it easier to organize paragraphs on a web page.  A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after the paragraph.'],
      '03.01.18': ['<ol> ... </ol>','Ordered list'],
      '03.01.19': ['<p>','Paragraph tags are used to hold paragraph, and by default is a block element, meaning it occupies the entire row on which it appears and has spacing before and after it to separate it from other elements on the page.'],
      '03.01.20': ['<span> ... </span>'],
      '03.01.21': ['<ul> ... </ul>','Un-ordered list'],
      '03.01.22': ['<table> ... </table>','The table tag is used to define tables in an HTML document.'],
      '03.01.23': ['<th> ... </th>','The table header tag is used to define the header row in tables in an HTML document.'],
      '03.01.24': ['<title>','Meta tag used in the "head" section of the html document. The title'],
      '03.01.25': ['<tr> ... </tr>','The table row tag is used to define rows in the body of HTML tables.'],
      '03.01.26': {
        '3.01.26.0': 'A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).',
        '03.01.26.01': ['<address>', '<article>', '<aside>', '<blockquote>', '<canvas>', '<dd>', '<div>', '<dl>', '<dt>', '<fieldset>', '<figcaption>', '<figure>', '<footer>', '<form>', '<h1>-<h6>', '<header>', '<hr>', '<li>', '<main>', '<nav>', '<noscript>', '<ol>', '<p>', '<pre>', '<section>', '<table>', '<tfoot>', '<ul>', '<video>', '</video>']},
      '03.01.27': {
        '03.01.27.0': 'An inline element does not start on a new line.  An inline element only takes up as much width as necessary.', 
        '03.01.27.01': ['<a>', '<abbr>', '<acronym>', '<b>', '<bdo>', '<big>', '<br>', '<button>', '<cite>', '<code>', '<dfn>', '<em>', '<i>', '<img>', '<input>', '<kbd>', '<label>', '<map>', '<object>', '<output>', '<q>', '<samp>', '<script>', '<select>', '<small>', '<span>', '<strong>', '<sub>', '<sup>', '<textarea>', '<time>', '<tt>', '<var>']
    },
    '03.02': {
        // [ element name, description ]
      '3.02.01': ['header', '<header> - Defines a header for a document or a section'],
      '3.02.02': ['nav', '<nav> - Defines a set of navigation links'],
      '3.02.03': ['section', '<section> - Defines a section in a document'],
      '3.02.04': ['article', '<article> - Defines an independent, self-contained content'],
      '3.02.05': ['aside', '<aside> - Defines content aside from the content (like a sidebar)'],
      '3.02.06': ['footer', '<footer> - Defines a footer for a document or a section'],
      '3.02.07': ['details', '<details> - Defines additional details that the user can open and close on demand'],
      '3.02.08': ['summary', '<summary> - Defines a heading for the <details> element']
    },
    '3.03': {
      '3.03.01': 'Arbitrary names or labels that can be used in CSS to target HTML elements for the application of style',
      '3.03.02': 'Arbitrary names or labels that can be used in CSS to target HTML elements for the application of style'
    }
  }, 
  
  {'3.04': 'CSS Notes'},
  {'3.05': {'3.05.0':'JavaScript Basics',
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
    27: ['yield', 'Provide a vale to be iterated; only used in generator functions']
    },
    operators: ['+ (plus)', '- (minus)', '* (multiply)', '/ divide', '% (modulus)'],
    arrays: [
      {array_methods: {
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
      }
    }
    ],
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

/* *** Refactoring to have content be pulled from the above data object instead of hard-coded onto HTML page.               *** */
// console.log(data[0].topic,data[0].intro,data[0]["1"],data[0]["2"],data[0]["3"])
let testArea = document.querySelector('.main-content')


for(let i = 0; i < data.length; i++) {
  let topicArea = Object.keys(data)
  console.log('topicArea:', topicArea.topic)
  let topicAreaX = topicArea[i];
  let theTopic = topicAreaX.topic;
  let theIntro = topicAreaX.intro ? topicAreaX.intro : "";
  
  console.log('Topic:', theTopic)
  console.log('Intro:', theIntro)
  
  let article = document.createElement('article')
  let h3 = document.createElement('h3')
  let articlePoints = document.createElement('div')
  let list = document.createElement('ol')
  
  h3.innerHTML = theTopic
  for(let j = 0; j < topicAreaX.length; j++) {
    
    // h3.innerHTML = topicAreaX.topic
    h3.setAttribute('id',`article-${j}-title`)
    articlePoints.setAttribute('id',`article-${j}-points`)
    
    if(topicArea[i] !== 'topic' && topicAreaX[j] !== 'intro'){
      let listItem = document.createElement('li')
      listItem.innerHTML = data[0][topicAreaX[j]]
      list.appendChild(listItem)
      console.log(topicAreaX[j], data[0][topicAreaX[j]])
    }
  }
  articlePoints.appendChild(list)
  article.appendChild(h3)
  article.appendChild(articlePoints)
  testArea.appendChild(article)
  // articlePoints.setAttribute('class', 'hide')
  article.setAttribute('class', 'hide')
}