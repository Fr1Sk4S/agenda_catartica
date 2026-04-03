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
        lunedi: { colazione: '', pranzo: { primo: '', secondo: '', contorno: '', bevande: '' }, cena: { primo: '', secondo: '', contorno: '', bevande: '' } },
        martedi: { colazione: '', pranzo: { primo: '', secondo: '', contorno: '', bevande: '' }, cena: { primo: '', secondo: '', contorno: '', bevande: '' } },
        mercoledi: { colazione: '', pranzo: { primo: '', secondo: '', contorno: '', bevande: '' }, cena: { primo: '', secondo: '', contorno: '', bevande: '' } },
        giovedi: { colazione: '', pranzo: { primo: '', secondo: '', contorno: '', bevande: '' }, cena: { primo: '', secondo: '', contorno: '', bevande: '' } },
        venerdi: { colazione: '', pranzo: { primo: '', secondo: '', contorno: '', bevande: '' }, cena: { primo: '', secondo: '', contorno: '', bevande: '' } },
        sabato: { colazione: '', pranzo: { primo: '', secondo: '', contorno: '', bevande: '' }, cena: { primo: '', secondo: '', contorno: '', bevande: '' } },
        domenica: { colazione: '', pranzo: { primo: '', secondo: '', contorno: '', bevande: '' }, cena: { primo: '', secondo: '', contorno: '', bevande: '' } }
    },
    spesaManuale: [],
    spesaAutomatica: []
};

