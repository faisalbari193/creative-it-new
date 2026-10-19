# Creative IT Institute

A responsive institute website for exploring professional IT courses, learning about the institute, browsing career opportunities, and contacting the admissions team. The site also includes a course-advisor chatbot with Gemini-powered answers and a local knowledge-base fallback.

## Contents

- [Highlights](#highlights)
- [Technology](#technology)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [AI course advisor](#ai-course-advisor)
- [Routes](#routes)
- [Environment variables](#environment-variables)
- [Build and deployment](#build-and-deployment)

## Highlights

- Responsive home page with course categories, popular courses, institute statistics, success stories, facilities, partner companies, and admission calls to action.
- Dedicated pages for courses, diploma programs, facilities, careers, institute information, and contact details.
- Course discovery and category filtering, discount and seminar inquiry dialogs, and video modals.
- Bengali/English AI course advisor with a course-comparison view and suggested questions.
- Continuous free-seminar schedule marquee on the home page.
- Scroll reveal, hover, and page-entry animations that respect the user's reduced-motion preference.
- Search and social sharing metadata configured with Next.js Metadata API.
- Images below the fold load lazily; the hero image is prioritized.

## Technology

### Main application

The npm `dev`, `build`, and `start` commands use **Next.js**:

- **Next.js 15** — application framework, page rendering, metadata, and API routes.
- **React 19** and **TypeScript 6** — UI and application code.
- **Tailwind CSS 4** — utility-first styling, processed through PostCSS.
- **Lucide React** — interface icons.
- **Google Gen AI SDK** (`@google/genai`) — Gemini API integration for the course advisor.

### Other installed packages

The lockfile also installs tooling and packages for a Vite/Express setup: **Vite**, **`@vitejs/plugin-react`**, **`@tailwindcss/vite`**, **Express**, **dotenv**, **tsx**, and **esbuild**. Their presence reflects the additional `server.ts`/Vite setup in the repository; the npm scripts documented here run Next.js. `motion` is installed, but the current scroll and interaction animations use CSS and the browser's `IntersectionObserver` API rather than the Motion package.

Additional development dependencies include TypeScript and React/Node/Express type definitions, `@tailwindcss/postcss`, and Autoprefixer.

Exact installed top-level versions are recorded in `package-lock.json`. Use `npm ci` to install the locked dependency tree.

## Project structure

```text
app/
  layout.tsx                 Root layout and SEO/social metadata
  [[...slug]]/page.tsx       Catch-all page entry rendered by Next.js
  api/
    chat/route.ts            Gemini course-advisor API with local fallback
    health/route.ts          API health endpoint
src/
  App.tsx                    Route selection and shared page/modal state
  index.css                  Global styles, responsive utilities, animations
  components/                Pages, navigation, course sections, dialogs, chatbot
  data/
    coursesData.ts           Course-card and category data
    courseComparisonData.ts  Advisor course facts used for comparisons
    courseAdvisorFallback.ts Local rule-based course-advisor responses
    careerData.ts            Career-page content
    seminarsData.ts          Seminar schedule data
    ourCoursesData.ts        Course catalogue page data
  assets/images/             Local institute images
server.ts                    Additional Express/Vite server entry point
index.html                   Vite HTML entry point
package.json                 Scripts and dependency manifest
package-lock.json            Reproducible npm dependency lockfile
```

## Getting started

### Prerequisites

- Node.js and npm
- A Gemini API key for Gemini-generated chatbot responses (optional; local answers work without it)

### Install and run

```bash
npm ci
cp .env.example .env.local
```

Add your key to `.env.local`:

```dotenv
GEMINI_API_KEY=your_gemini_api_key
```

Start the Next.js development server:

```bash
npm run dev
```

Open the local URL printed by Next.js (by default, `http://localhost:3000`).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create an optimized Next.js production build. |
| `npm run start` | Serve a previously built Next.js application. |
| `npm run lint` | Run the TypeScript check (`tsc --noEmit`). |
| `npm run clean` | Remove the generated `.next` and `dist` build directories. |

## AI course advisor

The chatbot UI is implemented in `src/components/AICourseChatbot.tsx`. It provides a conversational advisor and a course-comparison interface backed by the course profiles in `src/data/courseComparisonData.ts`.

When a user sends a message:

1. The UI posts the question and recent conversation history to `POST /api/chat`.
2. `app/api/chat/route.ts` validates the question and builds a course catalogue context from the comparison data.
3. If `GEMINI_API_KEY` is configured, the API calls **Gemini 2.5 Flash** through `@google/genai`, passes up to the six most recent history entries, and asks the model to answer in the user's language.
4. If the key is missing or the Gemini request fails, the API uses `src/data/courseAdvisorFallback.ts` to return a local answer based on course keywords and facts. The chatbot UI also has a client-side fallback if the API request itself cannot be reached.

The advisor is intended to help visitors compare course content, fees, duration, prerequisites, and career paths. Its instructions tell the model not to guarantee earnings or invent discount/installment terms; students should confirm current admission offers with the institute.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/our-course` | Course catalogue |
| `/diploma` | Diploma programs |
| `/our-faciility` | Facilities (existing route spelling) |
| `/our-facility` | Facilities (alternate spelling) |
| `/career` | Career opportunities |
| `/about-us` | About the institute |
| `/contact-us` | Contact |

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | No | Enables Gemini-backed responses in the course-advisor API. Without it, the API uses the local advisor. |

`.env.example` is a safe template and should be committed. Put real credentials in `.env.local` (or the hosting provider's secret manager); never commit real API keys.

## Build and deployment

Run a production build and type check before deploying:

```bash
npm run lint
npm run build
npm run start
```

Deploy the Next.js application to a compatible Node.js host and configure `GEMINI_API_KEY` as a server-side environment secret if Gemini responses are desired. The API key is read on the server and is not intended to be exposed to browser code.

The repository also contains a Vite/Express entry point (`server.ts`, `vite.config.ts`, and `index.html`). The package scripts above target Next.js; use and maintain the Vite/Express path only when intentionally working with that additional setup.
