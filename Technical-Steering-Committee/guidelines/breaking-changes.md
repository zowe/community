# Breaking Changes Policy

Having a reliable platform that can evolve is vital for the success of Zowe. We need to make the adoption of new features and change easy and smooth for the users and extenders.

Breaking changes are sometimes necessary to keep the Zowe project in a good shape. This document provides guidelines and policy about what is breaking change, how it can be introduced so the change will have minimal disruptive effects on the Zowe users and extenders.

This policy will be effective with the Zowe V2 release. It will affect how changes to V2 are introduced. Breaking changes to V2 APIs and behavior can be made in V3 at earliest.

The policy applies to projects that have reached the Generally Available (GA) and Long Term Support (LTS) stages of their lifecycle as defined in [Projects](Technical-Steering-Committee/projects.md). It does not apply to projects in earlier stages: Under Development or Technical Preview.

## Public and internal API

The term API in this document means any type of programmatic API including REST APIs, Java APIs, TypeScript APIs, and CLIs.

The user-facing configuration of Zowe components is considered as a part of their public API.

All functionality in the official Zowe documentation is part of the public API.

Any undocumented command, endpoint, object, property, method, argument, behavior, or event is internal API.

Exceptions are undocumented behaviors that are relied on by the community (e.g. `zowe jobs submit` command returns the job ID without other data or messages). Such occurrences should be reported via issues and documented over time.

Each squad determines whether functionality is internal or public. If there is an disagreement with the squads decision, one can make an appeal to the TSC.

## Breaking changes

See [Zowe Version Release Schedule](/Technical-Steering-Committee/release.md) for Zowe terminology about releases.

![Schedule for the nearest releases](/Technical-Steering-Committee/major_releases.png)

At least two squad members must approve backward-incompatible changes to the under development branch or current active or maintenance release. Changes to the development branch will be breaking changes in the upcoming active release. Breaking changes to active or maintenance release should be avoided unless necessary (for example critical fixes or security vulnerabilities).

If there is an disagreement about the breaking change, one can make an appeal to the TSC and request the change to be revisited.

**Examples of breaking changes include:**

1. CLI-specific breaking changes:

    - Adding a required argument to a command
    - Removing existing arguments
    - Changing existing fields on the JSON response or text output
    - Adding more results or fields to response for a  command that always returns a single row or single field
    - Removing or renaming existing command
    - Adding unexpected message that will prevent parsing of responses
    - Modification of documented message

2. REST API-specific breaking changes:

    - Deleting a resource or method
    - Deleting a response field
    - Modifying a resource or method URL
    - Modifying a field name
    - Modifying required query parameters
    - Modifying authentication
    - Modifying rate-limiting

3. Programmatic API-specific breaking changes:

    - Removal or change of existing arguments of API
    - Change of return value
    - Changing the side effects of using a particular API
    - Removing or modifying existing properties on an options argument
    - Adding or removing errors
    - Altering expected timing of an event

4. Web UI-specific breaking changes:

    - Removing a UI component without adding an alternative way how to access the functionality.
    - Altering an icon’s pictogram significantly while retaining the icon name.

5. Configuration-specific breaking changes:

    - The configuration file format used by Zowe's software changes (for example, from JSON to YAML)
    - A property in the configuration changes to a more restrictive type (for example, from number to boolean)
    - A property in the configuration changes meaning (for example, the meaning of an integer is changed, or a boolean swaps - meaning)
    - A property becomes required that was previously optional
    - A property is removed which prevents a previous behavior (for example, no longer being able to customize ciphers)

**Examples of non-breaking changes:**

1. CLI-specific non-breaking changes:

    - Adding a command or a command group
    - Adding optional argument
    - Adding a response field to responses with two or more fields

2. REST API-specific non-breaking changes:

    - Adding a resource or a method
    - Adding a response field
    - Adding optional query parameters

3. Programmatic API-specific non-breaking changes:

    - Adding a class or a method
    - Adding a optional parameter
    - Adding a field to a class

4. Web UI-specific non-breaking changes:

    - Adding a new UI components that do not prevent existing components from being used
    - Adding a new icon or updates to the icon’s appearance that don’t alter its meaning
    - Updates to the icon’s appearance that don’t alter its meaning
    - Fixing defects that are preventing a UI component from functioning
    - Fixing styling defects causing issues with legibility or display
    - Updating or expanding documentation

5. Configuration-specific non-breaking changes:

    - Adding new file formats without removing existing ones
    - Adding new properties that do not interfere with existing ones
    - Correcting documentation about the meaning of a property to reflect how it has been being used
    - Breaking changes in a new version of schema that are accompanied by functionality that enables using existing configuration files without any intervention (e.g. by automated migration during the update)

