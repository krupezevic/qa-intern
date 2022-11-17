## Setup for maping steps in VSCode  
Use when the shortcut in *.feature file "Ctrl + left mouse click" does not switch to the *.steps.ts file function
Steps for setup:
1. Install from VSCode extension: "Cucumber Full Language Support"
2. In the opened app root create (if absent) .vscode folder with settings.json file
3. Add to the settings.json file:
```
{
    "cucumberautocomplete.steps": [
        "test/step-definitions/*.steps.ts",
        "node_modules/qa-lib/src/step_definitions/*.js"
    ],
    "cucumberautocomplete.strictGherkinCompletion": false
}
```
4. Reload app to apply all the extension changes