# qantas-code-challenge

## Introduction

This project is a code challenge for Qantas Group Accommodation. The challenge is to build a feature that allows users to see a list of hotels that can be sorted by price. See more details on the [instructions](doc/instructions.md). Also see the [mockup page](doc/mockup.png) provided.

## Live Demo

https://qantas-code-challenge.vercel.app/

## How to run the app locally

### Running in development mode

```bash
brew install pnpm   # if you don't have pnpm installed
```

```bash
pnpm install
pnpm dev
```

### Running in production mode locally

```bash
pnpm build

pnpm serve
# or
pnpm preview
```

## Development

### Run the tests

```bash
pnpm test
```

### Auto generate typescript types from graphql queries and graphql schema

```bash
pnpm codegen
```

## User Story: Implement Hotel Sorting Feature on Qantas Hotels Search Page

### Description

As a user of Qantas Hotels I would like to see a list of hotels that can be sorted by price.

### Acceptance Criteria

- Display a list of hotels based on the provided JSON payload.
- Implement sorting functionality with two options:
  - Price (high-low)
  - Price (low-high)
- Display star ratings using appropriate icons:
  - ‘star’ rated properties use a star icon.
  - ‘self’ rated properties use a circle icon.
- Ensure the layout is similar to the provided mock image (pixel-perfect match is not required).
- Write tests for the implemented sorting functionality.
- Ensure compatibility with modern browsers (Chrome, Safari, Firefox).

## Approach

Overall, I built this solution using `react`, `graphql` and `chakra ui`, and implemented the responsive layout using `grid` and `flex`. The following are the details:

### GraphQL

I choose to use `graphql` instead of `REST API`, because:

- show my knowledge of graphql since Qantas is using graphql, since Qantas is using graphql
- Though it will be a bit overkill and a bit complex to setup, it is not too much
  - Need to write graphql schema but save time for typescript types via graphql-codegen
  - Need to introduce apollo but can leave `react-query` out

Under the hood,

- I created a graphql schema to define the hotel data structure, and created a query document to fetch the data. - I use `graphql-codegen` to generate typescript types from the graphql schema and the graphql queries.
- I used `msw` to mock the graphql server and implemented the sorting functionality in the graphql server.
- I used `apollo-client` to fetch the data from the mocked graphql server.
- I used `MockedProvider` from `@apollo/client` to mock the graphql client in the test.

### Chakra UI

I used `chakra-ui` for styling, because:

- It is a popular library for styling in react
- It provides a lot of utility functions that can be used to style the components easily
- It allow me to create customised design system easily

### Layout

I used `flex` to layout the page, and used `grid` to layout the hotel block.

The reason I used `grid` to layout the hotel block is because:

- It is mentioned in the non-functional requirements that the application should be compatible with modern browsers, and `grid` is well supported in modern browsers.
- Using `grid` layout will make it easier to create a responsive layout for different screen sizes.
- To demonstrate my knowledge of using the `grid` layout for better control over the hotel block layout.

### Testing

I used `vitest` and `react-testing-library` for testing. `vitest` is a equivalent of `jest` for `vite`, and it is compatible with `jest` well. I used `vitest` because it is the recommended testing framework for `vite`, and it is super fast.

### vite & pnpm

I used `vite` and `pnpm` for package management. I used `vite` because it is a modern build tool that is fast and easy to use. I used `pnpm` because it is a fast and efficient package manager that is recommended by `vite`.

## Tools / Packages

- `react`
- `pnpm` for package management
- `vite` for react
- `vitest` and `react-testing-library` for testing
- `msw` for mocking Graphql requests
- `apollo-client` for fetching data from the mocked graphql server
- `graphql-codegen` for generating types from graphql queries
- `chakra-ui` for styling
- Use `flex` to layout the page, and use `grid` to layout the hotel block
- `prettier` and `eslint` for code formatting and linting

## Notes

- Put original vite readme in `doc/original-vite-readme.md`

## Tasks

- [x] Setup the project with `vite` and `react`
- [x] Create the graphql schema
- [x] Create the graphql server with `msw` with the sorting functionality and the sample data
- [x] Fetch data from the graphql server with `apollo-client`
- [x] Implement the hook to fetch the hotel data and the sorting functionality
- [x] Implement the page layout
  - [x] For desktop / tablet: put the content in the center with 1200px width
  - [x] For mobile: put the content in the center with 100% width
- [x] Implement the UI to display the hotel data
  - [x] Create rating component to display the ratings
  - [x] Use grid to display the hotel data
  - [x] Free cancellation badge
  - [x] Exclusive deal badge
  - [x] Support mobile design
  - [x] improve suspense fallback
- [x] Implement the sorting functionality
- [x] Finalise readme
- [ ] deploy to github pages