// Ricette disponibili (comprese colazioni)
const ricette = {
    // Colazioni
    'latte': { nome: 'Latte', tipo: 'colazione', ingredienti: ['Latte'] },
    'caffe': { nome: 'Caffè', tipo: 'colazione', ingredienti: ['Caffè'] },
    'te': { nome: 'Tè', tipo: 'colazione', ingredienti: ['Tè'] },
    'cereali': { nome: 'Cereali', tipo: 'colazione', ingredienti: ['Cereali'] },
    'biscotti': { nome: 'Biscotti', tipo: 'colazione', ingredienti: ['Biscotti'] },
    'marmellata': { nome: 'Marmellata', tipo: 'colazione', ingredienti: ['Marmellata'] },
    'yogurt': { nome: 'Yogurt', tipo: 'colazione', ingredienti: ['Yogurt'] },
    'succo_arancia': { nome: 'Succo d\'arancia', tipo: 'colazione', ingredienti: ['Succo d\'arancia'] },
    'pane_burro': { nome: 'Pane e burro', tipo: 'colazione', ingredienti: ['Pane', 'Burro'] },
    'cornetti': { nome: 'Cornetti', tipo: 'colazione', ingredienti: ['Cornetti'] },
    // Primi
    'pasta': { nome: 'Pasta al Ragù', tipo: 'primo', ingredienti: ['Pasta', 'Pomodori', 'Carne macinata', 'Cipolla', 'Aglio'] },
    'risotto': { nome: 'Risotto ai Funghi', tipo: 'primo', ingredienti: ['Riso Carnaroli', 'Funghi', 'Cipolla', 'Vino bianco', 'Brodo'] },
    'pizza': { nome: 'Pizza Fatta in Casa', tipo: 'primo', ingredienti: ['Farina', 'Lievito', 'Pomodori', 'Mozzarella', 'Olio'] },
    'lasagna': { nome: 'Lasagna', tipo: 'primo', ingredienti: ['Pasta lasagna', 'Ragù', 'Besciamella', 'Parmigiano', 'Mozzarella'] },
    'minestrone': { nome: 'Minestrone', tipo: 'primo', ingredienti: ['Verdure miste', 'Pasta', 'Fagioli', 'Brodo', 'Olio'] },
    'riso': { nome: 'Riso Gratinato con Verdure', tipo: 'primo', ingredienti: ['Riso', 'Verdure miste', 'Brodo', 'Olio', 'Cipolla'] },
    'gnocchi': { nome: 'Gnocchi di Patate', tipo: 'primo', ingredienti: ['Patate', 'Farina', 'Uova', 'Parmigiano', 'Burro'] },
    'melanzane': { nome: 'Melanzane alla Parmigiana', tipo: 'primo', ingredienti: ['Melanzane', 'Pomodori', 'Mozzarella', 'Parmigiano', 'Olio'] },
    'pasta_salmone': { nome: 'Pasta al Salmone', tipo: 'primo', ingredienti: ['Pasta', 'Salmone', 'Panna', 'Aglio', 'Prezzemolo'] },
    'pasta_vongole': { nome: 'Spaghetti alle Vongole', tipo: 'primo', ingredienti: ['Pasta', 'Vongole', 'Aglio', 'Peperoncino', 'Vino bianco'] },
    'pappardelle': { nome: 'Pappardelle al Cinghiale', tipo: 'primo', ingredienti: ['Pappardelle', 'Cinghiale', 'Pomodori', 'Vino rosso', 'Aglio'] },
    // Secondi
    'pollo': { nome: 'Pollo al Forno', tipo: 'secondo', ingredienti: ['Pollo', 'Olio', 'Sale', 'Pepe', 'Erbe aromatiche'] },
    'pesce': { nome: 'Pesce all\'Acqua Pazza', tipo: 'secondo', ingredienti: ['Pesce', 'Pomodori', 'Aglio', 'Peperoncino', 'Prezzemolo'] },
    'branzino': { nome: 'Branzino al Forno', tipo: 'secondo', ingredienti: ['Branzino', 'Limone', 'Olio', 'Sale', 'Pepe'] },
    'carne': { nome: 'Carne in Umido', tipo: 'secondo', ingredienti: ['Carne', 'Vino rosso', 'Pomodori', 'Verdure', 'Spezie'] },
    'frittata': { nome: 'Frittata', tipo: 'secondo', ingredienti: ['Uova', 'Cipolla', 'Patate', 'Formaggio', 'Sale'] },
    'pollo_curry': { nome: 'Pollo al Curry', tipo: 'secondo', ingredienti: ['Pollo', 'Curry', 'Latte di cocco', 'Cipolla', 'Aglio'] },
    'orata': { nome: 'Orata al Cartoccio', tipo: 'secondo', ingredienti: ['Orata', 'Limone', 'Prezzemolo', 'Olio', 'Sale'] },
    'costata': { nome: 'Costata alla Fiorentina', tipo: 'secondo', ingredienti: ['Costata', 'Sale', 'Pepe', 'Rosmarino', 'Olio'] },
    'zuppa': { nome: 'Zuppa di Pesce', tipo: 'secondo', ingredienti: ['Pesce misto', 'Frutti di mare', 'Pomodori', 'Aglio', 'Vino bianco'] },
    'bistecca': { nome: 'Bistecca alla Griglia', tipo: 'secondo', ingredienti: ['Bistecca', 'Sale', 'Pepe', 'Olio', 'Limone'] },
    'arrosticini': { nome: 'Arrosticini', tipo: 'secondo', ingredienti: ['Carne di agnello', 'Rosmarino', 'Sale', 'Pepe', 'Olio'] },
    // Contorni
    'verdure': { nome: 'Verdure al Forno', tipo: 'contorno', ingredienti: ['Zucchine', 'Melanzane', 'Peperoni', 'Olio', 'Aglio'] },
    'verdure_grigliate': { nome: 'Verdure Grigliate', tipo: 'contorno', ingredienti: ['Zucchine', 'Melanzane', 'Peperoni', 'Olio', 'Erbe aromatiche'] },
    // Bevande
    'acqua': { nome: 'Acqua', tipo: 'bevanda', ingredienti: ['Acqua'] },
    'vino_rosso': { nome: 'Vino Rosso', tipo: 'bevanda', ingredienti: ['Vino Rosso'] },
    'vino_bianco': { nome: 'Vino Bianco', tipo: 'bevanda', ingredienti: ['Vino Bianco'] },
    'birra': { nome: 'Birra', tipo: 'bevanda', ingredienti: ['Birra'] },
    'succo': { nome: 'Succo di Frutta', tipo: 'bevanda', ingredienti: ['Succo di Frutta'] }
};

