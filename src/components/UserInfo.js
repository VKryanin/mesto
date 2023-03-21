export class UserInfo {
    constructor({ usernameSelector, userDescriptionSelector }) {
        this._username = document.querySelector(usernameSelector);
        this._userDescription = document.querySelector(userDescriptionSelector);
    }

    getUserInfo() {
        console.log(this._username.textContent);
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