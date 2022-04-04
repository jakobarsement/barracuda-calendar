# Barracuda Calendar

## Getting Started

1. Copy the project into your working directory: git clone https://github.com/jakobarsement/barracuda-calendar.git
2. Change working directory to the calendar: cd barracuda-calendar
3. Download dependencies: npm i
4. Locally host the project: npm start
5. Execute tests: npm test

## Directory Structure

- Due to the size of this project I opted not to barrel some folders with index.ts files.

- This directory structure is common in small projects, but in larger ones there is often more effective structures depending on the tech being used, such as polyrepo projects or a monorepo codebase.

- In a larger project, a 'pages' or 'views' directory is often added at the top level. App.tsx is used as the single page.

- In a larger project one may put utils/helpers specific to a component within that component's parent folder.

## State

- Context is used for global state, but more comprehensive/readable methods are available for more complex apps. One may prefer to have some object represent state for each entity with global state, and getters/setters defined for reading/writing that state object. That would be overkill in this project.

- useState could have been used instead of useContext for modalData, where setModalData is passed into CalendarDay as a prop. But it's important to know global state for scalable applications so I opted for context as demonstration.

## Testing

- Due to the importance of accuracy for a calendar, the tests are focused on the utils functions that the calendar depends on. Simple tests are conducted to ensure the Calendar and Modal components can render.

- The best way to ensure jsx is rendering properly is by running e2e tests in prod environments using a library like playwright or cypress.

## SCSS

- SCSS was chosen due to ease of use and readability for nested classes.

- camelCase instead of kebab-case classnames are a safe bet due to Next.js and .modules.scss' requirements against dashes (-). If a React App ever needs to be converted to Next, this is one less step in the process. Many opt for kebab-case so it's worth mentioning.
