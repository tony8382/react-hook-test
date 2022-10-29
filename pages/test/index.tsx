import AA from "../../components/AA"
import BB from "../../components/BB"
import CC from "../../components/CC"
import useGlobalStateManager from "../../hooks/useGlobalStateManager"

export default () => {

    const { ContextProvicer } = useGlobalStateManager()

    return (
        <ContextProvicer>
            <>
                <AA></AA>
                <CC></CC>
            </>
        </ContextProvicer>
    )
}
