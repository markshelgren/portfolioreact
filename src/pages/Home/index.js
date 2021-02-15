import React from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Footer from "../../components/Footer";
import "./homestyle.css";

function Home() {
	return (
		<>
			<Navbar />
			<Container>
				<Row>
					<Col size="lg-12">
						<h1 className="display-5">Meet Mark Shelgren</h1>
						<hr />
					</Col>
					<Col size="md-12">
						<img
							src={"./assets/images/mark_tie_only.jpg"}
							alt="MyPicture"
							className="img-fluid"
						/>
					</Col>
					<br />
					<Col size="md-12 text">
						<p>
							Mark has over 10+ years of successful, "hands-on" leadership,
							development and implementation experience in the SAP, S4/HANA environnment
							and has expanded his skills to include "Full-Stack Development".
						</p>
						<p>
							Mark recently earned a certificate from the Full Stack development Bootcamp at University of California Irvine.  Mark demonstrated ability to develp robust, user friendly, intelligent applications using the full stack.  Including but not limited to React, Node, MongoDB and jQuery.
						</p>
						<p>
							Mark will continue to improve and expand his full-stack skills and is looking to apply them by being part of a dynamic software development team. Mark is comfortable with any role, including developer, tester, designer, leader or project manager. 
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default Home;
