import React from 'react';

type ViewComponent = {
    view: JSX.Element
}

const Skeleton = (prop: ViewComponent) => {
    return(
    <>
        {
            prop.view
        }
    </>
    )
}

export default Skeleton;