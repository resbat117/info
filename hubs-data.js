window.hubsData = window.hubsData || {};
window.hubsSearchIndex = window.hubsSearchIndex || [];

// ==========================================
// РОЗДІЛ 1: Я ТІЛЬКИ ПРИБУВ (АБО ПРИКОМАНДИРОВАНИЙ) У ЧАСТИНУ
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

// Реєстрація пошукового індексу для Розділу 1
window.hubsSearchIndex.push({ hubId: 'hub1', hubTitle: '1. Я тільки прибув у частину', text: 'Адаптивність 200 анкета прибулого картка соц демо обхід служб штаб медпункт ППП атестати РАО речовий прод грошовий інструктаж супровід характеристика журнал бесід', snippet: 'Маршрутний лист, анкети Word, тест Адаптивність-200, чек-лист командира.' });
// ==========================================
// РОЗДІЛ 2: Я ЗАХВОРІВ / ПОРАНЕННЯ / ПОТРІБНО НА ВЛК
// ==========================================
window.hubsData['hub2'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🏥 2. Я захворів / Поранення / Потрібно на ВЛК</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Тут зібрано залізобетонні, legally-accurate алгоритми для захисту твого здоров’я та прав. Від дій при травмуванні під час звільнення, хворобі у відпустці, хронічному болю та розладах сну — до первинного звернення в медпункт частини, планової діагностики, Бойового Поранення vs Травми під час служби, ВЛК, ОФС, безкоштовного протезування, відпустки за станом здоров'я та списання аптечки. Усі рапорти подаються електронно через застосунок "Армія+" із чітким Планом Б для паперових процедур.»</p>
    </div>

    <!-- Навігатор по Шляхах -->
    <div class="bg-tactical-card border border-tactical-border p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base">🎛️ Обирай свій шлях для навігації:</h3>
        <ul class="text-xs text-tactical-muted space-y-1">
            <li>• 🚨 ШЛЯХ 1. Травма при звільненні / Зупинення виключення з в/ч (КРИТИЧНИЙ ПРІОРИТЕТ №1)</li>
            <li>• 🏖️ ШЛЯХ 2. Захворів під час відпустки або відрядження (ОКРЕМИЙ АЛГОРИТМ ПРАВОВОГО ЗАХИСТУ)</li>
            <li>• 🧠 ШЛЯХ 3. "Я не можу спати" та "У мене хронічний біль" (Безсоння, ПТСР, Грижі, Невралгія)</li>
            <li>• 🩺 ШЛЯХ 4. Захворів під час проходження служби в частині (Форма 3, МПЧ, Госпіталь)</li>
            <li>• 🔬 ШЛЯХ 5. Планова діагностика та хронічні хвороби (35–55+, ліки, шлунок)</li>
            <li>• 🚑 ШЛЯХ 6. Отримав поранення / травму (Бойове vs Травма, Розслідування, Додаток 5)</li>
            <li>• ⚖️ ШЛЯХ 7. Проходження ВЛК та оскарження постанови (Строки, Алгоритм, Скарга)</li>
            <li>• ♿ ШЛЯХ 8. Оцінювання функціонального стану (ОФС/МСЕК), Протезування, Відпустка 30–60 днів та Аптечка</li>
        </ul>
    </div>

    <div class="space-y-4">

        <!-- ШЛЯХ 1 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚨 ШЛЯХ 1. Травма при звільненні / Зупинення виключення з в/ч (КРИТИЧНИЙ ПРІОРИТЕТ №1)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="p-3 bg-tactical-alert bg-opacity-20 border border-tactical-alert rounded text-white font-bold">
                    «ЗАЛІЗНЕ ПРАВИЛО: Доки тебе офіційно НЕ виключено зі списків особового складу військової частини (не видано наказ про виключення та не видано розрахунок), ти є ДІЙСНИМ військовослужбовцем. Виключення зі списків в/ч під час стаціонарного лікування є ПРЯМИМ ПОРУШЕННЯМ ЗАКОНУ!»
                </p>

                <p class="font-bold text-tactical-gold">🎯 Мета / Вигода:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Негайне призупинення виключення зі списків особового складу військової частини.</li>
                    <li>Збереження 100% грошового забезпечення (ГЗ) на весь період стаціонарного лікування та відпустки за станом здоров'я.</li>
                    <li>Збереження права на проведення службового розслідування, отримання Довідки про обставини травми (Додаток 5) та виплату Одноразової грошової допомоги (ОГД).</li>
                    <li>Можливість змінити формулювання статті звільнення на «За станом здоров'я» за результатами повторної ВЛК.</li>
                </ul>

                <p class="font-bold text-tactical-gold">🛠️ Алгоритм дій:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Перевірка юридичного статусу:</strong> Переконайся, що наказу про виключення зі списків особового складу ще немає або тебе ще не розраховано. Навіть якщо є наказ про звільнення — ти дійсний військовий!</li>
                    <li><strong>Фіксація до покидання частини:</strong> Якщо травма сталася на території в/ч або під час здачі майна/документів — негайно повідом чергового частини, викликай швидку (103) або звернися до медпункту ДО того, як остаточно покинути територію підрозділу.</li>
                    <li><strong>Обов'язковий токсикологічний аналіз (освідування):</strong> Вимагай проведення освідування на стан сп'яніння. Отримай довідку про 0.0 проміле (це унеможливить спроби частини списати травму на побутовий алкоголізм).</li>
                    <li><strong>Сповіщення в/ч із госпіталю:</strong> Лікуючий лікар госпіталю надсилає сповіщення про твою стаціонарну госпіталізацію до військової частини. Командир в/ч зобов'язаний протягом 24 годин видати наказ про призупинення процедури виключення зі списків особового складу на весь період лікування.</li>
                    <li><strong>Службове розслідування:</strong> Командир призначає розслідування (триває до 15 днів). За його результатами видається Довідка про обставини травми (Додаток 5).</li>
                </ol>
            </div>
        </details>

        <!-- ШЛЯХ 2 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🏖️ ШЛЯХ 2. Захворів під час відпустки або відрядження (ОКРЕМИЙ АЛГОРИТМ ПРАВОВОГО ЗАХИСТУ)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ЗАКОННЕ ПРАВИЛО: Раптова хвороба чи травма під час відпустки НЕ скасовує твоїх днів відпочинку. Відпустка продовжується на кількість днів стаціонарного лікування.»</p>
                
                <p class="font-bold text-tactical-gold">🎯 Мета / Вигода:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Офіційне продовження відпустки на термін перебування в лікарні/госпіталі.</li>
                    <li>Захист від обвинувачень у СЗЧ (самовільному залишенні частини) через несвоєчасне повернення.</li>
                    <li>Безкоштовне лікування у військових або цивільних закладах охорони здоров'я.</li>
                </ul>

                <p class="font-bold text-tactical-gold">🛠️ Алгоритм дій при раптовій хворобі поза частиною:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Негайно звернися до лікарні:</strong> Звернися до найближчого цивільного або військового закладу охорони здоров'я. Отримай первинну медичну допомогу та документ про стаціонарне лікування або лист непрацездатності.</li>
                    <li><strong>Повідом ТЦК та СП:</strong> Протягом 24 годин особисто або через рідних звернися до найближчого ТЦК та СП за місцем перебування у відпустці. Надай медичний документ. ТЦК надсилає офіційне сповіщення до вашої військової частини.</li>
                    <li><strong>Повідом командира:</strong> Зателефонуйте або надішліть фото довідки/виписки командиру роти/взводу в месенджер.</li>
                    <li><strong>Продовження відпустки:</strong> Відпустка автоматично продовжується на кількість днів стаціонарного лікування на підставі довідки з закладу охорони здоров'я та рішення ТЦК.</li>
                </ol>
            </div>
        </details>
        <!-- ШЛЯХ 3 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧠 ШЛЯХ 3. "Я не можу спати" та "У мене хронічний біль" (Безсоння, ПТСР, Грижі, Невралгія)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>Хронічні розлади сну, виснаження, панічні атаки, важкі болі в спині та суглобах — це офіційні медичні підстави для направлення на обстеження та лікування.</p>
                
                <p class="font-bold text-tactical-gold">🛠️ Алгоритм дій:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Подача рапорту через «Армія+»:</strong> Подай електронний рапорт на ім'я командира частини з проханням направити на медичний огляд та консультацію вузьких фахівців (невропатолог, психіатр, вертебролог) у зв'язку зі стійким погіршенням стану здоров'я.</li>
                    <li><strong>Фіксація скарг:</strong> На прийомі в начмеда детально описати симптоми (втрата сну понад 3 дні, панічні атаки, хронічний біль у спині, що заважає носити бронежилет).</li>
                    <li><strong>Отримання направлення:</strong> Отримати направлення до військово-неврологічного або терапевтичного відділення госпіталю для стаціонарної діагностики.</li>
                </ol>
            </div>
        </details>

        <!-- ШЛЯХ 4 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🩺 ШЛЯХ 4. Захворів під час проходження служби в частині (Форма 3, МПЧ, Госпіталь)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Первинний медичний пункт:</strong> Звернися до чергового фельдшера/медика підрозділу або Медичного пункту частини (МПЧ).</li>
                    <li><strong>Журнал обліку хворих:</strong> Медик фіксує звернення у Журналі обліку хворих (Форма 3) та проводиться первинний огляд (температура, тиск, огляд).</li>
                    <li><strong>Рішення медика:</strong> За наявності підстав медик видає Довідку про тимчасове звільнення від виконання службових обов'язків (до 3–6 днів) або готує направлення на госпіталізацію до військового госпіталю.</li>
                </ol>
            </div>
        </details>
        <!-- ШЛЯХ 5 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🔬 ШЛЯХ 5. Планова діагностика та хронічні хвороби (35–55+, ліки, шлунок)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>Для бійців вікової категорії 35–55+ та бійців із хронічними патологіями шлунка, серця та суглобів передбачено планове обстеження. Рапорт подається через «Армія+» на направлення до стаціонару для планової діагностики та корекції лікування.</p>
            </div>
        </details>

        <!-- ШЛЯХ 6 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚑 ШЛЯХ 6. Отримав поранення / травму (Бойове vs Травма, Розслідування, Додаток 5)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Різниця між Пораненням та Травмою:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Бойове поранення (контузія, травма, каліцтво):</strong> Отримане під час захисту Батьківщини, виконання завдань на передньому краї або під час ворожого обстрілу. Видається <strong>Довідка про обставини травми (Додаток 5)</strong> з формулюванням <em>«Захист Батьківщини»</em>. Надає право на додаткову винагороду 100 000 грн на весь час стаціонарного лікування та виплату Одноразової грошової допомоги (ОГД).</li>
                    <li><strong>Травма під час проходження служби:</strong> Отримана під час виконання обов'язків (у розташуванні частини, на такті, під час обслуговування техніки). Формулювання: <em>«Виконання обов'язків військової служби»</em>.</li>
                </ul>
            </div>
        </details>
        <!-- ШЛЯХ 7 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ ШЛЯХ 7. Проходження ВЛК та оскарження постанови (Строки, Алгоритм, Скарга)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>Направлення на ВЛК видається після завершення стаціонарного лікування або за рапортом військовослужбовця при хронічних захворюваннях.</p>
                <p class="font-bold text-tactical-gold">Як оскаржити постанову ВЛК:</p>
                <p>Якщо ви не згодні з висновком ВЛК (наприклад, визнано придатним при важких патологіях), ви маєте право оскаржити постанову до ВЛК вищого рівня (регіональної ЦВЛК або Центральної ВЛК МОУ) протягом 1 місяця з дня отримання постанови, або в судовому порядку.</p>
            </div>
        </details>

        <!-- ШЛЯХ 8 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">♿ ШЛЯХ 8. Оцінювання функціонального стану (ОФС/МСЕК), Протезування, Відпустка 30–60 днів та Аптечка</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>1. <strong>Оцінювання функціонального стану (ОФС):</strong> Проводиться для встановлення ступеня втрати працездатності та групи інвалідності після завершення основного лікування.</p>
                <p>2. <strong>Безкоштовне протезування:</strong> Держава повністю покриває витрати на високофункціональне протезування військовослужбовців (безкоштовне встановлення, сервісне обслуговування та заміна). Документи оформлюються через Кабінет ППП та соціального супроводу військової частини.</p>
                <p>3. <strong>Відпустка за станом здоров'я:</strong> Надається за рішенням ВЛК на строк від 30 до 60 календарних днів із збереженням грошового забезпечення.</p>
                <p>4. <strong>Списання індивідуальної аптечки (ІПП):</strong> Здійснюється на підставі рапорту та медичного акта про використання/втрату під час надання домедичної допомоги в ході бойових дій.</p>
            </div>
        </details>

    </div>
</div>
`;

// Реєстрація пошукового індексу для Розділу 2
window.hubsSearchIndex.push({ hubId: 'hub2', hubTitle: '2. Захворів / Поранення / ВЛК', text: 'госпіталь ВЛК поранення довідка 5 травма лікування ОФС протезування занедужав відпустка аптечка ТЦК', snippet: 'Дії при хворобі, бойовому пораненні, ВЛК, ОФС та протезуванні.' });
// ==========================================
// РОЗДІЛ 3: ПСИХОЛОГІЧНА ПІДТРИМКА ТА МОРАЛЬНИЙ СТАН
// ==========================================
window.hubsData['hub3'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🧠 3. Психологічна підтримка та моральний стан</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Бойовий стрес, контузії, виснаження, тривога за родину та втрата побратимів — це природна реакція на нелюдські обставини. Звернення за психологічною допомогою є проявом відповідальності та професіоналізму, а не слабкості. У цьому Розділі зібрано контакти перевірених служб, алгоритм звернення до Кабінету ППП та практичні техніки самодопомоги.»</p>
    </div>

    <!-- Застереження про конфіденційність -->
    <div class="bg-tactical-card border border-tactical-gold p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
            <span>🛡️</span><span>ПРИНЦИП КРАЙНЬОЇ КОНФІДЕНЦІЙНОСТІ:</span>
        </h3>
        <p class="text-xs text-tactical-muted">Звернення до психологів кабінету ППП (Психологічної підтримки персоналу) чи на гарячі лінії є абсолютно конфіденційним. Фіксація в медичних документах здійснюється виключно за наявності медичних показань або за вашою особистою згодою.</p>
    </div>

    <div class="space-y-4">

        <!-- БЛОК 1: Контакти та гарячі лінії -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📞 Цілодобові гарячі лінії підтримки</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Якщо тобі або побратиму потрібна негайна розмова чи підтримка у критичній ситуації:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Гаряча лінія психологічної підтримки МОУ:</strong> <a href="tel:1512" class="text-tactical-gold font-bold underline">1512</a> або <a href="tel:0800500442" class="text-tactical-gold underline">0 800 500 442</a> (безкоштовно, цілодобово).</li>
                    <li><strong>Служба підтримки ветеранів та військовослужбовців Lifeline Ukraine:</strong> <a href="tel:7333" class="text-tactical-gold font-bold underline">7333</a> (цілодобово, безкоштовно для всіх операторів).</li>
                    <li><strong>Центр морально-психологічного забезпечення ЗСУ:</strong> Звернення через Кабінет ППП частини або чергового підрозділу.</li>
                </ul>
            </div>
        </details>
        <!-- БЛОК 2: Звернення до Кабінету ППП частини -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🏢 Маршрут звернення до Кабінету ППП (Психологічної підтримки)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>Кабінет психологічної підтримки персоналу (ППП) функціонує в кожній військовій частині / батальйоні для надання фахової психологічної допомоги та супроводу.</p>
                <p class="font-bold text-tactical-gold">🛠️ Покроковий алгоритм звернення:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Усний або письмовий запит:</strong> Звернися безпосередньо до офіцера з морально-психологічного забезпечення (МПЗ) підрозділу або до психолога частини.</li>
                    <li><strong>Подача рапорту (за потреби):</strong> У разі потреби направлення до військово-медичного закладу (госпіталю) для проходження спеціалізованого обстеження Подай рапорт через застосунок «Армія+» або в паперовому вигляді на ім'я командира.</li>
                    <li><strong>Консультація та оцінка:</strong> Психолог проводить бесіду, оцінку стану нервово-психічної стійкості (зокрема за тестом «Адаптивність-200») та надає рекомендації щодо відновлення чи направлення на реабілітацію.</li>
                </ol>
            </div>
        </details>

        <!-- БЛОК 3: Перша психологічна допомога та самодопомога -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧘 Техніки самодопомоги при паніці, тривозі та гострому стресі</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">При виникненні сильного страху, панічної атаки або заціпеніння застосовуй базові протоколи саморегуляції:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Дихання по квадрату (4-4-4-4):</strong> Вдих протягом 4 секунд — затримка дихання на 4 секунди — видих протягом 4 секунд — затримка дихання на 4 секунди. Повторити 5–8 циклів для нормалізації пульсу.</li>
                    <li><strong>Техніка заземлення (5-4-3-2-1):</strong> Назви про себе 5 предметів, які бачиш навколо; 4 речі, які можеш відчути на дотик; 3 звуки, які чуєш; 2 запахи, які відчуваєш; 1 смакову деталь. Це повертає контроль над тілом та розумом.</li>
                    <li><strong>Робота з побратимом у стані ступору або паніки:</strong> Встанови зоровий контакт, говори короткими чіткими фразами, назви його на ім'я, дай просту конкретну команду («Дивись на мене», «Зроби вдих», «Тримай автомат»).</li>
                </ul>
            </div>
        </details>
        Розділ 3 - Частина 2 є
        // ==========================================
// РОЗДІЛ 4: ГРОШОВЕ ЗАБЕЗПЕЧЕННЯ, ВИПЛАТИ ТА ВИНАГОРОДИ
// ==========================================
window.hubsData['hub4'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">💰 4. Грошове забезпечення, виплати та винагороди</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Фінансова прозорість — це твоя залізна впевненість та захист родини. Тут зібрано повний розклад усіх виплат: від основного грошового забезпечення (ГЗ) до бойових додаткових винагород (30 000 / 50 000 / 100 000 грн), виплат за поранення, оздоровчих, матеріальної допомоги, підйомних та процедури перевірки розрахункового листа.»</p>
    </div>

    <!-- Застереження про реквізити та строки -->
    <div class="bg-tactical-card border border-tactical-gold p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
            <span>📅</span><span>СТРОКИ ВИПЛАТ ТА ПЕРЕВІРКА IBAN:</span>
        </h3>
        <p class="text-xs text-tactical-muted">Грошове забезпечення виплачується щомісяця у строки, встановлені наказом МОУ (зазвичай <strong>з 5 по 15 число</strong> наступного місяця). Переконайся, що у фінансовій службі частини зареєстровано твій правильний картковий рахунок у форматі <strong>IBAN</strong>.</p>
    </div>

    <div class="space-y-4">

        <!-- БЛОК 1: Базове грошове забезпечення -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">💵 Structure основного грошового забезпечення (ГЗ)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>Основне грошове забезпечення складається з двох головних частин: щомісячних основних виплат та щомісячних додаткових виплат.</p>
                <p class="font-bold text-tactical-gold">Складові частини ГЗ:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Основні види:</strong> посадовий оклад, оклад за військовим званням, надбавка за вислугу років.</li>
                    <li><strong>Щомісячні додаткові види:</strong> надбавка за особливості проходження служби (до 100% посадового окладу з урахуванням окладу за званням та вислуги), премія (залежно від внеску та відсутності дисциплінарних стягнень), надбавки за секретність, класність, вчені ступені тощо.</li>
                    <li><strong>Мінімальний розмір:</strong> Мінімальний рівень грошового забезпечення військовослужбовця ЗСУ встановлено на рівні <strong>не менше 20 100 грн</strong> на місяць.</li>
                </ul>
            </div>
        </details>
<!-- БЛОК 2: Додаткові винагороди (30k, 50k, 100k, 70k) -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🎖️ Додаткові бойові винагороди (30k / 50k / 100k / 70k грн)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Нарахування здійснюється пропорційно дням безпосередньої участі у бойових діях або виконанні завдань на підставі Бойових наказів (розпоряджень) та Бойових донесень:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>100 000 грн / місяць (з розрахунку на місяць):</strong> За безпосередню участь у бойових діях на лінії бойового зіткнення (на передньому краї), а також під час перебування на стаціонарному лікуванні у зв'язку з бойовим пораненням (контузією, травмою, каліцтвом).</li>
                    <li><strong>50 000 грн / місяць:</strong> Для військовослужбовців, які виконують бойові (спеціальні) завдання у складі органів військового управління, штабів угруповань військ або штабів тактичних груп, що здійснюють оперативне управління діючими підрозділами.</li>
                    <li><strong>30 000 грн / місяць:</strong> За виконання бойових (спеціальних) завдань згідно з бойовими наказами поза зоною безпосередніх бойових дій (захист критичної інфраструктури, розмінування, виконання завдань з охорони тощо).</li>
                    <li><strong>Одноразова винагорода 70 000 грн:</strong> Додаткова виплата за кожні 30 днів сумарного виконання бойових (спеціальних) завдань на лінії бойового зіткнення (на першій лінії), ротного/взводного опорного пункту або на території противника.</li>
                </ul>
            </div>
        </details>
<!-- БЛОК 3: Допомога на оздоровлення, матеріальна допомога та підйомні -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🏥 Оздоровчі, Матеріальна допомога, Підйомні та виплати при пораненні</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Додаткові грошові гарантії військовослужбовця:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Грошова допомога на оздоровлення («Оздоровчі»):</strong> Виплачується один раз на рік у розмірі місячного грошового забезпечення при вибутті у щорічну основну відпустку (або за рапортом без вибуття у відпустку). Подається електронно через «Армія+».</li>
                    <li><strong>Матеріальна допомога для вирішення соціально-побутових питань:</strong> Виплачується один раз на рік у розмірі місячного ГЗ за наявності поважних підстав (поранення, важке захворювання військовослужбовця або членів родини, народження дитини, смерть близьких родичів, втрата майна внаслідок бойових дій).</li>
                    <li><strong>Підйомна допомога:</strong> Виплачується при переміщенні на нове місце військової служби в інший населений пункт у розмірі місячного ГЗ на військовослужбовця та 50% ГЗ на кожного члена сім'ї, який переїжджає разом із ним.</li>
                    <li><strong>Виплати при пораненні (контузії, травмі):</strong> Збереження 100% ГЗ за останньою посадою + додаткова винагорода 100 000 грн на місяць за весь час стаціонарного лікування у закладах охорони здоров'я (включаючи закордонне лікування) та під час відпустки за станом здоров'я.</li>
                </ul>
            </div>
        </details>
<!-- БЛОК 4: Затримки виплат, перевірка розрахункового листа та оскарження -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ Що робити у разі затримки або ненарахування виплат</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Покроковий алгоритм дій при виникненні заборгованості чи помилок у виплатах:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Отримання розрахункового листа:</strong> Звернися до фінансової служби частини для отримання письмової деталізації (розрахункової книжки/листа) нарахованого та виплаченого грошового забезпечення.</li>
                    <li><strong>Рапорт на командира частини:</strong> Подай рапорт про роз'яснення причин затримки або ненарахування додаткової винагороди (додавши копії бойових розпоряджень, виписок із наказу, довідки Додаток 5 за наявності).</li>
                    <li><strong>Звернення на Гарячу лінію МОУ (1512):</strong> У разі відсутності реакції або безпідставного затягування зареєструй офіційну скаргу на гарячу лінію Міністерства оборони України (телефон 1512 або 0 800 500 442) із зазначенням номера частини та прізвища командира.</li>
                    <li><strong>Звернення до Департаменту фінансів МОУ та Спеціалізованої прокуратури:</strong> Подача письмової скарги для проведення фінансової перевірки дій посадових осіб військової частини.</li>
                </ol>
            </div>
        </details>

    </div>
</div>
`;

// Реєстрація пошукового індексу для Розділу 4
window.hubsSearchIndex.push({ hubId: 'hub4', hubTitle: '4. Грошове забезпечення, виплати та винагороди', text: 'зарплата грошове забезпечення 100000 30000 50000 70000 оздоровчі матеріальна допомога підйомні IBAN затримка виплат скарга 1512 фінансова служба', snippet: 'Базове ГЗ, бойові виплати 30/50/100/70 тис., оздоровчі, матеріальна допомога, розслідування затримок.' });
// ==========================================
// РОЗДІЛ 5: ВІДПУСТКИ, ЗВІЛЬНЕННЯ ВІД ОБОВ'ЯЗКІВ ТА СІМЕЙНІ ОБСТАВИНИ
// ==========================================
window.hubsData['hub5'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🏖️ 5. Відпустки, звільнення від обов'язків та сімейні обставини</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Кожен військовослужбовець має законне право на відпочинок, відновлення сил та вирішення нагальних сімейних питань. У цьому Розділі зібрано чіткий перелік усіх видів відпусток, строки, порядок збереження грошового забезпечення, алгоритм подачі рапорту через "Армія+" та правила вибуття/повернення.»</p>
    </div>

    <!-- Правило одночасного перебування -->
    <div class="bg-tactical-card border border-tactical-gold p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
            <span>⚖️</span><span>ОСНОВНЕ ПРАВИЛО НАДАННЯ ВІДПУСТОК:</span>
        </h3>
        <p class="text-xs text-tactical-muted">Щорічна основна відпустка надається за умови одночасної відсутності <strong>не більше 30 відсотків</strong> загальної чисельності військовослужбовців певної категорії відповідного підрозділу.</p>
    </div>

    <div class="space-y-4">

        <!-- БЛОК 1: Щорічна основна відпустка -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🗓️ Щорічна основна відпустка (під час воєнного стану)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Основні умови та строки:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Тривалість:</strong> Надається тривалістю <strong>до 30 календарних днів</strong> на рік (може надаватися частинами протягом календарного року, за умови що основна безперервна частина становитиме не менше 15 календарних днів).</li>
                    <li><strong>Час на шлях:</strong> Додатково надається час, необхідний для проїзду в межах України до місця проведення відпустки і назад (але не більше 2 діб в один кінець).</li>
                    <li><strong>Збереження виплат:</strong> Під час щорічної основної відпустки зберігається 100% грошового забезпечення + надається право на отримання грошової допомоги на оздоровлення («оздоровчі»).</li>
                </ul>
            </div>
        </details>

        <!-- БЛОК 2: Відпустка за сімейними обставинами -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">👨‍👩‍👧‍👦 Відпустка за сімейними обставинами та з інших поважних причин</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Підстави та тривалість (до 10 календарних днів зі збереженням ГЗ):</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Укладення шлюбу:</strong> До 10 календарних днів.</li>
                    <li><strong>Тяжкий стан здоров'я або смерть близьких родичів:</strong> (Дружини/чоловіка, батьків, дітей, рідних братів/сестер) — до 10 календарних днів без урахування часу на проїзд.</li>
                    <li><strong>Народження дитини:</strong> Надається батькові для підтримки родини — до 10 календарних днів.</li>
                    <li><strong>Пожежа або стихійне лихо:</strong> Що спіткало сім’ю військовослужбовця — до 10 календарних днів.</li>
                </ul>
            </div>
        </details>
Розділ 5 - Частина 1 є
<!-- БЛОК 5: Покроковий алгоритм вибуття у відпустку та постановка на облік -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">✈️ Порядок вибуття, відмітка в ТЦК та СП і повернення з відпустки</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Чіткий алгоритм дій військовослужбовця:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Подача рапорту:</strong> Подай рапорт на відпустку через застосунок «Армія+» (або паперовий рапорт командиру) не пізніше ніж за 15 днів до запланованого початку (крім аварійних/термінових випадків). До рапорту додаються документи, що підтверджують підставу (довідка про стан здоров'я, свідоцтво про народження/смерть/шлюб тощо).</li>
                    <li><strong>Отримання Відпускного квитка (посвідчення):</strong> Переконайся, що у штабі частини тобі видано Наказ про відпустку та Відпускний квиток із зазначенням терміну відпустки, дати вибуття/повернення та адреси перебування.</li>
                    <li><strong>Обов'язкова постановка на облік у ТЦК та СП:</strong> Після прибуття до місця проведення відпустки ти зобов'язаний протягом **24 годин** прибути до найближчого ТЦК та СП (або органу місцевого самоврядування у сільській місцевості) і зробити відмітку про прибуття у відпускному квитку.</li>
                    <li><strong>Зняття з обліку перед виїздом:</strong> Перед поверненням до частини зроби відмітку про зняття з обліку в ТЦК та СП.</li>
                    <li><strong>Повернення до частини:</strong> Вчасно прибудь до розташування підрозділу та здай відпускний квиток із відмітками до штабу частини/черговому.</li>
                </ol>
            </div>
        </details>

    </div>
</div>
`;

// Реєстрація пошукового індексу для Розділу 5
window.hubsSearchIndex.push({ hubId: 'hub5', hubTitle: "5. Відпустки, звільнення від обов'язків та сімейні обставини", text: 'відпустка 30 днів сімейні обставини за станом здоровя ТЦК та СП відпускний квиток рапорт Армія+ оздоровчі звільнення від обов’язків 10 днів шлюб народження', snippet: 'Правила та види відпусток (щорічна, сімейна, за станом здоров’я), алгоритм ТЦК.' });
// ==========================================
// РОЗДІЛ 6: РЕЧОВЕ ТА МАТЕРІАЛЬНО-ТЕХНІЧНЕ ЗАБЕЗПЕЧЕННЯ, МАЙНО ТА СПИСАННЯ
// ==========================================
window.hubsData['hub6'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🎒 6. Речове та матеріально-технічне забезпечення, майно та списання</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Майно військовослужбовця — це його захист, автономність та боєздатність. У цьому Розділі викладено алгоритми отримання речового майна за нормами МОУ, порядок видачі речового атестата при переміщенні, розмежування особистого та інвентарного майна, а також чіткий юридичний порядок списання втраченого або знищеного в бою майна без фінансових нарахувань.»</p>
    </div>

    <!-- Застереження про майно та списання -->
    <div class="bg-tactical-card border border-tactical-gold p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
            <span>🛡️</span><span>ГОЛОВНЕ ПРАВИЛО ЩОДО БОЙОВИХ ВТРАТ МАЙНА:</span>
        </h3>
        <p class="text-xs text-tactical-muted">Майно, знищене або втрачене під час виконання бойових завдань (внаслідок ворожих обстрілів, при евакуації, бойових діях), <strong>НЕ ПІДЛЯГАЄ відшкодуванню за рахунок військовослужбовця</strong> за умови своєчасного подання рапорту та проведення службового розслідування (акта списання).</p>
    </div>

    <div class="space-y-4">

        <!-- БЛОК 1: Норми речового забезпечення та речовий атестат -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📦 Норми забезпечення та Речовий атестат</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Основні положення речового забезпечення:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Норма № 1 (Бойовий єдиний комплект — БЄК):</strong> Кожен військовослужбовець забезпечується предметами форми одягу, взуттям, засобами індивідуального захисту (шолом, бронежилет), спальними мішками, карематами та тактичним спорядженням згідно із затвердженими нормами МОУ.</li>
                    <li><strong>Речовий атестат:</strong> Основний документ, що підтверджує види та кількість отриманого майна. При переведенні до іншої військової частини обов’язково видається речовий атестат, підписаний начальником речової служби та скріплений печаткою частини.</li>
                    <li><strong>Майно особистого користування vs Інвентарне майно:</strong> Предмети особистого користування (білизна, взуття, літня/зимова форма) залишаються у власності військовослужбовця. Інвентарне майно (бронежилет, шолом, намети, спеціальне спорядження) підлягає здачі на склад частини при звільненні.</li>
                </ul>
            </div>
        </details>
<!-- БЛОК 2: Грошова компенсація за неотримане речове майно -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">💳 Грошова компенсація замість неотриманого речового майна</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>Військовослужбовці (окрім військовослужбовців строкової служби) мають право на отримання грошової компенсації замість предметів речового майна, що належать до видачі, але не були отримані під час проходження служби.</p>
                <p class="font-bold text-tactical-gold">🛠️ Порядок отримання компенсації:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Отримання довідки про вартість майна:</strong> Отримати у речовій службі частини Довідку про вартість речового майна, що належить до видачі (Додаток 2 до Порядку виплати компенсації).</li>
                    <li><strong>Подача рапорту через «Армія+»:</strong> Подати електронний рапорт (або паперовий рапорт) на ім'я командира частини про виплату грошової компенсації замість неотриманого майна.</li>
                    <li><strong>Виплата:</strong> Виплата здійснюється за місцем служби за рахунок коштів, передбачених на речове забезпечення.</li>
                </ol>
            </div>
        </details>

        <!-- БЛОК 3: Порядок списання майна, знищеного або втраченого в бою -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🔥 Алгоритм списання майна, втраченого / знищеного під час бойових дій</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Чітка процедура юридичного захисту від безпідставних утримань із ГЗ:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Негайне подання рапорту:</strong> Після завершення бойового завдання (або евакуації з поля бою/госпіталізації) військовослужбовець подає рапорт на ім'я командира підрозділу про втрату/знищення речового майна, зброї або спорядження із зазначенням конкретних обставин (обстріл, пожежа, прицільне влучання, евакуація без речей).</li>
                    <li><strong>Службове розслідування:</strong> Командир призначає службове розслідування (або розслідування проводиться у спрощеному порядку за Актом списання під час воєнного стану).</li>
                    <li><strong>Оформлення Акта списання:</strong> Комісія частини складає Акт якісного (технічного) стану або Акт списання майна, що підтверджує непридатність або фактичну втрату внаслідок бойових дій.</li>
                    <li><strong>Виключення з обліку:</strong> На підставі затвердженого акта майно списується з облікового обліку військовослужбовця без стягнення його вартості.</li>
                </ol>
            </div>
        </details>
<!-- БЛОК 4: Порядок списання майна, непридатного до подальшого використання (знос/пошкодження) -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🛠️ Списання майна за термінами носіння та природним зносом</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>Майно, термін експлуатації (носіння) якого закінчився, або яке стало непридатним через природне зношення в умовах бойової служби, підлягає комісійному огляду та списанню.</p>
                <p class="font-bold text-tactical-gold">Порядок заміни та списання:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Завершення терміну носіння:</strong> Після закінчення встановленого строку носіння предмета БЄК подається рапорт на заміну. Старе майно здається на склад або списується комісією згідно із затвердженими нормами.</li>
                    <li><strong>Передчасний знос через умови служби:</strong> Якщо майно стало непридатним до закінчення терміну носіння під час виконання завдань, складається Акт непридатності (якісного стану) за участю начпроча/начреч та комісії частини для видачі нового комплекту.</li>
                </ul>
            </div>
        </details>

    </div>
</div>
`;

// Реєстрація пошукового індексу для Розділу 6
window.hubsSearchIndex.push({ hubId: 'hub6', hubTitle: '6. Речове та матеріально-технічне забезпечення, майно та списання', text: 'речовий атестат БЄК норма 1 майно списання акт списання втрата в бою компенсація за майно інвентарне майно термін носіння знос', snippet: 'Норми БЄК, речовий атестат, компенсація за неотримане майно та акт списання бойових втрат.' });
// ==========================================
// РОЗДІЛ 7: ПРОХОДЖЕННЯ СЛУЖБИ, ПЕРЕВЕДЕННЯ, РАПОРТИ ТА СТАТУС УБД
// ==========================================
window.hubsData['hub7'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">📜 7. Проходження служби, переведення, рапорти та статус УБД</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Кожен етап військової служби супроводжується чіткими юридичними процедурами та документальним оформленням. У цьому Розділі зібрано вичерпний посібник із подання рапортів через застосунок "Армія+", алгоритм отримання статусу УБД, вичерпні підстави та маршрут переведення в іншу частину або підрозділ.»</p>
    </div>

    <!-- Застереження про строки розгляду рапортів -->
    <div class="bg-tactical-card border border-tactical-gold p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
            <span>⏱️</span><span>ЗАКОННІ СТРОКИ РОЗГЛЯДУ РАПОРТІВ:</span>
        </h3>
        <p class="text-xs text-tactical-muted">Згідно із законодавством та Положенням про порядок подання рапортів, паперові та електронні рапорти підлягають обов'язковій реєстрації та розгляду безпосереднім командиром протягом <strong>до 14 днів</strong> (а за невідкладними питаннями — <strong>негайно / до 48 годин</strong>).</p>
    </div>

    <div class="space-y-4">

        <!-- БЛОК 1: Подача рапортів та застосунок «Армія+» -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📲 Порядок подання та руху рапортів (Армія+ та паперові)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Пріоритет та стандарти подання рапорту:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Електронний рапорт через «Армія+»:</strong> Пріоритетний офіційний канал подачі рапортів. Електронний рапорт має юридичну силу паперового, присвоює унікальний ID-номер та унеможливлює "втрату" або безпідставне ігнорування документа.</li>
                    <li><strong>Паперовий рапорт:</strong> Подається у 2 примірниках безпосередньому командиру або через службу діловодства (стройову частину) з обов'язковою відміткою про реєстрацію (вхідний номер, дата, посада та підпис особи, яка прийняла рапорт) на другому примірнику.</li>
                    <li><strong>Оскарження бездіяльності:</strong> У разі порушення строків розгляду або безпідставної відмови військовослужбовець має право звернутися до вищого командування, ВСП або на Гарячу лінію МОУ (1512).</li>
                </ul>
            </div>
        </details>

        <!-- БЛОК 2: Отримання статусу УБД (Учасника бойових дій) -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🎖️ Алгоритм отримання статусу УБД та набір пільг</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Автоматизована та заявна процедура оформлення:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Оформлення через комісію частини (автоматично):</strong> Відповідальна особа військової частини зобов’язана у 30-денний термін після завершення виконання бойових завдань подати довідку про безпосередню участь (Додаток 6) та матеріали до відповідної комісії МОУ/ЗСУ.</li>
                    <li><strong>Самостійне подання заявок:</strong> Військовослужбовець може особисто подати заяву на комісію або через Портал Дія / Портал ветерана з додаванням Довідки Додаток 6.</li>
                    <li><strong>Ключові пільги УБД:</strong> 75% знижка на оплату житлово-комунальних послуг (ЖКП), безкоштовний проїзд у міському та міжміському транспорті, безоплатне медичне обслуговування, ліки за рецептами та щорічне обстеження, пільги на навчання дітей.</li>
                </ol>
            </div>
        </details>
<!-- БЛОК 3: Підстави та порядок переведення в іншу частину -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🔄 Переведення в іншу військову частину (Підстави та Алгоритм)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Законні підстави для переведення:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>За станом здоров'я:</strong> На підставі постанови ВЛК про непридатність до служби у певних родах військ або обмежену придатність.</li>
                    <li><strong>За сімейними обставинами:</strong> Потреба в догляді за близькими родичами (занаявності підтверджуючих документів та висновку МСЕК/ОФС чи соцзахисту).</li>
                    <li><strong>За службовою потребою / призначення на вищу посаду:</strong> За рішенням вищого командування.</li>
                    <li><strong>Спрощене переведення через «Армія+» (Постанова КМУ):</strong> Можливість змінити місце служби між бойовими частинами або з тилової частини до бойової без зайвих бюрократичних затримок.</li>
                </ul>
                <p class="font-bold text-tactical-gold">🛠️ Покроковий процес переведення:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Отримання Відношення:</strong> Отримати письму згоду (Відношення) від командира нової військової частини, який готовий прийняти вас на посаду.</li>
                    <li><strong>Подача рапорту:</strong> Подати рапорт на переведення через «Армія+» або письмово додавши Відношення, довідку ВЛК або документи про сімейні обставини.</li>
                    <li><strong>Прийняття рішення та Наказ:</strong> Видання наказу по особовому складу (по частині або вищому органу військового управління), виключення зі списків особистого складу, отримання припису та речового/грошового атестатів.</li>
                </ol>
            </div>
        </details>
<!-- БЛОК 4: Порядок виключення зі списків, здачі посади та прибуття на нове місце -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📝 Здача посади, виключення зі списків та прибуття до нової частини</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Фінальний юридичний маршрут при переведенні:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Здача справ та посади:</strong> Після видачі наказу про переведення військовослужбовець зобов'язаний здати справи та посаду (а також закріплене інвентарне майно, зброю та бронезахист) за Обхідним листом.</li>
                    <li><strong>Отримання документів у штабі:</strong> Отримати у стройовій частині та фінансово-речовій службі: Припис, Витяг із наказу про виключення зі списків особового складу, Речовий атестат, Атестат на продовольство та Розрахунковий лист.</li>
                    <li><strong>Прибуття до нової частини:</strong> У термін, зазначений у приписі (з урахуванням часу на проїзд), прибути до нової військової частини, пред'явити припис, подати рапорт про зарахування до списків особового складу та заступити до виконання обов'язків.</li>
                </ol>
            </div>
        </details>

    </div>
</div>
`;

// Реєстрація пошукового індексу для Розділу 7
window.hubsSearchIndex.push({ hubId: 'hub7', hubTitle: '7. Проходження служби, переведення, рапорти та статус УБД', text: 'переведення відношення Армія+ рапорт УБД статус УБД пільги УБД обхідний лист припис речовий атестат наказ 14 днів оскарження рапорту', snippet: 'Подача рапортів через Армія+, порядок отримання УБД та алгоритм переведення між частинами.' });
// ==========================================
// РОЗДІЛ 8: СІМ’Я, СТОСУНКИ, ДІТИ ТА РЕПРОДУКТИВНЕ ЗДОРОВ'Я
// ==========================================
window.hubsData['hub8'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">👨‍👩‍👧‍👦 8. Сім’я, стосунки, діти, родинний тил та репродуктивне здоров’я</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Міцний родинний тил — це запорука стійкості, спокою на службі та психологічного відновлення. У цьому Розділі зібрано практичні алгоритми збереження стосунків на відстані, прозорого розподілу сімейного бюджету, підтримки дітей, прав щодо догляду за хворими родичами та безоплатної кріоконсервації біоматеріалу.»</p>
    </div>

    <!-- Застереження про сімейний зв'язок -->
    <div class="bg-tactical-card border border-tactical-gold p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
            <span>💡</span><span>ГОЛОВНЕ ПРАВИЛО СТОСУНКІВ НА ВІДСТАНІ:</span>
        </h3>
        <p class="text-xs text-tactical-muted">Серйозні сімейні рішення та конфлікти не розв'язуються в стані втоми по телефону або у месенджерах. Довіра побудується через регулярні короткі ритуали зв'язку та прозорість у фінансах.</p>
    </div>

    <div class="space-y-4">

        <!-- БЛОК 1: Стосунки на відстані та сімейний бюджет -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">❤️ Стосунки на відстані та управління сімейним бюджетом</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Практичні кроки для збереження родини:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Розподіл сімейного бюджету:</strong> Розділіть кошти на 3 прозорі частини: 1) Обов'язкові сімейні витрати (діти, житло, харчування); 2) Фонд підрозділу/служби (спорядження, ремонт авто, медицина); 3) Особисті накопичення родини.</li>
                    <li><strong>Прозорість без тотального контролю:</strong> Узгодьте фіксовану суму для вільних витрат дружини/чоловіка без необхідності додаткового звітування.</li>
                    <li><strong>Якщо дружина/родина за кордоном:</strong> Підтримуйте спільні щоденні ритуали (короткі відеодзвінки за кавою), уникайте ідеалізації та завчасно попереджайте про відсутність зв'язку через наряди чи виходи.</li>
                </ul>
            </div>
        </details>

        <!-- БЛОК 2: Діти на відстані та підтримка -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧸 Підтримка дітей та збереження батьківського авторитету</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Рекомендації щодо спілкування з дітьми різних вікових груп:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Малюки (до 6 років):</strong> Потрібні візуальні та аудіосигнали — короткі відеоповідомлення, голосові казки на ніч, фотографії та регулярні короткі дзвінки.</li>
                    <li><strong>Школярі та підлітки:</strong> Цікавтеся їхнім життям і захопленнями, а не лише оцінками. Обговорюйте спільні плани на відпустку, залучайте до прийняття простих сімейних рішень.</li>
                    <li><strong>Пільги для дітей військовослужбовців:</strong> Першочергове зарахування до дитячих садків і шкіл, безкоштовне гаряче харчування у навчальних закладах, пільгове або безоплатне оздоровлення/відпочинок у дитячих таборах.</li>
                </ul>
            </div>
        </details>
<!-- БЛОК 3: Догляд за важкохворим родичем -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🏥 Важка хвороба близьких та догляд за родичем</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Пакет документів для рапорту на відпустку або звільнення:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Відпустка за сімейними обставинами:</strong> Надається тривалістю до 10 днів у разі тяжкого стану здоров'я близьких родичів (дружини/чоловіка, батьків, дітей, рідних братів/сестер).</li>
                    <li><strong>Підтверджувальні документи:</strong> Медична довідка (висновок ЛКК або МСЕК про потребу в сторонньому догляді / важкий стан), документ про родинний зв'язок (свідоцтво про народження/шлюб).</li>
                    <li><strong>Право на звільнення за сімейними обставинами:</strong> У разі необхідності здійснення постійного догляду за хворою дружиною (чоловіком), дитиною, а також своїми батьками чи батьками дружини (чоловіка) за наявності відповідного висновку МСЕК або ЛКК.</li>
                </ul>
            </div>
        </details>

        <!-- БЛОК 4: Репродуктивне здоров'я та безоплатна кріоконсервація -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧬 Репродуктивне здоров'я та безоплатна кріоконсервація біоматеріалу</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Державна програма збереження репродуктивного потенціалу воїнів:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Право на безоплатну процедуру:</strong> Кожен військовослужбовець має право на безоплатний забір, кріоконсервацію та зберігання репродуктивних клітин у законтрактованих медичних закладах за рахунок держави.</li>
                    <li><strong>Покроковий алгоритм:</strong> 1) Отримати Довідку про проходження військової служби (через «Армія+» або у штабі); 2) Звернутися до цивільної або військової клініки, що бере участь у державній програмі; 3) Підписати договір та оформити юридичні розпорядження щодо використання біоматеріалу.</li>
                    <li><strong>Інтимне та психологічне відновлення:</strong> Поради щодо подолання бар'єрів після повернення з зони бойових дій, адаптації до цивільного життя та нормалізації стосунків без сорому.</li>
                </ul>
            </div>
        </details>
<!-- БЛОК 5: Інструкція для рідних у разі втрати зв'язку з військовослужбовцем -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚨 Покрокова інструкція для рідних, якщо з воїном втрачено зв'язок</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Чіткий алгоритм перших дій родини:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Не панікувати та зберігати інформаційну тишу:</strong> Відсутність зв'язку до 2-3 діб на бойових позиціях є нормою. Не публікуйте у соцмережах фото у формі, номер частини, посаду чи геопозицію.</li>
                    <li><strong>Зв'язок із контактами частини:</strong> Зверніться до заступника командира з МПЗ, командира роти/батальйону, гарячої лінії бригади або побратимів, чиї номери було заздалегідь збережено.</li>
                    <li><strong>Офіційне звернення (після 3+ днів відсутності зв'язку):</strong> Зверніться до ТЦК та СП за місцем призову для уточнення офіційного статусу (чи є Сповіщення про зникнення безвісти / полон).</li>
                    <li><strong>Подача заяви до Національної поліції:</strong> Подайте заяву про розшук особи, зниклої безвісти за особливих обставин, отримайте витяг з ЕРДР та здайте біологічні зразки ДНК.</li>
                </ol>
            </div>
        </details>

    </div>
</div>
`;

// Реєстрація пошукового індексу для Розділу 8
window.hubsSearchIndex.push({ hubId: 'hub8', hubTitle: '8. Сім’я, стосунки, діти, родинний тил та репродуктивне здоров’я', text: 'сім’я стосунки діти пільги дітям бюджет кріоконсервація біоматеріал догляд за родичем ЛКК МСЕК втрачено зв’язок розшук ДНК', snippet: 'Підтримка родини, пільги для дітей, безоплатна кріоконсервація та інструкція для рідних при втраті зв’язку.' });
// ==========================================
// РОЗДІЛ 9: КУТОЧОК СЕРЖАНТА (ШПОРИ, ЧЕК-ЛИСТИ, СТАТУТНІ ВАЖЕЛІ)
// ==========================================
window.hubsData['hub9'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🎖️ 9. Куточок сержанта (Шпори, чек-листи, статутні важелі та підтримка підрозділу)</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Сержант — це хребет армії, перший бар'єр психологічної підтримки, лідер дисципліни та головний запобіжник СЗЧ, алкоголізму чи суїциду в підрозділі. Боєць із бідою та претензією приходить до сержанта. Тут зібрано практичні "шпори", алгоритми розмов, чек-листи та законні статутні важелі ЗСУ для підтримки порядків без самоуправства й крику.»</p>
    </div>

    <!-- Головне правило сержанта -->
    <div class="bg-tactical-card border border-tactical-gold p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
            <span>🛡️</span><span>ГОЛОВНИЙ ПРИНЦИП СЕРЖАНТСЬКОГО КОРПУСУ:</span>
        </h3>
        <p class="text-xs text-tactical-muted">«Слідуй за мною, роби як я». Сержант відповідає не лише за виконання наказу та чисту зброю, а й за морально-психологічний стан та дисципліну підлеглих. Виявлена на ранній стадії проблема бійця — це збережене життя і відсутність СЗЧ у вашому розрахунку чи відділенні.</p>
    </div>

    <div class="space-y-4">

        <!-- БЛОК 1: Сержант як перший бар'єр підтримки -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🔰 Сержант як перший бар'єр: Нова роль сержантського корпусу ЗСУ</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Чому саме сержант — головний запобіжник криз у підрозділі:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Довіра "землі":</strong> Боєць побоюється офіцерської догани чи ВСП, але із сержантом він ділить побут, наряди, службу та цигарку.</li>
                    <li><strong>Раннє виявлення:</strong> Командир батальйону чи психолог бачать бійця тільки на шикуванні або у зведеннях. Сержант помічає зміни в поведінці в перші ж години.</li>
                    <li><strong>Використання ресурсу:</strong> Коли боєць питає про рапорт, відпустку, сімейну біду, гроші чи ВЛК — відкрий відповідний ХАБ і дай йому готову відповідь.</li>
                </ul>
            </div>
        </details>

        <!-- БЛОК 2: Статутні важелі дисципліни за Статутами ЗСУ -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📖 Статутні важелі сержанта: Законні правила дисципліни та Дисциплінарний статут</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Головні обов'язки та дисциплінарна влада (Дисциплінарний статут ЗСУ):</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Навчати та вимагати:</strong> Дотримання військової дисципліни, правильного носіння форми, збереження зброї й майна. Сердитися й кричати — означає розписуватися у власній безпорадності.</li>
                    <li><strong>Знати своїх людей:</strong> Прізвище, ім'я, сімейний стан, ділові та морально-психологічні якості, індивідуальні особливості бійця.</li>
                    <li><strong>Дисциплінарна влада:</strong> Права командира відділення та головного сержанта щодо оголошення подяки, накладення стягнень та подачі клопотань командиру взводу/роти.</li>
                </ul>
            </div>
        </details>
<!-- БЛОК 3: Чек-лист кризи бійця (5 маркерів небезпеки) -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚠️ Чек-лист кризи бійця: 5 небезпечних маркерів (СЗЧ, суїцид, ПАР, борги, вигорання)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Сигнали тривоги, які сержант має виявити негайно:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>1. Маркери СЗЧ:</strong> Постійні розмови про безвихідність, накопичення боргових зобов'язань, нехтування службовими обов'язками, раптові розпродажі особистого майна чи збір речей.</li>
                    <li><strong>2. Маркери суїцидального ризику:</strong> Фрази типу «все одно всім байдуже», «скоро це все закінчиться», віддачі особистих дорогих речей побратимам, повна ізоляція та втрата інтересу до їжі/безпеки.</li>
                    <li><strong>3. Вживання алкоголю / ПАР:</strong> Поява запаху під час чергувань, різкі перепади настрою, агресія або тупор, втрата координації чи наявність сторонніх речовин у бліндажі.</li>
                    <li><strong>4. Фінансові та онлайн-борги:</strong> Постійне прохання позичити гроші у побратимів, часті дзвінки від колекторів/банків, гра в онлайн-казино під час відпочинку.</li>
                    <li><strong>5. Емоційне вигорання та тупор:</strong> «Скляні очі», відсутність реакцій на команди, постійне безсоння або байдужість до власної гігієни та безпеки.</li>
                </ul>
            </div>
        </details>

        <!-- БЛОК 4: Алгоритм розмови «один на один» -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">💬 Алгоритм розмови «один на один»: Без статутного тиску та крику</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Як проводити бесіду з бійцем у кризовому стані:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Вибір місця і часу:</strong> Проводь розмову віч-на-віч, без свідків та сторонніх бійців, у спокійній обстановці за чашкою чаю/кави чи під час спільного перекуру.</li>
                    <li><strong>Конкретні спостереження замість звинувачень:</strong> Не кажи «Ти став розгільдяєм», а викоритовуй факти: «Я бачу, що ти останні два дні закрився і не їси. Що відбувається?».</li>
                    <li><strong>Вислухай без знецінення:</strong> Не перебивай фразками «Усіх накриває», «Терпи, ти ж мужик». Дай бійцю виговоритися та озвучити реальну проблему.</li>
                    <li><strong>Запропонуй алгоритм із ХАБів:</strong> Знайдіть разом потрібне рішення в ХАБах (рапорт на відпустку, консультація психолога, алгоритм реструктуризації кредиту тощо).</li>
                </ol>
            </div>
        </details>
<!-- БЛОК 5: Профілактика конфліктів та шпора швидкої реакції -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚨 Шпора швидкої реакції: Профілактика СЗЧ, конфліктів та алкоголю</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Чіткий алгоритм дій сержанта у гострій ситуації:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Алкогольне / наркотичне сп'яніння на позиції:</strong> Негайно вилучити зброю та набійники! Відсторонити від виконання бойового завдання чи чергування, перемістити у безпечне місце під нагляд, після витвереження — оформити Акт та пройти освідування.</li>
                    <li><strong>Загроза СЗЧ (Боєць збирає речі):</strong> Заблокувати вихід з території, провести розмову віч-на-віч, з'ясувати причину (гостра сімейна біда / конфлікт) та негайно повідомити командира взводу/роти для надання короткої відпустки чи вирішення проблеми за законом.</li>
                    <li><strong>Гострий конфлікт між бійцями:</strong> Розвести сторони фізично в різні приміщення/бліндажі, вилучити зброю до охолодження емоцій, провести окремі бесіди з кожним та призначити на різні пости/зміни.</li>
                </ul>
            </div>
        </details>

    </div>
</div>
`;

// Реєстрація пошукового індексу для Розділу 9
window.hubsSearchIndex.push({ hubId: 'hub9', hubTitle: '9. Куточок сержанта (Шпори, чек-листи, статутні важелі та підтримка підрозділу)', text: 'куточок сержанта сержант шпора чек лист СЗЧ суїцид алкоголь ПАР Дисциплінарний статут розмова один на один профілактика вилучення зброї', snippet: 'Практичні шпори та чек-листи для сержантів: запобігання СЗЧ, статутні важелі та розмова віч-на-віч.' });
// ==========================================
// РОЗДІЛ 10: КОНТАКТИ ТА ГАРЯЧІ ЛІНІЇ
// ==========================================
window.hubsData['hub10'] = `
<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">📞 10. Контакти, гарячі лінії, юридична допомога та зв'язок</h1>
        <p class="text-tactical-muted text-sm font-semibold">«ЗНАЙ, КУДИ ЗВЕРТАТИСЯ: Якщо твоє питання не вирішується всередині підрозділу, або ти стикнувся з порушенням прав, бюрократичним тупиком чи гострою психологічною кризою — нижче зібрано перевірені державні, армійські та громадські канали допомоги.»</p>
    </div>

    <!-- Застереження про субординацію -->
    <div class="bg-tactical-card border border-tactical-gold p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base flex items-center space-x-2">
            <span>🛡️</span><span>ПРАВИЛО ЗВЕРНЕННЯ НА ГАРЯЧІ ЛІНІЇ:</span>
        </h3>
        <p class="text-xs text-tactical-muted">Перш ніж телефонувати на гарячі лінії вищого командування або Міністерства оборони України, переконайся, що ти пройшов первинний ланцюжок субординації (безпосередній командир → командир роти/батальйону → Замполіт / Кабінет ППП частини). Зберігай дати та вхідні номери поданих рапортів!</p>
    </div>

    <div class="space-y-4">

        <!-- БЛОК 1: Офіційні армійські лінії захисту прав (МОУ, ТрО, ВСП, Омбудсман) -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🏛️ Захист прав, скарги та Уповноважені (МОУ, Сил ТрО, Омбудсман, ВСП)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Прямі канали зв'язку для розв'язання конфліктів та оскарження порушень:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Гаряча лінія Міністерства оборони України (МОУ):</strong> <span class="font-bold text-tactical-gold">1512</span> (безкоштовно з мобільних) або <span class="font-bold text-tactical-gold">0 800 500 442</span>. Призначення: питання виплат, ВЛК, затримок документів, невиконання рапортів.</li>
                    <li><strong>Гаряча лінія Командування Сил територіальної оборони ЗСУ:</strong> <span class="font-bold text-tactical-gold">0 800 507 028</span>. Призначення: прямий канал зв'язку для бійців Сил ТрО за напрямками проходження службы, забезпечення та виплат.</li>
                    <li><strong>Військова служба правопорядку (ВСП) у ЗСУ:</strong> <span class="font-bold text-tactical-gold">044 456 41 28</span> (Центральне управління). Призначення: протиправні дії, перевищення повноважень, злочини, захист прав військовослужбовців.</li>
                    <li><strong>Уповноважений Верховної Ради з прав людини (Омбудсман):</strong> <span class="font-bold text-tactical-gold">0 800 501 720</span>. Призначення: грубі порушення конституційних прав, ненадання медичної допомоги, порушення умов утримання чи лікування.</li>
                </ul>
            </div>
        </details>
<!-- БЛОК 2: Психологічна допомога та кризові лінії 24/7 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧠 Психологічна допомога та цілодобові кризові лінії</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Анонімна, безоплатна та цілодобова психологічна підтримка:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Гаряча лінія психологічної підтримки ЗСУ:</strong> <span class="font-bold text-tactical-gold">0 800 500 410</span> (анонімно, безкоштовно 24/7). Призначення: гострий стрес, панічні атаки, вигорання, думки про СЗЧ чи суїцид.</li>
                    <li><strong>Лінія запобігання суїцидам "Lifeline Ukraine":</strong> <span class="font-bold text-tactical-gold">7333</span>. Цілодобова кризова підтримка для ветеранів, військовослужбовців та їхніх родичів.</li>
                    <li><strong>Центр психологічної підтримки МОУ:</strong> Звернення через Кабінет ППП частини або безпосередньо через гарячу лінію 1512.</li>
                </ul>
            </div>
        </details>

        <!-- БЛОК 3: Юридична допомога та безоплатна правнича допомога -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ Безоплатна правнича допомога та юридичні консультації</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Отримання професійного юридичного супроводу:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Система безоплатної правничої допомоги (БПД) Мін'юсту:</strong> <span class="font-bold text-tactical-gold">0 800 213 103</span>. Військовослужбовці та УБД мають право на безоплатне складання рапортів, позовних заяв та адвокатський захист.</li>
                    <li><strong>Юридична служба ГО "Юридична Сотня":</strong> <span class="font-bold text-tactical-gold">0 800 308 100</span>. Консультації щодо виплат, ВЛК, звільнення та пільг.</li>
                </ul>
            </div>
        </details>

        <!-- БЛОК 4: Пошук зниклих безвісти, полонені та зв'язок для рідних -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🔍 Пошук зниклих безвісти, полонені та координаційні штаби</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">Офіційні органи з питань розшуку та обміну:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Координаційний штаб з питань поводження з військовополоненими:</strong> <span class="font-bold text-tactical-gold">0 800 300 529</span> або <span class="font-bold text-tactical-gold">044 390 11 58</span>. Юридична та соціальна підтримка родин полонених і зниклих безвісти.</li>
                    <li><strong>Уповноважений з питань осіб, зниклих безвісти за особливих обставин:</strong> <span class="font-bold text-tactical-gold">1698</span> або гаряча лінія МВС <span class="font-bold text-tactical-gold">0 800 103 333</span>.</li>
                    <li><strong>Об'єднаний центр з координації пошуку та звільнення полонених при СБУ:</strong> <span class="font-bold text-tactical-gold">+38 067 650 83 32</span>, <span class="font-bold text-tactical-gold">+38 098 087 36 01</span>.</li>
                </ul>
            </div>
        </details>

    </div>
</div>
`;

// Реєстрація пошукового індексу для Розділу 10
window.hubsSearchIndex.push({ hubId: 'hub10', hubTitle: '10. Контакти, гарячі лінії, юридична допомога та зв’язок', text: 'контакти гарячі лінії МОУ 1512 ТрО ВСП Омбудсман психолог 7333 0800500410 БПД Юридична сотня полонені розшук Координаційний штаб СБУ 1698', snippet: 'Телефони гарячих ліній МОУ, ВСП, психологічної допомоги 24/7, безоплатної правничої допомоги та органів пошуку зниклих.' });
