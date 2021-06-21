1. Развернуть базово проект:
```shell script
npx create-react-app --template=zx-features-2021 project
```
Дополнительно:
    1. Разбить проект на features

2. Установить Material UI:
```shell script
yarn add @material-ui/core @material-ui/icons
```
3. Добавить шрифты для Material UI:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```
4. Создать тему Material UI и обернуть приложение в ThemeProvider.
5. Установить React Router
```shell script
yarn add react-router react-router-dom
```
6. Настроить набор страниц:
    1. Обернуть приложение в Router
    2. Подготовить набор Route
    3. Отрендерить роуты внутри Switch

7. Установить react-hook-form:
```shell script
yarn add react-hook-form
```

8. Установить React Query и Axios:
```shell script
yarn add react-query axios
```

9. Создать QueryClient и обернуть приложение в QueryClientProvider

P.S.: все зависимости можно установить 1 командой:
```shell script
yarn add @material-ui/core @material-ui/icons react-router react-router-dom react-hook-form react-query axios
```
