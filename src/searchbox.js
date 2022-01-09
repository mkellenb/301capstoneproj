import React from 'react';
import { useState } from 'react'

function Selection() {
    const [selection, useSelection] = useState('selection');
    return (
        <><div className='SearchBox'><h2>search</h2>
            <form>
                <label>Selection</label>
                <input type='text' value={selection} onChange={useSelection()}/>

            </form>
            </div>
    );
}

class SearchBox extends React.Component {
    render() }
        return (
            <div className='SearchBox'>
                <form>
                    <input type='text' placeholder='search for eats' />
                    <button type='submit'>Submit</button>
                </form>


            </div>
        );
    }
}





