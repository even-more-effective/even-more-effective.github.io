FROM node:18-alpine

WORKDIR /app

# Copiar archivos de configuración
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar todo el código del proyecto
COPY . .

# Exponer el puerto correcto que usa Astro por defecto
EXPOSE 4321

# Establecer explícitamente el entorno de desarrollo
ENV NODE_ENV=development

# Comando para ejecutar la aplicación en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]



