# Zowe API ML Squad

## Version 2.18

### API Mediation Layer

#### OIDC

- Validate OIDC Access token with ZAAS Client [#3645](https://github.com/zowe/api-layer/issues/3645)
- Validate Entra ID Access Token [#3644](https://github.com/zowe/api-layer/issues/3644)

#### Mentorship

- Properly visualize the GraphQL Documentation as part of the API Catalog [#3187](https://github.com/zowe/api-layer/issues/3187)

### Event Management

No plans

### ZEBRA

No plans

## Version 3.0

### API Mediation Layer

## V3 Build Spring Cloud Gateway as a replacement for the current Gateway #2029

Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The intention is for the SCG to fully replace the existing gateway with the release of V3.

Impact on other Zowe components: POSSIBLE

API ML Squad Plan:  
[Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)

### Event Management

No plans

### ZEBRA

No plans