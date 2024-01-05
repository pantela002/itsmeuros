document.addEventListener('DOMContentLoaded', async function () {
    const canvas = document.getElementById('drawCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    const deleteButton = document.getElementById('deleteButton');
    const downloadButton = document.getElementById('downloadButton');
    const predictButton = document.getElementById('predictButton');
    

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!isDrawing) return;

        ctx.lineWidth = 30;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'white';

        const offsetX = e.clientX - canvas.getBoundingClientRect().left;
        const offsetY = e.clientY - canvas.getBoundingClientRect().top;

        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
    }

    function deleteDrawing() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function downloadDrawing() {
        // Create a temporary canvas
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = 28;
        tempCanvas.height = 28;

        // Set background color to black
        tempCtx.fillStyle = 'black';
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        // Draw white drawings on the black background
        tempCtx.drawImage(canvas, 0, 0, 28, 28);

        // Create download link
        const dataUrl = tempCanvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'drawing.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

  
    predictButton.addEventListener('click', async function () {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const prediction = await predictNumber(imageData);
        console.log(`Prediction: ${prediction}`);
    });

    deleteButton.addEventListener('click', deleteDrawing);
    downloadButton.addEventListener('click', downloadDrawing);
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
});
