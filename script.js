// Dati dell'applicazione
const appData = {
    attivita: {
        lunedi: [],
        martedi: [],
        mercoledi: [],
        giovedi: [],
        venerdi: [],
        sabato: [],
        domenica: []
    },
    menu: {
        lunedi: '',
        martedi: '',
        mercoledi: '',
        giovedi: '',
        venerdi: '',
        sabato: '',
        domenica: ''
    },
    spesa: [],
    clienti: []
};

// Ricette disponibili
const ricette = {
    'pasta': { nome: 'Pasta al Ragù', ingredienti: ['Pasta', 'Pomodori', 'Carne macinata', 'Cipolla', 'Aglio'] },
    'pollo': { nome: 'Pollo al Forno', ingredienti: ['Pollo', 'Olio', 'Sale', 'Pepe', 'Erbe aromatiche'] },
    'pesce': { nome: 'Pesce all\'Acqua Pazza', ingredienti: ['Pesce', 'Pomodori', 'Aglio', 'Peperoncino', 'Prezzemolo'] },
    'risotto': { nome: 'Risotto ai Funghi', ingredienti: ['Riso Carnaroli', 'Funghi', 'Cipolla', 'Vino bianco', 'Brodo'] },
    'pizza': { nome: 'Pizza Fatta in Casa', ingredienti: ['Farina', 'Lievito', 'Pomodori', 'Mozzarella', 'Olio'] },
    'lasagna': { nome: 'Lasagna', ingredienti: ['Pasta lasagna', 'Ragù', 'Besciamella', 'Parmigiano', 'Mozzarella'] },
    'verdure': { nome: 'Verdure al Forno', ingredienti: ['Zucchine', 'Melanzane', 'Peperoni', 'Olio', 'Aglio'] },
    'verdure_grigliate': { nome: 'Verdure Grigliate', ingredienti: ['Zucchine', 'Melanzane', 'Peperoni', 'Olio', 'Erbe aromatiche'] },
    'minestrone': { nome: 'Minestrone', ingredienti: ['Verdure miste', 'Pasta', 'Fagioli', 'Brodo', 'Olio'] },
    'branzino': { nome: 'Branzino al Forno', ingredienti: ['Branzino', 'Limone', 'Olio', 'Sale', 'Pepe'] },
    'riso': { nome: 'Riso con Verdure', ingredienti: ['Riso', 'Verdure miste', 'Brodo', 'Olio', 'Cipolla'] },
    'carne': { nome: 'Carne in Umido', ingredienti: ['Carne', 'Vino rosso', 'Pomodori', 'Verdure', 'Spezie'] },
    'frittata': { nome: 'Frittata', ingredienti: ['Uova', 'Cipolla', 'Patate', 'Formaggio', 'Sale'] },
    'gnocchi': { nome: 'Gnocchi di Patate', ingredienti: ['Patate', 'Farina', 'Uova', 'Parmigiano', 'Burro'] },
    'melanzane': { nome: 'Melanzane alla Parmigiana', ingredienti: ['Melanzane', 'Pomodori', 'Mozzarella', 'Parmigiano', 'Olio'] },
    'pasta_salmone': { nome: 'Pasta al Salmone', ingredienti: ['Pasta', 'Salmone', 'Panna', 'Aglio', 'Prezzemolo'] },
    'pollo_curry': { nome: 'Pollo al Curry', ingredienti: ['Pollo', 'Curry', 'Latte di cocco', 'Cipolla', 'Aglio'] },
    'orata': { nome: 'Orata al Cartoccio', ingredienti: ['Orata', 'Limone', 'Prezzemolo', 'Olio', 'Sale'] },
    'pasta_vongole': { nome: 'Spaghetti alle Vongole', ingredienti: ['Pasta', 'Vongole', 'Aglio', 'Peperoncino', 'Vino bianco'] },
    'costata': { nome: 'Costata alla Fiorentina', ingredienti: ['Costata', 'Sale', 'Pepe', 'Rosmarino', 'Olio'] },
    'zuppa': { nome: 'Zuppa di Pesce', ingredienti: ['Pesce misto', 'Frutti di mare', 'Pomodori', 'Aglio', 'Vino bianco'] },
    'bistecca': { nome: 'Bistecca alla Griglia', ingredienti: ['Bistecca', 'Sale', 'Pepe', 'Olio', 'Limone'] },
    'arrosticini': { nome: 'Arrosticini', ingredienti: ['Carne di agnello', 'Rosmarino', 'Sale', 'Pepe', 'Olio'] },
    'pappardelle': { nome: 'Pappardelle al Cinghiale', ingredienti: ['Pappardelle', 'Cinghiale', 'Pomodori', 'Vino rosso', 'Aglio'] },
    'ossobuco': { nome: 'Ossobuco alla Milanese', ingredienti: ['Ossobuco', 'Vino bianco', 'Pomodori', 'Verdure', 'Brodo'] },
    'brasato': { nome: 'Brasato al Barolo', ingredienti: ['Brachetto', 'Barolo', 'Verdure', 'Spezie', 'Brodo'] },
    'ravioli': { nome: 'Ravioli Fatti a Mano', ingredienti: ['Farina', 'Uova', 'Ricotta', 'Spinaci', 'Parmigiano'] },
    'pollo_arrosto': { nome: 'Pollo Arrosto', ingredienti: ['Pollo', 'Limone', 'Rosmarino', 'Aglio', 'Olio'] },
    'filetto_pepe_verde': { nome: 'Filetto al Pepe Verde', ingredienti: ['Filetto di manzo', 'Pepe verde', 'Panna', 'Vino bianco', 'Burro'] },
    'cacciucco': { nome: 'Cacciucco', ingredienti: ['Pesce misto', 'Polpo', 'Vongole', 'Pomodori', 'Pane tostato'] },
    'polpette': { nome: 'Polpette in Umido', ingredienti: ['Carne', 'Vino rosso', 'Pomodori', 'Verdure', 'Spezie'] },
    'scaloppine': { nome: 'Scaloppine al Limone', ingredienti: ['Scaloppine', 'Limone', 'Burro', 'Prezzemolo', 'Sale'] },
    'bistecca_fiorentina': { nome: 'Bistecca alla Fiorentina', ingredienti: ['Bistecca', 'Sale grosso', 'Pepe nero', 'Olio extravergine di oliva', 'Rosmarino'] },
    'orata_acqua_pazza': { nome: 'Orata all\'Acqua Pazza', ingredienti: ['Orata', 'Pomodori', 'Aglio', 'Peperoncino', 'Prezzemolo'] }
};

