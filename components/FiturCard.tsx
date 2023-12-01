
export default function FiturCard(props: any) {
  return (
    <div className="lg:w-3/12">
      <h1 className="lg:text-2xl lg:mb-4 lg:font-semibold">{props.title}</h1>
      <p className="lg:text-sm lg:font-light">{props.description}</p>
    </div>
  )
}