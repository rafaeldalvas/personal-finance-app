# Define a imagem base a ser utilizada
FROM node:14-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos do projeto para dentro do contêiner
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Comando a ser executado ao iniciar o contêiner
CMD ["npm", "start"]
