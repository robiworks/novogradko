CREATE TABLE IF NOT EXISTS buildings (
    id      SERIAL PRIMARY KEY NOT NULL,
    name    TEXT NOT NULL,
    lon     DOUBLE PRECISION,
    lat     DOUBLE PRECISION,
    type    SMALLINT,
    website TEXT
);

GRANT ALL PRIVILEGES ON DATABASE novogradko TO novogradko;

INSERT INTO buildings (name, lon, lat, type, website)
VALUES
    ('Regentov kvart', 0.0, 0.0, 0, 'https://www.ljubljananepremicnine.si/novogradnja/regentov-kvart'),
    ('Barjanka', 0.0, 0.0, 0, 'https://www.ljubljananepremicnine.si/novogradnja/barjanka'),
    ('Lagom Črnuški bajer', 0.0, 0.0, 0, 'https://www.crnuski-bajer.si/'),
    ('Palais & Villa Schellenburg', 0.0, 0.0, 0, 'https://www.schellenburg-living.com/sl/celota.html'),
    ('Vila Toscanini', 0.0, 0.0, 0, 'https://vilatoscanini.si/');