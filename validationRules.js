const rules = [
    {
        genericRule: /^<.*>/gi,
        specificRule: [
            {
                rule: /<.*>/,
                message: "#include <nome.extensão>"
            },
        ],
    },
    {
        genericRule: /^#\s*<.*>/gi,
        specificRule: [
            {
                rule: /#\s*<.*>/,
                message: "#include <nome.extensão>"
            },
        ],
    },
    {
        genericRule: /^#include*/gi,
        specificRule: [
            {
                rule: /<[A-z]*>/,
                message: "<nome.extensão>"
            },
            {
                negativeRule: /^#include\s*<[A-z]+.[A-z]+>$/,
                message: "#include <nome.extensão>"
            }
        ],
    },
    {
        genericRule: /^int main*/gi,
        specificRule: [
            {
                rule: /main\s*\(\s*$/,
                message: ")",
            },
            {
                rule: /main\s*\)\s*$/,
                message: "(",
            },
            {
                negativeRule: /int\s*main\(/,
                message: "int main()",
            },
        ]
    },
    {
        genericRule: /^int\s*[A-z]+\s*(,|;)/gi,
        specificRule: [
            {
                rule: /int\s*([A-z]+\s*$|[A-z]+\s*,\s*[A-z]+\s*$|[A-z]+\s*,\s*[A-z]+\s*,\s*[A-z]+\s*$)$/,
                message: ";",
            },
            {
                negativeRule: /int\s*([A-z]+\s*;$|[A-z]+\s*,\s*[A-z]+\s*;$|[A-z]+\s*,\s*[A-z]+\s*,\s*[A-z]+\s*;$)/,
                message: "int valor; ou int valor1, valor2; ou int valor1, valor2, valor3;",
            },
        ]
    },
    {
        genericRule: /^printf*/gi,
        specificRule: [
            {
                rule: /printf\(.*\)$/,
                message: ";",
            },
            {
                negativeRule: /\(.*/,
                message: "(",
            },
            {
                negativeRule: /.*\)/,
                message: ")",
            },
            {
                rule: /printf\(.*\);;+/,
                message: "somente um ;",
            },
            {
                negativeRule: /printf\(.*\);$/,
                message: "printf(...);",
            }
        ]
    },
    {
        genericRule: /^scanf*/gi,
        specificRule: [
            {
                rule: /scanf\(.*\)$/,
                message: ";",
            },
            {
                negativeRule: /\(.*/,
                message: "(",
            },
            {
                negativeRule: /.*\)/,
                message: ")",
            },
            {
                negativeRule: /".*"/,
                message: '"',
            },
            {
                negativeRule: /%(d|c|f|s)/,
                message: "%d ou %c ou %f ou %s",
            },
            {
                rule: /scanf\(.*\);;+/,
                message: "somente um ;",
            },
            {
                rule: /".*"\s*&[A-z]+/,
                message: ",",
            },
            {
                negativeRule: /scanf\(.*\);$/,
                message: "scanf(...);",
            }
        ]
    },
    {
        genericRule: /=/gi,
        specificRule: [
            {
                negativeRule: /[A-z]*\s*=\s*.*/,
                message: "var1 = valor; ou var1 = valor1 + valor2",
            },
            {
                negativeRule: /[A-z]*\s*=\s*.*;$/,
                message: ";",
            }
        ]
    },
    {
        genericRule: /^return*/gi,
        specificRule: [
            {
                rule: /return\s*[A-z0-9]*$/,
                message: ";",
            },
            {
                rule: /^return\s*;$/,
                message: "return valor;",
            },
            {
                negativeRule: /^return\s*[A-z0-9]*;$/,
                message: "return ...;",
            }
        ]
    }
];

module.exports = rules;