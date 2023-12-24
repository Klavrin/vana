const scrollToElement = (elementId: string) => {
  const targetElement = document.getElementById(elementId)
  targetElement && targetElement.scrollIntoView({ behavior: 'smooth' })
}

export default scrollToElement
