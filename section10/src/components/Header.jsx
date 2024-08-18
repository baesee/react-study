import './Header.css';
import { memo } from 'react';

const Header = () => {
    return (
        <div className="header">
            <h3>오늘은 📅</h3>
            <h1>{new Date().toLocaleDateString()}</h1>
        </div>
    );
};

// 컴포넌트 최적화
// const memrizedHeader = memo(Header)
// export default memrizedHeader;

export default memo(Header);

// export default Header;