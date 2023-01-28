import React from 'react'
import HomeTitle from './HomeTitle'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'

const carret = <svg className="carret carret-active" id="carret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" points="208 96 128 176 48 96"></polyline></svg>



const HomeSkills = () => {
  return (
    <div>
      <div className='container mx-auto pb-20 px-6'>
        <HomeTitle title="Mes skills" description="Mes compétences" />
        <Dropdown  title="Web analytics" subtitle="Plus de 4ans">
        <DropdownItem  src="/image/ga.svg" title="Google analytics" percentage="50%" />
        <DropdownItem  src="/image/gtm.svg" title="Google tag manager" percentage="90%"  />
        <DropdownItem  src="/image/gds.svg" title="Google data studio" percentage="80%" />
        <DropdownItem  src="/image/matomo.png" title="Matomo" percentage="85%" />
        </Dropdown>

        <Dropdown  title="Marketing digital" subtitle="Plus de 4ans">
        <DropdownItem  src="/image/semrush.png" title="SEO" percentage="90%" ratio="80%" />
        <DropdownItem  src="/image/Ads.svg" title="SEA" percentage="90%"  />
        <DropdownItem  src="/image/hubspot.svg" title="CRM" percentage="80%" />
        <DropdownItem  src="/image/mailchimp.svg" title="Emailing" percentage="85%" />
        </Dropdown>

        <Dropdown  title="Developpement front" subtitle="Plus de 4ans">
        <DropdownItem  src="/image/ga.svg" title="HTML" percentage="80%" />
        <DropdownItem  src="/image/gtm.svg" title="CSS" percentage="90%" />
        <DropdownItem  src="/image/gds.svg" title="Javascript" percentage="80%" />
        <DropdownItem  src="/image/react.svg" title="React" percentage="85%" />
        <DropdownItem  src="/image/tailwind.svg" title="Tailwind" percentage="85%" />
        </Dropdown>

        <Dropdown  title="Web design" subtitle="Plus de 4ans">
        <DropdownItem  src="/image/ga.svg" title="Figma" percentage="90%" />
        <DropdownItem  src="/image/gtm.svg" title="Adobe XD" percentage="90%" />
        <DropdownItem  src="/image/gds.svg" title="Illustrator" percentage="8 %" />
        <DropdownItem  src="" title="Photoshop" percentage="85%" />
        </Dropdown>
      </div>
    </div>
  )
}

export default HomeSkills