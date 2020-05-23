import { frequencies } from 'contants';
import { Dispatch } from 'redux';
import Oscillator from 'modules/oscillator';

export const keyPressed = (midiNumber: number, note: string) => {
    return (dispatch: Dispatch, getState: any) => {
        const { type, duration, detune, octave, gain } = getState().synth;
        // TODO - Translate frequencies from an array into an object
        // so that mapping can be on other octaveaws as well
        //TODO - detune causes a crash since there are no frequencies < 48 rn
        const frequency = frequencies[midiNumber + octave * 12 - 48] + detune;
        const oscillator = new Oscillator(type, duration);

        oscillator.playSound(frequency, gain);

        return dispatch({ type: 'SYNTH_KEY_PRESSED', payload: { note } });
    };
};
