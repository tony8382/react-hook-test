import { createContext, Dispatch, useContext, useReducer } from "react";

export interface TestState {
    itemSet: Set<string>;
}

export interface TestAction {
    type: TestActionType;
    payload: TestActionPayload;
}

export interface TestActionPayload {
    items?: string[];
}

export enum TestActionType {
    ADD_ITEMS = "ADD",
    REMOVE_ITEMS = "REMOVE"
}
export interface TestContext {
    todoState: TestState;
    todoDispatch: Dispatch<TestAction>;
}

const todoReducer = (state: TestState, action: TestAction): TestState => {
    console.log(`todoReducer ${action.type}`)
    switch (action.type) {
        case TestActionType.ADD_ITEMS:
            action.payload.items?.forEach(item => state.itemSet.add(item))
            return {
                ...state,
                itemSet: state.itemSet
            }
        case TestActionType.REMOVE_ITEMS:
            state.itemSet.clear()
            return {
                ...state,
                itemSet: state.itemSet
            }
        default:
            return state
    }
}
const initState: TestState = {
    itemSet: new Set<string>()
}

const todoContext = createContext<TestContext>({} as TestContext)

type Props = {
    children?: JSX.Element;
};

export default () => {
    const ContextProvicer = ({ children }: Props) => {

        const [todoState, todoDispatch] = useReducer(todoReducer, initState);
        const providerState = {
            todoState,
            todoDispatch
        }

        return (
            <todoContext.Provider value={providerState} >
                {children}
            </todoContext.Provider>
        )
    }

    const getContext = (): TestContext => {
        return useContext(todoContext);
    }


    return { ContextProvicer, getContext };
};







