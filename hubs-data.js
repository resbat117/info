window.hubsData = window.hubsData || {};
window.hubsSearchIndex = window.hubsSearchIndex || [];

// ==========================================
// РОЗДІЛ 1: Я ТІЛЬКИ ПРИБУВ У ЧАСТИНУ
// ==========================================
window.hubsData['hub1'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🚪 1. Я тільки прибув (або прикомандирований) у частину</h1>
        <p class="text-tactical-muted text-sm">Інтерактивний покроковий маршрутний лист адаптації новоприбулого військовослужбовця. Усі необхідні файли анкет та психологічний тест розміщено безпосередньо в картці.</p>
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

        <div class="p-4 bg-tactical-alert bg-opacity-20 border border-tactical-alert rounded text-xs text-white">
            <strong>⚠️ ЗАБОРОНА самостійного пересування:</strong> Пересування територією частини здійснюється ВИКЛЮЧНО у супроводі призначеної особи (чергового підрозділу чи сержанта). Самостійне блукання штабом чи об'єктами суворо заборонено!
        </div>

        <!-- Interactive Checklist Steps -->
        <div class="space-y-3">
            
            <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step1" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 1: Документи та ідентифікація при вбутті</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <div class="mt-3 text-sm text-tactical-muted space-y-2">
                    <p>Перевірте наявність оригіналів та зробіть по 3 копії наступних документів:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Паспорт громадянина України (або ID-картка з витягом про реєстрацію) + 3 копії.</li>
                        <li>Номер облікової картки платника податків (ІПН) + 3 копії.</li>
                        <li>Військово-обліковий документ (Військовий квиток / Тимчасове посвідчення військовозобов'язаного).</li>
                        <li>Приписи, розпорядження чи витяг з наказу про направлення/переведення у військову частину.</li>
                        <li>Посвідчення УБД (за наявності), посвідчення водія (із зазначенням категорій), медичні довідки та виписки про хронічні захворювання або поранення.</li>
                    </ul>
                </div>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step2" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 2: Електронні реєстри, банківські реквізити (IBAN) та зв'язок</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <div class="mt-3 text-sm text-tactical-muted space-y-2">
                    <p>1. <strong>Встановлення застосунку «Армія+»:</strong> Встановіть застосунок на смартфон, пройдіть авторизацію через BankID. Перевірте відображення військового ID та статус служби.</p>
                    <p>2. <strong>Банківський рахунок (IBAN):</strong> Отримайте в застосунку вашого банку (ПриватБанк, Монобанк, Ощадбанк тощо) довідку з реквізитами карткового рахунку у форматі IBAN. Вона необхідна фінансовій службі для зарахування грошового забезпечення.</p>
                    <p>3. <strong>Контакти близьких:</strong> Підготуйте номери телефонів, ПІБ та адреси проживання як мінімум двох близьких родичів (дружина, батьки, повнолітні діти) для внесення до облікової картки.</p>
                </div>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step3" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 3: Анкети, опитування та тест «Адаптивність-200»</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <div class="mt-3 text-sm text-tactical-muted space-y-2">
                    <p>1. Скачайте за посиланням вгорі та заповніть <strong>«Анкету прибулого 2026»</strong> (включає дані про освіту, цивільну спеціальність, досвід служби, стан здоров'я, наявність атестатів РАО/речового/прод/грошового).</p>
                    <p>2. Заповніть <strong>«Картку соціально-демографічного вивчення військовослужбовця»</strong> (дані про сімейний стан, дітей до 18 років, статус ВПО, нагороди, розміри одягу/взуття/головного убору, група крові, наявність жетону).</p>
                    <p>3. Пройдіть онлайн-тест <strong>«Адаптивність-200»</strong> за кнопкою у блоці завантажень.</p>
                </div>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step4" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 4: Послідовний обхід служб частини</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <div class="mt-3 text-sm text-tactical-muted space-y-2">
                    <p>Організований обхід здійснюється суворо у супроводі відповідального сержанта:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Медичний пункт (МПЧ):</strong> Обов’язковий первинний медичний огляд черговим лікарем, фіксація скарг на здоров'я, перевірка флюорографії, запис групи крові та резус-фактора, відмітка про проходження ВЛК.</li>
                        <li><strong>Кабінет Психологічної підтримки персоналу (ППП) / Соціальний супровід:</strong> Первинна бесіда з психологом частини, передача результатів теста «Адаптивність-200» та Соц-демо картки, виявлення критичних сімейних, фінансових чи психологічних проблем.</li>
                        <li><strong>Фінансова служба:</strong> Передача довідки IBAN, копії паспорта та ІПН, реєстрація карткового рахунку для нарахування ГЗ.</li>
                        <li><strong>Служби забезпечення (РАО, Речова, Продовольча):</strong> Здавання/перевірка атестатів (продовольчого, речового, РАО, грошового).</li>
                    </ul>
                </div>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step5" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 5: Видання наказів у Штабі частини</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <div class="mt-3 text-sm text-tactical-muted space-y-2">
                    <p>Перевірте видачу двох ключових наказів командира військової частини:</p>
                    <p>1. <strong>Наказ по стройовій частині:</strong> Про зарахування до списків особового складу військової частини (із зазначенням дати зарахування та поставлення на всі види забезпечення).</p>
                    <p>2. <strong>Наказ про призначення:</strong> Про призначення на відповідну військову посаду у конкретний батальйон/роту/взвод/відділення.</p>
                </div>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step6" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 6: МТЗ, проходження інструктажів та побут</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <div class="mt-3 text-sm text-tactical-muted space-y-2">
                    <p>1. <strong>Отримання майна та зброї:</strong> Отримання речового майна за розмірами, зарізання на продовольче забезпечення, закріплення особистої зброї, боєприпасів та додаткового обладнання з внесенням номера у військовий квиток.</p>
                    <p>2. <strong>Проходження інструктажів (під особистий підпис):</strong></p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>з охорони праці;</li>
                        <li>з техніки безпеки;</li>
                        <li>з пожежної безпеки;</li>
                        <li>з протидії корупції;</li>
                        <li>про порядок отримання статусу УБД.</li>
                    </ul>
                    <p>3. <strong>Розміщення:</strong> Знайомство з командиром підрозділу (взводу/роти), поселення у казарму/розташування, проходження первинної адаптації.</p>
                </div>
            </details>

        </div>
    </div>

    <!-- COMMANDER MODE CONTENT -->
    <div id="commander-mode" class="hidden space-y-4">
        <div class="bg-tactical-card border border-tactical-border p-5 rounded-lg space-y-3">
            <h3 class="font-bold text-tactical-gold text-base">🪖 ЧЕК-ЛИСТ КОМАНДИРА / ПРИЙМАЮЧОЇ СТОРОНИ:</h3>
            <ul class="text-sm space-y-2 text-tactical-muted list-disc pl-5">
                <li>Призначити супроводжуючого з числа сержантського складу для супроводу прибулого по службах.</li>
                <li>Перевірити оригінали документів: паспорт, ІПН, військовий квиток, припис/розпорядження.</li>
                <li>Перевірити наявність 4 атестатів: РАО, речовий, продовольчий, грошовий.</li>
                <li>Організувати обов'язковий медогляд у медпункті частини та візит до Кабінету ППП.</li>
                <li>Отримати заповнені «Анкету прибулого 2026», «Картку соц-демо вивчення» та результати тесту «Адаптивність-200».</li>
                <li>Провести інструктажі під особистий підпис у забірній відомості/анкеті (охорона праці, ТБ, пожежна безпека, корупція, УБД).</li>
                <li>Зробити записи в Журналі індивідуальних бесід підрозділу та скласти коротку характеристику військовослужбовця.</li>
                <li>Видати накази про зарахування до списків особового складу та призначення на посаду.</li>
            </ul>
        </div>
    </div>
</div>
`;

// Register Search Index
window.hubsSearchIndex.push({ hubId: 'hub1', hubTitle: '1. Я тільки прибув у частину', text: 'Адаптивність 200 анкета прибулого картка соц демо обхід служб штаб медпункт ППП', snippet: 'Маршрутний лист, анкети Word, тест Адаптивність-200.' });
