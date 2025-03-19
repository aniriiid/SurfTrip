const programButtons = document.querySelectorAll(".program_card_btn");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup-wrapper");
programButtons.forEach(btn => {
    btn.addEventListener("click", ()=> {
    popup.style.display = "block";
    popupWrapper.style.display = "block";        
    })
})



document.querySelector(".close").addEventListener("click", () => {
popup.style.display = "none";
popupWrapper.style.display = "none";
})



// Код для первых 3 полей, где выбор каждого следующего будет зависеть от предыдущего
const programSelect = document.getElementById("popup_program");
const serviceSelect = document.getElementById("popup_service");
const coachSelect = document.getElementById("popup_coach");

const data = {
    "Wave pool": {
        services: ["Индивидуальная тренировка", "Групповая тренировка", "Групповая детская тренировка", "Аренда волны для компании"],
        coaches: {
            "Индивидуальная тренировка": ["Иван Иванов", "Сергей Меньшин"],
            "Групповая тренировка": ["Иван Иванов", "Сергей Меньшин"],
            "Групповая детская тренировка": ["Иван Иванов", "Сергей Меньшин"]
        }
    },
    "Сап-сёрфинг": {
        services: ["Индивидуальная тренировка", "Групповая тренировка", "Сап-йога", "Аренда снаряжения"],
        coaches: {
            "Индивидуальная тренировка": ["Алина Ковалева", "Анна Дитковская"],
            "Групповая тренировка": ["Алина Ковалева", "Анна Дитковская"],
            "Сап-йога": ["Алина Ковалева", "Анна Дитковская"]
        }
    },
    "Винд-сёрфинг": {
        services: ["Индивидуальная тренировка", "Групповая тренировка", "Аренда снаряжения", "Аренда гидрокостюма"],
        coaches: {
            "Индивидуальная тренировка": ["Сергей Меньшин", "Алина Ковалева"],
            "Групповая тренировка": ["Сергей Меньшин", "Алина Ковалева"]
        }
    }
};
// Заполняем выпадающий список "Программа"
Object.keys(data).forEach(program => {
    let option = new Option(program, program);
    programSelect.add(option);
});

// Обработчик выбора программы
programSelect.addEventListener("change", function () {
    const selectedProgram = this.value;

    // Очищаем старые значения
    serviceSelect.innerHTML = '<option value="" disabled selected>Выберите услугу</option>';
    coachSelect.innerHTML = '<option value="" disabled selected>Выберите тренера</option>';
    coachSelect.style.display = "block";

    // Добавляем новые услуги
    data[selectedProgram].services.forEach(service => {
        let option = new Option(service, service);
        serviceSelect.add(option);
    });

    serviceSelect.disabled = false;
});

// Обработчик выбора услуги
serviceSelect.addEventListener("change", function () {
    const selectedProgram = programSelect.value;
    const selectedService = this.value;
    coachSelect.style.display = "block";


    // Очищаем старых тренеров
    coachSelect.innerHTML = '<option value="" disabled selected>Выберите тренера</option>';


    // Проверяем, есть ли тренеры для выбранной услуги
    if (data[selectedProgram].coaches && data[selectedProgram].coaches[selectedService])
        {

        
    // Добавляем тренеров по выбранной услуге
    data[selectedProgram].coaches[selectedService].forEach(coach => {
        let option = document.createElement("option");
        option.value = coach;
        option.textContent = coach;
        coachSelect.appendChild(option);

        
    });
    coachSelect.disabled = false;
    } else  {
        coachSelect.style.display = "none";
    } 
});

document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();

    const program = programSelect.value;
    const service = serviceSelect.value;
    const coach = coachSelect.value;
    const date = document.getElementById("date_picker").value;
    const name = document.getElementById("popup_name").value;
    const phone = document.getElementById("popup_phone").value;

    if(!program || !service || !date || !name || !phone) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    alert(`Запись успешна!
        Программа: ${program}
        Услуга: ${service}
        Тренер: ${coach}
        Дата и время: ${date}
        Имя: ${name}
        Телефон: ${phone}`);

        document.getElementById("bookingForm").reset();

})


// Код для добавления и отображения модального окна с датой и временем
document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date_picker");
    const calendarModal = document.getElementById("calendar_modal");
    const calendarClose = document.querySelector(".close_calendar");

    dateInput.addEventListener("click", () => {
        calendarModal.style.display = "block";
    });

    calendarClose.addEventListener("click", () => {
        calendarModal.style.display = "none";
    });

    // Инициализация Flatpickr для выбора даты
    flatpickr ("#calendar", {
        locale: "ru",
        inline: true,
        enableTime: false,
        dateFormat: "d.m.Y",
        onChange: function (selectedDates, dateStr) {
            dateInput.value = dateStr;
        }
    });

    const timePicker = document.getElementById("time_picker");
    const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];


    times.forEach(time => {
        const btn = document.createElement("button");
        btn.textContent = time;
        btn.classList.add("time_btn");
        btn.onclick = () => {
            dateInput.value += " " + time;
            calendarModal.style.display = "none";
        };

        timePicker.appendChild(btn);
    });
});