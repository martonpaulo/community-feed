# Community Feed

Welcome to the **Community Feed** project! This is a sleek and modern feed application built using the latest web technologies.

Inspired by a tutorial from [RocketSeat](https://www.rocketseat.com.br/).

Initial design available on [Figma](https://www.figma.com/design/6MfaDPdEh4Ke2COT7xNBcB/Community-Feed).

## Technologies Used

This project utilizes the following technologies:

- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed JavaScript at any scale
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped and modular CSS
- **ESLint** - Pluggable JavaScript linter
- **Prettier** - Opinionated code formatter
- **Jest** - Delightful JavaScript testing
- **Random User API** - Random user data for showing user profiles
- **Unsplash API** - High-quality images from Unsplash
- **Phosphor Icons** - Customizable and flexible icons
- **Google Fonts** - Free and beautiful fonts
- **GitHub Pages** - Static site hosting

## Getting Started

To start working on this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/community-feed.git
cd community-feed
npm install
```

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev` - Start the development server at `http://localhost:3000`
- `npm run test` - Run the test suite
- `npm run build` - Build the project for production
- `npm run lint` - Lint the code using ESLint
- `npm run preview` - Preview the production build locally

## To Do List

Future improvements to consider:

- [x] Make the feed responsive for mobile devices
- [x] Host the project on GitHub Pages
- [x] Only show the comment button when the user types a non-empty comment
- [x] Integrate TypeScript into the project
- [x] Add linting and formatting to the project
- [ ] Display a modal when deleting a comment to confirm the action
- [ ] Display a modal for editing profile button saying that the feature is not available yet
- [x] ~~Retrieve all user data from the Random User API~~
- [x] ~~Adding a comment should be part of a service that sends a POST request to the API~~
- [ ] Display the string "You" instead of the user's name when the user is the author of a post/comment
- [ ] Only display the delete button on user posts if the user is the author
- [ ] Add screenshots to the README file
- [ ] Rewrite the README file with more detailed instructions and images/emojis

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
