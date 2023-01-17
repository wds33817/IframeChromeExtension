chrome.runtime.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		//console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		/*
		document.body.addEventListener("click", spinstuff);

		function spinstuff(){
			console.log("spinning");


			document.body.animate([
				{ transform: 'rotate(0) scale(1)' },
  				{ transform: 'rotate(360deg) scale(0)' }
				], {
				duration: 2000,
				iterations: 1
			}
				);
		}
		*/


		const videoPlayer = document.getElementById("video-player");
		videoPlayer.src = "https://www.youtube.com/embed/6UlU_FsicK8";
		videoPlayer.play();






		/*
		const collection = document.getElementsByClassName("pia-image");

		document.body.addEventListener("mousedown", event => {
			var name = event.key;

			if (name == 'F4') {
				spinPia;
				console.log("it is spinning!");
			} 
			else if (name == '\\') {
				function scrollTop() {
				    const container = document.querySelector(".chat-messages-container");
				    container.scrollTop = 0;
				}
				scrollTop();
				var myTimer = setInterval(function(){scrollTop()}, 600);
				setTimeout(() => {clearInterval(myTimer)}, 6000);
				   

				function orchestratorEmbed() {
					var embed = document.getElementsByClassName("orchestrator-embed");
					embed[0].style.height = "2000px";
				}   

				function orchestratorChatContainer() {
					var container = document.getElementsByClassName("orchestrator-chat-container");
					container[0].style.height = "2000px";
				}

				function printWholePage() {
					window.print();
				}


				setTimeout(orchestratorEmbed, 6000);
				setTimeout(orchestratorChatContainer, 6000);
				setTimeout(printWholePage, 6800);
				console.log("it is scrolling up!");
			}
		});

		function spinPia() {
			collection[0].animate(
				[
				{ transform: 'rotate(0) scale(1)' },
  				{ transform: 'rotate(360deg) scale(0)' }
				], {
				duration: 5000,
				iterations: 1
			});
			const audio = new Audio();

			const sounds = ["https://sounds.pond5.com/falling-deep-abyss-male-scream-sound-effect-041785715_nw_prev.m4a", 
				            "https://sounds.pond5.com/male-screaming-falling-down-mountain-sound-effect-167130748_nw_prev.m4a", 
				            "https://sounds.pond5.com/fat-man-falling-scream-sound-effect-036237741_nw_prev.m4a"];

			audio.src = sounds[getRandomInt(4)];
			audio.playbackRate = 0.7;
			audio.play();
		}
		function getRandomInt(max) {
		    return Math.floor(Math.random() * max);
		}



		
		console.API;
		if (typeof console._commandLineAPI !== 'undefined') {
		    console.API = console._commandLineAPI; //chrome
		} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
		    console.API = console._inspectorCommandLineAPI; //Safari
		} else if (typeof console.clear !== 'undefined') {
		    console.API = console;
		}
		console.API.clear();
		var cleanConsole = setInterval(function(){console.API.clear()}, 15000);
		console.log("console has been cleaned");
		*/





		


		

	}
	}, 10);
});