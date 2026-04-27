<div align="center">

<!-- Animated title banner via SVG -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=3000&pause=1000&color=42B883&center=true&vCenter=true&width=600&lines=Vue.js+Tutorial+%F0%9F%9A%80;Learn+Vue+3+Step+by+Step;From+HTML+to+SPA+Design" alt="Vue.js Tutorial Animated Title" />

<br/>

<!-- SEO-rich tagline -->
<h1>🟢 Vue.js 3 Tutorial — From Zero to Single-Page App</h1>

<p><strong>A hands-on, beginner-friendly Vue.js 3 tutorial repository covering core concepts: reactive data binding, dynamic navigation, CSS integration with Bootstrap 5, and SPA design patterns.</strong></p>

<!-- Badges -->
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42B883?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/Gseyal/vue.js_tutorial/pulls)
[![Stars](https://img.shields.io/github/stars/Gseyal/vue.js_tutorial?style=for-the-badge&logo=github)](https://github.com/Gseyal/vue.js_tutorial/stargazers)

</div>

---

## 📑 Table of Contents

| # | Topic | Concepts Covered |
|---|-------|-----------------|
| 1 | [🌱 Introduction](#-introduction) | Plain HTML → Vue 3 reactive data |
| 2 | [🧭 Navigation](#-navigation) | Static links · `v-for` loop · dynamic routing |
| 3 | [🎨 CSS Integration](#-css-integration) | Bootstrap 5 · active class binding · `v-bind` |
| 4 | [🏗️ SPA Design](#%EF%B8%8F-spa-design) | Single-Page App · tab switching · no reload |
| 5 | [⚡ Quick Start](#-quick-start) | Clone & open in browser |
| 6 | [🗺️ Project Structure](#%EF%B8%8F-project-structure) | Folder overview |
| 7 | [🤝 Contributing](#-contributing) | How to contribute |

---

## 🌱 Introduction

> **Keywords:** Vue.js tutorial, Vue 3 `createApp`, reactive data binding, template syntax, mustache syntax

Vue.js is a progressive JavaScript framework for building user interfaces. This section shows how to take a **static HTML page** and make it fully **reactive** with just a few lines of Vue 3.

<details>
<summary><strong>📄 Before — Plain HTML (<code>Introduction/intro.html</code>)</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Introduction</title>
</head>
<body>
  <h1>Introduction</h1>
  <p>This is Basic Html, waiting to upgrade with Vue.js</p>
</body>
</html>
```

</details>

<details>
<summary><strong>✅ After — Vue 3 Reactive App (<code>Introduction/upgraded.html</code>)</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Introduction</title>
  <!-- Load Vue 3 from CDN — no build step needed! -->
  <script src="https://unpkg.com/vue@3"></script>
</head>
<body>
  <div id="header">
    <h1>{{ introtitle }}</h1>  <!-- mustache syntax renders reactive data -->
    <p>{{ introsub }}</p>
  </div>

  <script>
    Vue.createApp({
      data() {           // data() returns a reactive state object
        return {
          introtitle: "Introduction",
          introsub:   "This is Basic Html, Upgrade with Vue.js"
        }
      }
    }).mount('#header')  // mount to the #header element
  </script>
</body>
</html>
```

</details>

### 💡 Key Concepts

| Concept | Description |
|---------|-------------|
| `Vue.createApp({})` | Creates a new Vue application instance |
| `data()` | Returns a reactive state object — any change triggers DOM update |
| `{{ variable }}` | Mustache/template syntax — renders data in the HTML |
| `.mount('#id')` | Attaches the Vue app to a DOM element |

---

## 🧭 Navigation

> **Keywords:** Vue.js navigation, v-for directive, v-bind directive, Bootstrap nav tabs, dynamic menu

This section builds a **dynamic navigation bar** — first with a static array, then with a `v-for` loop that automatically renders links from a data array.

<details>
<summary><strong>📄 Static Array Navigation (<code>Navigation/nav.html</code>)</strong></summary>

```html
<nav>
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link" href="#">{{ links[0] }}</a></li>
    <li class="nav-item"><a class="nav-link" href="#">{{ links[1] }}</a></li>
    <li class="nav-item"><a class="nav-link disabled">{{ links[2] }}</a></li>
  </ul>
</nav>

<script>
  Vue.createApp({
    data() {
      return {
        links: ['Home', 'Features', 'Pricing']
      }
    }
  }).mount('nav');
</script>
```

</details>

<details>
<summary><strong>✅ Dynamic Loop Navigation (<code>Navigation/nav_for.html</code>)</strong></summary>

```html
<nav>
  <ul class="nav nav-tabs">
    <!-- v-for loops over the links array, binding url & title automatically -->
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
          { text: 'Pricing',  url: 'pricing.html',  description: 'View our pricing options' }
        ]
      }
    }
  }).mount('nav');
</script>
```

</details>

### 💡 Key Concepts

| Directive | Shorthand | Description |
|-----------|-----------|-------------|
| `v-for="(item, index) in array"` | — | Loops over an array, renders one element per item |
| `v-bind:href="value"` | `:href` | Dynamically binds an HTML attribute to a data value |
| `v-bind:title="value"` | `:title` | Renders a tooltip from data |

> 📝 **Pro tip:** `v-bind:` can always be shortened to just `:` — e.g., `:href`, `:class`, `:title`.

---

## 🎨 CSS Integration

> **Keywords:** Vue.js Bootstrap integration, dynamic class binding, v-bind class, active tab, Bootstrap 5 nav

This section integrates **Bootstrap 5** with Vue's `:class` binding to automatically highlight the active navigation tab.

<details>
<summary><strong>✅ Active Class Binding (<code>css_integration/spa.html</code>)</strong></summary>

```html
<nav>
  <ul class="nav nav-tabs">
    <li v-for="(page, index) in pages" class="nav-item" :key="index">
      <a class="nav-link"
         :class="{ active: activepage == index }"  <!-- adds 'active' CSS class when selected -->
         :href="page.url"
         :title="page.description"
         @click.prevent="activepage = index">      <!-- @click is shorthand for v-on:click -->
        {{ page.text }}
      </a>
    </li>
  </ul>
</nav>

<div id="header" class="container">
  <h1>{{ pages[activepage].pagetitle }}</h1>
  <p>{{ pages[activepage].pagesub }}</p>
</div>
```

</details>

### 💡 Key Concepts

| Directive | Shorthand | Description |
|-----------|-----------|-------------|
| `v-bind:class="{ 'cls': condition }"` | `:class` | Adds CSS class when condition is true |
| `v-on:click.prevent="handler"` | `@click.prevent` | Handles click & prevents default browser action |
| `activepage = index` | inline handler | Updates reactive state to switch active tab |

---

## 🏗️ SPA Design

> **Keywords:** Vue.js SPA, single-page application, tab-based routing, no page reload, dynamic content switching

The crown jewel of this tutorial — a fully working **Single-Page Application** where clicking navigation tabs swaps content **without any page reload**, all driven by Vue reactive state.

<details>
<summary><strong>✅ Full SPA Implementation (<code>spa_design/spa.html</code>)</strong></summary>

```html
<body>
  <nav>
    <ul class="nav nav-tabs">
      <li v-for="(page, index) in pages" class="nav-item" :key="index">
        <a class="nav-link"
           :href="page.url"
           :title="page.description"
           @click.prevent="activepage = index">
          {{ page.text }}
        </a>
      </li>
    </ul>
  </nav>

  <div id="header" class="container">
    <h1>{{ pages[activepage].pagetitle }}</h1>
    <p>{{ pages[activepage].pagesub }}</p>
  </div>

  <script>
    Vue.createApp({
      data() {
        return {
          activepage: 0,                          // tracks which tab is selected
          pages: [
            { text: 'Home',     url: 'home.html',     description: 'Go to Home Page',           pagetitle: 'Welcome Home', pagesub: 'This is Home Page' },
            { text: 'Features', url: 'features.html', description: 'Explore our features',       pagetitle: 'Features',     pagesub: 'Explore our features' },
            { text: 'Pricing',  url: 'pricing.html',  description: 'View our pricing options',   pagetitle: 'Pricing',      pagesub: 'View our pricing options' }
          ]
        }
      }
    }).mount('body')                              // mount to entire body for page-wide reactivity
  </script>
</body>
```

</details>

### 💡 How the SPA Pattern Works

```
User clicks tab
      │
      ▼
@click.prevent="activepage = index"
      │
      ▼
Vue detects reactive state change (activepage)
      │
      ▼
DOM updates automatically — new title & content rendered
      │
      ▼
No page reload ✅  No router library needed ✅
```

---

## ⚡ Quick Start

No build tools, no npm install — just open any HTML file in your browser!

```bash
# 1. Clone the repository
git clone https://github.com/Gseyal/vue.js_tutorial.git

# 2. Navigate into it
cd vue.js_tutorial

# 3. Open any lesson directly in your browser
open Introduction/upgraded.html   # macOS
xdg-open Introduction/upgraded.html  # Linux
start Introduction/upgraded.html  # Windows
```

> All examples load **Vue 3** and **Bootstrap 5** from CDN — no build step required.

---

## 🗺️ Project Structure

```
vue.js_tutorial/
│
├── 📁 Introduction/
│   ├── intro.html        ← Plain HTML (before Vue)
│   └── upgraded.html     ← Vue 3 reactive data binding
│
├── 📁 Navigation/
│   ├── nav.html          ← Static array navigation
│   └── nav_for.html      ← Dynamic v-for loop navigation
│
├── 📁 css_integration/
│   └── spa.html          ← Bootstrap 5 + active class binding
│
└── 📁 spa_design/
    └── spa.html          ← Full Single-Page Application
```

---

## 📚 Vue 3 Directives Cheat Sheet

| Directive | Shorthand | Use Case |
|-----------|-----------|----------|
| `v-bind:attr` | `:attr` | Bind HTML attribute to data |
| `v-on:event` | `@event` | Listen for DOM events |
| `v-for="item in list"` | — | Loop and render a list |
| `v-if="condition"` | — | Conditionally render element |
| `v-model="value"` | — | Two-way data binding (forms) |
| `{{ expression }}` | — | Render data in template (mustache) |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/your-topic`
3. **Commit** your changes: `git commit -m 'Add lesson on Vue components'`
4. **Push** to the branch: `git push origin feature/your-topic`
5. **Open** a Pull Request

---

<div align="center">

**⭐ Star this repo if it helped you learn Vue.js!**

[![GitHub stars](https://img.shields.io/github/stars/Gseyal/vue.js_tutorial?style=social)](https://github.com/Gseyal/vue.js_tutorial)

Made with ❤️ and ☕ — Happy coding with Vue.js 🟢

</div>
