let initated = false;

function youtubeInit() {
	if (!initated) {
		initated = true;
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		document.querySelector('body').appendChild(tag);
		document.getElementById('player').style.background = 'url(/img/gif/loading.gif) center / 50px no-repeat';
	}
}

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '100%',
		width: '100%',
		videoId: 'dl16e_mG6hg',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) { }
var done = false;
function onPlayerStateChange(event) { }
function stopVideo() {
	player.stopVideo();
}
