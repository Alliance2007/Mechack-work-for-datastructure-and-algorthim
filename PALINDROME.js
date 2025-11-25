// palindrome
document.getElementById("checkPalindrome").addEventListener("click", function() {
    const str = document.getElementById("inputString").value;
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
        document.getElementById("result").textContent = "It's a palindrome!";
    } else {
        document.getElementById("result").textContent = "Not a palindrome.";
    }
});