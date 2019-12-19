var form = document.getElementsByTagName('form');

function submitAlert() {
    if (form[0].checkValidity()) {
        alert('Thank you for your feedback!');
    } else if (form[1].checkValidity()) {
        alert('Thank you for telling me more about the webpage');
    }
}