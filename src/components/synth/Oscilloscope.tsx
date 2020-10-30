import React, { useRef, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import sinewaveOscilloscope from 'modules/oscilloscope/sinewaveOscilloscope';

const CANVAS_WIDTH = 1040;
const CANVAS_HEIGHT = 150;

const Oscilloscope = ({
    analyser,
    keyPressed,
}: {
    analyser: AnalyserNode;
    keyPressed: string;
}) => {
    let canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        sinewaveOscilloscope(CANVAS_WIDTH, CANVAS_HEIGHT, analyser);
    }, [analyser, keyPressed]);

    return (
        <Grid item container xs={10} style={{ marginBottom: '20px' }}>
            <Grid
                item
                container
                justify="center"
                xs={12}
                style={{ display: 'flex' }}
            >
                {keyPressed === undefined ? (
                    <Grid
                        item
                        style={{ height: CANVAS_HEIGHT, width: CANVAS_WIDTH }}
                    >
                        <div style={{ marginTop: '20px' }}>
                            <Typography variant="subtitle1" color="primary">
                                Welcome to Lydia, a monophonic synthetizer
                                designed by @DLesage25 as a proof-of-concept for
                                the power behind the synthesis modules available
                                through the web audio API. This is a work in
                                progress.
                                <br /> <br />
                                Please press a key.
                            </Typography>
                        </div>
                    </Grid>
                ) : (
                    <canvas
                        className="visualizer"
                        width={CANVAS_WIDTH}
                        height={CANVAS_HEIGHT}
                        ref={canvasRef}
                    ></canvas>
                )}
            </Grid>
        </Grid>
    );
};

export default Oscilloscope;