// Prezzi indicativi per ingredienti
const prezziIngredienti = {
    'pasta': 1.2, 'pomodori': 1.5, 'carne macinata': 5.0, 'cipolla': 0.5, 'aglio': 0.3,
    'pollo': 4.5, 'olio': 2.0, 'sale': 0.2, 'pepe': 0.3, 'erbe aromatiche': 0.5,
    'pesce': 8.0, 'peperoncino': 0.2, 'prezzemolo': 0.3,
    'riso carnaroli': 2.5, 'funghi': 3.0, 'vino bianco': 4.0, 'brodo': 1.0,
    'farina': 0.8, 'lievito': 0.5, 'mozzarella': 2.5,
    'pasta lasagna': 1.5, 'ragù': 4.0, 'besciamella': 1.5, 'parmigiano': 3.0,
    'verdure miste': 2.0, 'fagioli': 1.2,
    'patate': 1.0, 'uova': 0.3, 'burro': 1.2,
    'melanzane': 1.5, 'salmone': 7.0, 'panna': 1.2,
    'vongole': 5.0, 'cinghiale': 9.0, 'vino rosso': 4.0,
    'branzino': 6.0, 'limone': 0.5, 'carne': 6.0, 'spezie': 0.8,
    'curry': 0.5, 'latte di cocco': 2.0,
    'orata': 7.0, 'costata': 12.0, 'rosmarino': 0.3,
    'pesce misto': 8.0, 'frutti di mare': 9.0,
    'bistecca': 10.0, 'agnello': 11.0,
    'zucchine': 1.0, 'peperoni': 1.2,
    'acqua': 0.5, 'vino rosso bottiglia': 5.0, 'vino bianco bottiglia': 5.0, 'birra': 1.5, 'succo di frutta': 1.8,
    'latte': 1.2, 'caffè': 2.0, 'tè': 1.0, 'cereali': 2.5, 'biscotti': 1.8,
    'marmellata': 2.0, 'yogurt': 1.2, 'succo d\'arancia': 1.5, 'pane': 1.0, 'cornetti': 2.5
};

let currentMenuDay = 'lunedi';

// ==================== INIZIALIZZAZIONE ====================
window.addEventListener('DOMContentLoaded', function() {
    caricaDati();
    if (!localStorage.getItem('agendaCatartica')) {
        salvaDati();
    }
    updateAttivita();
    renderSpesa();
	attachSpesaEvents();
    inizializzaSezioni();
    initModalitàSezioni();
    initMenuTabs();
    aggiungiPulsantiBackup();
});

function caricaDati() {
    const datiSalvati = localStorage.getItem('agendaCatartica');
    if (datiSalvati) {
        const parsed = JSON.parse(datiSalvati);
        Object.assign(appData, parsed);
        if (!appData.spesaManuale) appData.spesaManuale = [];
        if (!appData.spesaAutomatica) appData.spesaAutomatica = [];
        for (let day in appData.menu) {
            if (!appData.menu[day].pranzo) appData.menu[day].pranzo = { primo: '', secondo: '', contorno: '', bevande: '' };
            if (!appData.menu[day].cena) appData.menu[day].cena = { primo: '', secondo: '', contorno: '', bevande: '' };
            if (appData.menu[day].colazione === undefined) appData.menu[day].colazione = '';
        }
    }
}

function salvaDati() {
    localStorage.setItem('agendaCatartica', JSON.stringify(appData));
}

function inizializzaSezioni() {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach((section, index) => {
        if (index === 0) section.classList.add('active');
    });
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.section-content');
    const btn = section.querySelector('.toggle-btn');
    content.classList.toggle('active');
    btn.classList.toggle('collapsed');
}

function initModalitàSezioni() {
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', function(e) {
            if (e.target.classList && e.target.classList.contains('toggle-btn')) return;
            const sectionId = this.closest('.section').id;
            toggleSection(sectionId);
        });
    });
}

// ==================== ATTIVITÀ QUOTIDIANE ====================
function updateAttivita() {
    const daySelect = document.getElementById('day-select');
    const selectedDay = daySelect.value;
    const attivitaList = document.getElementById('attivita-list');
    if (!selectedDay) {
        attivitaList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Seleziona un giorno</p>';
        return;
    }
    const attivita = appData.attivita[selectedDay] || [];
    if (attivita.length === 0) {
        attivitaList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Nessuna attività</p>';
        return;
    }
    attivitaList.innerHTML = attivita.map((att, index) => `
        <div class="attivita-item ${att.done ? 'done' : ''}">
            <input type="checkbox" ${att.done ? 'checked' : ''} onchange="toggleAttivita('${selectedDay}', ${index})">
            <label>${escapeHtml(att.text)}</label>
            <button onclick="deleteAttivita('${selectedDay}', ${index})">Elimina</button>
        </div>
    `).join('');
}

