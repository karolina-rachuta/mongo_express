![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# MongoDB - adapter NodeJS

Adapter MongoDB pozwala na wchodzenie w interakcje z bazą z poziomu kodu JS.

Pozwala on zarówno na administrowanie bazą, jak i całą gamę operacji na danych -
usuwanie, dodawanie, czy zmienianie istniejących dokumentów.

**Tym razem musisz dodać zależności sama/sam - dołączony plik `package.json`
nie zawiera jeszcze potrzebnych bibliotek!**

## Instalacja adaptera i podłączenie do bazy danych

W tym zadaniu musisz sama/sam przygotować bibliotekę oraz podłączyć się do bazy danych. W pliku `connect.js` uruchamianym
skryptem `npm run connect` znajduje się kawałek kodu, który sprawdza połączenie do bazy danych. 
Kod ten jednak nie działa - w projekcie brakuje biblioteki `mongodb`, a w pliku brakuje kodu inicjalizującego połączenie
do bazy danych. Wykonaj poniższe kroki tak, aby asercja na końcu pliku zwróciła `true` - informację, iż Twoje połączenie
do bazy danych działa tak, jak powinno.

*Jeśli Twoja instalacja MongoDB to standardowa instalacja, połączenie do bazy znajdziesz pod następującym adresem:*

```
mongodb://localhost:27017
```

**w innych przypadkach dostosuj ten URL do swoich potrzeb*

Zaimplementuj następujące kroki:

1. Dodaj import MongoClienta do swojego pliku
2. Stwórz asynchroniczną funkcję, która będzie zawierać operacje z bazą danych
3. Wewnątrz funkcji połącz się do bazy danych, używająd odpowiedniego URL
4. Sprawdź, czy połączenie jest aktywne, używając metody `.isConnected()` obecnej na instancji połączenia
5. Przypisz wartość tej zmiennej do zmiennej używanej w asercji poniżej

Po wykonaniu zadania uruchom `Robo3T` i znajdź kolekcję, która została stworzona przez kod na końcu asynchronicznej 
funkcji. Zobacz, jak dodany wpis wygląda w tej kolekcji i przeanalizuj sposób, w jaki Robo3T wyświetla różne formaty danych.


# MongoDB - odczyt jednego dokumentu

Metoda `collection.findOne()` pozwala na odnalezienie pojedynczego dokumentu, który spełnia warunki wyszukiwania.
Zwraca ona - w przeciwieństwie do metod zwracających wiele dokumentów - dokument bezpośrednio i asynchronicznie.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Igła w stogu siana

Znajdź igłę w stogu siana - uruchom skrypt zapełniający bazę danych - `npm run populate`, a następnie w pliku
`haystack.js`, który uruchomisz skryptem `npm run haystack` dodaj wyszukiwanie dokumentu "igły".

Każdy element w stogu siana posiada:

- `_id` - identyfikator
- długość (numeryczna, np. 11.5)
- materiał z którego jest zrobiony (np. `wood`, `metal`, `hay`)
- wagę (numeryczną w g, np. 0.3)

Przykładowy obiekt:

```javascript
const haystackObj = {
  _id: ObjectId('abcabcabc'),
  length: 11,
  material: 'wood',
  weight: 0.5
}
```

Igła wyróżnia się następującymi parametrami:

- ma długość **5cm** (to naprawdę duża igła!)
- jest wykonana z **metalu** (`metal`)
- waży **1g**

Dodaj w pliku `haystack.js` wyszukiwanie igły.



# Kursory - iteracja

Iterowanie po wynikach kursorów pozwala na efektywne przeglądanie
danych zwróconych przez selektor. Dzięki metodom iteracji nie zapełniamy pamięci maszyny,
próbując uzyskać cały zestaw wynikowy na raz.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Kolekcja muzyki - czego wysłuchać

Twoim zadaniem jest zsumowanie czasu, jaki będzie Ci potrzebny, aby przesłuchać wszystkie jeszcze niewysłuchane
kawałki muzyczne z kolekcji `music`.

Uruchom skrypt `npm run populate`, a następnie w pliku `music.js` uruchamianym skryptem `npm run music`.

Każdy kawałek, który nie był wysłuchany ma flagę `listened: false`. Wyszukaj wszystkie kawałki, które mają tą flagę,
a następnie zsumuj czas tych kawałków (parametr `length` dokumentów, wyrażony w sekundach).

Wykonaj zadanie przy użyciu obu poznanych metod wyliczania elementów kursora:
 
- `next()` wraz z `hasNext()`
- `forEach()`

**PODPOWIEDZI**

*Pamiętaj, że metody `hasNext()`, `next()` i `forEach()` zwracają **Promise** - użyj `await` aby poczekać na ich rezultaty.*

*Ponieważ metoda `forEach()` wyczerpuje kursor (zwraca wszystkie jego elementy i zamyka, jak książkę), musisz stworzyć nowy kursor -
powtórz po prostu to samo zapytanie do bazy ponownie dla drugiego rozwiązania.*



# MongoDB - sortowanie wyników - zadanie dodatkowe

Sortowanie pozwala na zwrócenie zestawu wyników w określonej kolejności do klienta. Dzięki sortowaniu aplikacja
klienta (strona web, aplikacja mobilna) nie musi marnować zasobów na przygotowanie wyświetlanych danych - są
one zwracane w odpowiedniej kolejności już z bazy danych.

Sortowanie jest także kluczowe dla dobrej implementacji stronicowania - aby wyniki dało się podzielić na strony
w przewidywalny sposób, muszą one być posortowane.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Ukryta fraza

W bazie danych znajdują się wpisy, które złożą się na sekretną frazę, jeśli ułożysz je w odpowiedniej kolejności.
Twoim zadaniem jest wybranie wszystkich wpisów, które zawierają flagę `isSecret: true`, a następnie ułożenie
ich w kolejności według rosnących dat (data znajduje się w polu `createdAt`).

Wykonaj poniższe kroki:
1. Uruchom skrypt zapełniający bazę danych: `npm run populate`
2. Przygotuj plik `secret.js` uruchamiany skryptem `npm run secret` do edycji:
3. Przygotuj kursor wyszukujący wszystkie dokumenty z wpisem `isSecret: true`
4. Posortuj wyniki według daty `createdAt` używając metody `cursor.sort()`
5. Używając `forEach` sklej wartości pola `letter` tak, aby otrzymać frazę (każde pole zawiera jedną literę)

Jeśli wykonasz zadanie poprawnie, ujrzysz "Sekretną frazę".


# Paging - stronicowanie - zadanie dodatkowe

Stronicowanie pozwala na zwracanie zbioru wynikowego dokumentów w zorganizowany i czytelny sposób - jako kolejne
strony wyszukiwania, gdzie każda strona (poza ostatnią) zawiera tyle samo wyników.

W MongoDB stronicowanie jest realizowane przez wywołanie kursora z odpowiednimi parametrami - `limit()` i `skip()`:

- `limit()` pozwala na ograniczenie liczby wpisów na danej "stronie"
-  `skip()` pozwala na pominięcie określonej liczby wpisów tak, aby przeskoczyć do wybranej "strony"

Ponieważ `skip()` odnosi się do liczby pominiętych rekordów, w prawidłowo zaimplementowanym stronicowaniu zakłada się,
iż jego wartość jest ustawiana na wielokrotności zmiennej użytej w `limit()`, np:

- `limit(5), skip(0)` wyświetli pierwszą stronę rezultatów
- `limit(5), skip(5)` wyświetli drugą stronę rezultatów
- `limit(5), skip(10)` wyświetli trzecią stronę rezultatów itd.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Książka telefoniczna - stronicowanie

*Przed przystąpieniem do zadania przygotuj bazę danych komendą `npm run populate`.*

Twoim zadaniem jest zebranie wpisów z książki telefonicznej i ułożenie ich w dwóch tablicach - po 5 wpisów
każdy. W kolekcji `telNumbers` znajdują się nieposortowane wpisy z książki teleadresowej. Wyedytuj plik `tel-numbers.js`
i uruchom go komendą `npm run tel-numbers`, implementując następujące operacje:

1. Wybierz z kolekcji `telNumbers` wszystkie numery, poukładane alfabetycznie, używając `sort()` z parametrem
    `name` - zawiera on imię danej osoby
2. Dodaj do kursora parametry `limit` równy **5** i odpowiedni parametr `skip` - tak by na pierwszej stronie znalazło
się pierwsze 5 wpisów
3. Powtórz tworzenie kursora jeszcze raz dla drugiej strony - z takim samym parametrem `limit` i parametrem `skip`
przesuniętym o odpowiednią wartość - tak, aby uzyskać kolejne 5 wpisów
4. Dla każdego z 2 kursorów odpowiadających kolejnym stronom użyj metody `forEach` tak, aby poprawnie "skleić" wynikowe frazy, jak poniżej:

```text
nameA,1233123123;nameB,456456456;nameC,789789
```

Każdy wpis składa się z nazwy oraz numeru, oddzielonych przecinkiem. Kolejne wpisy są oddzielane średnikami.
Finalnie - sklej wyniki z obu stron, znakiem nowej linii - `\n`, dodając numer strony i otrzymując np. taki wpis:

```text
1:nameA,1233123123;nameB,456456456;nameC,78978989
2:nameD,5495734895;nameE,457489379;nameF,42347298
```

gdzie liczby porządkowe to numery stron.

Każdy wpis ma następującą postać:

```javascript
const telEntry = {
  telNumber: 123123123,
  name: 'John Kowalsky',
  address: 'Nighty Falls 3, Sunnyvale, CA'
}
```

**PODPOWIEDZI**

*W pliku znajduje się zarys dwóch zmiennych pomocniczych:*
- *`pageData` - tablicy, która może być użyta do przetrzymywania sklejonych danych z poszczególnych stron, przed finalnym "klejeniem" 
(dodaniem numeru strony i znaku nowej linii)*
- *`finalNumbersString` - ta zmienna powinna zawierać Twoją finalną zmienną znakową - jest ona używa w asercji. Użyj zawartości asercji
jeśli potrzebujesz podpowiedzi co do wyglądu danych wynikowych*

*Ponieważ po zebraniu wszystkich danych metodą `forEach` dla pierwszej strony kursor zakończy się, musisz stworzyć nowy kursor - 
powtórz operację selekcji i limitowania dla drugiej strony tak, aby uzyskać nowy kursor z nową kolekcją wyników.
Nie próbuj re-używać oryginalnego kursora - przewijanie i utrzymywanie kursorów otwartych jest zaawansowanym zagadnieniem,
które wykracza poza zakres tego zadania*

*Aby skleić dokumenty poprawnie, możesz użyć metody tablicowej - `arr.join('')`, która zagwarantuje odpowiednie
wstawienie znaków między dokumentami. Przetrzymuj pośrednie wpisy w tablicach, a następnie scalaj je z użyciem tej metody*


# MongoDB - dodawanie wielu dokumentów - zadanie dodatkowe

Dodawanie dokumentów w MongoDB jest intuicyjne - wystarczy, iż przekażesz do odpowiedniej metody pojedynczy dokument `isertOne()`
bądź listę dokumentów (`insertMany()`).

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Dodawanie wielu dokumentów - baza logów

W pliku `logs.js` uruchamianym skryptem `npm run logs` znajduje się zmienna znakowa zawierająca logi z systemu, podobne do formatu `CSV`, który już znasz.
Każda linijka oddzielona jest średnikiem `;`, a każda wartość w jednym zdarzeniu logowania przecinkiem `,`.
Użyj znanych Ci metod (np. `string.split()`) oraz operacji na obiektach + pętli tak, aby strumień tych danych został
przekształcony do listy obiektów, które następnie zostaną umieszczone w bazie danych.

Każdy z wpisów logu zawiera (w kolejności takiej, jak przedstawiona):

1. `_id` - unikalne id loga
2. `domain` - domenę logowania, np. `users`, `apps`
3. `date` - data wytworzenia wpisu, powiązana z dokładnym momentem zalogowania wiadomości
4. `severity` - ważność danej wiadomości, np. `WARN` albo `ERROR`
5. `message` - właściwą wiadomość z informacją o zdarzeniu.

W ramach tego zadania wyedytuj plik tak, aby z takiego przykładowego string-a:

```text
5e6baf62fc13ae786d000000,payments,2019-03-20T15:50:40Z,WARN,payment reverted;5e6baf62fc13ae786d000001,apps,2019-04-02T05:37:46Z,DEBUG,app loaded correctly
```

Uzyskać następujący format:

```json
[{
  "_id": "5e6baf62fc13ae786d000000",
  "domain": "payments",
  "date": "2019-03-20T15:50:40Z",
  "severity": "WARN",
  "message": "payment reverted"
}, {
  "_id": "5e6baf62fc13ae786d000001",
  "domain": "apps",
  "date": "2019-04-02T05:37:46Z",
  "severity": "DEBUG",
  "message": "app loaded correctly"
}]
```
