# Services
Instance used for separation buisness logic of the application
## Dependency Injection
In angular the dependency is provided from the highest module to the lowest. So from parent to child components <br>
It is not passed up. So if service is provided for child it won't be the same service provided for parent