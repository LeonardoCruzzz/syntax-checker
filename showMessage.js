let count = 0;
function showError (index, message, line) {
    count++;

    if (count === 1 && index !== 0) {
        console.log(`Erro na linha: ${index} \nExperado: \u001b[32m${message}\u001b[0m \nCódigo: \u001b[31m${line}\u001b[0m`);
    }

    if (count === 1 && index === 0) {
        console.log(`\u001b[32m${message}\u001b[0m \n`);
    }
};

module.exports = showError;