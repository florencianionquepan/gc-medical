import { BigIcon } from "./BigIcon"

export const ItemPhone = () => {
  return (
    <>
        <div className="border rounded border-gris border-5 position-relative pt-5 my-0 my-md-5">
            <BigIcon iconClass="bi bi-phone-vibrate" link="https://wa.me/+542914372900"/>
            <p className="px-4 pt-3 mt-5">
                +54 291 437-2900
            </p>
            <p className="px-4">
                ¡En nuestro Whatsapp podes encontrar los productos y servicios que ofrecemos!
            </p>
        </div>
    </>
  )
}
