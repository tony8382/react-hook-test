import { useMemo } from "react"

interface Pros {

}

export default () => {

    console.log('render AA')

    return useMemo(() => (
        <>
            {console.log('render AA Body')}
            AAA
        </>
    ), [])
}