## Extension Compatibility

Zowe components can be extended by plug-ins, API service, or extensions. These extensions can use code from Zowe to be built (for example client libraries to access some API).
Both forward and backward compatibility is expected. Older versions of client libraries are expected to compatible with higher versions of Zowe and, as well, newer versions 
of client libraries are expected to work with old versions of Zowe (except for the functionality that has been added to the Zowe in newer versions).

Changes to this backward and forward compatibility needs to be treated as a breaking change. 

When different versions of Zowe and client libraries are expected, the client library should detect if it connects to a compatible server to prevent runtime failures 
that are difficult to diagnose.

## Deprecations

Zowe uses three Deprecation levels. For all deprecated APIs, the API documentation must state the deprecation status.

1. Documentation-Only Deprecation

    - A deprecation notice appears in the documentation in the API reference documentation and places where the functionality is described for the active and under development releases.
    - In the case of programmatic Java or Node.js APIs, deprecation mechanisms provided in the programming language are used (e.g. `@Deprecated` annotation)
    - Release notes mention the deprecation.
    - There are no functional changes.
    - By default, there will be no warnings emitted for such deprecations at runtime.

2. Runtime Deprecation

    - Emits a warning at runtime on first use of the deprecated API or when CLI is used. This the default behavior (corresponds to environment variable `ZOWE_DEPRECATION=warning` for CLI and configuration option `zowe.setup.runtimeDeprecation: warning` in `zowe.yaml` for z/OS Components).
    - Can be disabled (by environment variable `ZOWE_DEPRECATION=silent` for CLI and configuration option `zowe.setup.runtimeDeprecation: silent` in `zowe.yaml` for z/OS Components).
    - Can be changed to cause an runtime error (by `ZOWE_DEPRECATION=error` and configuration option `zowe.setup.runtimeDeprecation: error` in `zowe.yaml` for z/OS Components).

3. End-of-Life

    - Backward-incompatible changes including complete removal of such APIs or functionality can occur at any time.

Apply the `notable change` label to all pull requests that introduce Documentation-Only Deprecations. Such deprecations have no impact on code execution. Thus, they are not breaking changes.

Documentation-Only Deprecations can land in a minor release. They can change to a Runtime Deprecation after six months. They can not change to a End-of-Life until the next major release and need to be in End-of-Life at least for another six months.

All deprecations receive a unique and immutable identifier with format `DEPZWEcnnnn` where `c` is a component as defined in [Message Management](/Technical-Steering-Committee/best-practices/message-management.md) and `nnnn` is a number starting from `0001` (for example, `ZWEDEPC0001`). Documentation, warnings, and errors use the identifier when referring to the deprecation. The documentation for the deprecation identifier must always remain in the documentation. This is true even if the deprecation is no longer in use (for example, due to removal of an End-of-Life deprecated API).

No API can change to End-of-Life without going through a Runtime Deprecation cycle. There is no rule that deprecated code must progress to End-of-Life. Documentation-Only and Runtime Deprecations can remain in place for an unlimited duration.

Communicate pending deprecations and associated mitigation with the ecosystem as soon as possible. If possible, do it before the pull request adding the deprecation lands on the master branch.

### Example

1. A planned breaking change is discussed at Zowe architecture call and Zowe playback demo event.

2. Each squad decides about breaking changes of their projects. If there is an disagreement about the breaking change, one can make an appeal to the TSC.

3. The documentation of active and development releases is updated and the change is now Documentation-Only Deprecation. If there is a new functionality that replaces the deprecated one, it needs to be made available on active and development branches at least at this moment.

4. After at least six months and no push back of the community, the planned change moves to Runtime Deprecation.

5. The API or functionality can be removed at the new major release if that happens at least after six months since Runtime Deprecation and no concerns from the community. This requires another TSC review.

## Squad Responsibilities

Each squad decides and documents in [Zowe Docs](https://docs.zowe.org/):

 - What is public and internal API of the projects owned by the squad.
 - What is breaking change together with examples of breaking and non-breaking change.
 - How runtime warnings and errors are handled.

User-facing configuration of Zowe code should be documented by use of a schema, shipped with the code or present in the [Zowe Docs](https://docs.zowe.org/).

This information is to help users and extenders to understand what is can be expected to be changed and how deprecations will be done.

New page *Breaking changes* under [Getting Started](https://docs.zowe.org/stable/getting-started/overview) will be created for this.

Each squad documents internal information for contributors about technical steps how to introduce breaking change and deprecations. This will documented in a document inside the GitHub repositories and linked from the main README document of the repository.

Each squad actively seeks for methods how to detect unintentional breaking changes including adding compatibility-related conformance criteria.
