const playButton = document.getElementById('playButton');
        const audioPlayer = document.getElementById('audioPlayer');
        const openDialogButton = document.getElementById('openDialogButton');
        const openDialogButton2 = document.getElementById('openDialogButton2');
        const openDialogButton3 = document.getElementById('openDialogButton3');
        const myDialog = document.getElementById('myDialog');
        const myDialog2 = document.getElementById('myDialog2');
        const myDialog3 = document.getElementById('myDialog3');
    
        playButton.addEventListener('click', function() {
          if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'Pausar Áudio';
          } else {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            playButton.textContent = 'Reproduzir Áudio';
          }
        });

        openDialogButton.addEventListener('click', function() {
          myDialog.showModal();
        });

        openDialogButton2.addEventListener('click', function() {
          myDialog2.showModal();
        });

        openDialogButton3.addEventListener('click', function() {
          myDialog3.showModal();
        });

        document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll('.accordion-button');

    // accordions.forEach(function(accordion) {
    //     accordion.addEventListener('click', function() {
    //         this.classList.toggle('active');
    //         var content = this.nextElementSibling;
    //         if (content.style.display === "block") {
    //             content.style.display = "none";
    //         } else {
    //             content.style.display = "block";
    //         }
    //     });
    // });
});