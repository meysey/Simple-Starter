$(document).ready(function(){
	$('.slider').slick({
		// Свойства:
		arrows:true, // если по дизайну не нужны стрелки,то указываем false
		dots: true, // включает точки внизу слайдера
		adaptiveHeight: true, // автоматическая адаптивная высота слайдера, подстраивается под разные размеры
		slidesToShow: 1, // кол-во файлов, которые мы хотим отобразить
		slidesToScroll: 1, // кол-во файлов, которые мы хотим проскролить
		speed: 1000, // скорость слайдера
		easing: 'linear', // отвечает за тип анимации при смене нашего слайдера
		infinite: false, // отвечает за бесконечность слайдера
		initialSlide: 3, // стартовый слайд
		autoplay: true, // автопроигрование слайдера
		autoplaySpeed: 5000, // скорость автопроигрование
		pauseOnFocus: true, // остановка автороигрования / клик
		pauseOnHover: true, // остановка автороигрования
		pauseOnDotsHover: true, // остановка автороигрования
		draggable: false, // прокрутка палцем на пк
		swipe: false, // прокрутка палцем на tel
		touchThreshold: 10, // расстояние необходимое для свайпа
		touchMove: false, // возможности touch скрина
		waitForAnimate: true, // возможность спамить переключениями слайда
		centerMode: false, // делает активный слайд центральным
		variableWidth: false, // автоматическая адоптивность слайдера
		rows: 1, // кол-во рядов в слайдере
		slidesPerRow: 1, // кол-во слайдеров в ряду
		vertical: false, // вертикальный slider
		verticalSwiping: true, // вертикальная прокрутка для верстикального слайдера
		fade:false, // показывается только один слайд, слайды заменяются
		// asNavFor: связка двух слайдеров
		responsive:[
			{
				breakpoint:768,
				settings: {}
			}
		],
		mobileFirst: false, // меняем max-width на min-width
		appendArrows: $('.content'), // перемещение стрелок/точек в контейнер appendArrows appendDots
		appendDots: $('.content'), // перемещение стрелок/точек в контейнер appendArrows appendDots
	});
	// События:
	
	// Методы:
});	