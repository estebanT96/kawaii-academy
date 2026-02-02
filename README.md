# Kawaii Academy 🇯🇵

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

**Kawaii Academy** is an interactive, gamified platform designed to help beginners master the Japanese writing systems (Hiragana and Katakana). Built with a focus on modern UX/UI principles, it offers customizable flashcard quizzes, reference charts, and a "fun-first" approach to language learning.

## Features

- ** Interactive Flashcard Game:** Test your memory with randomized kana cards.
- ** Customizable Study Sets:** Select specific rows to practice (e.g., only "k" and "s" rows) or mix Hiragana and Katakana.
- ** Quick Start Mode:** One-click onboarding for absolute beginners to start learning immediately.
- ** Progress Tracking:** Immediate feedback on answers and a summary screen upon completion.
- ** Fully Responsive:** Optimized for both desktop and mobile experience with touch-friendly controls.
- ** Reference Library:** Complete charts for Seion (Basic), Dakuon (Voiced), and Yoon (Combo) sounds.

## Tech Stack

- **Frontend:** React (v18), TypeScript
- **Build Tool:** Vite
- **Styling:** Material UI (MUI) v5, Emotion
- **Routing:** React Router DOM v6
- **Deployment:** [https://vercel.com/estebans-projects-826585b6/kawaii-academy]

## Engineering Decisions & Challenges

- **Algorithm Efficiency (Fisher-Yates Shuffle):** To ensure a truly randomized learning experience every session, I implemented the Fisher-Yates shuffle algorithm within the StudyCard component. This prevents repeating patterns in the flashcards, which is a common issue with standard Math.random() sorting methods.
- **Optimistic UI & Instant Feedback:** In StudyCardContent.tsx, I designed the input handler to validate answers in real-time (handleInput). Instead of requiring a "Submit" button, the app detects the correct string match immediately, clears the input, and advances the state. This reduces user friction and creates a "flow state" essential for gamified learning.
- **Static Data vs. Database:** I intentionally chose to serve the Kana data from a static file rather than fetching from a database. Since the Japanese alphabet is immutable, this decision eliminated network latency, resulting in near-instant load times and zero database costs.

## Future Roadmap

- **User Persistence Layer:** While the educational data is static, I plan to integrate Supabase (PostgreSQL) to store dynamic user data, such as study streaks, accuracy percentages, and account settings.

-**Audio Integration:** Adding native pronunciation audio clips for every character to improve listening comprehension alongside reading skills.

## Screenshots

|                                                          **Study Selection**                                                          |                                                     **Character Table Interface**                                                     |                                                          **Game Interface **                                                          |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
| <a href="./docs/Screenshot 2026-01-30 at 4.12.07 PM.png"><img src="./docs/Screenshot 2026-01-30 at 4.12.07 PM.png" width="300" /></a> | <a href="./docs/Screenshot 2026-01-30 at 4.12.28 PM.png"><img src="./docs/Screenshot 2026-01-30 at 4.12.28 PM.png" width="300" /></a> | <a href="./docs/Screenshot 2026-01-30 at 4.22.07 PM.png"><img src="./docs/Screenshot 2026-01-30 at 4.22.07 PM.png" width="300" /></a> |

|                                                      **Mobile Study Selection **                                                      |                                                 **Mobile Character Table Interface **                                                 |                                                      ** Mobile Game Interface **                                                       |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="./docs/Screenshot 2026-01-30 at 4.27.27 PM.png"><img src="./docs/Screenshot 2026-01-30 at 4.27.27 PM.png" width="300" /></a> | <a href="./docs/Screenshot 2026-01-30 at 4.28.08 PM.png"><img src="./docs/Screenshot 2026-01-30 at 4.28.08 PM.png" width="300" /></a> | <a href="./docs/Screenshot 2026-01-30 at 4.27.38 PM.png"> <img src="./docs/Screenshot 2026-01-30 at 4.27.38 PM.png" width="300" /></a> |

## Installation & Setup

Clone the repository and install the dependencies to run it locally.

```bash
# 1. Clone the repository
git clone [https://github.com/estebanT96/kawaii-academy.git](https://github.com/estebanT96/kawaii-academy.git)

# 2. Navigate into the project directory
cd kawaii-academy

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

## Credits & Assets

- **Music:** "Boogie" by Pecan Pie via [Uppbeat](https://uppbeat.io/t/pecan-pie/boogie) (License: ZZAOYODV5BDGZBFS).
- **Illustrations:** Custom AI-generated assets (Kizune Character).
