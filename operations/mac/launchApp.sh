#!/bin/sh 
SCRIPT_PATH="`dirname \"$0\"`"

pushd "$SCRIPT_PATH/../../"

code .
npm run dev