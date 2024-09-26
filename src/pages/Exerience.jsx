import React from "react";
import "./styles/exp.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Experience() {
	return (
		<div className="container">
			<div className="f">
				<h1
					style={{
						color: "#008080",
					}}
				>
					Experience
				</h1>
			</div>
			<div className="card">
				<div>
					<div className="header-container">
						<h2 className="inline-heading">
							Summer Research Intern @ 
						</h2>
						<h2 className="inline-heading2">
							Indian Institute of Management, Ranchi
						</h2>
					</div>
					<div className="point">
						<div>
							<ArrowForwardIosIcon
								style={{
									fontSize: "15px",
									paddingRight: "10px",
								}}
							/>
						</div>
						<div>
						Developed and implemented Machine Learning models for predictive analysis and heart-disease prognosis using
						regression, classification, and clustering techniques.
						</div>
					</div>
					<div className="point">
						<div>
							<ArrowForwardIosIcon
								style={{
									fontSize: "15px",
									paddingRight: "10px",
								}}
							/>
						</div>
						<div>
						Acquired hands-on experience in Partial Least Squares-Structural Equation Modelling (PLS-SEM) for multivariate
						analysis under the guidance of Prof. Dr. Sobhan Sarkar.
						</div>
					</div>
					<div className="point">
						<div>
							<ArrowForwardIosIcon
								style={{
									fontSize: "15px",
									paddingRight: "10px",
								}}
							/>
						</div>
						<div>
						Applied advanced data mining techniques, including normalization, data imputation, and preprocessing to handle
						large datasets with missing or unbalanced data.
						</div>
					</div>
					{/* <div className="point">
						<div>
							<ArrowForwardIosIcon
								style={{
									fontSize: "15px",
									paddingRight: "10px",
								}}
							/>
						</div>
						<div>
							Learned about the Agile Methodology and worked on
							the Scrum Board to manage the tasks and the project.
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Experience;
