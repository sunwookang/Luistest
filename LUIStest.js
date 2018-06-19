// Testing LUIS api

< !DOCTYPE html >
    <html>
        <head>
            <title>JSSample</title>
            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        </head>
        <body>

            <script type="text/javascript">
                $(function() {

                    $.ajax({
                        url = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/b045b35d-92c5-4fb0-b03c-a41de5e0d84c?subscription-key=056b283f18234bdab64f1e3e2667d8ae&verbose=true&timezoneOffset=0&q=";
                        beforeSend: function (xhrObj) {
                            // Request headers
                            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "YOUR-SUBSCRIPTION-KEY")
                        },
                        type: "GET",
                        // The request body may be empty for a GET request
                        data: "{body}",
                    })
                        .done(function (data) {
                            // Display a popup containing the top intent
                            alert("Detected the following intent: " + data.topScoringIntent.intent)
                        })
                        .fail(function () {
                            alert("error")
                        })};
            });
</script>
        </body>
    </html>