![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Operatory arytmetyczne

Operatory arytmetyczne pozwalają na zamianę wartości pól numerycznych w dokumentach wybranych danym
selektorem. Dzięki nim aplikacja może niemal dowolnie zmieniać wartości tych pól w jednej, atomicznej
operacji.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Baza bitew - aktualizacja danych liczbowych

Alicja uwielbia historię. W ramach swojego hobby zbudowała ona bazę największych bitew w XX wieku. Każdy
z dokumentów w bazie ma następującą postać (dane liczbowe poglądowe):

```javascript
const battle = {
  _id: '123', // Random ID (ObjectId)
  name: 'Tet Offensive',
  date: '1968-01-30', 
  stats: {
    offensivePower: 230000,
    defensivePower: 125000,
    offensiveKilled: 100000,
    defensiveKilled: 50000,
    offensiveWounded: 10000,
    defensiveWounded: 20000,
    mainOffensiveCountry: 'North Vietnam', 
    mainDefensiveCountry: 'South Vietnam'
  }
};
```

Alicja właśnie dowiedziała się, iż jedna z bitew, które znajdują się w bazie - Bitwa o Stalingrad - okazała
się być drastycznie niedoszacowana (co zostało udowodnione w wyniku nowych badań dokumentów z czasów bitwy).
Alicja chce zaktualizować bazę:

- Musi zwiększyć liczbę broniących Stalingrad o 10% (pole `defensivePower`)
- Okazało się, iż po stronie atakującej zginęło o 1503 osoby więcej, niż przewidywano (pole `offensiveKilled`)
- Po stronie broniących było o 357 mniej rannych (pole `defensiveWounded`)

Zaktualizuj odpowiedni wpis w bazie danych (znajdź go po nazwie - `The Battle Of Stalingrad`) przy pomocy
jednego zapytania do bazy danych. Plik zadania to `battles.js`, uruchamiany skryptem `npm run battles`.

**PODPOWIEDŹ**

*Aby zaktualizować zagnieżdżone pole, użyj notacji z kropką, np. `"stats.offensiveWounded"`*


# Operatory porównania

Operatory porównania pozwalają na aktualizację liczbowej wartości pól w dokumentach na podstawie przesłanki
większości / mniejszości w stosunku do istniejącej wartości. Dzięki nim, możliwe są np. inkrementalne aktualizacje
pól - zapewnienie, iż nowa wartość nigdy nie jest mniejsza od poprzedniej itp.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Baza danych geologicznych - aktualizacja dokładności

Pracujesz nad kolekcją przetrzymującą próbki danych z geologicznych pomiarów terenowych. Każda próbka
odzwierciedla głębokość zwierciadła wód podziemnych (na jakiej głębokości znajduje się woda).

Urządzenie, które zostało użyte do pomiarów jest w stanie skutecznie mierzyć głębokość między 5m a
100m - wszelkie pomiary spoza tego zakresu mogą być uznane za błąd.

Twoim zadaniem jest aktualizacja wszystkich rekordów w bazie tak, by pierwsza próbka z pomiarów nigdy
nie miała wartości głębokości mniejszej, niż 5m, a ostatnia - mniejszej niż 100m (próbki są poukładane według rosnących głębokości). 
Każdy pomiar zawiera 5 próbek, a każdy dokument pomiaru wygląda następująco:

```javascript
const result = {
  _id: '123', // ObjectId()
  samples: [
    {
      _id: '456', // ObjectId
      depth: 3
    }, 
    {
      _id: '789',
      depth: 8
    },
    // And three others here 
  ]
};
```

Zadanie uruchomisz skryptem `npm run depth-measurement`.

**PODPOWIEDŹ**

*Aby zaktualizować element w tablicy wykorzystaj zapis z kropką, np. `samples.0.depth`. Możesz założyć, iż każdy z wpisów
zawsze ma 5 próbek, a tylko pierwsza i ostatnia nie spełniają założeń dokładności (nie martw się, czy środkowe próbki nie spełniają
warunku na dokładność).*


# Zmiana wartości pojedynczych pól - `$set`

Operator `$set` i jego odpowiednik dla wstawiania nowych wartości - `$setOnInsert` - są podstawowymi operatorami
pozwalającymi na aktualizację dokumentów - zazwyczaj aplikacja aktualizuje wartości pojedynczych pól,
nie całe dokumenty. Są to też operacje atomiczne - dzięki temu stan dokumentu po aktualizacji jest przewidywalny.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Nowy produkt - e-commerce

Budujesz system e-commerce zajmujący się agregacją produktów odzieżowych ze sklepów. Twoja aplikacja wystawia
zewnętrzne API, którym każdy ze sprzedawców dodaje produkty do scentralizowanej bazy. W wyniku błędu u jednego ze sprzedawców
w Twojej bazie może brakować kilku produktów.

Twoim zadaniem jest dodanie/aktualizacja dwóch produktów w sposób, który zapewnia, że znajdą się w bazie w przypadku, 
gdy nie istnieją w kolekcji (ponieważ sklep sprzedawcy mógł wystawiać już te produkty, istnieje szansa, że musisz
zaktualizować jedynie stan każdego z nich).

Dodaj dwa poniższe produkty do bazy w sposób, który zaktualizuje **jedynie ich ilość, jeśli już istnieją**, a w innym przypadku -
doda resztę brakujących pól (**tworząc tym samym produkt w bazie**). Produkty to:

```javascript
const shirt = {
    shop: 'House',
    product: 'Shirt',
    price: '219 zł',
    quantity: 50,
    size: 'One Size',
    color: 'White'
};
```

```javascript
const blouse = {
    shop: 'Mohito',
    product: 'Blouse',
    price: '199 zł',
    quantity: 20,
    size: 'XL',
    color: 'Violet'
}
```

Oba produkty dodaj do bazy w sposób, w którym:

1. Znajdź produkty wykorzystując **product + shop + color + size**
2. Jeśli istnieje już w bazie takie złożenie - zmień **jedynie** ilość na zadaną w powyższych przykładach.
2. Jeśli dokument nie istnieje - dodaj cały obiekt, wraz z ilością.

Zadanie rozwiąż w pliku `clothes.js`, uruchamianym skryptem `npm run clothes`.

**PODPOWIEDŹ**

Pamiętaj o użyciu opcji dodatkowej `upsert` (3 parametr metody `updateOne/UpdateMany`), 
aby wstawić brakujące rekordy w razie konieczności!


# Zmiana nazwy pól

Operator zmiany nazwy pól pozwala na dostosowanie nazw pola pojedynczego dokumentu bądź wszystkich dokumentów
w bazie - wszystko zależy od wybranego selektora.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Żartowniś DevOps

Inżynier DevOps, który opuścił Twoją firmę kilka dni temu miał ostatni kaprys - z racji konfliktu z drugim
współpracownikiem, zostawił skrypt, który codziennie w nocy zmieniał nazwę pól w bazie na słowa z `lorem ipsum`.

Skrypt został już zatrzymany, ale musisz jeszcze przywrócić nazwy pól. Wszystkie dokumenty mają pola zmienione w taki sam sposób -
przeanalizuj jeden przykładowy dokument i porównaj go z przykładem poniżej, a następnie zaktualizuj
**wszystkie dokumenty w bazie** tak, aby nazwy pól zgadzały się z przykładem:

```javascript
const example = {
  icdDesc: 'Occlusion of Anus with Intraluminal Device, Endo',
  company: 'Nelco Laboratories, Inc.',
  icdCode: 'T486X2A',
  name: 'Gerbil Epithelium',
  icdProc: '0DLQ8DZ'
};
```

Zadanie znajdziesz w pliku `devops.js` uruchamianym skryptem `npm run devops`.


# Usuwanie pola

Operator `$unset` pozwala na usuwanie pól, wraz z ich wartościami. 
Jest to operator przydatny przy czyszczeniu danych w bazie czy migracjach.

## RODO i dane użytkowników

Zarządzasz dość starą bazą danych użytkowników, która została przemigrowana do MongoDB jakiś czas temu. Firma zarządzająca
danymi nie wzięła jednak pod uwagę RODO - nie ma ona praw do wykorzystania **imienia i nazwiska** bez zgody użytkowników.

Aby dostosować bazę danych do wymagań RODO/GDPR musicie usunąć póki co te dane, a dopiero potem firma będzie mogła
prosić użytkowników o dostarczenie tych danych ponownie. Uzupełnij plik `rodo.js` (uruchamiany skryptem `npm run rodo`) 
o niezbędny operator aktualizacji danych tak, aby usunąć z każdego rekordu imię i nazwisko.

Każdy wpis wygląda następująco:

```javascript
const entry = {
    firstName: 'Olivie',
    lastName: 'Hearle',
    email: 'ohearlea@epa.gov',
    gender: 'Female',
    ip_address: '193.190.69.53'
};
```


# Tablice - podstawy operacji

MongoDB udostępnia szereg operacji, pozwalających na zmianę wartości tablic zawartych w dokumentach. Z podstawowych
operatorów warto wymienić:

- `$push` do dodawania nowych elementów
- `$pop` do usuwania pojedynczych elementów
- `$pull` do usuwania elementów według zadanych kryteriów

Wszystkich tych operatorów będziesz móc użyć w poniższym zadaniu.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Baza danych geologicznych - aktualizacja tablic

Twój cel tym razem jest podobny do zadania **02** - musisz zaktualizować odpowiednio dane geologiczne, z tym, iż tym razem
ich struktura jest niepoukładana. Poprzednio dla uproszczenia zakładaliśmy, iż dane poukładane są rosnąco, dzięki czemu
mogliśmy pobrać pierwszą i ostatnią próbkę celem wyrównania wyników, tym razem zadanie będzie trudniejsze.

Gwoli przypomnienia - urządzenie użyte do pomiarów głębokości zwierciadła wód podziemnych (czyli np. wody w studni) nie jest
dokładne dla głębokości mniejszych niż 10m i większych niż 100m. Tym razem także w rezultatach zabrakło kilku rezultatów -
Twoim celem jest dodanie ich do odpowiednich dokumentów. W jednym z zadań technicy odkryli też błędy kalibracji, związane z
rozkalibrowaniem maszyny na czas połowy pomiarów - należy te błędy skorygować.

Masz wobec tego do wykonania trzy zadania, w postaci trzech zapytań:

1. Pozbądź się wyników spoza zakresu działania maszyny - jeśli znajdziesz próbkę o za małej / zbyt wielkiej wartości (**<10** albo **>100**), 
usuń ją (traktujemy ją jako bezwartościową). Użyj do tego jednego zapytania wraz z operatorem `$pull`
2. Dla wpisu o `_id` równym `123456` - dodaj dwie dodatkowe próbki, wstawiając je na końcu listy próbek
3. Dla wpisu o `_id` równym `789101112` - dodaj na początku listy próbek trzy dodatkowe próbki, a następnie -
- w tym samym zapytaniu - obetnij listę do pięciu pierwszych próbek (wliczając Twoje nowe próbki)

#### Próbki dla podpunktu **2**:

```javascript
const samples = [{
  depth: 34
}, {
  depth: 65
}];
```

####P róbki dla podpunktu **3**:

```javascript
const samples = [{
  depth: 97
}, {
  depth: 12
}, {
  depth: 45
}];
```

Zadanie znajdujące się w pliku `depth-measurements-2.js` uruchomisz skryptem `npm run depth-measurements-2`.

**PODPOWIEDŹ**

*Pamiętaj o dodaniu `_id` do nowych próbek - normalnie zostałoby ono przekazane wraz z danymi, jednak tym razem -
musisz wygenerować je samodzielnie. Użyj `ObjectID` dostępne [w bibliotece MongoDB](https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html) i odpowiedniej nazwy pola (`_id`)*

**PODPOWIEDŹ 2**

*Aby móc w jednym zapytaniu usunąć wpisy, które są zarówno większe od 100, jak i mniejsze od 10, użyj operatora `$or`
odpowiednio zagnieżdżonego w operatorze `$pull`*

**PODPOWIEDŹ 3**

*Użyj operatorów `$position` wraz ze `$slice` aby ukształtować odpowiednio tablicę z ostatniej części zadania.


# Tablice - operatory zastępcze

Operatory zastępcze pozwalają na aktualizację konkretnych wartości w tablicach zawierających się w dokumentach -
łączą możliwości selektorów z aktualizacją danych tablicowych.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Wykładowca - naprawa danych

Jesteś wykładowcą w szkole programistycznej i prowadzisz aktualnie kurs używając nowego systemu rozliczania pracy
studentów. W wyniku błędu systemu wszystkie wyniki testów zostały zawyżone o 5 punktów. Dodatkowo, część
wyników studentów, niższych od 50, została zredukowana o 70 punktów (w efekcie prezentując ujemne wyniki!).

Napraw bazę danych tak, aby wyniki studentów pokrywały się z oczekiwanymi:

1. Znajdź wszystkie wpisy w tablicy wyników, które są mniejsze niż 0 (ponieważ wyniki zostały zmniejszone tylko dla wyników
mniejszych niż 50, niepoprawne wyniki zawsze będą mniejsze, niż 0)
2. W oddzielnej operacji zaktualizuj **wszystkie** wpisy dla wszystkich studentów - zmniejsz je o 5 punktów.

Skrypt uruchomisz komendą `npm run course-results`. Użyj do pierwszej operacji operatora zastępczego `$[<identifier>]`,
natomiast do drugiej - ogólnego operatora zastępczego `$[]`.

**UWAGA!**

*Zachowaj kolejność operacji - najpierw zaktualizuj przesunięcia poniżej `0`, a potem resztę - 
inaczej otrzymasz złe wyniki!*

**PODPOWIEDŹ**

*Operatory zastępcze aktualizują pola dopasowane przy pomocy selektorów. Użyj odpowiednio selektora wraz z warunkami
mniejszości oraz operatorem liczbowym `$inc`, aby zaktualizować tylko niezbędne pola*
