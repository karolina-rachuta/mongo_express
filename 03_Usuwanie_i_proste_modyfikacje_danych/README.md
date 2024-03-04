![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Modyfikacja danych - pojedynczy dokument

W części teoretycznej poznaliśmy sposoby na modyfikację zarówno pojedynczych dokumentów, jak i grup dokumentów.
Teraz wykorzystasz te umiejętności w praktyce!

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

# Książka telefoniczna - aktualizacja numeru

Posiadasz książkę telefoniczną, która jest dokumentową bazą danych. Ostatnio jeden z Twoich znajomych zmienił numer
telefonu. Zaktualizuj jego numer bez zmieniania innych danych i innych dokumentów.

Twoim zadaniem jest zaktualizowanie wpisu dla `Jana Kowalskiego` - jego stary numer to `48691919191`, a nowy numer powinien
być równy `48616161616`.

1. Uruchom plik tworzący książkę telefoniczną w Twojej bazie danych - `phoneNumbers`, uruchamiając skrypt `npm run populate`.
Zakłada on, iż Twoja instancja MongoDB dostępna jest pod standardowym portem (`27017`).
2. Przygotuj w pliku `update-number.js` uruchamianym komendą `npm run update-number` rozwiązanie:
    - Użyj metody `collection().updateOn()` aby zaktualizować wpis
    - Znajdź odpowiedniego użytkownika na podstawie dwóch parametrów: `firsName` i `lastName` - użyj obu w selektorze wyszukującym
    dokumenty
    - Zaktualizuj parametr `phoneNo` na nową wartość
    - Użyj operatora `$set: {}` który zmienia wybrane klucze, które mają zostać podmienione, (np. `$set: { count: 0 }` zmieni
    jedynie parametr `count` w pasujących dokumentach na `0`)
    
Podobnie jak w istniejącym już kodzie - uruchamiaj komendy asynchronicznie, używając `async/await`.

**Wskazówka**

*Jeśli w którymkolwiek momencie uszkodzisz dane w bazie danych (np. poprzez niepoprawne zapytanie aktualizujące
dokumenty), możesz odtworzyć bazę uruchamiając ponownie `npm run populate`.*


# Modyfikacja danych - wiele dokumentów

W części teoretycznej poznaliśmy sposoby na modyfikację zarówno pojedynczych dokumentów, jak i grup dokumentów.
Teraz wykorzystasz te umiejętności w praktyce!

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Kolekcja filmów - aktualizacja obejrzanych materiałów

Posiadasz swoją własną bazę filmów - zarówno tych, które już obejarzłaś/obejrzałeś, jak i tych, na które jeszcze czekasz.
Ostatnio w trakcie dwóch maratonów filmowych obejrzeliście ze znajomymi wszystkie części **Mission: Impossible**
oraz **Mad Max**. Teraz chcesz odznaczyć te filmy jako obejrzane w Twojej kolekcji.

1. Uruchom plik tworzący i zapełniający nową bazę danych - `movies`, uruchamiając skrypt: `npm run populate`.
Zakłada on, iż Twoja instancja MongoDB dostępna jest pod standardowym portem (`27017`).
2. Przygotuj w pliku `update-movies.js` uruchamianym komendą `npm run update-movies` skrypt, który zaktualizuje tylko
potrzebne dokumenty:
    - Użyj metody `collection().updateMany()` aby zaktualizować dane.
    - Użyj parametru `series: ` w selektorze dokumentów, np. `series: 'Mad Max'`, aby znaleźć określone serie (wszystkie dokumenty
    w serii mają taki sam atrybut `series`)
    - Użyj operatora `$set: {}` który zmienia wybrane klucze, które mają zostać podmienione, np. `$set: { count: 0 }` zmieni
    jedynie parametr `count` w pasujących dokumentach na `0`
    
We wszystkich zapytaniach używaj `async/await` - tak, jak w przykładzie wprowadzania danych do bazy w `populate.js`.

Jeśli wykonasz zadanie poprawnie, 2 filmy należące do serii **Mission: Impossible** oraz 4 filmy z serii **Mad Max**
powinny mieć flagę `seen` (porównaj to z asercjami na końcu pliku).

Zadanie wykonaj na dwa sposoby:
- wykonując dwie niezależne operacje dla filmów (`db.collection().update()` dwa razy)
- wykorzystując jedną operację z selektorem `$in` (który jeszcze omówimy, więcej informacji o nim znajdziesz [tutaj](https://docs.mongodb.com/manual/reference/operator/query/in/)).

**Wskazówka**

*Selektor `$in` przyjmuje tablicę wartości, które mają zostać dopasowane, np. `{ name: { $in: ['a', 'b'] } }` dopasuje 
wszystkie dokumenty, których parametr `name` równy jest albo `a` albo `b`.*

**Wskazówka 2**

*Jeśli w którymkolwiek momencie uszkodzisz dane w bazie danych (np. poprzez niepoprawne zapytanie aktualizujące
dokumenty), możesz odtworzyć bazę uruchamiając ponownie `npm run populate`.*


# Usuwanie danych

Usuwanie danych to operacja równie ważna, jak modyfikowanie bądź wstawianie nowych dokumentów. Usuwanie danych
jest zagadnieniem nietrywialnym - jego implementacja zależy od tego, czy chcemy mieć możliwość przywrócenia dokumentów
z powrotem do oryginalnego stanu po usunięciu (funkcjonalność podobna do "kosza" w systemach operacyjnych).

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Usuwanie danych - permanentne usunięcie dokumentu

W tym zadaniu jesteś programistką/programistą pracującym nad systemem E-Commerce. Twoim zadaniem jest przygotowanie
skryptu, który usunie wszystkie zamówienia z bazy danych, które są starsze niż dwa lata.

Przed przystąpieniem do rozwiązywania zadań uruchom skrypt `npm run populate`, aby przygotować bazę danych.

Twoim zadaniem jest:
1. Przygotować datę, która będzie podstawą wyszukiwania dokumentów starszych, niż 2 lata. Użyj wbudowanego obiektu JS - 
`new Date()` wraz z metodami `getFullYear()` i `setFullYear()`, przygotowując datę "dwa lata" wstecz.
2. Używając operatora `$lte` - less than or equal - pozwala on na przyrównywanie wartości, w tym dat - znajdź odpowiednie
dokumenty. Nazwa właściwości do porównania to `orderDate`
3. Usuń dokumenty spełniające regułę.

Zadanie znajduje się w pliku `clean-orders.js` uruchamianym skryptem `npm run clean-orders`.

Przykładowe użycie operatora [$lte](https://docs.mongodb.com/manual/reference/operator/query/lte/):

```javascript
const myDate = new Date();
myDate.setMonth(myDate.getMonth() - 10);
collection.findOne({
  date: {
    $lte: myDate 
  }
});
```

**PODPOWIEDŹ**

*Pamiętaj - jeśli uszkodzisz dane możesz zawsze ponownie wyczyścić i zapełnić bazę domyślnymi dokumentami używając `npm run populate`.*


# Usuwanie danych

Usuwanie danych to operacja równie ważna, jak modyfikowanie bądź wstawianie nowych dokumentów. Usuwanie danych
jest zagadnieniem nietrywialnym - jego implementacja zależy od tego, czy chcemy mieć możliwość przywrócenia dokumentów
z powrotem do oryginalnego stanu po usunięciu (funkcjonalność podobna do "kosza" w systemach operacyjnych).

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Usuwanie danych - flagowanie dokumentów

Posiadasz bazę danych, w której przetrzymujesz swoje zadania - przypomina Ci ona o zaległych obowiązkach i pomaga 
zorganizować plan dnia. Jedno z zadań, które zostało dodane kilka dni temu to kupno dwóch żarówek do salonu - stare
się przepaliły.

Zasymuluj następujący scenariusz:

1. "Odklikujesz" zadanie kupna żarówek - zaznaczasz, że jest wykonane po wizycie w sklepie
2. Okazuje się, że żarówki nie pasują - musisz je zwrócić, a zadanie ponownie otworzyć, z nową datą końca - za tydzień od teraz.

Model danych każdej notatki wygląda tak:

```javascript
const task = {
  _id: ObjectId(""),
  name: "Task name",
  done: false,
  dueDate: new Date(),
  priority: "high"
}
```

- `name` to nazwa taska
- `done` to stan taska - początkowo zadanie wymienienia żarówek będzie miało status `done: false`
- `dueDate` to aktualna data końca - będzie ona ustawiona dla wszystkich otwartych zadań na tydzień od momentu zapełnienia bazy danymi
- `priority` to priorytet zadania - nie musisz się nim przejmować, został dodany, aby lepiej odzwierciedlić strukturę takiego dokumentu

Aby wykonać zadanie:
- Znajdź taska `Change lightbulbs` (po tytule), a następnie zmień status flagi `done` na `true` - dodaj kod w miejscu `1. UPDATE TASK HERE`
- Potem, w odpowiednim miejscu kodu (zaznaczonym jako `2. REVERT CHANGES HERE`) - używając operatora `$set` ustaw dwa pola - `done` z powrotem na `false` oraz nową datę
końca taska - tydzień od momentu ustawienia nowej flagi (w rzeczywistości daty te będą różnić się o milisekundy, ale jest
to wystarczające na potrzeby naszej symulacji).

Rozwiązanie przygotuj w pliku `clean-orders.js` uruchamianym skryptem `npm run tasks`. Zanim rozpoczniesz zadanie, przygotuj bazę danych
skryptem `npm run populate`. Pamiętaj, aby używać asynchronicznych wywołań - poprzedź każde wywołanie metody kolekcji słowem kluczowym
`async ` - zwracają one Promise!

**PODPOWIEDŹ**

*Aby stworzyć datę "za tydzień", możesz użyć wbudowanego obiektu daty - `new Date()`, a następnie metody `setDate()` z wartością
większą o 7 od poprzedniej (pobranej `getDate()`).*


# Usuwanie danych

Usuwanie danych to operacja równie ważna, jak modyfikowanie bądź wstawianie nowych dokumentów. Usuwanie danych
jest zagadnieniem nietrywialnym - jego implementacja zależy od tego, czy chcemy mieć możliwość przywrócenia dokumentów
z powrotem do oryginalnego stanu po usunięciu (funkcjonalność podobna do "kosza" w systemach operacyjnych).

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Usuwanie danych - flagowanie dokumentów

W tym zadaniu powtórzysz operacje z poprzedniego zadania - ponownie będziesz usuwać taska `Change lightbulbs`, a następnie 
ponownie go przywracać. Tym razem jednak zadanie to powinno zostać przeniesione do nowej kolekcji-kosza: `completedTasks`.
W związku z innym mechanizmem oznaczania tasków jako kompletnych, nie potrzebujemy już flagi `done` - została ona usunięta.

```javascript
const task = {
  _id: ObjectId(""),
  name: "Task name",
  dueDate: new Date(),
  priority: "high"
}
```

- `name` to nazwa taska
- `done` nie jest teraz potrzebny - stan taska określamy na podstawie kolekcji, w której się znajduje
- `dueDate` to aktualna data końca - będzie ona ustawiona dla wszystkich otwartych zadań na tydzień od momentu zapełnienia bazy danymi
- `priority` to priorytet zadania - nie musisz się nim przejmować, został dodany, aby lepiej odzwierciedlić strukturę takiego dokumentu

Przed rozpoczęciem zadania uruchom skrypt budujący dane - `npm run populate`. Następnie:

1. Pobierz aktualną wartość dokumentu dotyczącego wymiany żarówek
2. Wstaw cały task do nowej kolekcji - `completedTasks`
3. Usuń task z oryginalnej kolekcji

Podobnie jak w poprzednim zadaniu, ostatecznie okazało się, iż żarówki nie pasowały - należy przywrócić taska:
1. Pobierz zakończonego taska z kolekcji `completedTasks`
2. Zaktualizuj datę na tasku - `dueDate` powinna wskazywać na tydzień w przyszłości (wystarczy, że nadpiszesz datę na
pobranym z kolekcji obiekcie, przed wstawieniem go z powrotem do poprzedniej kolekcji `tasks`)
3. Przenieś zadanie do kolekcji `tasks` i usuń je z kolekcji `completedTasks`
