var language = localStorage.getItem("language");
var info = document.getElementById("info");
var naglowek = document.getElementById("naglowek");
var tutor = document.getElementById("tutor");
var contact = document.getElementById("contact");
var channel = document.getElementById("channel");
var page = document.getElementById("officialgamepage");
var button = document.getElementById("button");
switch(language) {
    case "en":
        info.innerHTML = "PLATE-O-GUESSR is a computer game based on GE0-GUESSR, made on programming languages like, Javascript, HTML and more, by polish teenager.<br>That game is new, so expect bugs.<br> If you notice any bug, please contact with developer.";
        naglowek.innerHTML = "Tutorial";
        tutor.innerHTML = "PLATE-O-GUESSR is a game in which you have to guess the place based on the car license plate.<br>You need to mark the closest place, from which comes that license plate<br>As close as you marked, you get more points.<br>After marking, click the check button.<br>Good luck!";
        contact.innerHTML = "Contact";
        channel.innerHTML = "Youtube Channel";
        officialgamepage.innerHTML = "Official game page on Facebook";
        button.innerHTML = "return";
    break;
    case "pl":
    info.innerHTML = "PLATE-O-GUESSR to gra komputerowa inspirowana GE0-GUESSR, stworzona w językach programowania takich jak JavaScript, HTML i innych, przez polskiego nastolatka.<br>Gra jest nowa, więc mogą występować błędy.<br>Jeśli zauważysz błąd, skontaktuj się z twórcą.";
    naglowek.innerHTML = "Poradnik";
    tutor.innerHTML = "PLATE-O-GUESSR to gra, w której musisz zgadnąć miejsce na podstawie tablicy rejestracyjnej samochodu.<br>Musisz zaznaczyć najbliższe miejsce, z którego pochodzi ta tablica.<br>Im bliżej zaznaczysz, tym więcej punktów zdobędziesz.<br>Po zaznaczeniu kliknij przycisk sprawdzenia.<br>Powodzenia!";
    contact.innerHTML = "Kontakt";
    channel.innerHTML = "Kanał YouTube";
    officialgamepage.innerHTML = "Oficjalna strona gry na Facebooku";
    button.innerHTML = "wróć";
    break;
    case "ua":
    info.innerHTML = "PLATE-O-GUESSR — це комп’ютерна гра, створена на основі GE0-GUESSR, написана мовами програмування JavaScript, HTML та іншими, польським підлітком.<br>Гра нова, тому можливі помилки.<br>Якщо помітиш помилку, зв’яжись із розробником.";
    naglowek.innerHTML = "Підручник";
    tutor.innerHTML = "PLATE-O-GUESSR — це гра, у якій потрібно вгадати місце за автомобільним номерним знаком.<br>Потрібно позначити найближче місце, звідки походить цей номер.<br>Чим ближче ти позначиш, тим більше очок отримаєш.<br>Після позначення натисни кнопку перевірки.<br>Успіхів!";
    contact.innerHTML = "Контакт";
    channel.innerHTML = "Канал YouTube";
    officialgamepage.innerHTML = "Офіційна сторінка гри у Facebook";
    button.innerHTML = "повернутися";
    break;
    case "lt":
    info.innerHTML = "PLATE-O-GUESSR yra kompiuterinis žaidimas, sukurtas pagal GE0-GUESSR, parašytas tokiomis programavimo kalbomis kaip JavaScript, HTML ir kt., sukurtas lenkų paauglio.<br>Žaidimas naujas, todėl gali būti klaidų.<br>Jei pastebėsi klaidą, susisiek su kūrėju.";
    naglowek.innerHTML = "Vadovas";
    tutor.innerHTML = "PLATE-O-GUESSR – tai žaidimas, kuriame reikia atspėti vietą pagal automobilio numerio ženklą.<br>Turi pažymėti artimiausią vietą, iš kurios kilęs šis numeris.<br>Kuo arčiau pažymėsi, tuo daugiau taškų gausi.<br>Pažymėjęs paspausk tikrinimo mygtuką.<br>Sėkmės!";
    contact.innerHTML = "Kontaktas";
    channel.innerHTML = "„YouTube“ kanalas";
    officialgamepage.innerHTML = "Oficiali žaidimo „Facebook“ puslapis";
    button.innerHTML = "grįžk";
    break;
    case "de":
    info.innerHTML = "PLATE-O-GUESSR ist ein Computerspiel, das auf GE0-GUESSR basiert und von einem polnischen Teenager in Programmiersprachen wie JavaScript, HTML und anderen geschrieben wurde.<br>Das Spiel ist neu, daher sind Fehler möglich.<br>Wenn du einen Fehler bemerkst, kontaktiere den Entwickler.";
    naglowek.innerHTML = "Anleitung";
    tutor.innerHTML = "PLATE-O-GUESSR ist ein Spiel, bei dem du den Ort anhand des Kfz-Kennzeichens erraten musst.<br>Du musst den nächstgelegenen Ort markieren, von dem dieses Kennzeichen stammt.<br>Je näher du markierst, desto mehr Punkte erhältst du.<br>Klicke nach der Markierung auf die Prüftaste.<br>Viel Glück!";
    contact.innerHTML = "Kontakt";
    channel.innerHTML = "YouTube-Kanal";
    officialgamepage.innerHTML = "Offizielle Spielseite auf Facebook";
    button.innerHTML = "zurück";
    break;
    case "es":
    info.innerHTML = "PLATE-O-GUESSR es un juego de ordenador basado en GE0-GUESSR, creado con lenguajes de programación como JavaScript, HTML y otros, por un adolescente polaco.<br>El juego es nuevo, así que pueden aparecer errores.<br>Si notas algún error, por favor contacta con el desarrollador.";
    naglowek.innerHTML = "Tutorial";
    tutor.innerHTML = "PLATE-O-GUESSR es un juego en el que tienes que adivinar el lugar basándote en la matrícula de un coche.<br>Debes marcar el lugar más cercano de donde proviene esa matrícula.<br>Cuanto más cerca aciertes, más puntos obtendrás.<br>Después de marcar, haz clic en el botón de verificación.<br>¡Buena suerte!";
    contact.innerHTML = "Contacto";
    channel.innerHTML = "Canal de YouTube";
    officialgamepage.innerHTML = "Página oficial del juego en Facebook";
    button.innerHTML = "volver";
    break;
    case "fr":
    info.innerHTML = "PLATE-O-GUESSR est un jeu vidéo inspiré de GE0-GUESSR, créé avec des langages de programmation comme JavaScript, HTML et d'autres, par un adolescent polonais.<br>Le jeu est nouveau, donc il peut contenir des bugs.<br>Si tu remarques un bug, contacte le développeur.";
    naglowek.innerHTML = "Tutoriel";
    tutor.innerHTML = "PLATE-O-GUESSR est un jeu où tu dois deviner le lieu à partir d’une plaque d’immatriculation.<br>Tu dois marquer l’endroit le plus proche d’où provient cette plaque.<br>Plus ta réponse est proche, plus tu gagnes de points.<br>Après avoir choisi, clique sur le bouton de vérification.<br>Bonne chance !";
    contact.innerHTML = "Contact";
    channel.innerHTML = "Chaîne YouTube";
    officialgamepage.innerHTML = "Page officielle du jeu sur Facebook";
    button.innerHTML = "retour";
    break;
    case "he":
    info.innerHTML = "PLATE-O-GUESSR הוא משחק מחשב המבוסס על GE0-GUESSR, שנוצר בשפות תכנות כמו JavaScript, HTML ואחרות, על ידי מתבגר פולני.<br>המשחק חדש, אז ייתכן שיהיו בו באגים.<br>אם אתה מבחין בבאג כלשהו, אנא צור קשר עם המפתח.";
    naglowek.innerHTML = "מדריך";
    tutor.innerHTML = "PLATE-O-GUESSR הוא משחק שבו אתה צריך לנחש את המקום על סמך לוחית הרישוי של רכב.<br>אתה צריך לסמן את המקום הקרוב ביותר שממנו מגיעה לוחית הרישוי הזו.<br>ככל שתסמן קרוב יותר, תקבל יותר נקודות.<br>לאחר הסימון, לחץ על כפתור הבדיקה.<br>בהצלחה!";
    contact.innerHTML = "צור קשר";
    channel.innerHTML = "ערוץ YouTube";
    officialgamepage.innerHTML = "הדף הרשמי של המשחק בפייסבוק";
    button.innerHTML = "חזור";
    break;
    case "cz":
    info.innerHTML = "PLATE-O-GUESSR je počítačová hra založená na GE0-GUESSR, vytvořená v programovacích jazycích jako JavaScript, HTML a dalších, polským teenagerem.<br>Hra je nová, takže se mohou vyskytnout chyby.<br>Pokud si všimnete nějaké chyby, kontaktujte vývojáře.";
    naglowek.innerHTML = "Návod";
    tutor.innerHTML = "PLATE-O-GUESSR je hra, ve které musíte uhodnout místo na základě registrační značky auta.<br>Musíte označit nejbližší místo, odkud tato značka pochází.<br>Čím blíže označíte, tím více bodů získáte.<br>Po označení klikněte na tlačítko kontroly.<br>Hodně štěstí!";
    contact.innerHTML = "Kontakt";
    channel.innerHTML = "YouTube kanál";
    officialgamepage.innerHTML = "Oficiální stránka hry na Facebooku";
    button.innerHTML = "vratit";
    break;
    case "it":
    info.innerHTML = "PLATE-O-GUESSR è un gioco per computer basato su GE0-GUESSR, creato con linguaggi di programmazione come JavaScript, HTML e altri, da un adolescente polacco.<br>Il gioco è nuovo, quindi potrebbero esserci dei bug.<br>Se noti un bug, contatta lo sviluppatore.";
    naglowek.innerHTML = "Tutorial";
    tutor.innerHTML = "PLATE-O-GUESSR è un gioco in cui devi indovinare il luogo basandoti sulla targa di un'auto.<br>Devi segnare il luogo più vicino da cui proviene quella targa.<br>Più vicino segni, più punti ottieni.<br>Dopo aver segnato, clicca sul pulsante di verifica.<br>Buona fortuna!";
    contact.innerHTML = "Contatto";
    channel.innerHTML = "Canale YouTube";
    officialgamepage.innerHTML = "Pagina ufficiale del gioco su Facebook";
    button.innerHTML = "ritorno";
    break;
    case "se":
    info.innerHTML = "PLATE-O-GUESSR är ett datorspel baserat på GE0-GUESSR, skapat med programmeringsspråk som JavaScript, HTML och andra, av en polsk tonåring.<br>Spelet är nytt, så förvänta dig buggar.<br>Om du märker någon bugg, kontakta utvecklaren.";
    naglowek.innerHTML = "Handledning";
    tutor.innerHTML = "PLATE-O-GUESSR är ett spel där du måste gissa platsen baserat på bilens registreringsskylt.<br>Du måste markera den närmaste platsen därifrån den registreringsskylten kommer.<br>Ju närmare du markerar, desto fler poäng får du.<br>Efter att ha markerat, klicka på kontrollknappen.<br>Lycka till!";
    contact.innerHTML = "Kontakt";
    channel.innerHTML = "YouTube-kanal";
    officialgamepage.innerHTML = "Officiell spelsida på Facebook";
    button.innerHTML = "återvända";
    break;
    default:
        info.innerHTML = "PLATE-O-GUESSR is a computer game based on GE0-GUESSR, made on programming languages like, Javascript, HTML and more, by polish teenager.<br>That game is new, so expect bugs.<br> If you notice any bug, please contact with developer.";
        naglowek.innerHTML = "Tutorial";
        tutor.innerHTML = "PLATE-O-GUESSR is a game in which you have to guess the place based on the car license plate.<br>You need to mark the closest place, from which comes that license plate<br>As close as you marked, you get more points.<br>After marking, click the check button.<br>Good luck!";
        contact.innerHTML = "Contact";
        channel.innerHTML = "Youtube Channel";
        officialgamepage.innerHTML = "Official game page on Facebook";
        button.innerHTML = "return";
    break;
}