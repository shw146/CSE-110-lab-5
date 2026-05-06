# Lab 5 - Starter
### Lab Partners:
- Shawn Wang

### Checking Understanding:
1. I would personally not feel comfortable with using a unit test to test something described as simply the "message" feature. This feature would have too many dependencies and have to interact with a seperate user's application, so a unit test would either be overly complicated (making it unstable) or far too simple (and thus pragmatically useless)
2. It would make a lot of sense to use a unit test to test the max message length feature. This is something that would be applicable to all messages (as implemented) and would be a pretty robust thing to check that doesn't have dependencies with other portions of the application.