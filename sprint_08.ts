// Task 01
// Создайте объект obj_01, который содержит свойство name равное 'Gedeon', поле name2 равное 'Richter', поле year равно 1944. Самостоятельно задайте типы данных для данных свойств. Выведите объект в консоль.

// const obj_01: { name: string



// Task 02
// Создайте объект obj_02 с полями: role, email, vip. Поле role содержит строку 'admin', поле email содержит 'ppprrr@mail.ua', а поле vip укажите как необязательное, числовое. Выведите объект в консоль.

// const obj_02 


// Task 03
// Создан объект obj_03. Напишите функцию, которая возвращает строку, где значения объекта перечислены через пробел. Тип функции укажите самостоятельно. Коммента

const obj_03: { city: string, zip: number } = {
    city: 'Kansas City',
    zip: 64101
}

// const f_03 = (): тут укажите тип => {
    
// }

document.querySelector('.b-3').addEventListener('click', (): void => {
    // document.querySelector('.out-3').textContent = f_03();
});


// Task 04
//  Создан объект obj_03. Напишите функцию, которая возвращает строку, где ключи объекта перечислены через пробел. Тип функции укажите самостоятельно.

// const f_04 = (): тут укажите тип => {
    
// }

document.querySelector('.b-4').addEventListener('click', (): void => {
    // document.querySelector('.out-4').textContent = f_04();
});


// Task 05
// Создан объект obj_05. Напишите функцию, которая возвращает строку характеристик (specifications) с разделителем между характеристиками через подчеркивание. Тип функции укажите самостоятельно.

const obj_05: { name: string, specifications: string[] } = {
    name: 'Wolves',
    specifications: ["IntenseSpeed", "Intelligence", "Teleportation", "Bite"]
}

// const f_05 = (): тут укажите тип => {
// }

document.querySelector('.b-5').addEventListener('click', (): void => {
    // document.querySelector('.out-5').textContent = f_05();
});


// Task 06
// Создан объект obj_06. Напишите функцию, которая возвращает строку значений с разделителем между значениями через подчеркивание. Тип функции укажите самостоятельно. Перебор цикла выполнять циклом for in.

const obj_06: { 'yellow': string, 'red': string, 'green': string } = {
    yellow: "Y",
    red: "R",
    green: "G",
}

// const f_06 = ():тут укажите тип => {
   
// }

document.querySelector('.b-6').addEventListener('click', (): void => {
    // document.querySelector('.out-6').textContent = f_06();
});

// Task 07
// Создан объект obj_07. Напишите функцию, которая возвращает самое большое число в свойстве balls. Тип функций укажите самостоятельно.

const obj_07: { name: string, balls: number[] } = {
    name: 'shooting',
    balls: [21, 19, 22, 17, 13, 9]
}

// const f_07 = (): тут укажите тип => {
// }

document.querySelector('.b-7').addEventListener('click', (): void => {
    // document.querySelector('.out-7').textContent = String(f_07());
});

// Task 08
// Создан объект obj_08. Напишите функцию, которая все свойства объекта приводит к нижнему регистру и удаляет пробелы по краям.

const obj_08: { name: string, email: string, username: string } = {
    name: 'Harry PoTter ',
    email: 'potter_DEER@howards.MagiC ',
    username: 'Rundic UOzlik'
}

// const f_08 = (): тут укажите тип => {
  
// }

document.querySelector('.b-8').addEventListener('click', (): void => {
    // f_08();
    console.log(obj_08);
});


// Task 09
// Создан объект obj_09. Напишите функцию, которая сортирует строки в свойстве members по алфавиту. 

const obj_09: { band: string, members: string[], location?: string } = {
    band: 'System of a Town',
    members: ['Serj', 'Daron', 'Shavo', 'John']
}

// const f_09 = (): тут укажите тип => {
    
// }

document.querySelector('.b-9').addEventListener('click', (): void => {
    // f_09();
    console.log(obj_09);
});

// Task 10
// Создан объект obj_10. Напишите функцию f_10. Функция удаляет с раздела data записи длина которых не равна 6.

const obj_10: { date: string, data: string[] } = {
    date: '2013/11/28',
    data: [
        '38D139',
        '2C9870',
        '11441C778',
        'B67366',
        'A7CA',
        'C24694',
        '14235687'
    ]
}

// const f_10 = (): тут укажите тип => {
// }

document.querySelector('.b-10').addEventListener('click', (): void => {
    // f_10();
    console.log(obj_10.data);
});


// Task 11
// Изучите работу функции f_11. Изучите как функция возвращает объект.

const f_11 = (): { hero: string, strength: number } => {
    return { 'hero': 'thor', strength: 10 };
}

document.querySelector('.b-11').addEventListener('click', (): void => {
    console.log(f_11());
});


// Task 12
// Создан объект obj_12. Напишите функцию f_12, которая возвращает копию объекта obj_12 без свойства hit.
const obj_12: { title: string, step: number, defense: number, stamina: number, hit: number[] } = {
    title: 'Древний огр',
    step: 1,
    defense: 8,
    stamina: 14,
    hit: [3, 4, 5]
}

const f_12 = (): { title: string, step: number, defense: number, stamina: number } => {
    return;
}

document.querySelector('.b-12').addEventListener('click', (): void => {
    console.log(f_12());
});

// Task 13
// Функция получает объект как аргумент, возвращает значение свойства title. Не забывайте прописывать тип функции!!!

const obj_13: { title: string, step: number, defense: number, stamina: number, hit: number[] } = {
    title: 'Бурдух',
    step: 1,
    defense: 7,
    stamina: 13,
    hit: [3, 3, 4]
}

const f_13 = ({ title, step }: { title: string, step: number }): string => {
  return;
}

document.querySelector('.b-13').addEventListener('click', (): void => {
    document.querySelector('.out-13').textContent = f_13(obj_13);
});

// Task 14
// Функция получает объект как аргумент, возвращает значение свойства hit. Не забывайте прописывать тип функции!!!

const f_14 = ({ hit }: { hit: number[] }): number[] => {
    return;
}

document.querySelector('.b-14').addEventListener('click', (): void => {
    document.querySelector('.out-14').textContent = f_14(obj_13).join(' ');
});

// Task 15
// Функция получаем объект как аргумент, и возвращает true, если есть хотя бы один удар (hit) по силе больший чем 5 и false в противном случае.

// const f_15 = ({ hit }: { hit: number[] }): тут напишите тип => {
   
// }

document.querySelector('.b-15').addEventListener('click', (): void => {
    // document.querySelector('.out-15').textContent = String(f_15(obj_13));
});