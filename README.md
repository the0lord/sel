# sel

Весь проект находиться на master ветке

Запуск бэкенда в папке backend:
1. docker compose up --build -d
2. docker compose exec -it web /bin/bash
 #python manage.py makemigrations
 #python manage.py migrate
 #python manage.py createsuperuser
Запуск фронтенда в папке sel-front:
1. docker compose -f docker-compose.prod.yml up --build -d
   
