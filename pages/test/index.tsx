import { useMemo } from "react"
import AA from "../../components/AA"
import BB from "../../components/BB"
import CC from "../../components/CC"
import useGlobalStateManager from "../../hooks/useGlobalStateManager"

export default () => {

    const { ContextProvicer } = useGlobalStateManager()
    console.log('The value of PORT is:', process.env.JAVA_HOME);
    console.log('The value of PORT is:', process.env.NEXT_PUBLIC_A);
    console.log('The value of PORT is:', process.env.NEXT_PUBLIC_B);
    console.log('The value of PORT is:', process.env.NEXT_PUBLIC_C);
    console.log('The value of PORT is:', process.env.A);
    console.log('The value of PORT is:', process.env.B);
    console.log('The value of PORT is:', process.env.C);
  
    return useMemo(()=>(
        <ContextProvicer>
            <>
            
                <AA></AA>
                <CC></CC>
            </>
        </ContextProvicer>
    ),[])
}
