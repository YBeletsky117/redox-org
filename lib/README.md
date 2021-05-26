# react-native-lad-mobile

Установка пакетов проекта:
* yarn install

Добавление новых пакетов:
* yarn add package_name

Запуск бандлера:
* yarn start
* yarn start --reset-cache

Запуск на android:
* yarn android

Запуск на ios:
* yarn ios


Загрузка (обновление) компонентов в stories:
* yarn prestorybook

Запуск Storybook в браузере:
* yarn storybook

Билд статической страницы storybook. Создается папка storybook-static.
Далее эту папку выкладываем на рабочий хостинг
* build-storybook


Запуск на локальном сервере, установить serve. Открываем в браузере http://localhost:8080/
* serve -d storybook-static