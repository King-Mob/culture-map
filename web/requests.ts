const { HOMESERVER, ROOM_ID, ACCESS_TOKEN } = process.env;

export const getRoomRequest = async () => {
    return fetch(
        `https://matrix.${HOMESERVER}/_matrix/client/v3/rooms/${ROOM_ID}/messages?limit=1000`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        }
    );
};

export const sendEventRequest = async (like: string, might: string, because: string) => {
    return fetch(`https://matrix.${HOMESERVER}/_matrix/client/v3/rooms/${ROOM_ID}/send/culturemap.link`, {
        method: "POST",
        body: JSON.stringify({
            like,
            might,
            because
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
    })
}