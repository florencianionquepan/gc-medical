const iconos=[
    {id:11, icono:'bi bi-instagram', link:'https://www.instagram.com/gcmedicalbb/?igsh=aTNvd2JkdXJ1N3Aw'},
    {id:12, icono:'bi bi-facebook', link:'#'},
    {id:13, icono:'bi bi-linkedin', link:'#'},
    {id:14, icono:'bi bi-whatsapp', link:'https://wa.me/+542914372900'}
  ];

export const ComunidadComponent = () => {
  return (
    <>
        <p className="text-center">Sumate a nuestra comunidad!</p>
        <div className="d-flex justify-content-center">
                {iconos.map(icono=>(
                    <a key={icono.id} href={icono.link} className="btn btn-dark rounded-circle ms-1">
                        <div className="mt-1">
                            <i className={icono.icono}></i>
                        </div>
                    </a>
                ))}
        </div>
    </>
  )
}
