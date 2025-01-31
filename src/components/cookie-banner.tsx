const CookieBanner = () => {
  return (
    <div className="w-[62vw] h-[4.2vw] backdrop-blur-md border-[0.078vw] border-white fixed bottom-[1.5vw] right-[2.5vw] z-50 p-[0.8vw] rounded-tl-[1vw] rounded-br-[1vw] flex justify-between gap-[6vw]">
      <p className="text-[0.95vw] font-light leading-[1.3vw]">
        We use third-party cookies in order to improve your site experience and deliver
        personalized content. By using VANA®, you agree to our Cookie Policy.
      </p>
      <div className="flex gap-[0.8vw]">
        <button className="bg-black/20 px-[2.92vw] py-[0.6vw] border-[0.078vw] border-[#837f80] font-light text-[0.8vw] rounded-tl-[0.7vw] rounded-tr-[0.15vw] rounded-br-[0.7vw] rounded-bl-[0.15vw]">
          <div>DENY</div>
        </button>
        <button className="bg-black/20 px-[2.92vw] py-[0.1vw] border-[0.078vw] border-white font-light text-[0.8vw] rounded-tl-[0.7vw] rounded-tr-[0.15vw] rounded-br-[0.7vw] rounded-bl-[0.15vw]">
          <div>ALLOW</div>
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
