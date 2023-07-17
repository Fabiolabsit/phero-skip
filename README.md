# Programming Hero Skip
This Script is using for Skip Programming Hero Cource skip rapidly, 

### Script
```bash
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
```

## How to use 
- Login into your Programing Hero account https://web.programming-hero.com
- Play Cource video you want to skip
- Copy the Script from github and paste it on the browser console , (Recommend Chrome Browser)
