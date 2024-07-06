
export const TitleLineComponent = ({title}) => {

  const titleModified = title === "heridas" ? "Tratamiento de heridas" : title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
        <h2 className="border-bottom pb-2 rozha-one"> Productos de {titleModified} </h2>
    </>
  )
}
