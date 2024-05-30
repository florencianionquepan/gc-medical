import { BigIcon } from "./BigIcon"

export const ItemPhone = () => {
  return (
    <>
        <div className="border rounded border-secondary border-3 position-relative pt-5 my-0 my-md-5">
            <BigIcon iconClass={"bi bi-phone-vibrate"}/>
            <p className="px-4 pt-3 mt-5">
                +54 291 37-2900
            </p>
            <p className="px-4">
                En nuestro Whatsapp tambien podes encontrar nuestro catalogo!
            </p>
        </div>
    </>
  )
}
