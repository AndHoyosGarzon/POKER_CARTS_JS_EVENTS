//event load
document.addEventListener('DOMContentLoaded', () => {
    const idContainer = document.getElementById('container');
    idContainer.innerHTML = `
            <div class="poker">
                <div id="leftIcon" class="left icon"><i class="bi bi-suit-diamond-fill text-danger"></i></div>
                <div id="numberIcon" class="number icon">3</div>
                <div id="rightIcon" class="right icon"><i class="bi bi-suit-diamond-fill text-danger"></i></div>
            </div>

            <div class='ms-2'>
                <button id="btnChange" class="btn btn-warning fw-bold border-black p-3">CHANGE</button>
            </div>
    `;

    const simbolCard = ['<i class="bi bi-suit-diamond-fill text-danger"></i>', '<i class="bi bi-suit-heart-fill text-danger "></i>', '<i class="bi bi-suit-spade-fill"></i>', '<i class="bi bi-suit-club-fill "></i>'];
    const numStrCard = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const idBtnChange = document.getElementById('btnChange');

    function randomCard(){       
        let idLeftIcon = document.getElementById('leftIcon');
        let idNumberIcon = document.getElementById('numberIcon');
        let idRightIcon = document.getElementById('rightIcon');
        
        let numRandom = Math.floor(Math.random() * simbolCard.length);
        let iconRandom = Math.floor(Math.random() * numStrCard.length)
        
        idLeftIcon.innerHTML = simbolCard[numRandom];
        idNumberIcon.innerHTML = numStrCard[iconRandom];
        idRightIcon.innerHTML = simbolCard[numRandom];
    }

    //event click
    idBtnChange.addEventListener('click', randomCard)

})










