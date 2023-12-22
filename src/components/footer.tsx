const Footer = () => {
  const footerColumns = [
    {
      title: 'Support',
      links: [
        { link: 'Contact', arrow: false },
        { link: 'Support', arrow: true },
        { link: 'Terms of Use', arrow: false },
        { link: 'Cookie Policy', arrow: false }
      ]
    },
    {
      title: 'Follow Us',
      links: [
        { link: 'Instagram', arrow: true },
        { link: 'Facebook', arrow: true },
        { link: 'TikTok', arrow: true },
        { link: 'YouTube', arrow: true }
      ]
    }
  ]

  return (
    <footer className="px-[2vw]">
      <hr className="w-full border-[0.065vw] border-white" />

      <div className="grid grid-cols-[34.5%,65.5%] pt-[4vw] pb-[1.7vw]">
        <img
          src="./src/assets/vana-logo.svg"
          alt="VANA"
          className="w-[15vw] cursor-pointer"
        />

        <div className="flex justify-between">
          <div className="w-2/4 flex flex-col justify-between">
            <div className="flex">
              {footerColumns.map((column) => (
                <div key={column.title} className="w-1/2">
                  <h4 className="text-[.9vw] opacity-50 mb-[1vw]">{column.title}</h4>
                  <ul>
                    {column.links.map((colLink) => (
                      <li
                        key={colLink.link}
                        className="text-[.8vw] uppercase leading-[2.2vw] hover:blur-[1px] transition-[filter] duration-300 cursor-pointer"
                      >
                        {colLink.link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-[.9vw] opacity-50">©2023 VANA. All Rights Reserved.</p>
          </div>

          <div className="w-2/4">
            <div>
              <h4 className="text-[.9vw] opacity-50 mb-[1.5vw]">Subscribe</h4>

              <div className="flex justify-end">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full bg-transparent text-[.9vw] border-[0.09vw] rounded-[.15vw] rounded-tl-[.6vw] rounded-br-[.6vw] px-[1.1vw] py-[.7vw]"
                />
                <div className="text-[.8vw] flex items-center bg-transparent border-[0.09vw] rounded-[.15vw] rounded-tl-[.6vw] rounded-br-[.6vw] px-[1.1vw] py-[.78vw] uppercase absolute cursor-pointer">
                  Submit
                </div>
              </div>
            </div>

            <div className="mt-[5vw] mb-[3vw]">
              <h4 className="text-[.9vw] opacity-50 mb-[1.5vw]">Download App</h4>

              <div className="flex gap-[1vw]">
                <img
                  src="./src/assets/app-store.svg"
                  alt="App Store"
                  className="w-[11vw] cursor-pointer"
                />
                <img
                  src="./src/assets/google-play.svg"
                  alt="Google Play"
                  className="w-[12vw] cursor-pointer"
                />
              </div>
            </div>

            <p className="text-[.8vw] uppercase hover:blur-[1px] transition-[filter] duration-500 cursor-pointer">
              Site by DashDigital Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
