function slider() {



let slideIndex = 1, // это перемення отвечает за слайд который находится в текущий момент
slides = document.querySelectorAll('.slider-item'), //взыввем наши слайдеры все
prev = document.querySelector('.prev'), //взыввем наши // cтрелочку крторая двигает слайдер назад
next = document.querySelector('.next'), //взыввем наши // cтрелочку крторая двигает слайдер вперед
dotsWrap = document.querySelector('.slider-dots'), //получаем обертку наших точек
dots = document.querySelectorAll('.dot'); //получаем все точки которые будут использоваться

showSlides(slideIndex);

function showSlides(n) { //это функция будет принимать один аргумент для того чобы она переключала слайды

if (n > slides.length) { // пишим условие для слайдов
    slideIndex = 1; //установливвем слайдер на 1
}

if (n < 1) { // пишим обратное условие
    slideIndex = slides.length; // если мы нажимаем стрелку назад на 1 слайде показывается последний слайд
}
slides.forEach((item) => item.style.display = 'none'); //1 способ каждому слайдеру передаём убрать дисплей
//закомментировали после 10:50 for (let i = 0; i < clides.length; i++) { //2 способ каждому слайдеру передаём убрать дисплей
//slides[i].style.display = 'none'; //2 способ каждому слайдеру передаём убрать дисплей
//}

dots.forEach((item) => item.classList.remove('dot-active')); // уберает классы dot-active  с точек

slides[slideIndex - 1].style.display = 'block'; //показываем такой записью 1 слайд
dots[slideIndex - 1].classList.add('dot-active'); // показываем такой записью 1 точку
}

function plusSlides(n) { //это функция меняет slideIndex для чтобы менять картинки в слайде
showSlides(slideIndex += n);
}

function currentSlaide(n) { //это функция прописывается чтобы узнать какой сейчас слайд стоит
showSlides(slideIndex = n);
}

prev.addEventListener('click', function () { //это пишется для кнопки перемещение назад
plusSlides(-1);
});

next.addEventListener('click', function () { //это пишется для кнопки перемещение вперед
plusSlides(1);
});
dotsWrap.addEventListener('click', function(event) {//эту функция для точек  в слайдах
for (let i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
        currentSlaide(i);
    }
}
});

}

module.exports = slider;