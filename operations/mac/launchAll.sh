#!/bin/sh

# This is working in MacOS environment (not in VS Code terminal)

# Detect VS Code integrated terminal
if [ "$TERM_PROGRAM" = "vscode" ]; then
  printf "❌ Error: This script cannot be executed inside VS Code's terminal.\n"
  printf "➡️  Please run it from macOS Terminal or iTerm instead.\n\n"
  exit 1
fi

# Normal script logic continues...
printf "✅ Running from supported terminal.\n"

# Opens VS Code if required
while [[ "$#" -gt 0 ]]; do
  case $1 in
    --vscode) code . ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
  shift
done

SCRIPT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

SCRIPT1="$SCRIPT_PATH/launchApp.sh"
SCRIPT2="$SCRIPT_PATH/launchTest.sh"
SCRIPT3="$SCRIPT_PATH/launchTestE2e.sh"

printf "Launching scripts...\n"
printf "Script 1: $SCRIPT1\n"
printf "Script 2: $SCRIPT2\n"
printf "Script 3: $SCRIPT3\n"

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