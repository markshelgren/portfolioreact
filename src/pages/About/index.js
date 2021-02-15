import React from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import "./aboutstyle.css";

function About() {
	return (
		<div>
			<Navbar />
			<Container>
				<Row>
					<Col size="lg-12">
						<h1 className="display-5">Mark Shelgren</h1>
						<hr />
					</Col>
					<Col size="lg-6">
						<h4 className="display-5">About Me</h4>
						<p className="bio">
							Mark Shelgren was born in Buffalo, New York, many moons ago. Mark
							has a B.A. degree in Philosophy from MacMurray College and an MBA
							degree from Northern Illinois University.
						</p>
						<p className="bio">
							Mark plays handball and golf, enjoys yoga, anything at the beach
							and drinking beer. Mark has lived all over the United States and
							currently resides in Foothill Ranch, CA. Mark and his family lived
							in France for a year when Mark was in high school. Consequently
							Mark reads and speaks french fluently. He wishes he was fluent in
							javascript.
						</p>
						<p className="bio">
							Mark has been married for 36 years to his wife Debbie. They have
							two daughters and three grand children, all male. Mark thinks all
							three of his grandson's should be taking the Full Stack
							Development Bootcamp.
						</p>
						<p className="bio">
							Mark currently leads a small software services company
							specializing in SAP. SAP is an ERP business transaction processing
							system with its own programming language, ABAP. SAP is used mostly
							by larger, multi-national organizations built on a three tiered
							client server architecture.
						</p>
						<p className="bio">
							In 1999, SAP responded to the Internet and new economy by
							launching its mysap.com strategy. Ten years later, the company
							branched out into three markets of the future: mobile technology,
							database technology, and cloud. To rapidly become a key player in
							these new domains, SAP acquired some of its competitors, including
							Business Objects, Sybase, Ariba, SuccessFactors, and Concur.
						</p>
					</Col>

					<Col size="lg-6">
						<p id="Contact">
							{" "}
							<strong>Contact Info:</strong>
						</p>
						<ul>
							<strong>Email:</strong>{" "}
							<a id="mediumblue" href="/">
								markshelgren@outlook.com
							</a>
							<br />
							<strong>Telephone:</strong>{" "}
							<a id="mediumblue" href="/">
								949-836-3120
							</a>
							<br />
							<strong>Resume:</strong>{" "}
							<a
								id="mediumblue"
								href="./assets/resume/MarkShelgren_Resume.pdf"
								target="_blank"
								rel="noreferrer"
								alt="markresume"
							>
								Mark Shelgren's Resume
							</a>
							<br />
							<strong>GitHub:</strong>{" "}
							<a
								id="mediumblue"
								href="https://github.com/markshelgren"
								target="_blank"
								rel="noreferrer"
								alt="Github"
							>
								Mark Shelgren's Github
							</a>
						</ul>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default About;
