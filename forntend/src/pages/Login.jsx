import React from 'react';

const Login = () => {
    return (
        <>
            <div style={{ backgroundImage: 'url(https://www.fiftysounds.com/images/graphics/background-with-white-and-silver-lines-1771.jpg)', padding: '20px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <h2>Registrate</h2>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" style={{ border: '1px solid black', marginBottom: '10px' }} /><br />
                    <label htmlFor="carnet">Carnet:</label>
                    <input type="text" id="carnet" name="carnet" style={{ border: '1px solid black', marginBottom: '10px' }} /><br />

                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" style={{ border: '1px solid black', marginBottom: '10px' }} /><br />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" style={{ border: '1px solid black', marginBottom: '10px' }} /><br />

                    <label htmlFor="gender">Gender:</label>
                    <input type="text" id="gender" name="gender" style={{ border: '1px solid black', marginBottom: '10px' }} /><br />

                    <label htmlFor="faculty">Faculty:</label>
                    <input type="text" id="faculty" name="faculty" style={{ border: '1px solid black', marginBottom: '10px' }} /><br />

                    <label htmlFor="major">Major:</label>
                    <input type="text" id="major" name="major" style={{ border: '1px solid black', marginBottom: '10px' }} /><br />

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" style={{ border: '1px solid black', marginBottom: '10px' }} /><br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" style={{ border: '1px solid black', marginBottom: '10px' }} /><br />

                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );

}


export default Login