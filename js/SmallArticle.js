export const SmallArticle = ({title, date, source}) => {
    return (
        <article className="small-article">
            <h2 className="small-article__title">{title}
            </h2>
            <p className="small-article__caption">
                                            <span
                                                className="article-date small-article__date">{source}</span>
                <span
                    className="article-source small-article__source">{new Date(date).toLocaleDateString('ru-RU', {
                    month: 'long',
                    day: 'numeric'
                })}</span>
            </p>
        </article>
    )
}