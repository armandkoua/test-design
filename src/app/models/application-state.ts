import { ProgressionState } from "./progression-state";

export class ApplicationState {
    public  name:string | undefined;
    lastName:string| undefined;
    dateOfTest:Date| undefined;
    progressionBars: ProgressionState[] | undefined;
}
