// Intercepts form submission to handle the scan with AJAX 
document.getElementById('scanForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form from reloading the page

    // Disable the scan button and show loading message
    const scanButton = document.getElementById('scanButton');
    scanButton.disabled = true;
    scanButton.textContent = "Scanning...";

    // Display loading message with animation
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.style.display = 'block';
    loadingMessage.classList.add('pulse');  // Add the pulse animation

    document.getElementById('results').innerHTML = '';  // Clear previous results

    // Get form data
    const formData = new FormData(this);
    
    // Send AJAX request
    fetch('http://localhost:5001/scan', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Hide loading message and display results
        loadingMessage.style.display = 'none';
        loadingMessage.classList.remove('pulse');  // Remove the pulse animation

        document.getElementById('results').innerHTML = `<pre>${data}</pre>`;
        
        // Re-enable the scan button
        scanButton.disabled = false;
        scanButton.textContent = "Scan";
    })
    .catch(error => {
        console.error('Error:', error);
        loadingMessage.style.display = 'none';
        loadingMessage.classList.remove('pulse');  // Remove the pulse animation
        
        document.getElementById('results').innerHTML = 'Error during the scan.';
        
        // Re-enable the scan button
        scanButton.disabled = false;
        scanButton.textContent = "Scan";
    });
});

// JavaScript to toggle the Port Range field
document.getElementById('allPorts').addEventListener('change', function() {
    const portRangeField = document.getElementById('port_range');
    const portRangeContainer = document.getElementById('portRangeContainer');
    
    if (this.checked) {
        portRangeField.disabled = true;
        portRangeContainer.style.display = 'none';  // Hide the port range field
    } else {
        portRangeField.disabled = false;
        portRangeContainer.style.display = 'block';  // Show the port range field
    }
});