function aggiungiAttivita() {
    const daySelect = document.getElementById('day-select');
    const newActivity = document.getElementById('new-activity');
    const selectedDay = daySelect.value;
    if (!selectedDay) { alert('Seleziona un giorno'); return; }
    if (!newActivity.value.trim()) { alert('Inserisci attività'); return; }
    appData.attivita[selectedDay].push({ text: newActivity.value, done: false });
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

// ==================== MENU SETTIMANALE (LAYOUT A SCHEDE, SENZA PULSANTI COLLASSO) ====================
function renderMenuForDay(day) {
    const container = document.getElementById('menu-day-container');
    if (!container) return;
    const menuDay = appData.menu[day];
    if (!menuDay) return;

    const meals = [
        { key: 'colazione', label: 'Colazione', icon: '☕', hasCourses: false },
        { key: 'pranzo', label: 'Pranzo', icon: '🍝', hasCourses: true },
        { key: 'cena', label: 'Cena', icon: '🍷', hasCourses: true }
    ];

    let html = `<div class="menu-card" id="menu-card-${day}">`;
    meals.forEach(meal => {
        const mealData = menuDay[meal.key];
        html += `
            <div class="meal-group">
                <div class="meal-header">
                    <span class="meal-icon">${meal.icon}</span>
                    <h3>${meal.label}</h3>
                </div>
                <div class="meal-content" id="meal-content-${day}-${meal.key}">
        `;
        if (!meal.hasCourses) {
            const currentVal = mealData || '';
            html += `
                <select class="recipe-select" data-day="${day}" data-meal="${meal.key}" onchange="updateSpesa()">
                    <option value="">-- Scegli colazione --</option>
                    ${generateOptionsForColazione(currentVal)}
                </select>
            `;
        } else {
            const courses = ['primo', 'secondo', 'contorno', 'bevande'];
            html += `<div class="course-row">`;
            courses.forEach(course => {
                const currentVal = mealData[course] || '';
                html += `
                    <div class="course-selector">
                        <label>${course.charAt(0).toUpperCase() + course.slice(1)}</label>
                        <select class="recipe-select" data-day="${day}" data-meal="${meal.key}" data-course="${course}" onchange="updateSpesa()">
                            <option value="">-- Scegli ${course} --</option>
                            ${populateCourseOptions(course, currentVal)}
                        </select>
                    </div>
                `;
            });
            html += `</div>`;
        }
        html += `</div></div>`;
    });
    html += `</div>`;
    container.innerHTML = html;
}

function generateOptionsForColazione(currentVal) {
    const colazioni = [
        { id: 'latte', nome: 'Latte' }, { id: 'caffe', nome: 'Caffè' }, { id: 'te', nome: 'Tè' },
        { id: 'cereali', nome: 'Cereali' }, { id: 'biscotti', nome: 'Biscotti' }, { id: 'marmellata', nome: 'Marmellata' },
        { id: 'yogurt', nome: 'Yogurt' }, { id: 'succo_arancia', nome: 'Succo d\'arancia' },
        { id: 'pane_burro', nome: 'Pane e burro' }, { id: 'cornetti', nome: 'Cornetti' }
    ];
    return colazioni.map(c => `<option value="${c.id}" ${currentVal === c.id ? 'selected' : ''}>${c.nome}</option>`).join('');
}

function populateCourseOptions(course, currentVal) {
    let items = [];
    if (course === 'primo') {
        items = ['pasta', 'risotto', 'pizza', 'lasagna', 'minestrone', 'riso', 'gnocchi', 'melanzane', 'pasta_salmone', 'pasta_vongole', 'pappardelle'];
    } else if (course === 'secondo') {
        items = ['pollo', 'pesce', 'branzino', 'carne', 'frittata', 'pollo_curry', 'orata', 'costata', 'zuppa', 'bistecca', 'arrosticini'];
    } else if (course === 'contorno') {
        items = ['verdure', 'verdure_grigliate'];
    } else if (course === 'bevande') {
        items = ['acqua', 'vino_rosso', 'vino_bianco', 'birra', 'succo'];
    }
    return items.map(item => {
        const ricetta = ricette[item];
        if (!ricetta) return '';
        const selected = (currentVal === item) ? 'selected' : '';
        return `<option value="${item}" ${selected}>${ricetta.nome}</option>`;
    }).join('');
}

function initMenuTabs() {
    const tabs = document.querySelectorAll('.menu-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const day = tab.dataset.day;
            if (!day) return;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentMenuDay = day;
            renderMenuForDay(day);
        });
    });
    const activeTab = document.querySelector('.menu-tab.active');
    if (activeTab && activeTab.dataset.day) {
        renderMenuForDay(activeTab.dataset.day);
        currentMenuDay = activeTab.dataset.day;
    } else {
        renderMenuForDay('lunedi');
        const firstTab = document.querySelector('.menu-tab[data-day="lunedi"]');
        if (firstTab) firstTab.classList.add('active');
    }
}

