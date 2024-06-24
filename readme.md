- server.js
- models/
  - Ticket.js
- public/
  - submit-ticket.html
  - success.html
  - styles.css
  - script.js
  - index.html




#success.html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Success</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Success</h1>
            <p>Your ticket has been successfully submitted. We will get back to you shortly.</p>
        </div>
    </header>
    
    <main>
        <div class="container">
            <p>Thank you for reaching out to us. Your ticket ID is #12345.</p>
            <a href="submit-ticket.html">Submit Another Ticket</a>
        </div>
    </main>
    
    <footer>
        <div class="container">
            <p>&copy; 2024 QAW Company Name. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>


