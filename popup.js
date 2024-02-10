document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.ipify.org?format=json', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      var ipAddress = response.ip;
      document.getElementById('ip').textContent = ipAddress;

      var copyButton = document.getElementById('copyButton');
      copyButton.addEventListener('click', function() {
        // Copy IP address to clipboard
        var tempInput = document.createElement('input');
        tempInput.value = ipAddress;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      });
    }
  };
  xhr.send();
});
