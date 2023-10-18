export default function InfosUsuario (props) {

    console.log(props.userInfo)

    return (
        <div className="info-usuarios">
            <img  src="https://picsum.photos/id/64/100/100"/>
            <p>{props.userInfo}</p>
        </div>
    )
}