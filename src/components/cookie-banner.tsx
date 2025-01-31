import CustomButton from './custom-button'

const CookieBanner = () => {
  return (
    <div className="w-[62vw] h-[4.2vw] backdrop-blur-md border-[0.078vw] border-white fixed bottom-[1.5vw] right-[2.5vw] z-50 p-[0.8vw] rounded-tl-[1vw] rounded-br-[1vw] flex justify-between gap-[6vw]">
      <p className="text-[0.95vw] font-light leading-[1.3vw]">
        We use third-party cookies in order to improve your site experience and deliver
        personalized content. By using VANA®, you agree to our{' '}
        <span className="hover:blur-[1px] transition-[filter] duration-300 cursor-pointer">
          Cookie Policy
        </span>
        .
      </p>
      <div className="flex gap-[0.8vw]">
        <CustomButton styles="px-[2.92vw] border-white/50">DENY</CustomButton>
        <CustomButton styles="px-[2.92vw]">ALLOW</CustomButton>
      </div>
    </div>
  )
}

export default CookieBanner
