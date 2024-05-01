document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки по классу 'change-color'
    var links = document.querySelectorAll('.change-color');

    // Применяем обработчики событий для каждой ссылки
    links.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.style.color = 'red'; // Меняем цвет ссылки при наведении
        });

        link.addEventListener('mouseout', function() {
            this.style.color = 'blue'; // Восстанавливаем цвет ссылки
        });
    });
});