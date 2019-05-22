import { connection } from 'mongoose';

export default {
    ping(): object {
        return { message: 'pong!' };
    },
    pingDatabase(): object {
        const isReady: number = connection.readyState;
        if (isReady === 1) {
            return { message: 'Database is ready.' };
        } else {
            return { message: 'Database is not ready.' };
        }
    },
};
