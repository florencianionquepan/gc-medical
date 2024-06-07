import { BigIcon } from "./BigIcon"

export const ItemEmail = () => {
  return (
    <>
        <div className="border rounded border-secondary border-3 position-relative pt-5">
            <BigIcon iconClass="bi bi-envelope-arrow-up" link="mailto:info@gcmedical.com.ar"/>
            <p className="px-4 pt-3 mt-5">
                info@gcmedical.com.ar
            </p>
            <p className="px-4">
            Podés encontrarnos en otras redes sociales 
                    Instagram:
                    @GCMedicalbb
                    @GcMedicaldiabetes
                    Linkedin
                    Facebook
            </p>
        </div>
    </>
  )
}
