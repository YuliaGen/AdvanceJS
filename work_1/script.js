// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)



const musicCollection = {

        musicAlb: [
                {
                        title: "Название 1",
                        artist: "Исполнитель 1 ",
                        year: "1800"
                },
                {
                        title: "Название 2",
                        artist: "Исполнитель 2",
                        year: "1850"
                },
                {
                        title: "Название 3",
                        artist: "Исполнитель 3",
                        year: "1900"
                },
                {
                        title: "Название 4",
                        artist: "Исполнитель 4",
                        year: "1950"
                }

        ]
};

musicCollection.musicAlb[Symbol.iterator] = function () {
        return {
                current: 0,
                to: this.length,
                next() {
                        return this.current < this.to ? { done: false, value: musicCollection.musicAlb[this.current++] } : { done: true }
                }
        }
}
for (let alboms of musicCollection.musicAlb) {
        console.log(`Название ${alboms.title}, Год ${alboms.year}`);
};