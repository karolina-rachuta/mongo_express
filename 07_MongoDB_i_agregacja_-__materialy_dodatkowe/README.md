![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Operatory agregacji pojedynczego przeznaczenia

Operatory te stworzone są do wykonywania jednego, określonego zadania i w praktyce są jedynie nakładkami na 
framework agregacji - zostały stworzone dla wygody programistów.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Baza zwierząt

Prowadzisz hobbystyczną stronę dla użytkowników, którzy chcą sponsorować zwierzaki w Zoo. 
Każdy z nich może sponsorować wiele zwierzaków i chcecie sprawdzić, które ze zwierząt obecnie cieszą się mniejszą
popularnością. Stwórz unikalną listę gatunków zwierząt, które są już obecnie sponsorowane.
W większości są one zestandaryzowane, ale część z nich może mieć różne wielkości liter.

Użyj odpowiednio metody `collection.distinct()` z opcjami `collation`, które luźno dopasują wyrażenia, pomijając też wielkość liter.
Zapisz rezultaty do obecnie pustej zmiennej - `data`. Sugerowane ustawienia to: 

- najniższa siła porównania (1)
- bez porównywania wielkości liter
- porównywanie w języku angielskim (locale `en`)

Zadanie znajduje się w pliku `animal-forum.js`, uruchamianym skryptem `npm run animal-forum`.

**PODPOWIEDŹ**

*Użyj odpowiednio dostępu z kropką tak, by otrzymać jedynie unikatowe gatunki zwierząt (a nie - unikatowe zestawy gatunek-imię zwierzaka)*

**PODPOWIEDŹ**

*Czas, aby zacząć odpytywać kolekcję przed rozwiązaniami - jeśli nie wiesz, jaki kształt ma każdy z dokumentów w kolekcji,
sprawdź zawartość kolekcji `animal-forum`, po uruchomieniu skryptu zapełniającego kolekcję.*


# Operatory logiczne

Operatory logiczne działają podobnie podobnie jak operatory `||`, `!` i `&&` z JS. Pozwalają one na tworzenie złożonych
warunków logicznych tam, gdzie niezbędna jest ewaluacja oparta na zmiennych boolowskich.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Oceny z kursu - podsumowanie

Przygotowujesz funkcjonalność platformy kursów online, która zapisze w bazie danych informacje, czy dany uczestnik kursu
zdał kurs. W bazie danych znajdują się dokumenty powiązane z uczestnikami oraz tablica wyników, zapisanych
jako obiekt (sprawdź bazę danych po uruchomieniu skryptu `populate`, by zobaczyć "kształt" każdego z dokumentów).

Twoim zadaniem jest stworzenie nowego pola `passed`, które zawiera boolowską informację, czy dany kursant zdał, wyliczaną
następująco:

- z 10 testów, użytkownik musiał wziąć udział w co najmniej ośmiu (osiem wpisów w tablicy)
- łączna liczba punktów musi przekraczać 750
- żaden z testów nie mógł mieć wyniku mniejszego, niż 20 (użyj do tego operatora `$indexOfArray`, połączonego z operatorem
`$map` - zajrzyj do podpowiedzi)

Zdanie rozwiąż w pliku `course-results`, uruchamianym skryptem `npm run course-results`, a rezultat agregacji zapisz do
zmiennej `data`.

**PODPOWIEDŹ**

*Ponieważ operator `$indexOfArray` może jedynie używać porównań, zanim go użyjemy, musimy przemapować wewnętrznie na jego
potrzeby dane wejściowe na zbiór `true/false`, gdzie `true` oznaczać będzie wynik mniejszy niż 20 punktów:

```javascript
const mapOperation = { 
  $map: { 
    input: "$results", 
    in: { 
      $lte: [ "$$this.result", 20 ]
    } 
   } 
};
```

Następnie możesz użyć takiej konstrukcji jako pierwszego argumentu w `$indexOfArray`, a do drugiego argumentu przekazać
po prostu `true` - więcej o tym rozwiązaniu w [Wątku na StackOverflow](https://stackoverflow.com/questions/56066068/mongodb-use-lte-with-indexofarray).




# Operatory dat

Operatory te pozwalają na operacje na polach zawierających daty - podobnie jak obiekt `Date` w JS.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Starzy użytkownicy - nagrody

Kilka lat temu założyłaś/założyłeś portal, który pozwala użytkownikom na lokalną wymianę dóbr. Ponieważ portal przechodzi
teraz wielkie zmiany, chcesz wypromować użytkowników, którzy są już z Wami od dłuższego czasu i pomagali budować
społeczności i dać im specjalne odznaki.

Użyj operatorów `$addFields` oraz operatorów dat wraz z porównaniem tak, aby dodać do każdego dokumentu w agregacji
pole `isLongSupporter`, które będzie miało wartość `true` dla wszystkich użytkowników, zarejestrowanych **nie później niż w roku
2017** (bazując na polu `registerDate`).

Zadanie wykonaj w pliku `promote-supporters`, uruchamianym skryptem `npm run promote-supporters`, a rezultat przypisz do
zmiennej `data` w kodzie.




# Operatory zmiennych znakowych

Operatory te pozwalają na przekształcania pól zawierających zmienne typu `String` podobnie, jak standardowy obiekt w JS:
`String.prototype`.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

## Digital signage - baza reklam

Zarządzasz jedną z wielu aplikacji Digital Signage (w uproszczeniu cyfrowych billboardów), która wyświetla reklamy użytkownikom.
W związku z przygotowaniem raportów kwartalnych, mających na celu optymalizację komunikacji, musisz przygotować kilka
zmian do bazy:

- Hasła (pole `slogan`) obecnie wyświetlają w niewłaściwym miejscu, gdyż na początku niektórych z nich znajdują się znaki nowej linii (`\n`), a
na końcu znaki spacji bądź nowej linii. Usuń je odpowiednią metodą i zapisz do tego samego pola
- W przygotowaniu jest raport, który przeanalizuje najpopularniejsze słowa kluczowe, występujące we frazach `title`. Jako wstęp
do tej operacji, zapisz słowa z każdej frazy do oddzielnego pola `splitTitle`, które będzie zawierało pojedyncze słowa.
- Niektóre z linków do obrazków (pole `imageURL`) zawierają na początku stary zapis `href:`, po którym następuje link. Dodaj do dokumentu
flagę `hasOldImgURL` dla wszystkich dokumentów, które mają stare linki

Zadanie rozwiąż w pliku `digital-signage.js`, uruchamianym skryptem `npm run digital-signage`. Zapisz rezultat do 
zmiennej `data` w kodzie.

**PODPOWIEDŹ**

*Metody `$trim`, `$ltrim` i `$rtrim` przyjmują dodatkowy argument - zmienną znakową z listą znaków, które mają zostać 
usunięte (dzięki temu możesz usuwać dowolne znaki z początku i końca zmiennych). Wykorzystaj tą funkcjonalność do usunięcia
kropek i przecinków.*

**PODPOWIEDŹ 2**

*Aby określić, od czego zaczynają się linki, możesz wykorzystać operator `$indexOfCP` wraz z operatorem `$eq` i sprawdzając,
czy indeks frazy `href:` jest większy od -1*
