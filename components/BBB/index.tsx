import { useMemo } from "react"

interface Pros {

}

export default () => {

    console.log('render BB')

    return useMemo(() => (
        <>
            {console.log('render BB Body')}
            BBB
        </>
    ), [])
}