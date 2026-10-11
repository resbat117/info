window.hubsData = window.hubsData || {};
window.hubsSearchIndex = window.hubsSearchIndex || [];

// HUB 1: Я ТІЛЬКИ ПРИБУВ У ЧАСТИНУ (З грою, завантаженням Word та тестом)
window.hubsData['hub1'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🚪 ХАБ 1. Я тільки прибув (або прикомандирований) у частину</h1>
        <p class="text-tactical-muted text-sm">Інтерактивний покроковий маршутний лист адаптації новоприбулого військовослужбовця. Усі необхідні файли анкет та психологічний тест розміщено безпосередньо в картці.</p>
    </div>

    <!-- Mode Switcher -->
    <div class="flex space-x-2">
        <button id="btn-mode-soldier" onclick="toggleRoleMode('soldier')" class="flex-1 py-3 px-4 rounded font-bold text-sm bg-tactical-accent text-white border border-tactical-border transition">
            👤 Я — Новоприбулий військовослужбовець
        </button>
        <button id="btn-mode-commander" onclick="toggleRoleMode('commander')" class="flex-1 py-3 px-4 rounded font-bold text-sm bg-tactical-card text-tactical-muted border border-tactical-border hover:text-white transition">
            🪖 Я — Командир / Особа, яка приймає
        </button>
    </div>

    <!-- Progress Tracker Bar -->
    <div class="bg-tactical-card border border-tactical-border p-4 rounded-lg space-y-2">
        <div class="flex justify-between text-xs font-bold">
            <span id="progress-text" class="text-tactical-gold">Пройдено етапів оформлення: 0 з 6 (0%)</span>
            <span class="text-tactical-muted">Збереження в пам'яті телефону</span>
        </div>
        <div class="w-full bg-tactical-bg h-3 rounded-full overflow-hidden border border-tactical-border">
            <div id="progress-bar-fill" class="bg-tactical-gold h-full w-0 transition-all duration-300"></div>
        </div>
    </div>

    <!-- SOLDIER MODE CONTENT -->
    <div id="soldier-mode" class="space-y-4">
        
        <!-- Downloads & Test Box -->
        <div class="bg-tactical-card border-2 border-tactical-gold p-5 rounded-lg space-y-4">
            <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
                <span>📎</span><span>ФАЙЛИ ДЛЯ ЗАВАНТАЖЕННЯ ТА ПСИХОЛОГІЧНИЙ ТЕСТ:</span>
            </h3>
            <p class="text-xs text-tactical-muted">Завантажте та заповніть ці анкети для передачі в Штаб частини та Кабінет ППП:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3IjFQJDaUCzULP5wQAyYI0B90mLfOf9oZGSkS8Y7y_RsQUA/viewform" target="_blank" class="p-3 bg-tactical-accent hover:bg-opacity-80 rounded text-white text-xs font-bold flex items-center justify-between border border-tactical-border transition">
                    <span>🧠 Психологічний тест «Адаптивність-200»</span>
                    <span>Пройти ➔</span>
                </a>
                <a href="https://raw.githubusercontent.com/resbat117/resbat117info/main/3.%20NEW_%D0%90%D0%9D%D0%9A%D0%95%D0%A2%D0%90%20%D0%BF%D1%80%D0%B8%D0%B1%D1%83%D0%BB%D0%B8%D1%85%202026.docx" target="_blank" class="p-3 bg-tactical-card hover:bg-tactical-border rounded text-tactical-gold text-xs font-bold flex items-center justify-between border border-tactical-border transition">
                    <span>📄 1. Анкета прибулого (NEW 2026.docx)</span>
                    <span>Скачати 📥</span>
                </a>
                <a href="https://raw.githubusercontent.com/resbat117/resbat117info/main/4.%20%D0%9A%D0%B0%D1%80%D1%82%D0%BA%D0%B0%20%D1%81%D0%BE%D1%86%20%D0%B4%D0%B5%D0%BC%D0%BE%20%D0%B2%D0%B8%D0%B2%D1%87%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%B2%D1%81.docx" target="_blank" class="p-3 bg-tactical-card hover:bg-tactical-border rounded text-tactical-gold text-xs font-bold flex items-center justify-between border border-tactical-border transition">
                    <span>📄 2. Картка соц-демо вивчення в/с (.docx)</span>
                    <span>Скачати 📥</span>
                </a>
            </div>
        </div>

        <!-- Interactive Checklist Steps -->
        <div class="space-y-3">
            
            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step1" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 1: Документи та ідентифікація при вбутті</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <ul class="text-sm space-y-2 mt-3 text-tactical-muted list-disc pl-5">
                    <li>Паспорт громадянина України + ІПН (оригінал та 3 копії).</li>
                    <li>Військово-обліковий документ (Військовий квиток / Тимчасове посвідчення).</li>
                    <li>Приписи, розпорядження чи витяг з наказу про направлення у в/ч.</li>
                    <li>Посвідчення УБД (за наявності), посвідчення водія, медичні виписки.</li>
                </ul>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step2" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 2: Електронні реєстри, банківські реквізити (IBAN) та зв'язок</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <ul class="text-sm space-y-2 mt-3 text-tactical-muted list-disc pl-5">
                    <li>Встановлення застосунку «Армія+» на смартфон та авторизація через BankID.</li>
                    <li>Отримання довідки про картковий рахунок у форматі IBAN (для нарахування ГЗ).</li>
                    <li>Надання контакти 2 близьких осіб для зв'язку у разі надзвичайної ситуації.</li>
                </ul>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step3" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 3: Анкети, опитування та тест «Адаптивність-200»</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <ul class="text-sm space-y-2 mt-3 text-tactical-muted list-disc pl-5">
                    <li>Заповнення «Анкети прибулого 2026» та «Картки соц-демо вивчення».</li>
                    <li>Проходження онлайн-тесту «Адаптивність-200» за посиланням вгорі.</li>
                </ul>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step4" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 4: Обхід служб частини (Штаб, Медична служба, ППП, Фінанси)</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <ul class="text-sm space-y-2 mt-3 text-tactical-muted list-disc pl-5">
                    <li><strong>Медичний пункт:</strong> Огляд черговим медиком, фіксація скарг, флюорографія, група крові.</li>
                    <li><strong>Кабінет ППП:</strong> Первинна бесіда з психологом, виявлення проблем у сім'ї чи здоров'ї.</li>
                    <li><strong>Фінансова служба:</strong> Передача реквізитів IBAN та копій документів для зарахування на виплати.</li>
                </ul>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step5" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 5: Видання наказів у Штабі частині</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <ul class="text-sm space-y-2 mt-3 text-tactical-muted list-disc pl-5">
                    <li>Видання наказу по стройовій частині про зарахування до списків особового складу.</li>
                    <li>Видання наказу про призначення на відповідну військову посаду.</li>
                </ul>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step6" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 6: Отримання майна (МТЗ), проходження інструктажів та побут</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <ul class="text-sm space-y-2 mt-3 text-tactical-muted list-disc pl-5">
                    <li>Отримання речового майна, обмундирування, зброї та закріплення боєприпасів.</li>
                    <li>Проходження інструктажів: техніка безпеки, охорона праці, пожежна безпека, протидія корупції.</li>
                    <li>Закріплення за підрозділом, поселення в казарму/бліндаж та ознайомлення з командиром.</li>
                </ul>
            </details>

        </div>
    </div>

    <!-- COMMANDER MODE CONTENT -->
    <div id="commander-mode" class="hidden space-y-4">
        <div class="bg-tactical-card border border-tactical-border p-5 rounded-lg space-y-3">
            <h3 class="font-bold text-tactical-gold text-base">🪖 ЧЕК-ЛИСТ КОМАНДИРА ПРИ ПРИЙОМІ В/С:</h3>
            <ul class="text-sm space-y-2 text-tactical-muted list-disc pl-5">
                <li>Перевірити наявність припису, паспорта, ІПН, військово-облікового документа та довідок.</li>
                <li>Перевірити наявність атестатів: РАО, речовий, прод, грошовий атестат.</li>
                <li>Направити новоприбулого в Кабінет ППП для проходження тесту «Адаптивність-200» та анкетування.</li>
                <li>Провести обов'язкові інструктажі з ТБ, охорони праці та пожежної безпеки під особистий підпис.</li>
                <li>Заповнити характеристику та розпис у Журналі індивідуальних бесід підрозділу.</li>
            </ul>
        </div>
    </div>
</div>
`;

// Register Search Index
window.hubsSearchIndex.push({ hubId: 'hub1', hubTitle: '1. Я тільки прибув у частину', text: 'Адаптивність 200 анкета прибулого картка соц демо обхід служб штаб медпункт ППП', snippet: 'Маршрутний лист, анкети Word, тест Адаптивність-200.' });
