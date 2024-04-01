import Profilepic from './assets/bike.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="card-image"src={Profilepic}alt="profile pic"></img>
            <h2 className="card-title">Nidar</h2>
            <p className="card-text">I am currently a student from UVCE and play video games</p>

        </div>
    );

}
export default Card