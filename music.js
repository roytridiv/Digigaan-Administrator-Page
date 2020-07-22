      // 1. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "http://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 2. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '0',
          width: '0',
          playerVars: {
                    autoplay: 1,
                    loop: 1,
                    controls: 0,
                    showinfo: 0,
                    enablejsapi: 1,
                    origin:'http://127.0.0.1:5500',
                    autohide: 1,
                    modestbranding: 1,
                    vq: 'hd1080'},
          videoId: '5PqY1KQoWfI',
          events: {
            'onReady': function (event) {
        event.target.setVolume(40);
        event.target.playVideo();
      },
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 3. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        
      }
      function stopVideo() {
        player.stopVideo();
      }