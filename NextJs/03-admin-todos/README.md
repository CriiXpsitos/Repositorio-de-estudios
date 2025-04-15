# Development

Pasos para levantar la app en desarrollo

1. levantar la base de datos

```bash

docker compose up -d

```.

2. Renombrar el .env.template a .env
3. Remplazar las variables de entorno

# Prisma commands

```bash
npx o pnpx o bunx prisma init
npx prisma migrate dev
npx prisma generate


```
