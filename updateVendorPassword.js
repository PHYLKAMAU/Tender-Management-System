import React, { useState } from 'react';
import'./ updateVendorPassword';
function updateVendorPassword() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/${username}/${password}/${newPassword}`, {
                method: "PUT",
            });

            if (response.ok) {
                const message = await response.text();
                setResult(message);
                setError('');
            } else {
                const errorMessage = await response.json();
                setError(errorMessage.message);
                setResult('');
            }
        } catch (error) {
            setError(error.message);
            setResult('');
        }
    };

    return (
        <div>
            <h1>Update Vendor Password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />

                <label htmlFor="newPassword">New Password:</label>
                <input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required /><br /><br />

                <button type="submit">Update Password</button>
                <button onClick={() => window.location.href = 'homepage.html'}>HomePage</button>
            </form>

            <div id="result">
                {result && <p style={{ color: 'green' }}>{result}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}

export default updateVendorPassword;
