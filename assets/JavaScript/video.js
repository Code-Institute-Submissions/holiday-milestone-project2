// Video - this is the JavaScript for the videos on the tour page //

$(document).ready(function () // $ for hey jQuery about to use you. When the document is ready I want you to do something.
{
	var key = 'AIzaSyCWVw5gZbYoFoEVq8IAdOhCpHXLltHoeags'; // Api key is here
	var playlistId = '?v=EN24mEdCQTU'; // Playlist ID is here
	var URL = 'https://www.googleapis.com/youtube/v3/playlists'; // URL is here

	var options = { // Options sending information like snippet etc
		part: 'snippet',
		key: key,
		maxResults: 2,
		playlistId: playlistId
	}

	loadVids();

	function loadVids() // This function loads the videos
	{
		$.getJSON(URL, options, function (data)
		{
			console.log(data)
			var id = data.items[0].snippet.resourceId.videoId;
			mainVid();
		})
	}

	function mainVid(id) // This function finds the container and then inputs
	{
		$('#video').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `);
	}
});