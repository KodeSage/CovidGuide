/** @format */

import styled from "styled-components";

export const AuthStylesContainer = styled.div`
	background: #f1f3f9;
	/* height: 100vh; */
	/* height: 768px; */
	h2 {
		font-size: 1.5rem;
		color: #1141d2;
		justify-self: flex-start;
		cursor: pointer;
		align-items: center;
		display: flex;
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
	}
	.form_container {
		background: rgb(255, 255, 255);
		border-radius: 10px;
		margin: 3rem auto;
		padding: 1rem 2rem;
		max-width: 480px;
		/* height: 472px; */
		box-shadow: 0px 10px 44px rgba(0, 0, 0, 0.12);
		.form_container__inputs h4 {
			margin-bottom: -1.5rem;
			font-weight: bold;
		}
		.input_box {
			display: flex;
			flex-direction: column;
			background-color: #f8f6f6;
			padding: 0.8rem 1rem;
			border-radius: 5px;
			margin: 2rem 0;
			input {
				padding: 0.5rem;
				width: 100%;
				background-color: transparent;
				border: none;
				outline: none;
			}
		}
		.form_container_header p {
			color: #606060;
			font-size: 14px;
		}

		.input_password {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			background-color: #f8f6f6;
			input {
				padding: 0.5rem;
				width: 100%;
				background-color: transparent;
			}
		}
		.svg {
			cursor: pointer;
			color: #666060;
		}
		.form_container__inputs h3 {
			text-align: end;
			margin: -1rem 0;
			color: #666060;
		}
		.form_container__inputs .button {
			width: 100%;
			padding: 1rem;
			background-color: #1141d2;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			color: #ffff;
			font-weight: 600;
			margin: 3rem 0;
		}
		.continue {
			position: relative;
			max-width: 500px;
			text-align: center;
			padding: 0 0 1rem 0;
			border-bottom: none;
		}
		.continue:before {
			content: " ";
			height: 1px;
			width: 150px;
			background: #a6abb7;
			display: block;
			position: absolute;
			top: 20%;
			left: 0;
		}
		.continue:after {
			content: " ";
			height: 1px;
			width: 150px;
			background: #a6abb7;
			display: block;
			position: absolute;
			top: 20%;
			right: 0;
		}
		.google {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 2rem;
			justify-content: center;
			width: 100%;
			border: 1px solid #ffffff;
			border-radius: 5px;
			font-weight: 800;
			padding: 0.6rem;
			margin-bottom: 1rem;
			background: #eeeffc;
			cursor: pointer;
		}
		.p-account {
			border-bottom: none;
			text-align: center;
			span {
				color: #21409a;
				font-weight: 500;
				cursor: pointer;
			}
		}
		.select-country {
			select {
				background-color: #f8f6f6;
				padding: 0.8rem 1rem;
				border-radius: 5px;
				margin: 2rem 0;
                width: 100%;
                outline: none;
			}
		}
	}
`;
