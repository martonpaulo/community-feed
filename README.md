# 📰 Community Feed

![GitHub license](https://img.shields.io/github/license/martonpaulo/community-feed)
![GitHub last commit](https://img.shields.io/github/last-commit/martonpaulo/community-feed)
![GitHub package dependencies](https://img.shields.io/github/package-json/dependency-version/martonpaulo/community-feed/react)
![GitHub package dev dependencies](https://img.shields.io/github/package-json/dependency-version/martonpaulo/community-feed/dev/typescript)

Welcome to the **Community Feed** project! 🚀 This project simulates a social media feed, featuring functionalities such as commenting, applauding, and deleting comments. It is a React application using Vite, designed to practice important React concepts, including componentization, props, state, immutability, and hooks. Additionally, TypeScript is applied to add static typing to the application.

Inspired by a tutorial from [RocketSeat](https://www.rocketseat.com.br/).

Initial design available on [Figma](https://www.figma.com/design/6MfaDPdEh4Ke2COT7xNBcB/Community-Feed).

This is a sleek and modern feed application built using the latest web technologies: **React**, **TypeScript**, **Vite**, **CSS Modules**, **ESLint**, **Prettier**, **Jest**, **Random User API**, **Unsplash API**, **Phosphor Icons**, **Google Fonts**, and **GitHub Pages**.

## 🌐 Live Project

This project is integrated with the GitHub Pages workflow. Once a commit is made, it is deployed and hosted by GitHub Pages.

Live project at: [martonpaulo.github.com/community-feed](https://martonpaulo.github.com/community-feed)

For more information about me and other projects, check out: [martonpaulo.com](https://martonpaulo.com)

## 🚀 Getting Started

To start working on this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/martonpaulo/community-feed.git
cd community-feed
npm install
```

## 📜 Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev` - Start the development server at `http://localhost:3000`
- `npm run test` - Run Jest test suite
- `npm run build` - Build the project for production, outputting to the `dist` folder
- `npm run lint` - Lint the code using ESLint

## 🔧 To Be Implemented

Future improvements to consider:

- [x] Make the feed responsive for mobile devices 📱
- [x] Host the project on GitHub Pages 🌐
- [x] Only show the comment button when the user types a non-empty comment ✍️
- [x] Integrate TypeScript into the project 🛠️
- [x] Add linting and formatting to the project 🧹
- [x] ~~Retrieve all user data from the Random User API~~
- [x] ~~Adding a comment should be part of a service that sends a POST request to the API~~
- [x] Rewrite the README file with more detailed instructions and images/emojis 📄✨
- [x] Add screenshots to the README file 📸
- [ ] Display a modal when deleting a comment to confirm the action 🗑️
- [ ] Display a modal for editing profile button saying that the feature is not available yet 🚫
- [ ] Display the string "You" instead of the user's name when the user is the author of a post/comment 📝
- [ ] Only display the delete button on user posts if the user is the author 🔒

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
