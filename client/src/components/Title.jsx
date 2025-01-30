

const Title = ({heading, subHeading}) => {
  return (
    <div className="flex flex-col gap-2 mx-auto mt-12 mb-12 max-w-[600px]">
        <p className="text-gray-500 text-3xl font-semibold text-center uppercase">{heading}</p>
        <p className="text-center">{subHeading}</p>
    </div>
  )
}

export default Title