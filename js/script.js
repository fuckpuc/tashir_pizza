// Получаем ссылку на элементы
const citySelect = document.getElementById("citySelect");
const addressSelect = document.getElementById("addressSelect");
const pizzeriaCount = document.getElementById("pizzeriaCount");

// Опции для адресов в зависимости от города
const addressOptions = {
  1: ["Москва 23-й км Киевское ш. 8 стр. 1", "Москва Вернадского 86А", "Москва Ленинский проспект, влад. 109", "Москва Аминьевское шоссе, дом 6", "Москва Дмитровское шоссе, дом 163а"],
  2: ["Калуга ул Кирова 63", "Калуга Кирова 19", "Калуга ул Кирова 1", "Калуга Московская 338а", "Калуга ул Кирова 63 ночная"],
  3: ["Воронеж Бульвар Победы 23Б", "Воронеж пр Ленинский 174", "Воронеж ул 20 лет Октября 90", "Воронеж ул Героев Сибиряков 65а", "Воронеж Парковая 3", "Воронеж Кольцовская 35", "Воронеж Владимира Невского 44/1" ],
  4: ["Астрахань Вокзальная пл 13"],
  5: ["Железногорск Ленина 57"],
  6: ["Серпухов Ворошилова 128 утро", "Серпухов ул Ворошилова 128", "Серпухов ул. Советская 111", "Серпухов ул. Советская вечер"],
  7: ["Саранск ул Советская 55а"],
  8: ["Самара Московское 205", "Самара Дыбенко 30", "Самара пр Кирова 147", "Самара 24км Московского шоссе 5", "Самара ул Аэродромная 47а", "Самара ш Южное 5"],
  9: ["Рязань Московское 21 в ТРЦ Премьер", "Рязань Московское 65а", "Рязань Московское ш 5а", "Рязань пр. Шабулина 6", "Рязань Фирсова 19"],
  10: ["Ростов-на-Дону, ул. Зорге, 33", "Ростов-на-Дону пр Михаила Нагибина 17", "Ростов-на-Дону пр Стачки 25", "Ростов-на-Дону ул Пушкинская 169", "Ростов-на-Дону пр Коммунистический 32/3", "Ростов-на-Дону пр Космонавтов 2/2", "Ростов-на-Дону ул Пушкинская 231", "Ростов-на-Дону пр Нагибина 32", "Ростов-на-Дону пр Королева 10/4", "Ростов-на-Дону 22-я линия 75в"],
  11: ["Пенза пр-т Строителей 1В"],
  12: ["Шахты пр-т Победы Революции 130"],
  13: ["Смоленск  ул. 25 Сентября 35а", "Смоленск ул Ново-Московская д 2/8"],
  14: ["Тамбов, ул.Советская, 99а"],
  15: ["Ярославль, пр-т Московский, 108", "Ярославль ул Гоголя 2", "Ярославль Тутаевское ш 1", "Ярославль Дорожная 6а", "Ярославль Победы 41", "Ярославль Ленинградский пр-кт 123"],
  16: ["Волжский ул Александрова 18а"],
  17: ["Вологда, Окружное, 13"],
  18: [],
  19: ["Уфа Энтузиастов 20", "Уфа ул Цюрупы 97", "Уфа ул Миннигали Губайдуллина 6", "Уфа ул Жукова 29 ТЦ «Простор»", "Уфа пр-кт Октября 34 ТРК «Семья»", "Уфа Энтузиастов 20/1", "Уфа ул. Ферина 29", "Уфа Первомайская 69"],
  20: ["Тула, Советская 47", "Тула Калужское 2", "Тула ул Пролетарская 22", "Тула ул Октябрьская 76а", "Тула пр-т Красноармейский 48 к 4", "Тула Пролетарская 2 (ТРЦ Макси)"],
  21: ["Обнинск Аксенова 18а"],
  22: ["Иваново, Кохомское шоссе 1д", "Иваново 8 Марта 32"],
  23: ["Энгельс пл Свободы 3В"],
  24: ["Электросталь пр-т Ленина 0/10"],
  25: ["Череповец Победы 200", "Череповец, ул. Годовикова, 37"],
  26: ["Кострома Красносельское ш 1", "Кострома ул Магистральная 20", "Кострома Ивана Сусанина 63"],
  27: ["Курск К.Маркса 68 МК Мега ГРИНН"],
  28: ["Новомосковск, ул. Трудовые Резервы, 33-б", "Новомосковск ул Комсомольская 38"],
  29: ["Новокуйбышевск пр-т Победы 1ж"],
  30: ["Наро-Фоминск ул Ленина 8"],
  31: ["Нижний Новгород Родионова 187В", "Нижний Новгород Большая Покровская 82", "Нижний Новгород Московское ш 12", "Нижний Новгород ул. Бетанкура 1", "Нижний Новгород пос Федяково"],
  32: ["Набережные Челны пр Мира 3", "Набережные Челны Сююмбике 40"],
  33: ["Липецк Катукова 51", "Липецк Космонавтов 12"],
  34: ["Белгород, проспект Богдана Хмельницкого, 137Т", "Белгород, проспект Богдана Хмельницкого, 164", "Белгород ул Щорса 64"],
  35: ["Краснодар Крылатая 2", "Краснодар ул Уральская 79 1", "Краснодар Красноармейская 51", "Краснодар Дзержинского 100"],
  36: ["Муром ул Куликова д 7а"],
  37: ["Тверь ул Гагарина 5"],
  38: ["Таганрог пл Мира 7"],
  39: ["Адлер улица Кирова 58", "Сочи, ул.Новая Заря, д. 7"],
  40: ["Аксай Аксайский 23"],
  41: ["Тольятти Южное шоссе 6"],
  42: ["Волгоград Землячки 110б"],
  43: ["Чапаевск Железнодорожная 33А"],
  44: ["Подольск Комсомольская 24"],
  45: ["Саратов 3-я Дачная 1, корп 14"],
};

