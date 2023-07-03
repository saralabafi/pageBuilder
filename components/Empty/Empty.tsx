import { IEmptyBoxProps } from './Empty.type'

const EmptyBox = (props: IEmptyBoxProps) => {
  const { imageSrc, title, description, buttonText, onClick } = props
  return (
    <div className="bg-white rounded-lg shadow-md p-20 flex flex-col items-center">
      <div className="flex justify-center mb-6">
        <img src={imageSrc} alt={title} className="object-contain" />
      </div>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 text-lg mb-6">{description}</p>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}>
        {buttonText}
      </button>
    </div>
  )
}

export default EmptyBox
