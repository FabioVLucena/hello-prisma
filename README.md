# hello-prisma
1 - npm i <br>
2 - docker build -t prisma/dockernode . <br>
3 - docker run -p 5000:5432 -d prisma/dockernode <br>
4 - .env > DATABASE_URL="postgresql://postgres:prisma@localhost:5000/postgres?schema=public" <br>
5 - npx prisma migrate dev --name init <br>
6 - npx ts-node ./src/server.ts <br>