// Inizializzazione
window.addEventListener('DOMContentLoaded', function() {
    caricaDati();
    inizializzaSezioni();
    initModalitàSezioni();
});

// Carica dati da localStorage
function caricaDati() {
    const datiSalvati = localStorage.getItem('agendaCatartica');
    if (datiSalvati) {
        Object.assign(appData, JSON.parse(datiSalvati));
    }
}

// Salva dati su localStorage
function salvaDati() {
    localStorage.setItem('agendaCatartica', JSON.stringify(appData));
}

// Inizializza le sezioni
function inizializzaSezioni() {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach((section, index) => {
        if (index === 0) {
            section.classList.add('active');
        }
    });
    updateAttivita();
    renderSpesa();
    renderClienti();
}

// Toggle sezioni
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.section-content');
    const btn = section.querySelector('.toggle-btn');
    
    content.classList.toggle('active');
    btn.classList.toggle('collapsed');
}

// Modalità click per header
function initModalitàSezioni() {
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', function() {
            const sectionId = this.closest('.section').id;
            toggleSection(sectionId);
        });
    });
}

// ===== SEZIONE ATTIVITÀ QUOTIDIANE =====

function updateAttivita() {
    const daySelect = document.getElementById('day-select');
    const selectedDay = daySelect.value;
    const attivitaList = document.getElementById('attivita-list');
    
    if (!selectedDay) {
        attivitaList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Seleziona un giorno per visualizzare le attività</p>';
        return;
    }
    
    const attivita = appData.attivita[selectedDay] || [];
    
    if (attivita.length === 0) {
        attivitaList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Nessuna attività per questo giorno</p>';
        return;
    }
    
    attivitaList.innerHTML = attivita.map((att, index) => `
        <div class="attivita-item ${att.done ? 'done' : ''}">
            <input type="checkbox" ${att.done ? 'checked' : ''} 
                   onchange="toggleAttivita('${selectedDay}', ${index})">
            <label>${att.text}</label>
            <button onclick="deleteAttivita('${selectedDay}', ${index})">Elimina</button>
        </div>
    `).join('');
}

