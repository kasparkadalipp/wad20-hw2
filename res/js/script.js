$(() => {
    $.get("https://private-anon-19b2331a1a-wad20postit.apiary-mock.com/users/1",
        userInfo => $(".avatar-container")
            .append(DropdownMenu(userInfo))
            .on("click", () => $(".dropdown-menu").toggle()));

    $.get("https://private-anon-af03cd5f74-wad20postit.apiary-mock.com/posts",
        posts => {
            posts.forEach(content => $(".main-container").append(Post(content)));
            $(".like-button").on("click", function () {
                $(this).toggleClass("liked");
            });
        });

    $.get("https://private-anon-af03cd5f74-wad20postit.apiary-mock.com/profiles",
        profiles => {
            profiles.forEach(data => $(".profile-container").append(Profile(data)));
            $(".follow-button").on("click", function () {
                $(this).toggleClass("followed");
                $(this).text($(this).hasClass("followed") ? "Followed" : "Follow");
            });
        });
});

const DropdownMenu = ({firstname, lastname, email, avatar}) => `
    <img src=${avatar} class="avatar" alt="Me">
    <div class = "dropdown-menu">
        <ul>
            <li>
                <p>${firstname + " " + lastname}</p>
                <p>${email}</p>
            </li>
            <li><a href="browse.html">Browse</a></li>
            <li><a href="login.html">Log Out</a></li>
        </ul>
    </div>`

const Post = ({author, createTime, media, text, likes}) => `
    <div class="post">
        <div class="post-author">
            ${Author(author)}
            <small>${createTime}</small>
        </div>
        ${media === null ? "" : Media(media)}
        ${text === null ? "" : Title(text)}
        <div class="post-actions">
            <button type="button" name="like" class="like-button">${likes}</button>
        </div>
    </div>`

const Author = ({avatar, firstname, lastname}) => `
    <span class="post-author-info">
        <img src=${avatar} alt="Post author">
        <small>${firstname + " " + lastname}</small>
    </span>`

const Media = ({type, url}) =>
    type === "video"
        ?
        `<div class="post-video">
            <video controls>
                <source src=${url} type=${"video/" + url.match(/[^.]+$/)[0]}>
            </video>
        </div>`
        :
        `<div class="post-image">
            <img src=${url} alt="">
        </div>`

const Title = (text) => `
    <div class="post-title">
        <h3>${text}</h3>
    </div>`

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