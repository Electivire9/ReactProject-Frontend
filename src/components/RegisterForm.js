import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { User } from '../helpers/LocalStorage';

function RegisterForm() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmpassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('http://localhost:3001/identity/register', {
			method: 'POST',
			body: JSON.stringify({
				email,
				username,
				password,
				confirmPassword,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.info('1111' + res);

				if (res.status === 'failed') {
					setMessage(res.message);
				} else {
					User.setUser(res.data);

					navigate('/');
				}
			});
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<div style={{height:'5px'}}>
				{message && (
					<Form.Group className="mx-3">
						<Form.Text className="text-danger fs-5">*{message}</Form.Text>
					</Form.Group>
				)}
				</div>
				<Form.Group className="my-5 mx-3" controlId="formBasicEmail">
					<Form.Control
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-5 mx-3">
					<Form.Control
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-5 mx-3" controlId="formBasicPassword">
					<Form.Control
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3 mx-3">
					<Form.Control
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => {
							setConfirmpassword(e.target.value);
						}}
					/>
				</Form.Group>
				<Button
					variant="primary"
					type="submit"
					className="mx-3"
					style={{ width: '100px', float: 'right' }}
				>
					Register
				</Button>
			</Form>
		</>
	);
}

export default RegisterForm;
