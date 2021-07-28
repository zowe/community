# Zowe Incubator : ZEBRA  - 21PI3 Objectives (AUG 2021 to OCT 2021)

## ZEBRA V1 API delivery with enhancement [#20](https://github.com/zowe/zebra/issues/20)
  
Zebra API V1 would provide users to more strucutred API requests, and intuitive way to submit requests. It intends to help system programmers to invoke from the browers if needed (for SMF data). It is currently in draft version - we need to finish documentation on zowe.org and docsite and release code to main git repo


## ZEBRA app for ZOWE Desktop  

ZOWE Desktop provides easy and useful z/OS management fucntions. We would like to do a showcase where Zebra can be exploited to do a real-time graphs within ZOWE Desktop.

## Zowe API ML Integration

Getting Zebra APIs available under the API Mediation Layer using valid authentication methods which will tie in nicely with the Desktop App.

Have the Zebra API server take a JSON Web Token (JWT) from the API layer that will be passed as the bearer token on the REST PI request, and then have the API server call back to the API Mediation Layer to validate this. 

## Containerized Zebra 
	
Currently ZEBRA has beed tested with Docker but it was only in the early version. We will provide synchonized versions of ZEBRA containers when major releases happen in the git repo.
