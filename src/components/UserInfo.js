export class UserInfo {
    constructor({ usernameSelector, userDescriptionSelector, userAvatarLink }) {
        this._username = document.querySelector(usernameSelector);
        this._userDescription = document.querySelector(userDescriptionSelector);
        this._avatarLink = document.querySelector(userAvatarLink);
    }

    getUserInfo() {
        return {
            username: this._username.textContent,
            description: this._userDescription.textContent,
            avatar: this._avatarLink.link
        };
    }

    setUserInfo({ username, description }) {
        this._username.textContent = username;
        this._userDescription.textContent = description;
    }

    setUserAvatar(avatarLink) {
        this._avatarLink.src = avatarLink;
    }
}