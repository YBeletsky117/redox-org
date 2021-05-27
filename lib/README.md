# react-native-redox
### COMPONENTS LIB

Установка пакетов проекта:
```sh
   yarn install
```

Добавление новых пакетов:
```sh
   yarn add package_name
```

Запуск бандлера:
```sh
   yarn start --reset-cache
```

Запуск на android:
```sh
   yarn android
```

Запуск на ios:
```sh
   yarn ios
```

Загрузка (обновление) компонентов в stories:
```sh
   yarn prestorybook
```

Запуск Storybook в браузере:
```sh
   yarn storybook
```

Билд статической страницы storybook. Создается папка storybook-static.
Далее эту папку выкладываем на рабочий хостинг
```sh
   yarn build-storybook
```


Запуск на локальном сервере, установить serve. Открываем в браузере http://localhost:8080/
```sh
   npm -g install serve
   serve -d storybook-static
```