import React from 'react';
import { AppContext } from '../../App';


export default function Settings() {

    const {data, dispatch} = React.useContext(AppContext);
    
    const updateTitle = (e) => {
        dispatch({
            TYPE: "UPDATE_TITLE",
            payload: e.target.value
        });
    };

    return (
        <>
            <h1>Settings</h1>
            <form>
                <div className="form-group col-6">
                    <label htmlFor="siteTitle">Site Title</label>
                    <input type="text" className="form-control" id="siteTitle" value={data.title} onChange={updateTitle} />
                </div>
            </form>
        </>
    );
}