// Функция для обновления адресов и количества пиццерий при изменении города
citySelect.addEventListener("change", function () {
  const selectedCity = citySelect.value;
  const addresses = addressOptions[selectedCity] || [];

  // Очищаем текущие опции
  addressSelect.innerHTML = "";

  // Добавляем новые опции
  addresses.forEach((address) => {
    const option = document.createElement("option");
    option.value = address;
    option.textContent = address;
    addressSelect.appendChild(option);
  });

  // Обновляем количество пиццерий
  pizzeriaCount.textContent = `найдено пиццерий ${addresses.length}`;
});


//Функция дкя поля с номером телефона 
$(document).ready(function () {
  // Применяем маску для поля ввода телефона
  $("#phone").mask("+7 (000) 000-00-00", {
    translation: {
      '0': {
        pattern: /[0-9]/
      }
    }
  });
});



$(document).ready(function () {
  $("#applicationForm").on("submit", function (event) {
    event.preventDefault();
    // Получаем данные из полей формы
    const data = {
      'Город': $("#citySelect").val(),
      'Адресс': $("#addressSelect").val(),
      'Вакансия': $("#select_vacansies").val(),
      'Имя': $("#first_name").val(),
      'Фамилия': $("#last_name").val(),
      'Телефон': $("#phone").val()
    };

    // Отправляем данные на сервер с помощью AJAX
    $.ajax({
      url: "https://submit-form.com/qUu7O7St", // Замените на реальный URL вашего сервера
      type: "post",
      data: data,
      success: function (response) {
        console.log("Данные успешно отправлены!");
        // Дополнительные действия после успешной отправки данных
        // Показать popup
        $("#successPopup").show();

        // Закрыть popup плавно через 10 секунд
        setTimeout(function() {
          $("#successPopup").css("opacity", "0"); // Устанавливаем opacity в 0
        }, 5000);
        $("#citySelect").val("select_city");
        $("#addressSelect").val("search-form__vacancies-title");
        $("#select_vacansies").val("vacancie");
        $("#first_name").val("");
        $("#last_name").val("");
        $("#phone").val("");
      },
      error: function (error) {
        console.error("Ошибка при отправке данных: ", error);

        //Ниже код тут не нужен, это для демонстрации. Нужно настроить сервер и убрать код ниже.
        $("#successPopup").show();


        setTimeout(function() {
          $("#successPopup").css("opacity", "0"); // Устанавливаем opacity в 0
        }, 5000);
        $("#citySelect").val("select_city");
        $("#addressSelect").val("search-form__vacancies-title");
        $("#select_vacansies").val("vacancie");
        $("#first_name").val("");
        $("#last_name").val("");
        $("#phone").val("");
      },
    });
  });
});