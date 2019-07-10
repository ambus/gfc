export const TemplateFileMockup = `{
    "templateLines": [
        {
            "description": "first line",
            "lineFields": [
                {
                    "name": "commit type",
                    "type": "select",
                    "startString": "",
                    "endString": "",
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
                    "startString": "(",
                    "endString": "):",
                    "question": "Scope:",
                    "description": "Scope of affected module.",
                    "data": []
                },
                {
                    "name": "message",
                    "type": "text",
                    "startString": " ",
                    "endString": "",
                    "question": "Commit message:",
                    "description": "Message of commit",
                    "data": []
                }
            ]
        }
    ]
}`;
