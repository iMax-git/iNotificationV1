


/* ___________________________________________________________________ */
/* ___________________________________________________________________ */
/* _____               Start of notification JS                  _____ */
/* ___________________________________________________________________ */
/* ___________________________________________________________________ */


function CreateNotification(message) {
    const notif = addNotification(message);
    setTimeout(() => {
        removeNotification(notif);
    }, 5000);
}


function removeNotification(notification)
{
    const notificationContainer = document.getElementById('notification');
    notification.classList.add('hide');
    setTimeout(()=>{
        notification.classList.add('fadeout');
    }, 1500);
    setTimeout(()=>{
        
        notificationContainer.removeChild(notification);
    }, 3000);
}

function addNotification(message) {
    const notificationContainer = document.getElementById('notification');
    const newNotification = document.createElement('div');
	newNotification.classList.add('notification','show');
	const innerNotification = `<img src='logo.png' alt='NotifUI'/><p>${message}</p>`;
	newNotification.innerHTML = innerNotification;
	notificationContainer.appendChild(newNotification);
	return newNotification;
}


/* ___________________________________________________________________ */
/* ___________________________________________________________________ */
/* ____                 END of notification JS                    ____ */
/* ___________________________________________________________________ */
/* ___________________________________________________________________ */


/*  FIVEM  */

window.addEventListener('message', function(event) {
    if (event.data.action == "notification") {
        CreateNotification(event.data.message)
    }
});

////////////////////////////////////////////////////////////////