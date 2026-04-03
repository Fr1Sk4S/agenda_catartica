# 📋 Agenda Catartica

Un'applicazione web completa per organizzare la tua vita quotidiana, pianificare il menu settimanale e gestire la spesa.

## 🎯 Funzionalità

### 1. ✅ Attività Quotidiane
- Seleziona il giorno della settimana
- Aggiungi e gestisci le attività giornaliere
- Segna le attività come completate
- Elimina le attività non più necessarie
- I dati si sincronizzano automaticamente

### 2. 🍽️ Programma Cucina Settimanale
- Pianifica il menu per tutti i 7 giorni
- Seleziona ricette da un menu a tendina
- Accedi direttamente ai link delle ricette
- 28 ricette disponibili
- Aggiorna automaticamente gli ingredienti

### 3. 🛒 Lista della Spesa
- Aggiungi prodotti con quantità e prezzo
- Categorizza per tipo (Verdure, Carne, Pesce, ecc.)
- Segna i prodotti come acquistati
- Calcolo automatico del totale
- Esporta la lista in formato CSV
- Resetta rapidamente la lista

### 4. 👥 Gestione Clienti
- Inserisci i dati completi dei clienti
- Seleziona data da calendario e orario
- Archivia telefono e email (cliccabili)
- Aggiungi note personalizzate
- Modifica e elimina clienti
- Filtra per data
- Ordina automaticamente per data/orario

## 🚀 Come Usare

### Requisiti
- Browser moderno (Chrome, Firefox, Safari, Edge)
- JavaScript abilitato

### Installazione
1. Scarica i file del progetto
2. Apri `index.html` nel tuo browser
3. Inizia a usare l'applicazione!

### Utilizzo

#### Attività Quotidiane
1. Seleziona un giorno dal menu a tendina
2. Inserisci un'attività nel campo di input
3. Clicca "Aggiungi" o premi Enter
4. Spunta la casella per marcare come completata
5. Clicca "Elimina" per rimuovere un'attività

#### Programma Cucina
1. Per ogni giorno, seleziona una ricetta dal menu
2. Clicca sul link "Vai alla ricetta" per vedere i dettagli
3. Le ricette si salvano automaticamente
4. Cambia le ricette in qualsiasi momento

#### Lista della Spesa
1. Inserisci il nome del prodotto
2. Seleziona la quantità
3. Scegli la categoria
4. Inserisci il prezzo unitario
5. Clicca "Aggiungi"
6. Una volta acquistato, spunta la casella
7. Clicca "Esporta PDF" per scaricare la lista

#### Gestione Clienti
1. Compila il modulo con i dati del cliente
2. Seleziona la data dal calendario
3. Inserisci l'orario dell'appuntamento
4. Telefono e email diventano cliccabili
5. Aggiungi note se necessario
6. Clicca "Aggiungi Cliente"
7. Modifica un cliente cliccando "✏️ Modifica"
8. Elimina cliccando "🗑️ Elimina"
9. Filtra per data per visualizzare appuntamenti specifici

## 📦 Struttura del Progetto

```
Agenda Catartica/
├── index.html          # File HTML principale
├── style.css           # Stili CSS
├── script.js           # Logica JavaScript
└── README.md           # Questo file
```

## 💾 Archiviazione Dati

L'applicazione utilizza **localStorage** del browser per salvare i tuoi dati:
- ✅ Attività quotidiane
- 🍽️ Menu settimanale
- 🛒 Lista della spesa

I dati rimangono nel browser anche dopo chiuderlo. Cancellando i dati di navigazione del browser, perderai anche i dati dell'app.

## 🎨 Design

- **Interfaccia moderna e intuitiva**
- **Colori armoniosi**: Viola, Rosa e Arancione
- **Responsive**: Funziona su desktop, tablet e smartphone
- **Animazioni fluide** per migliore esperienza utente
- **Accessibilità**: Contrasto adeguato e navigazione chiara

## 🔧 Ricette Disponibili

### Piatti Italiani
- Pasta al Ragù
- Risotto ai Funghi
- Pappardelle al Cinghiale
- Ossobuco alla Milanese
- Gnocchi di Patate
- Lasagna
- Ravioli Fatti a Mano
- Branzino al Forno
- Orata al Cartoccio
- Cacciucco
- E molti altri...

## 📱 Responsività

L'applicazione è completamente responsive:
- **Desktop**: Layout completo con grid
- **Tablet**: Adattamento automativo
- **Mobile**: Visualizzazione ottimizzata

## 🌐 Browser Supportati

- ✅ Chrome/Chromium (80+)
- ✅ Firefox (75+)
- ✅ Safari (13+)
- ✅ Edge (80+)
- ✅ Opera (67+)

## 🛠️ Funzionalità Avanzate

### Export CSV
Esporta la tua lista della spesa in formato CSV (Excel) con:
- Nomi dei prodotti
- Quantità
- Categorie
- Prezzi
- Data di esportazione

### Categorie Predefinite
- Verdure
- Frutta
- Carne
- Pesce
- Latticini
- Pasta/Riso
- Spezie
- Altro

## 📝 Note Importanti

1. **Sincronizzazione**: I dati si sincronizzano in tempo reale
2. **Backup**: È consigliato esportare la lista regolarmente
3. **Privacy**: Tutti i dati rimangono nel tuo browser
4. **Cache**: Pulisci la cache per risolvere eventuali problemi

## 🎓 Tips & Tricks

- Usa Tab per navigare tra i campi di input
- Premi Enter per aggiungere (attività e prodotti)
- Clicca sul titolo della sezione per collassare/espandere
- Personalizza le ricette nel codice JavaScript
- Modifica i colori nel CSS (:root variables)

## 🤝 Come Personalizzare

### Aggiungere Ricette
Modifica l'array `ricette` in `script.js`:
```javascript
'nome_ricetta': { 
    nome: 'Nome Ricetta', 
    ingredienti: ['Ingrediente1', 'Ingrediente2'] 
}
```

### Modificare Colori
Modifica le variabili CSS in `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... */
}
```

## 📞 Support

Per problemi o suggerimenti:
1. Verifica che JavaScript sia abilitato
2. Pulisci il cache del browser
3. Controlla la console del browser (F12) per errori
4. Prova con un browser diverso

## 📄 Licenza

Questo progetto è disponibile per uso personale e commerciale.

## 🙏 Crediti

Creato con ❤️ per organizzare meglio la tua vita.

---

**Versione**: 1.0.0  
**Data di creazione**: 2026  
**Ultimo aggiornamento**: Marzo 2026