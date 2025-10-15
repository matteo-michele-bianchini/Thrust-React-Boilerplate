#!/bin/sh

# This is working with VS Code in MacOS environment 

SCRIPT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

SCRIPT1="$SCRIPT_PATH/launchApp.sh"
SCRIPT2="$SCRIPT_PATH/launchTest.sh"
SCRIPT3="$SCRIPT_PATH/launchTestE2e.sh"

echo "Launching scripts..."
echo "Script 1: $SCRIPT1"
echo "Script 2: $SCRIPT2"
echo "Script 3: $SCRIPT3"

osascript <<EOF
tell application "Terminal"
    do script "source '$SCRIPT1'"
    tell application "System Events" to tell process "Terminal" to keystroke "t" using command down
    delay 0.5
    do script "source '$SCRIPT2'" in front window
    tell application "System Events" to tell process "Terminal" to keystroke "t" using command down
    delay 0.5
    do script "source '$SCRIPT3'" in front window
end tell
EOF