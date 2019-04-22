import Pusher from 'pusher-js';
import { persistUtils } from '../utils/persist'

const soket = new Pusher('8ca50ca8ff937987bdce', {
    cluster: 'ap1',
    authEndpoint: 'http://localhost:8000/pusher/auth',
    auth: {
        headers: {
            'Authorization': `Bearer ${persistUtils.loadProperty('access_token', '')}`
        }
    }
});

console.log("soket.auth.headers: ",soket.auth.headers);
