import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { User } from '../helpers/LocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [message, setMessage] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:3001/identity/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((res) => res.json())
			.then((res) => {
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
				<div style={{ paddingBottom: '150px' }}>
					<div style={{ height: '5px' }}>
						{message && (
							<Form.Group className="mx-3">
								<Form.Text className="text-danger fs-6">
									*{message}
								</Form.Text>
							</Form.Group>
						)}
					</div>
					<Form.Group
						className="mx-3 my-5 "
						controlId="formBasicEmail"
					>
						<Form.Control
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Form.Group>
					<Form.Group
						className="mx-3 mb-5"
						controlId="formBasicPassword"
					>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</Form.Group>
				</div>
				<Button
					variant="primary"
					type="submit"
					className="mx-3"
					style={{ width: '100px', float: 'right' }}
				>
					Login
				</Button>
				{/* <MyButton type="submit" className='mx-3' style={{float:'right'}}>
                    Login
                </MyButton> */}
			</Form>
		</>
	);
}

export default LoginForm;
