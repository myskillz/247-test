# Technical Test

Ensure you have Laravel Herd and DBngin installed.

Create a MySQL server with DBngin and make sure it is running. 

```bash
cd ~/Herd
git clone https://gitlab.com/247_devs/technical-test.git 247tech
cd 247tech
herd secure 
composer install
php artisan migrate:fresh
php artisan db:seed --class=ProductSeeder
npm install
npm run dev
```

[Click here for your test instructions](https://247tech.test)
