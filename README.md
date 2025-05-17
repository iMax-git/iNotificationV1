# iNotificationV1

Crée par iMax pour la plateforme ADN's.

Disponible en open source.

----------------------------------------------------------------
Installation
----------------------------------------------------------------

1 - Ajouter le document 'NotificationUI' dans votre dossier ressource
2 - Ajouter dans votre server.cfg -> "ensure NotificationUI"

----------------------------------------------------------------
Personalisation
----------------------------------------------------------------

Changer le logo:
    1 - Ouvrer le fichier 'logo.png' avec un éditeur d'images
    2 - Editer l'image en remplaçant l'image de base par la votre.

Changer le design de la case:
    1 - Ouvrer le fichier 'notif.css' avec un éditeur de texte.
    2 - Personalisez:
        1 - "background-color" change la couleur de l'arrière plan. 
            Trouvez votre couleur içi -> https://rgbacolorpicker.com/
            et remplacer les numeros de la ligne 9 par les cases R, G, B, A
            ce qui donne par exemple : "background-color: rgba(0, 0, 0, 0.858);"
        2 - "border" change la couleur de la barre sur la droite.
            Ligne 10: au lieu de "red" changer  par la couleur que vous souhaitez mise en anglais.
            Par exemple:(Je veux de vert -> "border: green;")
        3 - "font-family" change la police d'écriture.
            https://fonts.google.com/  -> Site pour des polices d'écriture
            Chercher votre police d'ecriture
            Copier le @import comme celui-ci (@import url('https://fonts.googleapis.com/css2?family=Mina&display=swap');)
            ensuite copier le font-family comme ceci (font-family: 'Mina', sans-serif;)
            puis changer la ligne 15 et 18.


----------------------------------------------------------------
Utilisation
----------------------------------------------------------------

Pour utiliser la notificaiton dans vos script utiliser la fonction suivante:
    exports["NotificationUI"]:Notification(message)

    OU
TriggerEvent("iNotification:show", "this message")

----------------------------------------------------------------
Signature
----------------------------------------------------------------

Le script à été crée par iMax#0705.
La revente du script est interdit.

Bon jeu !
iMax

