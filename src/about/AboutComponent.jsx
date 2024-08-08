

export const AboutComponent = ({title,text, adClass}) => {

      const splitText = (text) => {
        const lines = text.split(/\./);
        const filteredLines = lines.filter(line => line.trim() !== '');
        const paragraphs = filteredLines.map((line, index) => (
          <p key={index} className="mb-0 fs-5 inter">{line.trim()}.</p>
        ));
        return paragraphs;
      };

  return (
    <>
        <div className="rounded">
            <h5 className="rozha-one fs-4"> {title} </h5>
            <div className={`border border-gris border-5 bg-body rounded p-3 ${adClass}`}>
                 {splitText(text)} 
            </div>
        </div>
    </>
  )
}
