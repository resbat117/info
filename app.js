// Function to switch tabs
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active-tab'));
    
    if (tabId === 'main') {
        document.getElementById('content-main').classList.remove('hidden');
    } else {
        const dynamicContent = document.getElementById('dynamic-content');
        if (window.hubsData && window.hubsData[tabId]) {
            dynamicContent.innerHTML = window.hubsData[tabId];
            dynamicContent.classList.remove('hidden');
            initCheckboxes(); // initialize game checkboxes if Hub 1
        }
    }
    
    const navBtn = document.getElementById('nav-' + tabId);
    if (navBtn) navBtn.classList.add('active-tab');

    // Hide mobile menu on click
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.add('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Interactive Game Progress Tracker for Hub 1
function initCheckboxes() {
    const checkboxes = document.querySelectorAll('.game-task');
    if (checkboxes.length === 0) return;

    checkboxes.forEach(box => {
        const saved = localStorage.getItem(box.id);
        if (saved === 'true') {
            box.checked = true;
            box.parentElement.classList.add('line-through', 'opacity-60');
        }

        box.addEventListener('change', (e) => {
            localStorage.setItem(e.target.id, e.target.checked);
            if (e.target.checked) {
                e.target.parentElement.classList.add('line-through', 'opacity-60');
            } else {
                e.target.parentElement.classList.remove('line-through', 'opacity-60');
            }
            updateProgressBar();
        });
    });

    updateProgressBar();
}

function updateProgressBar() {
    const total = document.querySelectorAll('.game-task').length;
    const checked = document.querySelectorAll('.game-task:checked').length;
    const bar = document.getElementById('progress-bar-fill');
    const text = document.getElementById('progress-text');
    
    if (bar && text && total > 0) {
        const percent = Math.round((checked / total) * 100);
        bar.style.width = percent + '%';
        text.innerText = `Пройдено етапів оформлення: ${checked} з ${total} (${percent}%)`;
    }
}

// Toggle Mode for Hub 1 (Solider vs Commander)
function toggleRoleMode(mode) {
    const soldierBlock = document.getElementById('soldier-mode');
    const commanderBlock = document.getElementById('commander-mode');
    const btnSoldier = document.getElementById('btn-mode-soldier');
    const btnCommander = document.getElementById('btn-mode-commander');

    if (mode === 'soldier') {
        soldierBlock.classList.remove('hidden');
        commanderBlock.classList.add('hidden');
        btnSoldier.classList.add('bg-tactical-accent', 'text-white');
        btnSoldier.classList.remove('bg-tactical-card');
        btnCommander.classList.remove('bg-tactical-accent', 'text-white');
        btnCommander.classList.add('bg-tactical-card');
    } else {
        soldierBlock.classList.add('hidden');
        commanderBlock.classList.remove('hidden');
        btnCommander.classList.add('bg-tactical-accent', 'text-white');
        btnCommander.classList.remove('bg-tactical-card');
        btnSoldier.classList.remove('bg-tactical-accent', 'text-white');
        btnSoldier.classList.add('bg-tactical-card');
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('hidden');
        });
    }

    // Search input listener
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const resultsDiv = document.getElementById('search-results');
            const searchList = document.getElementById('search-list');

            if (query.length < 2) {
                resultsDiv.classList.add('hidden');
                return;
            }

            searchList.innerHTML = '';
            let count = 0;

            if (window.hubsSearchIndex) {
                window.hubsSearchIndex.forEach(item => {
                    if (item.text.toLowerCase().includes(query)) {
                        count++;
                        const card = document.createElement('div');
                        card.className = 'p-3 bg-tactical-card border border-tactical-border rounded cursor-pointer hover:border-tactical-gold';
                        card.innerHTML = `<h4 class="font-bold text-tactical-gold">${item.hubTitle}</h4><p class="text-xs text-tactical-muted mt-1">${item.snippet}</p>`;
                        card.onclick = () => {
                            switchTab(item.hubId);
                            resultsDiv.classList.add('hidden');
                            searchInput.value = '';
                        };
                        searchList.appendChild(card);
                    }
                });
            }

            if (count > 0) {
                resultsDiv.classList.remove('hidden');
            } else {
                searchList.innerHTML = '<p class="text-sm text-tactical-muted">Нічого не знайдено за вашим запитом.</p>';
                resultsDiv.classList.remove('hidden');
            }
        });
    }
});
