#!/bin/sh 
SCRIPT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

SCRIPT1="$SCRIPT_PATH/launchApp.sh"
SCRIPT2="$SCRIPT_PATH/launchTest.sh"

echo "Launching scripts..."
echo "Script 1: $SCRIPT1"
echo "Script 2: $SCRIPT2"

osascript <<EOF
tell application "Terminal"
    do script "source '$SCRIPT1'"
    tell application "System Events" to tell process "Terminal" to keystroke "t" using command down
    delay 0.5
    do script "source '$SCRIPT2'" in front window
end tell
EOF