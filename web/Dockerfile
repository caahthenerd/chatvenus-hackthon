# Define a imagem base
FROM node:14-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Compila o projeto Next.js para produção
RUN npm run build

# Dá permissão de escrita e leitura na pasta /app
RUN chmod -R 777 /app

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["npm", "start"]
