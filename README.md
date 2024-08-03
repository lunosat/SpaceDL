# Space Downloader

# Idiomas

[🇺🇸 Inglês]()
[🇪🇸 Espanhol]()
[🇧🇷 Português (Brasil)]()

# Introdução

Criei este projeto com a intenção de estudar diversas redes sociais e sites, analisando como eles armazenam seus conteúdos, a facilidade ou dificuldade de obter essas informações, se alguém já fez algo semelhante e, principalmente, tentar implementar isso. Inicialmente, estou desenvolvendo a base completa com suporte às três principais redes sociais: YouTube, Instagram e TikTok.

Todo o código foi baseado em documentação e posts de outros usuários, utilizando-os apenas como referência e sem qualquer cópia direta. Em todos os casos, busquei estudar cada função, ferramenta ou qualquer outra tecnologia com a qual eu não tivesse familiaridade.

# O Objetivo

O objetivo principal do bot é permitir que os usuários realizem o download de vídeos, áudios, imagens, entre outros, que estejam públicos em diversos sites, principalmente redes sociais.

Utilizando Inline Queries, permitimos que os arquivos sejam enviados diretamente a qualquer chat, sem a necessidade de acessar o bot para realizar essa ação. Apesar de essa funcionalidade existir, a principal é o uso de Inline Queries.

P.S.: O uso indevido e suas responsabilidades são de total posse do usuário.

# Tecnologias

## Bibliotecas

Para o desenvolvimento, utilizei principalmente Node.js (18.20.3) e as seguintes bibliotecas para o funcionamento geral da aplicação:

- [I18n](https://www.npmjs.com/package/i18n)
- [Node.js Telegram Bot API](https://www.npmjs.com/package/node-telegram-bot-api)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://www.npmjs.com/package/mongoose)

Para a integração com as redes sociais, inicialmente utilizarei algumas bibliotecas públicas, estudando como elas atingiram seus objetivos. No entanto, futuramente pretendo substituir essas bibliotecas por código próprio, mais organizado e personalizado.

Bibliotecas de terceiros utilizadas para a integração:

- [youtube-dl-exec](https://www.npmjs.com/package/youtube-dl-exec)
- [instagram-url-direct](https://www.npmjs.com/package/instagram-url-direct)
- [@tobyg74/tiktok-api-dl](https://www.npmjs.com/package/@tobyg74/tiktok-api-dl)

## Banco de Dados

Escolhi utilizar o MongoDB pela sua praticidade e pela cota gratuita de armazenamento disponível. Posteriormente, pretendo implementar um sistema mais robusto para o gerenciamento dos dados.

# Configuração

## Dependências

- Node.js ^18
- Yarn
- Nodemon (Opcional/Dev)
- Git

## Variáveis de Ambiente

Telegram: Para iniciar, é necessário acessar o [BotFather](https://t.me/botfather) para criar e obter o token do seu bot. Lembre-se de ativar as Inline Queries para o seu bot.

Banco de Dados: Você pode utilizar o MongoDB Atlas ou hospedar seu próprio banco de dados, conforme a sua preferência.

`.env`
```js
TG_TOKEN="TELEGRAM_TOKEN"
DB_URI="DATABASE_CONNECT_URL"
```

## Inicialização

A inicialização é bastante simples. Com as dependências e as variáveis de ambiente devidamente configuradas, siga estes passos:

```sh
# Clone o repositório

git clone https://github.com/lunosat/SpaceDL

# Acesse a pasta

cd SpaceDL

# Instale as bibliotecas

yarn install

# Inicie a aplicação

yarn start

```

# Obrigado!

Eu realmente não sei se alguém chegou até aqui, mas se você chegou, agradeço muito por me dar a oportunidade de apresentar um pouco da minha evolução na área da minha paixão :)