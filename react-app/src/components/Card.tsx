interface Props {
    body: string
}

function Card(props: Props) {    // Interface Props para definir tipo de variable
    const { body } = props;      // Objeto para recibir props
    return (
        <div 
            className="card" 
            style={{
                width: "350px", 
            }}
        >
            <div className="card-body">{body}</div>
            {/* <div className="card-body"><CardBody/></div> */}  
        </div>
    );
}

export function CardBody() {
    return (
        <>
            <h5 className="card-title">Card title HOLA</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up 
                the bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </>
    );
}

export default Card;