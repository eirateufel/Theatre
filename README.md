# Тестовое задание
## расчет стоимости театральных постановок

Проект не требует установки дополнительных программ и плагинов кроме Node.js и запускается командой
`node index.js`

## Комментарии:

Исходя из кода, предложенного в задании, можно было предположить, что должно существовать два входных JSON файла: со списком пьес, который может предложить исполнитель (`plays` в предоставленном для задания коде), своеобразное "меню", и со списком заказанных заказчиком пьес (`invoice` в предоставленном для задания коде). Поскольку дан был один файл (из которого, при желании, можно было бы сконструировать два), мой код написан исходя из предположения, что данный в задании JSON файл содержит полный список заказанных заказчиком пьес со всеми необходимыми данными, и дополнительный файл-меню не нужен.

Ещё один момент неоднозначности в исходном коде - в файле с данными JSON есть открывающая квадратная скобка и нет закрывающей. Поскольку JSON файл может быть как окружен, так и не окружен квадратными скобками, было не принципиально, в какую сторону делать исправление, но этот выбор принципиален для кода, обрабатывающего файл. Поэтому в index.js есть варианты кода как для одного варианта, так и для другого (указано в комментариях к коду).