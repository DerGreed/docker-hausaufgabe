# Reflexionsfragen
Der entscheidende Moment: Was war der größte "Aha!"-Effekt für dich, als du die Anwendung mit nur einem Befehl gestartet hast?  
Wie einfach es ist, wenn alles funktioniert. Aber auch wie wichtig es ist, dass alle Teile richtig ineinander greifen.

Service-Kommunikation: Wie hat dein app-Container den redis-Container gefunden?  
Der redis-Container muss seinen Port im Netzwerk öffnen (`expose`). Damit dieser Server richtig gefunden wird, musste die der Client im app-Container den Host `redis` mit dem richtigen Port ansprechen.

Welcher Teil der Konfiguration war dafür entscheidend?  
s.o. (`expose` im `redis` Service)

Datenverlust: Was ist mit dem Zählerstand passiert, nachdem du docker-compose down und danach wieder docker-compose up ausgeführt hast?  
Der Counter wurde wieder auf 0 gesetzt, da der redis Server komplett neu gestartet wird.