$(document).ready(function() {
    var key = 'AIzaSyCWVw5gZbYoFoEVq8IAdOhCpHXLltHoeags';
    var playlistId = '?v=EN24mEdCQTU';
    var URL = 'https://www.googleapis.com/youtube/v3/playlists';

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 2,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function(data) {
            console.log(data)
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid();
        })
    }

    function mainVid(id) {
        $('#video').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `);
    }
});