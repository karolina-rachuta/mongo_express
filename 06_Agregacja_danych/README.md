![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Operatory wyboru danych

Operatory wyboru danych pozwalają przekształcić zbiór wejściowy przed przekazaniem go do 
następnego etapu agregacji.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Baza roślin

W aktualnej kolekcji znajduje się baza roślin, dostępnych w kwiaciarni wysyłkowej. Chcesz zobaczyć, które top
10 roślin jest najbardziej popularne, z zastrzeżeniem, że mają być to tylko dostępne rośliny.

Użyj trzech etapów:

- `$match`, aby przefiltrować jedynie rośliny, które są dostępne (właściwość `amountAvailable` większa niż 0)
- `$sort`, aby poukładać wyniki według sprzedaży z tego miesiąca (`monthSales`, malejąco)
- `$limit`, aby "odciąć" pierwsze 10 wyników

Zadanie znajduje się w pliku `flower-shop.js` uruchamianym skryptem `npm run flower-shop`. Zapisz rezultat agregacji
do zmiennej dostępnej w pliku - `data`.

**PODPOWIEDŹ**

*Pamiętaj, że agregacja zwraca domyślnie kursor - użyj metody `toArray()` (operujemy na małym zbiorze danych wejściowych),
aby otrzymać finalną tablicę wyników i przekazać ją do asercji.*



# Operatory zmiany pól

Operatory zmiany pól to grupa operatorów, które pozwalają na zmianę zawartości dokumentu - usuwają bądź dodają
nowe pola.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Wypożyczalnia filmów

Zarządzasz małym portalem pozwalającym na wypożyczanie filmów online i chcesz - w ramach przygotowania metryk -
ocenić średni czas, który widzowie spędzają przed każdym z filmów.

Wstępne dane są przygotowywane każdego dnia - w każdym z dokumentów filmów znajduje się tablica `watchTimes`, która 
zawiera czasy wyświetleń konkretnego filmu oraz oceny.

Przygotuj agregację, w której dodasz do dokumentu 2 pola:

- `meanWatchTime`, obrazujący średni czas oglądania filmu z pola `watchTime`
- `meanRating`, obrazujący średnią ocenę widzów `ratings`

Zadanie znajdziesz w pliku `movies-stats.js` uruchamianym skryptem `npm run movies-stats`. Zadanie wykonaj 2 razy:

- z użyciem `$addFields` i `$unset` (zapisz rezultaty do `addUnsetData`) - usuń dwa oryginalne pola i zapisz jedynie
    pola ze średnimi
- z użyciem `$project`, tworząc na wyjściu nowe dokumenty zawierające jedynie nowe pola (zapisz rezultaty do
    projectData)

**PODPOWIEDŹ**

*Operator średniej `$avg` - omówimy przy okazji operatorów wyrażeń. Na razie musisz jedynie wiedzieć, iż przyjmuje
on nazwę pola jako argument (poprzedzoną dolarem), np. `{ $avg: '$loginTimes' }`.*


# Zapis dokumentów do bazy

Operatory `$merge` i `$out` pozwalają na zapis rezultatu agregacji do kolekcji, różnią się jednak zastosowaniem - 
`$merge` może "skleić" dane w istniejącej kolekcji, a `$out` nadpisuje całą zawartość kolekcji

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Baza danych - wyścigi samochodowe 

W bazie danych znajdują się wyniki wyścigów na amatorskim torze wyścigowym. Twoim zadaniem jest zsumowanie wszystkich
czasów okrążeń dla każdego z samochodów/kierowców, dodanie wartości sumarycznej jako `totalTime`, a następnie zapisanie
rezultatów do kolekcji.

Wykonaj następujące kroki agregacji na kolekcji `raceResults`:

- Zsumowanie czasów okrążeń (użyj tablicy `lapTimes`) oraz operatora `$sum`. Dodaj wyniki do nowego pola używając `addFields`.
- Posortowanie po całkowitych czasach (tak, aby kierowca z najkrótszym całkowitym czasem znalazł się na pierwszej pozycji w kolekcji)
- Zapisanie rezultatu do bazy danych

Wykonaj zadanie 2 razy, na 2 różnych kolekcjach:

- używając operatora `$out` i zapisując rezultaty do kolekcji `outRaceResults`
- używając operatora `$merge` i zapisując rezultaty do kolekcji `mergeRaceResults`

Zadanie znajduje się w pliku `race-results.js`, uruchamianym skryptem `npm run race-results`.

**PODPOWIEDŹ**

*Operator `sum`, który dopiero poznasz w najprostszej formie ma bardzo prostą składnię: `{ $sum: '$fieldName' }` - pozwala
on na zsumowanie wszystkich elementów np. w tablicy. Pamiętaj o znaku dolara na początku nazwy pola!

**PODPOWIEDŹ 2**

*Jeśli uszkodzisz kolekcję, możesz zawsze uruchomić skrypt `populate` na nowo. Dobrą praktyką jest też "podglądanie" rezultatów
agregacji używając `console.log` zanim zapiszesz rezultaty.*

**PODPOWIEDŹ 3**

*Aby poprawnie zaktualizować bazę **ZANIM** uruchomią się asercje, musisz z agregacji zwrócić rezultat bezpośrednio, a nie jako kursor. Najłatwiej
osiągniesz to wywołując na rezultacie agregacji `.toArray()` i czekając na Promise*


# Operatory arytmetyczne

Operatory te pozwalają na wykonywanie operacji arytmetycznych na polach bazy danych.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Drony - przygotowanie statystyk

Zajmujesz się pisaniem skryptu, który wygeneruje statystyki dla dronów, które skanują pola uprawne w celu ocenienia jakości
upraw (tak, jest to jedno z bardziej popularnych zastosowań dronów w rolnictwie!). W celu ocenienia wydajności każdego
z dronów, chcesz na początek przygotować informacje o obszarze, który drony pokryły oraz odległości jaką pokonały w ramach
jednego przelotu.

Każdy dokument w bazie obrazuje jeden przelot i zawiera dwie informacje (zakładamy, że pola są prostokątami) - `fieldLength`
oraz `fieldWidth`, obrazujące długość krawędzi pól w m.

Dla tych danych:

- Usuń wpisy, w których dron nie zakończył badania w całości (uwzględnij tylko dokumenty, w których pole `isComplete` równe true) 
- użyj do tego etapu `$match`
- Dodaj do każdego z kompletnych wpisów pole z informacją o powierzchni pola (wymnażając zmienne `fieldLength` i `fieldWidth`)
- Dodaj do każdego z wpisów odległość, pokonaną przez drona, liczoną jako:

Dodane pola nazwij odpowiednio `areaCovered` i `distanceCovered`.

```text
distance = fieldLength * (fieldWidth / 5) + fieldWidth
```

Wynika to ze wzoru, według którego dron lata nad polem, który można zobrazować tak:

![Drone pattern](./images/Drone.png)

Każdy jeden przebieg to:

1. Pokonanie całej długości pola
2. Zwrot o 90 stopni
3. Pokonanie 5m (stąd 5 we wzorze) wzdłuż szerokości pola (aby przygotować następny przebieg)
4. Kolejny zwrot o 90 stopni
5. Powtórzenie sekwencji w drugą stronę pola

Dzięki temu dron może zebrać całość obrazu z pola.

Rozwiązanie przygotuj w pliku `drone.js`, uruchamianym skryptem `npm run drone`. Zapisz rezultat agregacji do zmiennej
`data`, używając `toArray()`.


# Operatory tablicowe

Grupa operatorów tablicowych pozwala na przekształcenia pól zawierających dane w tablicach.
Funkcjonalnie są one podobne do Array API (`Array.prototype`).

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Lista podróży

Budujesz aplikację pozwalającą budować listę miejsc odwiedzonych podczas podróży bądź miejsc, które chcą w przyszłości
odwiedzić użytkownicy. aplikacja pozwala na rozbudowane filtrowanie, dodawanie pozycji geograficznych itp.

Chcesz zbudować spójną listę miejsc, którymi zainteresowani są Twoi użytkownicy (niezależnie, czy są one odwiedzone, czy
nie). Obecnie lista miejsc jest zapisana na użytkowniku w następujący sposób:

```javascript
const user = {
  _id: '123',
  email: 'john@doe.com',
  visitedPlaces: [
    {
      name: 'New York',
      latitude: 54.234,
      longitude: 23.234,
      comment: '',
      visits: 3
    }
  ],
  wishListedPlaces: [
    {
      name: 'Istanbul',
      latitude: 12.234,
      longitude: 45.234,
      comment: '',
      visits: 0 // Always 0 for wishlisted places
    }    
  ]
}
```

Scal rezultaty z obu tablic - `visitedPLaces` i `wishListedPlaces` w tablicy `allPlaces`.

Następnie dodaj do dokumentu następujące pola w następnym kroku:

- `totalPlaces`, zawierający sumaryczną ilość wszystkich elementów
- `placeNames`, zawierający jedynie nazwy miejsc (użyj operatora `$map`)

Zadanie znajdziesz w pliku `travels.js`, uruchamianym skryptem `npm run travels`. Zapisz rezultaty agregacji do zmiennej
`data`, dostępnej w kodzie


# Akumulacja i grupowanie

Operatory akumulacji pozwalają na tworzenie zbiorczych wartości w etapie grupowania - np. średnich, sum,
iloczynów, bazując na kryterium grupowania. Wiele z nich działa także poza grupowaniem.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Ecommerce - ilość produktów w kategoriach

Zarządzasz stroną, grupującą transakcje w różnych online-owych serwisach. Chcesz przygotować zapytanie, które
zwróci wartości transakcji dla poszczególnych serwisów (pole `service`) (załóż, że dane w zadaniu dotyczą jednego użytkownika,
więc nie musisz się tym martwić).

Każdy dokument wyjściowy powinien mieć następującą postać:

```javascript
const result = {
  service: 'XYZ',
  totalAmount: 123
};
```

Zadanie rozwiąż w pliku `ecommerce.js`, uruchamianym skryptem `npm run ecommerce`, a dane zapisz do zmiennej `data`.

**PODPOWIEDŹ**

*Jeśli wykonasz jedynie operację grupowania poprawnie, rezultaty nie będą miały takiej postaci, jak oczekiwana (np. 
nazwa serwisu zostanie zapisana w polu `_id`) - musisz dodatkowo użyć jednego z operatorów etapów, 
aby odpowiednio przemapować pola na docelowe nazwy (polecany operator to `$project`). Przypomnij sobie przy okazji
jak usunąć z docelowego dokumentu pole `_id`, wykorzystując operator `$project`.*
