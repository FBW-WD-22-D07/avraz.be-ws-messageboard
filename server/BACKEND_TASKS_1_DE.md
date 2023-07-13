# Backend-Aufgaben - Teil 1 - Grundlagen

## Vorbereitung

Bevor wir unseren Code schreiben, sollten wir unsere Abhängigkeiten installieren

Vom `root` (/) des Projekts, im Terminal, gib ein:

- `cd server`
- `npm i`

Dies wird automatisch die folgenden Pakete installieren:
- express
- mongoose
- dotenv

Um das Backend jederzeit auszuführen, kannst du den folgenden Befehl verwenden

- `node server.js`

##### Wenn du nodemon installiert hast

- `nodemon server.js`

## Aufgabe 1 - Schreibe eine .env Datei

> **Hinweis**: Für diese Aufgabe gehen wir bereits davon aus, dass du einen MongoDB-Server hast und weißt, wie du auf deine Anmeldeinformationen zugreifen kannst.

1. Erstelle eine Datei in deinem Root-Ordner namens `.env`. Diese Datei enthält alle Verbindungsinformationen für den Zugriff auf deine Datenbank.

2. Kopiere den Text aus der Datei `.env.example` in deine `.env` Datei

3. Für den Schlüssel `DB_NAME` verwende **fullstack-messageboard**

4. Für die anderen Schlüssel fülle die Details aus, die dir von deinem MongoDB-Dienst zur Verfügung gestellt wurden.
    - DB_HOST=
    - DB_USER=
    - DB_PASS=

## Aufgabe 2 - Erstellen deines User-Schemas

Wir möchten Informationen über jeden Benutzer speichern

Öffne die Datei `/models/User.js`

1. Verwende die folgenden Informationen, um das Schema zu vervollständigen:

   ```text
   username: string, required, unique
   firstname: string, required
   lastname: string
   ip: string 
   hash: string, required
   avatar: string, default: generateRobohashAvatar()
   dates: {
       registered: date, default: Date.now()
       last_active: date
   }
   messages: number
   ```

2. Für den Feldnamen `avatar` verwende die Hilfsfunktion `generateRobohashAvatar()` aus der Datei `/helpers/avatar.js`

Ein Modell wurde bereits erstellt und exportiert

## Aufgabe 3 - Erstellen deines Message-Schemas

Wir möchten eine Sammlung erstellen, die Informationen über jeden Beitrag (Nachricht) speichert

Öffne die Datei `/models/Message.js`

Verwende die folgenden Informationen, um das Schema zu vervollständigen:

```text
user_id: ObjectId, ref, required
content: string, required
dates: {
    created: date, default: Date.now()
    last_edited: date
}
category: enum (entscheide selbst über deine Kategorien)
deleted: boolean
```

> **Tipp**: Vergiss nicht, dass dieses Schema das `User`-Modell über das Feld `user_id` referenziert

Ein Modell wurde bereits erstellt und exportiert

## Aufgabe 4 - Einrichten unserer Routen

Wir möchten den Verkehr anhand der Route der Anfrage filtern

Richte die folgenden Routen in `/server.js` ein:

1. Pfad `/user` sollte zum Modul `routes/user.js` führen
2. Pfad `/message` sollte zum Modul `routes/message.js` führen

## Aufgabe 5 - Fehlende Abhängigkeiten hinzufügen

Installiere die folgenden npm-Pakete:

   - `bcrypt`
   - `cors`

## Aufgabe 6 - Einrichten neuer Middleware

In `/server.js`:

1. Richte die `cors()` Middleware ein, damit Cross-Origin-Anfragen erlaubt sind

2. Richte die `express.json()` Middleware ein, damit Anfragen, die JSON-Objekte enthalten, vom Server gelesen und geparst werden können

## Aufgabe 7 - Schreiben des Benutzer-Registrierungs-Controllers

Diese Aufgabe ist in der Datei `/controllers/userControllers.js` zu erledigen

Erstelle und exportiere eine Funktion, die zur Handhabung der Registrierung verwendet werden kann

Folgende Daten werden von der Client-Anfrage erwartet:

   ```text
   username
   firstname
   lastname
   password
   ```

1. Verwende den `username`, um zu prüfen, ob der Benutzer bereits registriert ist. Wenn der Benutzer gefunden wird, antworte mit einem Fehler

2. Wenn der `username` nicht gefunden wird, erstelle den Benutzer

3. Für das Feld `ip` kannst du `request.ip` verwenden, um die IP-Adresse des Benutzers zu erhalten

> **Tipp 1**: Speichere das Passwort nicht direkt in der Datenbank! Verwende `bcrypt.hash` und speichere den Hash

> **Tipp 2**: Du musst mit dem `User`-Modell interagieren

## Aufgabe 8 - Schreiben des Message-Erstellungs-Controllers

Diese Aufgabe ist in der Datei `/controllers/messageControllers.js` zu erledigen

Erstelle und exportiere eine Funktion, die zum Erstellen einer Nachricht verwendet werden kann

Folgende Daten werden von der Client-Anfrage erwartet:

   ```text
   user_id
   content
   category
   ```

