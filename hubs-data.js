window.hubsData = window.hubsData || {};
window.hubsSearchIndex = window.hubsSearchIndex || [];

// ==========================================
// РОЗДІЛ 1: Я ТІЛЬКИ ПРИБУВ (АБО ПРИКОМАНДИРОВАНИЙ) У ЧАСТИНУ (ПОВНА ВЕРСІЯ 100%)
// ==========================================
window.hubsData['hub1'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🚪 1. Я тільки прибув (або прикомандирований) у частину</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Вітаємо у військовій частині! Перші години та дні на новому місці завжди пов'язані з невизначеністю, оформленням великої кількості документів та знайомством із підрозділом. У цьому Розділі зібрано чіткий покроковий маршрут як для новоприбулого воїна, так і для командира/особи, яка приймає особовий склад.»</p>
    </div>

    <!-- Застереження / Правила супроводу -->
    <div class="bg-tactical-alert bg-opacity-20 border-2 border-tactical-alert p-5 rounded-lg space-y-2 text-white">
        <h3 class="font-bold text-base flex items-center space-x-2">
            <span>⚠️</span><span>ПРАВИЛА СУПРОВОДУ ТА ЗАБОРОНА САМОСТІЙНОГО ПЕРЕСУВАННЯ:</span>
        </h3>
        <p class="text-sm font-semibold">Пересування територією військової частини, штабом чи об'єктами здійснюється <strong>ВИКЛЮЧНО у супроводі призначеної особи</strong> (чергового підрозділу, сержанта або супроводжуючого від приймаючої сторони).</p>
        <p class="text-xs text-tactical-muted">• Самостійне блукання штабом, кабінетами чи територією суворо заборонено за правилами внутрішнього розпорядку та безпеки.</p>
    </div>

    <!-- Перемикач режимів -->
    <div class="flex space-x-2">
        <button id="btn-mode-soldier" onclick="toggleRoleMode('soldier')" class="flex-1 py-3 px-4 rounded font-bold text-sm bg-tactical-accent text-white border border-tactical-border transition">
            👤 Я — Новоприбулий військовослужбовець
        </button>
        <button id="btn-mode-commander" onclick="toggleRoleMode('commander')" class="flex-1 py-3 px-4 rounded font-bold text-sm bg-tactical-card text-tactical-muted border border-tactical-border hover:text-white transition">
            🪖 Я — Командир / Особа, яка приймає
        </button>
    </div>

    <!-- Лічильник прогресу / Гра-трекер -->
    <div class="bg-tactical-card border border-tactical-border p-4 rounded-lg space-y-2">
        <div class="flex justify-between text-xs font-bold">
            <span id="progress-text" class="text-tactical-gold">Пройдено етапів оформлення: 0 з 6 (0%)</span>
            <span class="text-tactical-muted">Збереження прогресу в пам'яті смартфона</span>
        </div>
        <div class="w-full bg-tactical-bg h-3 rounded-full overflow-hidden border border-tactical-border">
            <div id="progress-bar-fill" class="bg-tactical-gold h-full w-0 transition-all duration-300"></div>
        </div>
    </div>

    <!-- РЕЖИМ НОВОПРИБУЛОГО -->
    <div id="soldier-mode" class="space-y-4">
        
        <!-- Блок скачування та тесту -->
        <div class="bg-tactical-card border-2 border-tactical-gold p-5 rounded-lg space-y-4">
            <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
                <span>📎</span><span>ФАЙЛИ ДЛЯ ЗАВАНТАЖЕННЯ ТА ПСИХОЛОГІЧНИЙ ТЕСТ:</span>
            </h3>
            <p class="text-xs text-tactical-muted">Завантажте та заповніть ці анкети для передачі в Штаб частини та Кабінет ППП (Психологічної підтримки персоналу):</p>
            
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

        <!-- ПОКРОКОВИЙ ІНТЕРАКТИВНИЙ ЧЕК-ЛИСТ (6 ЕТАПІВ) -->
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
                    <p class="font-bold text-tactical-gold">Перевірте наявність оригіналів та зробіть по 3 копії наступних документів:</p>
                    <ul class="list-disc pl-5 space-y-1.5">
                        <li><strong>Паспорт громадянина України</strong> (або ID-картка з витягом про реєстрацію місця проживання) + 3 копії.</li>
                        <li><strong>Номер облікової картки платника податків (ІПН)</strong> + 3 копії.</li>
                        <li><strong>Військово-обліковий документ:</strong> Військовий квиток або Тимчасове посвідчення військовозобов'язаного (із записами про призов, звання, ВОС, державні нагороди).</li>
                        <li><strong>Приписи та розпорядження:</strong> Направлення ТЦК та СП, припис про направлення у в/ч, витяг з наказу про переведення або прикомандирування.</li>
                        <li><strong>Посвідчення УБД</strong> (Учасника бойових дій) — за наявності (серія, номер, дата видачі).</li>
                        <li><strong>Посвідчення ВПО</strong> (Внутрішньо переміщеної особи) — за наявності.</li>
                        <li><strong>Посвідчення водія</strong> (із зазначенням категорій та дати видачі).</li>
                        <li><strong>Медичні документи:</strong> Медична книжка, виписки про перенесені поранення, контузії, захворювання, рішення ВЛК про придатність/обмежену придатність.</li>
                        <li><strong>Атестати з попередньої частини (за наявності):</strong>
                            <ul class="list-circle pl-5 mt-1 space-y-0.5 text-xs">
                                <li>а) Речовий атестат (наданий / ненаданий);</li>
                                <li>б) Продовольчий атестат (наданий / ненаданий);</li>
                                <li>в) Атестат РАО (зброя, майно) (наданий / ненаданий);</li>
                                <li>г) Грошовий атестат (наданий / ненаданий).</li>
                            </ul>
                        </li>
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
                    <p>1. <strong>Застосунок «Армія+»:</strong> Встановити застосунок на смартфон, авторизуватися через BankID. Отримати або перевірити свій особистий військовослужбовця ID (ID Армія+).</p>
                    <p>2. <strong>Банківські реквізити (IBAN):</strong> Сформувати в онлайн-банку (Приват24, Монобанк, Ощадбанк тощо) довідку з реквізитами карткового рахунку у форматі IBAN для нарахування грошового забезпечення (із завіренням печаткою банку або електронним підписом).</p>
                    <p>3. <strong>Контакти для зв'язку у надзвичайних ситуаціях:</strong> Підготувати ПІБ, адреси та номери телефонів мінімум двох близьких родичів чи знайомих (дружина, батьки, діти, близький друг) для внесення у картку обліку.</p>
                </div>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step3" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 3: Анкетування та психологічний тест «Адаптивність-200»</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <div class="mt-3 text-sm text-tactical-muted space-y-2">
                    <p>1. <strong>«Анкета прибулого 2026»:</strong> Заповнити штабну анкету новоприбулого (ПІБ, звання, громадянство, паспорт, ІПН, освіта, цивільна спеціальність, ВОС, ТЦК призову, контракт, досвід бойових дій, наявність атестатів, скарги на стан здоров'я, потреба в ліках, алергії, проходження інструктажів з ТБ).</p>
                    <p>2. <strong>«Картка соціально-демографічного вивчення військовослужбовця»:</strong> Заповнити картку (сімейний стан, діти до 18 років, батько/мати-одиначка, розміри одягу/взуття/головного убору, статус ВПО, наявність судимості, група крові, резус-фактор, наявність жетону з особистим номером, відбір біологічного матеріалу для ДНК).</p>
                    <p>3. <strong>Психологічний тест «Адаптивність-200»:</strong> Пройти онлайн-тестування за посиланням у блоці завантажень для визначення рівня адаптивності, комунікативного потенціалу та нервово-психічної стійкості.</p>
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
                    <p class="font-bold text-tactical-gold">Організований обхід здійснюється ВИКЛЮЧНО у супроводі призначеної особи:</p>
                    <ul class="list-disc pl-5 space-y-1.5">
                        <li><strong>Медичний пункт частини (МПЧ) / Черговий медик:</strong> Обов’язковий первинний огляд, перевірка скарг на стан здоров'я, фіксація групи крові, резус-фактора, даних про ВЛК, щеплення, відбір біологічного матеріалу та розпис у журналі медичного пункту.</li>
                        <li><strong>Кабінет Психологічної підтримки персоналу (ППП) / Соціальний супровід:</strong> Співбесіда з психологом, обробка тесту «Адаптивність-200», передача Картки соц-демо вивчення, оцінка сімейного та психологічного стану, виявлення проблемних факторів.</li>
                        <li><strong>Фінансова служба:</strong> Передача довідки IBAN, копій паспорта, ІПН для постановки на грошове забезпечення, зарахування виплат, перевірка права на підйомну допомогу та матеріальну допомогу.</li>
                        <li><strong>Служба РАО (Ракетно-артилерійського озброєння):</strong> Здавання/перевірка атестата РАО, закріплення або здача зброї, боєприпасів, запис у збройову картку.</li>
                        <li><strong>Речова та Продовольча служби:</strong> Здавання атестатів із попереднього місця служби, постановка на відповідні види забезпечення, визначення розмірів обмундирування.</li>
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
                    <p>Перевірити видачу підтверджуючих наказів командира військової частини:</p>
                    <p>1. <strong>Наказ про зарахування до списків особового складу:</strong> Наказ командира в/ч (по стройовій частині) про зарахування до списків о/с, дату та номер наказу, постановку на продовольче, речове та грошове забезпечення.</p>
                    <p>2. <strong>Наказ про призначення на посаду:</strong> Наказ командира в/ч про призначення на конкретну військову посаду (або переміщення за посадою) у конкретний підрозділ (батальйон/роту/взвод).</p>
                </div>
            </details>

            <details class="bg-tactical-card border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-text cursor-pointer flex items-center justify-between">
                    <label class="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" id="task-step6" class="game-task custom-checkbox w-5 h-5 rounded border-tactical-border bg-tactical-bg text-tactical-gold">
                        <span>Етап 6: МТЗ, проходження інструктажів, побут та адаптація</span>
                    </label>
                    <span class="text-xs text-tactical-gold">Розгорнути ▼</span>
                </summary>
                <div class="mt-3 text-sm text-tactical-muted space-y-2">
                    <p>1. <strong>Забезпечення майно та зброєю:</strong> Отримання речового майна за розмірами одягу/взуття/головного убору, зарізання на продовольче забезпечення, закріплення зброї, боєприпасів та додаткового обладнання (назва, номер, кількість, запис у військовий квиток).</p>
                    <p>2. <strong>Обов'язкові інструктажі (з підписами в.о. в анкеті):</strong></p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>а) з охорони праці;</li>
                        <li>б) з техніки безпеки;</li>
                        <li>в) пожежний інструктаж;</li>
                        <li>г) з протидії корупції;</li>
                        <li>д) інструктаж про порядок отримання статусу УБД.</li>
                    </ul>
                    <p>3. <strong>Поселення та адаптація:</strong> Ознайомлення з командиром підрозділу, поселення в казарму/бліндаж/розташування, проходження первинного адаптаційного періоду під наглядом сержантського складу.</p>
                </div>
            </details>

        </div>
    </div>

    <!-- РЕЖИМ КОМАНДИРА / ПРИЙМАЮЧОЇ СТОРОНИ -->
    <div id="commander-mode" class="hidden space-y-4">
        <div class="bg-tactical-card border border-tactical-border p-5 rounded-lg space-y-3">
            <h3 class="font-bold text-tactical-gold text-base">🪖 АЛГОРИТМ ТА ЧЕК-ЛИСТ КОМАНДИРА (ПРИЙМАЮЧОЇ СТОРОНИ):</h3>
            <p class="text-xs text-tactical-muted">Службовий алгоритм дій командира підрозділу чи особи, відповідальної за прийом новоприбулого особового складу:</p>
            
            <ul class="text-sm space-y-2 text-tactical-muted list-disc pl-5">
                <li><strong>Супровід:</strong> Призначити супроводжуючого з числа сержантського складу. Самостійне пересування прибулого територією частиною чи штабом суворо заборонено.</li>
                <li><strong>Перевірка документів:</strong> Перевірити паспорт, ІПН, військовий квиток, припис, накази, посвідчення УБД, посвідчення ВПО, водійське посвідчення.</li>
                <li><strong>Перевірка атестатів:</strong> Перевірити наявність та відмітки про надання/ненадання 4 атестатів (РАО, Грошовий, Речовий, Продовольчий).</li>
                <li><strong>Медичний пункт:</strong> Направити до чергового медика для огляду, фіксації скарг, перевірки рішень ВЛК, заповнення медичного журналу.</li>
                <li><strong>Кабінет ППП:</strong> Забезпечити проходження тесту «Адаптивність-200», заповнення «Анкети прибулого 2026» та «Картки соц-демо вивчення».</li>
                <li><strong>Інструктажі:</strong> Провести та підписати інструктажі під особистий підпис (охорона праці, техніка безпеки, пожежна безпека, протидія корупції, УБД).</li>
                <li><strong>Журнал індивідуальних бесід:</strong> Зробити записи в Журналі індивідуальних бесід підрозділу (хто проводив бесіду, дата, мета, виявлені проблеми).</li>
                <li><strong>Складання характеристики:</strong> Скласти коротку характеристику військовослужбовця за 5 напрямками (моральний стан, мотивація, бойовий досвід, сімейні обставини, професійні навички) під особистий підпис із зазначенням посади та звання.</li>
                <li><strong>Накази:</strong> Перевірити видання наказів командира в/ч про зарахування до списків о/с та призначення на посаду.</li>
            </ul>
        </div>
    </div>
</div>
`;

// Реєстрація пошукового індексу
window.hubsSearchIndex.push({ hubId: 'hub1', hubTitle: '1. Я тільки прибув у частину', text: 'Адаптивність 200 анкета прибулого картка соц демо обхід служб штаб медпункт ППП атестати РАО речовий прод грошовий інструктаж супровід характеристика журнал бесід', snippet: 'Маршрутний лист, анкети Word, тест Адаптивність-200, чек-лист командира.' });
