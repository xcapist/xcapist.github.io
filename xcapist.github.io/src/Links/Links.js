import './Links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

function Links() {
    return (
        <div className="links">
           <div className='icons'><FontAwesomeIcon icon={brands('linkedin')} /></div>
           <div className='icons'><FontAwesomeIcon icon={brands('github-square')} /></div>
           <div className='icons'><FontAwesomeIcon icon={solid('square-envelope')} /></div>
           <div className='icons'><FontAwesomeIcon icon={solid('book')} /></div>
        </div>
    );
}
export default Links;