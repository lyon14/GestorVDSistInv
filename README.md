# gestor-bd-sist-inv

## Descripción del proyecto

El proyecto Base-Sails utiliza el framework SailsJS para la creación de una API RESTful. Esta aplicación utiliza una base de datos postgresql.

## Requerimientos

1. Instalar [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/) V.15.
2. Instalar nodeJS recomendado v16.20.0 [https://nodejs.org/en](https://nodejs.org/en).
3. Despues de instalar node se deben instalar dependencias globales. SailsJs `npm install sails -g` [https://sailsjs.com/get-started](https://sailsjs.com/get-started)
4. Para los test instalar de forma global instalar mocha `npm install --global mocha`.
5. Instalado de forma global se debe ejecutar en consola dentro del directorio del proyectos `npm i` para instalar todas las dependencias.
6. en pgadmin o el gestor de la base de datos de postgrest crear la base de datos `nano`.
7. Finalmente en la consola del proyecto ejecutar `sails lift` para ejecutar el servidor >[http://localhost:8100/](http://localhost:8100/), para ejecutar el test se utiliza`npm test` en consola para ejecutar los test.
