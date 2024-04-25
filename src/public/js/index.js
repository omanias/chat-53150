const socket = io()

socket.emit('message', "Comunicandome desde websocket")