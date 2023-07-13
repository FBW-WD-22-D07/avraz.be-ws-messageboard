# Fullstack Messageboard

![Chat-Nachrichten](https://media.giphy.com/media/llVIK4GDgY34nQULnB/giphy.gif)

Diese Aufgabe kombiniert sowohl Frontend als auch Backend, wobei der Schwerpunkt auf dem Backend liegt.

Du wirst eine Fullstack-Anwendung erstellen, die als Online-Messageboard dient. Funktionen dieser Anwendung sind eine vollständige REST-API, wobei die Benutzerdaten auf einem MongoDB-Server gespeichert werden. Benutzer sollten sich registrieren, anmelden, Beiträge anzeigen, erstellen, aktualisieren und löschen können.

> Wichtig! Es wird erwartet, dass du den Großteil oder das gesamte Wissen, das du während des Backend-Moduls erworben hast, einsetzt.

> Wichtig! Dieses Projekt setzt voraus, dass du das Backend-Modul bereits abgeschlossen hast oder kurz davor bist.

## Ordnerstruktur und Vorbereitung

Es gibt 2 Ordner:

1. `/client` - hier befindet sich das React-Frontend, das mit `create-react-app` erstellt wurde
    - Dies wird auf Port `3000` laufen

2. `/server` - hier befindet sich der Backend-Code
    - Dies wird auf Port `3001` laufen

## Aufgaben

> **Hinweis**: Die Aufgaben sind nicht vollständig detailliert, sie erwarten, dass du dich auf dein Urteilsvermögen für die meisten Dinge verlässt.

> **Hinweis**: Vergiss nicht, deinen Code regelmäßig mit Tools wie Postman / Insomnia / oder der Browser-Entwicklerkonsole zu testen.

### Backend

Das Backend befindet sich im Ordner `/server`.

Der Zweck dieser Aufgaben besteht darin, eine REST-API zu erstellen, die das Frontend bedient.

Diese REST-API wird folgendes tun:

- Benutzern das Anzeigen aller Beiträge ermöglichen
- Benutzern das Anzeigen eines einzelnen Beitrags ermöglichen
- Benutzern die Registrierung ermöglichen
- Benutzern das Anmelden ermöglichen
- Benutzern das Erstellen eines neuen Beitrags ermöglichen
- Benutzern das Bearbeiten ihrer vorherigen Beiträge ermöglichen
- Benutzern das Löschen vorheriger Beiträge ermöglichen

Alle Benutzer dürfen Inhalte veröffentlichen, aber Benutzer können nur Beiträge ändern oder löschen, die sie selbst erstellt haben.

Die REST-API wird Authentifizierung und Autorisierung verwenden, um Benutzer zu validieren. Du wirst erwartet, dies zu implementieren.

#### Backend-Aufgaben

1. Schließe [Teil 1 - Grundlagen](server/BACKEND_TASKS_1_DE.md) ab
2. Schließe [Teil 2 - Authentifizierung / Autorisierung](server/BACKEND_TASKS_2_DE.md) ab

### Frontend

Für das Frontend liegt es weitgehend an dir, wie du die Informationen dem Benutzer präsentierst. Du solltest in Bezug auf "welche Funktionen würden meine Benutzer wollen?" denken.

Die Aufgaben sind weitgehend unspezifisch und sollten als Leitfaden dienen, um deine Anwendung zu strukturieren. Das Abschließen dieser Aufgaben allein wird dir keine voll funktionsfähige Frontend-Anwendung bieten.

Das ist deine Chance, kreativ zu sein!

Viel Glück!

#### Frontend-Aufgaben

Schließe die [Frontend-Aufgaben](./client/FRONTEND_TASKS_DE.md) ab.
