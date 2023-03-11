export class UserInfo {
    constructor({ usernameSelector, userDescriptionSelector }) {
        this._username = usernameSelector;
        this._userDescription = userDescriptionSelector;
    }
    
    getUserInfo() {
        return {
            username: this._username.textContent,
            description: this._userDescription.textContent
        };
    }
    
    setUserInfo({ username, description }) {
        this._username.textContent = username;
        this._userDescription.textContent = description;
    }
}