function aggiungiAttivita() {
    const daySelect = document.getElementById('day-select');
    const newActivity = document.getElementById('new-activity');
    const selectedDay = daySelect.value;
    
    if (!selectedDay) {
        alert('Seleziona un giorno');
        return;
    }
    
    if (!newActivity.value.trim()) {
        alert('Inserisci un\'attività');
        return;
    }
    
    appData.attivita[selectedDay].push({
        text: newActivity.value,
        done: false
    });
    
    newActivity.value = '';
    salvaDati();
    updateAttivita();
}

function toggleAttivita(day, index) {
    appData.attivita[day][index].done = !appData.attivita[day][index].done;
    salvaDati();
    updateAttivita();
}

function deleteAttivita(day, index) {
    appData.attivita[day].splice(index, 1);
    salvaDati();
    updateAttivita();
}

// ===== SEZIONE PROGRAMMA CUCINA =====

function updateSpesa() {
    const recipeSelects = document.querySelectorAll('.recipe-select');
    
    recipeSelects.forEach(select => {
        const day = select.dataset.day;
        const value = select.value;
        
        if (value) {
            const [recipeId, link] = value.split('|');
            const recipe = ricette[recipeId];
            appData.menu[day] = recipeId;
            
            const linkDiv = document.getElementById(`link-${day}`);
            linkDiv.innerHTML = `<a href="${link}" target="_blank">🔗 Vai alla ricetta: ${recipe.nome}</a>`;
            
            // Aggiungi ingredienti alla spesa
            aggiungiIngredientiSpesa(day, recipe);
        } else {
            appData.menu[day] = '';
            document.getElementById(`link-${day}`).innerHTML = '';
        }
    });
    
    salvaDati();
}

function aggiungiIngredientiSpesa(day, recipe) {
    // Questo potrebbe essere automatizzato di più, ma per ora manteniamo semplice
    // L'utente può aggiungere manualmente gli ingredienti
}

// ===== SEZIONE LISTA DELLA SPESA =====

function aggiungiProdotto() {
    const productName = document.getElementById('new-product');
    const qty = document.getElementById('product-qty');
    const category = document.getElementById('product-category');
    const price = document.getElementById('product-price');
    
    if (!productName.value.trim()) {
        alert('Inserisci un prodotto');
        return;
    }
    
    appData.spesa.push({
        id: Date.now(),
        name: productName.value,
        qty: qty.value || 1,
        category: category.value,
        price: parseFloat(price.value) || 0,
        bought: false
    });
    
    productName.value = '';
    qty.value = '1';
    price.value = '';
    
    salvaDati();
    renderSpesa();
}

