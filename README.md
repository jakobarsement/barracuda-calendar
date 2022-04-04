# Barracuda Calendar

## Routing

- Due to scope, there is no need for React routing or a 'pages' top-level directory. App.tsx is used as the single route.

## State

- Context was used for global state, but more comprehensive/readable methods are available for more complex apps. I prefer to have some object represent state for each entity I'm tracking global state on, and getters/setters defined for reading/writing that state object. However, that would be overkill in this project.
- useState could have been used instead of useContext for modalData, where setModalData is passed into CalendarDay as a prop. But it's important to know global state for scalable applications so I opted for context as demonstration.

## Directory Structure

- This directory structure is common in small projects, but in larger ones there is often more effective structures depending on the tech being used, such as polyrepo projects or a monorepo codebase.

- Due to the size of this project I opted not to barrel some folders with index.ts files.

## Utils

- In a larger project one may put utils specific to a component within that component's folder under the '/components' folder.

## SCSS

- SCSS was chosen due to ease of use and readability for nested classes. SCSS/CSS modules were not used due to the small size of this project.
- camelCase instead of kebab-case classnames are a safe bet due to Next.js and .modules.scss' requirements against dashes (-). If a React App ever needs to be converted to Next, this is one less step in the process. But many prefer kebab-case
