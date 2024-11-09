# sel

Весь проект находиться на master ветке

Запуск бэкенда в папке backend:
в .env файле надо указать следующие переменные:
SECRET_KEY=django-insecure-59oivy_&8cx6^^me4(l-o&d=md2b@#$1t7ct9!_wcq=76ky11m
DEBUG=True
1. docker compose up --build -d
2. docker compose exec -it web /bin/bash
 #python manage.py makemigrations
 #python manage.py migrate
 #python manage.py createsuperuser


Запуск фронтенда в папке sel-front:
в .env файле надо указать путь к запросу бэка:
VITE_BASE_URL=***
1. docker compose -f docker-compose.prod.yml up --build -d
