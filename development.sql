DROP DATABASE IF EXISTS ooh_media_web_api;
CREATE DATABASE ooh_media_web_api;
CREATE USER developer WITH PASSWORD 'pass1';
GRANT ALL PRIVILEGES ON DATABASE ooh_media_web_api TO developer;