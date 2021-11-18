### State

- Tests can not be executed locally
- Test suite is still flaky
- Test suite execution time is not acceptable (25+ min) (yarn test)
- Tests cannot be debugged or can only be debugged with great difficulty
- Warning / Error logs are being ignored
- Test quality is questionable at best
  - Testing implementation details
  - Prop in -> prop out
- Common sense about good practices in tests

### Miscs

- Test Cafe suite is flaky when chaningt the order of imports (apparently - maybe also just flaky)
- RC Backend down -> CodeceptJS flaky

### Investitgations

- AttendeeView.spec.tsx => ~5min (now skipped)
- VideoFirst.spec.tsx => ~4min

### Thoughts & Ideas

- ME not releasable, missing stable infrastructure, integration tests slow and unstable, value of mocking? delete tests any good?
- 45min pipeline run is not acceptable, some good test suits are available, improve maintability of tests, jest ESModules, issues with RTC API?
- Test run time is critical (popper.js, react-focus-lock), measure test run time in PRs, skip setTimeOut, replace with fake timers
- supress css animations, transformation time, jsdom replacement (hapyp dom, linkedom), better jest tooling (tape, ava, uvu)
