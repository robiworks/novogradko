GRANT ALL PRIVILEGES ON DATABASE novogradko TO novogradko;

CREATE TABLE IF NOT EXISTS region (
    region_id   INTEGER PRIMARY KEY,
    region_name TEXT
);

INSERT INTO region (region_id, region_name)
VALUES  (0, 'Osrednjeslovenska'),
        (1, 'Gorenjska'),
        (2, 'Goriška'),
        (3, 'Obalno-kraška'),
        (4, 'Primorsko-notranjska'),
        (5, 'Jugovzhodna Slovenija'),
        (6, 'Posavska'),
        (7, 'Zasavska'),
        (8, 'Savinjska'),
        (9, 'Koroška'),
        (10, 'Podravska'),
        (11, 'Pomurska');

CREATE TABLE IF NOT EXISTS building_status (
    status_id           INTEGER PRIMARY KEY,
    status_description  TEXT
);

INSERT INTO building_status (status_id, status_description)
VALUES  (0, 'zgrajeno'),
        (1, 'v gradnji'),
        (2, 'v prihodu');

CREATE TABLE IF NOT EXISTS building_type (
    type_id             INTEGER PRIMARY KEY,
    type_description    TEXT
);

INSERT INTO building_type (type_id, type_description)
VALUES  (0, 'stanovanja'),
        (1, 'hiša');

CREATE TABLE IF NOT EXISTS building (
    id              SERIAL PRIMARY KEY NOT NULL,
    name            TEXT,
    website         TEXT,
    lat             DOUBLE PRECISION,
    lon             DOUBLE PRECISION,
    type_id         INTEGER,
    status_id       INTEGER,
    region_id       INTEGER,

    CONSTRAINT fk_type
        FOREIGN KEY (type_id)
            REFERENCES building_type (type_id),
    CONSTRAINT fk_status
        FOREIGN KEY (status_id)
            REFERENCES building_status (status_id),
    CONSTRAINT fk_region
        FOREIGN KEY (region_id)
            REFERENCES region (region_id)
);

