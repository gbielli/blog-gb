import React from 'react'

const items = [
    {
        icon : "abcd",
        title: "dddad",
        tags: [1,2,3],
        text:"dodo",
    },
    {
        icon : "abcd",
        title: "dddad",
        tags: [1,2,3],
        text:"dodo",
    },
]

const PriorityItem = () => {
return (
    items.map((item) => {
        return (
            <div>
                {item.icon}
                {item.title}
                {item.tags.map((tag) => (
                    tag
                ))}
                {item.text}
            </div>
          )
    }
    ))
}

export default PriorityItem