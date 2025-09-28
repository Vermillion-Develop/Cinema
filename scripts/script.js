
/*по клику выбранный день отображаеться др цветом и наоборот*/ 
document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');//эл с классом .day
    // цикл , который перебирает каждый элемент 
    days.forEach(day => {
        //при клике запустить логику активации
        day.addEventListener('click', function() {
            days.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


/*выбор места+ расчет цены относительно количества мест*/ 
document.addEventListener('DOMContentLoaded', function() {
        const sits = document.querySelectorAll('.chair');//эл с классом .chair
        const price = 800;
        let sum = 0;
        let count = 0;
        // цикл
        sits.forEach(sit => {
         //запустить логику переключения состояния при клике
        sit.addEventListener('click', function(event) { 
            this.classList.toggle('enabled');
            if (this.classList.contains('enabled')) 
        {
            count++;
        } 
        else
        {
            count--;
        }
        sum = count * price;
        console.log(sum);
        document.querySelector('.cena').innerHTML =  sum +" ₽";
        });
         
    });
});

/*По клику на кнопку появляеться видео */
function video() {
    let a = document.getElementById("vidos");
    let elements = document.querySelectorAll('.splitImg')
        elements.forEach(element => {
            element.style.display = "none";
        })
            a.style.display = "block";
        }
        
/*При адаптации на телефонах, при нажатии на бургер-кнопку будет открываться навигация */
const menuButton = document.querySelector('.bat-nav');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});