## Aufgabe 9 - Schreiben des Message-Einzelansicht-Controllers

Diese Aufgabe ist in der Datei `/controllers/messageControllers.js` zu erledigen

Erstelle und exportiere eine Funktion, die zum Abrufen einer einzelnen Nachricht aus der `Message`-Sammlung verwendet werden kann

Der Client muss nur die `message_id` mit der Anfrage senden

1. Durchsuche die `Message`-Sammlung nach der Nachricht, die der `message_id` entspricht und bei der das Feld `deleted` `false` ist

2. Verwende die `populate()`-Methode in deiner Suche, um das Feld `user_id` zu referenzieren und es mit den Benutzerdaten zu füllen

3. Wenn eine Nachricht gefunden wird, gib das Ergebnis an den Client zurück

4. Andernfalls gib einen Fehler zurück

## Aufgabe 10 - Schreiben des Message-Bearbeitungs-Controllers

Diese Aufgabe ist in der Datei `/controllers/messageControllers.js` zu erledigen

Erstelle und exportiere eine Funktion, die zum Bearbeiten einer Nachricht verwendet werden kann

Folgende Daten werden von der Client-Anfrage erwartet:

   ```text
   user_id
   message_id
   content
   ```

1. Verwende die `message_id`, um zu prüfen, ob die Nachricht existiert. Wenn sie nicht existiert, antworte mit einem Fehler

2. Wenn die `user_id` nicht mit der `user_id` der Nachricht übereinstimmt, antworte mit einem Fehler

3. Andernfalls aktualisiere den Nachrichteninhalt `content` mit dem neuen Inhalt aus der Anfrage

4. Ändere das Feld `dates.last_edited` mit einem neuen Wert (dem aktuellen Datum)

## Aufgabe 11 - Schreiben des Message-Lösch-Controllers

Diese Aufgabe ist in der Datei `/controllers/messageControllers.js` zu erledigen

Erstelle und exportiere eine Funktion, die zum Löschen einer Nachricht verwendet werden kann

Folgende Daten werden von der Client-Anfrage erwartet:

   ```text
   user_id
   message_id
   content
   ```

1. Verwende die `message_id`, um zu prüfen, ob die Nachricht existiert. Wenn sie nicht existiert, antworte mit einem Fehler

2. Wenn die `user_id` nicht mit der `user_id` der Nachricht übereinstimmt, antworte mit einem Fehler

3. Andernfalls setze das Feld `deleted` der Nachricht auf `true`

> **Hinweis**: Wir löschen die Nachricht nicht wirklich! Einige Online-Dienste tun dies tatsächlich - das Löschen von Inhalten löscht sie nicht wirklich, es versteckt sie nur.
> 
> Sei also vorsichtig, was du im Internet schreibst!

## Aufgabe 12 - Schreiben des Message-Alle-Nachrichten-pro-Kategorie-Ansicht-Controllers

Diese Aufgabe ist in der Datei `/controllers/messageControllers.js` zu erledigen

Erstelle und exportiere eine Funktion, die zum Abrufen aller Nachrichten aus der `Message`-Sammlung verwendet werden kann

Der Client muss nur die `category` mit der Anfrage senden

1. Durchsuche die `Message`-Sammlung nach allen Nachrichten, die der `category` entsprechen und bei denen das Feld `deleted` `false` ist

2. Verwende die `populate()`-Methode in deiner Suche, um das Feld `user_id` zu referenzieren und es mit den Benutzerdaten zu füllen

3. Gib die Ergebnisse an den Client zurück

> Bonus: Anstatt **alle** Nachrichten anzuzeigen, kannst du die Ergebnisse einschränken, zum Beispiel - auf die letzten 20 Nachrichten. Du müsstest zuerst nach Datum `sort()` und dann die Ergebnisse `limit()`.

## Aufgabe 13 - Einrichten unseres Benutzerregistrierungs-Endpunkts

Öffne die Datei `/routes/user.js`. Hier erstellen wir 1 Endpunkt.

1. Erstelle 1 Endpunkt zur Registrierung des Benutzers

   > **Hinweis**: Hier musst du auch entscheiden, welche Anfragemethode dies haben sollte

2. Importiere den Registrierungs-Controller aus `/controllers/userControllers` und weise ihn zu

## Aufgabe 14 - Einrichten unserer Message-Endpunkte

Öffne die Datei `/routes/message.js`. Hier erstellen wir 4 Endpunkte.

1. Erstelle 4 Endpunkte;
   - 1 zum Anzeigen von Nachrichten
   - 1 zum Erstellen von Nachrichten
   - 1 zum Bearbeiten (Aktualisieren) von Nachrichten
   - 1 zum Löschen von Nachrichten

   > **Hinweis**: Hier musst du auch entscheiden, welche Anfragemethoden diese haben sollten

2. Importiere die Controller aus `/controllers/messageControllers` und weise sie ihren jeweiligen Endpunkten zu

## Backend Teil 1 - Fertig!

Weiter geht's mit [Teil 2](./BACKEND_TASKS_2_DE.md) 🥳