INSERT INTO building (name, lat, lon, type_id, website, status_id, region_id)
VALUES
    ('Regentov kvart', 46.084123, 14.469733, 0, 'https://www.ljubljananepremicnine.si/novogradnja/regentov-kvart', 2, 0), -- Ljubljana
    ('Barjanka', 46.028976, 14.499386, 0, 'https://www.ljubljananepremicnine.si/novogradnja/barjanka', 1, 0), -- Ljubljana
    ('Mivka', 46.037010, 14.503182, 0, 'https://www.ljubljananepremicnine.si/novogradnja/mivka', 1, 0), -- Ljubljana
    ('Fluvia', 46.098095, 14.527589, 0, 'https://www.ljubljananepremicnine.si/novogradnja/fluvia', 1, 0), -- Ljubljana
    ('RB Ellipse', 46.045107, 14.519385, 0, 'https://www.ljubljananepremicnine.si/novogradnja/roska-elipsa', 1, 0), -- Ljubljana
    ('Draveljskih 8', 46.080258, 14.467919, 0, 'https://www.ljubljananepremicnine.si/novogradnja/draveljskih-8', 1, 0), -- Ljubljana
    ('Vila blok 9-ka', 46.045505, 14.472233, 0, 'https://www.ljubljananepremicnine.si/novogradnja/9ka-invest', 1, 0), -- Ljubljana
    ('Vila Destino', 46.050822, 14.478848, 0, 'https://www.ljubljananepremicnine.si/novogradnja/vila-destino', 1, 0), -- Ljubljana
    ('Palais & Villa Schellenburg', 46.055630, 14.501686, 0, 'https://www.schellenburg-living.com/sl/celota.html', 1, 0), -- Ljubljana
    ('Rezidenca Luwigana', 46.044396, 14.509479, 0, 'http://www.luwigana.si/', 0, 0), -- Ljubljana
    ('Lagom Črnuški bajer', 46.107321, 14.533545, 0, 'https://www.crnuski-bajer.si/', 2, 0), -- Ljubljana
    ('Vila Toscanini', 46.043906, 14.492200, 0, 'https://vilatoscanini.si/', 0, 0), -- Ljubljana
    ('Med javorji v Kašlju', 46.053597, 14.599020, 1, 'https://www.lin.si/nove_nepremicnine_vrstne_hise_kaselj/', 0, 0), -- Ljubljana
    ('DRENovo', 45.998420, 14.335209, 1, 'https://www.drenovo.si/', 0, 0), -- Drenov Grič
    ('Svetli dvori', 45.977052, 14.313594, 1, 'https://www.mestonepremicnin.si/novogradnja/dvojcek-v-sinji-gorici', 1, 0), -- Sinja Gorica
    ('Slomškovi dvori', 45.965315, 14.657960, 0, 'https://slomskovidvori.si/', 1, 0), -- Grosuplje
    ('Apartmajski kompleks Emerald', 46.238182, 15.635616, 0, 'https://rogaska.online/', 0, 8), -- Rogaška Slatina
    ('Stanovanja Glavni trg Kranj', 46.239283, 14.355820, 0, 'https://issuu.com/glavnitrg-kranj/docs/kr_katalog_issuu_nov20', 0, 1), -- Kranj
    ('Stanovanjsko-poslovni objekt Hudinja', 46.249096, 15.271961, 0, 'https://www.hudinjacelje.si/', 0, 8), -- Celje
    ('Sodobna stanovanjska soseska Momento', 45.526967, 13.654992, 0, 'https://momento.si/', 2, 3), -- Izola
    ('Soseska Gradišče', 45.795112, 14.359373, 0, 'https://soseska-gradisce.si/', 1, 4), -- Cerknica
    ('Soške vile', 45.969197, 13.639716, 1, 'https://www.soskevile.si/', 0, 2), -- Solkan/Nova Gorica
    ('Blok Bellevue', 45.770778, 14.220306, 0, 'https://www.strade.si/blok-bellevue', 1, 4), -- Postojna
    ('Vrata Javornika', 46.541176, 14.972394, 0, 'https://www.vrata-javornika.si/home/', 1, 9), -- Ravne na Koroškem
    ('Rezidence 66', 45.802340, 15.174699, 0, 'https://www.rezidence66.si/', 1, 5), -- Novo mesto
    ('Glazija Center', 46.232365, 15.259129, 0, 'https://glazija.si/', 0, 8), -- Celje
    ('Ribarjeva rezidenca', 46.243711, 15.258499, 0, 'https://ribarjeva-rezidenca.si/', 1, 8), -- Celje
    ('Soseska Grajski dvori', 46.237901, 15.337039, 0, 'https://www.soseska-grajskidvori.si/', 1, 8), -- Šentjur/Celje
    ('Dvorci Prežin', 46.211348, 15.345889, 1, 'https://dvorciprezin.si/objekti/', 1, 8), -- okolica Celja
    ('Sončne terase', 46.448087, 15.623767, 0, 'https://www.novogradnje-maribor.si/soncne-terase/', 1, 10), -- Maribor
    ('Studenški kvart', 46.558983, 15.621527, 0, 'https://www.novogradnje-maribor.si/studenski-kvart/', 2, 10), -- Maribor
    ('Novi vrtovi', 46.547789, 15.625012, 0, 'https://www.novogradnje-maribor.si/novi-vrtovi/', 0, 10), -- Maribor
    ('Naselje Urbana - stanovanja', 46.543599, 15.652294, 0, 'https://www.novogradnje-maribor.si/naselje-urbana/', 2, 10), -- Maribor
    ('Naselje Urbana - hiše', 46.543674, 15.652657, 1, 'https://www.novogradnje-maribor.si/naselje-urbana/', 2, 10); -- Maribor
