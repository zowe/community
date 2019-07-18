# Coding style guidelines for Zowe sub-projects

Zowe's codebase is split into a few key areas, with both unique and shared guidelines on how new code should be written. For each area of the codebase, there are established and favored languages for the code to be written in. Each repo in Github identifies the primary language used. 

These guidelines are meant to apply to all areas of the Zowe project. Each sub-project may adopt additional coding style guidelines specific to thier sub-project and the language(s) used.

## Whitespaces

Tabs should not be used for whitespace, instead being replaced with 2 spaces per tab.

## Naming Conventions

Function and Method Naming Self-documenting code reduces the need for extended code comments. It is encouraged to use names as long as necessary to describe what is occurring. Generally speaking, methods should be named as verbs (Think: get or set), while Objects/Classes should be nouns. Objects and functions should be CamelCase, while methods on Objects should be dromedaryCase Variable Naming Constants should be CAPITALIZED_AND_UNDERSCORED for clarity, while variables can remain dromedaryCase as methods are. Avoid non-descriptive variable names such as single letters (except for iteration in loops such as i or j) and variable names that have been arbitrarily shortened (Don't strip vowels, long variable names are OK)

## Commenting

Uncertainties, unimplemented but known future action items, and odd/specific constants should all be accompanied with a short comment to make others aware of the reasoning that went into the code.

## Code documentation

It's expected that all new code added comes with documentation. Documentation for component functionality should be included in the Zowe Docs, and documentation for individual classes and functions should be inline with the using the tools specific to that language.

Each of the common languages in Zowe have code-documentation-generation tools, each with their own in-code comment style requirements to adhere to in order to generate nice, readable API references. Objects and functions of interest should be commented in accordance to the language-specific tools to result in output that serves as the first point of documentation for APIs.

- Typescript - [JSDoc](http://usejsdoc.org/)
  - If you are writing in an area of the codebase that does not yet have a definition file for jsdoc, be sure to define a configuration file that can be used for future documentation of that code.
- Java - [Javadoc](https://en.wikipedia.org/wiki/Javadoc)
- C - [Doxygen](www.doxygen.org)
