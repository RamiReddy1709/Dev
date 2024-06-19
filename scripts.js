document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const img = document.getElementById('uploadedImage');
        img.src = e.target.result;
        img.style.display = 'block';
        updateCSSInspector();
    };
    
    reader.readAsDataURL(file);
});

document.getElementById('brightness').addEventListener('input', function(event) {
    const brightness = event.target.value;
    const img = document.getElementById('uploadedImage');
    img.style.filter = `brightness(${brightness}%)`;
    updateCSSInspector();
});

document.getElementById('width').addEventListener('input', function(event) {
    const width = event.target.value;
    const img = document.getElementById('uploadedImage');
    img.style.width = `${width}px`;
    updateCSSInspector();
});

document.getElementById('height').addEventListener('input', function(event) {
    const height = event.target.value;
    const img = document.getElementById('uploadedImage');
    img.style.height = `${height}px`;
    updateCSSInspector();
});

document.getElementById('color').addEventListener('input', function(event) {
    const color = event.target.value;
    const img = document.getElementById('uploadedImage');
    img.style.backgroundColor = color;
    updateCSSInspector();
});

function updateCSSInspector() {
    const img = document.getElementById('uploadedImage');
    const cssProperties = `
.image-container img {
    display: ${img.style.display || 'none'};
    filter: ${img.style.filter || 'brightness(100%)'};
    width: ${img.style.width || 'auto'};
    height: ${img.style.height || 'auto'};
    background-color: ${img.style.backgroundColor || 'transparent'};
}`;
    document.getElementById('cssProperties').textContent = cssProperties;
}
