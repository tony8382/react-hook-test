import { useMemo, useState } from "react"
import AAA from "../../components/AAA"
import BBB from "../../components/BBB"


const randomIntFromInterval = (min: number, max: number): string => {
    return Math.floor(Math.random() * (max - min + 1) + min).toString()
}


export default () => {

    const [test, setTest] = useState<string>()

    const reandmTest = () => {
        setTest(randomIntFromInterval(1, 10))
    }
    return useMemo(() => (
        <>
            <AAA />
            <BBB />
            <button onClick={() => reandmTest()}>REMOVE</button>

        </>
    ), [test])
}
