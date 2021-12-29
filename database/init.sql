CREATE TABLE IF NOT EXISTS buildings (
    id      SERIAL PRIMARY KEY NOT NULL,
    name    TEXT NOT NULL,
    lat     DOUBLE PRECISION,
    lon     DOUBLE PRECISION,
    type    SMALLINT,
    website TEXT
);

GRANT ALL PRIVILEGES ON DATABASE novogradko TO novogradko;

INSERT INTO buildings (name, lat, lon, type, website)
VALUES
    ('Regentov kvart', 46.084123, 14.469733, 0, 'https://www.ljubljananepremicnine.si/novogradnja/regentov-kvart'),
    ('Barjanka', 46.028976, 14.499386, 0, 'https://www.ljubljananepremicnine.si/novogradnja/barjanka'),
    ('Lagom Črnuški bajer', 46.107321, 14.533545, 0, 'https://www.crnuski-bajer.si/'),
    ('Palais & Villa Schellenburg', 46.055630, 14.501686, 0, 'https://www.schellenburg-living.com/sl/celota.html'),
    ('Vila Toscanini', 46.043906, 14.492200, 0, 'https://vilatoscanini.si/');