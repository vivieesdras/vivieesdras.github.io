// Seleciona todos os botões "PRESENTEAR"
const botoesPresentear = document.querySelectorAll(".presente-item > button");

botoesPresentear.forEach(botao => {
    botao.addEventListener("click", () => {
        // Pega o article pai desse botão
        const artigo = botao.closest(".presente-item");
        if (!artigo) return;

        // Seleciona o modal dentro desse article
        const modal = artigo.querySelector(".modal-pagamento");
        if (!modal) return;

        // Adiciona a classe active para mostrar o modal
        modal.classList.add("active");
    });
});

// Opcional: fechar o modal quando clicar fora ou adicionar botão de fechar
document.querySelectorAll(".modal-pagamento").forEach(modal => {
    modal.addEventListener("click", (e) => {
        // Se clicar no próprio modal (fundo), fecha
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // Se quiser adicionar um botão interno para fechar
    const btnClose = modal.querySelector(".btnClose");
    if (btnClose) {
        btnClose.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }
});


// -----------------------------
// FEEDBACK DO PIX
// -----------------------------
function showPixFeedback(message) {
    const box = document.getElementById("feedback");
    const text = document.getElementById("feedback-text");

    if (text) text.textContent = message;
    if (box) {
        box.classList.remove("hidden");

        // Fecha automaticamente após 3 segundos
        setTimeout(() => {
            box.classList.add("hidden");
        }, 3000);
    }
}

// -----------------------------
// BOTÕES PIX
// -----------------------------
const botoesPix = document.querySelectorAll(".copiar-pix");

botoesPix.forEach(botao => {
    botao.addEventListener("click", () => {
        const codigoPix = botao.getAttribute("data-pix");

        navigator.clipboard.writeText(codigoPix)
            .then(() => {
                showPixFeedback("Código Pix copiado!");
            })
            .catch(error => {
                showPixFeedback("Erro ao copiar o Pix!");
                console.error(error);
            });
    });
});
