/* Copyright Header Placeholder */
/* Name: DhaBreathingExercise.tsx
 * Description: Breathing Exercise component from dha-breathing-exercise npm package
 * Author: Created by Alex Alden Weaver on 6-11-2024
 * Last modified: 6-11-2024 by Alex Alden Weaver
*/

import { BreathingExercise } from 'dha-breathing-exercise';

function DhaBreathingExercise() {
    return (
        <div className="DhaBreathingExercise">
            <h2>Breathing Exercise</h2>
            <br/>

            <BreathingExercise gender={'male'} />
        </div>
    )
}

export default DhaBreathingExercise