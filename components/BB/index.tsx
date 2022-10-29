import { useEffect } from "react"
import useGlobalStateManager, { TestActionType } from "../../hooks/useGlobalStateManager"
import CC from "../CC"

interface Pros {

}
export default () => {
    const { todoState, todoDispatch } = useGlobalStateManager().getContext()

    console.log('render BB')

    useEffect(() => {
        console.log('useEffect BB todoState')
        console.log(`current items: ${Array.from(todoState.itemSet).join(',')}`)
    }, [todoState])

    useEffect(() => {
        console.log('useEffect BB itemSet')
    }, [todoState.itemSet])

    const getRandomString = (): string[] => {
        let tempStr: string[] = []
        for (let i = 0; i < 4; i++) {
            tempStr.push(randomIntFromInterval(1, 100))
        }
        return tempStr
    }

    const randomIntFromInterval = (min: number, max: number): string => {
        return Math.floor(Math.random() * (max - min + 1) + min).toString()
    }


    return (
        <>

            <div>BB</div>
            <div>
                current items: {Array.from(todoState.itemSet).join(',')}
            </div>
            <button onClick={() => { todoDispatch({ type: TestActionType.ADD_ITEMS, payload: { items: getRandomString() } }) }}>ADD</button>
            <button onClick={() => { todoDispatch({ type: TestActionType.REMOVE_ITEMS, payload: { items: [] } }) }}>REMOVE</button>

        </>
    )
}