const Profile = ({avatar, firstname, lastname}) => `
    <div class="profile">
        <div class="mask">
            <img src=${avatar} alt="User">
        </div>
        <p>${firstname + " " + lastname}</p>
        <div class="browse-actions">
            <button type="button" name="like" class="follow-button">Follow</button>
        </div>
    </div>`

export default Profile