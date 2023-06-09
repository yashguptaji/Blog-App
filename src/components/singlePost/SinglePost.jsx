import "./singlePost.css";

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					obcaecati.
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthore">
						Author: <b>Yash Gupta</b>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
					eveniet at provident repudiandae rem. Vel, sed. Eius natus, nihil,
					voluptatibus ipsum atque maxime ex eum omnis voluptas est consectetur
					pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Obcaecati eveniet at provident repudiandae rem. Vel, sed. Eius natus,
					nihil, voluptatibus ipsum atque maxime ex eum omnis voluptas est
					consectetur pariatur. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Obcaecati eveniet at provident repudiandae rem. Vel,
					sed. Eius natus, nihil, voluptatibus ipsum atque maxime ex eum omnis
					voluptas est consectetur pariatur. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Obcaecati eveniet at provident
					repudiandae rem. Vel, sed. Eius natus, nihil, voluptatibus ipsum atque
					maxime ex eum omnis voluptas est consectetur pariatur. Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Obcaecati eveniet at
					provident repudiandae rem. Vel, sed. Eius natus, nihil, voluptatibus
					ipsum atque maxime ex eum omnis voluptas est consectetur pariatur.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
					eveniet at provident repudiandae rem. Vel, sed. Eius natus, nihil,
					voluptatibus ipsum atque maxime ex eum omnis voluptas est consectetur
					pariatur.
				</p>
			</div>
		</div>
	);
}
