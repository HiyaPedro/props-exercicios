import InfosUsuario from "./InfosUsuario";


export default function CardVideo(props) {

    const userName = "Peter Cooper"

    console.log(props.object)

    const titulo = "Título do vídeo";
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }
    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.object.img} alt="" />
            <h4>{props.object.title}</h4> 
            
            <InfosUsuario userInfo={props.object.producer}/>
        </div>
    )

}