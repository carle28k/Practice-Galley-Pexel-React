

export const CardGallery = ({busqueda, imgName, imgAutor}) => {

  return (
    <section key={busqueda}>
        <h2>{busqueda}</h2>
        <div>
            <h3>{imgName}</h3>
            <h3>{imgAutor}</h3>
        </div>
    </section>
  )
}
