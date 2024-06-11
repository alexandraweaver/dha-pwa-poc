/* Copyright Header Placeholder */
/* Name: DhaSlider.tsx
 * Description: Slider component from dha-slider npm package
 * Author: Created by Alex Alden Weaver on 6-11-2024
 * Last modified: 6-11-2024 by Alex Alden Weaver
*/

import { Slider } from 'dha-slider';
import 'dha-slider/dist/style.css';
import { useState } from 'react';

function DhaSlider() {
    const [sliderValue, setSliderValue] = useState(50);

    return (
    <div className="DhaSlider">

        <Slider
            lowerTag={'Relaxed'}
            upperTag={'Anxious'}
            label="Anxiety"
            value={sliderValue}
            onChange={setSliderValue}
        />

    </div>
    )
}

export default DhaSlider