function renderSpesa() {
    const tbody = document.getElementById('spesa-body');
    
    if (appData.spesa.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">Nessun prodotto nella lista</td></tr>';
        document.getElementById('total-price').textContent = '0.00';
        return;
    }
    
    let total = 0;
    tbody.innerHTML = appData.spesa.map(item => {
        total += item.price * item.qty;
        return `
            <tr>
                <td>
                    <input type="checkbox" ${item.bought ? 'checked' : ''} 
                           onchange="toggleAcquistato(${item.id})">
                    ${item.name}
                </td>
                <td>${item.qty}</td>
                <td>${item.category}</td>
                <td>€ ${(item.price * item.qty).toFixed(2)}</td>
                <td>
                    <button class="delete-btn" onclick="deleteProdotto(${item.id})">Rimuovi</button>
                </td>
            </tr>
        `;
    }).join('');
    
    document.getElementById('total-price').textContent = total.toFixed(2);
}

function toggleAcquistato(id) {
    const item = appData.spesa.find(p => p.id === id);
    if (item) {
        item.bought = !item.bought;
        salvaDati();
        renderSpesa();
    }
}

function deleteProdotto(id) {
    appData.spesa = appData.spesa.filter(p => p.id !== id);
    salvaDati();
    renderSpesa();
}

function resetSpesa() {
    if (confirm('Sei sicuro di voler eliminare tutta la lista della spesa?')) {
        appData.spesa = [];
        salvaDati();
        renderSpesa();
    }
}

