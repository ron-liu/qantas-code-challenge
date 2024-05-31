# qantas-code-challenge

## Introduction

This project is a code challenge for Qantas Group Accommodation. The challenge is to build a feature that allows users to see a list of hotels that can be sorted by price. See more details on the [instructions](doc/instructions.md). Also see the [mockup page](doc/mockup.png) provided.

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

- `vite` for react
- `jest` and `react-testing-library` for testing
- `msw` for mocking Graphql requests
- `graphql-codegen` for generating types from graphql queries
- `apollo-client` for fetching data from the mocked graphql server
- `chakra-ui` for styling
- `prettier` and `eslint` for code formatting and linting

## Tasks

- [ ] Setup the project with `vite` and `react`
- [ ] Create the graphql schema
- [ ] Create the graphql server with `msw` with the sorting functionality and the sample data
- [ ] Fetch data from the graphql server with `apollo-client`
- [ ] Implement the hook to fetch the hotel data and the sorting functionality
- [ ] Implement the page layout
  - [ ] For desktop / tablet: put the content in the center with 1200px width
  - [ ] For mobile: put the content in the center with 100% width
- [ ] Implement the UI to display the hotel data
  - [ ] Create rating component to display the ratings
  - [ ] Use grid to display the hotel data
  - [ ] Support mobile design
- [ ] Implement the sorting functionality
