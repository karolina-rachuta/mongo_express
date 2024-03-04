![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Dobre praktyki w ExpressJS

Czas podsumować wszystko czego dowiedzieliśmy się w tym tygodniu i wprowadzić jeszcze dobrych praktyk pisania aplikacji, które mogą Ci się przydać.

Zanim zaczniesz zapoznaj się jeszcze z [artykułem](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.md) dołączonym do slajdów (chociaż pobieżnie). Zawiera on bardzo wiele bardzo szczegółowych informacji na temat dobrych praktyk w Node.js oraz ExpressJS.

Skorzystaj też ze strony o [SemVer](https://docs.npmjs.com/about-semantic-versioning) aby przypomnieć sobie podstawy wersjonowania zależności. Używając aplikacji [npm semver calculator](https://semver.npmjs.com/), przetestuj składnię `SemVer`.


# Przygotowanie

Zainstaluj i uruchom `express-generator` zgodnie z instrukcją na [stronie](https://expressjs.com/en/starter/generator.html) lub na slajdach. Przejrzyj wygenerowane pliki i spróbuj uruchomić aplikację.

**Pamiętaj o uruchomieniu `npm install` w wygenerowanym folderze!**

Wprowadź drobne modyfikacje i przekonaj się czy wszystko działa jak należy. Możesz np. spróbować zamienić wszystkie użycia `require` na `import`.

**Następne zadania z tego dnia rozwiązuj w wygenerowanym projekcie.**

## Etag

Stwórz prosty serwer, który obsługuje zapytanie `GET /user` i zwraca obiekt reprezentujący użytkownika `{ name: "Jan Kowalski", modified: new Date() }` oraz zapytanie `PUT/user/:name`, które zmienia datę modyfikacji na aktualną i nazwę mna tę podaną w parametrze. Ustaw nagłówki `Last-Modified` oraz `Etag`, aby móc skorzystać z warunkowego wysyłania danych.

W narzędziu `POSTMAN` stwórz oba zapytania, `GET /user` oraz `PUT /user/:name` i wykonaj `GET /user`. Zauważ, że w sekcji nagłówki w każdej odpowiedzi `GET` powinna przychodzić data `Lats-Modified` i `Etag`. Uzupełnij tymi danymi nagłówki wysyłane z narzędzia `POSTMAN` tj. `If-None-Match` oraz `If-Modified-Since`. Jeśli dane są takie same jak te z odpowiedzi, to kolejne zapytanie powinno zwrócić `304 Not Modified` i nie zwracać ponownie danych.

A teraz wykonaj zapytanie `PUT /user/:name`, a potem ponownie `GET /user`, bez zmiany wartości nagłówków `If-None-Match` oraz `If-Modified-Since`. Tym razem serwer powinien zwrócić `200 OK` i nowe dane.

![Postman Conditional](images/postman_conditional.png 'Conditional Header')


## Rate limit

Wykorzystując middleware [`express-rate-limit`](https://www.npmjs.com/package/express-rate-limit) ogranicz liczbę zapytań `GET /user` z poprzedniego zadania do pięciu na dwie minuty. Przetestuj limity w narzędziu `POSTMAN`.

Za szóstym razem zwróconym przez serwer statusem powinno być `429 Too Many Requests`. Po upływie dwóch minut znowu możesz korzystać z API, kolejne pięć razy.


## Powtórzony tekst

Stwórz prosty serwer, który obsłuży ścieżkę `GET test/:text` gdzie `text` będzie dowolnej wielkości łańcuchem znaków i w odpowiedzi zwróci ten łańcuch w odwrotnej kolejności i powtórzony 1000 razy.

Przetestuj działanie serwera dla długich łańcuchów znaków. Sprawdź jak zmienią się rozmiary danych, kiedy do serwera dodasz middleware kompresujące dane.

Rozmiar danych możesz sprawdzić w przeglądarce `Google Chrome` w zakładce `Network`.

## Zadanie 6 - zadanie dodatkowe

Stwórz prosty serwer, który obsłuży ścieżkę `GET test/:text` gdzie `text` będzie dowolnej wielkości łańcuchem znaków i w odpowiedzi zwróci `json` zliczający wystąpienie każdej z liter w tekście. Litery alfabet, które nie pojawiły się w tekście możesz pominąć.

Przykładowe zapytanie mogłoby wyglądać tak:

`GET http://localhost:3000/alamakota`

A odpowiedź serwera:

```javascript
{
    a: 4,
    l: 1,
    m: 1,
    k: 1,
    o: 1,
    t: 1
}
```

Korzystając z zewnętrznego middleware do logowania informacji o zapytaniu - `morgan`, stwórz własną funkcję logującą i użyj jej w zadaniu.

```javascript
morgan(function (tokens, req, res) {
  return [tokens.method(req, res)].join(' ');
});
```

Więcej przykładów znajdziesz w dokumentacji modułu [`morgan`](https://www.npmjs.com/package/morgan)


## REST - zadanie dodatkowe

Zainstaluj i uruchom 'express-generator' zgodnie z instrukcją na [stronie](https://expressjs.com/en/starter/generator.html) lub na slajdach.

Stwórz prosty serwer obsługujący tworzenie, modyfikowanie, usuwanie i pobieranie danych na temat użytkownika (używając metodologii REST).

Użytkownik powinien zawierać następujące dane:
* UUID,
* Imię,
* Nazwisko,
* Datę dodania do systemu,
* Datę ostatniej modyfikacji,

Serwer powinien umożliwiać:
* Wyświetlenie wszystkich użytkowników ('GET /users')
* Dodanie nowego użytkownika ('POST /users')
* Wyświetlenie danych o danym użytkowniku ('GET /users/<id&gt;')
* Modyfikacja użytkownika ('PUT /users/<id&gt;')
* Usunięcie użytkownika ('DELETE /users/<id&gt;')

Tablicę użytkowników przetrzymuj w pliku na dysku. Jeśli użytkownika o zadanym 'UUID' nie ma, zwróć wyjątek.