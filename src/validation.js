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
        vlidator: value => (/^[a-z\b[ą,ć,ę,ł,ó,ś,ż,ź]]$/i).test(value),
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
        validator: value => (/^[\d]{9,}$/i).test(value),
        message: `${name} powinien zawierać tylko znaki numeryczne, minimum 9 znaków.`
    }
}
//5. Email validation
function emailVal(name) {
    return {
        validator: value => /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-z0-9]+.)+[a-z]{2,}))$/igm.test(value),
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
        validator: value => value >= 1,
        message: `${name} musi być wększa od 1 PLN.`
    }
}
// Po zadeklarowaniu warunków walidacyjnych trzeba je wyeksportować do odpowiednicj miejsc
export default {
    // nawy kolejnych pól potrzebujących walidacji
    // 1. Formularz zapytania o czarter
    date_from: [required('Data od:')],
    date_to: [required('Data do:')],
    email: [required('Adres Email'), emailVal('Adres Email'), ],
    name: [required('Imię'), alpha('Imię'), minLength('Imię', 3)],
    surname: [required('Nazwisko'), alpha('Nazwisko'), minLength('Nazwisko', 3)],
    phone: [required('Numer Telefonu'), phoneNumber('Numer Telefonu')],
    // 2. Formularz dodawania jachtu
    cabins: [required('Ilość Kabin'), positiveNums('Ilość Kabin')],
    extended_info: [required('Informacje dodatkowe')],
    guests: [required('Ilość gości'), positiveNums('Ilość gości'), min('Ilość gości')],
    price: [required('Cena'), positiveNums('Cena'), min('Cena')],
    skippers_name: [required('Imię skippera'), alpha('Imię skippera'), minLength('Imię skippera', 1)],
    yacht_type: [required('Typ Jachtu'), alpha('Typ Jachtu'), minLength('Typ Jachtu', 3)],
}