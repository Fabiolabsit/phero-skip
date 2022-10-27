setInterval(() => {
    const quiz = document.querySelector(".chosen-button-icon");

    if (quiz) quiz.click();

    const assignmentSkip = document.querySelector("button.mt-2.btn.btn-outline-primary.custom-modal-button.btn.btn-md");

    if (assignmentSkip) {
        assignmentSkip.click();
            setTimeout(() => {
            const okBtn = document.querySelector("button.btn.modal-ok-button");
            if (okBtn) okBtn.click()
        }, 1000)
    }

    const nextBtn = document.querySelector("button.btn.next-button");

    if (nextBtn) nextBtn.click()
}, 5000)