import {categoryNames} from "./utils.js";

export const Navigation = ({onNavClick, currentCategory, className = ''}) => {
    return (
        <nav className={`navigation grid ${className}`}>
            <a data-href="index" className="navigation__logo" onClick={onNavClick}>
                <img className="navigation__image" src="../images/logo.svg" alt="Логотип"/></a>
            <ul className="navigation__list">
                {['index', 'fashion', 'tech', 'politics', 'sport'].map((item) => {
                    return (<li className="navigation__item" key={item}>
                        <a onClick={onNavClick}
                           className={`navigation__link ${currentCategory === item ? 'navigation__link--active' : ''}`}
                           data-href={item}
                           href="#"
                        >{categoryNames[item]}

                        </a>
                    </li>)
                })}
            </ul>
        </nav>
    )
}