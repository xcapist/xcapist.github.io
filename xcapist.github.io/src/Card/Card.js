import './Card.css';

function Card(props) {
    return (
        <div className="card">{props.name}
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam incidunt culpa facere assumenda quas mollitia, hic amet laborum tempora repudiandae veniam dolorem accusantium. Quas neque voluptate commodi tempora autem?</h5>
        </div>
    );
}
export default Card;