# Frontend Challenge — Job Listings Board

![Challenge difficulty: Intermediate](https://img.shields.io/badge/Difficulty-Intermediate-5ba4a4?style=flat-square)
![React](https://img.shields.io/badge/React-Required-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-Required-06B6D4?style=flat-square&logo=tailwindcss)
![API](https://img.shields.io/badge/API-Data_Fetching-blue?style=flat-square)

## Welcome! 👋

Thank you for checking out this frontend challenge.

Challenges like this one help you improve your skills by building real-world projects. **Your task is to build out the project to match the designs provided, and make it fully interactive.**

---

## The Challenge

Your users should be able to:

- [x] View the optimal layout for the site depending on their device's screen size
- [/] **Asynchronous Fetching**: Fetch all job listings from the external API on page load
- [/] **Loading State**: Display a loading skeleton or message while data is being fetched
- [/] **Error Handling**: Show a user-friendly error message if the API call fails
- [/] See all job listings once loaded
- [/] Filter job listings by clicking on the skill tags (e.g. "React", "Fullstack")
- [/] When one or more filters are active, only show jobs that match **all** selected tags
- [/] Add and remove filter tags from the filter bar at the top of the page
- [x] See hover states for all interactive elements on the page

**Bonus challenges (optional):**
- [ ] The filter bar should only be visible when at least one filter is active
- [ ] Animate cards when the filter changes
- [ ] Add a "New!" badge that only appears on jobs posted in the last 2 days (based on the `postedAt` field)

---

## Where to Find Everything

You will find all the necessary resources in the following locations:

```
job-listings-board/
├── design/
│   ├── design-preview.html   ← Open in browser for desktop design
│   └── design-mobile.html    ← Open in browser for mobile design
├── src/
│   ├── components/           ← Build your components here
│   ├── App.jsx               ← Your main application file — Implement fetch here
│   ├── main.jsx
│   └── index.css             ← Only the Tailwind directives
├── style-guide.md            ← Colours, fonts, spacing reference
├── README.md                 ← This file
└── tailwind.config.js
```

### Design Files

Open the HTML files in the `/design` folder directly in your browser. You will see both the **desktop** and **mobile** versions of the design.

The designs show you exactly what to build. You will need to use your judgment for precise spacing values — refer to `style-guide.md` for the exact measurements.

---

## Building Your Project

Feel free to use any workflow you like. Here is a suggested process:

1. **Read the style guide** (`style-guide.md`) before writing any code. Note the colours, font, and spacing values.

2. **Open the design files** in your browser and study both mobile and desktop layouts. Notice what changes between breakpoints.

3. **Plan your components** — sketch out on paper which parts of the UI should be separate components before you start coding.

4. **Build static first** — get the layout and styling right with hardcoded sample data before wiring up the API.

5. **Integrate Data** — implement `fetch` within a `useEffect` hook to pull live data from the API endpoint.

6. **Handle Async States** — make sure to handle "Loading" and "Error" states gracefully in your UI.

7. **Add filtering** — implement the click-to-filter and click-to-remove logic last. Filtering should happen on the data retrieved from the API.

---

## API Integration

Your job data is served by an external API. Use the following endpoint:

`GET http://localhost:3001/api/jobs` (Ask your instructor for the production URL if working remotely)

Each job object returned by the API has the following shape:

```json
{
  "id": 1,
  "company": "Photosnap",
...
```

**Important:** The filterable tags come from combining **`languages`**, **`tools`**, **`role`**, and **`level`**. For example, a job with `languages: ["React"]` and `role: "Frontend"` should be filterable by both "React" and "Frontend".

---

## Deployment

Once you have finished building your project, push it to **GitHub** and deploy it to **Vercel** or **Netlify** (both are free).

```bash
# Build for production
npm run build

# The built files are in the /dist folder
# Upload dist/ to Netlify, or connect your GitHub repo to Vercel
```

---

## Sharing Your Solution

When you have finished:

1. **Share your GitHub repository link** with your instructor
2. **Include the live URL** of your deployed project
3. **Write a brief reflection** (2–3 sentences): What was the hardest part? What would you do differently?

---

## Got Feedback?

If anything in this challenge is unclear, ask your instructor. Remember — in a real job, asking questions is not a weakness. It is how professionals work.

**Good luck! You have built everything you need for this. Now go prove it. 🚀**
