export const TemplateFileMockup = `{
    "templateLines": [
        {
            "description": "first line",
            "lineFields": [
                {
                    "name": "commit type",
                    "type": "select",
                    "textBefore": "",
                    "textAfter": "",
                    "question": "Commit type",
                    "description": "",
                    "data": [
                        "fix",
                        "feat"
                    ]
                },
                {
                    "name": "scope",
                    "type": "text",
                    "textBefore": "(",
                    "textAfter": "):",
                    "question": "Scope:",
                    "description": "Scope of affected module.",
                    "data": []
                },
                {
                    "name": "message",
                    "type": "text",
                    "textBefore": " ",
                    "textAfter": "",
                    "question": "Commit message:",
                    "description": "Message of commit",
                    "data": []
                }
            ]
        }
    ]
}`;
