document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        fetch('/submit-ticket', {
            method: 'POST',
            body: JSON.stringify({ name, email, subject, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json(); 
            } else {
                console.error('Server response not OK:', response);
                throw new Error('Failed to submit ticket');
            }
        })
        .then(data => {
            console.log('Success:', data);
            window.location.href = 'success.html'; // Redirect to success page
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your ticket. Please try again.');
        });
    } else {
        alert('Please fill in all fields.');
    }
    });
    
    