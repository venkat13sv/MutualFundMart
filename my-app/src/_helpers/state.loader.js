export default class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("stateData");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {

        try {
            //const { cart }=state;
            let serializedState = JSON.stringify(state);
            localStorage.setItem("stateData", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
              //state object
            }
        };
    }
