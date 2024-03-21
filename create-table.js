import{ sql  } from './db.js'
// ============APAGAR TABELA========
// sql`DROP TABLE IF EXISTS videos;`.then(()=>console.log('tabela apagada'))


// ==========CRIA TABELA==========
sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
`.then(()=>console.log('TABLE CREATED'))
