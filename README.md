# Example setup for Cypress testing with code coverage

## Installation

This contains a default Laravel setup. 
Extended Laravel installation instructions can be found in [the Laravel docs](https://laravel.com/docs/7.x)

* Clone repository
* Run `composer install`
* Copy `.env.dist` to `.env`
* Edit the `.env` file with desired configuration - database settings are not needed
* (optional) Run `php artisan key:generate`
* Run `npm install`
* Run `npm run dev`
* Configure a PHP environment with the webroot set to the public directory or use `php artisan serve`
* Set the correct baseUrl inside cypress.json
* Run `cypress open`
