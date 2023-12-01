
export default function ArtikelCard(props: any) {
  return (
    <div className="lg:w-3/12">
        <h1 className="lg:text-center lg:text-5xl lg:mb-4 lg:text-white lg:font-medium">{props.title}</h1>
        <p className="lg:text-center lg:text-sm lg:text-white lg:font-light">{props.description}</p>
    </div>
  )
}
