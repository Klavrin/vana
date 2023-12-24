import { useState } from 'react'

/**
 * set the display of the p tag to flex, but the opacity is 0
 * the second i do that the divs starts expanding until it reaches its position (how do we get this position???)
 * while the div is expading, the opacity of the p tag is transitioned from 0 to 1.
 */

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const questions = [
    {
      title: 'What is breathwork?',
      description:
        'Breathwork refers to a variety of techniques and practices that focus on conscious control and manipulation of breathing patterns to achieve physical, mental, and emotional well-being. It involves intentionally altering the depth, rhythm, and pace of breathing to influence our physiological and psychological states. Breathwork techniques can include deep diaphragmatic breathing, alternate nostril breathing, and breath retention exercises. Through focused breathwork, individuals can experience a range of benefits such as relaxation, stress reduction, increased energy, improved mental clarity, enhanced emotional balance, and even spiritual exploration. The practice of breathwork has been utilized in various healing modalities, including yoga, meditation, and holistic therapies.'
    },
    {
      title: "What's the science?",
      description:
        'The science behind breathwork and breathing techniques is rooted in the understanding of the mind-body connection and the impact of breathing on our physiology. Research has shown that intentional changes in breathing patterns can directly affect our autonomic nervous system, which regulates involuntary bodily functions. Slow, deep breaths activate the parasympathetic nervous system, promoting relaxation and reducing stress response. They can lower heart rate, blood pressure, and cortisol levels. Conversely, rapid and shallow breaths can trigger the sympathetic nervous system, leading to increased alertness and heightened arousal. Breathwork also influences our brain activity by modulating the ratio of oxygen to carbon dioxide, altering neurotransmitter levels, and stimulating the release of endorphins. These physiological changes explain the observed benefits of breathwork, including improved mood, enhanced cognitive function, and overall well-being. To find out more, follow our instagram page.'
    },
    {
      title: 'How ofter should I practice?',
      description:
        'We believe everybody should practice some form of breathwork everyday, and our microdoses are designed to be just that. Our longer journey sessions can have a more profound effect on your system, and integrating these experiences is key to conscious growth. Therefore, we wouldn’t recommend more than 3 long (40 mins+) intensive breathwork sessions per week, alongside your daily practice or any courses/collections. The frequency of breathwork practice can vary depending on personal preferences, goals, and the specific techniques being used. Generally, it is recommended to establish a consistent breathwork routine to experience the full benefits. Ultimately, finding a balance that works for you and integrating breathwork into your lifestyle on a regular basis can help you maintain its positive effects.'
    },
    {
      title: 'Is breathwork safe? Are there any safety measures I should be aware of?',
      description:
        "While breathwork is generally safe for most individuals, there are some contraindications to be aware of. People with certain medical conditions, such as asthma, chronic obstructive pulmonary disease (COPD), cardiovascular problems, high blood pressure, or epilepsy, should exercise caution and consult with their healthcare provider before engaging in breathwork. Additionally, pregnant women, individuals with a history of panic attacks or anxiety disorders, and those recovering from recent surgery or trauma should approach breathwork with care and seek professional guidance. It is important to respect these contraindications to ensure the safety and well-being of individuals and to avoid any potential risks associated with breathwork practices.\n\n As with any practice, it's important to listen to your body, respect your limits, and seek professional advice if needed. By approaching breathwork with mindfulness and proper guidance, you can safely enjoy its many benefits."
    },
    {
      title: 'What subscription plans do you offer?',
      description: 'We currently offer freemium, monthly, annual subscription plans.'
    },
    {
      title: 'Do you offer discounts?',
      description:
        'We don’t currently have any discounts running, however, we do offer a small selection of our content for free to all. For any corporate or group discounts, we do offer packages. Contact us for more information.'
    },
    {
      title: 'How do I reset my password?',
      description:
        'You can reset your password by click the ‘Forgot Your Password’ link on the sign in page within the app.'
    },
    {
      title: 'How do I cancel my Apple App Store subscription?',
      description:
        'Open the App Store app and click your name. If you can’t find your name, click Sign In. Find the account settings, scroll to subscriptions and click Manage. The next screen will show all your active subscriptions. Scroll to VANA and click edit. From the next screen select Cancel Subscription.'
    },
    {
      title: 'How do I cancel my Google Play subscription?',
      description:
        'Open the Google Play app and in the top right, tap the profile icon. Tap Payments & subscriptions Subscriptions and select the VANA subscription you want to cancel. Tap Cancel subscription and follow the instructions.'
    },
    {
      title:
        'I have an idea for a session I’d like to see on the app - how can I tell you?',
      description:
        'We love to hear ideas on how we can improve our offering. Contact us with anything you’d like to share or to arrange a call.'
    }
  ]

  return (
    <section id="faq" className="grid grid-cols-[34.5%,65.5%] px-[2vw] pt-[2vw] pb-[8vw]">
      <div>
        <h2 className="text-[0.8vw]">[FAQ]</h2>
      </div>

      <div>
        <h2 className="text-[7.5vw] uppercase leading-[7vw] mb-[4vw]">
          Frequently Asked Questions
        </h2>

        <div>
          {questions.map((question, index) => (
            <div
              id="question"
              key={question.title}
              className="w-full border-t border-white last:border-b flex flex-col overflow-hidden"
            >
              <div
                className="flex justify-between hover:px-[0.5vw] py-[0.8vw] transition-all duration-[220ms] cursor-pointer select-none"
                onClick={() => setActiveIndex(activeIndex !== index ? index : null)}
              >
                <h3 className="text-[1.4vw] uppercase">{question.title}</h3>
                <img
                  src="./src/assets/arrow.svg"
                  className={`w-[0.8vw] transition-transform duration-[600ms] ${
                    activeIndex === index && 'rotate-180'
                  }`}
                />
              </div>

              <div
                className={`grid transition-[grid-template-rows] duration-[400ms] ease-in-out ${
                  activeIndex === index ? `grid-rows-[1fr]` : 'grid-rows-[0fr]'
                }`}
              >
                <div className="flex justify-end overflow-hidden">
                  <p
                    className="text-[0.9vw] w-[30vw] leading-[1.2vw] px-[0.5vw] py-[2vw] transition-opacity duration-500"
                    style={{
                      opacity: activeIndex === index ? 1 : 0
                    }}
                  >
                    {question.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
