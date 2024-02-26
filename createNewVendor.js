import React, { useState } from 'react';
import'./ createNewVendor.css';
function createNewVendor() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [vendorData, setVendorData] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/vendors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to create vendor');
            }

            const vendor = await response.json();
            setVendorData(vendor);
            setUsername('');
            setPassword('');
            alert('Account created successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to create vendor');
        }
    };

    const redirectToVendorLogin = () => {
        window.location.href = '/src\components\vlogin.js';
    };

    return (
        <div>
            <h1>Create vendor account</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" style={{ marginTop: '10px' }}>Sign up</button>
            </form>
            <h4 style={{ textAlign: 'center', fontFamily: 'Archivo' }}>Already an existing user?</h4>
            <button type="button" style={{ marginTop: '20px' }} onClick={redirectToVendorLogin}>
                Go to login page
            </button>

            {vendorData && (
                <div>
                    <h2>Vendor Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Vendor ID:</td>
                                <td>{vendorData.vendorId}</td>
                            </tr>
                            <tr>
                                <td>Username:</td>
                                <td>{vendorData.username}</td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td>{vendorData.password}</td>
                            </tr>
                            <tr>
                                <td>Active:</td>
                                <td>{vendorData.isActive ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td>Eligible:</td>
                                <td>{vendorData.isEligible ? 'Yes' : 'No'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default createNewVendor;
