# 🧠 Sanity Clean Content Studio

Welcome to your **Sanity Content Studio**, a powerful real-time content management environment built on top of the [Sanity.io](https://www.sanity.io/) platform.

This guide will help you **set up**, **run**, and **extend** your Sanity Studio project.

---

## 🚀 Overview

Sanity Studio is an open-source, customizable CMS interface connected to your Sanity dataset.  
You can manage content, schemas, assets, and users — all in real-time.

---

## 📦 Prerequisites

Before you begin, make sure you have the following installed:

| Tool | Version | Description |
|------|----------|-------------|
| [Node.js](https://nodejs.org/) | v16 or higher | Required for running the studio |
| [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) | latest | Package manager |
| [Sanity CLI](https://www.sanity.io/docs/cli) | latest | For managing Sanity projects |

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-sanity-repo>.git
cd <your-sanity-repo>
```

### 2. Install Dependencies

Using **npm**:

```bash
npm install
```

or **yarn**:

```bash
yarn install
```

---

## 🧰 Sanity CLI Commands

Here’s a list of all common and useful commands to manage your Sanity Studio:

| Command | Description |
|----------|--------------|
| `sanity init` | Initialize a new Sanity project or link to an existing one |
| `sanity start` | Start the local development server (default: http://localhost:3333) |
| `sanity build` | Build a production-ready static version of your Studio |
| `sanity deploy` | Deploy your Studio to Sanity’s global CDN |
| `sanity dataset list` | List available datasets |
| `sanity dataset create <name>` | Create a new dataset |
| `sanity dataset delete <name>` | Delete a dataset |
| `sanity dataset export <name> <file>` | Export dataset to a file |
| `sanity dataset import <file> <name>` | Import data from a file |
| `sanity documents query "<GROQ-query>"` | Query documents using GROQ |
| `sanity manage` | Open the Sanity.io project management dashboard |
| `sanity help` | Show all available commands |

---

## 🧩 Local Development

Start your local development environment with:

```bash
npm run dev
# or
sanity start
```

Your Studio should now be available at:

👉 http://localhost:3333

---

## 🏗️ Building for Production

To build a static version of your Studio:

```bash
npm run build
# or
sanity build
```

Output will be in the `/dist` directory.

---

## ☁️ Deployment Options

### Deploy to Sanity’s Global CDN
```bash
sanity deploy
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
Connect your repo on [Netlify](https://www.netlify.com/), and set:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

---

## 🧠 Project Configuration

The core configuration files in your Studio:

| File | Description |
|------|-------------|
| `sanity.config.ts` | Main configuration file for your Studio |
| `schemas/` | Folder where all document and object schemas are defined |
| `deskStructure.ts` | Customizes your Studio’s desk layout |
| `package.json` | Project dependencies and scripts |
| `.env` | Environment variables (like SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, etc.) |

Example `.env` file:
```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_API_VERSION=2025-01-01
```

---

## ✨ Useful npm Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Sanity Studio locally |
| `npm run build` | Build the Studio for production |
| `npm run deploy` | Deploy the Studio to Sanity |
| `npm run lint` | Lint code for best practices |
| `npm run format` | Format code using Prettier |

---

## 🧱 Extending the Studio

You can extend your Studio with plugins and custom inputs.

### Example: Adding a plugin

```bash
sanity install <plugin-name>
```

Example plugins:
- `@sanity/vision` → Run GROQ queries directly in the Studio
- `@sanity/dashboard` → Add widgets to the dashboard
- `@sanity/color-input` → Add color pickers

More plugins: [Sanity Plugin Directory](https://www.sanity.io/plugins)

---

## 💡 Tips & Tricks

- Use **Sanity Vision** (`@sanity/vision`) for testing GROQ queries.
- Add **custom desk structures** for editor workflows.
- Use **environment variables** to separate production and staging datasets.
- You can connect to your frontend (Next.js, React, etc.) via Sanity’s **GROQ** or **GraphQL API**.

---

## 📚 Resources

- [Getting Started Guide](https://www.sanity.io/docs/introduction/getting-started)
- [Sanity CLI Reference](https://www.sanity.io/docs/cli)
- [Schema Types Documentation](https://www.sanity.io/docs/schema-types)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Community Slack](https://slack.sanity.io/)
- [GitHub Repository](https://github.com/sanity-io/sanity)

---

## 🧑‍💻 Author

**Your Name**  
[Your Website](https://yourwebsite.com) | [GitHub](https://github.com/yourusername)

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).
