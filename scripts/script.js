document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');

    days.forEach(day => {
        day.addEventListener('click', function() {
            days.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
        const sits = document.querySelectorAll('.chair');
        const price = 800;
        let sum = 0;
        let count = 0;
        sits.forEach(sit => {
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

