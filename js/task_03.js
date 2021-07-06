// Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, 
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве

// Инициализация массива стилей
let arrCSS = [
    {
        'color': '#8BD1FD',
    },
    {
        'font-size': '48px',
    },
    {
        'text-align': 'center',
    },
    {
        'text-transform': 'uppercase',
    },
    {
        'text-shadow': ' 4px 4px 4px rgba(150, 150, 150, 1)',
    },
];

// Функция трансформирует обьект в строку
function genStrStyleFromObj(obj){
    let strStyle = "";
    for ([attrStyle, valStyle] of Object.entries(obj)){
        strStyle += `${attrStyle}: ${valStyle};`;
    }
    return strStyle;
}

// Функция переводит в строку все обьекты в массиве и вкладывает ее в стиль абзаца
function showMessage(arr,text){
   let line = '';
   for (let i = 0; i < arrCSS.length; i++){
       line += genStrStyleFromObj(arrCSS[i]);
   }
   document.write(`<p style="${line}">${text}</p>`)
}

let text = prompt('Type the text you want to see in the browser');

showMessage(arrCSS,text);













