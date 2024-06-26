import React from 'react';
import { Container, Image, List, Segment } from 'semantic-ui-react';


const Footer = props => {
	return (
		<div>
			<Segment
				inverted
				style={{ margin: '5em 0em 0em', padding: '2em 0em' }}
				vertical
			>
				<Container textAlign='center'>
					<Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
					<List horizontal inverted divided link>
						<List.Item as='a' href='#'>Site Map</List.Item>
						<List.Item as='a' href='#'>Contact Us</List.Item>
						<List.Item as='a' href='#'>Terms and Conditions</List.Item>
						<List.Item as='a' href='#'>Privacy Policy</List.Item>
					</List>
					<div className="twitter">
						<a href="https://twitter.com/bedizTüRKYILMAZ" target="_blank">
							<img
								src='https://cdn-icons-png.flaticon.com/512/124/124021.png'
								width={26}
								alt="Bediz TüRKYILMAZ  twitter" />
							<span>@bedizTüRKYILMAZ</span>
						</a>
					</div>
				</Container>
			</Segment>
		</div>
	);
};

export default Footer;