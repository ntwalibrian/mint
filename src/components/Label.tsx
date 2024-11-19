interface Props {
    title : string;
}

function Label({title}:Props) {
  return (
    <span className="text-md text-darkBlue bg-lightBlue rounded-3xl py-1 px-2 font-semibold cursor-default w-fit">{title}</span>
  )
}

export default Label
