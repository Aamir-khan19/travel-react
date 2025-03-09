import React from 'react'

function AboutHeroSectionVideo() {
  return (
    <div>
        {/* Background Video */}
        <video
        autoPlay
        loop
        muted
        className="w-full md:h-[80vh] object-cover"
      >
        <source src="/Videos/about_us.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default AboutHeroSectionVideo
