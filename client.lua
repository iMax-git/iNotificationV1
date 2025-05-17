
function Notification(message)
    SendNUIMessage({
        action = "notification",
        text = message,
    })
end

RegisterNetEvent("iNotification:show")
AddEventHandler("iNotification:show", function(message)
    Notification(message)
end)