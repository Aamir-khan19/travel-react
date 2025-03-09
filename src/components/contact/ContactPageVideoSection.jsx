import React from 'react'

function ContactPageVideoSection() {
  return (
    <div>
        <video
        autoPlay
        loop
        muted
        className="w-full md:h-[80vh] object-cover"
      >
        <source src="/Videos/contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default ContactPageVideoSection
