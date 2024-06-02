# qantas-code-challenge

## Introduction

This project is a code challenge for Qantas Group Accommodation. The challenge is to build a feature that allows users to see a list of hotels that can be sorted by price. See more details on the [instructions](doc/instructions.md). Also see the [mockup page](doc/mockup.png) provided.

## How to run the app

```bash
brew install pnpm   # if you don't have pnpm installed
```

```bash
pnpm install
pnpm dev
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

I am about to use `react` and `graphql` to build this feature with the following tools / packages:

- `pnpm` for package management
- `vite` for react
- `vitest` and `react-testing-library` for testing
- `msw` for mocking Graphql requests
- `graphql-codegen` for generating types from graphql queries
- `apollo-client` for fetching data from the mocked graphql server
- `chakra-ui` for styling
- Use `flex` to layout the page, and use `grid` to display the hotel data
- `prettier` and `eslint` for code formatting and linting

## Tasks

- [x] Setup the project with `vite` and `react`
- [x] Create the graphql schema
- [x] Create the graphql server with `msw` with the sorting functionality and the sample data
- [x] Fetch data from the graphql server with `apollo-client`
- [x] Implement the hook to fetch the hotel data and the sorting functionality
- [x] Implement the page layout
  - [x] For desktop / tablet: put the content in the center with 1200px width
  - [x] For mobile: put the content in the center with 100% width
- [ ] Implement the UI to display the hotel data
  - [x] Create rating component to display the ratings
  - [x] Use grid to display the hotel data
  - [x] Free cancellation badge
  - [x] Exclusive deal badge
  - [ ] Support mobile design
- [x] Implement the sorting functionality
- [ ] fallback

## Trade-offs

- I use graphql instead of REST API
  - Show my knowledge of graphql since Qantas is using graphql
  - A bit complex but not too much
    - Need to write graphql schema but save time for typescript types via graphql-codegen
    - Need to introduce apollo but can leave `react-query` out

## Notes

- Put original vite readme in `doc/original-vite-readme.md`
