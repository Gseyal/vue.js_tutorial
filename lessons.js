/* eslint-disable */
// Vue Bit by Bit — Lesson Data
// Each lesson: id, title, subtitle, icon, explanation (HTML), startingCode, solutionCode, hints[], concepts[], quiz[]

const LESSONS = [
  // ─────────────────────────────────────────────────────────────────
  // LESSON 1 — Hello Vue
  // ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Hello Vue',
    subtitle: 'Turn a plain HTML page into a reactive Vue app',
    icon: '🌱',

    explanation: `
      <h4>What is Vue.js?</h4>
      <p>Vue.js is a <strong>progressive JavaScript framework</strong> for building user interfaces.
         "Progressive" means you can adopt it incrementally — start with a single reactive element,
         then scale up to a full Single-Page Application.</p>
      <p>The magic of Vue is <strong>reactivity</strong>: when your data changes, the DOM updates
         automatically. No manual <code>document.getElementById</code>, no re-renders by hand.</p>

      <h4>The three building blocks</h4>
      <ol>
        <li><strong><code>Vue.createApp({ ... })</code></strong> — creates a new Vue application.</li>
        <li><strong><code>data() { return { ... } }</code></strong> — a function that returns your
            reactive state. Change a value here and the UI re-renders instantly.</li>
        <li><strong><code>.mount('#app')</code></strong> — attaches ("mounts") the app to a DOM element.
            Everything inside <code>#app</code> becomes a Vue template.</li>
      </ol>

      <h4>Mustache syntax <code>{{ }}</code></h4>
      <p>Inside a mounted element, wrap any data property in double curly braces to render it:</p>
      <pre><code>&lt;h1&gt;{{ title }}&lt;/h1&gt;</code></pre>
      <p>Vue evaluates the expression inside the braces and keeps it in sync with your data.</p>

      <h4>No build step needed</h4>
      <p>Just drop one <code>&lt;script&gt;</code> tag in your HTML and you're ready:</p>
      <pre><code>&lt;script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"&gt;&lt;/script&gt;</code></pre>
    `,

    startingCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction</title>
</head>
<body>
    <h1>Introduction</h1>
    <p>This is plain HTML, waiting to be upgraded with Vue.js</p>
</body>
</html>`,

    solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Vue</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
</head>
<body>
    <div id="app">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
    </div>

    <script>
        Vue.createApp({
            data() {
                return {
                    title: 'Hello, Vue! 🟢',
                    subtitle: 'This page is now powered by reactive data!'
                }
            }
        }).mount('#app')
    <\/script>
</body>
</html>`,

    hints: [
      'Add the Vue 3 CDN script in <code>&lt;head&gt;</code>: <code>&lt;script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"&gt;&lt;/script&gt;</code>',
      'Wrap your page content in a container div and give it an id: <code>&lt;div id="app"&gt;...&lt;/div&gt;</code>',
      'Replace the hard-coded text with template variables: <code>&lt;h1&gt;{{ title }}&lt;/h1&gt;</code>',
      'After the HTML, add a &lt;script&gt; block: <code>Vue.createApp({ data() { return { title: "..." } } }).mount("#app")</code>'
    ],

    concepts: [
      { directive: 'Vue.createApp({ })',        description: 'Creates a new Vue application instance' },
      { directive: 'data() { return { ... } }', description: 'Returns the reactive state object — any change triggers a DOM update' },
      { directive: '{{ variable }}',            description: 'Mustache syntax — renders a data property inside the HTML template' },
      { directive: '.mount("#id")',             description: 'Attaches the Vue app to the DOM element with the given id' }
    ],

    quiz: [
      {
        question: 'What does .mount("#app") do?',
        options: [
          'Adds CSS styling to the #app element',
          'Attaches the Vue application to the DOM element with id "app"',
          'Creates a new HTML element called app',
          'Loads Vue.js from the CDN'
        ],
        answer: 1
      },
      {
        question: 'Which syntax displays a Vue data variable called "title" in the HTML?',
        options: [
          '[[ title ]]',
          '<vue>title</vue>',
          '{{ title }}',
          '@title'
        ],
        answer: 2
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // LESSON 2 — Static Navigation
  // ─────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Static Navigation',
    subtitle: 'Build a Bootstrap nav bar driven by a Vue data array',
    icon: '📋',

    explanation: `
      <h4>Storing lists in Vue data</h4>
      <p>Any JavaScript value can live in <code>data()</code> — including arrays.
         Once an array is reactive, you can read its elements directly in your template.</p>
      <pre><code>data() {
    return {
        links: ['Home', 'Features', 'Pricing']
    }
}</code></pre>

      <h4>Accessing array items with index notation</h4>
      <p>Use square-bracket syntax inside <code>{{ }}</code> just like in regular JavaScript:</p>
      <pre><code>&lt;a href="#"&gt;{{ links[0] }}&lt;/a&gt;  &lt;!-- renders "Home" --&gt;
&lt;a href="#"&gt;{{ links[1] }}&lt;/a&gt;  &lt;!-- renders "Features" --&gt;</code></pre>

      <h4>Bootstrap nav-tabs</h4>
      <p>Bootstrap 5 provides ready-made tab styling. The key classes are:</p>
      <ul>
        <li><code>nav nav-tabs</code> on the <code>&lt;ul&gt;</code></li>
        <li><code>nav-item</code> on each <code>&lt;li&gt;</code></li>
        <li><code>nav-link</code> on each <code>&lt;a&gt;</code> — add <code>active</code> for the selected tab, <code>disabled</code> for a greyed-out link</li>
      </ul>

      <h4>Mounting to a semantic element</h4>
      <p>You can mount a Vue app directly to any element, not just a <code>&lt;div&gt;</code>:</p>
      <pre><code>Vue.createApp({ ... }).mount('nav')</code></pre>
      <p>Everything inside <code>&lt;nav&gt;</code> becomes a Vue template.</p>
    `,

    startingCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
    <!-- TODO: add a <nav> here with Bootstrap nav-tabs
         showing links[0], links[1], and links[2] from the data below -->

    <script>
        Vue.createApp({
            data() {
                return {
                    links: ['Home', 'Features', 'Pricing']
                }
            }
        }).mount('nav')
    <\/script>
</body>
</html>`,

    solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
    <nav>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">{{ links[0] }}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{ links[1] }}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">{{ links[2] }}</a>
            </li>
        </ul>
    </nav>

    <script>
        Vue.createApp({
            data() {
                return {
                    links: ['Home', 'Features', 'Pricing']
                }
            }
        }).mount('nav')
    <\/script>
</body>
</html>`,

    hints: [
      'Add a <code>&lt;nav&gt;</code> element above the <code>&lt;script&gt;</code> tag — Vue will mount to it.',
      'Inside <code>&lt;nav&gt;</code>, add: <code>&lt;ul class="nav nav-tabs"&gt;&lt;/ul&gt;</code>',
      'Inside the <code>&lt;ul&gt;</code>, add three <code>&lt;li class="nav-item"&gt;</code> elements, each with <code>&lt;a class="nav-link"&gt;</code>',
      'Display the array items with <code>{{ links[0] }}</code>, <code>{{ links[1] }}</code>, and <code>{{ links[2] }}</code> — add <code>active</code> to the first link and <code>disabled</code> to the last.'
    ],

    concepts: [
      { directive: 'links: [...]',           description: 'Declare a reactive array in data() — any JS value is allowed' },
      { directive: '{{ links[0] }}',         description: 'Access array elements by index inside the template' },
      { directive: 'nav nav-tabs',           description: 'Bootstrap classes that render a tab-style navigation bar' },
      { directive: 'nav-link active',        description: 'Bootstrap class that highlights the currently selected tab' },
      { directive: 'nav-link disabled',      description: 'Bootstrap class that greys out and disables a link' }
    ],

    quiz: [
      {
        question: 'How do you access the second item of a Vue data array named "items" in a template?',
        options: [
          'items.1',
          'items[1]',
          'items(1)',
          'items.get(1)'
        ],
        answer: 1
      },
      {
        question: 'Which Bootstrap class combination creates tab-style navigation?',
        options: [
          'nav nav-list',
          'nav nav-menu',
          'nav nav-tabs',
          'nav nav-strip'
        ],
        answer: 2
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // LESSON 3 — Dynamic Navigation (v-for)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Dynamic Navigation',
    subtitle: 'Loop with v-for and bind attributes with v-bind / :',
    icon: '🔁',

    explanation: `
      <h4>The problem with static index access</h4>
      <p>Writing <code>{{ links[0] }}</code>, <code>{{ links[1] }}</code> for every item doesn't scale.
         Add a fourth page and you have to write a fourth <code>&lt;li&gt;</code> by hand.</p>

      <h4>v-for — loop over arrays</h4>
      <p>The <code>v-for</code> directive renders one element <em>for each</em> item in an array:</p>
      <pre><code>&lt;li v-for="(link, index) in links" :key="index" class="nav-item"&gt;
    {{ link.text }}
&lt;/li&gt;</code></pre>
      <ul>
        <li><code>link</code> is the current item on each iteration.</li>
        <li><code>index</code> is the zero-based position (0, 1, 2…).</li>
        <li><code>:key</code> gives Vue a stable identifier so it can update the DOM efficiently.</li>
      </ul>

      <h4>Objects in arrays</h4>
      <p>Store richer data by upgrading each array item from a plain string to an object:</p>
      <pre><code>links: [
    { text: 'Home',     url: 'home.html',     description: 'Go to Home Page' },
    { text: 'Features', url: 'features.html', description: 'Explore our features' },
    { text: 'Pricing',  url: 'pricing.html',  description: 'View pricing' }
]</code></pre>

      <h4>v-bind and the : shorthand</h4>
      <p>Use <code>v-bind:attr</code> (or the shorthand <code>:attr</code>) to bind an HTML attribute
         to a reactive value:</p>
      <pre><code>&lt;a v-bind:href="link.url" :title="link.description"&gt;{{ link.text }}&lt;/a&gt;</code></pre>
      <p>The <code>:</code> prefix tells Vue "evaluate this as a JavaScript expression", not a plain string.</p>
    `,

    startingCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
    <nav>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">{{ links[0] }}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{ links[1] }}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">{{ links[2] }}</a>
            </li>
        </ul>
    </nav>

    <script>
        Vue.createApp({
            data() {
                return {
                    links: ['Home', 'Features', 'Pricing']
                }
            }
        }).mount('nav')
    <\/script>
</body>
</html>`,

    solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Navigation</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
    <nav>
        <ul class="nav nav-tabs">
            <li v-for="(link, index) in links" class="nav-item" :key="index">
                <a class="nav-link"
                   v-bind:href="link.url"
                   :title="link.description">{{ link.text }}</a>
            </li>
        </ul>
    </nav>

    <script>
        Vue.createApp({
            data() {
                return {
                    links: [
                        { text: 'Home',     url: 'home.html',     description: 'Go to Home Page' },
                        { text: 'Features', url: 'features.html', description: 'Explore our features' },
                        { text: 'Pricing',  url: 'pricing.html',  description: 'View our pricing' }
                    ]
                }
            }
        }).mount('nav')
    <\/script>
</body>
</html>`,

    hints: [
      'Upgrade <code>links</code> from an array of strings to an array of objects: <code>[{ text: "Home", url: "home.html", description: "..." }, ...]</code>',
      'Replace the three separate <code>&lt;li&gt;</code> elements with a single one: <code>&lt;li v-for="(link, index) in links" class="nav-item" :key="index"&gt;</code>',
      'Inside the loop, use <code>{{ link.text }}</code> to display the current item\'s text property',
      'Bind the href and title with the shorthand: <code>:href="link.url"</code> and <code>:title="link.description"</code>'
    ],

    concepts: [
      { directive: 'v-for="(item, i) in list"', description: 'Loop — renders this element once per item in the array' },
      { directive: ':key="i"',                   description: 'Unique key per item; helps Vue update the DOM efficiently' },
      { directive: 'v-bind:href="value"',        description: 'Bind the href attribute to a reactive data value' },
      { directive: ':attr="value"',              description: 'Shorthand for v-bind:attr — the leading : means "evaluate as JS"' },
      { directive: 'link.text / link.url',       description: 'Access object properties inside a v-for loop using dot notation' }
    ],

    quiz: [
      {
        question: 'What does v-for="(item, index) in items" do?',
        options: [
          'Runs once for the very first item only',
          'Loops over `items`, creating one copy of this element per item, exposing `item` (current value) and `index` (position)',
          'Filters the items array by index',
          'Creates an automatically numbered HTML list'
        ],
        answer: 1
      },
      {
        question: 'What is the shorthand for v-bind:href?',
        options: [
          '@href',
          '*href',
          '#href',
          ':href'
        ],
        answer: 3
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // LESSON 4 — Active Tab Styling
  // ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Active Tab Styling',
    subtitle: 'Bind CSS classes and handle click events with reactive state',
    icon: '🎨',

    explanation: `
      <h4>Tracking which tab is active</h4>
      <p>Add a single integer to <code>data()</code> to track the currently selected tab:</p>
      <pre><code>data() {
    return {
        activepage: 0,   // 0 = first tab selected
        pages: [ ... ]
    }
}</code></pre>

      <h4>:class — conditional CSS classes</h4>
      <p>The <code>:class</code> binding accepts an object where each key is a class name and the
         value is a boolean condition. The class is added only when the condition is true:</p>
      <pre><code>&lt;a :class="{ active: activepage === index }"&gt;...&lt;/a&gt;</code></pre>
      <p>Bootstrap's <code>active</code> class highlights the selected tab.
         Vue adds it automatically on the right element.</p>

      <h4>@click.prevent — event handling</h4>
      <p>The <code>@click</code> directive (shorthand for <code>v-on:click</code>) listens for click events.
         The <code>.prevent</code> modifier calls <code>event.preventDefault()</code> so the browser
         doesn't try to follow the <code>href</code>:</p>
      <pre><code>&lt;a @click.prevent="activepage = index"&gt;...&lt;/a&gt;</code></pre>
      <p>Clicking a tab sets <code>activepage</code> to that tab's index — Vue re-renders instantly.</p>

      <h4>Displaying reactive content</h4>
      <p>Use <code>activepage</code> to index into the <code>pages</code> array and show the
         current page's content:</p>
      <pre><code>&lt;h1&gt;{{ pages[activepage].pagetitle }}&lt;/h1&gt;
&lt;p&gt;{{ pages[activepage].pagesub }}&lt;/p&gt;</code></pre>
    `,

    startingCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Active Tab</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
    <nav>
        <ul class="nav nav-tabs">
            <li v-for="(page, index) in pages" class="nav-item" :key="index">
                <a class="nav-link"
                   :href="page.url"
                   :title="page.description">{{ page.text }}</a>
            </li>
        </ul>
    </nav>

    <!-- TODO: make the tab highlight on click and show the page content below -->

    <script>
        Vue.createApp({
            data() {
                return {
                    pages: [
                        { text: 'Home',     url: '#', description: 'Home page' },
                        { text: 'Features', url: '#', description: 'Features page' },
                        { text: 'Pricing',  url: '#', description: 'Pricing page' }
                    ]
                }
            }
        }).mount('body')
    <\/script>
</body>
</html>`,

    solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Active Tab</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
    <nav>
        <ul class="nav nav-tabs">
            <li v-for="(page, index) in pages" class="nav-item" :key="index">
                <a class="nav-link"
                   :class="{ active: activepage === index }"
                   :href="page.url"
                   :title="page.description"
                   @click.prevent="activepage = index">{{ page.text }}</a>
            </li>
        </ul>
    </nav>

    <div class="container mt-3">
        <h1>{{ pages[activepage].pagetitle }}</h1>
        <p>{{ pages[activepage].pagesub }}</p>
    </div>

    <script>
        Vue.createApp({
            data() {
                return {
                    activepage: 0,
                    pages: [
                        { text: 'Home',     url: '#', description: 'Home page',     pagetitle: 'Welcome Home',    pagesub: 'This is the Home page.' },
                        { text: 'Features', url: '#', description: 'Features page', pagetitle: 'Our Features',    pagesub: 'Explore what we have to offer.' },
                        { text: 'Pricing',  url: '#', description: 'Pricing page',  pagetitle: 'Pricing Plans',   pagesub: 'Simple and transparent pricing.' }
                    ]
                }
            }
        }).mount('body')
    <\/script>
</body>
</html>`,

    hints: [
      'Add <code>activepage: 0</code> to <code>data()</code>, and add <code>pagetitle</code> and <code>pagesub</code> fields to each page object.',
      'On the <code>&lt;a&gt;</code> tag, add a click handler: <code>@click.prevent="activepage = index"</code>',
      'Add a conditional class binding: <code>:class="{ active: activepage === index }"</code> to the <code>&lt;a&gt;</code> tag.',
      'Below <code>&lt;nav&gt;</code>, add a content div: <code>&lt;div class="container mt-3"&gt;&lt;h1&gt;{{ pages[activepage].pagetitle }}&lt;/h1&gt;&lt;/div&gt;</code>'
    ],

    concepts: [
      { directive: 'activepage: 0',                         description: 'Reactive integer tracking which tab is currently selected' },
      { directive: ':class="{ active: condition }"',        description: 'Adds the CSS class "active" only when the condition is true' },
      { directive: '@click.prevent="activepage = index"',   description: 'On click, update state and prevent the browser from following href' },
      { directive: 'pages[activepage].pagetitle',           description: 'Access the current page\'s data by using activepage as the array index' }
    ],

    quiz: [
      {
        question: 'What does :class="{ active: activepage === index }" do?',
        options: [
          'Always adds the CSS class "active" to every tab',
          'Adds the CSS class "active" only when activepage equals index',
          'Removes Bootstrap styling from the element',
          'Creates a new CSS variable called activepage'
        ],
        answer: 1
      },
      {
        question: 'Why use @click.prevent instead of @click on the navigation links?',
        options: [
          '.prevent makes the click handler run faster',
          '.prevent stops the browser from navigating to the href URL, keeping the user on the same page',
          '.prevent is required for Bootstrap nav-tabs to work correctly with Vue',
          '.prevent automatically saves the clicked index to localStorage'
        ],
        answer: 1
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // LESSON 5 — Full SPA
  // ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Full SPA',
    subtitle: 'Mount Vue to the whole page and build a true Single-Page App',
    icon: '🏗️',

    explanation: `
      <h4>Why the nav alone isn't enough</h4>
      <p>If you mount Vue to <code>&lt;nav&gt;</code> only, Vue's reactive state lives inside the
         navigation element. The rest of the page — your content area — is outside Vue's control
         and stays static no matter which tab you click.</p>

      <h4>Mount to body — share state everywhere</h4>
      <p>By mounting to <code>body</code>, the <em>entire page</em> becomes a Vue template.
         Both the navigation and the content area can now read from the same reactive
         <code>activepage</code> variable:</p>
      <pre><code>Vue.createApp({ ... }).mount('body')</code></pre>

      <h4>The SPA pattern in four lines</h4>
      <pre><code>// 1. Track selected tab
activepage: 0

// 2. Loop + click handler in nav
&lt;li v-for="(page, i) in pages" :key="i"&gt;
  &lt;a @click.prevent="activepage = i"
     :class="{ active: activepage === i }"&gt;{{ page.text }}&lt;/a&gt;
&lt;/li&gt;

// 3. Display content driven by state
&lt;h1&gt;{{ pages[activepage].pagetitle }}&lt;/h1&gt;
&lt;p&gt;{{ pages[activepage].pagesub }}&lt;/p&gt;</code></pre>

      <p>Clicking a tab updates <code>activepage</code> → Vue re-renders both the nav highlight
         <em>and</em> the content — <strong>no page reload, no router library needed</strong>.</p>

      <h4>How data flows</h4>
      <pre><code>User clicks tab
      │
      ▼
@click.prevent sets activepage = index
      │
      ▼
Vue detects reactive state change
      │
      ▼
:class re-evaluates  →  active highlight moves
pages[activepage]  →  content area updates
      │
      ▼
No page reload ✅  No router needed ✅</code></pre>
    `,

    startingCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPA Design</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
    <nav>
        <ul class="nav nav-tabs">
            <li v-for="(page, index) in pages" class="nav-item" :key="index">
                <a class="nav-link"
                   :class="{ active: activepage === index }"
                   :href="page.url"
                   :title="page.description"
                   @click.prevent="activepage = index">{{ page.text }}</a>
            </li>
        </ul>
    </nav>

    <!-- ⚠️ This content is STATIC — clicking tabs won't change it!
         The Vue app is only mounted to <nav>, so the data below is outside its reach. -->
    <div class="container mt-3">
        <h1>Welcome Home</h1>
        <p>This content is hard-coded. Clicking the tabs above changes the highlight
           but not this text, because the content area is outside Vue's mounted scope.</p>
    </div>

    <script>
        // Only <nav> is reactive — the content div above is ignored by Vue
        Vue.createApp({
            data() {
                return {
                    activepage: 0,
                    pages: [
                        { text: 'Home',     url: '#', description: 'Home page' },
                        { text: 'Features', url: '#', description: 'Features page' },
                        { text: 'Pricing',  url: '#', description: 'Pricing page' }
                    ]
                }
            }
        }).mount('nav')
    <\/script>
</body>
</html>`,

    solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full SPA</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
    <nav>
        <ul class="nav nav-tabs">
            <li v-for="(page, index) in pages" class="nav-item" :key="index">
                <a class="nav-link"
                   :class="{ active: activepage === index }"
                   :href="page.url"
                   :title="page.description"
                   @click.prevent="activepage = index">{{ page.text }}</a>
            </li>
        </ul>
    </nav>

    <!-- ✅ Now this reacts to tab clicks — it's inside Vue's scope! -->
    <div class="container mt-3">
        <h1>{{ pages[activepage].pagetitle }}</h1>
        <p>{{ pages[activepage].pagesub }}</p>
    </div>

    <script>
        // Mount to body — the entire page is now a Vue template
        Vue.createApp({
            data() {
                return {
                    activepage: 0,
                    pages: [
                        { text: 'Home',     url: '#', description: 'Home page',
                          pagetitle: 'Welcome Home 🏠',
                          pagesub: 'This content updates without a page reload!' },
                        { text: 'Features', url: '#', description: 'Features page',
                          pagetitle: 'Our Features ⚡',
                          pagesub: 'Reactive UI with no build step, powered by Vue 3.' },
                        { text: 'Pricing',  url: '#', description: 'Pricing page',
                          pagetitle: 'Pricing Plans 💰',
                          pagesub: 'Vue 3 is open source and completely free.' }
                    ]
                }
            }
        }).mount('body')
    <\/script>
</body>
</html>`,

    hints: [
      'Notice the problem: <code>.mount("nav")</code> means only the <code>&lt;nav&gt;</code> is reactive. The content <code>&lt;div&gt;</code> is outside Vue.',
      'Add <code>pagetitle</code> and <code>pagesub</code> fields to each object in the <code>pages</code> array.',
      'Change <code>.mount("nav")</code> to <code>.mount("body")</code> so the whole page shares the same Vue state.',
      'Replace the static <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code> with reactive expressions: <code>{{ pages[activepage].pagetitle }}</code> and <code>{{ pages[activepage].pagesub }}</code>'
    ],

    concepts: [
      { directive: '.mount("body")',                      description: 'Makes the entire page body a Vue template — nav and content share state' },
      { directive: 'pages[activepage].pagetitle',         description: 'Read the current page\'s title by using activepage as the array index' },
      { directive: 'No page reload',                      description: 'Vue updates the DOM in-place; the browser never fetches a new HTML file' },
      { directive: 'Single-Page Application (SPA)',       description: 'All content lives in one HTML file; navigation is driven by reactive state' }
    ],

    quiz: [
      {
        question: 'What is the key difference between .mount("nav") and .mount("body")?',
        options: [
          'mount("body") is faster than mount("nav")',
          'mount("nav") only makes the <nav> element reactive; mount("body") makes the entire page reactive so nav and content can share state',
          'mount("body") requires a build tool; mount("nav") does not',
          'There is no difference — Vue controls the whole page either way'
        ],
        answer: 1
      },
      {
        question: 'What is the main advantage of the SPA pattern used in this lesson?',
        options: [
          'It makes the initial page load faster',
          'It requires a backend server to work',
          'Clicking tabs switches content without any page reload, driven entirely by reactive Vue state',
          'It automatically saves user data to a database'
        ],
        answer: 2
      }
    ]
  }
];
