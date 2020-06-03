// Deklaracja validatorów
// 1. Wymagane pole
function required(name) {
    // Zwracazmy obiekt odpowiadający za wymóg wypełnienia pola
    return {
        // określenie walidatora - nie może być pole puste, nieokreślone lub null
        validator: value => value != "" && value !== undefined && value !== null,
        // Określenie wiadomości w razie nie spełnienia warunku
        message: `Pole ${name} musi buć wypełnione!`
    }
}
// 2. Wymogi dla pola tekstowego
function alpha(name) {
    return {
        vlidator: value => value === /^[a-z\b[ą,ć,ę,ł,ó,ś,ż,ź]]$/i,
        message: `${name} może zawierać tylko litery.`
    }
}
// 3. Minimalna liczba znaków
function minLength(name, minLength) {
    return {
        validator: value => String(value).length >= minLength,
        message: `Minimalna ilość znaków dla ${name}, to ${minLength}.`
    }
}
// 4. Numer telefonu
function phoneNumber(name) {
    return {
        validator: value => value === /^[\d]{9,}$/i,
        message: `${name} powinien zawierać tylko znaki numeryczne, minimum 9 znaków.`
    }
}
//5. Email validation
function emailVal(name) {
    return {
        validator: value => value === /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-z0-9]+.)+[a-z]{2,}))$/igm,
        message: `Wpisz poprawny adres ${name}!`
    }
}
// 6. Liczby dodatnie 
function positiveNums(name) {
    return {
        validator: value => value >= 0,
        message: `${name} musi być dodatnie.`
    }
}
// 7. Minimalna wartość
function min(name) {
    return {
        validator: value => value === 1,
        message: `${name} musi być wększ od 1 PLN.`
    }
}
// Po zadeklarowaniu warunków walidacyjnych trzeba je wyeksportować do odpowiednicj miejsc
export default {
    // nawy kolejnych pól potrzebujących walidacji
    // 1. Formularz zapytania o czarter
    date_from: [required('date_from')],
    date_to: [required('date_to')],
    email: [required('email'), emailVal('email'), ],
    name: [required('name'), alpha('name'), minLength('name', 3)],
    surname: [required('surname'), alpha('surname'), minLength('surname', 3)],
    phone: [required('phone'), phoneNumber('phone')],
    // 2. Formularz dodawania jachtu
    cabins: [required('cabins'), positiveNums('cabins')],
    extended_info: [required('extended_info')],
    guests: [required('guests'), positiveNums('guests'), min('guests')],
    price: [required('price'), positiveNums('cabins'), min('price')],
    skippers_name: [required('skippers_name'), alpha('skippers_name'), minLength('skippers_name', 1)],
    yacht_type: [required('yacht_type'), alpha('yacht_type'), minLength('yacht_type', 3)],
}