function esportaSpesa() {
    if (appData.spesa.length === 0) {
        alert('La lista della spesa è vuota');
        return;
    }
    
    let csv = 'Prodotto,Quantità,Categoria,Prezzo Unitario,Prezzo Totale,Acquistato\n';
    
    appData.spesa.forEach(item => {
        csv += `"${item.name}",${item.qty},"${item.category}",${item.price.toFixed(2)},${(item.price * item.qty).toFixed(2)},"${item.bought ? 'Sì' : 'No'}"\n`;
    });
    
    // Calcola il totale
    const total = appData.spesa.reduce((sum, item) => sum + (item.price * item.qty), 0);
    csv += `\nTotale,,,,${total.toFixed(2)},\n`;
    csv += `Data di esportazione,${new Date().toLocaleDateString('it-IT')},,,,,`;
    
    // Crea il blob e scarica
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `spesa_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ===== SEZIONE GESTIONE CLIENTI =====

function aggiungiCliente() {
    const nome = document.getElementById('client-nome');
    const cognome = document.getElementById('client-cognome');
    const data = document.getElementById('client-data');
    const orario = document.getElementById('client-orario');
    const telefono = document.getElementById('client-telefono');
    const email = document.getElementById('client-email');
    const note = document.getElementById('client-note');
    
    // Validazione
    if (!nome.value.trim() || !cognome.value.trim() || !data.value || !orario.value || !telefono.value.trim() || !email.value.trim()) {
        alert('Compila tutti i campi obbligatori (marcati con *)');
        return;
    }
    
    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Inserisci un indirizzo email valido');
        return;
    }
    
    // Aggiungi cliente
    appData.clienti.push({
        id: Date.now(),
        nome: nome.value,
        cognome: cognome.value,
        data: data.value,
        orario: orario.value,
        telefono: telefono.value,
        email: email.value,
        note: note.value
    });
    
    salvaDati();
    resetFormCliente();
    renderClienti();
}

function resetFormCliente() {
    document.getElementById('client-nome').value = '';
    document.getElementById('client-cognome').value = '';
    document.getElementById('client-data').value = '';
    document.getElementById('client-orario').value = '';
    document.getElementById('client-telefono').value = '';
    document.getElementById('client-email').value = '';
    document.getElementById('client-note').value = '';
}

function renderClienti() {
    const tbody = document.getElementById('clienti-body');
    const filtroData = document.getElementById('filter-data').value;
    
    let clientiFiltrati = appData.clienti;
    
    // Applica filtro data se presente
    if (filtroData) {
        clientiFiltrati = clientiFiltrati.filter(c => c.data === filtroData);
    }
    
    // Ordina per data e orario
    clientiFiltrati.sort((a, b) => {
        const dataA = new Date(a.data + ' ' + a.orario);
        const dataB = new Date(b.data + ' ' + b.orario);
        return dataA - dataB;
    });
    
    if (clientiFiltrati.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; color: var(--text-secondary);">Nessun cliente trovato</td></tr>';
        return;
    }
    
    tbody.innerHTML = clientiFiltrati.map(cliente => {
        const dataFormattata = new Date(cliente.data).toLocaleDateString('it-IT');
        return `
            <tr>
                <td>${cliente.nome}</td>
                <td>${cliente.cognome}</td>
                <td>${dataFormattata}</td>
                <td>${cliente.orario}</td>
                <td><a href="tel:${cliente.telefono}">${cliente.telefono}</a></td>
                <td><a href="mailto:${cliente.email}">${cliente.email}</a></td>
                <td title="${cliente.note}">${cliente.note.substring(0, 30)}${cliente.note.length > 30 ? '...' : ''}</td>
                <td>
                    <div class="clienti-actions">
                        <button class="btn-edit" onclick="editCliente(${cliente.id})">✏️ Modifica</button>
                        <button class="btn-delete" onclick="deleteCliente(${cliente.id})">🗑️ Elimina</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function deleteCliente(id) {
    if (confirm('Sei sicuro di voler eliminare questo cliente?')) {
        appData.clienti = appData.clienti.filter(c => c.id !== id);
        salvaDati();
        renderClienti();
    }
}

function editCliente(id) {
    const cliente = appData.clienti.find(c => c.id === id);
    if (!cliente) return;
    
    // Popola il form con i dati del cliente
    document.getElementById('client-nome').value = cliente.nome;
    document.getElementById('client-cognome').value = cliente.cognome;
    document.getElementById('client-data').value = cliente.data;
    document.getElementById('client-orario').value = cliente.orario;
    document.getElementById('client-telefono').value = cliente.telefono;
    document.getElementById('client-email').value = cliente.email;
    document.getElementById('client-note').value = cliente.note;
    
    // Cambia il bottone di submit
    const submitBtn = document.querySelector('.btn-submit');
    submitBtn.textContent = 'Aggiorna Cliente';
    submitBtn.onclick = function() { aggiornaCliente(id); };
    
    // Scroll al form
    document.querySelector('.clienti-form').scrollIntoView({ behavior: 'smooth' });
}

function aggiornaCliente(id) {
    const cliente = appData.clienti.find(c => c.id === id);
    if (!cliente) return;
    
    const nome = document.getElementById('client-nome');
    const cognome = document.getElementById('client-cognome');
    const data = document.getElementById('client-data');
    const orario = document.getElementById('client-orario');
    const telefono = document.getElementById('client-telefono');
    const email = document.getElementById('client-email');
    const note = document.getElementById('client-note');
    
    // Validazione
    if (!nome.value.trim() || !cognome.value.trim() || !data.value || !orario.value || !telefono.value.trim() || !email.value.trim()) {
        alert('Compila tutti i campi obbligatori (marcati con *)');
        return;
    }
    
    // Aggiorna cliente
    cliente.nome = nome.value;
    cliente.cognome = cognome.value;
    cliente.data = data.value;
    cliente.orario = orario.value;
    cliente.telefono = telefono.value;
    cliente.email = email.value;
    cliente.note = note.value;
    
    salvaDati();
    resetFormCliente();
    
    // Ripristina il bottone di submit
    const submitBtn = document.querySelector('.btn-submit');
    submitBtn.textContent = 'Aggiungi Cliente';
    submitBtn.onclick = function() { aggiungiCliente(); };
    
    renderClienti();
}

function filtreClienti() {
    renderClienti();
}

function resetFiltri() {
    document.getElementById('filter-data').value = '';
    renderClienti();
}

// Supporto per Enter key nei campi di input
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        if (event.target.id === 'new-activity') {
            aggiungiAttivita();
        } else if (event.target.id === 'new-product') {
            aggiungiProdotto();
        }
    }
});
