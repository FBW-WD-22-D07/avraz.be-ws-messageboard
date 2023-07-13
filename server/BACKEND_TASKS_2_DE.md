# Backend-Aufgaben - Teil 2 - Authentifizierung / Autorisierung

## Aufgabe 1 - Fehlende Abhängigkeiten hinzufügen

Installiere die folgenden npm-Pakete:

- `passport`
- `passport-jwt`
- `jsonwebtoken`

## Aufgabe 1 - Einrichten eines JWT-Token-Ausstellers

Wir müssen in der Lage sein, JWT-Tokens zu erstellen und sie an Clients auszugeben, damit sie diese zur Autorisierung zukünftiger Anfragen verwenden können.

Du erstellst eine Funktion, die beim Aufruf:
   - ein `User`-Objekt als Argument erhält
   - ein signiertes Token zurückgibt

1. Erstelle eine neue Datei namens `jwtIssuer.js` in einem Ordner namens `helpers`

2. Importiere das npm-Paket `jsonwebtoken`. Du wirst diese Bibliothek verwenden, um deine Tokens zu signieren.
   
3. Erstelle deine Token-Generierungsfunktion. Einige nützliche Namen, die du verwenden kannst, sind `generateToken` oder `issueToken`
   
4. Erstelle innerhalb dieser Funktion eine Variable `payload`. Dies sollte ein Objekt mit 2 Schlüsseln sein:
   - `sub` - der Wert für diesen Schlüssel sollte die ID des Benutzers sein
   - `iat` - der Wert für diesen Schlüssel sollte `Date.now()` (die aktuelle Zeit) sein
   
5. Ändere deine Funktion so, dass sie ein signiertes Token zurückgibt, das die `payload`-Variable in das Token kodiert
   
   > **Tipp 1**: Du möchtest vielleicht die `jsonwebtoken.sign`-Methode verwenden
   
   > **Tipp 2**: Vergiss nicht deinen geheimen Schlüssel! Ein guter Ort, um diesen zu speichern, wäre in der `.env`-Datei

6. Verwende innerhalb dieser Funktion die folgende Funktion, um ein Token zu erstellen:

7. Exportiere diese Funktion

## Aufgabe 2 - Schreiben des Benutzer-'login'-Controllers

Für diesen Controller können wir davon ausgehen, dass der Client seinen Benutzernamen und sein Passwort als Teil des Anfragekörpers sendet

1. Finde den Benutzer anhand seines Benutzernamens aus dem `User`-Modell

2. Wenn der Benutzer nicht gefunden werden kann, antworte mit einem Fehler

3. Andernfalls verwende bcrypt, um zu überprüfen, ob das angegebene Passwort, wenn es gehasht ist, dem gehashten Passwort in der Datenbank entspricht

   > Tipp: Du möchtest vielleicht `bcrypt.compare` verwenden

4. Wenn die Passwörter nicht übereinstimmen, antworte mit einem Fehler

5. Wenn die Passwörter übereinstimmen, generiere ein neues Token mit der Funktion, die du in **Aufgabe 1** erstellt hast, und sende es dem Benutzer in deinem Antwortobjekt

## Aufgabe 3 - Einrichten des Benutzer-Login-Endpunkts

Öffne die Datei `/routes/user.js`. Hier erstellen wir einen weiteren Endpunkt.

1. Erstelle 1 Endpunkt, um den Benutzer anzumelden

   > **Hinweis**: Hier musst du auch entscheiden, welche Anfragemethode dies haben sollte

2. Importiere den Login-Controller aus `/controllers/userControllers` und weise ihn zu

## Aufgabe 4 - Konfiguration von Passport

Bevor wir Passport verwenden können, müssen wir es konfigurieren. Wir möchten es zur Autorisierung mit JWT verwenden

Erstelle eine Passport-Konfigurationsdatei (`passport-config.js`). Erstelle eine Funktion, die beim Ausführen:

1. Die `passport-jwt`-Strategie verwendet

2. Das JWT aus dem Header der Anfrage mit der `ExtractJWT.fromAuthHeaderAsBearerToken()`-Methode liest

3. Den Benutzer aus dem `User`-Modell findet (unter Verwendung der kodierten `user_id` im Token)

4. Wenn der Benutzer in der Sammlung gefunden werden kann, verwende die `done`-Methode, um das Benutzerobjekt zurückzugeben

5. Andernfalls verwende die `done`-Methode, um einen Fehler zurückzugeben

6. Exportiere deine Funktion

## Aufgabe 5 - Import von Passport

Importiere die `passport`-Konfigurationsdatei in deiner `server.js`-Datei und führe die Funktion aus, die du in **Aufgabe 4** exportiert hast

## Aufgabe 6 - Autorisierung von Routen / Endpunkten

Wir möchten Passport (und die Passport JWT-Strategie) verwenden, um bestimmte Routen / Endpunkte zu autorisieren, damit nur autorisierte Benutzer bestimmte Aufgaben ausführen können

Wir möchten nicht, dass jemand die Nachricht einer anderen Person löscht!

Verwende `passport.authenticate('jwt',{session:false})` als Middleware in den Routen / Endpunkten, die du schützen möchtest

## Aufgabe 7 - Ausführen und Testen unserer API

Jetzt, da alles eingerichtet ist, teste deine API mit einem Testtool wie Postman oder Insomnia (oder einem anderen Tool).

Überprüfe, ob die Ergebnisse, die du erhältst, den Erwartungen entsprechen. Du kannst überprüfen, welche Benutzernamen gültig sind, indem du deine `users`-Sammlung durchsiehst

## Backend Teil 2 - Fertig!

Gehe nun zu den [Frontend-Aufgaben](../client/FRONTEND_TASKS_DE.md) 🥳
