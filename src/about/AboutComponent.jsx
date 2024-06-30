

export const AboutComponent = ({title,text}) => {

    const splitText = (text) => {
        // Dividir el texto usando expresión regular para coincidir con puntos
        const lines = text.split(/\./);
        // Mapear cada línea a un párrafo
        const paragraphs = lines.map((line, index) => (
          <p key={index} className="mb-0">{line.trim()}.</p>
        ));
        return paragraphs;
      };

  return (
    <>
        <div className="text-center bg-celeste p-2 rounded">
            <div className="border border-gris border-5 bg-body rounded">
                <h5> {title} </h5>
                 {splitText(text)} 
            </div>
        </div>
    </>
  )
}
