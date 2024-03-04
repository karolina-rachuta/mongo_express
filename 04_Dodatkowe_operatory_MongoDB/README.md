![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Operatory porównania

Operatory porównania pozwalają na wyszukiwanie dokumentów zawierających pola, 
które mogą zostać porównane do danej wartości (alfanumeryczne). W przypadku zmiennych liczbowych, porównują one liczby
bezpośrednio. W przypadku zmiennych znakowych, używają tzw. porównania naturalnego (takiego, jak w książkach telefonicznych).

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Produkty do przeceny

Przygotuj bazę danych skryptem `npm run populate`.

Pracujesz nad sklepem ECommerce sprzedającym produkty żywnościowe. 
Zbliżają się święta i chcesz wybrać droższe produkty, które potencjalnie mogą zostać przecenione. 
Zależy Ci na produktach, których ceny są wyższe niż 20zł (ale nigdy nie równe tej kwocie). Skonstruuj selektor, który wybierze takie ceny z 
bazy danych i zapisze do zmiennej `discounted`. Każdy produkt ma następującą strukturę:

```json
{
  "name": "Orange",
  "price": 1000,
  "available": 19
}
```

Zadanie uruchomisz skryptem `npm run discounted`


# Dodatkowe operatory porównania

Dodatkowe operatory porównania pozwalają na bardziej granularną kontrolę filtrowania dokumentów, 
z wykorzystaniem list i zaprzeczeń.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Wyszukanie ulubionych albumów

Uruchom skrypt dodający dane do bazy: `npm run populate`.

Twoim zadaniem będzie wyszukanie nieprzesłuchanych albumów tych dwóch zespołów: 

- Pink Floyd
- The Beatles

Skonstruuj zapytanie, które przefiltruje dokumenty, które opisują albumy jednego z tych dwóch zespołów, a także nie były
przez Ciebie przesłuchane (flaga `listened` różna od `true` - użyj operatora `$ne`). Każdy album wygląda tak:

```json
{
  "title": "Yellow Submarine",
  "year": 1969,
  "artist": "The Beatles",
  "listened": true
}
```

Zadanie uruchomisz skryptem `npm run albums`.


# Operatory Logiczne

Operatory logiczne pozwalają na łączenie innych operatorów w warunkach logicznych. Dzięki nim można tworzyć złożone
zapytania do bazy MongoDB.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Przecena - więcej warunków

Przed rokiem okazało się, że lepiej byłoby, gdyby przeceny dotyczyły zarówno produktów bardzo drogich, jak i najtańszych.
Tym razem - rok po poprzedniej wyprzedaży - decydujesz się na przecenienie następujących produktów:

- **tańsze bądź równe** 5zł
- **droższe** niż 18zł

Przygotuj nowe wyszukiwanie (na takim samym zbiorze danych wejściowych, jak w zadaniu 01) z nowymi warunkami - wykorzystaj
operator logiczny `$or`, by złożyć oba warunki w całość.

Model dokumentów jet taki sam, jak wcześniej:

```json
{
  "name": "Orange",
  "price": 1000,
  "available": 19
}
```

Zadanie uruchomisz skryptem `npm run discounted`


# Dodatkowe operatory logiczne

Operatory logiczne pozwalają też na negację działania innych operatorów. Dzięki temu możemy uzyskać także rezultaty
będące wynikiem zaprzeczenia złożonych warunków.

## Piłkarze - znajdź najmniej aktywnych

Uruchom skrypt `npm run populate`, aby przygotować bazę.

W bazie `football.js` znajduje się fikcyjna lista graczy 3-cio ligowego zespołu **Potatoes F.C.**. Chcesz przeanalizować
wydajność w drużynie i wyszukać wszystkich piłkarzy, którzy byli mało aktywni bądź nieefektywni w sezonie. 
Każdy obiekt piłkarza wygląda następująco:

```json
{
  "name": "John Kowalsky",
  "games": 11,
  "inactive": true,
  "goals": 5,
  "substitutions": 3,
  "redCards": 0,
  "yellowCards": 3
}
```

Wyszukaj tych piłkarzy, którzy **nie**:
- Grali w co najmniej 4 grach
- Są nieaktywni
- Mają mniej niż 2 czerwone kartki

Następnie zsumuj ich ilość goli i wylicz średnią, wg wzoru (gdzie przypadek to gole dla pojedynczego słabego gracza):

```
średnia = suma_przypadków / liczba_przypadków
```

Wykorzystaj do tego operator `$nor` i `forEach()`, a także operatory porównania dla ilości


# Operatory typów

Operatory typów pełnią podobną funkcję, co analogiczne operatory w JS - pozwalają na znalezienie dokumentów,
których właściwości są określonego typu bądź sprawdzenie istnienia określonych właściwości.

## Migracja danych - test

Uruchom skrypt `npm run populate`, aby przygotować bazę.

Jakiś czas temu baza danych samochodów, którą utrzymujesz była migrowana na nową strukturę. W związku z migracją,
między innymi rok produkcji samochodów został zmieniony na numeryczny (wcześniej był zmienną znakową, co utrudniało 
odpowiednie wyszukiwania i agregacje). Część dokumentów ze starej bazy nie została jednak należycie poprawiona. 

Każdy wpis o samochodzie wygląda następująco:

```javascript
const car = {
  make: 'Nissan',
  model: 'Titan',
  year: 2007,
  vin: 'WBAAX13424P492822',
  displacement: 2.8
};
```

Wyszukaj dokumenty, które:

- nie zawierają właściwości `migrated` o jakiejkolwiek wartości (użyj operatora `$exists`)
- **lub** nie zawierają roku zapisanego jako numer (wykorzystaj operator `$type` w połączeniu z operatorem `$not`)

Połącz te warunki operatorem `$or` - dokumenty muszą spełniać dowolny z przedstawionych powyżej warunków (nawet
jeśli zawierają flagę `migrated`, mogą mieć źle zapisany rok).

Zadanie znajdziesz w pliku `migration.js`, uruchamianym skryptem `npm run migration-test`


# Operatory wyrażeń JS

Dzięki temu, iż JS jest natywnym językiem wspieranym przez MongoDB, możemy też filtrować dokumenty używając kodu JS,
który zostanie przekazany do bazy danych tak, jak zapisane wyrażenie w naszym kodzie.

Pamiętaj, iż aby poprawnie zapisać wyrażenie JS jako operator, musisz użyć składni tradycyjnej funkcji (kontekst `this`
jest bardzo ważny w tych operatorach), a z funkcji zwrócić musisz wartość boolowską (`true` albo jakąś wartość `falsy`).

## Poprawka danych znakowych - test

Uruchom skrypt `npm run populate`, aby przygotować bazę danych.

W bazie danych zadania znajdują się logi, które powodują błędy w zewnętrznym systemie na nich operującym. Wynika to
z faktu, iż system ten akceptuje jedynie dane zgodne z kodowaniem podstawowym UTF (pierwsz, a część wpisów w bazie danych zawiera parametr
`additionalIdentifier` zawierający niedozwolone znaki, który powoduje błędy we wspomnianym systemie.

Twoim zadaniem jest znaleźć wszystkie wpisy, zawierające niedozwolone znaki na tym parametrze. Użyj do tego funkcji JS
wraz z operatorem `$where` oraz metodę zmiennych znakowych `String.prototype.charCodeAt(index)`, aby sprawdzić, czy 
dany indeks zawiera jakiekolwiek znaki spoza dopuszczonego zakresu (zakres ten zawiera też myślniki, które występują w tych
identyfikatorach - są one poprawne).

Zadanie znajduje się w pliku `brokenLogs.js`, uruchamianym komendą `npm run broken-logs`

**PODPOWIEDZI**

*Znaki zawierające się w podstawowym zestawie znaków UTF mają kody od 0 do 127. -  w tych zakresach będą liczby zwracane
przez metodę `charAt()`*

*Pamiętaj, że zmienne znakowe zawierają iterator - możesz iterować po ich znakach tak, jak po tablicach - dzięki temu
możesz tworzyć pętle, pozwalające na pobranie każdego kolejnego znaku w zmiennej znakowej*

*Jeśli potrzebujesz przetestować swój kod, możesz skopiować funkcję używaną w klauzuli `$where` do konsoli Robo3T (tam, gdzie
wyświetlają się zapytania) i sprawdzić jej działanie bezpośrednio na bazie!*

*Pamiętaj, że operator `$where` przyjmuje funkcję przekazaną jako String - użyj szablonów (template stringów), by łatwo przekazać
funkcję wraz z łamaniami linii.*



# Operatory tablicowe

Operatory tablicowe pozwalają na bardziej elastyczne wyszukiwanie dokumentów, których właściwości będące tablicami spełniają
określone kryteria.

# Użytkownicy - kategorie

Uruchom skrypt `npm run populate`, by przygotować bazę danych.

Prowadzisz portal, którego częścią jest forum dyskusyjne, na którym użytkownicy mogą rozmawiać o swoich hobby.
Z racji, iż chcecie powiększyć forum o nowe kategorie i scalić niektóre grupy dyskusyjne, a także ujednolicić odznak na forum.
Twoim zadaniem będzie wyszukanie użytkowników, którzy muszą zostać zaktualizowani o nowe rangi. 

Każdy użytkownik ma następujące pola:

```javascript
const user = {
   name: 'Billie Mongenot',
   regDate: '2019-09-28T23:43:24Z',
   email: 'bmongenotc@goo.ne.jp',
   nick: 'bmongenotc',
   badges: [
     {
       name: 'quiet-one',
       createdAt: '2019-08-23T16:36:06Z'
     },
     {
       name: 'late-responder',
       createdAt: '2020-01-07T09:31:08Z'
     }
   ]
};
```

Każdy użytkownik może mieć wiele odznak - przedstawione one są w dokumencie użytkownika jako tablica `badges`.
Wyszukaj użytkowników spełniających następujące warunki:

- Posiadających co najmniej jedną z rang: `discussion-master`, `late-responder`, `frequent`
- Ranga ta musi być stworzona po dacie **1-go sierpnia 2019** (użyj do złączenia tych warunków operatora `$elemMatch`)
- Użytkownicy nie mogą posiadać rangi `premium` (użyj do tego operatora `$ne` w połączeniu z zagnieżdżoną ścieżką)

Zadanie znajdziesz w pliku `forumUsers.js`, uruchamianym skryptem `npm run forum-users`.

**PODPOWIEDŹ**

*Zauważ, iż każda odznaka jest obiektem - wykorzystuj zagnieżdżone ścieżki, aby móc filtrować nazwę odznaki: `badges.name`*

*Do porównań daty użyj obiektu Date() z odpowiednim czasem: `new Date('2019-08-01T00:00:00')`*
