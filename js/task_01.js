// Создать массив «Список покупок». Каждый элемент массива является объектом, 
// который содержит название продукта, необходимое количество и куплен или нет.
// Написать несколько функций для работы с таким массивом.

// 1.1 Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные
// 1.2 Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// 1.3 Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

// Обьявление массива с обьектами
let purchaseList = [
    {
        name: 'Banana',
        quantity: 5,
        bought: true,
    },
    {
        name: 'Apple',
        quantity: 10,
        bought: false,
    },
    {
        name: 'Orange',
        quantity: 12,
        bought: false,
    },
    {
        name: 'Melon',
        quantity: 8,
        bought: false,
    },
    {
        name: 'Lime',
        quantity: 15,
        bought: false,
    },
];

// Функция сортирует список, где сначала идут купленные продукты, потом нет
function showBoughtProducts(arr){
    let arrNew = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].bought == false) arrNew.unshift(arr[i].name);
        else arrNew.push(arr[i].name);
    }
    console.log('Sorted List (first unbought products) : ' + arrNew);
}

// Функция добавляет продукт в список исходя из условия 1.2
function addNewProduct(name, quantity, bought = true){
    for (i = 0; i < purchaseList.length; i++){
        if (purchaseList[i].name == name) {
            purchaseList[i].quantity += quantity;
            purchaseList[i].bought = bought;
            return;
        } 
    }
        purchaseList.push({
            name: name,
            quantity: quantity,
            bought: bought,
        });
}

// Функция принимает название продукта и отмечает его как купленный
function boughtProduct(name){
    for (i = 0; i < purchaseList.length; i++){
        if (purchaseList[i].name == name){
            purchaseList[i].bought = true;
            return;
        }
    }
    return;
}

// Вывод массива в консоль
console.log(purchaseList);

// Добавление нового продукта с количеством в конец списка
addNewProduct('Kiwi', 26);

// Продукт уже в списке. Меняется его количество и значение bought на true
addNewProduct('Apple', 2);

//Отмечает продукт как купленный
boughtProduct('Lime');

//Вывод списка в начале с не купленными продуктами
showBoughtProducts(purchaseList);

