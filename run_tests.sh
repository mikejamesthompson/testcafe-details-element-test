#!/bin/bash

npm run start &
npm run test-firefox &&
npm run test-chrome

exit $?
