// Регулярные выражения
const regex = {
    // 2–3 слова, каждое с заглавной буквы (кириллица/латиница), допускается дефис в составе слова
    fio: /^\p{Lu}\p{Ll}+(?:-\p{Lu}\p{Ll}+)?(?:\s\p{Lu}\p{Ll}+(?:-\p{Lu}\p{Ll}+)?){1,2}$/u,
    // +996 и 9 цифр, допускаются пробелы или дефисы между группами
    phone: /^\+996[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/,
    // логин@домен.зона
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/
};

const form = document.getElementById('contactForm');
const fields = ['fio', 'phone', 'email'].map(id => document.getElementById(id));

function check(input) {
    const ok = regex[input.id].test(input.value.trim());
    input.classList.toggle('valid', ok);
    input.classList.toggle('invalid', !ok);
    return ok;
}

fields.forEach(input => input.addEventListener('input', () => {
    check(input);
    document.getElementById('success').style.display = 'none';
}));

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const allOk = fields.map(check).every(Boolean);
    document.getElementById('success').style.display = allOk ? 'block' : 'none';
});
