import { hot } from 'react-hot-loader/root';

function HeaderComponent() {
    return (
    <div><h1>Hello from Header Component!</h1></div>
    );
};

export const Header = hot(HeaderComponent);

export default {

}