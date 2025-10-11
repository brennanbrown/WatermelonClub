<div align="center">

# 🍉 Watermelon Club

### Palestine Solidarity Resources for Canadian Students

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-watermelonclub.org-FF6B6B?style=for-the-badge)](https://watermelonclub.org)
[![License](https://img.shields.io/badge/License-Public_Domain-4ECDC4?style=for-the-badge)](LICENSE)
[![Made with Jekyll](https://img.shields.io/badge/Made_with-Jekyll-CC0000?style=for-the-badge&logo=jekyll)](https://jekyllrb.com/)
[![Hosted on Netlify](https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://www.netlify.com/)

**Learn, organize, take action.**

[🚀 Get Started](#-getting-started) • [📚 Documentation](#-project-structure) • [🤝 Contribute](#-contributing) • [📧 Contact](#-contact)

---

### 📊 By The Numbers

**17** pages of resources • **100+** external links • **3** languages (HTML/CSS/JS) • **0** corporate funding

---

</div>

## 💡 About

Watermelon Club makes Palestine solidarity organizing accessible and sustainable for students.

**What's here:**
- Educational resources (Palestine 101, media literacy)
- Campus organizing toolkit (weekly actions, role templates, campaigns)
- Take action resources (email templates, donations, BDS)
- Support & safety (legal rights, digital security, mental health)
- Palestinian voices to follow

**Maintained by:** Watermelon Club 🍉 (Calgary, AB)

<br>

## ✨ Features

<table>
<tr>
<td width="33%" align="center">
  
🎨 **Beautiful Design**

Watermelon-themed with dark mode, animations, and responsive layout

</td>
<td width="33%" align="center">

📚 **Comprehensive Resources**

Palestine 101, organizing guides, legal support, mental health

</td>
<td width="33%" align="center">

🍉 **Fun & Accessible**

Zines, stickers, creative activism—organizing that doesn't feel like work

</td>
</tr>
<tr>
<td width="33%" align="center">

🔒 **Security First**

Digital security guides, legal rights, protest safety

</td>
<td width="33%" align="center">

🌍 **Canadian Focus**

Canadian MPs, orgs, laws, campus-specific resources

</td>
<td width="33%" align="center">

♿ **Accessible**

Screen readers, keyboard nav, semantic HTML, WCAG compliant

</td>
</tr>
</table>

<br>

## ⚙️ Tech Stack

- Jekyll 4.3+
- Netlify hosting
- Water.css + custom Watermelon theme
- Fredoka + Inter fonts
- Vanilla JS (collapsibles, nav, theme toggle)
- Dark mode via CSS variables + localStorage
- Git/GitHub

<br>

## 🚀 Getting Started

**Prerequisites:** Ruby 2.7+, Bundler, Jekyll

**Local dev:**

1. Clone: `git clone https://github.com/yourusername/StudentsForPalestine.git && cd StudentsForPalestine`
2. Install: `bundle install`
3. Run: `bundle exec jekyll serve`
4. Visit: `http://localhost:4000`

**Production build:** `bundle exec jekyll build` (outputs to `_site/`)

<br>

## 📁 Project Structure

```
watermelonclub/
├── _layouts/              # Jekyll layouts
│   ├── base.html         # Main layout with header/footer/nav
│   └── default.html      # Alternate layout
├── assets/
│   ├── css/
│   │   ├── custom.css            # Watermelon theme styles
│   │   └── watermelon-animations.css  # Fun animations
│   └── js/
│       ├── collapsible.js  # Collapsible sections
│       ├── navigation.js   # Mobile menu & nav
│       ├── theme-toggle.js # Dark/light mode
│       └── toc.js          # Table of contents
├── _campus_organizing/   # Organizing toolkit (collection)
│   ├── weekly-actions.md
│   ├── roles.md
│   └── campaigns.md
├── _education/           # Educational resources (collection)
│   ├── palestine-101.md
│   ├── resources.md
│   └── media-literacy.md
├── _support/             # Support & safety (collection)
│   ├── legal.md
│   ├── digital-security.md
│   └── mental-health.md
├── _take_action/         # Action pages (collection)
├── archive/              # Old versions (gitignored)
├── docs/                 # Specification documents
├── index.md              # Homepage
├── campus-organizing.md  # Hub page
├── education.md          # Hub page
├── support.md            # Hub page
├── take-action.md        # Hub page
├── start-here.md         # Entry page
├── people-to-follow.md   # Palestinian voices
├── _config.yml           # Jekyll configuration
├── netlify.toml          # Netlify deployment config
├── Gemfile               # Ruby dependencies
├── DESIGN-GUIDE.md       # Design system reference
├── CLEANUP-SUMMARY.md    # Recent cleanup notes
└── README.md             # This file
```

<br>

## 🎨 Design Features

**Watermelon Theme:** Light mode (white/mint with watermelon green #4ECDC4 and coral #FF6B6B), Dark mode (dark gray with bright teal #5FE3D8 and softer coral #FF8787), Fredoka headings + Inter body, watermelon emoji favicon 🍉.

**Dark/Light Toggle:** Respects system preference, manual toggle (☀️/🌙) in nav, saves to localStorage, smooth transitions, CSS variables.

**Collapsible Sections:** All H2/H3 auto-collapse. URL hashes auto-expand.

**Responsive Nav:** Desktop (hover dropdowns), Tablet (optimized 769px-1024px), Mobile (hamburger menu), sticky header.

**Accessibility:** Semantic HTML, ARIA labels, keyboard nav, skip link, focus states, reduced motion support, high contrast.

**SEO:** Meta tags (Open Graph, Twitter Cards), JSON-LD, semantic headings, alt text, sitemap.

<br>

## 📖 Content Structure

**Homepage** (`/`) - Urgent actions, quick entry, featured resources

**Start Here** (`/start-here`) - 5 min (email MP, donate), 1 hour (join group, actions), Organize (divestment, leadership)

**Campus Organizing** (`/campus-organizing`) - Weekly actions (tabling, vigils, screenings), role templates, strategic campaigns

**Take Action** (`/take-action`) - Email/phone templates, vetted donations, BDS campaigns

**Education** (`/education`) - Palestine 101, myth-busting, history, international law, Canadian context

**Support** (`/support`) - Legal rights, digital security, mental health

**People to Follow** (`/people-to-follow`) - Palestinian journalists, human rights orgs, Canadian orgs, news outlets

<br>

## 🤝 Key Partners

- Humanti Project (email templates)
- Palestine Portal (toolkits)
- Protect Palestine (campus resources)
- Palestine Legal (legal support)
- CJPME (Canadian advocacy/factsheets)
- Canadian BDS Coalition (BDS campaigns)
- Coalition of Canadian Palestinian Organizations (25+ orgs)

**Integrated:** Email templates, organizing toolkits, BDS resources, legal support, educational materials, humanitarian orgs, Palestinian voices, news sources, academic resources.

<br>

## 🛠️ Customization

**Styles:** Edit `/assets/css/custom.css` (colors via CSS variables, layout, components) or `/assets/css/watermelon-animations.css` (animations, buttons).

**New pages:** Create .md file, add YAML frontmatter (`layout: base`, `title`, `description`), add to nav in `_layouts/base.html`.

**Nav:** Edit `<nav>` in `_layouts/base.html`.

<br>

## 🔧 Maintenance

**Weekly:** Update urgent actions, check news links, monitor stats.

**Monthly:** Link audit, update donations, add resources.

**Quarterly:** Content review, update stats, user feedback.

**Annually:** Major audit, archive old content, structural updates.

**Consider adding:** Privacy-respecting analytics (Plausible/Fathom), uptime monitoring, broken link checker, security headers.

<br>

## 🤝 Contributing

**Content:** Email [mail@berryhouse.ca](mailto:mail@berryhouse.ca) with new resources, broken links, suggestions, or campus organizing stories.

**Code:** Fork repo, create feature branch, make changes, test locally, submit PR.

**Guidelines:** Maintain Canadian focus, center Palestinian voices, provide sources, follow formatting, test mobile, ensure accessibility.

<br>

## 📜 License & Usage

Dedicated to Palestinian liberation. Content freely usable for non-commercial solidarity purposes.

**Attribution:** Credit Watermelon Club, link to watermelonclub.org, maintain attribution to Palestinian sources.

**Restrictions:** No commercial use, no misinformation, maintain integrity of Palestinian voices.

<br>

## 📧 Contact

**Watermelon Club 🍉**
- Email: [mail@berryhouse.ca](mailto:mail@berryhouse.ca)
- Website: [watermelonclub.org](https://watermelonclub.org)
- Location: Mohkínstsis (Calgary, AB, Canada)
- Instagram coming soon

*A [Berry House](https://berryhouse.ca) project*

<br>

## 🙏 Acknowledgments

Built on research from dozens of Palestinian solidarity organizations. Thanks to Humanti Project, CJPME, Palestine Legal, Coalition of Canadian Palestinian Organizations, Canadian BDS Coalition, and countless organizers who came before.

<br>

<div align="center">

---

### 🇵🇸 From the river to the sea, Palestine will be free.

Questions/corrections: [mail@berryhouse.ca](mailto:mail@berryhouse.ca)

**Last Updated:** October 2025 | **Version:** 2.0 🍉

---

**Made with ❤️ by students for students**

</div>
