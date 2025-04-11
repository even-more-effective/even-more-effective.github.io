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

# Make the dev script executable
RUN chmod +x dev.sh

# Comando para ejecutar la aplicación en modo desarrollo
CMD ["./dev.sh"]



