import { useEffect } from "react";

function useConsoleLog(VarName) {
    useEffect(() => {
        console.log('Today is', VarName);
    }, [VarName]);
}

export default useConsoleLog;