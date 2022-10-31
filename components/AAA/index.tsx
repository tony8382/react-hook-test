import { useMemo, useState } from "react"
import { randomIntFromInterval } from "../../pages/render"

interface Pros {

}

export default () => {

    console.log('render AA')
    const [t, setT] = useState<string>("DD")

    const reandmTest = () => {
        setT(randomIntFromInterval(1, 10))
    }

    return useMemo(() => (
        <>
            {console.log('render AA Body',t)}
            AAA:{t}
            <button onClick={() => reandmTest()}>REFRESH</button>

        </>
    ), [t])
}