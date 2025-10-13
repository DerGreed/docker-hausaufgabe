FROM python:3.12-alpine
# Wechselt auf dem Image in den Ordner /app (wie cd)
WORKDIR /app
# . bezieht sich auf diesen
COPY app.py .
EXPOSE 8000
# Führt Befehl beim Containerstart aus:
# python -u app.py
# -u = unbuffered stdout, stderr
CMD [ "python", "-u", "app.py" ]