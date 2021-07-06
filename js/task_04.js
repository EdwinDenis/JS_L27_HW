// Создать массив аудиторий академии. 
// Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 30) и названия факультета, 
// для которого она предназначена. Написать несколько функций для работы с ним

// 4.1 Вывод на экран всех аудиторий;
// 4.2 Вывод на экран аудиторий для указанного факультета;
// 4.3 Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;


let audience = [
    {
        name: 'Green',
        sitsNumber: 30,
        faculty: 'Informatics'
    },
    {
        name: 'Yellow',
        sitsNumber: 15,
        faculty: 'Physics'
    },
    {
        name: 'Blue',
        sitsNumber: 12,
        faculty: 'Chemisty'
    },
    {
        name: 'Dark',
        sitsNumber: 26,
        faculty: 'Mathematics'
    },
    {
        name: 'Light',
        sitsNumber: 10,
        faculty: 'Biology'
    },
];

function showAllAudience(arr){
    let str = '';
    for (let i = 0; i < arr.length; i++){
        str += `Audience ${arr[i].name} with ${arr[i].sitsNumber} sits for ${arr[i].faculty} faculty \n`;
    }
    alert(str);
}

showAllAudience(audience);

let faculty = prompt('What faculty are you in?')

function showAudienceByFaculty(arr,faculty){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].faculty == faculty) {
            alert (`You need to go to ${arr[i].name} audience with ${arr[i].sitsNumber} sits`);
            return;
        }
    }
    alert('There is no such a faculty');
}

showAudienceByFaculty(audience,faculty);

let studentsNumber; 

do{
    studentsNumber = +prompt('How many students in your group? ');
} while (studentsNumber <= 0);


function showAudienceByStudentsNumber(arr,n){
    let str = `You can use such audiences: \n\n`;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].sitsNumber >= n) str += `${arr[i].name} audience with ${arr[i].sitsNumber} sits \n`;
    }
    if (str == `You can use such audiences: \n\n`) str = `There is no audience for such a group`;
    alert(str);
}

showAudienceByStudentsNumber(audience,studentsNumber);






