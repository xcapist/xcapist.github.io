import './Section.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Section(props) {
    return (
        <div className="section">
            <h4><FontAwesomeIcon icon={solid('school')} /> &nbsp; {props.name}</h4>
        </div>
    );
}
export default Section;