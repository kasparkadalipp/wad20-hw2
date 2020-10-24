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
        users => undefined); // TODO
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
            ${AuthorInfo(author)}
            <small>${createTime}</small>
        </div>
        ${media === null ? "" : Media(media)}
        ${text === null ? "" : Title(text)}
        <div class="post-actions">
            <button type="button" name="like" class="like-button">${likes}</button>
        </div>
    </div>`

const AuthorInfo = ({avatar, firstname, lastname}) => `
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
