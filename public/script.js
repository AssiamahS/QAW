// Populate states dropdown
document.addEventListener('DOMContentLoaded', function() {
    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
        "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
        "West Virginia", "Wisconsin", "Wyoming"
    ];

    const stateSelect = document.getElementById('state');
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Select State";
    stateSelect.add(defaultOption);

    // Add state options
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.slice(0, 2).toUpperCase(); // Set value as the state abbreviation
        option.text = state;
        stateSelect.add(option);
    });
});

document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form inputs
    const requestor = document.getElementById('requestor').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const issue = document.getElementById('issue').value;
    const selectedService = document.getElementById('selectedService').value;

    if (requestor && lastName && email && phone && address && city && state && zip && issue && selectedService) {
        // Show success modal
        $('#successModal').modal('show');

        // Hide success modal and reset form after 10 seconds
        setTimeout(() => {
            $('#successModal').modal('hide');
            $('#ticketModal').modal('hide');
            document.getElementById('ticketForm').reset();
            $('.service-option').removeClass('selected');
        }, 10000);
    } else {
        alert('Please fill in all fields.');
    }
});

$(document).ready(function() {
    $('.service-option').click(function() {
        $('.service-option').removeClass('selected');
        $(this).addClass('selected');
        $('#selectedService').val($(this).data('service'));
    });

    $('#submitTicket').click(function() {
        $('#ticketForm').submit(); // Trigger the form submission event
    });
});
