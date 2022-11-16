1. In the opened app root create (if absent) .vscode folder with settings.json file
2. Add to the settings.json file:
{
    "cucumberautocomplete.steps": [
        "test/step-definitions/*.steps.ts",
        "node_modules/qa-lib/src/step_definitions/*.js"
    ],
    "cucumberautocomplete.strictGherkinCompletion": false
}
3. Reload app to apply all the extension changes