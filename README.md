# ASSR-TA
Trabajo autónomo para análisis de una base de datos de Netflix


# Netflix Userbase Statistics App

Esta aplicación web proporciona estadísticas sobre la base de usuarios ficticia de Netflix utilizando Node.js, React y PostgreSQL.


## Requisitos

- Node.js y npm
- PostgreSQL

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/netflix-userbase-app.git
```

2. Entra en el directorio del servidor y cliente:
```bash
cd netflix-userbase-app/server
npm install
cd ../client
npm install
```

# Configuración
1. Creamos la base de datos y agregamos los datos del csv.

```bash
psql -U <Usuario> -f ./create_database.sql
python ./scripts.py
```

2. Instalamos las dependencias dadas en package.json.

```bash
npm install
```

3. Iniciamos el proyecto desde la carpeta principal.

```bash
npm start
```

3. Visita http://localhost:3000 en tu navegador para ver la aplicación.

Estructura del Proyecto

```bash
ASSR-TA/
├── client/                    # Frontend en React
│   ├── node_modules/         # Dependencias del frontend (generadas automáticamente)
│   ├── public/               # Archivos públicos (index.html, favicon, etc.)
│   ├── src/                  # Código fuente del frontend
│   │   ├── components/      # Componentes React
│   │   ├── App.js           # Componente principal
│   │   ├── index.js         # Punto de entrada del frontend
│   │   └── ...              # Otros archivos y carpetas del frontend
│   ├── package.json          # Configuración y dependencias del frontend
│   └── README.md             # Documentación del frontend
├── server/                    # Backend en Node.js
│   ├── node_modules/         # Dependencias del backend (generadas automáticamente)
│   ├── index.js              # Archivo principal del servidor
│   ├── package.json          # Configuración y dependencias del backend
├── Dataset.csv                # Conjunto de datos de Netflix
├── .gitignore                   # Archivo de ignorar para git
└── README.md
```