window.updateSpesa = function() {
    const recipeSelects = document.querySelectorAll('.recipe-select');
    recipeSelects.forEach(select => {
        const day = select.dataset.day;
        const meal = select.dataset.meal;
        const course = select.dataset.course;
        const value = select.value;
        if (!day || !meal) return;
        if (course) {
            if (!appData.menu[day][meal]) appData.menu[day][meal] = {};
            appData.menu[day][meal][course] = value;
        } else {
            appData.menu[day][meal] = value;
        }
    });
    salvaDati();
    aggiornaSpesaAutomatica();
    renderSpesa();
};

function aggiornaSpesaAutomatica() {
    const contatoreIngredienti = {};
    Object.entries(appData.menu).forEach(([day, meals]) => {
        Object.entries(meals).forEach(([mealKey, mealValue]) => {
            if (typeof mealValue === 'string' && mealValue) {
                const ricetta = ricette[mealValue];
                if (ricetta && ricetta.ingredienti) {
                    ricetta.ingredienti.forEach(ing => contatoreIngredienti[ing.toLowerCase()] = (contatoreIngredienti[ing.toLowerCase()] || 0) + 1);
                }
            } else if (typeof mealValue === 'object') {
                Object.values(mealValue).forEach(recipeId => {
                    if (recipeId) {
                        const ricetta = ricette[recipeId];
                        if (ricetta && ricetta.ingredienti) {
                            ricetta.ingredienti.forEach(ing => contatoreIngredienti[ing.toLowerCase()] = (contatoreIngredienti[ing.toLowerCase()] || 0) + 1);
                        }
                    }
                });
            }
        });
    });
    appData.spesaAutomatica = Object.entries(contatoreIngredienti).map(([nome, qta]) => ({
        id: `auto-${nome}`,
        name: nome.charAt(0).toUpperCase() + nome.slice(1),
        qty: qta,
        category: 'Ingrediente',
        price: prezziIngredienti[nome] || 1.0,
        bought: false,
        source: 'auto'
    }));
}

// ==================== LISTA DELLA SPESA ====================
function aggiungiProdotto() {
    const productName = document.getElementById('new-product');
    const qty = document.getElementById('product-qty');
    const category = document.getElementById('product-category');
    const price = document.getElementById('product-price');
    if (!productName.value.trim()) { alert('Inserisci un prodotto'); return; }
    appData.spesaManuale.push({
        id: Date.now(),
        name: productName.value,
        qty: parseFloat(qty.value) || 1,
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
    const allItems = [...appData.spesaManuale, ...appData.spesaAutomatica];
    if (allItems.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Nessun prodotto</td></tr>';
        document.getElementById('total-price').textContent = '0.00';
        return;
    }
    let total = 0;
    tbody.innerHTML = allItems.map(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        return `
            <tr>
                <td><input type="checkbox" data-id="${item.id}" ${item.bought ? 'checked' : ''}> ${escapeHtml(item.name)}</td>
                <td>${item.qty}</td>
                <td>${item.category}</td>
                <td>€ ${itemTotal.toFixed(2)}</td>
                <td><button class="delete-btn" data-id="${item.id}">Rimuovi</button></td>
            </tr>
        `;
    }).join('');
    document.getElementById('total-price').textContent = total.toFixed(2);
}

function attachSpesaEvents() {
    const tbody = document.getElementById('spesa-body');
    if (!tbody) return;
    
    // Gestione checkbox (acquisto)
    tbody.addEventListener('change', function(e) {
        if (e.target && e.target.type === 'checkbox') {
            const id = e.target.getAttribute('data-id');
            if (id) toggleAcquistato(id);
        }
    });
    
    // Gestione pulsanti rimuovi
    tbody.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('delete-btn')) {
            const id = e.target.getAttribute('data-id');
            if (id) deleteProdotto(id);
        }
    });
}

