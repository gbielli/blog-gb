import React from 'react'


const svgIcon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.125 6.125V12.1511C6.125 16.4934 9.59816 20.0926 13.9403 20.1248C14.9794 20.1327 16.0099 19.9348 16.9722 19.5426C17.9345 19.1504 18.8097 18.5716 19.5473 17.8395C20.2849 17.1075 20.8703 16.2367 21.2698 15.2774C21.6693 14.3181 21.875 13.2892 21.875 12.25V6.125C21.875 5.89294 21.7828 5.67038 21.6187 5.50628C21.4546 5.34219 21.2321 5.25 21 5.25H7C6.76794 5.25 6.54538 5.34219 6.38128 5.50628C6.21719 5.67038 6.125 5.89294 6.125 6.125Z" stroke="#217BF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M10.5 24.5H17.5" stroke="#217BF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M14 20.125V24.5" stroke="#217BF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M21.6797 14H22.7499C23.6781 14 24.5684 13.6313 25.2247 12.9749C25.8811 12.3185 26.2499 11.4283 26.2499 10.5V8.75C26.2499 8.51794 26.1577 8.29538 25.9936 8.13128C25.8295 7.96719 25.6069 7.875 25.3749 7.875H21.8749" stroke="#217BF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M6.33809 14H5.23438C4.30612 14 3.41588 13.6313 2.7595 12.9749C2.10312 12.3185 1.73438 11.4283 1.73438 10.5V8.75C1.73438 8.51794 1.82656 8.29538 1.99066 8.13128C2.15475 7.96719 2.37731 7.875 2.60938 7.875H6.10938" stroke="#217BF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>


const items = [
    {
        title: "User stories",
        tags: ['User stories','Maquette','Backlog'],
        text:"Mon expérience en tant que First Product Owner m'a permis d'avoir une réelle vision produit, de la définition des besoins métier, à l'établissement du backlog, jusqu'au suivi des features.",
    },
    {
        title: "Web analytics",
        tags: ['TMS','KPI','Dashboard'],
        text:"Une bonne décision provient d'une bonne vision analytique (plan de marquage, définition des Key Performance Indicator, mise en place des balises de suivi, dashboarding)",
    },
    {
        title: "User experience",
        tags: ['UX','UI','Web design'],
        text:"J'ai très vite compris que développer l'innovation digitale la plus aboutie sur le marché ne suffisait plus aujourd'hui, il faut sans cesse développer et optimiser son parcours client.",
    },
    {
        title: "Acquisition",
        tags: ['SEO/SEA','Automation','Communication'],
        text:"Mon expertise s'oriente sur le développement de la stratégie digitale avec un focus sur l'acquisition, le marketing automation, le no-code et la communication.",
    },
]

const PriorityItem = () => {
return (
    items.map((item, index) => {
        return (
            <div key={index} className='flex flex-col p-5 border border-1 gap-2 border-black'>
                <div className='flex items-center gap-2'>
                    {svgIcon}
                    <h3 className='font-mulish font-semibold text-2xl'>{item.title}</h3>
                </div>
                <div className='flex flex-wrap gap-3'>
                
                    {item.tags.map((tag, index) => (
                    <span key={index} className='px-2 py-0.5 bg-secondary2 font-mulish text-sm'>{tag}</span>
                ))}
                </div>
                <div>
                <p className='font-mulish'>{item.text}</p>
                </div>
            </div>
          )
    }
    ))
}

export default PriorityItem