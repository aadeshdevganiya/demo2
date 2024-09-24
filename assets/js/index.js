$(document).ready(function() {
    // Add new input field inside the box when clicking +
    $('.btn-add').click(function() {
        // Get the value from the previous input field
        let timeValue = $(this).siblings('input[type="text"]').val();

        // Check if the input is not empty
        if (timeValue) {
            // Create a new input field with a minus button to remove it
            let newInput = `
                <div class="input-group">
                    <input type="text" value="${timeValue}" placeholder="slot" >
                    <a class="btn-remove">-</a>
                </div>`;
            
            // Append the new input field to the .box where the button was clicked
            $(this).closest('.box').append(newInput);
            // Clear the input field after adding
            $(this).siblings('input[type="text"]').val('');
        } else {
            alert("Please enter a time before adding.");
        }
    });

    // Remove an input field when the - button is clicked
    $('.box').on('click', '.btn-remove', function() {
        $(this).closest('.input-group').remove();
    });
});