// Aggiungere event listener per checkbox e pulsanti
function attachSpesaEvents() {
    const tbody = document.getElementById('spesa-body');
    if (!tbody) return;
    tbody.addEventListener('change', function(e) {
        if (e.target && e.target.type === 'checkbox') {
            const id = e.target.getAttribute('data-id');
            if (id) toggleAcquistato(id);
        }
    });
    tbody.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('delete-btn')) {
            const id = e.target.getAttribute('data-id');
            if (id) deleteProdotto(id);
        }
    });
}

// Chiamare attachSpesaEvents dopo ogni renderSpesa e all'inizializzazione
// Modificare anche toggleAcquistato e deleteProdotto per usare l'id direttamente (senza JSON.stringify)
function toggleAcquistato(id) {
    const idStr = String(id);
    let item = appData.spesaManuale.find(p => String(p.id) === idStr);
    if (!item) item = appData.spesaAutomatica.find(p => String(p.id) === idStr);
    if (item) {
        item.bought = !item.bought;
        salvaDati();
        renderSpesa();
    }
}

function deleteProdotto(id) {
    const idStr = String(id);
    appData.spesaManuale = appData.spesaManuale.filter(p => String(p.id) !== idStr);
    appData.spesaAutomatica = appData.spesaAutomatica.filter(p => String(p.id) !== idStr);
    salvaDati();
    renderSpesa();
}

