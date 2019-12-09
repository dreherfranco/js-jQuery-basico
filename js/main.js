$(document).ready(function () {

    if (window.location.href.indexOf('index') > -1) {
        //Slider
        $('.bxslider').bxSlider({
            auto: true,
            autoControls: false,
            stopAutoOnClick: true,
            pager: true,
            randomStart: true,
            speed: 100
        });

        //Posts
        var posts = [{
            title: 'Titulo del articulo',
            date: moment().format('MMMM', 'Do', 'YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt non mi quis dapibus. Cras elit arcu, sodales vel aliquet eget, semper quis tortor. Maecenas sit amet diam eget lacus aliquet maximus. Suspendisse potenti. Maecenas ex sem, ornare id lectus id, congue blandit magna. Aenean mollis placerat nulla accumsan rhoncus. In tincidunt arcu quis aliquam vehicula. Morbi sodales iaculis nulla, ut aliquam neque mattis nec. Vestibulum ut luctus nulla. Aenean hendrerit odio nec sollicitudin vulputate. Duis diam nisi, mattis eget leo non, imperdiet tincidunt est. Cras nec elit pulvinar, cursus lorem at, placerat neque. Sed id feugiat nulla, non dictum urna. '
        }, {
            title: 'Titulo del articulo',
            date: moment().format('MMMM', 'Do', 'YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt non mi quis dapibus. Cras elit arcu, sodales vel aliquet eget, semper quis tortor. Maecenas sit amet diam eget lacus aliquet maximus. Suspendisse potenti. Maecenas ex sem, ornare id lectus id, congue blandit magna. Aenean mollis placerat nulla accumsan rhoncus. In tincidunt arcu quis aliquam vehicula. Morbi sodales iaculis nulla, ut aliquam neque mattis nec. Vestibulum ut luctus nulla. Aenean hendrerit odio nec sollicitudin vulputate. Duis diam nisi, mattis eget leo non, imperdiet tincidunt est. Cras nec elit pulvinar, cursus lorem at, placerat neque. Sed id feugiat nulla, non dictum urna. '
        }, {
            title: 'Titulo del articulo',
            date: moment().format('MMMM', 'Do', 'YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt non mi quis dapibus. Cras elit arcu, sodales vel aliquet eget, semper quis tortor. Maecenas sit amet diam eget lacus aliquet maximus. Suspendisse potenti. Maecenas ex sem, ornare id lectus id, congue blandit magna. Aenean mollis placerat nulla accumsan rhoncus. In tincidunt arcu quis aliquam vehicula. Morbi sodales iaculis nulla, ut aliquam neque mattis nec. Vestibulum ut luctus nulla. Aenean hendrerit odio nec sollicitudin vulputate. Duis diam nisi, mattis eget leo non, imperdiet tincidunt est. Cras nec elit pulvinar, cursus lorem at, placerat neque. Sed id feugiat nulla, non dictum urna. '
        }, {
            title: 'Titulo del articulo',
            date: moment().format('MMMM', 'Do', 'YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt non mi quis dapibus. Cras elit arcu, sodales vel aliquet eget, semper quis tortor. Maecenas sit amet diam eget lacus aliquet maximus. Suspendisse potenti. Maecenas ex sem, ornare id lectus id, congue blandit magna. Aenean mollis placerat nulla accumsan rhoncus. In tincidunt arcu quis aliquam vehicula. Morbi sodales iaculis nulla, ut aliquam neque mattis nec. Vestibulum ut luctus nulla. Aenean hendrerit odio nec sollicitudin vulputate. Duis diam nisi, mattis eget leo non, imperdiet tincidunt est. Cras nec elit pulvinar, cursus lorem at, placerat neque. Sed id feugiat nulla, non dictum urna. '
        }
        ];
        //Recorrer todos los posts
        posts.forEach((item, index) => {
            var post = `
                <article class="post">   
                    <h2 class="title-article">${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <button class="see-more">Ver mas</button>
                </article>
                `
                ;
            //Insertar cada post en la clase .posts del index html
            $(".posts").append(post);

        });
    }


    //Cambiar temas
    var themes = $("#themes");
    $(".to-green").click(function () {
        themes.attr('href', 'styles/green.css');
    });
    $(".to-red").click(function () {
        themes.attr('href', 'styles/red.css');
    });
    $(".to-blue").click(function () {
        themes.attr('href', 'styles/blue.css');
    });

    //Hacer scroll hacia el inicio de la pagina
    $(".top").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    //Guardar datos del formulario en LocalStorage
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined") {
        var parrafo = $(".sidebar p");
        parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        parrafo.append("<div class='clearfix'></div><button class='logout'>Cerrar sesion</button>");
        $("#login").hide();
        //Borrar sesion localStorage
        $(".logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    if (window.location.href.indexOf('about') > -1) {
        //Acordeon
        $('#acordeon').accordion();
    }

    //Reloj
    if (window.location.href.indexOf('reloj') > -1) {
        var reloj = $("#reloj");
        setInterval(function () {
            var hora = moment().format('h:mm:ss');
            reloj.html(hora);
        }, 1000);
    }

    //Validador de formulario
    if (window.location.href.indexOf('contacto') > -1) {
        $("input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        });
        $.validate({
            scrollToTopOnError: true,
            errorMessagePosition: 'top',
            lang: 'es'
        });
    }

});