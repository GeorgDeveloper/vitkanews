import {categoryIds} from "./utils.js";
import {Navigation} from "./Navigation.js";
import {Articles} from "./Articles.js";

export const App = () => {
    const [category, setCategory] = React.useState('index');
    const [articles, setArtycles] = React.useState({items: [], categories: [], sources: []});

    const onNavClick = (e) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href);
    }

    React.useEffect(() => {
        fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
            .then(response => response.json())
            .then((response) => {
                setArtycles(response);
            })
    }, [category]);

    return (
        <React.Fragment>
            <header className="header">
                <div className="container header__navigation">
                    <Navigation
                        onNavClick={onNavClick}
                        currentCategory={category}
                        className="header__navigation"
                    />
                </div>
            </header>
            <main className="main">
                <Articles articles={articles} />
            </main>
            <footer className="footer">
                <div className="container">
                    <Navigation
                        onNavClick={onNavClick}
                        currentCategory={category}
                        className="footer__navigation"
                    />
                    <div className="footer__column">
                        <p className="footer__text">Сделано на Frontend курсе в <a href="#"
                                                                                   className="footer__link">Karpov.Courses</a>
                        </p>
                        <p className="footer__copyright">@ 2025</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}