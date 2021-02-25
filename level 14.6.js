function usePromise() {
    // Создаем promise
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 101));
        }, 3000);

    });


    myPromise
        .then((result) => {
            if (result % 2 == 0) {
                console.log(`Завершено успешно. Сгенерированное число — ${result}`);
            } else {
                console.log(`Завершено с ошибкой. Сгенерированное число — ${result}`);
            }

        })
        .catch((error) => {
            console.log('Обрабатываем reject', error);
        })

}

usePromise();
