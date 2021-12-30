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
    -- [LJUBLJANA-MESTO]
    ('Regentov kvart', 46.084123, 14.469733, 0, 'https://www.ljubljananepremicnine.si/novogradnja/regentov-kvart'),
    ('Barjanka', 46.028976, 14.499386, 0, 'https://www.ljubljananepremicnine.si/novogradnja/barjanka'),
    ('Mivka', 46.037010, 14.503182, 0, 'https://www.ljubljananepremicnine.si/novogradnja/mivka'),
    ('Fluvia', 46.098095, 14.527589, 0, 'https://www.ljubljananepremicnine.si/novogradnja/fluvia'),
    ('RB Ellipse', 46.045107, 14.519385, 0, 'https://www.ljubljananepremicnine.si/novogradnja/roska-elipsa'),
    ('Draveljskih 8', 46.080258, 14.467919, 0, 'https://www.ljubljananepremicnine.si/novogradnja/draveljskih-8'),
    ('Vila blok 9-ka', 46.045505, 14.472233, 0, 'https://www.ljubljananepremicnine.si/novogradnja/9ka-invest'),
    ('Vila Destino', 46.050822, 14.478848, 0, 'https://www.ljubljananepremicnine.si/novogradnja/vila-destino'),
    ('Palais & Villa Schellenburg', 46.055630, 14.501686, 0, 'https://www.schellenburg-living.com/sl/celota.html'),
    ('Rezidenca Luwigana', 46.044396, 14.509479, 0, 'http://www.luwigana.si/'),
    ('Lagom Črnuški bajer', 46.107321, 14.533545, 0, 'https://www.crnuski-bajer.si/'),
    ('Vila Toscanini', 46.043906, 14.492200, 0, 'https://vilatoscanini.si/'),
    ('Med javorji v Kašlju', 46.053597, 14.599020, 1, 'https://www.lin.si/nove_nepremicnine_vrstne_hise_kaselj/'),
    -- [LJUBLJANA-OKOLICA]
    ('DRENovo', 45.998420, 14.335209, 1, 'https://www.drenovo.si/'), -- Drenov Grič
    ('Svetli dvori', 45.977052, 14.313594, 1, 'https://www.mestonepremicnin.si/novogradnja/dvojcek-v-sinji-gorici'), -- Sinja Gorica
    ('Slomškovi dvori', 45.965315, 14.657960, 0, 'https://slomskovidvori.si/'), -- Grosuplje
    -- [OSTALE REGIJE]
    ('Apartmajski kompleks Emerald', 46.238182, 15.635616, 0, 'https://rogaska.online/'), -- Rogaška Slatina
    ('Stanovanja Glavni trg Kranj', 46.239283, 14.355820, 0, 'https://issuu.com/glavnitrg-kranj/docs/kr_katalog_issuu_nov20'), -- Kranj
    ('Stanovanjsko-poslovni objekt Hudinja', 46.249096, 15.271961, 0, 'https://www.hudinjacelje.si/'), -- Celje
    ('Sodobna stanovanjska soseska Momento', 45.526967, 13.654992, 0, 'https://momento.si/'), -- Izola
    ('Soseska Gradišče', 45.795112, 14.359373, 0, 'https://soseska-gradisce.si/'), -- Cerknica
    ('Soške vile', 45.969197, 13.639716, 1, 'https://www.soskevile.si/'), -- Solkan/Nova Gorica
    ('Blok Bellevue', 45.770778, 14.220306, 0, 'https://www.strade.si/blok-bellevue'), -- Postojna
    ('Vrata Javornika', 46.541176, 14.972394, 0, 'https://www.vrata-javornika.si/home/'), -- Ravne na Koroškem
    ('Rezidence 66', 45.802340, 15.174699, 0, 'https://www.rezidence66.si/'), -- Novo mesto
    ('Glazija Center', 46.232365, 15.259129, 0, 'https://glazija.si/'), -- Celje
    ('Ribarjeva rezidenca', 46.243711, 15.258499, 0, 'https://ribarjeva-rezidenca.si/'), -- Celje
    ('Soseska Grajski dvori', 46.237901, 15.337039, 0, 'https://www.soseska-grajskidvori.si/'), -- Šentjur/Celje
    ('Dvorci Prežin', 46.211348, 15.345889, 1, 'https://dvorciprezin.si/objekti/'), -- okolica Celja
    ('Sončne terase', 46.448087, 15.623767, 0, 'https://www.novogradnje-maribor.si/soncne-terase/'), -- Maribor
    ('Studenški kvart', 46.558983, 15.621527, 0, 'https://www.novogradnje-maribor.si/studenski-kvart/'), -- Maribor
    ('Novi vrtovi', 46.547789, 15.625012, 0, 'https://www.novogradnje-maribor.si/novi-vrtovi/'), -- Maribor
    ('Naselje Urbana - stanovanja', 46.543599, 15.652294, 0, 'https://www.novogradnje-maribor.si/naselje-urbana/'), -- Maribor
    ('Naselje Urbana - hiše', 46.543674, 15.652657, 1, 'https://www.novogradnje-maribor.si/naselje-urbana/') -- Maribor
