import images from '~/assets/images'
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    console.log (images.logo)
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                    <img src={images.logo} alt=""/>
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>

                </div>
            </div>
        </header>
    );
}

export default Header;
