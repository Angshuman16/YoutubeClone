export const popular = [
	{ name: "New", url: "latest" },
	{ name: "Music", url: "music" },
	{ name: "tmkoc", url: "satsang" },
	{ name: "Mixes", url: "latestMixes" },
	{ name: "Kapil Sharma", url: "kapilsharma2023" },
	{ name: "Live", url: "live" },
	{ name: "Javascript", url: "comedyclubs" },
	{ name: "Indian Food", url: "akshaysaini" },
	{ name: "C++", url: "reactjs" },
	{ name: "Namaste Javascript", url: "namastejs" },
	{ name: "TCS", url: "TCS" },
	{ name: "Akshay Saini", url: "akshay" },
	{ name: "Web Dev", url: "w3schools" },
	
];

const GOOGLE_API_KEY= "AIzaSyBednHm605j2BdnnePgP-NLu7jPVzKOj1o";

export const YOUTUBE_VIDEO_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
+GOOGLE_API_KEY ;

export const YOUTUBE_COMMENTS_API=
"https://youtube.googleapis.com/youtube/v3/comments?maxResults=100&key="+GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API= 
"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


