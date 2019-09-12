
    //update this with your $form selector
    var form_id = "inline_email";

    var data = {
        "access_token": "2245pz0eohpxv0v516d91x44" // sent after you sign up
    };

    function onSuccess() {
        // remove this to avoid redirect
        alert("The message has been sent successfully")
	var sendButton = $("#" + form_id + " [name='sendemail']");
	sendButton.val('SEND MESSAGE');
        sendButton.prop('disabled',false);
    }

    function onError(error) {
        // remove this to avoid redirect
        alert("The message has not been sent please review the message and send again");
	var sendButton = $("#" + form_id + " [name='sendemail']");
	sendButton.val('SEND MESSAGE');
        sendButton.prop('disabled',false);
    }

    var sendButton = $("#" + form_id + " [name='sendemail']");

    function send() {
        sendButton.val('Sending…');
        sendButton.prop('disabled',true);

        var subject = $("#" + form_id + " [name='subject']").val();
        var message = $("#" + form_id + " [name='pmmessage']").val();
	var pmname = $("#" + form_id + " [name='pmname']").val();
	var pmemail = $("#" + form_id + " [name='pmemail']").val();
	var pmphone = $("#" + form_id + " [name='pmphone']").val();
    var totalmessage = "Name = " + pmname + "\nEmail = " + pmemail + "\nphone number = " + pmphone + "\nMessage = " + message
    //alert(totalmessage);
        data['subject'] = subject;
        data['text'] = totalmessage;

        $.post('https://postmail.invotes.com/send',
            data,
            onSuccess
        ).fail(onError);

        return false;
    }

    sendButton.on('click', send);

    var $form = $("#" + form_id);
    $form.submit(function( event ) {
        event.preventDefault();
    });
