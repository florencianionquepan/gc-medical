

export const AboutComponent = ({title,text, adClass}) => {

      const splitText = (text) => {
        const lines = text.split(/\./);
        const filteredLines = lines.filter(line => line.trim() !== '');
        const paragraphs = filteredLines.map((line, index) => (
          <p key={index} className="mb-0">{line.trim()}.</p>
        ));
        return paragraphs;
      };

  return (
    <>
        <div className="rounded">
            <div className={`border border-gris border-5 bg-body rounded p-3 ${adClass}`}>
                <h5 className="rozha-one"> {title} </h5>
                 {splitText(text)} 
            </div>
        </div>
    </>
  )
}
