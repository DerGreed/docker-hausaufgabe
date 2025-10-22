# Docker Hub Hausaufgabe
### Link
[Simple Counter auf Docker Hub](https://hub.docker.com/repository/docker/dergreed/simple-counter)
## Reflexionsfragen
**Namensräume:** Warum ist das Format `<username>\<repository>` für ein öffentliches Repository wie Docker Hub so wichtig? Was würde passieren, wenn jeder sein Image einfach nur meine-webseite nennen könnte?  
Es kann keine *Eindeutigkeit* mehr garantiert werden, das wäre Chaos wenn jeder unter gleichmöglichen Namen verschiedene Arten von Images veröffentlichen könnte. Das Format garantiert auch, dass immer bekannt ist, wer *Autor* des Images ist, welches man herunterlädt. Bzw. beim Hochladen, dass man die *Berechtigung* hat.

**Tag vs. Build:** Was ist der genaue Unterschied zwischen dem Befehl `docker tag alter-name neuer-name` und dem Befehl `docker build -t neuer-name .`? Erstellt `docker tag` ein komplett neues Image?  
Taggen ist im Prinzip ein *alternativer Name* für das gleiche Image (z.B. latest für die aktuelle Version). Im Gegensatz zum `build` Befehl wird dabei *kein* neues Image gebaut.

**Versionierung:** Du hast einen kleinen Fehler in deiner Anwendung gefunden und behoben. Du baust ein neues Image. Welchen neuen Tag (Version) würdest du ihm geben (z.B. `...:1.0.1` oder `...:1.1`) und warum ist eine saubere Versionierung wichtig?  
Tags sind kanonisch `major:minor:bugfix`, d.h. in dem Fall wird die *letzte Zahl* um eins erhöht. Durch Einhalten dieser Regeln ist einerseits immer klar, welche *Art der Änderung* vorgenommen wurde (breaking changes, neues Feature), und andererseits ist die *Reihenfolge* immer eindeutig zu erkennen.

**Öffentlich vs. Privat:** Dein Repository auf Docker Hub ist jetzt öffentlich. In welchem Szenario würdest du unbedingt ein privates Repository verwenden wollen?  
Wenn das Image irgendwelche *Secrets* enthält (eigentlich bad practice) und/oder wenn es z.B. von meinem Unternehmen *exklusiv* genutzt werden soll.