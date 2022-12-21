# TODO-App

## Описание

Необходимо создать приложение-задачник (ToDo list).

Backend на Node.js (Express), frontend на React c использованием центрального хранилища (redux, mobx или context provider).

База данных - любая реляционная. К дизайну особых требований нет, должно быть аккуратно.

### Логин для администратора

- Вход для администратора (логин "admin", пароль "123").
- Администратор имеет возможность редактировать текст задачи и поставить галочку о выполнении.
- Выполненные задачи в общем списке выводятся с соответствующей отметкой.

### Главная страница

- Вывод задач нужно сделать страницами по 3 штуки (с пагинацией).
- Видеть список задач и создавать новые может любой посетитель без авторизации.
- список задач с возможностью сортировки по имени пользователя, email и статусу.

### Задачи

- имя пользователя;
- е-mail;
- текст задачи;
