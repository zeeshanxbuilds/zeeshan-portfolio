# Muhammad Zeeshan — Portfolio

A personal portfolio showcasing Muhammad Zeeshan's mobile applications, technical skills, work experience, and education.

Zeeshan is a Flutter developer based in Lahore, Pakistan, expanding into web development with React, JavaScript, and Tailwind CSS. His mobile work uses Dart, GetX, Firebase, and Cloudinary.

[GitHub](https://github.com/zeeshanxbuilds) · [LinkedIn](https://www.linkedin.com/in/zeeshanxbuilds2/) · [X](https://x.com/zeeshanxbuilds) · [CV](public/MuhammadZeeshan_Resume.pdf)

## What's included

- Personal introduction and categorized technical skills.
- Two featured Flutter projects with individual detail pages.
- Experience in Flutter development, freelance IT support, and business development.
- Virtual University education: completed ADP in Computer Science and BSCS starting in November 2026.
- Live GitHub follower count and contribution calendar.
- GitHub, LinkedIn, X, email contact, and a locally hosted PDF CV.
- Light and dark themes, responsive layouts, keyboard focus indicators, and skip navigation.
- Page metadata, social sharing artwork, structured data, sitemap, and robots file.

There is no blog, WhatsApp link, Instagram link, or live project demo button. Project buttons intentionally open Zeeshan's GitHub profile because individual project repository URLs have not been supplied.

## Projects

| Project | Description | Technologies |
| --- | --- | --- |
| E-Commerce Bookstore App | Mobile bookstore with authentication, real-time inventory updates, and cross-device synchronization | Flutter, Dart, GetX, Firebase, REST APIs, Git |
| Cloud Notes Manager | Cloud-synchronized notes with image hosting and a minimal interface | Flutter, Dart, Firebase, Cloudinary, Git |

These descriptions document Zeeshan's separate projects. Their backend services are not dependencies of the portfolio website.

## Run locally

Use **Node.js 20.9 or newer** and npm.

```bash
git clone https://github.com/zeeshanxbuilds/zeeshan-portfolio.git
cd zeeshan-portfolio
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

No environment file, API token, database, or application backend is required. Dependency installation and Google font downloads during builds require network access.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Check the code with ESLint |
| `npm run build` | Check TypeScript, build the site, and export static files to `out/` |

## Update content

| Content | Location |
| --- | --- |
| Identity, domain, navigation, and social links | [constants/site.ts](constants/site.ts) |
| Skills, experience, and education | [constants/profile.ts](constants/profile.ts) |
| Projects, features, and GitHub links | [constants/projects.ts](constants/projects.ts) |
| Introduction | [HeroSection.tsx](components/core/landing/HeroSection.tsx) and [AboutSection.tsx](components/core/landing/AboutSection.tsx) |
| Contact text and email display | [ContactSection.tsx](components/core/landing/ContactSection.tsx) |
| Technology icon mapping | [constants/tech-icons.ts](constants/tech-icons.ts) |
| Portrait | [public/zeeshan-avatar.png](public/zeeshan-avatar.png) |
| CV | [public/MuhammadZeeshan_Resume.pdf](public/MuhammadZeeshan_Resume.pdf) |
| University logo | [public/assets/education/virtual-university.png](public/assets/education/virtual-university.png) |
| Project initials artwork | `public/assets/projects/` |
| Favicon and sharing artwork | `public/favicon.png`, `public/og-image.svg`, and `public/og-image.png` |

Public assets are referenced from the site root: `public/MuhammadZeeshan_Resume.pdf` is served at `/MuhammadZeeshan_Resume.pdf`.

Company initials are used in the experience section. The project cards also use initials rather than official project logos. Replace those assets when suitable logos are available.

## Pages and structure

| Route | Content |
| --- | --- |
| `/` | Profile, GitHub activity, featured projects, experience, education, and contact |
| `/projects` | Project collection |
| `/projects/ecommerce-bookstore-app` | Bookstore project details |
| `/projects/cloud-notes-manager` | Notes manager project details |
| `/robots.txt` | Crawler rules and sitemap location |
| `/sitemap.xml` | Homepage, project collection, and project detail URLs |

```text
app/             Pages, styles, metadata, sitemap, and robots
components/      Portfolio sections, layout, reusable UI, and structured data
constants/       Editable profile, project, and site content
lib/             GitHub requests and shared utilities
public/          Portrait, CV, icons, logos, and sharing artwork
types/           Shared TypeScript types
```

Project pages are generated from `constants/projects.ts` at build time. Add or update content, then rebuild and redeploy.

## GitHub activity

The browser fetches the follower count from GitHub's public user API and contribution data from the GitHub contributions provider at `github-contributions-api.jogruber.de`.

The username is derived from the GitHub profile URL in `constants/site.ts`. The calendar uses the current browser year. No access token is used.

Requests run when the section mounts, refresh every 24 hours while the page stays open, and refresh when an overdue tab becomes visible. Requests time out after 15 seconds. Provider caching, rate limits, and network failures can affect freshness and availability.

The two requests have independent error handling. Previously loaded data remains visible when a refresh fails, and the GitHub profile link remains available without JavaScript.

The application has no login, contact form, or analytics script. The theme preference is stored locally in the browser. GitHub data requests and external links connect visitors to their respective providers; hosting logs and third-party data handling depend on those services.

## Deploy to Vercel

The configured deployment address is **`https://zeeshanxbuilds.vercel.app`**. This is the intended URL, not confirmation that the site has been deployed or that the hostname is available. Update `siteConfig.url` if Vercel assigns a different address.

```bash
npm ci
npm run lint
npm run build
```

[next.config.ts](next.config.ts) enables static export. [vercel.json](vercel.json) configures:

- Framework preset: Other (`null`).
- Install command: `npm ci`.
- Build command: `npm run build`.
- Output directory: `out`.
- Clean URLs: enabled.

Connect the repository in Vercel and use the repository root as the Root Directory. Deploy a commit containing the configuration above. No running Next.js server or `npm start` command is required.

For other static hosts, publish the complete `out/` contents, resolve clean URLs to their exported HTML files, and serve `404.html` with a 404 status for unknown routes. The application is configured for a domain root, rather than a repository subdirectory.

After deployment, check direct project-page navigation, the CV, sharing image, sitemap, robots file, and an unknown URL. Review domain references in page metadata and [structured-data helpers](components/seo/JsonLd.tsx) when changing the deployed address. Search Console verification is not configured.

## License and attribution

The code is distributed under the [MIT License](LICENSE). The license preserves the original template copyright and adds Muhammad Zeeshan's copyright notice.

Technology icons retain their existing [Devicon](public/assets/tech/LICENSE.devicon) and [Simple Icons](public/assets/tech/LICENSE.simple-icons) notices. University and other third-party logos retain their applicable rights. Personal profile content and the CV should be replaced when adapting this portfolio for someone else.
