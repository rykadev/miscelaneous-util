const MANTLE_DB_URL = "https://mantledb.sh/v2";

async function dbSave(namespace, path, data) {
    const response = await fetch(`${MANTLE_DB_URL}/${namespace}/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(
            `Save failed with status ${response.status}: ${response.statusText}`,
        );
    }
    return response.json();
}

async function dbLoad(namespace, path) {
    const response = await fetch(`${MANTLE_DB_URL}/${namespace}/${path}`);
    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error(
            `Load failed with status ${response.status}: ${response.statusText}`,
        );
    }

    return response.json();
}

// Pure JavaScript PBKDF2 implementation (No Web Crypto required)
function getId(username, password) {
    const salt = `my-app-v1:${username.trim().toLowerCase()}`;

    // Compute PBKDF2 using CryptoJS
    const cfg = {
        keySize: 256 / 32, // CryptoJS expects key size in 32-bit words (256 bits = 8 words)
        iterations: 600000,
        hasher: CryptoJS.algo.SHA256,
    };

    const derivedKey = CryptoJS.PBKDF2(password, salt, cfg);

    // CryptoJS returns a WordArray object, converting it to a hex string is built-in
    return derivedKey.toString(CryptoJS.enc.Hex);
}
