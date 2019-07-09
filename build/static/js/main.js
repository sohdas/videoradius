$('input#submitButton').click( function() {
    $.post( 'some-url', $('form#myForm').serialize(), function(data) {
       },
       'json' // I expect a JSON response
    );
});
function getVideos(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){

            $("#videoContainer").empty();

            pos = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };

            radius = parseInt($("#radiusInput").val());
            url = "https://www.googleapis.com/youtube/v3/search?maxResults=50&order=viewCount&part=snippet&location="+pos.lat+"%2C"+pos.lon+"&locationRadius="+ radius +"ft&type=video&key=" + api_key;
            
            $.get(url, function(data){

                $("#videoCount").html("There are "+ data.pageInfo.totalResults + " video(s) filmed within "+ radius +" ft of your location.");
                
                for (x = 0; x < data.items.length; x += 1){
                    video_id = data.items[x].id.videoId;
                    $("#videoContainer").append('<iframe width="800" height="500" align="middle" src="https://www.youtube.com/embed/'+ video_id +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                }

            });
        });
    } else {
        console.log('Geolocation is disabled on this browser.');
    }
}
