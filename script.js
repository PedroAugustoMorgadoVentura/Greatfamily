document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const messageSection = document.getElementById('messageSection');
    const nextStepButton = document.getElementById('nextStep');
    const finalMessage = document.getElementById('finalMessage');

    // Ao clicar no botão "Começar"
    startButton.addEventListener('click', function () {
        startButton.style.display = 'none'; // Esconde o botão inicial
        messageSection.classList.remove('d-none'); // Mostra a mensagem
    });

    // Ao clicar no botão "Pronta"
    nextStepButton.addEventListener('click', function () {
        messageSection.style.display = 'none'; // Esconde a seção da mensagem
        finalMessage.classList.remove('d-none'); // Mostra a mensagem final
    });
});
