DROP DATABASE IF EXISTS ooh_media_web_api_test;
CREATE DATABASE ooh_media_web_api_test;
CREATE USER test WITH PASSWORD 'pass1';
GRANT ALL PRIVILEGES ON DATABASE ooh_media_web_api_test TO test;