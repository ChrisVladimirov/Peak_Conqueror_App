export const AddRoutePage = (props) => {


    return (
        <>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input placeholder={"Rilski manastir-Chakar Voivoda"} type={"text"}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea/>
                </div>
                <div className="form-group">
                    <label><i className="fas-fa-hourglass"/></label>
                </div>
            </form>
        </>
    );
}