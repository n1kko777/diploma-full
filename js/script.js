window.addEventListener('DOMContentLoaded', function() {

    /*Глобальные переменные*/
    let color, hair, clothes, valEnd, newCondidate;


    /*Обработка модального окна*/
    let overlay = document.querySelector('.overlay'),
        popupBtn = document.querySelector('#popup-btn'),
        main = document.querySelector('.main'),
        mainCards,
        custom = document.querySelector('.custom'),
        customInfo = document.querySelector('.custom-info'),
        customChar = document.querySelector('.custom-char'),
        customStyle = document.querySelector('.custom-style');

    /*Исчезновение блоков*/
    function disappear(elem) {
        elem.style.transition = 'all 1s ease';
        elem.style.opacity = 0;
        setTimeout(() => {
            elem.style.display = 'none';
        }, 1000);
    }

    /*Появление блоков*/
    function appear(elem, display) {
        elem.style.transition = 'all 1s ease';
        elem.style.opacity = 1;
        setTimeout(() => {
            elem.style.display = '' + display + '';
        }, 1000);
    }

    /*Обработчик кнопки "Создать"*/
    popupBtn.addEventListener('click', (e) => {

        disappear(overlay);
        disappear(main);

        appear(custom, 'flex');

        appear(customInfo, 'block');
        appear(customChar, 'block');
        appear(customStyle, 'block');


        defaultMale();

    });


    /*Собираем модель президента*/
    let personSkin = document.querySelector('.person-skin'),
        personClothes = document.querySelector('.person-clothes'),
        personHair = document.querySelector('.person-hair'),
        personShoes = document.querySelector('.person-shoes'),
        sex = document.querySelectorAll('input[type=radio]'),
        skinColor = document.querySelectorAll('.skin-color'),
        hairStyle = document.querySelectorAll('.hair-style'),
        clothesStyle = document.querySelectorAll('.clothes-style');

    personShoes.style.backgroundImage = 'url(../img/clothes/construct/shoes.png)';

    /*Начальный мужской скелет*/
    function defaultMale() {

        color = 1;
        hair = 1;
        clothes = 1;
        valEnd = 2;
        for (let i = 0; i < skinColor.length; i++) {
            skinColor[i].style.display = 'none';
        }
        skinColor[0].style.display = 'block';

        personSkin.style.backgroundImage = 'url(../img/skin/skin-' + color + '.png)';
        personClothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-' + clothes + '.png)';
        personHair.style.backgroundImage = 'url(../img/hair/construct/hair-' + hair + '.png)';

        for (let i = 0; i < hairStyle.length; i++) {
            hairStyle[i].style.display = 'none';
            clothesStyle[i].style.display = 'none';
        }

        hairStyle[0].style.display = 'block';
        clothesStyle[0].style.display = 'block';
    }

    /*Начальный женский скелет*/
    function defaultFemale() {

        color = 1;
        hair = 1;
        clothes = 1;
        valEnd = 5;
        for (let i = 0; i < skinColor.length; i++) {
            skinColor[i].style.display = 'none';
        }
        skinColor[0].style.display = 'block';

        personSkin.style.backgroundImage = 'url(../img/skin/skin-' + (color + 3) + '.png)';
        personClothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-' + (clothes + 3) + '.png)';
        personHair.style.backgroundImage = 'url(../img/hair/construct/hair-' + (hair + 3) + '.png)';

        for (let i = 0; i < hairStyle.length; i++) {
            hairStyle[i].style.display = 'none';
            clothesStyle[i].style.display = 'none';
        }

        hairStyle[3].style.display = 'block';
        clothesStyle[3].style.display = 'block';
    }

    /*Оработчик смены полов*/
    sex[0].addEventListener('click', () => {
        skinColor[0].style.display = 'block';
        if (sex[0].checked) {
            defaultMale();
        }
    });
    sex[1].addEventListener('click', () => {
        if (sex[1].checked) {
            defaultFemale();
        }
    });


    /*Переключатели слайдеров*/
    let next = document.querySelectorAll('.next'),
        prev = document.querySelectorAll('.prev');

    /*Смещение вправо элемента в карусели*/
    for (let i = 0; i < next.length; i++) {
        next[i].addEventListener('click', function() {
            let parent = document.querySelector('.' + this.parentElement.getAttribute('class'));
            switch (i) {
                case 0:
                    if (color < 3) {
                        parent.children[color].style.display = 'none';
                        parent.children[color + 1].style.display = 'block';
                        color++;
                        if (valEnd == 5) {
                            personSkin.style.backgroundImage =
                                'url(../img/skin/skin-' + (color + 3) + '.png)';
                        } else {
                            personSkin.style.backgroundImage =
                                'url(../img/skin/skin-' + color + '.png)';
                        }
                    } else if (color == 3) {
                        parent.children[color].style.display = 'none';
                        color = 1;
                        parent.children[color].style.display = 'block';

                        if (valEnd == 5) {
                            personSkin.style.backgroundImage =
                                'url(../img/skin/skin-' + (color + 3) + '.png)';
                        } else {
                            personSkin.style.backgroundImage =
                                'url(../img/skin/skin-' + color + '.png)';
                        }
                    }
                    break;
                case 1:
                    if (hair < 3) {
                        if (valEnd == 5) {
                            parent.children[(hair + 3)].style.display = 'none';
                            parent.children[(hair + 3) + 1].style.display = 'block';
                            hair++;

                            personHair.style.backgroundImage =
                                'url(../img/hair/construct/hair-' + (hair + 3) + '.png)';
                        } else {
                            parent.children[hair].style.display = 'none';
                            parent.children[hair + 1].style.display = 'block';
                            hair++;

                            personHair.style.backgroundImage =
                                'url(../img/hair/construct/hair-' + hair + '.png)';
                        }
                    } else if (hair == 3) {
                        if (valEnd == 5) {
                            parent.children[(hair + 3)].style.display = 'none';
                            hair = 1;
                            parent.children[(hair + 3)].style.display = 'block';


                            personHair.style.backgroundImage =
                                'url(../img/hair/construct/hair-' + (hair + 3) + '.png)';
                        } else {
                            parent.children[hair].style.display = 'none';
                            hair = 1;
                            parent.children[hair].style.display = 'block';


                            personHair.style.backgroundImage =
                                'url(../img/hair/construct/hair-' + hair + '.png)';
                        }
                    }
                    break;
                case 2:
                    if (clothes < 3) {
                        if (valEnd == 5) {
                            parent.children[(clothes + 3)].style.display = 'none';
                            parent.children[(clothes + 3) + 1].style.display = 'block';
                            clothes++;

                            personClothes.style.backgroundImage =
                                'url(../img/clothes/construct/clothes-' + (clothes + 3) + '.png)';
                        } else {
                            parent.children[clothes].style.display = 'none';
                            parent.children[clothes + 1].style.display = 'block';
                            clothes++;

                            personClothes.style.backgroundImage =
                                'url(../img/clothes/construct/clothes-' + clothes + '.png)';
                        }
                    } else if (clothes == 3) {
                        if (valEnd == 5) {
                            parent.children[(clothes + 3)].style.display = 'none';
                            clothes = 1;
                            parent.children[(clothes + 3)].style.display = 'block';


                            personClothes.style.backgroundImage =
                                'url(../img/clothes/construct/clothes-' + (clothes + 3) + '.png)';
                        } else {
                            parent.children[clothes].style.display = 'none';
                            clothes = 1;
                            parent.children[clothes].style.display = 'block';


                            personClothes.style.backgroundImage =
                                'url(../img/clothes/construct/clothes-' + clothes + '.png)';
                        }
                    }
                    break;
                default:

                    break;
            }
        });
    }

    /*Смещение влево элемента в карусели*/
    for (let i = 0; i < prev.length; i++) {
        prev[i].addEventListener('click', function() {
            let parent = document.querySelector('.' + this.parentElement.getAttribute('class'));
            switch (i) {
                case 0:
                    if (color > 1) {
                        parent.children[color].style.display = 'none';
                        parent.children[color - 1].style.display = 'block';
                        color--;
                        if (valEnd == 5) {
                            personSkin.style.backgroundImage =
                                'url(../img/skin/skin-' + (color + 3) + '.png)';
                        } else {
                            personSkin.style.backgroundImage =
                                'url(../img/skin/skin-' + color + '.png)';
                        }
                    } else if (color == 1) {
                        parent.children[color].style.display = 'none';
                        color = 3;
                        parent.children[color].style.display = 'block';

                        if (valEnd == 5) {
                            personSkin.style.backgroundImage =
                                'url(../img/skin/skin-' + (color + 3) + '.png)';
                        } else {
                            personSkin.style.backgroundImage =
                                'url(../img/skin/skin-' + color + '.png)';
                        }
                    }
                    break;
                case 1:
                    if (hair > 1) {
                        if (valEnd == 5) {
                            parent.children[(hair + 3)].style.display = 'none';
                            parent.children[(hair + 3) - 1].style.display = 'block';
                            hair--;

                            personHair.style.backgroundImage =
                                'url(../img/hair/construct/hair-' + (hair + 3) + '.png)';
                        } else {
                            parent.children[hair].style.display = 'none';
                            parent.children[hair - 1].style.display = 'block';
                            hair--;

                            personHair.style.backgroundImage =
                                'url(../img/hair/construct/hair-' + hair + '.png)';
                        }
                    } else if (hair == 1) {
                        if (valEnd == 5) {
                            parent.children[(hair + 3)].style.display = 'none';
                            hair = 3;
                            parent.children[(hair + 3)].style.display = 'block';


                            personHair.style.backgroundImage =
                                'url(../img/hair/construct/hair-' + (hair + 3) + '.png)';
                        } else {
                            parent.children[hair].style.display = 'none';
                            hair = 3;
                            parent.children[hair].style.display = 'block';


                            personHair.style.backgroundImage =
                                'url(../img/hair/construct/hair-' + hair + '.png)';
                        }
                    }
                    break;
                case 2:
                    if (clothes > 1) {
                        if (valEnd == 5) {
                            parent.children[(clothes + 3)].style.display = 'none';
                            parent.children[(clothes + 3) - 1].style.display = 'block';
                            clothes--;

                            personClothes.style.backgroundImage =
                                'url(../img/clothes/construct/clothes-' + (clothes + 3) + '.png)';
                        } else {
                            parent.children[clothes].style.display = 'none';
                            parent.children[clothes - 1].style.display = 'block';
                            clothes--;

                            personClothes.style.backgroundImage =
                                'url(../img/clothes/construct/clothes-' + clothes + '.png)';
                        }
                    } else if (clothes == 1) {
                        if (valEnd == 5) {
                            parent.children[(clothes + 3)].style.display = 'none';
                            clothes = 3;
                            parent.children[(clothes + 3)].style.display = 'block';


                            personClothes.style.backgroundImage =
                                'url(../img/clothes/construct/clothes-' + (clothes + 3) + '.png)';
                        } else {
                            parent.children[clothes].style.display = 'none';
                            clothes = 3;
                            parent.children[clothes].style.display = 'block';


                            personClothes.style.backgroundImage =
                                'url(../img/clothes/construct/clothes-' + clothes + '.png)';
                        }
                    }
                    break;
                default:

                    break;
            }
        });
    }


    /*Собираем данные о кандидате*/
    let ready = document.querySelector('#ready'),
        name = document.querySelector('#name'),
        age = document.querySelector('#age'),
        select = document.querySelector('#select'),
        bio = document.querySelector('#bio'),
        condidateInfo = {
            gender: '',
            name: '',
            age: '',
            select: '',
            bio: '',
            skinColor: '',
            skinHair: '',
            skinClothes: '',
            skinShoes: ''
        },
        numberCount,
        progressCount,
        countValue = 0;

    /*Проверка правильности заполнения полей*/
    name.addEventListener('keyup', function(event) {
        if (this.value.search(/[a-zA-Z0-9]/i) + 1) {
            name.value = '';
            name.style.cssText = "border: 1px solid red;";
            name.setAttribute('placeholder', 'Допускается только кирилица!');
        }
    });
    age.addEventListener('keyup', function(event) {
        if (isNaN(this.value)) {
            age.value = '';
            age.style.cssText = "border: 1px solid red;";
            age.setAttribute('placeholder', 'Допускается только цифры!');
        }
    });


    /*Анулирование результатов*/
    function clearCount() {
        countValue = 0;
        for (let i = 0; i < numberCount.length; i++) {
            numberCount[i].textContent = countValue + '%';
            progressCount[i].style.height = countValue + '%';
        }
    }

    /*Обработчик нажатия кнопки "готово"*/
    ready.addEventListener('click', function() {
        if (name.value != '' && name.value.trim().length > 0) {
            condidateInfo.name = name.value;
        } else {
            name.value = '';
            name.style.cssText = "border: 1px solid red;";
            name.setAttribute('placeholder', 'Заполните данное поле!!!');
        }
        if (age.value != '' && age.value.trim().length > 0 && !isNaN(age.value) && age.value > 0 && age.value < 100) {
            condidateInfo.age = age.value;
        } else {
            age.value = '';
            age.style.cssText = "border: 1px solid red;";
            age.setAttribute('placeholder', 'Введены некорректные значения!');
        }
        condidateInfo.select = select.value;
        if (bio.value != '' && bio.value.trim().length > 0 && bio.value.length > 10) {
            condidateInfo.bio = bio.value;
        } else {
            bio.value = '';
            bio.style.cssText = "border: 1px solid red;";
            bio.setAttribute('placeholder', 'Введите не менее 10 символов!');
        }


        condidateInfo.gender = document.querySelector('input[type=radio]:checked').value;

        condidateInfo.skinColor = personSkin.style.backgroundImage;
        condidateInfo.skinColor = condidateInfo.skinColor.replace(/"/g, '');

        condidateInfo.skinHair = personHair.style.backgroundImage;
        condidateInfo.skinHair = condidateInfo.skinHair.replace(/"/g, '');

        condidateInfo.skinClothes = personClothes.style.backgroundImage;
        condidateInfo.skinClothes = condidateInfo.skinClothes.replace(/"/g, '');

        condidateInfo.skinShoes = personShoes.style.backgroundImage;
        condidateInfo.skinShoes = condidateInfo.skinShoes.replace(/"/g, '');


        /*Перенос информации о кондидате в карточку*/
        if (name.value != '' && name.value.trim().length > 0 &&
            age.value != '' && age.value.trim().length > 0 &&
            !isNaN(age.value) && age.value > 0 && age.value < 100 &&
            bio.value != '' && bio.value.trim().length > 0 && bio.value.length > 10) {

            disappear(custom);
            appear(main, 'block');

            /*Формирование карточки кандидата*/
            newCondidate = document.createElement('div');
            newCondidate.classList.add('main-cards-item');
            newCondidate.classList.add('rollIn');
            document.querySelector('.main-cards').appendChild(newCondidate);

            let candidateBlock = document.createElement('div');
            candidateBlock.classList.add('candidate-block');
            let candidatePhoto = document.createElement('div');
            candidatePhoto.classList.add('photo');
            candidatePhoto.style.position = 'relative';
            candidatePhoto.innerHTML = '<div style="background: ' +
                condidateInfo.skinColor + 'center no-repeat; background-size: cover; ' +
                'width: 90px; height: 195px; position: absolute; left: 50%; ' +
                'transform: translateX(-50%);"></div>' +
                '<div style="background: ' +
                condidateInfo.skinHair + 'center no-repeat; background-size: cover; ' +
                'width: 90px; height: 195px; position: absolute; left: 50%; ' +
                'transform: translateX(-50%);"></div>' +
                '<div style="background: ' +
                condidateInfo.skinClothes + 'center no-repeat; background-size: cover; ' +
                'width: 90px; height: 195px; position: absolute; left: 50%; ' +
                'transform: translateX(-50%);"></div>' +
                '<div style="background: ' +
                condidateInfo.skinShoes + 'center no-repeat; background-size: cover; ' +
                'width: 90px; height: 195px; position: absolute; left: 50%; ' +
                'transform: translateX(-50%);"></div>';
            let condidateResult = document.createElement('div');
            condidateResult.classList.add('result');

            let condidateResultCount = document.createElement('div');
            condidateResultCount.classList.add('result-count');
            condidateResultCount.textContent = '0%';
            let condidateResultProgress = document.createElement('div');
            condidateResultProgress.classList.add('progress');
            condidateResultProgress.innerHTML = '<div class="progress-bar progress-bar-3"></div>';

            condidateResult.appendChild(condidateResultCount);
            condidateResult.appendChild(condidateResultProgress);


            candidateBlock.appendChild(candidatePhoto);
            candidateBlock.appendChild(condidateResult);


            let name = document.createElement('div');
            name.classList.add('name');
            name.textContent = condidateInfo.name;
            let age = document.createElement('div');
            age.classList.add('age');
            age.textContent = condidateInfo.age + ' лет';
            let sex = document.createElement('div');
            sex.classList.add('sex');
            sex.textContent = condidateInfo.gender;
            let views = document.createElement('div');
            views.classList.add('views');
            views.textContent = condidateInfo.select;
            let bio = document.createElement('div');
            bio.classList.add('bio');
            bio.textContent = condidateInfo.bio;

            newCondidate.appendChild(candidateBlock);

            newCondidate.appendChild(name);
            newCondidate.appendChild(age);
            newCondidate.appendChild(document.createTextNode('Пол:'));
            newCondidate.appendChild(sex);
            newCondidate.appendChild(document.createTextNode('Полит. взгляды:'));
            newCondidate.appendChild(views);
            newCondidate.appendChild(document.createTextNode('Биография'));
            newCondidate.appendChild(bio);

            mainCards = document.querySelectorAll('.main-cards-item');
            numberCount = document.querySelectorAll('.result-count');
            progressCount = document.querySelectorAll('.progress-bar');
            for (let i = 0; i < mainCards.length; i++) {
                mainCards[i].classList.remove('main-cards-item-active');
            }

            /*Анулирование результатов*/
            clearCount();
        }

    });

    /*Сброс результатов*/
    let reset = document.querySelector('#reset');

    reset.addEventListener('click', function() {
        document.querySelector('.main-cards').removeChild(newCondidate);
        mainCards[0].classList.remove('rollIn');
        mainCards[1].classList.remove('rollIn');
        mainCards[2].classList.remove('rollIn');

        disappear(main);
        appear(custom, 'flex');

        appear(customInfo, 'block');
        appear(customChar, 'block');
        appear(customStyle, 'block');

        defaultMale();
        sex[0].checked = true;
        name.value = '';
        name.style.cssText = "border: none;";
        name.setAttribute('placeholder', '');

        age.value = '';
        age.style.cssText = "border: none;";
        age.setAttribute('placeholder', '');

        select.selectedIndex = 0;

        bio.value = '';
        bio.style.cssText = "border: none;";
        bio.setAttribute('placeholder', '');
    });

    /*Провести честное голосование*/
    let voting = document.querySelector('#voting');
    
    voting.addEventListener('click', function () {
        let max = 0;
        for (let i = 0; i < mainCards.length; i++) {
            mainCards[i].classList.remove('main-cards-item-active');
        }

        let rnd = 101;
        countValue = 0;
        rnd = Math.floor(Math.random() * rnd);
        
        numberCount[0].textContent = rnd + '%';
        progressCount[0].style.height = rnd + '%';
        setTimeout(() => {
          mainCards[0].classList.add('rollIn');
        }, 100);
        mainCards[0].classList.remove('rollIn');

        countValue = rnd;

        rnd = 100 - rnd;
        
        rnd = Math.floor(Math.random() * rnd);

        numberCount[1].textContent = rnd + '%';
        progressCount[1].style.height = rnd + '%';
        setTimeout(() => {
          mainCards[1].classList.add('rollIn');
        }, 350);
        mainCards[1].classList.remove('rollIn');

        rnd = 100 - rnd - countValue;
        
        numberCount[2].textContent = rnd + '%';
        progressCount[2].style.height = rnd + '%';
        setTimeout(() => {
          mainCards[2].classList.add('rollIn');
        }, 500);
        mainCards[2].classList.remove('rollIn');
    
    });

    /*Вмешаться в выборы*/
    let crime = document.querySelector('#crime');

    crime.addEventListener('click', function () {
        setTimeout(() => {
          mainCards[2].classList.add('rollIn');
          countValue = countValue + 25;
          numberCount[2].textContent = countValue + '%';
          progressCount[2].style.height = countValue + '%';
        }, 300);
        mainCards[2].classList.remove('rollIn');
    });

});