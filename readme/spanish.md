# Space Downloader

# Idiomas

- [🇺🇸 Inglés](https://github.com/lunosat/SpaceDL/blob/main/readme/english.md)
- [🇪🇸 Español](https://github.com/lunosat/SpaceDL/blob/main/readme/spanish.md)
- [🇧🇷 Portugués (Brasil)](https://github.com/lunosat/SpaceDL/blob/main/README.md)

# Introducción

Creé este proyecto con la intención de estudiar diversas redes sociales y sitios web, analizando cómo almacenan sus contenidos, la facilidad o dificultad de obtener esa información, si alguien ya ha hecho algo similar y, principalmente, intentar implementar esto. Inicialmente, estoy desarrollando la base completa con soporte para las tres principales redes sociales: YouTube, Instagram y TikTok.

Todo el código se basó en documentación y publicaciones de otros usuarios, usándolos solo como referencia y sin ninguna copia directa. En todos los casos, busqué estudiar cada función, herramienta u otra tecnología con la que no estuviera familiarizado.

# El Objetivo

El objetivo principal del bot es permitir que los usuarios descarguen videos, audios, imágenes, entre otros, que estén públicos en diversos sitios, principalmente redes sociales.

Utilizando Inline Queries, permitimos que los archivos sean enviados directamente a cualquier chat, sin necesidad de acceder al bot para realizar esta acción. Aunque esta funcionalidad existe, la principal es el uso de Inline Queries.

P.D.: El uso indebido y sus responsabilidades son de total posesión del usuario.

# Tecnologías

## Bibliotecas

Para el desarrollo, utilicé principalmente Node.js (18.20.3) y las siguientes bibliotecas para el funcionamiento general de la aplicación:

- [I18n](https://www.npmjs.com/package/i18n)
- [Node.js Telegram Bot API](https://www.npmjs.com/package/node-telegram-bot-api)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://www.npmjs.com/package/mongoose)

Para la integración con las redes sociales, inicialmente utilizaré algunas bibliotecas públicas, estudiando cómo lograron sus objetivos. Sin embargo, en el futuro, tengo la intención de reemplazar estas bibliotecas por código propio, más organizado y personalizado.

Bibliotecas de terceros utilizadas para la integración:

- [youtube-dl-exec](https://www.npmjs.com/package/youtube-dl-exec)
- [instagram-url-direct](https://www.npmjs.com/package/instagram-url-direct)
- [@tobyg74/tiktok-api-dl](https://www.npmjs.com/package/@tobyg74/tiktok-api-dl)

## Base de Datos

Elegí utilizar MongoDB por su practicidad y por la cuota gratuita de almacenamiento disponible. Posteriormente, tengo la intención de implementar un sistema más robusto para la gestión de los datos.

# Configuración

## Dependencias

- Node.js ^18
- Yarn
- Nodemon (Opcional/Dev)
- Git

## Variables de Entorno

Telegram: Para comenzar, es necesario acceder a [BotFather](https://t.me/botfather) para crear y obtener el token de tu bot. Recuerda activar las Inline Queries para tu bot.

Base de Datos: Puedes utilizar MongoDB Atlas o alojar tu propia base de datos, según tu preferencia.

`.env`
```js
TG_TOKEN="TELEGRAM_TOKEN"
DB_URI="DATABASE_CONNECT_URL"
```

## Inicialización

La inicialización es bastante simple. Con las dependencias y las variables de entorno debidamente configuradas, sigue estos pasos:

```sh
# Clona el repositorio

git clone https://github.com/lunosat/SpaceDL

# Accede a la carpeta

cd SpaceDL

# Instala las bibliotecas

yarn install

# Inicia la aplicación

yarn start

```

# ¡Gracias!

Realmente no sé si alguien ha llegado hasta aquí, pero si lo has hecho, te agradezco mucho por darme la oportunidad de presentar un poco de mi evolución en el área de mi pasión :)