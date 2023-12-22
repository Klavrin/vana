type SmallDownloadButtonProps = {
  innerText: string
}

const SmallDownloadButton = ({ innerText }: SmallDownloadButtonProps) => {
  return (
    <div className="px-[1.1vw] py-[.43vw] bg-black/20 flex items-center text-[.8vw] border-[0.09vw] border-white rounded-[.15vw] rounded-tl-[.6vw] rounded-br-[.6vw] cursor-pointer select-none">
      {innerText}
    </div>
  )
}

export default SmallDownloadButton
