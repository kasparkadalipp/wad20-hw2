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

export default Post;