function esportaSpesa() {
    const allItems = [...appData.spesaManuale, ...appData.spesaAutomatica];
    if (allItems.length === 0) { alert('Lista vuota'); return; }
    let csv = 'Prodotto,Quantità,Categoria,Prezzo Unitario,Prezzo Totale,Acquistato\n';
    allItems.forEach(item => {
        const totale = item.price * item.qty;
        csv += `"${item.name}",${item.qty},"${item.category}",${item.price.toFixed(2)},${totale.toFixed(2)},"${item.bought ? 'Sì' : 'No'}"\n`;
    });
    const total = allItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    csv += `\nTotale,,,,${total.toFixed(2)},\n`;
    csv += `Data,${new Date().toLocaleDateString('it-IT')},,,,,\n`;
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
// ==================== RESET DATI SPESA ====================
function resetSpesa() {
    if (confirm('⚠️ ATTENZIONE: cancellerai la lista della spesa e il programma cucina settimanale. Continuare?')) {
        // Resetta il menu settimanale
        const giorni = ['lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato', 'domenica'];
        giorni.forEach(day => {
            appData.menu[day] = {
                colazione: '',
                pranzo: { primo: '', secondo: '', contorno: '', bevande: '' },
                cena: { primo: '', secondo: '', contorno: '', bevande: '' }
            };
        });
        // Resetta la lista della spesa
        appData.spesaManuale = [];
        appData.spesaAutomatica = [];
        salvaDati();
        renderSpesa();
        if (currentMenuDay) renderMenuForDay(currentMenuDay);
        alert('Programma cucina e lista della spesa resettati.');
    }
}
// ==================== BACKUP DATI ====================
function esportaBackup() {
    const dati = {
        attivita: appData.attivita,
        menu: appData.menu,
        spesaManuale: appData.spesaManuale,
        prezziIngredienti: prezziIngredienti,
        dataEsportazione: new Date().toISOString()
    };
    const jsonStr = JSON.stringify(dati, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `agenda_catartica_backup_${new Date().toISOString().split('T')[0]}.json`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Backup esportato con successo!');
}

function importaBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const datiImportati = JSON.parse(e.target.result);
                if (datiImportati.attivita && datiImportati.menu) {
                    Object.assign(appData.attivita, datiImportati.attivita);
                    Object.assign(appData.menu, datiImportati.menu);
                    if (datiImportati.spesaManuale) appData.spesaManuale = datiImportati.spesaManuale;
                    if (datiImportati.prezziIngredienti) {
                        Object.assign(prezziIngredienti, datiImportati.prezziIngredienti);
                    }
                    salvaDati();
                    aggiornaSpesaAutomatica();
                    renderSpesa();
                    updateAttivita();
                    if (currentMenuDay) renderMenuForDay(currentMenuDay);
                    alert('Backup importato con successo!');
                } else {
                    alert('File non valido');
                }
            } catch (err) {
                alert('Errore durante l\'importazione');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// ==================== AGGIORNAMENTO PREZZI DA ISTAT ====================
async function aggiornaPrezziDaISTAT() {
    try {
        const btnAggiorna = document.querySelector('.update-prices-btn');
        if (btnAggiorna) {
            btnAggiorna.textContent = '🔄 Aggiornamento in corso...';
            btnAggiorna.disabled = true;
        }
        const response = await fetch('https://api.db.nomics.world/v22/series/ISTAT/168_760_DF_DCSP_IPCA1B2015_1/M.IT.41.4.011?format=json&observations=1');
        if (!response.ok) throw new Error('Impossibile contattare il servizio ISTAT');
        const data = await response.json();
        const series = data.series;
        if (!series || !series.observations) throw new Error('Dati non disponibili');
        let lastIndex = null;
        for (let i = series.observations.length - 1; i >= 0; i--) {
            if (series.observations[i] && series.observations[i].value !== null) {
                lastIndex = series.observations[i].value;
                break;
            }
        }
        if (lastIndex === null) throw new Error('Nessun dato valido trovato');
        const indiceCorrente = parseFloat(lastIndex);
        const indiceBase = 100;
        const fattoreCorrezione = indiceCorrente / indiceBase;
        let prezziAggiornati = 0;
        for (const [ingrediente, prezzoBase] of Object.entries(prezziIngredienti)) {
            const nuovoPrezzo = prezzoBase * fattoreCorrezione;
            prezziIngredienti[ingrediente] = parseFloat(nuovoPrezzo.toFixed(2));
            prezziAggiornati++;
        }
        salvaDati();
        aggiornaSpesaAutomatica();
        renderSpesa();
        alert(`Prezzi aggiornati!\nIndice ISTAT: ${indiceCorrente.toFixed(2)} (base 2015=100)\nFattore: ${fattoreCorrezione.toFixed(3)}`);
    } catch (error) {
        console.error('Errore aggiornamento prezzi:', error);
        alert(`Impossibile aggiornare i prezzi: ${error.message}`);
    } finally {
        const btnAggiorna = document.querySelector('.update-prices-btn');
        if (btnAggiorna) {
            btnAggiorna.textContent = '🔄 Aggiorna prezzi ISTAT';
            btnAggiorna.disabled = false;
        }
    }
}

function aggiungiPulsantiBackup() {
    const spesaSummary = document.querySelector('.spesa-summary');
    if (spesaSummary && !document.querySelector('.backup-buttons')) {
        const backupDiv = document.createElement('div');
        backupDiv.className = 'backup-buttons';
        backupDiv.innerHTML = `
            <button class="backup-btn" onclick="esportaBackup()">💾 Esporta Backup</button>
            <button class="restore-btn" onclick="importaBackup()">📂 Importa Backup</button>
            <button class="update-prices-btn" onclick="aggiornaPrezziDaISTAT()">🔄 Aggiorna prezzi ISTAT</button>
        `;
        spesaSummary.appendChild(backupDiv);
    }
}

// Helper
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Enter key support
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        if (event.target.id === 'new-activity') aggiungiAttivita();
        else if (event.target.id === 'new-product') aggiungiProdotto();
    }
});