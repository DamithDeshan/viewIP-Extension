document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.ipify.org?format=json', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      var ipAddress = response.ip;
      document.getElementById('ip').textContent = ipAddress;

      var copyButton = document.getElementById('copyButton');
      var copiedIcon = document.getElementById('copiedIcon');
      var copyIcon = document.getElementById('copyIcon');

      var messageContainer = document.getElementById('message');

      copyButton.addEventListener('click', function() {
        // Copy IP address to clipboard
        var tempInput = document.createElement('input');
        tempInput.value = ipAddress;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Show copied icon
        copiedIcon.style.display = 'inline';
        copyIcon.style.display = 'none';

        // Show message
        messageContainer.textContent = 'IP copied..!';
        setTimeout(function() {
          messageContainer.textContent = ''; // Clear message after a delay
          copiedIcon.style.display = 'inline'; // whow copied icon after a delay
           // Hide copy icon after a delay
        }, 3000); // Delay in milliseconds

      });
    }
  };
  xhr.send();
});
