from sqlalchemy import create_engine, text
import pandas as pd

# Credenciales de PostgreSQL
username = 'postgres'
password = 'password'
host = 'localhost'
port = '5432'
database = 'Netflix_Userbase'

# Conectar a PostgreSQL
engine = create_engine(f'postgresql://{username}:{password}@{host}:{port}')

# Consulta SQL para eliminar la base de datos si existe
sql_drop_database = f'DROP DATABASE IF EXISTS {database}'

# Consulta SQL para crear la base de datos
sql_create_database = f'CREATE DATABASE {database}'

# Ejecutar la consulta SQL para eliminar la base de datos
with engine.connect() as connection:
    connection.execution_options(isolation_level="AUTOCOMMIT").execute(text(sql_drop_database))

# Ejecutar la consulta SQL para crear la base de datos
with engine.connect() as connection:
    connection.execution_options(isolation_level="AUTOCOMMIT").execute(text(sql_create_database))

# Conectar a la base de datos recién creada
engine = create_engine(f'postgresql://{username}:{password}@{host}:{port}/{database}')

# Crear las tablas en PostgreSQL
sql_create_table ='''

DROP TABLE IF EXISTS netflix_data;

CREATE TABLE IF NOT EXISTS netflix_data (
    "User ID" INT,
    "Subscription Type" VARCHAR(255),
    "Monthly Revenue" FLOAT,
    "Join Date" DATE,
    "Last Payment Date" DATE,
    "Country" VARCHAR(255),
    "Age" INT,
    "Gender" VARCHAR(255),
    "Device" VARCHAR(255),
    "Plan Duration" VARCHAR(255)
);

'''

# Ejecutar la consulta SQL para crear la tabla
with engine.connect() as connection:
    connection.execution_options(isolation_level="AUTOCOMMIT").execute(text(sql_create_table))

# Leer el CSV
fg1 = pd.read_csv("../Netflix Userbase.csv")
df = pd.concat([fg1])
df = df.dropna()

# Insertar datos en la tabla
df.to_sql('netflix_data', con=engine, index=False, if_exists='append')