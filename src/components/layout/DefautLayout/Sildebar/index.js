import classNames from 'classnames/bind';
import styles from './Sildebar.module.scss';

const cx = classNames.bind(styles);

function Sildebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sildebar</h2>
        </aside>
    );
}

export default Sildebar;
