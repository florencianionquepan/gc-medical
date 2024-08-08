import { BigIcon } from "./BigIcon"

export const ItemPhone = () => {
  return (
    <>
        <div className="border rounded border-gris border-5 position-relative pt-5 my-0 my-md-5 inter">
            <BigIcon iconClass="bi bi-phone-vibrate mt-0" link="https://wa.me/+542914372900"/>
            <p className="px-4 pt-3 mt-5 fs-5">
                +54 291 437-2900
            </p>
            <p className="px-4 fs-5">
                ¡En nuestro Whatsapp podés encontrar los productos y servicios que ofrecemos!
            </p>
        </div>
    </>
  )
}
