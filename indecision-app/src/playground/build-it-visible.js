console.log('Visibility Toggle App!')

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility} name="buttonHide">
                {visibility ? 'Hide details' : 'Here are your details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some detaisl you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, app);
}

render();