# Zowe Deployment working group - 20PI3 Objectives (June 2020 to September 2020)

*Note: these efforts require design and validation, so may only be PoCs, or beta releases in this PI* 

#### [Packaging](https://github.com/zowe/zowe-install-packaging/issues/1440)
* As a Zowe extender I can follow guidance to package my offering in a way that z/OS system programmers can add it to their existing Zowe instances in a consistent way.

#### [Extend lifecycle Management](https://github.com/zowe/zowe-install-packaging/issues/1440)
* As a Zowe System Administrator I can manage the install and configuration of core components and extensions to Zowe in a more flexible, reliable, and consistent manner across offerings.
* As a Zowe System Administrator I can manage the start/stop lifecycle of components within Zowe in a familiar way to me utilising MVS console commands, or unix scripts [#790].(https://github.com/zowe/zowe-install-packaging/issues/790)
* As a Zowe committer/extender I want to have more flexibility and hooks in Zowe lifecycle process in order to more flexibly manage the install and configuration of my component and get notified about instance creation, upgrades without having to create custom code in zowe-install-packaging.

#### [Containerisation](https://github.com/zowe/zowe-install-packaging/issues/793)
* As a Zowe System Administrator, or Zowe committer I can run Zowe in a hybrid, containerised environment, so I can take advantage of reduced CPU usage on z/OS and get the scaling and management benefits of containers that my distributed tools colleagues enjoy.