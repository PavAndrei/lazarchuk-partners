
import BiggerPicture from "bigger-picture";
import "bigger-picture/css";


function getVideoPlayer() {

    let bp = BiggerPicture({
        target: document.body
    });

    const popupVideoPlayer = document.querySelector('.promo__popup-link');
    const popupSVG = document.querySelector('.icon--player-btn');

    function openBiggerPicture(e) {
        e.preventDefault();
        popupSVG.classList.add('icon--player-btn--closed');
        bp.open({
            items: this,
            el: this,
            onClosed() {
                popupSVG.classList.remove('icon--player-btn--closed');
            }
        });
    }

    popupVideoPlayer.addEventListener('click', openBiggerPicture);
}

export default getVideoPlayer;