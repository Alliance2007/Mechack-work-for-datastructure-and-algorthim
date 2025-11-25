  document.getElementById('reverseForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('nameInput').value;
            const reversedName = name.split('').reverse().join('');
            document.getElementById('result').innerText = 'Reversed Name: ' + reversedName;
        });