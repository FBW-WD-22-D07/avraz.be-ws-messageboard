# Frontend-Aufgaben

Das Frontend befindet sich im `/client`-Ordner.

## Vorbereitung

Bevor wir unseren Code schreiben, sollten wir unsere Abhängigkeiten installieren.

Vom `root` (/) des Projekts aus, gib im Terminal Folgendes ein:

    - `cd client`
    - `npm i`

Um das Frontend jederzeit auszuführen, kannst du den folgenden Befehl verwenden:

    - `npm start`

## Aufgabe 1 - Lies den Code in deiner Frontend-Anwendung

Nimm dir etwas Zeit, um dich mit dem Frontend-Code im `/client`-Ordner vertraut zu machen.

- `App.js` - ist die Wurzel unserer Anwendung
- `/components` - enthält alle Komponenten für unsere Anwendung
- `/components/Homepage` - enthält die Dateien für die `Homepage`-Komponente
- `/components/Login` - enthält die Dateien für die `Login`-Komponente
- `/components/Register` - enthält die Dateien für die `Register`-Komponente

## Aufgabe 2 - Installation von react-router-dom

Wir möchten Routing verwenden, um der Anwendung zu ermöglichen, verschiedene Komponenten zu laden, basierend auf den in der URL verwendeten Routen.

> Hinweis: `react-router-dom` ist speziell für Browser entwickelt.

1. Installiere das `react-router-dom` npm-Paket

> Tipp: Stelle sicher, dass du dich im `/client`-Ordner befindest, wenn du dies installierst!

## Aufgabe 3 - Verwendung von react-router-dom

1. Importiere in `App.js` die folgenden Objekte aus `react-router-dom`: `BrowserRouter, Route, Switch`

2. Importiere die `Homepage`, `Register` und `Login` Komponenten

2. Verwende `react-router-dom`, um Routen zu jeder dieser Komponenten zu erstellen

Wenn du den Frontend-Server ausführst, solltest du in der Lage sein, zu testen, ob die Routen, die du im Browser verwendest, erfolgreich zu ihrer entsprechenden Komponente weiterleiten.

## Aufgabe 4 - Aktualisierung der Register-Komponente

Die Register-Komponente sollte mit der Backend-Register-Route interagieren, die du bereits eingerichtet hast.

Aktualisiere die Register-Komponente so, dass bei Absenden des Formulars:

- die Komponente eine Anfrage an das Backend sendet
- die Werte aus den Eingabefeldern (über die `TextField`-Komponente) als Teil dieser Anfrage gesendet werden
- Fehler vom Backend entsprechend behandelt werden
- bei erfolgreicher Registrierung wird der Benutzer auf eine andere Seite weitergeleitet

> **Tipp 1**: Du könntest `fetch` verwenden, aber `axios` ist vielleicht einfacher

> **Tipp 2**: Wenn du `axios` bevorzugst, vergiss nicht, es zuerst zu installieren!

> **Tipp 3**: Für die Weiterleitung kannst du den `useHistory`-Hook von `react-router-dom` verwenden

## Aufgabe 5 - Aktualisierung der Login-Komponente

Die Login-Komponente sollte mit der Backend-Login-Route interagieren, die du bereits eingerichtet hast.

Aktualisiere die Login-Komponente so, dass bei Absenden des Formulars:

- die Komponente eine Anfrage an das Backend sendet
- die Werte aus den Eingabefeldern (über die `TextField`-Komponente) als Teil dieser Anfrage gesendet werden
- Fehler vom Backend entsprechend behandelt werden
- bei erfolgreichem Login wird das vom Server zurückgegebene JWT-Token im localStorage gespeichert
- bei erfolgreichem Login wird der Benutzer auf eine andere Seite weitergeleitet

## Weitere Aufgaben zur Überlegung

Verwende die folgenden Informationen, um den Rest deiner Anwendung zu strukturieren. Betrachte diese Komponenten als Bausteine.

### Navigation

1. Erstelle eine Navigationskomponente, die für Benutzer sichtbar ist, die NICHT auf der Website angemeldet sind
2. Erstelle eine Navigationskomponente, die für Benutzer sichtbar ist, die auf der Website angemeldet sind

Aktualisiere deine Anwendung so, dass die richtige Navigation angezeigt wird, wenn der Benutzer entweder angemeldet ist oder nicht.

### Logout

Erstelle eine Komponente, die das JWT-Token aus dem localStorage entfernt und die Anwendung den Zustand von angemeldet auf abgemeldet wechselt.

### Nachrichten anzeigen

1. Erstelle eine Komponente, die es Benutzern ermöglicht, alle Nachrichten vom Server anzuzeigen, basierend auf der Kategorie
2. Erstelle eine Komponente, die es Benutzern ermöglicht, eine einzelne Nachricht vom Server anzuzeigen

### Nachrichten erstellen

Erstelle eine Komponente, die es einem Benutzer ermöglicht, eine Nachricht zu erstellen

### Nachrichten löschen

Erstelle eine Komponente, die es einem Benutzer ermöglicht, eine Nachricht zu löschen
