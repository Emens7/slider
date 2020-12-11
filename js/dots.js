const dotsC = () => {

    const b1 = document.querySelector('#dot1');
    b1.addEventListener('click', () => {
        counter = 6;
    });
    const b2 = document.querySelector('#dot2');
    b2.addEventListener('click', () => {
        counter = 1;
    });
    const b3 = document.querySelector('#dot3');
    b3.addEventListener('click', () => {
        counter = 2;
    });
    const b4 = document.querySelector('#dot4');
    b4.addEventListener('click', () => {
        counter = 3;
    } );
    const b5 = document.querySelector('#dot5');
    b5.addEventListener('click', () => {
        counter = 4;
    });
    const b6 = document.querySelector('#dot6');
    b6.addEventListener('click', ()=> {
        counter = 5;
    })
}
export default dotsC;