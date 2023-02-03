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
        <DropdownItem  src="/image/ga.svg" title="Google analytics" percentage="90%" />
        <DropdownItem  src="/image/gtm.svg" title="Google tag manager" percentage="95%"  />
        <DropdownItem  src="/image/gds.svg" title="Google data studio" percentage="80%" />
        <DropdownItem  src="/image/Matomo.svg" title="Matomo" percentage="95%" />
        </Dropdown>

        <Dropdown  title="Marketing digital" subtitle="Plus de 4ans">
        <DropdownItem  src="/image/semrush.png" title="SEO" percentage="95%" />
        <DropdownItem  src="/image/Ads.svg" title="SEA" percentage="85%"  />
        <DropdownItem  src="/image/hubspot.svg" title="CRM" percentage="90%" />
        <DropdownItem  src="/image/make.svg" title="Automation" percentage="90%" />
        <DropdownItem  src="/image/mailchimp.svg" title="Emailing" percentage="95%" />
        </Dropdown>

        <Dropdown  title="Developpement front" subtitle="Plus de 2ans">
        <DropdownItem  src="/image/html.svg" title="HTML" percentage="90%" />
        <DropdownItem  src="/image/css.svg" title="CSS" percentage="90%" />
        <DropdownItem  src="/image/javascript.svg" title="Javascript" percentage="50%" />
        <DropdownItem  src="/image/react.svg" title="React" percentage="50%" />
        <DropdownItem  src="/image/tailwind.svg" title="Tailwind" percentage="90%" />
        </Dropdown>

        <Dropdown  title="Web design" subtitle="Plus de 4ans">
        <DropdownItem  src="/image/figma.svg" title="Figma" percentage="90%" />
        <DropdownItem  src="/image/xd.svg" title="Adobe XD" percentage="80%" />
        <DropdownItem  src="/image/illustrator.svg" title="Illustrator" percentage="80%" />
        <DropdownItem  src="/image/photoshop.svg" title="Photoshop" percentage="90%" />
        </Dropdown>
      </div>
    </div>
  )
}

export default HomeSkills