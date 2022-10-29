import { useEffect, useMemo } from "react"
import useGlobalStateManager from "../../hooks/useGlobalStateManager"
import BB from "../BB"

interface Pros {

}
export default () => {
    const { todoState, todoDispatch } = useGlobalStateManager().getContext()

    console.log('render CC')

    useEffect(() => {
        console.log('useEffect CC todoState')
        console.log(`current items: ${Array.from(todoState.itemSet).join(',')}`)
    }, [todoState])

    useEffect(() => {
        console.log('useEffect CC itemSet')
    }, [todoState.itemSet])

    return useMemo(() => (
        <>
        {console.log('C render')}
            <div>CC</div>
            <BB></BB>
        </>
    ), [])
}