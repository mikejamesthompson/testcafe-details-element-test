# Details element visibility issue in TestCafé running on Chrome

This repo illustrates an issue with TestCafé in Chrome mistakenly treating
the content within a closed `details` element as visible.

To build and run:
```
make
```

The output will show the test passing in Firefox and failing in Chrome, as
per the output of [this GitHub action](https://github.com/mikejamesthompson/testcafe-details-element-test/runs/5382228745?check_suite_focus=true).