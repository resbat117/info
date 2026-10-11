window.hubsData = window.hubsData || {};
window.hubsSearchIndex = window.hubsSearchIndex || [];

window.hubsData['hub1'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🚪 1. Я тільки прибув (або прикомандирований) у частину</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Це простір для кожного з нас. Тут немає дурних запитань чи "неважливих" проблем. Обирай свій випадок та отримуй чіткий, зрозумілий алгоритм дій.»</p>
    </div>

    <!-- Застереження / Правила супроводу -->
    <div class="bg-tactical-card border-2 border-tactical-alert p-5 rounded-lg space-y-2 text-white">
        <h3 class="font-bold text-base flex items-center space-x-2 text-tactical-gold">
            <span>⛔</span><span>ГОЛОВНЕ ПРАВИЛО:</span>
        </h3>
        <p class="text-sm font-semibold">Новоприбулому військовослужбовцю суворо заборонено самостійно пересуватися по Штабу частини, Медичному пункту, службах та інших підрозділах. Усі обходи здійснюються виключно у супроводі безпосереднього командира або призначеного сержанта.</p>
    </div>

    <!-- Рольовий режим -->
    <div class="bg-tactical-card border border-tactical-border p-5 rounded-lg space-y-4">
        <p class="text-sm font-bold text-tactical-gold mb-2">📌 ОБЕРИ СВІЙ РОЛЬОВИЙ РЕЖИМ:</p>
        <div class="space-y-3">
            <details class="bg-tactical-bg border border-tactical-border rounded p-4" open>
                <summary class="font-bold text-tactical-gold cursor-pointer">👤 Інструкція для Новоприбулого (Що робиш ти)</summary>
                <p class="mt-2 text-sm text-tactical-muted">Твоє завдання — надати документи, згенерувати банківські реквізити, заповнити анкети, пройти онлайн-тест «Адаптивність-200» та пересуватися по частині тільки поруч із командиром.</p>
            </details>

            <details class="bg-tactical-bg border border-tactical-border rounded p-4">
                <summary class="font-bold text-tactical-gold cursor-pointer">🪖 Інструкція для Командира / Приймаючої сторони (Що робиш ти)</summary>
                <p class="mt-2 text-sm text-tactical-muted">Твоє завдання — перевірити оригінали, зробити копії, проінструктувати щодо анкет, забрати соц-дем анкету в архів, доповісти ППП про тест, особисто провести бійця по службових інструктажах та передати папку в Штаб.</p>
            </details>
        </div>
    </div>

    <!-- Маршрутна карта прибуття -->
    <div class="bg-tactical-card border border-tactical-border p-5 rounded-lg space-y-4">
        <h2 class="text-lg font-bold text-tactical-gold">📋 МАРШРУТНА КАРТА ПРИБУТТЯ (ПОКРОКОВИЙ ЧЕК-ЛИСТ)</h2>

        <!-- Етап 1 -->
        <details class="bg-tactical-bg border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📍 ЕТАП 1: Документи та первинна ідентифікація</summary>
            <div class="mt-3 space-y-2 text-sm text-tactical-muted">
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>1.1 (БІЄЦЬ):</strong> Надати оригінали основних документів (Паспорт/ID, ІПН, Військовий квиток, Припис, Витяг з наказу, 4 атестати).</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>1.2 (БІЄЦЬ):</strong> Надати додаткові оригінали за наявності (УБД, посвідчення водія, ВЛК, Форма 6, свідоцтва про шлюб/дітей).</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>1.3 (КОМАНДИР):</strong> Звірити оригінали, перевірити підстави зарахування та 4 атестати.</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>1.4 (КОМАНДИР):</strong> Зафіксувати наявність чи відсутність УБД, ВЛК, водійського посвідчення, Форми 6.</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>1.5 (КОМАНДИР):</strong> Зробити повний комплект якісних копій усіх документів бійця.</span>
                </label>
            </div>
        </details>

        <!-- Етап 2 -->
        <details class="bg-tactical-bg border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📍 ЕТАП 2: Електронні реєстри, банківські деталі та зв'язок</summary>
            <div class="mt-3 space-y-2 text-sm text-tactical-muted">
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>2.1 (БІЄЦЬ):</strong> Згенерувати в банківському застосунку довідку з реквізитами рахунку (IBAN) для ЗП.</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>2.2 (БІЄЦЬ):</strong> Підписати довідку від руки: «Реквізити вірні. [Дата], [Підпис], [ПІБ]».</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>2.3 (БІЄЦЬ):</strong> За потреби сформувати витяг про прописку з додатка «Дія».</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>2.4 (БІЄЦЬ):</strong> Записати у телефон номери телефонів вертикалі командування (командир відділення, взводу, роти, сержант з МТЗ).</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>2.5 (БІЄЦЬ):</strong> Перевірити наявність при собі списку особистих речей першої потреби (спальник, гігієна, білизна).</span>
                </label>
            </div>
        </details>

        <!-- Етап 3 -->
        <details class="bg-tactical-bg border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📍 ЕТАП 3: Заповнення анкет та проходження тестування</summary>
            <div class="mt-3 space-y-2 text-sm text-tactical-muted">
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>3.1 (КОМАНДИР):</strong> Проінструктувати бійця щодо правил заповнення Анкети для Штабу та Соціально-демографічної анкети.</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>3.2 (БІЄЦЬ):</strong> Заповнити Анкету для Штабу [<a href="./files/anketa_prybulykh.docx" download class="font-bold text-tactical-gold underline hover:opacity-80">Завантажити Анкету для Штабу</a>] та Соціально-демографічну анкету підрозділу [<a href="./files/kartka_soc_dem.docx" download class="font-bold text-tactical-gold underline hover:opacity-80">Завантажити Соціально-демографічну анкету</a>].</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>3.3 (БІЄЦЬ):</strong> Олівцем на звороті Анкети Штабу зробити примітки щодо жетона (є/немає, номер) та складання ДНК (є/немає, де і коли).</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>3.4 (БІЄЦЬ):</strong> Пройти онлайн-тест «Адаптивність-200» [<a href="https://docs.google.com/forms/d/e/1FAIpQLSc3IjFQJDaUCzULP5wQAyYI0B90mLfOf9oZGSkS8Y7y_RsQUA/viewform" target="_blank" class="font-bold text-tactical-gold underline hover:opacity-80">Клацни тут, щоб відкрити тест</a>].</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>3.5 (КОМАНДИР):</strong> Доповісти підрозділу ППП (Психологічна підтримка персоналу) про успішне проходження бійцем тесту «Адаптивність-200».</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>3.6 (КОМАНДИР):</strong> Забрати заповнену Соціально-демографічну анкету та помістити її в архів підрозділу.</span>
                </label>
            </div>
        </details>

        <!-- Етап 4 -->
        <details class="bg-tactical-bg border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📍 ЕТАП 4: Організований обхід служб (Виключно у супроводі командира)</summary>
            <div class="mt-3 space-y-2 text-sm text-tactical-muted">
                <div class="font-semibold text-tactical-gold">4.1 (СУПРОВІД): Пройти інструктажі:</div>
                <div class="pl-4 space-y-1">
                    <label class="flex items-start space-x-2 cursor-pointer">
                        <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                        <span>З техніки безпеки</span>
                    </label>
                    <label class="flex items-start space-x-2 cursor-pointer">
                        <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                        <span>З пожежної безпеки</span>
                    </label>
                    <label class="flex items-start space-x-2 cursor-pointer">
                        <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                        <span>З антикорупції та доброчесності</span>
                    </label>
                </div>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>4.2 (СУПРОВІД):</strong> Відвідати відповідального за напрямок УБД.</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>4.3 (СУПРОВІД):</strong> Відвідати Медичний пункт для первинного огляду та відмітки.</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>4.4 (СУПРОВІД):</strong> Відвідати підрозділ ППП (психолог / соціальний супровід / рівні права та гендерний радник).</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>4.5 (КОМАНДИР):</strong> Перевірити наявність усіх підписів та відміток в Анкеті Штабу.</span>
                </label>
            </div>
        </details>

        <!-- Етап 5 -->
        <details class="bg-tactical-bg border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📍 ЕТАП 5: Фінальне оформлення в Штабі</summary>
            <div class="mt-3 space-y-2 text-sm text-tactical-muted">
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>5.1 (КОМАНДИР):</strong> Сформувати папку документів (оригінали, копії, атестати, банківські реквізити, обхідна анкета з підписами).</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>5.2 (КОМАНДИР):</strong> Особисто разом із бійцем здати сформовану папку в Штаб частини.</span>
                </label>
            </div>
        </details>

        <!-- Етап 6 -->
        <details class="bg-tactical-bg border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📍 ЕТАП 6: Матеріальне забезпечення (МТЗ), побут та адаптація/карантин</summary>
            <div class="mt-3 space-y-2 text-sm text-tactical-muted">
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>6.1 (КОМАНДИР):</strong> Провести бійця до сержанта з МТЗ / старшини роти для перевірки/видачі речового майна та інвентарю.</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>6.2 (КОМАНДИР/БІЄЦЬ):</strong> У разі відсутності спальника, гігієнічних засобів чи елементів форми — оформити заявку на видачу.</span>
                </label>
                <label class="flex items-start space-x-2 cursor-pointer">
                    <input type="checkbox" class="mt-1 rounded bg-tactical-bg border-tactical-border text-tactical-gold">
                    <span><strong>6.3 (КОМАНДИР):</strong> Розмістити військовослужбовця в розташуванні підрозділу та довести розпорядок дня.</span>
                </label>
                <div class="font-semibold text-tactical-gold mt-2">6.4 (КОМАНДИР): Ознайомити бійця з режимом первинної адаптації / карантину на перший тиждень (або більше за рішенням командира):</div>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Обмеження самостійного виходу за територію.</li>
                    <li>Первинний контроль психологічного стану та фізичного самопочуття.</li>
                    <li>Входження у службовий ритм, вивчення обов'язків та закріпленої зброї/майна.</li>
                </ul>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub1', hubTitle: '1. Я тільки прибув (або прикомандирований) у частину', text: 'Я тільки прибув прикомандирований у частину документи ідентифікація реквізити IBAN звʼязок анкети Адаптивність-200 обхід служб Штаб Медпункт ППП фінальне оформлення МТЗ побут карантин', snippet: 'Чек-лист прибуття у частину, документи, обхід служб, атестати, психологічний тест.' });

window.hubsData['hub2'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🚨 2. Я захворів / Поранення / Потрібно на ВЛК</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Тут зібрано залізобетонні, вивірені алгоритми для захисту твого здоров’я та прав. Від дій при травмуванні під час звільнення, хворобі у відпустці, хронічному болю та розладах сну — до первинного звернення в медпункт частини, планової діагностики, Бойового Поранення vs Травми під час служби, ВЛК, ОФС, безкоштовного протезування, відпустки за станом здоров'я та списання аптечки.»</p>
    </div>

    <div class="space-y-4">
        <!-- 1. Травма при звільненні -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚨 1. Травма при звільненні / Зупинення виключення з в/ч</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ЗАЛІЗНЕ ПРАВИЛО: Доки тебе офіційно НЕ виключено зі списків особового складу військової частини (не видано наказ про виключення та не видано розрахунок), ти є ДІЙСНИМ військовослужбовцем. Виключення зі списків в/ч під час стаціонарного лікування є ПРЯМИМ ПОРУШЕННЯМ ЗАКОНУ!»</p>
                
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
                    <li><strong>Фіксація до покидання частини:</strong> Якщо травма сталася на території в/ч або під здачі майна/документів — негайно повідом чергового частини, викликай швидку (103) або звернися до медпункту ДО того, як остаточно покинути територію підрозділу.</li>
                    <li><strong>Обов'язковий токсикологічний аналіз:</strong> Вимагай проведення освідчення на стан сп'яніння. Отримай довідку про 0.0 проміле (це унеможливить спроби частини списати травму на побутовий алкоголізм).</li>
                    <li><strong>Сповіщення в/ч із госпіталю:</strong> Лікуючий лікар госпіталю надсилає сповіщення про твою стаціонарну госпіталізацію до військової частини. Командир в/ч зобов'язаний протягом 24 годин видати наказ про призупинення процедури виключення зі списків особового складу на весь період лікування.</li>
                    <li><strong>Службове розслідування:</strong> Командир призначає розслідування (триває до 15 днів). За його результатами видається Акт розслідування та Довідка про обставини травми (Додаток 5).</li>
                    <li><strong>Проходження ВЛК:</strong> Після лікування пройди ВЛК для визначення ступеня придатності. Якщо травма призвела до ускладнень — ВЛК переглядає висновок і звільнення переоформлюється за статтею «За станом здоров'я».</li>
                </ol>

                <p class="text-xs"><strong>⏱️ Строки:</strong> Сповіщення в/ч — протягом 24 годин. Службове розслідування — до 15 днів. Виключення з в/ч блокується на весь термін лікарняного/госпіталізації.</p>
                <p class="text-xs"><strong>📍 Куди звертатися:</strong> Черговий частини, Намед, Воєнна служба правопорядку (ВСП), Гаряча лінія МОУ (1512), Військова прокуратура.</p>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">⚠️ Підводні камені:</p>
                    <p>• <strong>Спроба виключити «заднім числом»:</strong> Частина може спробувати дати наказ про виключення зі списків строком до дати травми. Це незаконно! Негайно подавай скаргу до ВСП та Військової прокуратури.</p>
                    <p>• <strong>Тиск щодо «побутової травми»:</strong> Не підписуйся під поясненнями, що ти травмувався вдома або в закладі відпочинку. Якщо травма отримана під час здачі справ чи перебування у в/ч — це травма при виконанні обов'язків військової служби.</p>
                </div>
            </div>
        </details>

        <!-- 2. Захворів під час відпустки -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🏖️ 2. Захворів під час відпустки або відрядження</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«КРИТИЧНА СИТУАЦІЯ: Хвороба у відпустці — це головна пастка, через яку бійці ненавмисно потрапляють під статті СЗЧ (самовільне залишення частини). Просте перебування на цивільному лікарняному БЕЗ обов'язкового повідомлення ТЦК та ВЛК НЕ вважається поважною причиною для запізнення з відпустки!»</p>

                <p class="font-bold text-tactical-gold">🎯 Мета / Вигода:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Офіційне та легальне продовження відпустки на кількість днів хвороби (або надання відпустки за станом здоров'я).</li>
                    <li>Отримання безоплатної медичної допомоги у цивільному або військовому закладі за місцем проживання/перебування.</li>
                    <li>Повний захист від звинувачень у СЗЧ та збереження 100% грошового забезпечення.</li>
                </ul>

                <p class="font-bold text-tactical-gold">🛠️ Алгоритм дій:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>КРОК 1. Негайне звернення до медичного закладу:</strong> Звернися до найближчого державного чи комунального закладу охорони здоров'я (або військового госпіталю). Отримай офіційний огляд лікаря, що засвідчує непрацездатність, та відкритий Листок непрацездатності (лікарняний) / медичну довідку.</li>
                    <li><strong>КРОК 2. Обов'язкове сповіщення ТЦК та СП (ПРОТЯГОМ 24 ГОДИН):</strong> Звернися (особисто або через рідних/представника) до найближчого ТЦК та СП за місцем перебування. Надай довідку з лікарні. ТЦК реєструє твою хворобу та ставить відповідну примітку у твоєму відпускному квитку.</li>
                    <li><strong>КРОК 3. Сповіщення командира в/ч через «Армія+»:</strong> Відкрий застосунок «Армія+» → Розділ «Рапорти» → Обери «Рапорт про погіршення стану здоров'я / хворобу під час відпустки». Додай фото лікарняного листа та довідки з ТЦК.</li>
                    <li><strong>КРОК 4. Проходження ВЛК за направленням ТЦК (при тривалій хворобі):</strong> Якщо хвороба триває понад 10–14 днів або потребує стаціонарного лікування, ТЦК та СП за місцем перебування видає тебе Направлення на ВЛК при найближчому військово-медичному закладі для винесення постанови про потребу у відпустці за станом здоров'я.</li>
                    <li><strong>КРОК 5. Повернення до частини та закриття відпустки:</strong> Після одужання обов'язково з'явися до ТЦК та СП для отримання штампа про вибуття, прибудь до частини та надай командиру Довідку ВЛК / закритий лікарняний разом із відпускним квитком.</li>
                </ol>

                <p class="text-xs"><strong>⏱️ Строки:</strong> Повідомлення ТЦК та командира в/ч — СУВОРО протягом 24 годин від початку хвороби. Продовження відпустки — на кількість днів, вказаних у Постанові ВЛК / офіційному рішенні ТЦК.</p>
                <p class="text-xs"><strong>📍 Куди звертатися:</strong> Цивільна лікарня / госпіталь, найближчий ТЦК та СП, застосунок «Армія+».</p>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">⚠️ Підводні камені:</p>
                    <p>• <strong>Самолікування вдома без штампа ТЦК:</strong> Поширена помилка — пролежати вдома з температурою, отримати довідку від сімейного лікаря і приїхати у частину на 5 днів пізніше. Без реєстрації в ТЦК та СП протягом 24 годин військова частина НЕ ВРАХУЄ цивільний лікарняний і подасть матеріали у ВСП за СЗЧ!</p>
                    <p>• <strong>Приватні клініки:</strong> Довідки з приватних медичних центрів вимагають обов'язкового підтвердження та завірення у державному закладі чи ВЛК ТЦК та СП.</p>
                </div>
            </div>
        </details>

        <!-- 3. Не можу спати / хронічний біль -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧠 3. "Я не можу спати" та "У мене хронічний біль"</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ГОЛОВНИЙ ПРИНЦИП ВЛК ТА ВІЙСЬКОВОЇ МЕДИЦИНИ: Слова "я погано сплю" або "в мене болить спина" для комісії НЕ мають юридичної сили. Юридично працює тільки КЛІНІЧНИЙ ДІАГНОЗ, зафіксований в електронній системі охорони здоров'я (ЕСОЗ) та підтверджений інструментальними обстеженнями (МРТ, ЕЕГ) чи висновками вузьких спеціалістів (невролог, психіатр, вертебролог).»</p>

                <div class="p-3 bg-tactical-bg border border-tactical-border rounded space-y-2">
                    <p class="font-bold text-tactical-gold">🅰️ СИТУАЦІЯ 1. «Я не можу спати / нічні жахи / тривога» (Безсоння, ПТСР, Астенія)</p>
                    <p><strong>🎯 Мета / Вигода:</strong> Отримання медикаментозного корегування сну (безризикового для служби), офіційне направлення до Неврологічного чи Психіатричного відділення госпіталю, отримання відпустки на відновлення або зміна придатності за Розкладом хвороб (Статті 14–17).</p>
                    <p class="font-semibold text-white">💡 Як правильно вести розмову з лікарем (Лайфхак):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>«Не можу заснути по 3–4 години через високий рівень тривоги та поверхневий сон»;</li>
                        <li>«Прокидаюся від найменшого шереху з прискореним серцебиттям (тахікардія) і холодним потом»;</li>
                        <li>«Маю систематичні нічні жахи про бойові події, після яких не можу заснути до ранку»;</li>
                        <li>«Через відсутність сну погіршилася концентрація, виникає запаморочення та приступи сильного головного болю».</li>
                    </ul>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Подай через «Армія+» «Рапорт на медичний огляд у зв'язку з погіршенням самопочуття (розлади сну, виснаження)».</li>
                        <li>Отримай у намеда частини направлення до Невролога або Психіатра військово-медичного центру / госпіталю.</li>
                        <li>Вимагай проведення інструментальних обстежень: ЕЕГ (електроенцефалограма), консультація психотерапевта/психіатра для виключення ПТСР або тривожно-депресивного розладу.</li>
                        <li>Отримай медичний висновок та призначення специфічної терапії (коректори сну, анксіолітики, заспокійливі).</li>
                        <li>При підтвердженні вираженого розладу ВЛК виносить постанову: «Потребує відпустки за станом здоров'я на 30 днів» або «Обмежено придатний / придатний до служби у тилових частинах» (за ст. 14–17).</li>
                    </ol>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Боязнь звернення до психіатра через міф «поставити тавро / позбавлять прав». У ЗСУ звернення з приводу реакції на гострий стрес чи ПТСР є стандартною медичною допомогою! Якщо ти приховуєш стан і приймаєш транквілізатори/снодійне без призначення лікаря, на перевірці це виявиться як вживання заборонених речовин.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-border rounded space-y-2">
                    <p class="font-bold text-tactical-gold">🅱️ 2. «У мене хронічний біль» (Спина, суглоби, коліна, грижі, защемлення)</p>
                    <p><strong>🎯 Мета / Вигода:</strong> Об'єктивна фіксація защемлень чи дегенеративних змін хребта/суглобів, блокування загрози виразки шлунка від знеболювальних, направлення на стаціонарне лікування та ВЛК (Статті 61, 64 Розкладу хвороб).</p>
                    <p class="font-semibold text-white">💡 Як правильно вести розмову з лікарем (Лайфхак):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>«Ніючий біль у попереку випромінює (віддає) у ліву/праву ногу аж до стопи (корінцевий синдром)»;</li>
                        <li>«При носінні бронежилета/броні понад 15 хвилин віднімається нога / виникає оніміння пальців»;</li>
                        <li>«Неможливо розігнути спину після сну, біль досягає 7–8 балів із 10»;</li>
                        <li>«Звичайні знеболювальні (ібупрофен, диклофенак) вже не знімають біль, а від їх вживання болить шлунок».</li>
                    </ul>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li><strong>КРОК 1. Незаперечний доказ (МРТ / КТ / Рентген):</strong> Зроби МРТ проблемного відділу хребта (поперековий, шийний) або суглоба у будь-якій цивільній чи військовій клініці. У висновку мають бути вказані розміри гриж (наприклад, грижа L5-S1 > 6 мм з компресією корінця).</li>
                        <li><strong>КРОК 2. Подача рапорту в «Армія+»:</strong> Додай PDF/фото висновку МРТ до «Рапорту на направлення на обстеження та лікування».</li>
                        <li><strong>КРОК 3. Неврологічний огляд:</strong> Лікар-невролог має зафіксувати у медкнижці «корінцевий синдром», «порушення функції ходи чи згинання». ВЛК оцінює не саму наявність грижі, а ступінь порушення функцій!</li>
                        <li><strong>КРОК 4. Курс лікування та ВЛК:</strong> Пройди стаціонарне лікування (крапельниці, протизапальна терапія, блокування). Якщо біль не зникає — лікар направляє тебе на ВЛК.</li>
                    </ol>
                    <div class="p-2 bg-tactical-card border border-tactical-gold rounded text-xs space-y-1">
                        <p class="font-bold text-tactical-gold">💊 Спеціальне рішення лікаря для захисту шлунка (Схема):</p>
                        <p>• При хронічному болю НПЗП (дексалгін, кетанов, диклофенак) приймаються СУВОРО разом із захистом шлунка: <strong>Омепразол 20 мг</strong> або <strong>Пантапразол 20 мг</strong> вранці за 30 хв до їди.</p>
                        <p>• При невропатичному болю (оніміння, печіння, біль, що віддає в ногу) звичайні анальгетики не допомагають. Лікар призначає специфічні препарати (габапентиноїди — <strong>Габапентин</strong> або <strong>Прегабалін</strong>) суворо за рецептом та за медичним записом.</p>
                    </div>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Якщо ти приходиш до комісії і кажеш «у мене грижа», але невролог пише в огляді «функції хребта не порушені, чутливість збережена» — ВЛК визнає тебе повністю ПРИДАТНИМ! Вимагай від невролога детального опису неврологічного дефіциту (оніміння, випадання рефлексів).</p>
                </div>
            </div>
        </details>

        <!-- 4. Захворів під час проходження служби -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🤒 4. Захворів під час проходження служби в частині</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p><strong>🎯 Мета / Вигода:</strong> Офіційне звільнення від виконання обов'язків (на 3–6 діб) або направлення до військового госпіталю без ризику кваліфікації дій як СЗЧ.</p>
                <p class="font-bold text-tactical-gold">🛠️ Алгоритм дій:</p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li>Негайно повідом безпосереднього командира (комвзводу / комроти / сержанта) про погіршення самопочуття.</li>
                    <li>Відкрий застосунок «Армія+» → Розділ «Рапорти» → Обери «Рапорт на медичний огляд».</li>
                    <li>Прибудь до медичного пункту частини (МПЧ) на огляд.</li>
                    <li>Перевірка занесення даних: Переконайся, що фельдшер/лікар зробив запис про звернення у Книзі запису хворих (Форма 3) чи Медичній книжці.</li>
                    <li>Отримай рішення:
                        <ul class="list-disc pl-5 mt-1">
                            <li>Легкий стан: Амбулаторне лікування + звільнення від службових обов'язків до 3–6 діб.</li>
                            <li>Важкий стан: Направлення на госпіталізацію до військового госпіталю чи цивільної лікарні.</li>
                        </ul>
                    </li>
                </ol>
                <p class="text-xs"><strong>⏱️ Строки:</strong> Погодження рапорту в «Армія+» — негайно або до 24 годин. Огляд — у день звернення.</p>
                <p class="text-xs"><strong>📍 Куди звертатися:</strong> Застосунок «Армія+», Медичний пункт частини (МПЧ).</p>
                <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Відсутність запису у Формі 3 юридично означає, що ти не звертався за допомогою. Якщо підеш до намету чи спальника без запису — це можуть кваліфікувати як ухилення від служби або СЗЧ.</p>
            </div>
        </details>

        <!-- 5. Планова діагностика -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🩺 5. Планова діагностика та хронічні хвороби (35–55+)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="space-y-2">
                    <p class="font-bold text-tactical-gold">1. Планова діагностика та лікування застарілої хвороби / травми</p>
                    <p><strong>🎯 Мета / Вигода:</strong> Отримання офіційного направлення до госпіталю для обстеження (МРТ, КТ, УЗД) та стаціонарного лікування без конфліктів із командуванням.</p>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Збери цивільний медичний архів: Виписки, свіжі знімки МРТ/КТ, рекомендації цивільних лікарів із формулюванням: «Потребує планового стаціонарного лікування / додаткового обстеження».</li>
                        <li>Відкрий «Армія+» → Розділ «Рапорти» → Обери «Рапорт на направлення на медичний огляд / обстеження / лікування».</li>
                        <li>Додай фото/PDF цивільних виписок та вкажи діагноз (наприклад: міжхребцева грижа L5-S1, гіпертонічна хвороба II ст., артроз).</li>
                        <li>Пройди огляд у начальника медслужби (намеда) частини, отримавши Направлення на планову консультацію / госпіталізацію.</li>
                    </ol>
                    <p class="text-xs"><strong>⏱️ Строки:</strong> Розгляд рапорту в «Армія+» — до 3 робочих днів.</p>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Застосунок «Армія+», медична служба в/ч, військовий госпіталь.</p>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Порожні скарги без доданих медичних паперів командир має право відхилити. Спочатку збери документи, потім подавай рапорт.</p>
                </div>

                <div class="space-y-2 pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">2. Постійний прийом ліків від хронічних хвороб (тиск, цукор, суглоби) та захист шлунка</p>
                    <p><strong>🎯 Мета / Вигода:</strong> Легальне зберігання та вживання рецептурних ліків у підрозділі, збереження шлунково-кишкового тракту при прийомі сильних знеболювальних (НПЗП).</p>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Надай начальнику медичної служби частини виписку цивільного/військового лікаря із призначенням схеми лікування.</li>
                        <li>Вимагай внести запис до твоєї Медичної книжки: «Потребує постійного прийому [назва препарату, дозування]».</li>
                        <li>Правило безпечного вживання знеболювальних (НПЗП — диклофенак, ібупрофен, кетанов, дексалгін):
                            <ul class="list-disc pl-5 mt-1">
                                <li>Приймай знеболювальні СУВОРО після їди.</li>
                                <li>Для захисту шлунка обов'язково приймай інгібітори протонної помпи (Омепразол 20 мг або Пантапразол 20 мг) за 30 хвилин до прийому їжі вранці.</li>
                            </ul>
                        </li>
                    </ol>
                    <p class="text-xs"><strong>⏱️ Строки:</strong> Внесення запису до медкнижки — у день звернення.</p>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Медична служба частини (намед).</p>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Якщо у тебе під час перевірки знайдуть рецептурні чи сильнодіючі препарати без запису в медичній книжці, це може стати підставою для службового розслідування чи вилучення ліків. Безконтрольний прийом НПЗП без Омепразолу/Пантапразолу за 3–5 днів може викликати гостру виразку або шлункову кровотечу!</p>
                </div>
            </div>
        </details>

        <!-- 6. Отримав поранення / травму -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚑 6. Отримав поранення / травму</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ЮРИДИЧНА РІЗНИЦЯ: Бойове поранення дає право на 100 000 грн виплат під час лікування, додаткову виплату 70 000 грн та максимальну ОГД. Травма під час служби (не в бою) гарантує лікування та збереження ГЗ, але має нижчий розмір ОГД і не передбачає "бойових" нарахувань за період лікування.»</p>

                <div class="p-3 bg-tactical-bg border border-tactical-border rounded space-y-2">
                    <p class="font-bold text-tactical-gold">🅰️ СЦЕНАРІЙ А: Бойове поранення / Контузія / Каліцтво (Під час виконання бойового завдання)</p>
                    <p><strong>🎯 Мета / Вигода:</strong></p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Збереження 100% ГЗ + додаткова винагорода 100 000 грн щомісяця на весь період стаціонарного лікування та відпустки за станом здоров'я.</li>
                        <li>Одноразова виплата 70 000 грн (за 30 днів перебування на нулі/виконання завдання).</li>
                        <li>Право на Одноразову грошову допомогу (ОГД) при інвалідності (від 757 000 до 1 211 200 грн) або втраті працездатності.</li>
                    </ul>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li><strong>Евакуація та первинне заповнення:</strong> На евакуаційному етапі (медрота/стабілізаційний пункт) оформлюється Первинна медична картка (Форма 100). Стеж, щоб у ній було чітко вказано: «Вогнепальне / осколкове / мінно-вибухове поранення / контузія, отримане під час участі у бойових діях».</li>
                        <li><strong>Сповіщення частини:</strong> Лікарня/госпіталь надсилає Повідомлення про надходження пораненого (Форма 500) до твоєї в/ч протягом 24 годин.</li>
                        <li><strong>Службове розслідування:</strong> Командир в/ч видає Наказ про розслідування. За результатами видається Акт проведення службового розслідування та Довідка про обставини травми (Додаток 5).</li>
                        <li><strong>Контроль формулювання в Додатку 5:</strong> У Додатку 5 має бути СУВОРО вказано: «Поранення, ТАК, пов'язане з ЗАХИСТОМ БАТЬКІВЩИНИ» (а також примітка: «перебував у засобах індивідуального захисту, алкогольного/наркотичного сп'яніння не виявлено»).</li>
                        <li><strong>Подання Додатка 5 до госпіталю:</strong> Отримай Додаток 5 від частини (або вимагай його направлення електронним документообігом СЕДО напряму в госпіталь) до моменту проходження ВЛК.</li>
                    </ol>
                    <p class="text-xs"><strong>⏱️ Строки:</strong> Видача Додатка 5 службою в/ч — до 5 днів із дня отримання повідомлення про поранення.</p>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Штаб/стройова в/ч, електронна система СЕДО госпіталю, Гаряча лінія МОУ (1512 — якщо затягують видачу).</p>
                    <p class="text-xs"><strong>🔗 Корисні лінки:</strong> Портал МОУ для поранених: turbota.mil.gov.ua, Електронний документообіг ЗСУ (СЕДО): mod.gov.ua</p>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Якщо у Додатку 5 вкажуть «під час проходження служби» замість «під час захисту Батьківщини» — ти втрачаєш 100 000 грн виплат за період лікування та половину суми ОГД! Стеж за кожною літерою.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-border rounded space-y-2">
                    <p class="font-bold text-tactical-gold">🅱️ Б: Травма / Каліцтво під час виконання обов'язків військової служби (Не в бою)</p>
                    <p class="text-xs text-tactical-muted">(Наприклад: травма під час обслуговування техніки в тилу, ДТП на службовому авто, падіння під час чергування у ППД).</p>
                    <p><strong>🎯 Мета / Вигода:</strong> Безкоштовне лікування, збереження 100% посадового ГЗ на час стаціонару, виплата ОГД при втраті працездатності чи інвалідності.</p>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Негайно зафіксуй факт травмування у чергового частини / медпункті.</li>
                        <li>Пройди обов'язкове освідчення на алкогольне/наркотичне сп'яніння (вимагай довідку про відсутність сп'яніння).</li>
                        <li>Військова частина проводити службове розслідування за Актом НВ-1 (акт про нещасний випадок).</li>
                        <li>Отримай Довідку про обставини травми (Додаток 5) з формулюванням: «Травма, ТАК, пов'язана з ВИКОНАННЯМ ОБОВ'ЯЗКІВ військової служби».</li>
                    </ol>
                    <p class="text-xs"><strong>⏱️ Строки:</strong> Розслідування — до 10–15 днів. Видача Додатка 5 — до 5 днів після розслідування.</p>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Служба охорони праці в/ч, Намед, ВСП (у разі ДТП чи кримінального правопорушення).</p>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Якщо частина намагається оформити травму як «побутову» (начебто ти травмувався вдома або у самовільному залишенні частини), ти повністю втрачаєш право на Додаток 5 та страхові виплати ОГД. Оскаржуй такий акт через ВСП та Військову прокуратуру!</p>
                </div>
            </div>
        </details>

        <!-- 7. Проходження ВЛК -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ 7. Проходження ВЛК та оскарження постанови</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="space-y-2">
                    <p class="font-bold text-tactical-gold">1. Проходження ВЛК (Правила та алгоритм)</p>
                    <p class="text-xs"><strong>⏱️ Дійсність постанови:</strong> Під час воєнного стану постанова ВЛК дійсна 1 рік.</p>
                    <p class="text-xs"><strong>Планова ВЛК:</strong> Проходиться 1 раз на 12 місяців.</p>
                    <p class="text-xs"><strong>Позапланова ВЛК:</strong> Після лікування поранення, при загостренні хвороб, перед навчанням на курсах L-1/ВВНЗ або при звільненні.</p>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li><strong>Підготовка документів:</strong> Збери виписки (Форма 027/о), МРТ, КТ, Медкнижку, Паспорт, Військовий квиток та Додаток 5 (при пораненні/травмі).</li>
                        <li><strong>Подача рапорту в «Армія+»:</strong>
                            <ul class="list-disc pl-5 mt-1">
                                <li>У частині: Відкрий «Армія+» → «Рапорти» → «Рапорт на направлення на ВЛК». Погодження проходить по ланцюгу за до 3 робочих днів.</li>
                                <li>У госпіталі: Рапорт подається на ім'я начальника/лікуючого лікаря госпіталю, який видає направлення безпосередньо у закладі.</li>
                            </ul>
                        </li>
                        <li>Отримай у стройовій в/ч Направлення на ВЛК та Припис (посвідчення про відрядження). Тільки після цього тебе знімають із котлового забезпечення і ти їдеш на ВЛК.</li>
                        <li>Пройди лікарів комісії, надаючи копії своїх виписок кожному фахівцю.</li>
                        <li>Отримай Постанову ВЛК (Придатний, Придатний до служби у частинах забезпечення/ТЦК/ВВНЗ, Тимчасово непридатний з відпусткою 30–60 днів, Непридатний з виключенням з обліку).</li>
                    </ol>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Застосунок «Армія+», стройова служба в/ч, Навчально-медичні центри / Госпіталі.</p>
                </div>

                <div class="space-y-2 pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">2. Оскарження рішення ВЛК у разі незгоди</p>
                    <p><strong>🎯 Мета / Вигода:</strong> Скасування некоректного висновку про «придатність» та призначення повторного контрольного обстеження вищою комісією.</p>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li><strong>Застереження при підписі:</strong> Отримуючи Довідку ВЛК, біля свого підпису напиши: «З постановою ВЛК не згоден, буду оскаржувати до Регіональної ВЛК / ЦВЛК».</li>
                        <li>Склади Скаргу/Заяву до вищої ВЛК (Регіональної ВЛК або Центральної військово-лікарської комісії — ЦВЛК).</li>
                        <li>Додай до скарги: копію оскаржуваної Довідки ВЛК, копію Направлення, завірені копії медичних виписок/МРТ, копію паспорта та військового квитка.</li>
                        <li>Надішли пакет рекомендованим листом з описом вкладення або подай очно через канцелярію ЦВЛК.</li>
                        <li>Подай рапорт командиру в «Армія+» про оскарження постанови ВЛК.</li>
                    </ol>
                    <p class="text-xs"><strong>⏱️ Строки:</strong> Скарга подається протягом 10–14 днів із дня отримання довідки на руки. Розгляд скарги ЦВЛК — від 14 до 30 днів.</p>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Регіональна ВЛК, ЦВЛК (м. Київ, вул. Госпітальна, 16), Окружний адміністративний суд.</p>
                    <p class="text-xs"><strong>🔗 Корисні лінки:</strong> Контакти ЦВЛК та роз'яснення МОУ: mod.gov.ua, Безоплатна правнича допомога: legalaid.gov.ua (0 800 213 103)</p>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Подача скарги НЕ зупиняє наказ командира автоматично про переміщення чи службу, якщо немає окремого рішення ЦВЛК або ухвали суду про забезпечення позову.</p>
                </div>
            </div>
        </details>

        <!-- 8. ОФС, Протезування, Відпустка 30-60 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">♿ 8. Оцінювання функціонального стану (ОФС/МСЕК), Протезування, Відпустка 30–60 днів та Аптечка</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="space-y-2">
                    <p class="font-bold text-tactical-gold">1. Оцінювання повсякденного функціонування особи (ОФС / заміна МСЕК)</p>
                    <p class="text-xs text-tactical-gold">«Зверни увагу: Стара система МСЕК реформована. Оцінювання відсотка втрати працездатності та встановлення групи інвалідності здійснюється за цифровізованою системою Оцінювання повсякденного функціонування особи (ОФС).»</p>
                    <p><strong>🎯 Мета / Вигода:</strong> Встановлення групи інвалідності або відсотка втрати працездатності для отримання Одноразової грошової допомоги (ОГД) та залучення до державних соціальних програм.</p>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Пройди ВЛК та отримай свідоцтво про хворобу / довідку ВЛК із визначенням причинного зв'язку поранення/травми.</li>
                        <li>Звернися до лікуючого лікаря військового госпіталю чи цивільного закладу охорони здоров'я.</li>
                        <li>Лікуючий лікар формує електронну направляючу документацію в системі ОФС (формується електронний профіль без необхідності біганини з паперовими бігунками).</li>
                        <li>Пройди оцінювання експертною комісією (очно чи дистанційно/за документами).</li>
                        <li>Отримай електронний висновок про встановлення групи інвалідності або % втрати працездатності.</li>
                    </ol>
                    <p class="text-xs"><strong>⏱️ Строки:</strong> Формування направлення — протягом 3–5 днів після лікування. Оцінювання — до 14–30 днів.</p>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Лікуючий лікар госпіталю/лікарні, експертна комісія з оцінювання функціонального стану, портал Міністерства охорони здоров'я / Мінсоцполітики.</p>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Для отримання виплат за ОГД переконайся, що в електронному висновку ОФС чітко продубльовано причинно-наслідковий зв'язок із Додатка 5: «Захворювання/поранення, ТАК, пов'язане з захистом Батьківщини».</p>
                </div>

                <div class="space-y-2 pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">2. Безоплатне протезування та реабілітація</p>
                    <p><strong>🎯 Мета / Вигода:</strong> 100% безкоштовне отримання високофункціонального, біонічного чи спортивного протеза за рахунок коштів державного бюджету (без використання власних заощаджень).</p>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Під час стаціонарного лікування/реабілітації отримай висновок мультидисциплінарної реабілітаційної команди (МРК) або ВЛК про потребу у протезуванні.</li>
                        <li>Подай заяву на протезування онлайн через Кабінет особи з інвалідністю на порталі Мінсоцполітики (e-services.msp.gov.ua), через «Дію» або очно у ЦНАП / соцзахисті.</li>
                        <li>Додай копії: Паспорта, ІПН, Довідки про службу / УБД, Додатка 5, Рішення ВЛК/МРК.</li>
                        <li>Отримай електронний талон (направлення) на протезування.</li>
                        <li>Самостійно обери протезне підприємство зі списку акредитованих та підпиши договір на виготовлення протеза.</li>
                    </ol>
                    <p class="text-xs"><strong>⏱️ Строки:</strong> Видача направлення — до 10 робочих днів. Виготовлення та підгонка протеза — від 30 до 60 днів.</p>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Портал e-services.msp.gov.ua, застосунок «Дія», ЦНАП, обране протезне підприємство.</p>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Не купуй протез за власні чи волонтерські кошти до подачі заяви в державну програму, оскільки компенсація витрачених власних коштів "заднім числом" юридично не передбачена!</p>
                </div>

                <div class="space-y-2 pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">3. Відпустка за станом здоров'я після ВЛК (на 30–60 днів)</p>
                    <p><strong>🎯 Мета / Вигода:</strong> Законний відпочинок та відновлення організму вдома після важкого лікування зі збереженням 100% грошового забезпечення.</p>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Отримай Постанову ВЛК з формулюванням: «Потребує відпустки за станом здоров'я на [30 / 45 / 60] днів».</li>
                        <li>Відкрий застосунок «Армія+» → Розділ «Рапорти» → Обери «Рапорт на відпустку за станом здоров'я».</li>
                        <li>Додай фото Постанови ВЛК, вкажи адресу проживання під час відпустки та ID командира.</li>
                        <li>Отримай у стройовій в/ч або через СЕДО госпіталю Витяг із наказу командира та Відпускний квиток.</li>
                        <li>Протягом 24 годин після приїзду додому стань на тимчасовий облік у найближчому ТЦК та СП.</li>
                    </ol>
                    <p class="text-xs"><strong>⏱️ Строки:</strong> Розгляд рапорту в «Армія+» — до 3 робочих днів.</p>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Застосунок «Армія+», стройова служба в/ч, ТЦК та СП за місцем проживання.</p>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Поїздка додому тільки з довідкою ВЛК без Витягу з наказу командира та відпускного квитка кваліфікується як СЗЧ (самовільне залишення частини)! Штамп ТЦК про прибуття та вибуття — обов'язковий.</p>
                </div>

                <div class="space-y-2 pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">4. Списання та поповнення втраченої бойової аптечки (АІ-1 / ТАКМЕД)</p>
                    <p><strong>🎯 Мета / Вигода:</strong> Безкоштовне отримання нової комплектної індивідуальної аптечки замість втраченої під час бойового завдання чи евакуації без нарахування на тебе грошового накладного накладення.</p>
                    <p class="font-semibold text-white">🛠️ Алгоритм дій:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li>Після повернення з евакуації/лікування подай рапорт на ім'я командира в/ч через «Армія+»: «Рапорт на списання майна, втраченого під час виконання бойового завдання / евакуації».</li>
                        <li>У рапорті вкажи обставини: «Під час виконання бойового завдання та подальшої медичної евакуації [дата, локація] було втрачено індивідуальну аптечку АІ-1».</li>
                        <li>Додай копію Форми 100 або Довідки про поранення.</li>
                        <li>На підставі Актів списання служба медичного постачання частини безкоштовно видає нову комплектну аптечку.</li>
                    </ol>
                    <p class="text-xs"><strong>⏱️ Строки:</strong> Списання та видача нової аптечки — до 5–7 робочих днів.</p>
                    <p class="text-xs"><strong>📍 Куди звертатися:</strong> Застосунок «Армія+», медична служба / начмед військової частини.</p>
                    <p class="text-xs text-tactical-alert"><strong>⚠️ Підводні камені:</strong> Якщо не подати рапорт на списання із зазначенням бойових обставин, втрачене майно можуть спробувати віднести на твоє фінансове утримання (відрахувати вартість аптечки та турнікетів із ГЗ).</p>
                </div>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub2', hubTitle: '2. Я захворів / Поранення / Потрібно на ВЛК', text: 'Я захворів Поранення ВЛК травма при звільненні виключення з частини хвороба у відпустці хронічний біль розлади сну Форма 3 МПЧ госпіталь планова діагностика Додаток 5 бойове поранення оскарження ВЛК ЦВЛК ОФС МСЕК протезування відпустка за станом здоровʼя аптечка', snippet: 'Вивірені алгоритми: травма при звільненні, хвороба у відпустці, хронічний біль, поранення vs травма, Додаток 5, ВЛК, ОФС, протезування.' });

window.hubsData['hub3'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🧠 3. Мені важко / Втома та відновлення</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Тут немає складних термінів, підручників чи псевдопсихологічних мудростей. Тільки чіткі відповіді від першої особи: обирай свій стан або свій режим служби й дивись, як тримати контроль.»</p>
    </div>

    <div class="space-y-4">
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🔋 1. Як зрозуміти, наскільки я виснажений</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p>Замість дурного питання «Як справи?» вимірюй свій стан як заряд акумулятора:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong class="text-green-400">🟢 70–100% (Повний заряд):</strong> Голова свіжа, робиш будь-яку роботу без напруги.</li>
                    <li><strong class="text-yellow-400">🟡 30–70% (Середній заряд):</strong> Роботу робиш, але увага падає, з'являється туман. Потрібно випити води, поїсти або посидіти 20 хвилин у тиші.</li>
                    <li><strong class="text-red-400">🔴 0–30% (Червона зона):</strong> Реакція гальмує, починаєш тупити в паперах, біситися на людей або робиш небезпечні помилки.</li>
                </ul>
                <p class="text-xs text-white bg-tactical-bg p-3 border border-tactical-border rounded"><strong>Запам'ятай:</strong> Сказати побратиму чи сержанту «У мене батарея на 15%» — це не слабкість, це нормальне попередження. Людина на 15% мусить отримати 1–2 години спокою або підміну, щоб не наробити дурниць.</p>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🦴 2. У мене болить тіло</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>Коли ти довго терпиш напругу, нерви затискають м'язи. Біль у тілі — це перша сигнальна лампочка.</p>
                <div class="space-y-2 text-xs">
                    <p><strong>• Болить спина й поперек (після броні або сидіння):</strong> 1. Ляж на тверду підлогу на спину. 2. Зігни ноги, підтягни коліна до грудей і потримай руками 30 секунд. 3. Встань на карачки й повільно вигни спину вгору (видих), потім прогни донизу (вдих). Зроби так 10 разів.</p>
                    <p><strong>• Тисне в грудях, важко вдихнути, «ком у горлі»:</strong> 1. Зроби два поспіль вдихи носом (один глибокий і одразу другий короткий «довдих»). 2. Зроби один довгий повільний видих ротом. Повтори 3 рази. 3. Підніми плечі до вух із силою, потримай 3 секунди і різко скинь донизу з видихом «Ух».</p>
                    <p><strong>• Печуть очі, відчуття «піску під повіками»:</strong> 1. Кожні 20 хвилин роботи з паперами чи монітором подивись у вікно на найвіддаленішу точку на 20 секунд. 2. Потри долоні одна об одну, щоб стали гарячими, і накрий ними заплющені очі на 1 хвилину.</p>
                    <p><strong>• Сжимаються зуби, болять вилиці (особливо зранку):</strong> 1. Поклади кінчик язика на верхнє піднебіння одразу за передніми зубами й трохи розкрої губи. У такому положенні щелепа фізично не може стиснутися. 2. Помасажуй пальцями кути щелепи біля вух.</p>
                    <p><strong>• Сіпається повіка або дрижать руки:</strong> 1. Не намагайся зупинити це зусиллям волі. 2. Навпаки: з усієї сили стисни кулаки на 10 секунд і повільно відпусти. 3. Зменш каву та випий склянку води з дрібкою солі.</p>
                    <p><strong>• Затискає голова («залізний обруч»):</strong> 1. Випий 1–2 склянки чистої води (головна причина — зневоднення). 2. Натисни великими пальцями на дві ямки в основі черепа (де шия з'єднується з головою) і помасажуй 1 хвилину.</p>
                    <p><strong>• «Крутить» шлунок від нервів, постійно бігаєш у туалет:</strong> 1. Випий склянку саме теплої води повільними ковтками. 2. Помасажуй живіт долонею за годинниковою стрілкою (10 кіл).</p>
                    <p><strong>• Гудуть і «крутять» ноги перед сном:</strong> 1. Ляж і поклади ноги на рюкзак чи стіну (вище рівня серця) на 10 хвилин. 2. Міцно розтирай литки руками в напрямку від стоп вгору до колін.</p>
                </div>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🌙 3. Я на чергуванні / у добовому наряді</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p>Монотонність, нічна зміна, постійна напруга та ризик просто вирубитися на місці.</p>
                <ul class="list-disc pl-5 space-y-1 text-xs">
                    <li><strong>Короткий сон на 20 хвилин («Кавовий сон»):</strong> Випий філіжанку кави чи міцного чаю → Одразу постав будильник суворо на 20 хвилин → Заплющ очі й лягай. Кофеїн почне діяти якраз через 20 хвилин. Ти прокинешся свіжим і без туману в голові. (Якщо поспиш більше 30 хвилин — провалишся в глибоку фазу й встанеш розбитим).</li>
                    <li><strong>Зміна дій і маршрутів (збиваємо автопілот):</strong> Мозок вимикається не від втоми, а від одноманітності. Щогодини міняй порядок перевірки документів, маршрут обходу або навіть перекладай ліхтарик/ручку в іншу руку.</li>
                    <li><strong>Холодна вода на шию та руки:</strong> Коли починає вирубати, потримай зап'ястя під холодною водою 30 секунд або приклади мокру серветку/холодний предмет до задньої частини шиї. Там проходять великі судини — це швидко бадьорить.</li>
                    <li><strong>Лимон або м'ятна жуйка:</strong> Пожуй м'ятну жуйку або з'їж шматочок лимона / щось кисле. Сильний подразник рецепторів моментально збиває сонливість.</li>
                    <li><strong>Яскраве світло або телефон:</strong> Увімкни найяскравіше біле світло в приміщенні. Якщо світломаскування — подивись на максимальну яскравість екрана телефону протягом 1 хвилини (це зупиняє вироблення гормону сну).</li>
                </ul>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">💻 4. Я працюю в штабі / з паперами</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2">
                <p>Години за монітором, нескінченні відомості, рапорти, відсутність руху й "закипання" голови від монотонної рутини.</p>
                <ul class="list-disc pl-5 space-y-1 text-xs">
                    <li><strong>Правило «25 / 5» (Захист від закипання):</strong> Працюй із документами чи екраном 25 хвилин з повною концентрацією → 5 хвилин ЖОРСТКОЇ перерви. Під час перерви заборонено дивитися в телефон. Встань, пройдися коридором, подивись у вікно на найвіддаленішу точку (це знімає спазм очних м'язів).</li>
                    <li><strong>Зміна порядку дій та алгоритм «з кінця в початок» (збиваємо автопілот):</strong> Коли перевіряєш довгий список, відомість чи накази — мозок на 20-й хвилині починає «пропускати» помилки через монотонність.
                        <ul class="list-circle pl-5 mt-1">
                            <li><em>Лайфхак 1 (Читати з кінця):</em> Почни перевіряти список або таблицю з останнього рядка вгору до першого. Мозок сприйме це як нову задачу й моментально ввімкне увагу.</li>
                            <li><em>Лайфхак 2 (Зміна черговості):</em> Якщо щодня робиш справи за схемою А → Б → В, поміняй їх місцями (роби В → А → Б). Зміна рутини не дає заснути за столом.</li>
                        </ul>
                    </li>
                    <li><strong>Пий воду маленькими ковтками що 15 хвилин:</strong> Зневоднення — головна причина туману в голові та головного болю. Повний сечовий міхур суто фізіологічно не дасть заснути чи розслабитися за столом.</li>
                    <li><strong>Розподіл справ на «важкі» та «тупі»:</strong> Складні накази, розрахунки та аналітику роби в перші 2 години після прокидання або на початку зміни. Рутинну «тупу» роботу (підшивання паперів, друк списків) залишай на періоди спаду енергії (14:00–16:00 або 03:00–05:00 ночі).</li>
                    <li><strong>Ритуал завершення зміни («Скидання обладунків»):</strong> Закінчив роботу — обов'язково перевдягнися в легкий одяг/капці та помий обличчя й руки гарячою водою. Це дає мозку чіткий сигнал: «Робоча зміна завершена». Перші 30 хвилин не заходь у робочі чати.</li>
                </ul>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ 5. Як правильно переключати мізки</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p>Коли ти втомлений, мозок шукає найпростіший спосіб «вимкнутися». Але є речі, які насправді дають ресурс, а є ті, що в загальному рахунку забирають останні сили.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 bg-tactical-bg border border-tactical-alert rounded space-y-1">
                        <p class="font-bold text-tactical-alert">❌ Швидкі «пастки», які роблять тільки гірше:</p>
                        <p>• <strong>Алкоголь для розслаблення:</strong> Здається, що розслабляє, але вночі вбиває глибокий сон. На ранок ти отримуєш розбитість, високий тиск і подвійну роздратованість.</p>
                        <p>• <strong>Години в телефоні (TikTok / новини / ігри):</strong> Це НЕ відпочинок для голови. Це додатковий шум для очей і мозку, який повністю випалює залишки уваги.</p>
                        <p>• <strong>Енергетики та кава відрами:</strong> Дають бадьорість на 30 хвилин, а потім приводять до жорсткого провалу енергії, дрижання рук та бішеності на людей.</p>
                        <p>• <strong>Залипання в ігроманію чи ставки:</strong> Заганяють у борги, створюють зайвий нервовий стрес і повністю руйнують сон.</p>
                    </div>
                    <div class="p-3 bg-tactical-bg border border-tactical-accent rounded space-y-1">
                        <p class="font-bold text-green-400">✅ Робочі та прості способи відновитися:</p>
                        <p>• <strong>15 хвилин у ПОВНІЙ ТИШІ:</strong> Сидіти або лежати без навушників, без телефону й без розмов. Мозку треба час, щоб просто очистити оперативну пам'ять.</p>
                        <p>• <strong>Проста фізична робота рукам:</strong> Почистити бертси, випрати речі, перебрати рюкзак, помити чашку. Коли ти бачиш чіткий і простий результат своєї роботи — мізки розвантажуються.</p>
                        <p>• <strong>Контраст для обличчя та тіла:</strong> Вмивання найхолоднішою водою або гарячий душ після зміни. Це миттєво переключає судини та скидає напругу.</p>
                        <p>• <strong>Гарячий солодкий чай та проста їжа:</strong> Коли організм виснажений, йому потрібні звичайні вуглеводи (каша, чай з цукром, горіхи), а не стрибки від енергетиків.</p>
                    </div>
                </div>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🍺 6. Хочу випити, щоб відключитися та заснути</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p><strong>Правда про «100 грам для сну»:</strong> Алкоголь здається найпростішим способом вимкнути голову, але це обман судин та хімії мозку. Він справді «відключає» свідомість, але повністю вбиває глибоку фазу сну.</p>
                <p>• <strong>Що відбувається насправді:</strong> Мозок уночі не відпочиває, а намагається вивести токсини. На ранок ти отримуєш подвійну тривогу (кортизоловий удар), піднятий тиск, зневоднення й ще більшу розбитість.</p>
                <p>• <strong>Наслідки по службі:</strong> Це прямий шлях до службового розслідування, штрафів, втрати авторитету та аварійних ситуацій.</p>
                <p>• <strong>Чим замінити для розрядки:</strong> 20 хвилин у повній тиші без телефону, гарячий душ/вмивання, 15 віджимань або гарячий міцний чай із цукром.</p>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">💊 7. Хочу закинутися пігулками</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p><strong>Правда про «жменю ліків без призначення»:</strong> Самолікування рецептурними чи сильними заспокійливими та знеболювальними — це катастрофа для організму.</p>
                <p>• <strong>Що відбувається насправді:</strong> Заспокійливі й снодійні «гальмують» нервову систему. У тебе сповільнюється реакція, з'являється туман в очах і ватність у тілі. Високі дози знеболювальних нищать шлунок (виразка) та печінку.</p>
                <p>• <strong>Небезпека:</strong> На чергуванні чи під час виконання завдань людина під «хімією» стає загрозою для себе та побратимів, бо не здатна швидко оцінити обстановку.</p>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🛑 8. НЕ СПРАВЛЯЄШСЯ? Медпункт, ППП та анонімна допомога</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p>«Якщо ти робиш базові кроки, але тіло далі болить, заснути не вдається понад 3 дні, або темні думки не відпускають — СТОП. Не шукай пігулки в аптечці побратима і не глуши стан алкоголем. Звернися до професіоналів.»</p>
                <p><strong>Куди звертатися у частині:</strong></p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li><strong>Медпункт частини (лікарі / фельдшер):</strong> Знімуть гострий біль, перевірять тиск, серце, нададуть безпечні та правильні медикаменти.</li>
                    <li><strong>Пункт психологічної підтримки (ППП) / Психолог частини:</strong> Це не «психушка» і не діагноз у справу. Це звичайна розмова з фахівцем, який знає, як витягнути людину з виснаження й розвантажити голову.</li>
                </ol>
                <p><strong>Анонімні гарячі лінії (без розголосу):</strong> <strong>5522</strong> або <strong>0 800 332 029</strong> — безкоштовні анонімні лінії підтримки для військовослужбовців.</p>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">😒 9. Мене все і всі фоново бісять</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-1 text-xs">
                <p>Твій акумулятор на 5%. Будь-який звук чи запитання сприймається як загроза.</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Зніми навушники, вимкни сповіщення в чатах. Попроси 20 хвилин тиші.</li>
                    <li>Збий пульс диханням: Повільний вдих носом (2 секунди) → дуже довгий видих через губи (6 секунд, ніби дмухаєш на гарячий чай). Зроби так 8 разів.</li>
                    <li>Помасажуй пальцями скроні та кути щелепи під вухами.</li>
                    <li>Попередь людей: «Мужики, в мене сьогодні батарея на нулі. Не чіпайте мене пів години по дурницях».</li>
                </ol>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚡ 10. Я вибухаю гнівом за секунду</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-1 text-xs">
                <p>В організм впорскнулася велика доза адреналіну. Це біологічна реакція, але її треба злити.</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Зроби один крок назад від людини, з якою говориш. Відведи очі вбік.</li>
                    <li>Стисни кулаки й порахуй: «10, 9, 8, 7, 6, 5, 4, 3, 2, 1» і повільно видихни.</li>
                    <li>Спали адреналін: Удар по мішку з піском, зроби 15 швидких віджимань або з силою стисни дерев'яний брус чи ремінь.</li>
                    <li>Скажи фразу: «Я зараз на вибуху. Мені треба 3 хвилини в тиші, щоб ми не наробили дурниць».</li>
                </ol>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🫥 11. Я нічого не відчуваю, всередині порожнеча</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-1 text-xs">
                <p>Твоя психіка вимкнула емоції, щоб ти не звар'ював від перенавантаження. Це як автоматичний запобіжник.</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Не змушуй себе «радіти» чи «збиратися». Тіло просто економить бак.</li>
                    <li>Думай тільки про найближчу 1 годину. Не плануй завтрашній день.</li>
                    <li>Зроби одну дрібну дію: помити обличчя, зрізати нігті, почистити бертси. Завершена справа повертає мозку відчуття контролю.</li>
                </ol>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">😔 12. Мене гризе сором, що я роблю занадто мало</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-1 text-xs">
                <p>Ти порівнюєш себе з іншими й починаєш самопоїдання.</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Подивись на факти: Запиши 3 конкретні справи, які ти зробив сьогодні (наприклад: «заповнив відомості», «полагодив майно», «відчергував»).</li>
                    <li>Згадай: Якщо тил чи забезпечення зупиняється — фронт залишається без боєприпасів та їжі за 2 дні.</li>
                    <li>Скажи собі: «Я роблю свою роботу на своєму місці. Роблю її якісно й цим тримаю загальний стрій».</li>
                </ol>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🌀 13. В голові крутиться одна й та сама дурна думка</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-1 text-xs">
                <p>Мозок потрапив у зациклену мислительну петлю.</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Умийся крижаною водою або стисни й розтисни пальці ніг 10 разів.</li>
                    <li>Вивантаж на папір: Запиши цю думку 3–4 словами на аркуші (наприклад: «Я переживаю за гроші»). Записана думка звільняє пам'ять мозку.</li>
                    <li>Наказ собі: «Я думав про це 20 разів. Від 21-го разу рішення не з'явиться. Повернуся до цього завтра о 10:00».</li>
                </ol>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🎬 14. Накривають важкі картинки й спогади з минулого</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-1 text-xs">
                <p>Мозок не перетравлював важку подію й помилково вмикає її зараз.</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Тупни ногами по підлозі/землі. Відчуй тверду опору.</li>
                    <li>Скажи вголос: «Я [Ім'я]. Сьогодні [Сьогоднішня дата]. Я перебуваю в [Локація]. Це просто спогад, зараз я в безпеці».</li>
                    <li>Торкнися 3 речей навколо: Помацай стіну, форму, ключі в кишені.</li>
                </ol>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚨 15. Накривають темні думки (Простіше не прокинутися)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p>Це говорить твоє біохімічне виснаження, а не ти. Мозок просто хоче вимкнути біль.</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Крок 1. «Правило 24 годин»:</strong> Наказ собі: «Жодних фатальних рішень сьогодні. Повернуся до цього питання завтра о 12:00».</li>
                    <li><strong>Крок 2. Зміни фізичний простір:</strong> Розряди й відклади зброю, вийди з приміщення на повітря.</li>
                    <li><strong>Крок 3. Фізичний струс (активація рецепторів):</strong> Випий склянку крижаної води або розжуй шматок лимона. Це збиває замкнений хімічний цикл мозку.</li>
                    <li><strong>Крок 4. Не залишайся сам у тиші:</strong> Підійди до будь-кого й скажи робочу фразу: «Брат, дай сигарету / зробимо чаю, мене переклинило». Або набери анонімний номер <strong>5522</strong>.</li>
                </ul>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🎭 16. Зовні "все зашибісь", а всередині згарище (Прихований Фасад)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p>Ти ідеально виконуєш накази, жартуєш, але тобі абсолютно байдуже до власного життя.</p>
                <p><strong>Як упізнати в себе:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Байдуже, чи застебнута каска, чи перевірено майно.</li>
                    <li>Працюєш як робот-автомат без жодних почуттів.</li>
                    <li>Вдень посмішка, а наодинці — провал у темряву.</li>
                </ul>
                <p><strong>Що робити:</strong></p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Скажи собі: «Удавати, що все ок — це не сила, це шлях до самознищення».</li>
                    <li>Зніми фасад хоча б перед однією людиною (побратим, сержант, психолог): «Мені дуже важко. Я більше не витримую ролі залізного».</li>
                    <li>Подай рапорт на відпустку або попроси командира змінити задачі на 2–3 дні.</li>
                </ol>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🫂 17. Бачу, що побратим на межі: як розпізнати маркери та врятувати життя</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p>Твій обов'язок — вчасно помітити критичні зміни в поведінці побратима й підставити плече.</p>
                <p class="font-bold text-tactical-alert">🚨 Маркери суїцидального ризику та важкого зриву (на що звернути увагу):</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>«Закриття справ»:</strong> Почав раптово дарувати чи роздавати свої особисті речі, повертати давні борги.</li>
                    <li><strong>Ідеальний порядок:</strong> Почав неприродно ретельно впорядковувати свої папери чи майно, ніби «готується до відходу».</li>
                    <li><strong>Фрази-сигнали:</strong> Говорить фрази: «Скоро я відпочину», «Ви без мене впораєтеся», «Усе це втратило сенс».</li>
                    <li><strong>Байдужість до безпеки:</strong> Перестав стежити за захистом, ризикує без потреби, каже «та мені все одно».</li>
                    <li><strong>Раптове «полегшення»:</strong> Після довгої важкої депресії чи замкненості раптово став неприродно спокійним або веселим (найнебезпечніший маркер — людина ухвалила рішення).</li>
                </ul>
                <p class="font-bold text-tactical-gold">🛠️ Алгоритм дій побратима (як діяти):</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li><strong>Забери небезпеку:</strong> Не залишай його сам на сам зі зброєю або боєприпасами (під приводом «почистити» чи «перекласти» прибери зброю з швидкого доступу).</li>
                    <li><strong>Не залишай одного:</strong> Будь поруч, навіть якщо ви просто мовчки сидите й п'єте чай.</li>
                    <li><strong>Проведіть підтримуючу розмову один на один:</strong> Не кажи «зберися» або «не ний». Заходь через факти: «Брат, я бачу, що ти останні дні сам не свій: мало їси і мовчиш. Я переживаю за тебе. Що відбувається?». Просто вислухай і скажи: «Я тебе чую. Це реально важка ситуація».</li>
                    <li><strong>Залучіть фахівців:</strong> Повідом сержанта, медика чи ППП частини. Це не «стукачество» — це порятунок життя побратима.</li>
                </ol>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub3', hubTitle: '3. Мені важко / Втома та відновлення', text: 'Мені важко психологічно Втома відновлення рівень батареї болить тіло чергування добовий наряд штаб папери переключити мізки алкоголь пігулки медпункт ППП 5522 бісять гнів порожнеча сором зациклена думка картинки темні думки фасад маркери побратим', snippet: 'Психологічна допомога та відновлення: виснаження, болі в тілі, нічні чергування, робота в штабі, пастки розслаблення, паніка, темні думки, допомога побратиму.' });

window.hubsData['hub4'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🔀 4. Думаєш про СЗЧ / Зміна частини / Як повернутися на службу</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Самовільне залишення частини (СЗЧ) — це юридична та особиста пастка, яка миттєво позбавляє тебе зарплати, права на лікування і створює ризик отримати від 5 до 10 років в'язниці. У цьому розділі ми простими словами пояснимо, як зупинити виснаження без втечі, як офіційно змінити підрозділ та як безпечно повернутися на службу за законом.»</p>
    </div>

    <div class="space-y-4">
        <!-- А -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🛡️ А. "Я на межі / думав утекти..." (Захист від помилки)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ГОЛОВНЕ ПРАВИЛО: Утеча з частини НЕ вирішує проблеми, а лише створює нові. В той самий день, коли фіксують СЗЧ, тобі припиняють платити гроші, ти втрачаєш право безкоштовно й легально лікуватися, а ДБР відкриває кримінальну справу. Якщо ти виснажений, маєш важкий конфлікт або біду вдома — є законні шляхи.»</p>

                <div class="space-y-2">
                    <p class="font-semibold text-white">1. Що відбувається по днях, якщо піти в СЗЧ:</p>
                    <ul class="list-disc pl-5 space-y-1 text-xs">
                        <li><strong>До 3 днів відсутності:</strong> Це вважається порушенням дисципліни (якщо це сталося вперше). Кримінальну справу ще не відкривають, а рішення прийняти може сам командир у частині.</li>
                        <li><strong>Більше 3 днів відсутності:</strong> Командир зобов'язаний передати документи в ДБР та Військову службу правопорядку (ВСП). Відкривається <strong>кримінальна справа за статтею 407 КК України</strong> (загрожує від 5 до 10 років в'язниці).</li>
                        <li><strong>Більше 30 днів відсутності:</strong> Тобі повністю скасовують усі виплати, знімають із хачування та забезпечення, речі й зброю списують, а тебе подають у загальний розшук.</li>
                    </ul>
                </div>

                <div class="space-y-2 pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">2. Що робити замість СЗЧ, якщо ти на межі:</p>
                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded text-xs space-y-2">
                        <p><strong>Психологічна допомога (анонімно та безкоштовно):</strong></p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Поговори з психологом частини або замполітом (заступником з морально-психологічного забезпечення).</li>
                            <li>Зателефонуй на цілодобову <strong>Гарячу лінію психологічної підтримки ЗСУ</strong> за коротким номером <strong>5522</strong> (натисни "2") або <strong>0 800 332 720</strong>. Це анонімно.</li>
                        </ul>
                        <p class="font-bold text-tactical-gold">План "Стоп-гра" (якщо дуже важко або є конфлікт):</p>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li><strong>Якщо підводить здоров'я:</strong> Не тікай. Йди до медпункту частини (МПЧ) і вимагай, щоб тебе записали у <strong>Книгу запису хворих (Форма 3)</strong>, або подай у застосунку <strong>«Армія+»</strong> Рапорт на медичний огляд.</li>
                            <li><strong>Якщо проблема вдома:</strong> Збери підтвердження (довідка про хворобу чи смерть рідних, руйнування будинку) та подай в <strong>«Армія+»</strong> Рапорт на відпустку за сімейними обставинами.</li>
                            <li><strong>Якщо тебе тиснуть або дають незаконні накази:</strong> Телефонуй на <strong>Гарячу лінію Міноборони (1512)</strong> або подавай скаргу до ВСП чи Військової прокуратури.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </details>

        <!-- Б -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🔄 Б. "Хочу змінити підрозділ або посаду" (Переведення)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«Зараз перевестися в іншу частину можна через мобільний застосунок "Армія+". Це робиться в декілька кліків, щоб командири не блокували рапорти на місцях.»</p>
                <p class="font-semibold text-white">Як правильно перевестися через «Армія+»:</p>
                <ol class="list-decimal pl-5 space-y-2 text-xs">
                    <li><strong>1. Отримай "Відношення" (Рекомендаційний лист):</strong> Візьми документ від командира тієї частини, куди хочеш перейти. Запам'ятай: відношення діє <strong>СУВОРО 30 днів</strong> від дати видачі.</li>
                    <li><strong>2. Подай рапорт у застосунку «Армія+»:</strong> Заходь у роздел «Рапорти» → «Рапорт на переведення». Завантаж фото відношення, військового квитка та (якщо є) довідки ВЛК або документів про сімейний стан.</li>
                    <li><strong>3. Чекай рішення Кадрового центру ЗСУ:</strong> Твій рапорт перевіряє Кадровий центр ЗСУ (це займає від 3 до 7 днів). Якщо ти переводишся між бойовими частинами або за рішенням ВЛК — Кадровий центр може погодити переведення навіть без згоди твого нинішнього комбрига.</li>
                    <li><strong>4. Отримай наказ та їдь до нової частини:</strong> Після схвалення виходить наказ. Ти здаєш майно, отримуєш документи (припис) і вирушаєш на нове місце служби.</li>
                </ol>
            </div>
        </details>

        <!-- В -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚠️ В. 5 Головних пасток для бійця: реальні ситуації</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 1: «Повернувся в роту самостійно і думаєш, що все добре»</p>
                    <p>• <strong>Питання бійця:</strong> «Я просто повернувся в підрозділ. Командир сказав: "Іди службуй", але ні про яке ДБР чи ВСП не казав. Я в безпеці?»</p>
                    <p>• <strong>Відповідь:</strong> НІ, ЦЕ ПАСТКА! Кримінальна справа в ДБР залишається відкритою. Навіть якщо ти зараз воюєш на передку, тебе можуть затримати на першому ж блокпосту або засудити пізніше.</p>
                    <p class="text-tactical-gold">👉 <strong>Що робити:</strong> Обов'язково зафіксуй своє повернення офіційним рапортом та подай через адвоката чи прокурора клопотання до суду, щоб закрити справу.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 2: «Комбриг не підписує рапорт і рве папери»</p>
                    <p>• <strong>Питання бійця:</strong> «Маю відношення з іншої частини, але командир каже: "Нікуди не підеш" і рве рапорт. Що робити?»</p>
                    <p>• <strong>Відповідь:</strong> Не віддавай паперові рапорти в руки. Подавай рапорт <strong>СУВОРО через застосунок «Армія+»</strong>. Він іде напряму в Кадровий центр ЗСУ в Києві, який має право погодити переведення без дозвільного підпису комбрига (якщо це між бойовими частинами або за ВЛК).</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 3: «Захворів чи підлікувався у цивільній лікарні під час СЗЧ»</p>
                    <p>• <strong>Питання бійця:</strong> «Пішов із частини, бо не лікували, і сам зробив операцію у цивільній лікарні. Це скасовує СЗЧ?»</p>
                    <p>• <strong>Відповідь:</strong> Довідка з цивільної лікарні автоматично СЗЧ не анулює. Проте всі медичні виписки та МРТ будуть <strong>головним доказом для суду та ДБР</strong>, що в тебе була поважна причина. Це допоможе закрити справу без в'язниці.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 4: «Прострочив відношення з нової частини»</p>
                    <p>• <strong>Питання бійця:</strong> «Взяв відношення у бойову бригаду, але поки вирішував проблеми, минув місяць. Воно ще дійсне?»</p>
                    <p>• <strong>Відповідь:</strong> НІ. Термін дії відношення — СУВОРО 30 днів. Якщо термін минув, звернися до нової частини, щоб тобі перепідписали документ зі свіжою датою. Інакше рапорт відхилять.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 5: «Страх перед батальйоном резерву»</p>
                    <p>• <strong>Питання бійця:</strong> «Я прийшов у ВСП, мене відправляють у резервний батальйон. Що там зі мною робитимуть?»</p>
                    <p>• <strong>Відповідь:</strong> Батальйон резерву — це просто тимчасовий пункт (зазвичай на 3–7 днів). Там перевіряють документи, оформлюють згоду командира та видають офіційне направлення до нової або старої частини. Ти перебуваєш під захистом закону і тебе ніхто не відправить одразу за ґрати.</p>
                </div>
            </div>
        </details>

        <!-- Г -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ Г. "Я в СЗЧ і хочу повернутися" (Як уникнути в'язниці)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ЗАПАМ'ЯТАЙ: Повернутися з СЗЧ без тюремного строку можна за законом (стаття 401 частина 5 Кримінального кодексу). Але закрити справу може ВИКЛЮЧНО СУД. Якщо просто прийти в роту без судового рішення — ти залишаєшся в розшуку!»</p>

                <div class="space-y-2">
                    <p class="font-semibold text-white">1. Чотири умови, щоб закрити справу без строки в'язниці:</p>
                    <ol class="list-decimal pl-5 space-y-1 text-xs">
                        <li>Це твоє <strong>ПЕРШЕ СЗЧ</strong> за час воєнного стану (якщо втік вдруге — загрожує реальна в'язниця від 5 до 10 років).</li>
                        <li>Ти <strong>сам добровільно заявив</strong>, що хочеш повернутися на службу.</li>
                        <li>Отримано <strong>письмову згоду командира</strong> (твоєї частини, нової частини або батальйону резерву), що тебе беруть назад.</li>
                        <li>Є <strong>рішення (Ухвала) СУДУ</strong> про закриття справи.</li>
                    </ol>
                </div>

                <div class="space-y-2 pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">2. Покроковий план повернення на службу:</p>
                    <ol class="list-decimal pl-5 space-y-2 text-xs">
                        <li><strong>КРОК 1. Подай заяву в «Армія+» або прийди до ВСП:</strong> Звернися до найближчого відділення Військової служби правопорядку (ВСП) або подай заяву через «Армія+». Тобі видадуть офіційне направлення (припис).</li>
                        <li><strong>КРОК 2. Прибудь до Батальйону резерву:</strong> У батальйоні резерву тебе протягом 3 днів ставлять на тимчасовий облік, відновлюють харчування та дають запит у ДБР.</li>
                        <li><strong>КРОК 3. Отримай письмову згоду командира:</strong> Командир частини (або батальйону резерву) пише документ про те, що згоден прийняти тебе на службу.</li>
                        <li><strong>КРОК 4. Подай клопотання прокурору та до суду:</strong> Слідчий або прокурор готують папери та передають їх до суду.</li>
                        <li><strong>КРОК 5. Отримай рішення суду:</strong> Суд виносить рішення про закриття справи і звільнення від відповідальності. Тільки після цього ти повністю чистий перед законом!</li>
                    </ol>
                </div>
            </div>
        </details>

        <!-- Ґ -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">💰 Ґ. Що буде з виплатами, речами та зброєю</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p>• <strong>Коли знову почнуть платити зарплату?</strong> Виплата грошей поновлюється <strong>з дня, коли виходить наказ командира</strong> про зарахування тебе до списків частини та вступ до служби.</p>
                <p>• <strong>Чи повернуть гроші за той час, поки був у СЗЧ?</strong> НІ. За всі дні та місяці відсутності зарплата, премії та "бойові" <strong>НЕ виплачуються і поверненню не підлягають</strong>.</p>
                <p>• <strong>Як отримати речі та зброю?</strong> Після видачі наказу тебе знову ставлять на речове та продовольче забезпечення, видають комплект форми та закріплюють зброю.</p>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub4', hubTitle: '4. Думаєш про СЗЧ / Зміна частини / Як повернутися на службу', text: 'Думаєш про СЗЧ Зміна частини Як повернутися на службу стаття 407 КК України ДБР ВСП 3 дні 30 днів психологічна підтримка 5522 переведення Армія+ відношення 30 днів Кадровий центр пастки батальйон резерву стаття 401 частина 5 повернення зарплата розшук', snippet: 'Як не допустити СЗЧ, що відбувається по днях, переведення через «Армія+», 5 пасток бійця, ст. 401 ч. 5 ККУ (повернення без тюрми), що з виплатами та зброєю.' });

window.hubsData['hub5'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🛡️ 5. Мої права, обов’язки, відповідальність та безпека</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Знати свої права, обов’язки та налаштування безпеки — це твій юридичний та цифровий бронежилет. Тут немає загальних фраз — тільки сухі факти, статті законів, цифри та покрокові інструкції.»</p>
    </div>

    <div class="bg-tactical-card border border-tactical-border p-4 rounded-lg space-y-2">
        <h3 class="font-bold text-tactical-gold text-base">🎛️ Навігація за 4 блоками:</h3>
        <ul class="text-xs text-tactical-muted space-y-1">
            <li>• [ ⚖️ 1. Мої ПРАВА (Дні відпусток, суми ГЗ, нові +10 000 грн, медична допомога) ]</li>
            <li>• [ 🪖 2. Мої ОБОВ'ЯЗКИ (Накази ст. 30–38 СВШ, медіа, неслужбові завдання командирів) ]</li>
            <li>• [ ⚖️ 3. Моя ВІДПОВІДАЛЬНІСТЬ (Догани та наслідки, невиконання наказу, штрафи, СЗЧ) ]</li>
            <li>• [ 🛡️ 4. Моя БЕЗПЕКА (Кроки налаштувань Signal/Telegram/WhatsApp/Viber, підозрілі знайомства, секс-робітниці, хабарі, право на зміну в/ч) ]</li>
        </ul>
    </div>

    <div class="space-y-4">
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ 1. Мої ПРАВА</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«Я маю законні права, які вимірюються конкретними днями відпустки, гривнями та нормами Статуту. Це не "прохання", це норма Закону України.»</p>

                <div class="space-y-1 text-xs">
                    <p class="font-semibold text-white">• Право на відпустку (Скільки днів і на скільки):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Щорічна основна відпустка:</strong> До 30 календарних днів на рік (надається частинами, не менше 15 днів за один раз) із збереженням грошового забезпечення.</li>
                        <li><strong>Час на дорогу:</strong> Додається до 2 діб в один бік.</li>
                        <li><strong>За сімейними обставинами:</strong> До 10 календарних днів (одруження, смерть чи важкий стан близьких родичів: батьки, дружина, діти, брати/сестри) + до 2 діб на дорогу.</li>
                        <li><strong>За станом здоров'я (після поранення/хвороби):</strong> Надається за рішенням ВЛК на 30–60 днів (із можливістю продовження).</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">• Право на грошове забезпечення (Скільки й з чого складається):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Мінімальне грошове забезпечення:</strong> Від 20 100 грн на місяць (залежно від посади, звання та вислуги років).</li>
                        <li><strong>Нова додаткова виплата (+10 000 грн):</strong> Спеціальна щомісячна надбавка для військовослужбовців (за вислугу, особливі умови або перебування на відповідних рубежах/посадах), що піднімає гарантований базований поріг ГЗ до понад 30 100 грн.</li>
                        <li><strong>Додаткова винагорода під час воєнного стану:</strong>
                            <ul class="list-circle pl-5 mt-1 space-y-0.5">
                                <li>30 000 грн — за виконання спеціальних/інтенсивних завдань.</li>
                                <li>50 000 грн — за виконання завдань у складі органів військового управління / штабів.</li>
                                <li>100 000 грн — за безпосередню участь у бойових діях / на передньому краї.</li>
                            </ul>
                        </li>
                        <li><strong>Оздоровчі виплати:</strong> 1 місячне грошове забезпечення раз на рік (при виході в щорічну відпустку).</li>
                        <li><strong>Підйомна допомога:</strong> Виплачується при передислокації частини чи призначенні в інший населений пункт (1 ГЗ на бійця + 50% на кожного члена сім’ї).</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">• Право на відпочинок та норми (ст. 216–218 СВШ ЗСУ):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Сон:</strong> Не менше 8 годин на добу за Статутом внутрішньої служби ЗСУ.</li>
                        <li><strong>Харчування:</strong> 3-разове гаряче харчування за Нормою №1 (або сухпай).</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">• Право на медичну допомогу та ВЛК:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>При погіршенні стану здоров'я я подаю рапорт на безпосереднього командира. Мене зобов'язані направити до медпункту частини.</li>
                        <li>Якщо лікування не дає результату — начмед зобов'язаний надати направлення до військового госпіталю.</li>
                        <li>Після тривалого лікування (понад 30 днів) я маю право вимагати проходження ВЛК (Військово-лікарської комісії) для визначення придатності до служби.</li>
                    </ul>
                </div>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🪖 2. Мої ОБОВ'ЯЗКИ</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«Дисципліна — це не просто слова, це чіткі межі закону та Статуту внутрішньої служби (СВШ) ЗСУ.»</p>

                <div class="space-y-1 text-xs">
                    <p class="font-semibold text-white">• Чий наказ виконувати і як це регламентує Статут (ст. 30–38 СВШ ЗСУ):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Безпосередній командир (ст. 31 СВШ):</strong> Це найближчий до тебе начальник (комвідділення / комвзводу). Ти зобов'язаний виконувати його накази в першу чергу (ст. 36 СВШ).</li>
                        <li><strong>Якщо наказ віддає вищестоячий (прямий) командир в обхід безпосереднього (ст. 37 СВШ):</strong> Ти зобов'язаний його виконати, але повинен доповісти про це своєму безпосередньому командиру.</li>
                        <li><strong>Якщо отримано новий наказ, який заважає виконанню попереднього (ст. 38 СВШ):</strong> Доповідаєш начальнику, який віддає новий наказ: «Я виконую наказ такого-то командира». Якщо той наполягає — виконуєш новий наказ. При цьому новий начальник сам повідомляє попереднього.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">• Виконання наказів та залізна межа (ст. 41 СВШ ЗСУ, ст. 60 Конституції України):</p>
                    <p>Я повинен беззаперечно виконувати законні накази командирів. <strong>Чітка межа:</strong> Згідно зі ст. 60 Конституції України, я маю право відмовитися від виконання завідомо злочинного наказу (наприклад: розстріляти цивільних, катувати, вчинити диверсію проти своїх, вкрасти майно). За відмову виконувати відверто злочинний наказ відповідальність НЕ настає.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-2">
                    <p class="font-bold text-tactical-alert">🚜 ⚠️ Неслужбові завдання від командирів (Будівництво дач, ремонт приватних авто):</p>
                    <p>«Залучення військовослужбовця до праці, не пов'язаної з виконанням завдань військової служби — це важкий злочин командира.»</p>
                    <p>• <strong>Що є порушенням:</strong> Накази вигружати стройматеріали на приватній ділянці командира, будувати йому дачу, ремонтувати його власне цивільне авто, працювати на його бізнес чи виконувати хатню роботу.</p>
                    <p>• <strong>Яка відповідальність чекає на командира:</strong> Ст. 426-1 КК України (Перевищення військовою службовою особою влади чи службових повноважень): В умовах воєнного стану залучення підлеглих до неслужбових робіт карається позбавленням волі на строк від 7 до 12 років.</p>
                    <p class="font-bold text-white">Як захиститися бійцю:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li><strong>Вимагай письмовий наказ або розпорядження:</strong> Скажи: «Командире, підготуйте письмовий наказ або розпорядження по частині на виконання цих робіт». Віддати такий наказ письмово командир не наважиться, бо це прямий доказ для ДБР.</li>
                        <li><strong>Фіксуй факти:</strong> Записуй точні дати, адреси, номери машин, прізвища залучених осіб. Зроби фото/відео (якщо це цивільний об'єкт).</li>
                        <li><strong>Подай рапорт вищому командуванню чи ВСП:</strong> Виклади факти в рапорті на ім'я командира бригади або звернися до Військової служби правопорядку (ВСП).</li>
                        <li><strong>Дзвінок на гарячу лінію ДБР:</strong> Якщо тиск продовжується — телефонуй до Державного бюро розслідувань (+38 (044) 300-27-07).</li>
                    </ol>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🎙️ ⚠️ Заборона коментарів медіа та в соцмережах:</p>
                    <p>• <strong>СУВОРЕ ПРАВИЛО:</strong> Категорично заборонено давати інтерв'ю, коментарі, проводити відеовключення блогерам чи медіа без офіційного дозволу СтратКому / пресслужби частини або письмового дозволу командира.</p>
                    <p>• <strong>Відповідальність:</strong> Догана, сувора догана, позбавлення премії (30к/50к/100к) за місяць, штраф за ст. 172-15 КУпАП (від 17 000 грн до 34 000 грн або гауптвахта до 15 діб). За розголошення таємниці → ст. 114-2 КК України (від 5 до 12 років тюрми).</p>
                </div>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ 3. Моя ВІДПОВІДАЛЬНІСТЬ</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«За кожен косяк є конкретна стаття, штраф, дисциплінарне стягнення чи термін у тюрмі. Знати це потрібно, щоб не втратити гроші, волю й службу.»</p>

                <div class="space-y-1 text-xs">
                    <p class="font-semibold text-white">📋 1. ДИСЦИПЛІНАРНІ СТЯГНЕННЯ ТА ДОГАНИ: Що це таке та які наслідки</p>
                    <p>«Догана — це офіційне письмове покарання за порушення військової дисципліни, яке заноситься в наказ командира та службову картку.»</p>
                    <p><strong>📌 Види дисциплінарних стягнень (за Дисциплінарним статутом ЗСУ):</strong> 1. Зауваження (найлегше). 2. Догана. 3. Сувора догана. 4. Попередження про неповну службову відповідність. 5. Пониження в посаді або пониження у військовому званні на один ступінь. 6. Позбавлення військового звання. 7. Звільнення з військової служби через службову невідповідність.</p>
                    <p><strong>💸 Які НАСЛІДКИ має Догана / Сувора догана:</strong></p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Згідно з Наказом МОУ №260, за наявності Догани боєць позбавляється від 10% до 30% щомісячної премії.</li>
                        <li>За наявності Суворої догани — позбавляється від 50% до 100% щомісячної премії.</li>
                        <li>Якщо догана оголошена за вживання алкоголю чи грубе порушення — боєць повністю позбавляється додаткової винагороди (30 000 / 50 000 / 100 000 грн) за весь місяць, у якому видано наказ!</li>
                        <li>Протягом строку дії догани (до її зняття або протягом 1 року) військовослужбовець не може бути підвищений у званні чи посаді, не висувається до державних нагород та цінних подарунків.</li>
                    </ul>
                    <p><strong>⏱️ Як з'являється і як зняти догану:</strong> Накладається наказом командира протягом 3 діб після службового розслідування. Строк дії: до 1 року (може бути знята достроково не раніше ніж через 3 місяці). Оскарження: протягом 1 місяця вищому командиру, у ВСП чи суд.</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">🚨 2. ВІДПОВІДАЛЬНІСТЬ ЗА НЕВИКОНАННЯ НАКАЗІВ (Кримінальна):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>НЕПОКОРА (ст. 402 КК України):</strong> Відкрита відмова виконати законний наказ командира, а також інше умисне невиконання наказу. Покарання в умовах воєнного стану: Позбавлення волі на строк від 5 до 10 років.</li>
                        <li><strong>НЕВИКОНАННЯ НАКАЗУ (ст. 403 КК України):</strong> Невиконання наказу начальника за відсутності ознак непокори (через недбалість, забудькуватість, халатність), якщо це спричинило тяжкі наслідки. Покарання в умовах воєнного стану: Позбавлення волі на строк від 5 до 8 років.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">🚨 3. СЗЧ ТА ДЕЗЕРТИРСТВО (Кримінальна):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Самовільне залишення військової частини чи місця служби (СЗЧ / ст. 407 КК України):</strong> В умовах воєнного стану → позбавлення волі на строк від 5 до 10 років. (Якщо вчинено вперше і боєць добровільно повернувся — за згодою командира суд може звільнити від покарання).</li>
                        <li><strong>Дезертирство (ст. 408 КК України):</strong> Втеча з метою взагалі не повертатися → Позбавлення волі на строк від 5 до 12 років.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">💸 4. АДМІНІСТРАТИВНІ ШТРАФИ ТА МАЙНО (КУпАП):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Вживання алкоголю або наркотиків на службі (ст. 172-20 КУпАП):</strong> Штраф від 8 500 грн до 17 000 грн (або гауптвахта 10–15 діб) + позбавлення премії 30к/50к/100к за весь місяць. Для сержантів та офіцерів: штраф від 17 000 грн до 34 000 грн (або гауптвахта 10–15 діб).</li>
                        <li><strong>Недбале ставлення до служби / втрата військового квитка (ст. 172-15 КУпАП):</strong> Штраф від 17 000 грн до 34 000 грн або гауптвахта до 15 діб.</li>
                        <li><strong>Матеріальна відповідальність за майно (Закон України «Про матеріальну відповідальність»):</strong> За втрату майна з недбалості — відшкодування у розмірі завданої шкоди (або до 1 місячного ГЗ). За пропив, продаж чи умисне знищення зброї/майна — повна вартість у 2–3 кратному розмірі + кримінальна стаття.</li>
                    </ul>
                </div>
            </div>
        </details>

        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🛡️ 4. Моя БЕЗПЕКА</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«Покрокові налаштування месенджерів, захист від ворожої агентури, хабарів та право на переведення в іншу частину.»</p>

                <div class="space-y-2 text-xs">
                    <p class="font-semibold text-white">📱 1. ПОКРОКОВІ НАЛАШТУВАННЯ БЕЗПЕКИ В МЕСЕНДЖЕРАХ:</p>
                    <div class="p-2 bg-tactical-bg border border-tactical-accent rounded space-y-1">
                        <p class="font-bold text-green-400">🟢 SIGNAL (Найбезпечніший месенджер у ЗСУ):</p>
                        <p>1. Захисти PIN-кодом: Налаштування → Обліковий запис → PIN-код Signal → Увімкни «Блокування реєстрації».</p>
                        <p>2. Увімкни зникаючі повідомлення: У кожному чаті натисни на ім'я контакту → Зникаючі повідомлення → Встанови таймер 1 година або 1 день.</p>
                        <p>3. Заблокуй скріншоти: Налаштування → Конфіденційність → Захист екрана → Увімкни.</p>
                    </div>

                    <div class="p-2 bg-tactical-bg border border-tactical-accent rounded space-y-1">
                        <p class="font-bold text-green-400">🟢 WHATSAPP:</p>
                        <p>1. Двокрокова перевірка: Налаштування → Обліковий запис → Двокрокова перевірка → Включити (PIN-код).</p>
                        <p>2. Конфіденційність: Час останнього відвідування та онлайн → «Ніхто»; Фото профілю → «Мої контакти» або «Ніхто»; Зникаючі повідомлення → 24 години.</p>
                    </div>

                    <div class="p-2 bg-tactical-bg border border-tactical-alert rounded space-y-1">
                        <p class="font-bold text-tactical-alert">🔴 TELEGRAM (Месенджер високого ризику — ховай дані!):</p>
                        <p>1. Приховай номер телефону: Налаштування → Конфіденційність → Номер телефону → «Ніхто».</p>
                        <p>2. Пошук за номером: Хто може знайти → «Мої контакти».</p>
                        <p>3. Останній візит та онлайн → «Ніхто».</p>
                        <p>4. Увімкни 2FA: Двокрокова перевірка → Встанови пароль.</p>
                    </div>

                    <div class="p-2 bg-tactical-bg border border-tactical-alert rounded space-y-1">
                        <p class="font-bold text-tactical-alert">🔴 VIBER (Месенджер високого ризику):</p>
                        <p>1. Вимкни перемикачі «В мережі» та «Переглянуто».</p>
                        <p>2. Запити на повідомлення → Вимкни (забороняє незнайомцям писати без згоди).</p>
                    </div>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">🕵️‍♂️ 2. Як відповідати підозрілим незнайомцям, «секс-робітницям» та навіть РОДИЧАМ:</p>
                    <p>• <strong>Сценарій 1: Пише незнайомець чи «симпатична дівчина» (Tinder / Telegram / Facebook):</strong> Запитання про локацію, частину, зброю, прохання скинути фото або зустрітися. Скрипт: «Цивільними питаннями не цікавлюся, військові теми не обговорюю» → БЛОКУЙ КОНТАКТ ОДРАЗУ. Пам'ятай: повії та сауни — це класична пастка ворожої розвідки.</p>
                    <p>• <strong>Сценарій 2: Пишуть РОДИЧІ чи ДРУЗІ у месенджері з дивними проханнями:</strong> («Скинь фото посвідчення», «Де ти точно?», «Проголосуй за посиланням», «Скинь гроші»). НІКОЛИ не переходь за посиланнями. ЗРОБИ ПРЯМИЙ ДЗВІНОК і запитай спільне таємне питання («Як звати кота?»).</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">🛑 3. Захист від корупції, хабарів та конфлікту інтересів:</p>
                    <p>• <strong>Що таке ХАБАР (ст. 368 КК України):</strong> Будь-які гроші, майно чи послуги за підписання рапорту, відпустку чи ВЛК. Мінімальної суми немає — навіть 500 грн є злочином! Покарання: 5–10 років тюрми з конфіскацією.</p>
                    <p>• <strong>КОНФЛІКТ ІНТЕРЕСІВ (ст. 172-7 КУпАП):</strong> Призначення родичів на посади чи виписування премій собі. Штраф до 6 800 грн + звільнення.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-gold rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-gold">🛡️ 4. Сексуальні злочини, домагання та ПРАВО НА ЗМІНУ в/ч:</p>
                    <p>• <strong>Юридична кваліфікація:</strong> Сексуальне домагання (ст. 154 КК) через службову залежність; Зґвалтування/насильство (ст. 152–153 КК) — від 7 до 15 років тюрми.</p>
                    <p>• <strong>ОФІЦІЙНЕ ПРАВО НА ЗМІНУ ВІЙСЬКОВОЇ ЧАСТИНИ (в/ч):</strong> Згідно із ЗУ «Про забезпечення безпеки осіб, які беруть участь у кримінальному судочинстві», потерпілі від сексуального насильства, домагань чи катувань мають законне право на <strong>негайне переведення до іншої військової частини протягом 24 годин</strong> після подання заяви до ВСП, ДБР чи прокуратури.</p>
                    <p>• <strong>Телефони захисту:</strong> Гаряча лінія МОУ: 1512 або 0 800 500 442; ДБР: +38 (044) 300-27-07; ВСП: 0 800 500 442; Безоплатна правнича допомога: 0 800 213 103.</p>
                </div>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub5', hubTitle: '5. Мої права, обов’язки, відповідальність та безпека', text: 'Мої права обов’язки відповідальність безпека дні відпусток 20100 10000 30000 50000 100000 70000 накази стаття 30 38 СВШ стаття 60 Конституції неслужбові завдання дачі стаття 426-1 ККУ догана непокора 402 невиконання 403 СЗЧ 407 дезертирство 408 алкоголь 172-20 Signal WhatsApp Telegram Viber хабар право на зміну в/ч', snippet: 'Юридичний та цифровий захист: права на відпустку, ГЗ, +10 000 грн, обовʼязки ст. 30–38 СВШ, неслужбові завдання, догани та премії, кримінальна відповідальність, налаштування месенджерів.' });

window.hubsData['hub6'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🌴 6. Хочу у відпустку / Сімейні обставини</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Отримання законного відпочинку чи відпустки за сімейними обставинами — це не "прохання", а твоє законне право військовослужбовця.»</p>
    </div>

    <div class="space-y-4">
        <!-- А -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🗓️ А. Види відпусток: скільки днів та за яких умов належить</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ЗАКОННЕ ПРАВИЛО: Під час дії воєнного стану військовослужбовці мають право на кілька видів відпусток. Головна умова щорічної відпустки — одночасна відсутність у підрозділі НЕ більше 30% особового складу.»</p>

                <div class="space-y-1 text-xs">
                    <p class="font-semibold text-white">1. Щорічна основна відпустка (За графіком):</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li><strong>Тривалість:</strong> До 30 календарних днів на рік.</li>
                        <li><strong>Як надається:</strong> Зазвичай ділиться на частини (наприклад, 15 + 15 днів або 10 + 10 + 10 днів). Основна частина має бути не менше 15 днів.</li>
                        <li><strong>Додатковий час на дорогу:</strong> Додається до днів відпустки і НЕ вираховується з основного терміну (до 2 діб в один бік).</li>
                        <li><strong>Збереження виплат:</strong> 100% грошового забезпечення (ГЗ) зберігається за весь період відпустки.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">2. Відпустка за сімейними обставинами (Та з інших поважних причин):</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li><strong>Тривалість:</strong> До 10 календарних днів (плюс додатковий час на дорогу).</li>
                        <li><strong>Збереження виплат:</strong> Грошове забезпечення зберігається.</li>
                        <li><strong>Головні підстави:</strong> Укладення шлюбу; Тяжкий стан здоров'я або смерть близьких родичів; Пожежа або стихійне лихо, що спіткало сім'ю; Народження дитини; Інші критичні сімейні обставини за рішенням командира.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">3. Відпустка за станом здоров'я (Після поранення або хвороби):</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li><strong>Тривалість:</strong> Надається на строк від 30 до 60 календарних днів (з можливістю продовження на підставі повторного рішення ВЛК).</li>
                        <li><strong>Підстава:</strong> Виключно Постанова ВЛК (Військово-лікарської комісії).</li>
                        <li><strong>Збереження виплат:</strong> Зберігається 100% ГЗ та додаткова винагорода (для поранених при виконанні бойових завдань — 100 000 грн).</li>
                    </ul>
                </div>
            </div>
        </details>

        <!-- Б -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📲 Б. Як подати рапорт на відпустку через "Армія+"</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p class="font-bold text-tactical-gold">«ЄДИНИЙ СТАНДАРТ: Подача рапортів здійснюється електронно через застосунок "Армія+". Це унеможливлює "втрату" або приховування документа і фіксує точний час та терміни розгляду командиром.»</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Відкрий застосунок «Армія+» → Розділ «Рапорти».</li>
                    <li>Обери необхідний тип: «Рапорт на щорічну основну відпустку» або «Рапорт на відпустку за сімейними обставинами».</li>
                    <li>Вкажи дати початку та завершення відпустки, адресу перебування під час відпустки (місто в Україні або країну перебування) та номери телефонів для зв'язку.</li>
                    <li>Якщо це відпустка за кордон, за сімейними обставинами чи за станом здоров'я — завантаж фото/PDF підтверджувальних документів.</li>
                    <li>Вкажи ID командира та надішли рапорт. Отримай унікальний номер реєстрації рапорту у системі.</li>
                </ol>
            </div>
        </details>

        <!-- В -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🌍 В. ВІДПУСТКА В УКРАЇНІ VS ВІДПУСТКА ЗА КОРДОНОМ</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="space-y-1 text-xs">
                    <p class="font-bold text-tactical-gold">🔹 1. Розрахунок днів на дорогу:</p>
                    <p>• <strong>🇺🇦 В Україні:</strong> Додається до 2 діб в один бік (максимум до 4 діб загалом) залежно від відстані. Дорога додається до основних днів відпустки і не вираховується з них.</p>
                    <p>• <strong>🇪🇺 За кордоном:</strong> 4 дні на дорогу (по 2 доби в кожен бік) додаються за замовчуванням у рапорті. Головна умова їх легальності — підтвердження штампами Прикордонної служби (ДПСУ) у закордонному паспорті.</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🔹 2. Рішення командира та дозвіл:</p>
                    <p>• <strong>🇺🇦 В Україні:</strong> Надається згідно з графіком відпусток або за наявності підтверджених сімейних обставин.</p>
                    <p>• <strong>🇪🇺 За кордоном:</strong> Потребує окремого дозволу командира в/ч. Командир має право дозволити або відмовити у виїзді за межі країни (з урахуванням бойової обстановки та доступу до державної таємниці).</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🔹 3. Необхідні документи для виїзду:</p>
                    <p>• <strong>🇺🇦 В Україні:</strong> 1. Витяг із наказу командира про надання відпустки; 2. Відпускний квиток із зазначенням міста в Україні.</p>
                    <p>• <strong>🇪🇺 За кордоном:</strong> 1. Витяг із наказу з <strong>офіційним дозволом виїзду за кордон</strong>; 2. Відпускний квиток із приміткою про дозвіл виїзду до конкретної країни; 3. Чинний закордонний паспорт.</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🔹 4. Підтвердження легальності відпочинку та дороги:</p>
                    <p>• <strong>🇺🇦 В Україні:</strong> Штампи/печатки про прибуття та вибуття у відпускному квитку з <strong>ТЦК та СП</strong>, підрозділу <strong>ВСП</strong> або <strong>місцевої ради (селищної/сільської/міської)</strong>, якщо ТЦК далеко.</p>
                    <p>• <strong>🇪🇺 За кордоном:</strong> <strong>Штампи ДПСУ (прикордонників) у закордонному паспорті</strong> про виїзд та в'їзд. Консульський облік чи довідки НЕ вимагаються — штампів на кордоні повністю достатньо для стройової частини!</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-border rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-gold">🔹 5. Покроковий алгоритм підтвердження 4 днів дороги за кордоном:</p>
                    <p>1. Подай рапорт в «Армія+»: Зазнач країну та заклади 4 дні на дорогу в рапорті.</p>
                    <p>2. Отримай відпускний квиток: Переконайся, що в ньому є примітка про виїзд за кордон та дні дороги.</p>
                    <p>3. Пройди контроль на КПП: Прикордонники ДПСУ ставлять штамп про виїзд у паспорт.</p>
                    <p>4. Звіт у частині при поверненні: Покажи у стройовій службі штампи про в'їзд/виїзд у закордонному паспорті — це закриває питання легальності 4 днів дороги.</p>
                </div>
            </div>
        </details>

        <!-- Г -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚠️ Г. 5 Головних пасток із відпустками та що робити</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 1: «Поїхав у відпустку одразу після того, як подав рапорт»</p>
                    <p>• <strong>Ризик:</strong> Подача рапорту сама по собі НЕ дає права залишати частину. Без Наказу командира та Відпускного квитка це вважається СЗЧ!</p>
                    <p>• <strong>ЩО РОБИТИ:</strong> Негайно зв'яжися з командиром/сержантом, вимагай витягу з наказу та квитка через СЕДО/месенджер. Протягом 24 годин прибудь до найближчого ТЦК/сільради для штампа прибуття.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 2: «Прикордонники не випускають за кордон, бо немає спеціального напису»</p>
                    <p>• <strong>Ризик:</strong> Якщо у квитку написано лише «м. Львів» замість дозволу на виїзд за кордон із зазначенням країни — виїзд блокують.</p>
                    <p>• <strong>ЩО РОБИТИ:</strong> Негайно зв'яжися зі стройовою штабу в/ч, вимагай внести зміни до Наказу та виписати оновлений Відпускний квиток або терміново надіслати витяг через СЕДО на КПП ДПСУ.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 3: «Захворів під час відпустки і просто пролежав удома чи за кордоном»</p>
                    <p>• <strong>Ризик:</strong> Без реєстрації хвороби в ТЦК (або сільраді) в/ч НЕ врахує цивільний лікарняний і подасть на СЗЧ!</p>
                    <p>• <strong>ЩО РОБИТИ:</strong> Повідом ТЦК та командира протягом 24 годин. З лікарняним прибудь до ТЦК для реєстрації хвороби та продовження відпустки, подай рапорт про хворобу через «Армія+».</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 4: «Відпустка за сімейними обставинами без документів»</p>
                    <p>• <strong>Ризик:</strong> Без документів командир має законне право відхилити рапорт.</p>
                    <p>• <strong>ЩО РОБИТИ:</strong> Попроси рідних надіслати якісне фото документів (довідка лікарні, свідоцтво про смерть/шлюб) і подай повторно через «Армія+». Або рідні звертаються до місцевого ТЦК для офіційного запиту.</p>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-alert rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-alert">🔴 Пастка 5: «Забув стати на облік за місцем відпустки в Україні»</p>
                    <p>• <strong>Ризик:</strong> Відсутність штампів є порушенням військової дисципліни.</p>
                    <p>• <strong>ЩО РОБИТИ:</strong> Терміново прибудь до найближчого ТЦК, ВСП або органу місцевого самоврядування (сільради/ЦНАП) та попроси поставити штамп про прибуття й вибуття "одночасно".</p>
                </div>
            </div>
        </details>

        <!-- Ґ -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚨 Ґ. Що робити, якщо рапорт "застряг" або відмовляють</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p>• <strong>Строки розгляду рапорту в «Армія+»:</strong> Сімейні обставини (невідкладний стан) — <strong>негайно (до 24–48 годин)</strong>; Щорічна основна відпустка — <strong>до 72 годин</strong>.</p>
                <p class="font-semibold text-white">Покроковий план дій:</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Перевір статус рапорту в «Армія+» (унікальний ID та час підписання).</li>
                    <li>Звернення до командира бригади із зазначенням ID рапорту у разі прострочення строків.</li>
                    <li>Дзвінок на Гарячу лінію Міноборони: <strong>1512</strong> або <strong>0 800 500 442</strong> та реєстрація скарги із номером ID рапорту.</li>
                </ol>
            </div>
        </details>

        <!-- Д -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚗 Д. Правила виїзду, штампи (ТЦК / Сільрада) та повернення</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <ol class="list-decimal pl-5 space-y-1.5">
                    <li><strong>Отримай документи до виїзду з частини:</strong> Витяг із наказу командира про надання відпустки (з зазначенням місця/країни); Відпускний квиток із терміном та днями дороги.</li>
                    <li><strong>Підтвердження перебування (протягом 24 годин):</strong>
                        <ul class="list-disc pl-5 mt-0.5">
                            <li>В Україні (якщо є ТЦК/ВСП): Штамп про прибуття у найближчому ТЦК та СП чи ВСП.</li>
                            <li>В Україні (якщо ТЦК далі 30 км): Орган місцевого самоврядування (сільська/селищна рада / ЦНАП) зі штампом та гербовою печаткою.</li>
                            <li>За кордоном: Штампи перетину кордону (виїзд/в'їзд) у закордонному паспорті від ДПСУ на КПП.</li>
                        </ul>
                    </li>
                    <li><strong>Зняття з обліку перед поверненням:</strong> За день до виїзду отримай штамп про <strong>вибуття</strong> у ТЦК чи сільраді.</li>
                    <li><strong>Прибуття до частини та здача документів:</strong> Негайно доповідай командиру та здай відпускний квиток (або пред'яви штампи паспорта) у стройову службу.</li>
                </ol>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub6', hubTitle: '6. Хочу у відпустку / Сімейні обставини', text: 'Хочу у відпустку Сімейні обставини щорічна основна відпустка 30 днів дорога 2 доби сімейні 10 днів за станом здоровʼя ВЛК 100000 Армія+ відпустка за кордоном 4 дні дороги ДПСУ закордонний паспорт пастки штамп ТЦК сільрада витяг з наказу відпускний квиток 1512', snippet: 'Види відпусток (щорічна 30 днів, сімейна до 10 днів, ВЛК), подача через «Армія+», Україна vs За кордон (4 дні дороги, ДПСУ), 5 головних пасток, штампи ТЦК/сільради.' });

window.hubsData['hub7'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">💰 7. Гроші, пільги, соціальні гарантії, родина та професійне зростання</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Тобі не треба самостійно копатися в сотнях законів та постановах КМУ. Тут без канцелярщини розписано все, що тобі належить за законом.»</p>
    </div>

    <div class="space-y-4">
        <!-- 1 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧭 1. За моїм статусом та станом здоров'я</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="space-y-2 text-xs">
                    <p class="font-bold text-tactical-gold">🪖 1. Я — військовослужбовець ЗСУ (Базовий пакет для всіх)</p>
                    <p>• <strong>А. Кредитний захист (Звільнення від відсотків та штрафів):</strong> Сума: економія від 1 000 до 50 000+ грн щомісяця (0% за кредит, 0 грн штрафів за п. 15 ст. 14 ЗУ №2011-XII). Подати Довідку Форми 5 із «Армія+»/«Дії» до банку/МФО. Строки: 1–3 дні. (Тіло кредиту повертається, відсотки скасовуються).</p>
                    <p>• <strong>Б. Збереження цивільного робочого місця:</strong> Гарантоване збереження робочої посади та цивільного стажу (середній заробіток скасовано).</p>
                    <p>• <strong>В. Безоплатне кріоконсервування біоматеріалу:</strong> 100% безоплатно в рамках державної програми. Подати рапорт через «Армія+», отримати направлення, звернутися до клініки МОЗ та обов'язково оформити нотаріальне розпорядження.</p>
                </div>

                <div class="space-y-2 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🎖️ 2. Я отримав посвідчення УБД (Пільги ветерана)</p>
                    <p>• <strong>А. Знижка 75% на комунальні послуги (ЖКП):</strong> Економія від 1 500 до 4 500 грн щомісяця. Подати заяви через портал ПФУ або «Дію». (Знижка діє суворо у межах соціальних норм споживання).</p>
                    <p>• <strong>Б. Безкоштовний проїзд та +14 днів відпустки:</strong> 0 грн за міський/приміський транспорт. Додаткова відпустка 14 днів зі 100% збереженням ГЗ. (14 днів не переносяться на наступний рік і згорають 31 грудня!).</p>
                </div>

                <div class="space-y-2 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🚑 3. Отримав поранення / травму / Маю інвалідність внаслідок війни</p>
                    <p>• <strong>Одноразова грошова допомога (ОГД) при інвалідності або втраті працездатності:</strong></p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li><strong>I група інвалідності:</strong> 400 прожиткових мінімумів (≈ 1 211 200 грн).</li>
                        <li><strong>II група інвалідності:</strong> 300 прожиткових мінімумів (≈ 908 400 грн).</li>
                        <li><strong>III група інвалідності:</strong> 250 прожиткових мінімумів (≈ 757 000 грн).</li>
                        <li><strong>Часткова втрата працездатності (без інвалідності):</strong> від 70 000 до 210 000 грн.</li>
                    </ul>
                    <p>Алгоритм: Довідка про обставини травми (Додаток 5) → ВЛК → МСЕК/ОФС → Подання через ТЦК або Департамент соцзабезпечення МОУ. (Формулювання має бути «Захист Батьківщини» без алкогольного сп'яніння!).</p>
                </div>
            </div>
        </details>

        <!-- 2 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📍 2. За місцем моєї реєстрації (Місцеві бонуси)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p>• <strong>🏛️ 1. Реєстрація у м. Києві (або ВПО в Києві):</strong> 30 000 грн одноразово мобілізованим/контрактникам; 45 000 грн при пораненні (при кожному пораненні); від 5 000 до 153 000 грн щорічна допомога за програмою «Турбота». Оформлюється через «Київ Цифровий» або Kyiv Military Hub (0 800 300 633).</p>
                <p>• <strong>🌲 2. Київська область:</strong> Адресна допомога від 10 000 до 50 000 грн особам з інвалідністю I–II групи + 50% компенсації відсотків за програмою «єОселя» через УСЗН громади.</p>
                <p>• <strong>🇺🇦 3. Інші громади України (Львів, Дніпро, Одеса, Харків):</strong> Виплати від 10 000 до 50 000 грн при мобілізації або пораненні через місцевий ЦНАП / міськраду.</p>
            </div>
        </details>

        <!-- 3 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">👨‍👩‍👧‍👦 3. Пільги для моєї родини та діток</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p class="font-bold text-tactical-gold">👶 1. Пільги для ДІТЕЙ військовослужбовця та УБД:</p>
                <ul class="list-disc pl-5 space-y-0.5">
                    <li><strong>Дитсадки та Школи:</strong> 100% безкоштовне гаряче харчування для дітей УБД (заява директору + копія посвідчення).</li>
                    <li><strong>Оздоровлення:</strong> Безкоштовні путівки в табори через ЦНАП / УСЗН («Е-оздоровлення»).</li>
                    <li><strong>Вища та фахова освіта:</strong> Переведення з контракту на бюджет + безкоштовний гуртожиток + соціальна стипендія (1 180 – 1 500 грн/міс) до 23 років на денній формі.</li>
                </ul>

                <p class="font-bold text-tactical-gold mt-2">👩‍🦰 2. Пільги для ДРУЖИНИ / ЧОЛОВІКА та БАТЬКІВ:</p>
                <ul class="list-disc pl-5 space-y-0.5">
                    <li><strong>Комунальні пільги 75%:</strong> Розповсюджуються на дружину, неповнолітніх дітей та непрацездатних батьків, які проживають разом.</li>
                    <li><strong>Пільгова іпотека «єОселя» під 3%:</strong> Подання заявки через «Дію», перший внесок від 20%, ставка 3% річних замість 15–20%.</li>
                </ul>
            </div>
        </details>

        <!-- 4 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🎓 4. Мій розвиток та професійне зростання</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="space-y-1 text-xs">
                    <p class="font-bold text-tactical-gold">⚡ 1. Прискорені офіцерські курси L-1 (Звання «Молодший лейтенант» за 3–6 місяців):</p>
                    <p>Для рядових/сержантів із цивільною вищою освітою (не нижче бакалавра). Збереження 100% ГЗ та посади. Рапорт подається в «Армія+» на ім'я командира. ВЛК + відрядження до навчального центру/ВВНЗ. Після завершення — звання «молодший лейтенант» та офіцерська посада.</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🪖 2. Сержантські курси NCO (Базовий, Середній, Високий та Вищий рівні):</p>
                    <p>ОКБЗ (базовий — комвідділення, мол. сержант), ОКСЗ (середній — головний сержант взводу, сержант/ст. сержант), ОКВЗ (високий — гол. сержант роти/бат, штаб-сержант), ОКВищЗ (вищий — бригадний рівень, майстер-сержант). Програми за стандартами НАТО, підвищення окладів. Подання рапорту в «Армія+».</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🏛️ 3. Повноцінне навчання у ВІЙСЬКОВИХ вишах (ВВНЗ):</p>
                    <p>100% повне державне утримання, збереження ГЗ за останньою посадою, випуск офіцером (лейтенант). Контракт після випуску на 5 років.</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🎓 4. Навчання у ЦИВІЛЬНИХ закладах освіти:</p>
                    <p>Вступ для УБД без НМТ/ЗНО (за співбесідою), квота-1 на бюджетні місця, соціальна стипендія. Діючі військові навчаються на заочній чи дистанційній формі.</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">📜 5. Ваучер на безкоштовне навчання від Державної служби зайнятості:</p>
                    <p>Ваучер на суму до 30 280 грн для опанування однієї зі 120+ цивільних спеціальностей (IT, водіння, саперна справа, інженерія) через dcz.gov.ua.</p>
                </div>
            </div>
        </details>

        <!-- 5 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">💳 5. Фінансовий захист та банки</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p>• <strong>1. Вибір банку:</strong> ПриватБанк/Ощадбанк (0 грн комісія на зняття в усіх банкоматах, строгий фінмоніторинг при переказах понад 100 тис грн); Monobank/Sense/ПУМБ (перекази без комісій до 50 тис грн, кешбек).</p>
                <p>• <strong>2. Захист від кредитів та МФО (Закон №2011-XII):</strong> Списання 100% відсотків та штрафів на період служби. Подати Довідку Форми 5 до банку. Скарга на неправомірні дії МФО подається до Нацбанку України (0 800 505 240).</p>
                <p>• <strong>3. Захист від ігроманії та боргів (КРАІЛ):</strong> Повна блокада від ставок в усіх легальних казино на строк від 6 місяців до 3 років. Заяву подає сам боєць або родина (дружина/батьки) через krail.gov.ua.</p>
            </div>
        </details>

        <!-- 6 -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📑 6. Мої грошові рапорти через «Армія+»</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p class="font-bold text-tactical-gold">«ЗАЛІЗНЕ ПРАВИЛО: Усі фінансові та масові рапорти в ЗСУ подаються в електронній формі через застосунок "Армія+".»</p>
                <p>• <strong>1. Структура ГЗ:</strong> Базове ГЗ (від 20 100 грн); Нова доплата (+10 000 грн); Бойові: 30 000 грн (спецзавдання), 50 000 грн (штаби), 100 000 грн (передній край), 70 000 грн (за кожні 30 днів на "нулі").</p>
                <p>• <strong>2. Зміна реквізитів (IBAN) в «Армія+»:</strong> Скопіюй IBAN (UA + 27 цифр) → «Армія+» → Рапорт «Зміна банківських реквізитів» → Прикріпи довідку банку. Подавати до 20 числа поточного місяця!</p>
                <p>• <strong>3. Оздоровчі:</strong> Рапорт на матеріальну допомогу на оздоровлення (1 місячне ГЗ, від 20 100 до 38 000+ грн). Виплачується 1 раз на рік (подати до 15 грудня, інакше згорає!).</p>
                <p>• <strong>4. Соціально-побутова допомога:</strong> Рапорт на матеріальну допомогу на соц-побут (1 місячне ГЗ) за наявності підстав (поранення, народження дитини, смерть родичів, лікування понад 30 днів).</p>
                <p>• <strong>5. Підйомна допомога:</strong> 100% місячного ГЗ на бійця + 50% на кожного члена сім'ї при передислокації або призначенні в інший населений пункт.</p>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub7', hubTitle: '7. Гроші, виплати, пільги, майно та списання', text: 'Гроші виплати пільги майно списання професійне зростання кредитний захист Закон 2011-XII збереження робочого місця кріоконсервація УБД ЖКП 75 відсотків ОГД МСЕК 1211200 908400 757000 Київ 30000 45000 Турбота діти харчування єОселя курси L-1 молодший лейтенант сержантські курси NCO ВВНЗ ваучер 30280 банки ПриватБанк Монобанк МФО КРАІЛ ігроманія IBAN оздоровчі матеріальна допомога підйомна', snippet: 'Грошове забезпечення (20 100 грн, +10 000 грн, 30k/50k/100k/70k), пільги УБД 75%, ОГД при пораненні (до 1.2 млн грн), виплати Києва/ОТГ, курси L-1, NCO, захист від кредитів, рапорти IBAN/оздоровчі/матеріалка/підйомні.' });

window.hubsData['hub8'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">👨‍👩‍👧‍👦 8. Сім’я, стосунки, діти та репродуктивне здоров’я</h1>
    </div>

    <div class="space-y-4">
        <!-- А -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">💔 А. Стосунки на відстані: Сварки про гроші, знецінення та дружина за кордоном</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ГОЛОВНЕ ПРАВИЛО: На відстані будь-яка дрібниця здається катастрофою. Конфлікти не вирішуються виплеском агресії або ультиматумами по телефону в стані втоми.»</p>

                <div class="space-y-1 text-xs">
                    <p class="font-semibold text-white">1. Сварки через гроші та різні види служби/виплат:</p>
                    <p>• <strong>Проблема:</strong> Докори вдома про гроші: «Чому в інших "бойові" 100 тисяч, а ми бідуємо?» або навпаки «Ти на передку ризикуєш життям, а ми тут не знаємо, як дожити до наступної виплати».</p>
                    <p>• <strong>Чому так відбувається:</strong> Нерозуміння цивільними специфіки армійських виплат, суттєве здорожчання життя, виснаження дружини побутом або самотністю, а також витрати бійця на особисте спорядження, ремонт транспорту й ліки.</p>
                    <p class="text-tactical-gold">🛠️ <strong>Практичні кроки для виходу з конфлікту:</strong></p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Розділіть бюджети на 3 прозорі частини: 1) Обов'язкові сімейні витрати (діти, житло, їжа) — фіксована сума карткою щомісяця; 2) "Фонд служби/підрозділу" (ремонт авто, спорядження, медицина, побут); 3) Особисті "недоторкані" накопичення сім'ї на майбутнє.</li>
                        <li>Прозорість без дріб'язкових звітів: Домовтеся про суму, яку дружина витрачає вільно без узгоджень, щоб вона не почувалася "жебрачкою", яка просить дозвіл на кожну купівлю.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">2. Дружина за кордоном ("два паралельні світи"):</p>
                    <p>• <strong>Проблема:</strong> Вона живе в Європі, вчить мову, облаштовує побут. Тобі здається, що вона "забула про війну й про тебе". Їй здається, що ти закрився і став чужим.</p>
                    <p class="text-tactical-gold">🛠️ <strong>Як зберегти зв'язок:</strong></p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Спільні короткі ритуали: Випити каву разом по відеозв'язку, обговорити нейтральні речі (книжки, фільми, кумедні історії).</li>
                        <li>Зняття ідеалізації: Життя біженця за кордоном — це важкий стрес, мовний бар'єр та самотність. Розуміння цього знімає взаємні образи.</li>
                        <li>Планування майбутнього: Домовтеся про конкретні плани після війни/демобілізації. Спільна мета тримає шлюб міцніше за відстань.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">3. Зради, ревнощі та "телефонний контроль":</p>
                    <p>• <strong>Проблема:</strong> Підозри та телефонний контроль знищують довіру: «Чому не брав трубку?».</p>
                    <p>• <strong>🛠️ Рішення:</strong> По телефону з'ясовувати стосунки НЕЛЕГАЛЬНО. Всі серйозні рішення приймаються ТІЛЬКИ очно під час відпустки. Завчасно попереджай про наряди, бойові виходи або відсутність мережі.</p>
                </div>
            </div>
        </details>

        <!-- Б -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🎒 Б. Діти на відстані: Порадник для малюків, підлітків, дорослих та пільги</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="space-y-1 text-xs">
                    <p class="font-bold text-tactical-gold">🍼 1. Малюки (0–6 років): "Тато — це не страшний дядько у формі, а захисник"</p>
                    <p><strong>Проблеми й страхи батька:</strong> «Я випадаю з життя дитини, вона росте без мене», «Під час зустрічі дитина лякається камуфляжу, ховається за маму і не йде на руки», «Я дратуюся, коли малюк плаче або розбиває речі, бо відвик від дитячого гамору».</p>
                    <p class="font-semibold text-white">🛠️ Практичні дії та конкретні методики:</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>«Казка на ніч із планшета»: Записуй відео (на 2–3 хвилини), де ти читаєш короткі казки або просто показуєш місцевий пейзаж чи цуценя. Мама має вмикати це перед сном — так дитина чує твій голос щодня.</li>
                        <li>«Якірний оберег»: Залиш малюку свій випраний шеврон, годинник чи футболку з твоїм запахом. Нехай мама каже: <em>"Це татів оберег, він тебе оберігає, поки тато працює"</em>.</li>
                        <li>Правило «Першої години у відпустці»: Коли повертаєшся — <strong>НЕ БІЖИ ОДРАЗУ ОБІЙМАТИ ТА ХАПАТИ НА РУКИ</strong>. Для малюка ти зараз великий, шумний і чужий чоловік. Сядь на підлогу, розклади іграшку і просто зачекай. За 20–30 хвилин дитина сама підійде.</li>
                        <li>Переодягайся в цивільне: Форма та берці зчитуються дитиною як чужорідний, «суворий» атрибут. Вдома одразу вдягай м'який домашній одяг.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🎒 2. Підлітки (7–16 років): "Бунт, ігнорування, страх та ґаджети"</p>
                    <p><strong>Проблеми й страхи батька:</strong> «Він взагалі не дзвонить і відповідає односкладно: "Норм", "Ок"», «Він/вона грубить матері та кидає навчання, а я не можу це зупинити», «Він відходить у ґаджети чи компанії й соромиться моєї армійської служби».</p>
                    <p class="font-semibold text-white">🛠️ Практичні дії та конкретні методики:</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Зніми армійського сержанта: Фрази «Я за тебе тут здоров’я віддаю, а ти двійки носиш!» повністю блокують довіру. Підліток зчитує це як маніпуляцію і закривається ще більше.</li>
                        <li>Заходь через його світ (Ігри та тренди): Завантаж ту саму онлайн-гру, в яку грає син/донька (Minecraft, Roblox, CS, PUBG). Спільний півгодинний матч увечері будує міст довіри краще за будь-які моралі.</li>
                        <li>Питання про допомогу та пораду: Підлітки прагнуть бути дорослими. Запитай: <em>"Син/доню, ти в нас круто тямиш у навушниках/телефонах, підкажи, що мені обрати?"</em> або <em>"Попорадь якийсь крутий фільм подивитися увечері"</em>. Це повертає їм відчуття важливості.</li>
                        <li>Захисти від агресії: Підліток грубить не тому, що не любить тебе, а тому, що він <strong>тривожиться і боїться втратити батька</strong>. Його бунт — це захисний панцир від болю.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-bold text-tactical-gold">🎓 3. Дорослі діти (18+ років): "Безпомічність, призовні страхи та дистанція"</p>
                    <p><strong>Проблеми й страхи батька:</strong> Пекуче безсилля: У дорослої дитини рушиться життя, а ти на службі і не можеш фізично прийти на допомогу; Призовні тривоги за сина; Образа на мовчання: «Я не отримую сну, ризикую життям, а вони не можуть набрати пару хвилин».</p>
                    <p class="font-semibold text-white">🛠️ Практичні дії та порадник для батька:</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Зніми провину: Ти робиш головне — тримаєш безпеку країни, щоб у дітей було майбутнє. Твоя сила зараз — бути <strong>стійким емоційним якорем</strong>, а не бігти вирішувати побутові проблеми замість них.</li>
                        <li>Слухай без "армійської моралі": Дорослій дитині потрібні не повчання, а відчуття, що її вислухають без знецінення та фрази «А от у мене на передку...».</li>
                        <li>Зроби перший крок: Напиши коротке повідомлення без докорів: <em>"Доню/сину, я поруч. Просто знай, що я про тебе думаю. Як ти?"</em>.</li>
                    </ul>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-border rounded text-xs space-y-1">
                    <p class="font-bold text-tactical-gold">📋 Державні пільги для дітей військовослужбовців (Чек-лист):</p>
                    <p>• Безкоштовне харчування у дитсадках та школах (заява директору + копія посвідчення УБД / довідка Ф.13).</p>
                    <p>• Оздоровлення та табори: Безкоштовні путівки від місцевої громади / ЦНАП.</p>
                    <p>• Пільги при вступі та навчанні (до 23 років): Соціальна стипендія, першочергове зарахування, пільгове проживання у гуртожитку.</p>
                </div>
            </div>
        </details>

        <!-- В -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🔄 В. Втрата зв'язку з реальністю та адаптація при поверненні з бойових</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p class="font-bold text-tactical-gold">«ОКРЕМА УВАГА: Якщо ти повернувся з бойового відрядження або перевівся з передка — твоїй нервовій системі потрібен час на перезавантаження.»</p>
                <p>• <strong>1. Конфлікт "Різних швидкостей":</strong> На передку все було чорно-білим. У тилу або під час відпустки все "розмите". Виникає спалах дратівливості через цивільний шум, сміх у кафе чи "дріб'язкові" проблеми вдома. Пам'ятай: те, що люди живуть цивільним життям — це не прояв зневаги, це знак того, що ти виконуєш свою роботу. Не вимагай від дружини зрозуміти бойовий досвід — вона його не переживала. Шукай підтримку серед побратимів або військового психолога, а вдома створюй затишок.</p>
                <p>• <strong>2. Синдром "Я сам усе вирішу":</strong> Дружина за час твоєї відсутності навчилася сама ремонтувати кран, платити рахунки й виховувати дітей. Ти почуваєшся непотрібним і намагаєшся наводити "армійський порядок". Не ламай побут. Запитай: «Яку задачу я можу взяти на себе повністю?». Повертай статус у сім'ї турботою, а не наказами.</p>
            </div>
        </details>

        <!-- Г -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🏥 Г. Важка хвороба або догляд за родичем (Рапорт та документи)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p class="font-bold text-tactical-gold">«Якщо вдома сталася біда — у дружини, батьків чи дитини виявлено важке захворювання або потрібен терміновий догляд, ти маєш право на законну відпустку за сімейними обставинами.»</p>
                <p>• <strong>1. Підстави для відпустки (до 10 днів + дорога):</strong> Тяжкий стан здоров'я або смерть близьких родичів (дружина, батьки, діти, брати/сестри); Потреба в догляді за хворою дружиною/дитиною за висновком лікарів.</p>
                <p class="font-semibold text-white">2. Покроковий алгоритм подачі:</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Рідні роблять якісне фото/скан медичного висновку (ЛКК/МСЕК або виписка з лікарні) та документів про родинні зв'язки.</li>
                    <li>Подай Рапорт на відпустку за сімейними обставинами через застосунок «Армія+», додавши ці файли.</li>
                    <li>Якщо рапорт затримують — рідні можуть звернутися до свого <strong>місцевого ТЦК та СП</strong>, показати медичні довідки та попросити ТЦК надіслати офіційний телеграфний запит на командування військової частини.</li>
                </ol>
            </div>
        </details>

        <!-- Ґ -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧬 Ґ. Інтимне життя: пошук нової ніжності, секс, відновлення та кріоконсервація</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ЧЕСНО ПРО ІНТИМ: Війна, контузії, нічні наряди та хронічна тривога ламають не лише фізичну функцію, а й здатність відкрито проявляти ніжність. Це НЕ втрата чоловічої сили і НЕ відсутність кохання — це фізичний захист виснаженого мозку.»</p>

                <div class="space-y-1 text-xs">
                    <p class="font-semibold text-white">1. Проблема №1: Втрата здатності до обіймів та "нової ніжності"</p>
                    <p>• <strong>Як це виглядає:</strong> Ти повертаєшся у відпустку або звільнення, але <strong>скам'яніваєш від простих обіймів дружини</strong>. Доторки здаються надмірними, а тіло автоматично напружується. Дружина плаче й думає: «Я його більше не приваблюю, він мене відштовхує».</p>
                    <p>• <strong>Чому так відбувається:</strong> У зоні бойових дій або на цілодобових чергуваннях тіло перебуває у стані "бий або біжи". М'язовий панцир і сенсорний захист блокують розслаблення. Мозок вважає ніжність "загрозою втрати пильності".</p>
                    <p class="font-semibold text-white">🛠️ Як повернути ніжність кроками (Без поспіху):</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Словесна легалізація: Скажи дружині прямо: <em>"Я тебе дуже кохаю, але моє тіло застрягло у війні/нарядах. Мені потрібен час, щоб розслабитися. Не тисни на мене, дай мені кілька днів"</em>.</li>
                        <li>Безконтактна присутність: Просто лежіть поруч під однією ковдрою, дивіться фільм або тримайтеся за руки без вимоги продовжувати це інтимом.</li>
                        <li>Тілесне розвантаження: Попроси дружину зробити простий масаж стоп чи плечей без сексуального підтексту, або разом сходіть у баню чи гарячий душ. Це знімає м'язовий спазм.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">2. Проблема №2: Секс, еректильна дисфункція та фізіологічні збої</p>
                    <p>• <strong>Як це виглядає:</strong> Відсутність ерекції, передчасне сім'явиверження або повна відсутність оргазму чи лібідо. Чоловік відчуває панічний сором, вважає себе "інвалідом", замикається або напивається.</p>
                    <p>• <strong>Чому так відбувається:</strong> Хронічний брак сну, контузії (ЧМТ), зниження рівня тестостерону, статутний тиск або наслідки бойового стресу. Сексуальна функція вимикається першою, коли організм вважає, що перебуває в небезпеці.</p>
                    <p class="font-semibold text-white">🛠️ Практичний алгоритм відновлення:</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Категорична відмова від алкоголю: Алкоголь дає хибну ілюзію розслаблення, але <strong>вбиває ерекцію і підсилює агресію</strong>.</li>
                        <li>Залиште секс "на потім": Зніміть із себе обов'язок "обов'язково виконати подружній обов'язок" у першу ж ніч. Нехай секс стане природним наслідком відновлення довіри та відпочинку.</li>
                        <li>Фахова медицина (Куди звертатися): Якщо проблеми тривають понад 2–3 місяці — звернися до <strong>уролога/андролога</strong> та <strong>військового невролога</strong> (перевірити наслідки контузій/ЧМТ та здати аналіз на вільний тестостерон). Це лікується медикаментозно!</li>
                    </ul>
                </div>

                <div class="p-3 bg-tactical-bg border border-tactical-border rounded text-xs space-y-2">
                    <p class="font-bold text-tactical-gold">3. Безоплатна кріоконсервація біоматеріалу (Державна програма):</p>
                    <p>«Держава повністю оплачує забір, заморожування та зберігання репродуктивних клітин для всіх військовослужбовців.»</p>
                    <p>• <strong>Що входить у програму НСЗУ:</strong> Повне медичне обстеження, забір біоматеріалу, кріоконсервація та зберігання біоматеріалу на час воєнного стану (і 3 роки у разі загибелі).</p>
                    <p>• <strong>Прямі контакти та заклади (Куди звертатися військовому):</strong></p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Київ: ДУ «Інститут педіатрії, акушерства і гінекології імені академіка О.М. Лук’янової НАМН України» (тел. гарячої лінії: 044 483 80 67).</li>
                        <li>Київ: Київський міський центр репродуктивної та перинатальної медицини (тел.: 044 411 92 19).</li>
                        <li>Харків: ДУ «Інститут проблем ендокринної патології ім. В.Я. Данилевського НАМН України».</li>
                        <li>Львів: Львівський обласний державний клінічний перинатальний центр (тел.: 032 275 92 13).</li>
                        <li>Одеса: Одеська обласна клінічна лікарня (Центр планування сім’ї).</li>
                        <li>Гаряча лінія НСЗУ (Національна служба здоров'я України): Зателефонуй за номером <strong>16-77</strong> (безкоштовно з мобільних), щоб дізнатися найближчий підписаний заклад у твоєму регіоні.</li>
                    </ul>
                    <p>• <strong>Покроковий алгоритм дій:</strong></p>
                    <ol class="list-decimal pl-5 space-y-0.5">
                        <li>Отримай довідку про проходження військової служби (Форма 5) у стройовій частині.</li>
                        <li>Звернися до обраної клініки з паспортом, ІПН та посвідченням військового / УБД.</li>
                        <li>Пройди безкоштовне обстеження та процедуру забору біоматеріалу.</li>
                        <li><strong>ОБОВ'ЯЗКОВО:</strong> Оформи нотаріальне розпорядження (у будь-якого нотаріуса), де вкажи, що дружина має право використати біоматеріал для народження дитини.</li>
                    </ol>
                </div>
            </div>
        </details>

        <!-- Д -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🆘 Д. Якщо з воїном на бойових втрачено зв'язок (Інструкція для рідних)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p class="font-bold text-tactical-alert">«ГОЛОВНЕ ПРАВИЛО ДЛЯ РОДИНИ: Якщо військовослужбовець перебуває у бойовому відрядженні або на передку — відсутність зв'язку протягом 24–72 годин є НОРМОЮ через РЕБ, відсутність мережі та виконання завдань.»</p>
                <p><strong>1. Чого КАТЕГОРИЧНО НЕ МОЖНА робити рідним:</strong></p>
                <ul class="list-disc pl-5 space-y-0.5">
                    <li>❌ <strong>НЕ публікувати у Facebook / Telegram / TikTok</strong> фото у формі, прізвище, номер військової частини, позивний та місце перебування. Це шкодить безпеці підрозділу та самому бійцю (особливо якщо він у криївці чи полоні).</li>
                    <li>❌ <strong>НЕ дзвонити беззупинно</strong> на особистий номер — це розряджає телефон та може демаскувати позицію звуком чи світлом.</li>
                </ul>
                <p class="font-semibold text-white">2. Чіткий алгоритм дій для сім'ї:</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Зберегти спокій на 48–72 години: Зачекати відновлення зв'язку чи повернення з завдання.</li>
                    <li>Зв'язатися з черговим частини або заступником з МПЧ: Зателефонувати офіційній контактній особі підрозділу або побратимам.</li>
                    <li>Якщо зв'язку немає понад 3–5 днів: Звернутися на Гарячу лінію МОУ (<strong>1512</strong>), Уповноваженого з питань зниклих безвісти (<strong>0 800 300 041</strong>) або Об'єднаний центр СБУ (<strong>067 650 83 32</strong>).</li>
                </ol>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub8', hubTitle: '8. Сім’я, стосунки, діти та репродуктивне здоров’я', text: 'Сім’я стосунки діти репродуктивне здоров’я сварки гроші дружина за кордоном ревнощі діти малюки підлітки адаптація повернення з бойових догляд за родичем відпустка 10 днів секс нова ніжність еректильна дисфункція кріоконсервація біоматеріал НСЗУ клініки нотаріус втрачено звʼязок рідні 24 72 години розшук 1512 0800300041 СБУ', snippet: 'Стосунки на відстані, сварки про гроші, дружина за кордоном, порадник для дітей (малюки, підлітки, дорослі), адаптація після бойових, догляд за родичем, секс та кріоконсервація, якщо втрачено звʼязок.' });

window.hubsData['hub9'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">🎖️ 9. Куточок сержанта (Шпори, чек-листи, статутні важелі та підтримка підрозділу)</h1>
        <p class="text-tactical-muted text-sm font-semibold">«Сержант — це хребет армії, перший бар'єр психологічної підтримки, лідер дисципліни та головний запобіжник СЗЧ, алкоголізму чи суїциду в підрозділі. Боєць із бідою та претензією приходить до сержанта. Тут зібрано практичні "шпори", алгоритми розмов, чек-листи та законні статутні важелі ЗСУ для підтримки порядків без самоуправства й крику.»</p>
    </div>

    <div class="space-y-4">
        <!-- А -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🛡️ А. Сержант як перший бар'єр: Нова роль сержантського корпусу ЗСУ</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ГОЛОВНИЙ ПРИНЦИП: "Слідуй за мною, роби як я". Сержант відповідає не лише за виконання наказу та чисту зброю, а й за морально-психологічний стан та дисципліну підлеглих. Виявлена на ранній стадії проблема бійця — це збережене життя і відсутність СЗЧ у вашому розрахунку чи відділенні.»</p>

                <div class="space-y-1 text-xs">
                    <p class="font-semibold text-white">1. Чому саме сержант — це головний запобіжник СЗЧ та бід у підрозділі:</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li><strong>Довіра "землі":</strong> Боєць побоюється офіцерської догани чи ВСП, але із сержантом він ділить побут, наряди, службу та цигарку.</li>
                        <li><strong>Раннє виявлення:</strong> Командир батальйону чи психолог бачать бійця тільки на шикуванні або у зведеннях. Сержант помічає зміни в поведінці в перші ж години.</li>
                        <li><strong>Використання сайту як інструменту:</strong> Коли боєць питає про рапорт, відпустку, сімейну біду, гроші чи ВЛК — відкрий відповідний ХАБ і дай йому готову відповідь.</li>
                    </ul>
                </div>
            </div>
        </details>

        <!-- Б -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">📖 Б. Статутні важелі сержанта: Законні правила дисципліни за Статутами ЗСУ</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ЗНАЙ СВІЙ СТАТУТ: Сердитися й кричати — означає розписуватися у власній безпорадності. Дисципліна тримається на знанні Статутів ЗСУ (Дисциплінарного, Внутрішньої служби) та умінні застосовувати законні важелі впливу.»</p>

                <div class="space-y-1 text-xs">
                    <p class="font-semibold text-white">1. Головні обов'язки сержанта щодо підлеглих (Статут внутрішньої служби):</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li><strong>Навчати та вимагати:</strong> Дотримання військової дисципліни, правильного носіння форми, збереження зброї й майна.</li>
                        <li><strong>Знати своїх людей:</strong> Прізвище, ім'я, день народження, сімейний стан, ділові та морально-психологічні якості, індивідуальні особливості.</li>
                        <li><strong>Турбуватися про підлеглих:</strong> Перевіряти забезпечення їжею, обмундируванням, відпочинком, медичною допомогою.</li>
                        <li><strong>Попереджати правопорушення:</strong> Негайне реагування на випадки вживання алкоголю, самовільного залишення місця служби чи конфліктів.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">2. Дисциплінарна влада сержанта (Дисциплінарний статут ЗСУ):</p>
                    <p>Командир відділення та головний сержант мають ОФІЦІЙНЕ ПРАВО застосовувати такі види заохочень та стягнень:</p>
                    <p><strong>Заохочення (За сумлінне виконання та відзнаку):</strong> Оголошення подяки; Зняття раніше накладеного дисциплінарного стягнення; Надання дозволу на один вихід із розташування частини (звільнення) поза чергою.</p>
                    <p><strong>Законні дисциплінарні стягнення (За порушення та халатність):</strong> Зауваження; Зауваження з занесенням до службової картки; Догана; Сувора догана; Призначення поза чергою в наряд з обслуговування (до 5 нарядів — для солдатів/матросів).</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">3. Алгоритм фіксації порушень без рукоприкладства та самосуду:</p>
                    <p class="text-tactical-alert">❌ Заборонено: Фізична розправа, приниження гідності, "дідівщина", позбавлення сну/їжі. Це кримінальний злочин!</p>
                    <p class="text-green-400">✅ Законний порядок фіксації:</p>
                    <ol class="list-decimal pl-5 space-y-0.5">
                        <li><strong>1. Усне зауваження:</strong> Офіційна вимога припинити порушення із посиланням на Статут.</li>
                        <li><strong>2. Рапорт командиру взводу/роти:</strong> Якщо боєць ігнорує вимоги — сержант подає письмовий рапорт із зазначенням фактів порушення (відмова виконати наказ, невиходи на чергування, алкоголь).</li>
                        <li><strong>3. Службове розслідування:</strong> На підставі рапорту командир частини накладає стягнення, позбавляє премії чи передає матеріали до ВСП/ДБР.</li>
                    </ol>
                </div>
            </div>
        </details>

        <!-- В -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚠️ В. Чек-лист кризи бійця: 5 небезпечних маркерів</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p class="font-bold text-tactical-gold">«СЕРЖАНТСЬКИЙ НАГЛЯД: Якщо ти помітив хоча б 2 із цих 5 маркерів у підлеглого — діяти треба НЕГАЙНО. Це сигнальна ракета кризи!»</p>
                <div class="space-y-2">
                    <p><strong>1. 🔴 Маркер СЗЧ (Самостійне залишення частини):</strong> Що ти бачиш: Розмови про "недієвість командування", збір речей у цивільну сумку, пошук цивільного одягу, розпитування про штрафи, пошук таксі, байдужість до зброї та майна. Сховані фрази: «Та мені все одно, що буде далі», «Я більше тут сидіти не збираюся», «Хай краще посадять, ніж терпіти це».</p>
                    <p><strong>2. 🔴 Маркер Суїциду (Гострий суїцидальний ризик):</strong> Що ти бачиш: Раптове "роздавання" особистих речей (ніж, годинник, спорядження) побратимам, прощання у розмовах, раптовий спокій після депресії, пошук усамітнення зі зброєю. Сховані фрази: «Скоро ви від мене відпочинете», «Я вже нікому не буду тягарем», «Немає сенсу це терпіти далі».</p>
                    <p><strong>3. 🔴 Маркер ПАР / Алкоголізму:</strong> Що ти бачиш: Запах перегару на шикуванні/наряді, регулярне запізнення, тремор рук, ховання пляшок, агресія на зауваження, раптові зміни настрою (від апатії до ейфорії). Джерело проблеми: Намагання "залити" хронічний біль, брак сну, контузію або страх.</p>
                    <p><strong>4. 🔴 Маркер Фінансової катастрофи / БОРГІВ (Ігроманія):</strong> Що ти бачиш: Постійне прохання позичити "до зарплати", ховання екрана телефону (ставки, казино), продаж спорядження, дзвінки колекторів, зникнення суми ГЗ за добу.</p>
                    <p><strong>5. 🔴 Маркер Бойового вигорання та виснаження:</strong> Що ти бачиш: Виснажений погляд, байдужість до гігієни та безпеки (ігнорування каски/броника), уповільнена реакція, хронічне безсоння.</p>
                </div>
            </div>
        </details>

        <!-- Г -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">💬 Г. Алгоритм розмови "один на один"</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p class="font-bold text-tactical-gold">«ЗОЛОТЕ ПРАВИЛО СЕРЖАНТА: Орати й карати — це найпростіше і найнеефективніше. Якщо ти хочеш дізнатися реальну проблему, зніми "сержантську броню" і поговоріть як чоловік із чоловіком.»</p>
                <p class="font-semibold text-white">Покроковий алгоритм бесіди:</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li><strong>1. Обери правильне місце та час:</strong> Ніколи не виясняй проблеми при всьому підрозділі! Поклич бійця прогулятися, випити кави, сядьте в авто чи окремій кімнаті без свідків.</li>
                    <li><strong>2. Правильний початок розмови (Без крику й статуту):</strong>
                        <ul class="list-disc pl-5 mt-0.5">
                            <li class="text-tactical-alert">❌ Як НЕ треба: «Ти чому рило завалив?! Чому форма брудна? Ти що, СЗЧ плануєш, скотина?!» (Зараз він закриється або збреше).</li>
                            <li class="text-green-400">✅ Як ТРЕБА: «Брат/друже, я бачу, що ти сам не свій останні три дні. Я тут не для того, щоб тебе строїти чи карати. Я бачу, що щось сталося. Поділися, що вдома чи на службі? Давай вирішимо разом».</li>
                        </ul>
                    </li>
                    <li><strong>3. Слухай і не перебивай (Правило 80/20):</strong> 80% часу говорить боєць, 20% — ти. Не кажи одразу: «Та це все дурниці, от у мене було...». Дай йому виговоритися.</li>
                    <li><strong>4. Легалізуй його біль:</strong> Скажи: «Я тебе розумію. На твоєму місці я б теж бісився/тривожився. Це нормальна реакція».</li>
                    <li><strong>5. Переходь до конкретного алгоритму рішення:</strong> Запитай: «Яка зараз головна проблема? Гроші, дружина, командир чи ВЛК?». Відкрийте разом потрібний ХАБ на цьому сайті та покажи законний вихід.</li>
                </ol>
            </div>
        </details>

        <!-- Ґ -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🚨 Ґ. Профілактика СЗЧ, алкоголю/ПАР, конфліктів та проблем із командирами</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«ПРАКТИЧНИЙ ПОРАДНИК СЕРЖАНТА: Нижче наведено детальні алгоритми з альтернативними варіантами дій залежно від ситуації в підрозділі.»</p>

                <div class="space-y-1 text-xs">
                    <p class="font-semibold text-white">1. Дії сержанта при загрозі СЗЧ (Покроковий розбір):</p>
                    <p>• <strong>Правило перших хвилин:</strong> Не погрожуй одразу тюрмою, ВСП чи ДБР — розмови про "посадимо" лише підштовхують бійця до швидкої втечі.</p>
                    <p>• <strong>Поясни реальні наслідки:</strong> Скажи прямо: <em>"СЗЧ — це не вирішення проблеми, це заморозка грошей (виплати зупиняють першого ж дня), подача в розшук і реальний строк. Проблема вдома чи з хворобою не зникне, але ти втратиш статус і зарплату"</em>.</p>
                    <p>• <strong>Альтернатива А (Якщо причина — хвороба або гостре виснаження):</strong> Допоможи бійцю прямо зараз скласти й подати електронний рапорт на відпустку за сімейними обставинами або на медогляд у застосунку «Армія+». Супроводь його до медичного пункту частини.</p>
                    <p>• <strong>Альтернатива Б (Якщо причина — конфлікт або психологічний зрив):</strong> Тимчасово вилучи бійця з лінії вогню/нарядів на 24 години (поставити на господарські завдання у тилу підрозділу), надай йому можливість виспатися та зв'язатися з військовим психологом чи медиком.</p>
                    <p>• <strong>Альтернатива В (Якщо причина — системна непридатність до конкретної позиції):</strong> Подай клопотання командиру взводу/роти про переведення бійця в інший розрахунок, відділення чи на суміжну спеціальність (водій, діловод, зв'язківець, РЕБ), де навантаження відповідає його стану.</p>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">2. Дії сержанта при виявленні алкогольного/наркотичного сп'яніння:</p>
                    <p>• <strong>Крок 1:</strong> Негайно вилуч зброю та боєприпаси! Це золоте правило безпеки. Якщо боєць проявляє агресію — залуч 2–3 фізично міцних побратимів для безпечного роззброєння.</p>
                    <p>• <strong>Крок 2:</strong> Фізична ізоляція та контроль: Помісти бійця у безпечне приміщення/бліндаж під нагляд чергового, дай багато води. Категорично заборони сідати за кермо, іти на позиції чи ставати у наряд.</p>
                    <p>• <strong>Крок 3:</strong> Ранковий аналіз та альтернативне рішення:</p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Варіант А (Випадковий разовий зрив): Зранку дізнайся ДЖЕРЕЛО (контузія, біль, новина про розлучення чи смерть рідних). Постав бойові та господарські завдання для фізичного виплеску енергії + направ до медика/психолога.</li>
                        <li>Варіант Б (Системний аватар): Подай офіційний рапорт командиру роти для проведення освідування (драгер / направлення в наркологічну клініку) для накладення дисциплінарного стягнення та позбавлення премії.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">3. Дії сержанта при конфліктах у колективі ("земляки", "бойові vs тилові", молоді vs досвідчені):</p>
                    <p>• <strong>Правило нульової толерантності:</strong> Твердо придушуй будь-які поділи на "хто більше воював", "хто з тилу" чи "хто з якої області". Всі носити однаковий піксель і виконують один наказ.</p>
                    <p>• <strong>Алгоритм гасіння гострого конфлікту:</strong> Розведи сторін по різних кутках: Не розбирай бійку/сварку перед усім підрозділом. Дай 15 хвилин охолонути. Особиста розмова з кожним зачинщиком: З'ясуй особистий мотив (втома, боротьба за авторитет, розподіл побутових обов'язків).</p>
                    <p>• <strong>Альтернативні практичні дії сержанта:</strong></p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Метод «Спільного окопу»: Постави конфліктних бійців у пару на спільне чергування, облаштування позиції чи ремонт майна. Спільна важка робота та залежність один від одного швидко зближують.</li>
                        <li>Метод «Зміни ролей»: Доручи бійцю з "тиловим" досвідом навчати молодих побуту, а "бойовому" — проводити заняття з тактичної медицини чи зброї. Це піднімає статус обох.</li>
                        <li>Метод «Кардинального розведення»: Якщо особиста неприязнь перейшла у фазу неконтрольованої агресії — ініціюй переведення одного з бійців до іншого відділення чи взводу.</li>
                    </ul>
                </div>

                <div class="space-y-1 text-xs pt-2 border-t border-tactical-border">
                    <p class="font-semibold text-white">4. Якщо у бійця конфлікт із вищим командиром (Офіцером/командиром роти):</p>
                    <p>• <strong>Роль сержанта:</strong> Сержант — це захисник солдата і водночас перший помічник офіцера. Твоє завдання — не роздмухувати бунт, а зняти напругу й знайти компроміс.</p>
                    <p>• <strong>Алгоритм роботи з бійцем:</strong> Заспокой бійця та зніми емоції: <em>"Я розумію твоє обурення, але відкритий бунт чи образа командира — це стаття ККУ (відмова виконувати наказ чи погроза начальнику). Ти зробиш гірше тільки собі"</em>. Допоможи сформулювати претензію письмово або аргументовано в статутній формі без лайки.</p>
                    <p>• <strong>Алгоритм роботи з офіцером/командиром (Альтернативні дії сержанта):</strong></p>
                    <ul class="list-disc pl-5 space-y-0.5">
                        <li>Варіант А (Тет-а-тет з командиром): Зайди до командира роти/взводу наодинці й спокійно доповіж: <em>"Пане командире, боєць [Прізвище] на межі психологічного зриву. Якщо ми будемо тиснути далі — буде СЗЧ чи відмова. Дозвольте я візьму його на себе на 2 доби / переставлю в інший розрахунок"</em>.</li>
                        <li>Варіант Б (Медіація та залучення МПЗ/психолога): Якщо командир уперто йде на конфлікт, а боєць правий за законами ЗСУ — залуч заступника з морально-психологічного забезпечення (МПЗ) чи головного сержанта батальйону як нейтрального арбітра.</li>
                        <li>Варіант В (Законна зміна підпорядкування): Допоможи бійцю подати рапорт на переведення в суміжний підрозділ батальйону/бригади за сімейними чи професійними обставинами.</li>
                    </ul>
                </div>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub9', hubTitle: '9. Куточок сержанта (Шпори, чек-листи, статутні важелі)', text: 'Куточок сержанта Шпори чек-листи статутні важелі підтримка підрозділу перший бар’єр Дисциплінарний статут ЗСУ заохочення стягнення рапорт рукоприкладство чек-лист кризи бійця 5 маркерів СЗЧ суїцид ПАР алкоголь борги вигорання розмова один на один профілактика аватари конфлікти шпора швидкої реакції', snippet: 'Інструменти лідера: статутні обовʼязки та дисциплінарна влада, чек-лист 5 маркерів кризи бійця (СЗЧ, суїцид, ПАР, борги, вигорання), розмова один на один, профілактика конфліктів, шпора швидкої реакції.' });

window.hubsData['hub10'] = `<div class="space-y-6">
    <div class="bg-tactical-card border border-tactical-border p-6 rounded-lg">
        <h1 class="text-2xl font-bold text-tactical-gold mb-2">📞 10. Контакти та гарячі лінії</h1>
        <p class="text-tactical-muted text-sm font-semibold">«ЗНАЙ, КУДИ ЗВЕРТАТИСЯ: Якщо твоє питання не вирішується всередині підрозділу, або ти стикнувся з порушенням прав, бюрократичним тупиком чи гострою психологічною кризою — нижче зібрано перевірені державні, армійські та громадські канали допомоги.»</p>
    </div>

    <div class="space-y-4">
        <!-- А -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4" open>
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🏛️ А. Захист прав, скарги та Уповноважені (МОУ, ТрО, Омбудсман, ВСП)</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«Офіційні лінії для розв'язання конфліктів, подачі скарг на неправомірні дії, затримку виплат або порушення прав військовослужбовців.»</p>

                <div class="space-y-2 text-xs">
                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Гаряча лінія Командування Сил територіальної оборони ЗСУ (Сіл ТрО):</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 0 800 507 028</p>
                        <p class="text-tactical-muted mt-1"><strong>Призначення:</strong> Пріоритетний прямий канал зв'язку для бійців Сил ТрО. Питання проходження служби, забезпечення, виплат, переведення, подачі рапортів та розв'язання конфліктів у підрозділах ТрО.</p>
                    </div>

                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Гаряча лінія Міністерства оборони України (МОУ):</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 1512 (дзвінки безкоштовні зі всіх операторів)</p>
                        <p class="text-tactical-muted mt-1"><strong>Призначення:</strong> Скарги на затримку виплат, рапортів, ВЛК, постачання майна та харчування.</p>
                    </div>

                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Центральне управління захисту прав військовослужбовців (Уповноважений з прав військовослужбовців):</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 1512 (через меню МОУ) або 0 800 500 442</p>
                        <p class="text-tactical-muted mt-1"><strong>Призначення:</strong> Захист від самоуправства, неправомірних наказів, розслідування порушень прав бійця.</p>
                    </div>

                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Уповноважений ВРУ з прав людини (Омбудсман):</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 0 800 50 17 20 (або електронна пошта: hotline@ombudsman.gov.ua)</p>
                        <p class="text-tactical-muted mt-1"><strong>Призначення:</strong> Системні порушення прав людини, ненадання медичної допомоги, конфлікти з ТЦК чи командуванням.</p>
                    </div>

                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Гаряча лінія Військової служби правопорядку (ВСП):</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 044 456 41 28 (або гаряча лінія ЦУ ВСП: 0 800 500 410)</p>
                        <p class="text-tactical-muted mt-1"><strong>Призначення:</strong> Повідомлення про правопорушення, алкоголізм, злочини чи зловживання у частині.</p>
                    </div>
                </div>
            </div>
        </details>

        <!-- Б -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🧠 Б. Психологічна допомога та кризові лінії 24/7</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <p class="font-bold text-tactical-gold">«АНОНІМНО ТА БЕЗКОШТОВНО: Якщо у тебе або побратима гостра тривога, вигорання, думки про СЗЧ чи суїцид — дзвони негайно. На лінії працюють професійні психологи.»</p>

                <div class="space-y-2 text-xs">
                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Лінія психологічної підтримки для військових та їхніх рідних «Варто жити»:</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 5522 (короткий номер із мобільного, безкоштовно)</p>
                        <p class="text-tactical-muted mt-1"><strong>Призначення:</strong> Кризова допомога при вигоранні, ПТСР, сімейних конфліктах, важкому бойовому стресі.</p>
                    </div>

                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Служба психологічної підтримки ЗСУ (МОУ):</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 0 800 500 410 (секція психологічного забезпечення)</p>
                    </div>

                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Національна гаряча лінія з попередження суїцидів Lifeline Ukraine:</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 7333 (цілодобово 24/7, повністю анонімно)</p>
                        <p class="text-tactical-muted mt-1"><strong>Призначення:</strong> Гострі суїцидальні стани, важкі психологічні травми, панічні атаки.</p>
                    </div>
                </div>
            </div>
        </details>

        <!-- В -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">⚖️ В. Юридична та безоплатна правнича допомога</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-3">
                <div class="space-y-2 text-xs">
                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Координаційний центр з надання безоплатної правничої допомоги (БПД):</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 0 800 213 103 (або у Telegram-боті БПД)</p>
                        <p class="text-tactical-muted mt-1"><strong>Призначення:</strong> Безкоштовні консультації юристів, допомога у складанні рапортів, адвокатський захист для УБД та військових.</p>
                    </div>

                    <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                        <p class="font-bold text-white">• Юридична служба ГО «Юридична сотня»:</p>
                        <p class="text-tactical-gold font-bold text-sm">📞 0 800 308 100</p>
                        <p class="text-tactical-muted mt-1"><strong>Призначення:</strong> Роз'яснення законодавства про виплати, поранення, ВЛК, звільнення та пільги для сімей.</p>
                    </div>
                </div>
            </div>
        </details>

        <!-- Ґ -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🛡️ Ґ. Внутрішня служба частини: Куди йти особисто</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <p class="font-bold text-tactical-gold">«ПРИНЦИП "ЄДИНОГО ВІКНА": Якщо ти маєш будь-яку біду, конфлікт чи незрозумілу ситуацію — звертайся до Кабінету Психологічної підтримки персоналу (ППП). Тут тебе вислухають і перенаправлять до потрібного фахівця частини (юриста, медпункту, ЦВС чи командування).»</p>
                <p><strong>• Кабінет Психологічної підтримки персоналу (ППП):</strong></p>
                <p><strong>Де шукати:</strong> У штабі частини або медичному пункті.</p>
                <p><strong>З якими питаннями йти:</strong></p>
                <ul class="list-disc pl-5 space-y-0.5">
                    <li>Соціальний та психологічний супровід;</li>
                    <li>Проблеми з командирами та співслужбовцями;</li>
                    <li>Проблеми з фінансами, здоров'ям, сім’єю чи дітьми;</li>
                    <li>Ґендерні питання, дискримінація або тривога.</li>
                </ul>
                <p><strong>Як це працює:</strong> Вся первинна допомога надається тут. За потреби фахівці ППП самі сконтактують та перенаправлять тебе далі — до <strong>юридичного радника</strong>, <strong>медпункту</strong>, <strong>офіцера з ЦВС/соціального супроводу</strong> чи <strong>командування частини</strong>.</p>
            </div>
        </details>

        <!-- Г -->
        <details class="bg-tactical-card border border-tactical-border rounded p-4">
            <summary class="font-bold text-tactical-gold cursor-pointer text-base">🔍 Г. Пошук зниклих безвісти, полонені та зв'язок для рідних</summary>
            <div class="mt-3 text-sm text-tactical-muted space-y-2 text-xs">
                <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                    <p class="font-bold text-white">• Уповноважений з питань осіб, зниклих безвісти за особливих обставин:</p>
                    <p class="text-tactical-gold font-bold text-sm">📞 0 800 300 041 (або гаряча лінія МВС: 16-01)</p>
                </div>
                <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                    <p class="font-bold text-white">• Об'єднаний центр з пошуку та звільнення полонених при СБУ:</p>
                    <p class="text-tactical-gold font-bold text-sm">📞 067 650 83 32 / 098 341 07 22</p>
                </div>
                <div class="p-3 bg-tactical-bg border border-tactical-border rounded">
                    <p class="font-bold text-white">• Координаційний штаб з питань поводження з військовополоненими (КШППВ):</p>
                    <p class="text-tactical-gold font-bold text-sm">📞 0 800 300 529</p>
                </div>
            </div>
        </details>
    </div>
</div>`;

window.hubsSearchIndex.push({ hubId: 'hub10', hubTitle: '10. Контакти та гарячі лінії', text: 'Контакти гарячі лінії юридична допомога звʼязок Сил ТрО 0800507028 МОУ 1512 0800500442 Уповноважений з прав військовослужбовців Омбудсман 0800501720 ВСП 0444564128 психологічна допомога Варто жити 5522 Lifeline Ukraine 7333 БПД безоплатна правнича допомога 0800213103 Юридична сотня 0800308100 Кабінет ППП Єдине вікно пошук зниклих безвісти 0800300041 16-01 полонені СБУ 0676508332 0983410722 КШППВ 0800300529', snippet: 'Перевірені канали допомоги: гарячі лінії МОУ (1512), Сил ТрО (0 800 507 028), Омбудсман, ВСП, психологічні лінії (5522, Lifeline 7333), БПД, Кабінет ППП («Єдине вікно»), пошук полонених та зниклих.' });

