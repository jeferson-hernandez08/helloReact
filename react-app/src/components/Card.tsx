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

interface CardBodyProps { 
    title: string;
    text?:  string;
}

export function CardBody(props: CardBodyProps) {
    const { title, text} = props;
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>  
        </>
    );
}

export default Card;