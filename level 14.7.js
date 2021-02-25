const btn = document.querySelector('.j-btn');
const resultContent = document.querySelector('.result');

btn.addEventListener('click', () => {
    const input = document.querySelector('.j-input').value;
    fetch(`https://jsonplaceholder.typicode.com/users/${input}/todos`)
        .then((response) => {
            console.log('response', response);

            const result = response.json();
            console.log('result', result);
            return result;
        })
        .then((data) => {
            if (data.length !== 0) {
                console.log(data);
                resultContent.innerHTML = '';
                data.forEach(item => {
                    let resultValue = `<ul class="result-ul">
                    <li><b>id пользователя:</b><br> <span>${item.userId}</span></li>
                    <li class="completed"><b>выполнение задачи:</b><br> <span>${item.completed}</span></li>
                    <li class="line-trought"><b>Описание задачи:</b><br> <span>${item.title}</span></li>
                    <li><b>id задачи:</b><br> <span>${item.id}</span></li>
                </ul>`;
                    resultContent.innerHTML += resultValue;
                });
            }
            else {
                resultContent.innerHTML = 'Пользователь с указанным id не найден';
            }
        })
        .catch(() => {
            console.log('error');
        })
})