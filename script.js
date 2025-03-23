let count = 0;
let counterDisplay = document.getElementById("counter");

function createButton() {
    let button = document.createElement("button");
    button.innerText = "Click Me!";
    button.classList.add("button");
    button.style.top = Math.random() * (window.innerHeight - 50) + "px";
    button.style.left = Math.random() * (window.innerWidth - 100) + "px";
    button.onclick = function() {
        confettiEffect(10);
        count++;
        counterDisplay.innerText = count;
        button.remove();
        if (count >= 23) {
            showBirthdayCard();
        } else {
            createButton();
        }
    };
    document.body.appendChild(button);
}

function showBirthdayCard() {
    document.getElementById("birthdayCard").style.display = "block";
    confettiEffect(600);
}

function confettiEffect(amount) {
    for (let i = 0; i < amount; i++) {
        let confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.opacity = "0.8";
        confetti.style.borderRadius = "50%";
        confetti.style.transition = "transform 2s ease-out, opacity 2s";
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.style.transform = `translateY(${window.innerHeight}px)`;
            confetti.style.opacity = "0";
            setTimeout(() => confetti.remove(), 2000);
        }, 100);
    }
}

for (let i = 0; i < 5; i++) {
    createButton();
}
