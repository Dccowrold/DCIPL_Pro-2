import React from 'react';// JavaScript Document
import './CSS/blog.css';
import image from "../assests/ban.png";
import { Link } from "react-router-dom";


function blog() {
	return(
	<>
	<h1 className="heading12">OUR BLOGS</h1>
	<div className="box12">
		<div className = "box-img">
			<img src={image} alt=""></img>
		</div>
		<div className="content-box12">
			<h3>Money - Savings Chart</h3>
			<p>Money-savings charts are printable charts that help you track money for specific savings goals. It will list the amount you are supposed to save for that day or week, and you will track your balance and when you complete each deposit.</p>
		</div><div>
		<h3>Money Saving Idea</h3>
		<div class="clearfix social floatright">
					<ul>
						<li><a  href=""><i class="fab fa-facebook"></i></a></li>
						<li><a  href=""><i class="fab fa-twitter"></i></a></li>
						<li><a href=""><i class="fab fa-linkedin"></i></a></li>
						
						
						
						
					</ul>
				</div>
			</div>
</div>
	










	</>
     )
};

export default blog;


