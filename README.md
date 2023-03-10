# [TDD Fundamentals in Typescript](https://www.udemy.com/course/tdd-fundamentals-in-typescript)

![typescript](https://img.shields.io/badge/typescript-4.9.5-blue) ![vitest](https://img.shields.io/badge/vitest-0.28.5-red) ![node](https://img.shields.io/badge/node-v18.12.0-green) ![pnpm](https://img.shields.io/badge/pnpm-7.26.2-yellow)

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Principles of TDD](#principles-of-tdd)
- [TDD Process](#tdd-process)
- [Getting Started with TDD](#getting-started-with-tdd)
- [First Principles](#first-principles)
- [Conclusion](#conclusion)

## Introduction

Test-Driven Development (TDD) is a software development process that emphasizes writing automated tests before writing the code. The goal of TDD is to produce higher quality, more reliable code through a rigorous and iterative development process.

## Prerequisites

Observations: currently, I am using different tools to develop this project, Jest is replaced by Vitest, and Npm is replaced by Pnpm (I am using Pnpm because it is faster than Npm and Yarn) but feel free to use any other tools you want.

- [Node.js](https://nodejs.org/en/) (v14.17.0 or higher)
- [pnpm](https://pnpm.io/)
- [Vitest](https://vitest.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Git](https://git-scm.com/)

## Getting Started

1. Clone the repository

```bash
git clone
```

2. Install dependencies

```bash
pnpm install
```

3. Run tests

```bash
pnpm test
```

## Principles of TDD

The principles of TDD include:

Write a failing test before writing any production code.
Write the simplest code that makes the test pass.
Refactor the code to improve its quality while ensuring that all tests pass.
Benefits of TDD
TDD offers several benefits to software developers and organizations:

Better code quality: TDD encourages developers to write cleaner and more maintainable code by focusing on writing tests first.
Faster development cycles: TDD can help speed up the development process by catching bugs earlier and reducing the time required for manual testing.
Improved collaboration: TDD can help improve collaboration between developers, testers, and other stakeholders by providing a common set of tests to evaluate the code.

## TDD Process

The TDD process typically involves the following steps:

Write a test: Start by writing a test that describes a specific behavior or functionality you want to implement.
Run the test: Run the test and verify that it fails, indicating that the functionality has not yet been implemented.
Write the code: Write the code necessary to pass the test.
Run the test: Run the test again to ensure that it passes.
Refactor the code: Refactor the code to improve its quality and ensure that all tests still pass.
Repeat: Repeat the process with additional tests and functionality.
Getting Started with TDD
To get started with TDD, you will need to become familiar with a testing framework that supports TDD, such as Jest, Mocha, or PHPUnit. You will also need to become familiar with the TDD process and the principles behind it. Once you are comfortable with the process, you can begin practicing TDD on your own projects.

## First Principles

First principles of testing stand for

- Fast
- Isolated/Independent
- Repeatable
- Self-validating
- thorough

Bugs are introduced in the parts of code, which we usually don???t pay attention to, or places which are too hard to understand.

_Fast_

- The developer shouldn???t hesitate to run the run the unit tests at any point of their development cycle, even if there are thousands of unit tests. They should run and show you the desired output in a matter of seconds

_Isolated/Independent_

- For any given unit test, for its environment variables or for its setup. It should be independent of everything else should so that it results is not influenced by any other factor.
- Should follow the [3 A???s of testing:Arrange, Act, Assert](https://xp123.com/articles/3a-arrange-act-assert/)
- In some literature, it's also called as [Given, When, Then](https://martinfowler.com/bliki/GivenWhenThen.html)

- Arrange
  All the data should be provided to the test when you???re about to run the test and it should not depend on the environment you are running the tests
- Act
  Invoke the actual method under test
- Assert
  At any given point, a unit test should only assert one logical outcome, multiple physical asserts can be part of this physical assert, as long as they all act on the state of the same object.

Preferably, don???t do any actions after the assert call

_Repeatable_

- tests should be repeatable and deterministic, their values shouldn???t change based on being run on different environments.

- Each test should set up its own data and should not depend on any external factors to run its test

_Self-validating_

- you shouldn???t need to check manually, whether the test passed or not. The test should be able to tell you whether it passed or not.

_Thorough_

- The test should cover all the possible scenarios, and should not be limited to just the happy path.

## Conclusion

Test-Driven Development is a powerful software development process that can help improve code quality, speed up development cycles, and improve collaboration. By writing tests before writing the code, developers can create cleaner, more reliable code that is easier to maintain over time.
