const fs = require("fs");
const rules = require("./validationRules");
const showMessage = require("./showMessage")

function load(contentFilePath) {
    const fileBuffer = fs.readFileSync(contentFilePath, "utf8");
    
    const content = JSON.stringify(fileBuffer);

    const line = content.replace(/(^"|"$)/g, "").split(/\\r\\n/g);

    const lines = line.map((line, index) => {
        return line.trim();
    });

    lines.forEach((line, index) => {
        rules.forEach(rule => {

            if (line.match(rule.genericRule)) {
                rule.specificRule.map(specificRule => {
                    if (specificRule.rule) {
                        if (line.match(specificRule.rule)) {
                            showMessage(index + 1, specificRule.message, line);
                        } 
                    }
                    
                    if (specificRule.negativeRule) {
                        if (!line.match(specificRule.negativeRule)) {
                            showMessage(index + 1, specificRule.message, line);
                        }
                    }
                });
            }
        })
    });
    showMessage(0, "Compilado com sucesso!");
}

load("./code.c");