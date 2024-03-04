![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Łańcuchy zapytań - API Mongoose

Zapytania "łańcuchowe" pozwalają na łatwe budowanie nawet skomplikowanych zapytań, które dużo bardziej
przypominają formułowanie zapytań w języku naturalnym.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

**Zadanie uruchomisz skryptem `npm start`. Kod zadania znajduje się w pliku `task.js`.**

## Baza biletów

Zarządzasz bazą biletów w jednym z popularnych miejsc eventowych i - w wyniku uszkodzenia dachu - firma zarządzająca
tym miejscem jest zmuszona przeprowadzić remont. Remont będzie trwał kilka miesięcy, wobec czego musicie odwołać
wszystkie wydarzenia, które miały odbyć się w tym czasie. W pierwszej kolejności chcecie poinformować
osoby, które kupiły najdroższe bilety.

Znajdź wszystkie wydarzenia w bazie danych, które:
- Odbędą się między 15 kwietnia 2021 a 20 sierpnia 2021
- Bilety na które kosztują więcej, niż 140 złotych

Zanim rozpoczniesz odpytywanie danych, przygotuj odpowiedni schemat oraz model Mongoose - schemat powinien
zawierać wszystkie pola, które już obecnie istnieją w kolekcji (z wyłączeniem automatycznie generowanego dla nowych wpisów `_id`):

```typescript
interface Ticket {
  eventName: string;
  price: number;
  amount: number;
  date: Date;
}
```

Wykorzystaj do tego interfejs zapytań Mongoose: 

- Użyj metody `Query.prototype.where()`, aby przygotować filtrowanie każdego pola
- Użyj metod `Query.prototype.gte()` i `Query.prototype.lte()`, aby porównać daty i ceny biletów do zadanych.

Dane biletów znajdują się w bazie danych w kolekcji `tickets`. Rezultat wyszukiwania przekaż do funkcji `runAssertions` 
(`data` w kodzie).

**PODPOWIEDŹ**

*Pamiętaj o sposobie tworzenia nazw kolekcji przez Mongoose - zalecane nazwy modelu to `Upperfirst`-owane nazwy
obiektów przetrzymywanych w modelu - używaj `Ticket` zamiast `Tickets`, a nazwa kolekcji zostanie automatycznie
poprawnie wygenerowana.*


# Właściwości wirtualne

Właściwości wirtualne pozwalają na tworzenie pól, które nie istnieją w bazie, ale są rezultatem wyliczeń, 
przeprowadzonych na jej polach. Dostępne są one w ramach kodu Mongoose. Właściwości wirtualne, podobnie jak
**gettery/settery** JS pozwalają zarówno na odczyt, jak i zapis danych.


**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

**Zadanie uruchomisz skryptem `npm start`. Kod zadania znajduje się w pliku `task.js`.**

## Księgarnia online

Budujesz bazę książek dla księgarni online i chcesz wykorzystać funkcjonalność pól wirtualnych do prezentowania
całkowitej wartości magazynowej każdej z książek. Chcesz także stworzyć wygodną metodę zwracającą połączone 
imię i nazwisko autora oraz nazwę książki. W przypadku tego drugiego powinno być także możliwe zapisywanie
nowej wartości. 

1. Dodaj jedną wartość wirtualną w getterem - `totalStoreValue`, który wymnoży ilość dostępnych książek przez cenę jednostkową.
2. Dodaj drugą wartość wirtualną z getterem i setterem - `bookDetails`, która:
    - Zwróci imię i nazwisko autora, oddzielone myślnikiem i spacjami ` - ` od nazwy książki
    - Pozwoli na zapisanie wartości imienia i nazwiska autora oraz nazwy książki, na podstawie przekazanej frazy 
    (w takim samym formacie jak te z gettera - oddzielone myślnikiem i spacjami). Użyj metod `String.prototype.split()`
    oraz `String.prototype.trim()`
    - Pamiętaj o przygotowaniu właściwości wirtualnych przed stworzeniem modelu (inaczej model nie będzie ich zawierał)!
3. Po dodaniu powyższych, wyszukaj wszystkie książki w magazynie, które występują w liczbie większej, niż 40 egzemplarzy
i przypisz rezultat do zmiennej `books`
4. Jako druga, oddzielna operacja - zapisz nową książkę do kolekcji, tworząc najpierw instancję modelu (bez autora i tytułu!),
a następnie używając stworzonego setter-a do ustawienia tych danych.

**Pamiętaj o przygotowaniu schematu i modelu! Dane znajdziesz w kolekcji `books`**

Stworzony na podstawie schematu model przekaż do asercji, wraz z rezultatem zapisanym w `bookDetails` (
kolejność argumentów taka, jak w kodzie `task.js`). Nowa książka powinna zawierać następujące dane:

```json
{
    "author": "Gabriel Garc\u00eda M\u00e1rquez",
    "country": "Colombia",
    "language": "Spanish",
    "pages": 417,
    "title": "One Hundred Years of Solitude",
    "year": 1967,
    "amount": 20,
    "unitPrice": 42.5
}
```

**UWAGA**

*Właściwości wirtualne występują na instancjach modelu, ale **nie są one przekazywane do metod `JSON.stringify()`** -
nie zobaczysz ich domyślnie w konsoli (ale będą one dostępne, jeśli bezpośrednio je wywołasz, np. `books[0].totalStoreValue`)! 
Użyj metody `toObject({ virtuals: true})`, aby uzyskać rezultat wraz z właściwościami wirtualnymi.*

**UWAGA 2**

*Pamiętaj, aby nową książkę stworzyć używając modelu jako konstruktora. Dzięki temu wszystkie wirtualne właściwości zostaną
odpowiednio zainicjalizowane:*

```javascript
const newBook = new Book({/** book data here **/});
```


# Metody instancji modeli

Metody instancji modeli dodawane są do do modelu - dzięki temu są one wzbogacone o funkcje, pozwalające
na wykonywanie operacji w kontekście jednego dokumentu.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

**Zadanie uruchomisz skryptem `npm start`. Kod zadania znajduje się w pliku `task.js`.**

## Kawiarnia - łatwiejsze wyszukiwanie produktów

Pamiętasz warsztat "Kawiarnia"? Model danych zamówienia z warsztatu zakładał, iż może mieć ono wiele zagnieżdżonych
danych produktów (pole `products`), których dane pokrywały się z tymi w obrębie kolekcji `products`. Musieliśmy jednak ręcznie zadbać
o wyszukanie produktów za każdym razem, gdy wchodziliśmy w interakcję z dokumentem zamówienia i kiedy zaistniała
potrzeba zapytania o produkty (np. w sytuacji aktualizacji zamówienia - sprawdzaliśmy, czy powiązane produkty
już istniały w bazie danych).

Takie podejście było skuteczne z punktu widzenia walidacji, aczkolwiek dość niewygodne. Aplikacja korzystająca z API musiała
najpierw zapytać o zamówienie, a następnie oddzielnie zapytać o produkty by uzyskać pełnię powiązanych danych.

Twoim zadaniem jest dodanie nowej metody instancji modelu - `getRelatedProducts()`, która zwróci wszystkie produkty zawarte
w zamówieniu. Model każdego z z zamówień jest identyczny do tego z warsztatu (schemat Joi z rozwiązania):

```javascript
productOrderSchema = Joi.object().keys({
    productId: this.idSchema.required(),
    name: Joi.string().required(),
    amount: Joi.number().greater(0).required(),
    unitPrice: Joi.number().greater(0).required(),
});

productUpdateSchema = Joi.object().keys({
    _id: this.idSchema.required(),
    name: Joi.string(),
    brand: Joi.string(),
    available: Joi.number(),
    lastOrderDate: Joi.date().optional(),
    unitPrice: Joi.number(),
    supplierName: Joi.string(),
    expirationDate: Joi.date(),
    categories: Joi.array().items(
      Joi.string().valid('coffee'),
      Joi.string().valid('food'),
      Joi.string().valid('accessories'),
      Joi.string().valid('equipment'),
      Joi.string().valid('premium')
    ),
});

orderUpdateSchema = Joi.object().keys({
    _id: this.idSchema.required(),
    date: Joi.date(),
    location: Joi.string(),
    paidIn: Joi.string().valid('cash', 'card'),
    staffId: Joi.string().length(24),
    products: Joi.array().items(this.productOrderSchema).min(1),
    total: Joi.number().greater(0),
});
```

Metoda powinna:

1. Pobrać wszystkie `productId` powiązanych zamówień
2. Użyć tablicy ID produktów w zapytaniu do kolekcji produktów
3. Zwrócić listę znalezionych produktów jako dokumenty Mongoose

Metoda powinna operować na modelach Mongoose - przygotuj schematy na bazie powyższych schematów Joi:

- Schemat `productSchema` i model `Product`
- Schemat `orderSchema` i model `Order` - do tego schematu dodaj metodę instancji `getRelatedProducts()`. 

Zbudowany model `Order` przekaż do asercji.

**UWAGA**

*Zauważ, że model produktu różni się od modelu "produktu na zamówieniu" (który jest znacznie prostszy). Ponieważ Mongoose
udostępnia wygodniejsze metody zarządzania danymi - nie przejmuj się uproszczonym modelem i zwróć bezpośrednio wpisy z bazy
`products`. W schemacie zamówienia możesz zaznaczyć, iż `products` to tablica (bez specyfikowania kształtu elementów)*


# Metody statyczne schematu

Metody statyczne schematu to funkcje, które związane są z kolekcją/schematem, a nie z dokumentami - pozwalają one na
przygotowywanie zapytań dostępnych na modelu, np. dla najpopularniejszych wyszukiwań. W przeciwieństwie do metod instancji
modeli, są one niedostępne na dokumentach Mongoose i mają inny kontekst `this` (jest nim model).


**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

**Zadanie uruchomisz skryptem `npm start`. Kod zadania znajduje się w pliku `task.js`.**

## Biblioteka - wyszukiwarka książek

Przebudowujesz bazę danych biblioteki. W ramach przygotowania nowych modeli Mongoose, chcesz dodać kilka metod statycznych,
które ułatwią komunikację z aplikacjami klienckimi dla szczególnych przypadków.

Przygotuj schemat według zadanego kształtu i stwórz na jego bazie model `Book`:

```typescript
interface Book {
  author: string;
  country: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
}
```

Wszystkie pola powinny być wymagane. Następnie przygotuj następujące metody statyczne:

1. Metoda `getBooksByPages(min, max)`, przyjmująca 2 argumenty - minimum stron i maksimum stron. 

Jeśli zamiast danego argumentu przekazana jest wartość `falsy`, warunek powinien zostać pominięty, np. `getBooksByPage(null, 110)`
wyszuka wszystkie książki, które mają mniej niż **110** stron. Użyj operatorów `$gte` i `$lte` bądź interfejsu zapytań
Mongoose (preferowany sposób).

2. Metoda `getRandomBookByYear(year)`, która zwraca jedną losową książkę dla danego roku.

Znajdź najpierw wszystkie książki dla zadanego roku. Następnie wykorzystaj następującą funkcję do wybrania jednego
z wpisów w tabeli, jeśli zawiera ona więcej, niż 1 wpis:

```javascript
const randomIndex = Math.floor(Math.random() * arr.length);
```

3. Metoda `getBooksByLanguage(language)`, zwracająca wszystkie znalezione książki dla danego języka.

**UWAGA**

*Pamiętaj, aby **najpierw przygotować metody statyczne schematu**, a następnie stworzyć na podstawie tego schematu model.*


# Hooki / middleware - zadanie dodatkowe

Hooki pozwalają na reagowanie na różne wydarzenia, powiązane z operacjami Mongoose i MongoDb. Wśród wielu z ich zastosowań
można wyróżnić logowanie operacji w bazie oraz czyszczenie powiązanych kolekcji po operacjach usuwania danych.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

**Zadanie uruchomisz skryptem `npm start`. Kod zadania znajduje się w pliku `task.js`.**

## Baza informacji z usług streamingowych

Zajmujesz się rozwojem aplikacji pozwalającej na bieżąco śledzić nowinki na różnych portalach streamingowych oraz komentować
materiały tam się znajdujące. W ramach usprawniania komunikacji z bazą danych, Twój zespół zdecydował się użyć Mongoose.

Twoim zadaniem jest przygotować schematy i modele dla dwóch kolekcji:

** `commentsSchema` i model `Comment` (wszystkie pola powinny być wymagane):**

```typescript
interface Comment {
  text: string;
  author: string;
  likes: number;
}
```

** `moviesSchema` i model `Movie` (wszystkie pola powinny być wymagane):**

```typescript
interface Movie {
  movieID: number;
  intRating: number;
  title: string;
  timestamp: number;
  rating: number;
  platform: 'Netflix' | 'HBO Go' | 'Prime'; //  Remember to use "type: [String]" and "enum: []" options for this one!
  date: Date;
  comments: string[];
}
```

Przygotuj hook specyficzny dla Mongoose - **Post remove**, który po usunięciu filmu usunie komentarze z nim związane - 
wykorzystaj dane przekazane do hooka, a następnie na podstawie tablicy ID `comments` (jeśli taka istnieje) 
wyzwól usuwanie komentarzy przy użyciu modelu `Comment`.

Załóż, iż hook będzie wywoływany jedynie w kontekście dokumentu - użyj kontekstu funkcji `this`, aby określić, które komentarze
mają zostać usunięte.

Przekaż modele `Comment` i `Movie` z dodanym do jego schematu hookiem do asercji.

**PODPOWIEDŹ**

*Pamiętaj, iż operacje `remove()` dokumentu oraz operacja `deleteOne()` modelu/kolekcji to z punktu widzenia hooków dwie różne
operacje. Używanie metody `remove()` jest jednak bardziej wskazane w Mongoose z punktu widzenia hooków - wyzwala ona inny
zestaw warunków, które decydują o działaniu hooków.*

**PODPOWIEDŹ 2**

*Ponieważ zadanie to zakłada usuwanie elementów z bazy danych jest ono zaprojektowane nieco inaczej, niż pozostałe.
Skrypt regenerujący dane w bazie zostanie wywołany **za każdym razem, gdy zmienisz coś w kodzie** - może to powodować nieco
wolniejszy restart skryptu.*





# Scalanie dokumentów - metoda `populate()` - zadanie dodatkowe

Metoda `Query.prototype.populate()` pozwala na zastąpienie referencji do dokumentów z innych kolekcji ich rzeczywistymi
reprezentacjami.

**Pamiętaj o uruchomieniu `npm install` oraz `npm run populate` 
aby przygotować biblioteki i bazę danych przed rozpoczęciem pracy!**

**Zadanie uruchomisz skryptem `npm start`. Kod zadania znajduje się w pliku `task.js`.**

## Wyniki studentów - suma punktów

Jesteś wykładowcą i przygotowujesz podsumowanie wyników studentów z semestru. Niestety UI aplikacji po ostatniej aktualizacji
przestało działać wobec czego musisz przygotować skrypt, który wyliczy średnią punktów studentów (deja vu?). Tym razem
jednak model danych, jak i narzędzia są inne.

Przygotuj dwa schematy według zadanych zasad, reprezentujące studentów i egzaminy:

**Egzaminy - schemat `examSchema` i model `Exam`:**

```typescript
interface Exam {
  result: number;
  timeTaken: number;
  questionsAnswered: number;
}
```

**Studenci - schemat `studentSchema` i model `Student`:**

```typescript
interface Student {
  exams: string[]; // In reality - document reference
  firstName: string;
  lastName: string;
  year: number;
  age: number;
  email: string;
  gender: string;
}
```

Na bazie powyższych modeli, skonstruuj zapytanie, w którym użyjesz metody `populate()`, aby uzyskać obiekty egzaminów razem z 
dokumentami studentów. Zsumuj wyniki egzaminów dla każdego ze studentów, a następnie zwróć następujące obiekty:

```json
{
  "_id": "123",
  "mean": 45
}
```

gdzie `_id` to identyfikator z kolekcji studentów, a `mean` to średnia wyników studenta, policzona według następującego wzoru:

```javascript
mean = SUMA_WSZYSTKICH_WYNIKOW / ILOSC_WYNIKOW;
```

Możesz założyć, iż każdy ze studentów posiada w bazie danych taką samą ilość egzaminów w tabeli `exams`.

Przekaż zarówno zmapowane obiekty, jak i znalezionych użytkowników do asercji.

**PODPOWIEDŹ**

*Aby poprawnie odnieść się do danych w innej kolekcji, które nie zostały wstawione z użyciem Mongoose, musisz odpowiednio zdefiniować
swój schemat - tak, aby Mongoose zrozumiał, skąd pochodzą powiązane dane. Możesz do tego użyć opcji schematu `ref`, np:*

```javascript
const someSchema = new mongoose.Schema({
  myRef: {
    type: mongoose.Schema.ObjectId,
    ref: 'AnotherModel'
  }
})
```

**PODPOWIEDŹ 2**

*Aby przygotować nowy obiekt, wykorzystaj metody `Array.prototype.map()` i `Array.prototype.reduce()`.*
