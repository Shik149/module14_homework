const btn = document.querySelector('.j-btn');
const resultContent = document.querySelector('.result');

btn.addEventListener('click', () => {
    const inputNumber = document.querySelector('.j-input-number').value;
    const inputLimit = document.querySelector('.j-input-limit').value;

    if (inputNumber < 1 || inputNumber > 10 || isNaN(inputNumber)) {
        resultContent.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else if (inputLimit < 1 || inputLimit > 10 || isNaN(inputLimit)) {
        resultContent.innerHTML = 'Лимит вне диапазона от 1 до 10';
    } else if ((inputNumber < 1 || inputNumber > 10) || isNaN(inputNumber) && (inputLimit < 1 || inputLimit > 10) || isNaN(inputLimit)) {
        resultContent.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else {
        fetch(`https://picsum.photos/v2/list?page=${inputNumber}&limit=${inputLimit}`)
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
                        let resultValue = `
                    <div>
                        <div class="result-img">Автор картинки: ${item.author}</div>
                        <a class="result-link" target="_blank" href="${item.download_url}">${item.download_url}</a>
                    </div>
                    `;
                        resultContent.innerHTML += resultValue;
                    });
                }
            })
            .catch(() => {
                console.log('error');
            })
    }
})