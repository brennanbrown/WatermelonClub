# 🍉 Watermelon Club - Palestine Solidarity Resources

Fun, accessible Palestine solidarity resources for Canadian students. Learn, organize, take action. Start your own Watermelon Club today!

**Live Site:** [watermelonclub.org](https://watermelonclub.org)

---

## 📋 About This Project

**Watermelon Club** makes Palestine solidarity organizing fun, accessible, and sustainable for students.

This site serves as a centralized hub for:
- **Educational Resources** - Palestine 101, resources library, media literacy
- **Start Your Own Watermelon Club** - Weekly actions, role templates, strategic campaigns
- **Take Action Resources** - Email templates, donation links, BDS campaigns
- **Support & Safety** - Legal rights, digital security, mental health
- **Palestinian Voices** - Journalists, activists, and organizations to follow

**Maintained By:** Watermelon Club 🍉 (Calgary, AB)

---

## 🏛️ Technical Stack

- **Static Site Generator:** Jekyll 4.3+
- **Hosting:** Netlify
- **CSS Framework:** Water.css with extensive Watermelon theme customization
- **Fonts:** Google Fonts (Fredoka for headings, Inter for body)
- **JavaScript:** Vanilla JS (collapsible sections, navigation, theme toggle)
- **Dark Mode:** CSS variables with localStorage persistence
- **Version Control:** Git/GitHub

---

## 🚀 Getting Started

### Prerequisites

- Ruby (2.7+)
- Bundler
- Jekyll

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/StudentsForPalestine.git
   cd StudentsForPalestine
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run local server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View in browser**
   ```
   http://localhost:4000
   ```

### Building for Production

```bash
bundle exec jekyll build
```

Output will be in the `_site` directory.

---

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

---

## 🎨 Design Features

### Watermelon Theme 🍉
- **Light Mode:** White/mint backgrounds with watermelon green (#4ECDC4) and coral (#FF6B6B)
- **Dark Mode:** Dark gray backgrounds with bright teal (#5FE3D8) and softer coral (#FF8787)
- **Typography:** Fredoka (playful headings) + Inter (readable body)
- **Animations:** Subtle hover effects, smooth transitions, playful interactions
- **Favicon:** Watermelon emoji 🍉

### Dark/Light Mode Toggle
- Respects system preference (prefers-color-scheme)
- Manual toggle button (☀️/🌙) in navigation
- Saves preference to localStorage
- Smooth transitions between themes
- All colors use CSS variables for easy theming

### Collapsible Sections
All H2 and H3 headings automatically become collapsible sections. URL hashes auto-expand relevant sections.

### Responsive Navigation
- **Desktop:** Hover dropdowns, compact spacing
- **Tablet:** Optimized spacing (769px-1024px)
- **Mobile:** Hamburger menu with animated icon
- Sticky header that stays visible

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Skip to content link
- Focus states
- Reduced motion support
- High contrast in both themes

### SEO Optimized
- Complete meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data
- Semantic heading structure
- Descriptive alt text
- Sitemap generation
- Watermelon Club branding

---

## 📝 Content Organization

### Main Sections

1. **Homepage** (`/`)
   - Current urgent actions
   - Quick entry pathways
   - Featured resources

2. **Start Here** (`/start-here`)
   - **5 Minutes:** Quick actions (email MP, donate, share)
   - **1 Hour:** Sustained engagement (join group, weekly actions)
   - **Organize:** Deep commitment (divestment, leadership)

3. **Start Your Own Watermelon Club** (`/campus-organizing`)
   - Hub page encouraging students to start campus chapters
   - Weekly action templates (tabling, vigils, screenings, social media)
   - Role templates (5 coordinator positions)
   - Strategic campaigns (divestment, speakers, media)
   - Connection to growing Watermelon Club network

4. **Take Action** (`/take-action`)
   - Email templates for MPs
   - Phone scripts
   - Vetted donation organizations
   - BDS campaigns
   - Media accountability

5. **Education** (`/education`)
   - Palestine 101 basics
   - Myth-busting
   - Historical context & timeline
   - International law
   - Resources by format
   - Canadian context

6. **Support & Safety** (`/support`)
   - Know Your Rights (legal)
   - Digital security
   - Mental health & burnout
   - Dealing with opposition

7. **People to Follow** (`/people-to-follow`)
   - Palestinian journalists
   - Human rights organizations
   - Canadian organizations
   - News outlets
   - How to amplify voices

---

## 🔗 External Resources Integrated

All URLs from research document (`docs/URLs.md`) have been integrated:

### Key Partners
- **Humanti Project** - Email templates (October 2025)
- **Palestine Portal** - Comprehensive toolkits
- **Protect Palestine** - Campus organizer resources
- **Palestine Legal** - Legal support for students
- **CJPME** - Canadian advocacy and factsheets
- **Canadian BDS Coalition** - BDS campaigns
- **Coalition of Canadian Palestinian Organizations** - 25+ orgs

### Resource Types
- ✅ Email templates for MPs
- ✅ Campus organizing toolkits
- ✅ BDS resources and targets
- ✅ Legal support organizations
- ✅ Educational materials
- ✅ Humanitarian organizations (Canadian-focused)
- ✅ Palestinian journalists and voices
- ✅ News sources
- ✅ Academic resources

---

## 🛠️ Customization

### Updating Styles

Edit `/assets/css/custom.css` to modify:
- Color scheme (CSS variables for both light and dark themes)
- Layout adjustments
- Component styles

Edit `/assets/css/watermelon-animations.css` for:
- Animation effects
- Button styles
- Fun interactive elements

### Adding New Pages

1. Create markdown file in appropriate directory
2. Add YAML frontmatter:
   ```yaml
   ---
   layout: base
   title: Page Title
   description: Meta description for SEO
   ---
   ```
3. Add to navigation in `_layouts/base.html`

### Updating Navigation

Edit the `<nav>` section in `_layouts/base.html` to add/remove/reorganize menu items.

---

## 📊 Analytics & Monitoring

Consider adding (not currently implemented):
- Privacy-respecting analytics (e.g., Plausible, Fathom)
- Uptime monitoring
- Broken link checker (monthly)
- Security headers validation

---

## 🔄 Maintenance Schedule

### Weekly
- Update "Urgent Actions" section
- Check for broken links in news sections
- Monitor for outdated statistics

### Monthly
- Full external link audit
- Update donation organization info
- Add new resources
- Update case studies

### Quarterly
- Comprehensive content review
- Update all statistics
- Revise based on user feedback
- Check accessibility compliance

### Annually
- Major content audit
- Archive outdated content
- Structural updates
- Design refresh if needed

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Content Contributions
- Submit new resources via email: [mail@berryhouse.ca](mailto:mail@berryhouse.ca)
- Report broken links
- Suggest new sections or improvements
- Share campus organizing success stories

### Code Contributions
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

### Guidelines
- Maintain Canadian focus
- Center Palestinian voices
- Provide sources for factual claims
- Follow existing formatting
- Test on mobile devices
- Ensure accessibility

---

## 📜 License & Usage

This project is dedicated to Palestinian liberation and justice. Content may be freely used, adapted, and shared for non-commercial solidarity purposes.

### Attributions
- Please credit Watermelon Club when using substantial portions
- Link back to watermelonclub.org
- Maintain attribution to Palestinian sources

### Restrictions
- Do not use for commercial purposes
- Do not alter to spread misinformation
- Maintain integrity of Palestinian voices and perspectives

---

## 📧 Contact

**Watermelon Club 🍉**

- **Email:** [mail@berryhouse.ca](mailto:mail@berryhouse.ca)
- **Website:** [watermelonclub.org](https://watermelonclub.org)
- **Location:** Mohkínstsis (Calgary, Alberta, Canada)
- *Instagram coming soon*

*A [Berry House](https://berryhouse.ca) project*

---

## 🙏 Acknowledgments

### Organizations
- Humanti Project
- Canadians for Justice and Peace in the Middle East (CJPME)
- Palestine Legal
- Coalition of Canadian Palestinian Organizations
- Canadian BDS Coalition
- All organizations and individuals listed in resources

### Inspiration
This project was built on the detailed research and specifications compiled from dozens of Palestinian solidarity organizations, with particular thanks to the Palestinian-led BDS movement and the countless organizers who came before.

---

## 🇵🇸 From the River to the Sea

**Palestine will be free.**

For questions, corrections, or contributions, please contact [mail@berryhouse.ca](mailto:mail@berryhouse.ca).

---

**Last Updated:** October 2025
**Version:** 2.0 - Watermelon Club Rebrand 🍉
