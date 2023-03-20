import Header from '~/components/layout/components/Header/index';
import Sildebar from './Sildebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sildebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
