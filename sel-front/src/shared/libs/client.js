import config from "shared/config/config";

const host = config.BASE_URL;
async function client(endpoint, { body, ...customConfig } = {}, isJSON = true, dataType = 'json', shouldHandleError = true) {
    const token = localStorage.getItem('token');
    const headers = isJSON ? { 'content-type': 'application/json' } : {};
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    const config = {
        method: body ? 'POST' : 'GET',
        headers: {
            ...headers,
            ...customConfig.headers
        },
        ...customConfig
    };
    if (body) {
        config.body = isJSON ? JSON.stringify(body) : body;
    }

    return await window.fetch(`${host}/${endpoint}`, config).then(async (response) => {
        if (response?.status === 401) {
            return logout();
        }
        if (response?.ok) {
            try {
                switch (dataType) {
                    case 'json':
                        return await response?.json();
                    case 'blob':
                        return await response?.blob();
                    case 'body':
                        return await response?.body();
                }
            } catch (e) {
                return null;
            }
        } else {
            const error = await response?.json();
            if (error[0]?.status === 503) {
                return Promise.reject(error);
            }
            if (shouldHandleError) {
                toast.error('ошибка: ' + error?.error);
            }
            return Promise.reject(error);
        }
    });
}

export default client;