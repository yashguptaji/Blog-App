import "./post.css";

export default function Post() {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
					maxime asp
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt
				voluptatem omnis, ad quidem libero perspiciatis nisi sint molestiae
				doloribus est et corrupti id mollitia fugiat tenetur, fuga natus
				consequatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Magni ut veritatis porro fugiat. Quod est itaque neque inventore
				reiciendis placeat aliquid rerum tenetur, soluta sed eos doloribus,
				ipsam perferendis vel!Lorem
			</p>
		</div>
	);
}
