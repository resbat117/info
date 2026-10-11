window.hubsData = window.hubsData || {};
window.hubsSearchIndex = window.hubsSearchIndex || [];

// ==========================================
// HUB 1: Я ТІЛЬКИ ПРИБУВ У ЧАСТИНУ
// ==========================================
window.hubsData['hub1'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🚪 ХАБ 1. Я тільки прибув (або прикомандирований) у частину</h1>
        <p class="text-tactical-muted text-sm">Інтерактивний покроковий маршрутний лист адаптації новоприбулого військовослужбовця. Усі необхідні файли анкет та психологічний тест розміщено безпосередньо в картці.</p>
    </div>

    <div class="flex space-x-2">
        <button id="btn-mode-soldier" onclick="toggleRoleMode('soldier')" class="flex-1 py-3 px-4 rounded font-bold text-sm bg-tactical-accent text-white border border-tactical-border transition">
            👤 Я — Новоприбулий військовослужбовець
        </button>
        <button id="btn-mode-commander" onclick="toggleRoleMode('commander')" class="flex-1 py-3 px-4 rounded font-bold text-sm bg-tactical-card text-tactical-muted border border-tactical-border hover:text-white transition">
            🪖 Я — Командир / Особа, яка приймає
        </button>
    </div>

    <div class="bg-tactical-card border border-tactical-border p-4 rounded-lg space-y-2">
        <div class="flex justify-between text-xs font-bold">
            <span id="progress-text" class="text-tactical-gold">Пройдено етапів оформлення: 0 з 6 (0%)</span>
            <span class="text-tactical-muted">Збереження в пам'яті телефону</span>
        </div>
        <div class="w-full bg-tactical-bg h-3 rounded-full overflow-hidden border border-tactical-border">
            <div id="progress-bar-fill" class="bg-tactical-gold h-full w-0 transition-all duration-300"></div>
        </div>
    </div>

    <div id="soldier-mode" class="space-y-4">
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
                    <li>Надання контактів 2 близьких осіб для зв'язку у разі надзвичайної ситуації.</li>
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
                        <span>Етап 5: Видання наказів у Штабі частини</span>
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

// ==========================================
// HUB 2: Я ЗАХВОРІВ / ПОРАНЕННЯ / ВЛК
// ==========================================
window.hubsData['hub2'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🏥 ХАБ 2. Я захворів / Поранення / Потрібно на ВЛК</h1>
        <p class="text-tactical-muted text-sm">Алгоритми для захисту здоров'я та прав: від дій при травмуванні під час звільнення, хворобі у відпустці, бойовому пораненні до ВЛК, ОФС та безкоштовного протезування.</p>
    </div>

    <div class="space-y-3">
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚨 ШЛЯХ 1. Травма при звільненні / Зупинення виключення з в/ч</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p><strong>ЗАЛІЗНЕ ПРАВИЛО:</strong> Доки тебе офіційно НЕ виключено зі списків особового складу військової частини, ти є ДІЙСНИМ військовослужбовцем. Виключення зі списків під час стаціонарного лікування є прямою відмовою у реалізації твоїх прав.</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Збереження 100% грошового забезпечення на весь період лікування.</li>
                    <li>Повідомлення в/ч із госпіталю: Лікуючий лікар надсилає сповіщення. Командир в/ч зобов'язаний видати наказ про призупинення виключення.</li>
                    <li>Обов'язковий токсикологічний аналіз (освідування) для підтвердження тверезості (0.0 проміле).</li>
                </ul>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🏖️ ШЛЯХ 2. Захворів під час відпустки або відрядження</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p>1. Негайно звернися до найближчої державної лікарні або ТЦК та СП за місцем перебування.</p>
                <p>2. Повідом командира підрозділу по телефону або надішли фото довідки/виписки в месенджер.</p>
                <p>3. Отримай у лікарні виписку із медичної карти та направлення на продовження відпустки за станом здоров'я через ТЦК.</p>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧠 ШЛЯХ 3. «Я не можу спати» та «У мене хронічний біль»</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p>Безсоння, ПТСР, грижі, невралгія — це не «слабкість», це фізіологічні розлади. Подай рапорт на начмеда через «Армія+» для отримання направлення на обстеження до військово-неврологічного відділення госпіталю.</p>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🩺 ШЛЯХ 4. Захворів під час проходження служби в частині</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p>1. Звернися до чергового медика частини (Форма 3).</p>
                <p>2. За потреби медик видає звільнення від виконання службових обов'язків на 3–6 днів або направляє до госпіталю.</p>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚑 ШЛЯХ 5. Отримав поранення / травму (Бойове vs Травма)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p><strong>Бойове поранення (Контузія, поранення на позиціях):</strong> Видається Довідка про обставини травми (Додаток 5) із формулюванням «Захист Батьківщини». Дає право на 100 000 грн під час лікування та виплату ОГД.</p>
                <p><strong>Травма під час виконання обов'язків:</strong> Формулювання «Виконання обов'язків військової служби».</p>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ ШЛЯХ 6. Проходження ВЛК та оскарження постанови</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p>Якщо ти не згоден із рішенням ВЛК (наприклад, визнали «придатним» при важких патологіях) — ти маєш право подати скаргу до Центральної ВЛК (ЦВЛК) або до суду протягом 1 місяця з дня отримання свідоцтва про хворобу.</p>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">♿ ШЛЯХ 7. Оцінювання функціонального стану (ОФС/МСЕК) та протезування</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p>Держава повністю покриває витрати на високофункціональне протезування військових. Направлення та документи оформлюються через Кабінет ППП та соціального супроводу (ЦВС) військової частини.</p>
            </div>
        </details>
    </div>
</div>
`;

// ==========================================
// HUB 3: МЕНІ ВАЖКО / ВТОМА ТА ВІДНОВЛЕННЯ
// ==========================================
window.hubsData['hub3'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🧠 ХАБ 3. Мені важко / Втома та відновлення</h1>
        <p class="text-tactical-muted text-sm">Практичний самоучитель емоційної саморегуляції, розвантаження тіла, зняття напруги в нарядах та анонімної допомоги.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-tactical-card border border-tactical-border p-4 rounded space-y-2">
            <h3 class="font-bold text-tactical-gold">🔋 Вимірюй рівень батареї:</h3>
            <p class="text-xs text-tactical-muted">🟢 <strong>70-100%:</strong> Голова свіжа, робиш будь-яку роботу.</p>
            <p class="text-xs text-tactical-muted">🟡 <strong>30-70%:</strong> Увага падає, туман. Випий води, посидь 20 хв у тиші.</p>
            <p class="text-xs text-tactical-muted">🔴 <strong>0-30%:</strong> Реакція гальмує, гнів. Сказати сержанту «батарея на 15%» — це нормальна техбезпека!</p>
        </div>

        <div class="bg-tactical-card border border-tactical-border p-4 rounded space-y-2">
            <h3 class="font-bold text-tactical-gold">🦴 Якщо болить тіло:</h3>
            <p class="text-xs text-tactical-muted"><strong>Спина/поперек:</strong> Ляж на тверде, зігни ноги до грудей на 30 секунд. Вправа «кішка-собака» 10 разів.</p>
            <p class="text-xs text-tactical-muted"><strong>Ком у горлі / тиск:</strong> Подвійний вдих носом ➔ довгий видих ротом (повторити 3 рази).</p>
        </div>
    </div>

    <div class="bg-tactical-card border border-tactical-border p-5 rounded-lg space-y-3">
        <h3 class="font-bold text-tactical-gold">🆘 Якщо накривають темні думки або важкі спогади:</h3>
        <p class="text-sm text-tactical-muted">Не залишайся сам на сам. Звернися в Кабінет ППП частини або зателефонуй на безкоштовні анонімні лінії:</p>
        <div class="flex flex-wrap gap-3">
            <span class="p-2 bg-tactical-bg border border-tactical-border rounded text-xs font-bold text-tactical-gold">📞 Варто жити: 5522</span>
            <span class="p-2 bg-tactical-bg border border-tactical-border rounded text-xs font-bold text-tactical-gold">📞 Lifeline Ukraine: 7333</span>
        </div>
    </div>
</div>
`;

// ==========================================
// HUB 4: ДУМАЄШ ПРО СЗЧ / ЗМІНА ЧАСТИНИ
// ==========================================
window.hubsData['hub4'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🔀 ХАБ 4. Думаєш про СЗЧ / Зміна частини / Як повернутися</h1>
        <p class="text-tactical-muted text-sm">Самовільне залишення частини (СЗЧ) позбавляє виплат і веде до в'язниці. Покроковий алгоритм розв'язання кризи без втечі та легке переведення через «Армія+».</p>
    </div>

    <div class="space-y-4">
        <div class="bg-tactical-card border border-tactical-alert p-5 rounded-lg space-y-2">
            <h3 class="font-bold text-white text-base">⚠️ Що відбувається по днях при СЗЧ:</h3>
            <p class="text-xs text-tactical-muted"><strong>До 3 днів:</strong> Дисциплінарне порушення (рішення приймає командир в/ч).</p>
            <p class="text-xs text-tactical-muted"><strong>Понад 3 дні:</strong> Матеріали передаються в ДБР/ВСП (ст. 407 КК України, від 5 до 10 років в'язниці).</p>
            <p class="text-xs text-tactical-muted"><strong>Понад 30 днів:</strong> Припинення всіх виплат, зняття із забезпечення, загальний розшук.</p>
        </div>

        <div class="bg-tactical-card border border-tactical-border p-5 rounded-lg space-y-3">
            <h3 class="font-bold text-tactical-gold">🔄 Як легально перевестися в іншу частину через «Армія+»:</h3>
            <ol class="text-sm text-tactical-muted list-decimal pl-5 space-y-1">
                <li>Отримай віддношення (письмову згоду) від нової військової частини.</li>
                <li>Пройди ВЛК (якщо переведення за станом здоров'я).</li>
                <li>Подай електронний рапорт на переведення у застосунку «Армія+».</li>
                <li>Термін розгляду Кадровим центром — до 14 днів.</li>
            </ol>
        </div>
    </div>
</div>
`;

// ==========================================
// HUB 5: ПРАВА, ОБОВ'ЯЗКИ ТА БЕЗПЕКА
// ==========================================
window.hubsData['hub5'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🛡️ ХАБ 5. Мої права, обов’язки, відповідальність та безпека</h1>
        <p class="text-tactical-muted text-sm">Юридичний та цифровий бронежилет військовослужбовця: Статути ЗСУ, права на відпочинок, межі відповідальності та правила безпеки в месенджерах.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-tactical-card border border-tactical-border p-4 rounded space-y-2">
            <h3 class="font-bold text-tactical-gold">⚖️ Твої законні ПРАВА:</h3>
            <p class="text-xs text-tactical-muted">• Щорічна відпустка: до 30 днів на рік + дні на дорогу.</p>
            <p class="text-xs text-tactical-muted">• Базове грошове забезпечення: від 20 100 грн (+ надбавки 30к / 50к / 100к).</p>
            <p class="text-xs text-tactical-muted">• Норма сну: не менше 8 годин на добу за СВШ ЗСУ.</p>
        </div>

        <div class="bg-tactical-card border border-tactical-border p-4 rounded space-y-2">
            <h3 class="font-bold text-tactical-gold">📱 Кібербезпека в месенджерах:</h3>
            <p class="text-xs text-tactical-muted">• Увімкни 2-факторну автентифікацію в Telegram/Signal.</p>
            <p class="text-xs text-tactical-muted">• Вимкни автозавантаження медіафайлів та геопозицію.</p>
            <p class="text-xs text-tactical-muted">• Ніколи не публікуй позицій, техніки та облич побратимів.</p>
        </div>
    </div>
</div>
`;

// ==========================================
// HUB 6: ХОЧУ У ВІДПУСТКУ
// ==========================================
window.hubsData['hub6'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🌴 ХАБ 6. Хочу у відпустку / Сімейні обставини</h1>
        <p class="text-tactical-muted text-sm">Усі види відпусток, правила розрахунку днів на дорогу, виїзд за кордон та дії при блокуванні рапорту.</p>
    </div>

    <div class="bg-tactical-card border border-tactical-border p-5 rounded-lg space-y-3">
        <h3 class="font-bold text-tactical-gold">📲 Подача рапорту через «Армія+»:</h3>
        <p class="text-sm text-tactical-muted">Зайди у розділ «Рапорти» ➔ Обери «Щорічна основна» або «За сімейними обставинами» ➔ Вкажи адресу та дні на дорогу ➔ Надішли командиру.</p>
        <p class="text-xs text-tactical-gold font-bold">Правило 30%: Одночасно у відпустці може перебувати не більше 30% особового складу підрозділу.</p>
    </div>
</div>
`;

// ==========================================
// HUB 7: ГРОШІ, ПІЛЬГИ ТА ГАРАНТІЇ
// ==========================================
window.hubsData['hub7'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">💰 ХАБ 7. Гроші, пільги, соціальні гарантії та розвиток</h1>
        <p class="text-tactical-muted text-sm">Грошові виплати, кредитний захист (0% відсотків), безоплатна кріоконсервація біоматеріалу, пільги для сімей та сержантські/офіцерські курси L-1 / NCO.</p>
    </div>

    <div class="space-y-3">
        <div class="bg-tactical-card border border-tactical-border p-4 rounded">
            <h3 class="font-bold text-tactical-gold text-base">💳 Кредитний захист (0% відсотків):</h3>
            <p class="text-sm text-tactical-muted">Звільнення від сплати відсотків та штрафів за кредитами (п. 15 ст. 14 Закону №2011-XII). Подай Довідку ф. 5 через «Армія+» у банк.</p>
        </div>

        <div class="bg-tactical-card border border-tactical-border p-4 rounded">
            <h3 class="font-bold text-tactical-gold text-base">🧬 Безоплатна кріоконсервація:</h3>
            <p class="text-sm text-tactical-muted">100% за рахунок держави. Включає забір, заморожування та зберігання клітин. Потрібна Довідка ф. 5 та нотаріальне розпорядження для дружини.</p>
        </div>
    </div>
</div>
`;

// ==========================================
// HUB 8: СІМ'Я, СТОСУНКИ ТА ДІТИ
// ==========================================
window.hubsData['hub8'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">👨‍👩‍👧‍👦 ХАБ 8. Сім’я, стосунки, діти та репродуктивне здоров’я</h1>
        <p class="text-tactical-muted text-sm">Підтримка родинного тилу: стосунки на відстані, поради для малюків і підлітків, догляд за хворими родичами та відновлення інтимного життя.</p>
    </div>

    <div class="space-y-3">
        <div class="bg-tactical-card border border-tactical-border p-4 rounded">
            <h3 class="font-bold text-tactical-gold text-base">🍼 Правило першої години у відпустці:</h3>
            <p class="text-sm text-tactical-muted">Коли повертаєшся до малюка (0-6 років) — не біжи одразу хапати на руки. Для нього ти зараз великий і шумний. Сядь на підлогу, розклади іграшку і зачекай 20 хвилин.</p>
        </div>
    </div>
</div>
`;

// ==========================================
// HUB 9: КУТОЧОК СЕРЖАНТА
// ==========================================
window.hubsData['hub9'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🎖️ ХАБ 9. Куточок сержанта (Шпори, чек-листи, статутні важелі)</h1>
        <p class="text-tactical-muted text-sm">Практичний інструментарій для сержантського складу: дисциплінарна влада, алгоритми розмов 1-на-1, профілактика СЗЧ, алкоголізму та конфліктів.</p>
    </div>

    <div class="bg-tactical-card border border-tactical-border p-5 rounded-lg space-y-3">
        <h3 class="font-bold text-tactical-gold">💬 Алгоритм розмови «один на один»:</h3>
        <p class="text-sm text-tactical-muted">1. Обери приватне місце без свідків.<br>2. Зніми статутний тиск: <em>«Брат, я бачу ти сам не свій останні 3 дні. Давай вирішимо разом»</em>.<br>3. Слухай 80% часу, не перебивай.</p>
    </div>
</div>
`;

// ==========================================
// HUB 10: ГАРЯЧІ ЛІНІЇ ТА КОНТАКТИ
// ==========================================
window.hubsData['hub10'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">📞 ХАБ 10. Контакти та гарячі лінії</h1>
        <p class="text-tactical-muted text-sm">Централізований перелік перевірених державних ліній допомоги та внутрішня маршрутизація частини через Кабінет ППП.</p>
    </div>

    <div class="space-y-3">
        <div class="bg-tactical-card border border-tactical-gold p-4 rounded space-y-2">
            <h3 class="font-bold text-tactical-gold text-base">🏛️ Офіційні гарячі лінії:</h3>
            <p class="text-sm text-white">📞 <strong>Гаряча лінія Сил ТрО ЗСУ:</strong> 0 800 507 028</p>
            <p class="text-sm text-white">📞 <strong>Міністерство оборони України:</strong> 1512</p>
            <p class="text-sm text-white">📞 <strong>Уповноважений з прав військових:</strong> 0 800 500 442</p>
            <p class="text-sm text-white">📞 <strong>Безоплатна правнича допомога:</strong> 0 800 213 103</p>
            <p class="text-sm text-white">📞 <strong>Зниклі безвісти (МВС):</strong> 0 800 300 041 / 16-01</p>
        </div>

        <div class="bg-tactical-card border border-tactical-border p-4 rounded space-y-2">
            <h3 class="font-bold text-tactical-gold text-base">🛡️ Внутрішня служба частини («Єдине вікно»):</h3>
            <p class="text-sm text-tactical-muted">З усіх питань (фінанси, здоров'я, родина, конфлікти, рапорти) звертайся до <strong>Кабінету Психологічної підтримки персоналу (ППП)</strong> у штабі або медпункті частини. Тебе вислухають і перенаправлять до потрібного фахівця.</p>
        </div>
    </div>
</div>
`;

// Register Search Index for Hubs 2-10
window.hubsSearchIndex.push({ hubId: 'hub2', hubTitle: '2. Захворів / Поранення / ВЛК', text: 'госпіталь ВЛК поранення довідка 5 травма лікування ОФС протезування', snippet: 'Дії при хворобі, бойовому пораненні, ВЛК та протезуванні.' });
window.hubsSearchIndex.push({ hubId: 'hub3', hubTitle: '3. Втома та відновлення', text: 'втома виснаження болить спина сон ПТСР психолог 5522 7333', snippet: 'Емоційна саморегуляція, зняття напруги та анонімна допомога.' });
window.hubsSearchIndex.push({ hubId: 'hub4', hubTitle: '4. Думки про СЗЧ / Зміна частини', text: 'СЗЧ втеча кримінальна справа переведення Армія+ 407 стаття', snippet: 'Як зупинити виснаження без втечі та перевестися через Армія+.' });
window.hubsSearchIndex.push({ hubId: 'hub5', hubTitle: '5. Права та безпека', text: 'права грошове забезпечення відпустка месенджери Signal Telegram кібербезпека', snippet: 'Статути ЗСУ, права на відпочинок, межі відповідальності.' });
window.hubsSearchIndex.push({ hubId: 'hub6', hubTitle: '6. Хочу у відпустку', text: 'відпустка рапорт Армія+ сімейні обставини дорога кордон', snippet: 'Рапорти в Армія+, правила розрахунку днів на дорогу.' });
window.hubsSearchIndex.push({ hubId: 'hub7', hubTitle: '7. Гроші, пільги, гарантії', text: 'виплати гроші кредити пільги кріоконсервація навчання курси L-1 NCO', snippet: 'Грошове забезпечення, пільги, кредитний захист, кріоконсервація.' });
window.hubsSearchIndex.push({ hubId: 'hub8', hubTitle: '8. Сім’я та стосунки', text: 'сімця дружина діти пільги кордон стосунки догляд за родичем', snippet: 'Підтримка родинного тилу, діти, стосунки на відстані.' });
window.hubsSearchIndex.push({ hubId: 'hub9', hubTitle: '9. Куточок сержанта', text: 'сержант дисципліна рапорт розмова алкоголь профілактика СЗЧ', snippet: 'Інструментарій для сержантського складу, розмови 1-на-1.' });
window.hubsSearchIndex.push({ hubId: 'hub10', hubTitle: '10. Гарячі лінії та контакти', text: 'контакти ТрО 0800507028 МОУ 1512 ППП гаряча лінія омбудсман', snippet: 'Перелік перевірених державних ліній допомоги та Кабінет ППП.' });
