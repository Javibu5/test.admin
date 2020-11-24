const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request('http://localhost:3000/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                console.debug('xxx',JSON.stringify(auth));
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },

    checkError: error => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            
             return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },

    checkAuth: params => localStorage.getItem('auth')
    ? Promise.resolve()
    : Promise.reject(),

    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },

    getIdentity: (error) => { /* ... */ },

    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
    
};

export default authProvider;