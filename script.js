document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const outputDiv = document.getElementById('output');
    const inputField = document.getElementById('input');
    const promptDiv = document.querySelector('.prompt');

    function addCommandToOutput(cmd) {
        // Add the user's command to the output
        outputDiv.innerHTML += `\n&gt; ${cmd}`;
    }

    function addOutputToTerminal(text) {
        // Add the command output text to the terminal
        outputDiv.innerHTML += `\n${text}`;
    }

    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const input = inputField.value.trim();
            if (input !== '') {
                addCommandToOutput(input);
                processCommand(input);
                inputField.value = '';
                // Keep the latest output in view
                terminal.scrollTop = terminal.scrollHeight;
            }
        }
    });

    function processCommand(input) {
        switch (input.toLowerCase()) {
            case 'mods':
                addOutputToTerminal('Modding community and resources coming soon!');
                break;
            case 'games':
                addOutputToTerminal('Check out our latest games...');
                break;
            case 'discord':
                addOutputToTerminal('Join our Discord community <a href="https://discord.gg/WYcGpjR63J" target="_blank">here</a>.');
                break;
            default:
                addOutputToTerminal('Command not recognized. Try \'Mods\', \'Games\', or \'Discord\'.');
                break;
        }
    }

    // Initial prompt
    promptDiv.innerHTML = '&gt;';
});
