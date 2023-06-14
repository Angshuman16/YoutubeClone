import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";



const CommentsData=  [ //This is like an API fetched data. Just manualy Written
  //0
   {
     name:"Angshuman Pathak",
     text:"Hey I loved the video.. Awesome video it was",
     replies:[],
 
   },
 //1
   {
     name:"Priyam Chakraborty",
     text:"Hey I loved the video.. Noice good going!!!",
     replies:[
       {name:"Zendaya Pathak",
       text:"Hey I loved the video.. Awesome video it was",
       replies:[
        {name:"Sourav Sarkar",
        text:"Hey I loved the video.. Awesome video it was",
        replies:[
          {
            name:"Zendaya Pathak",
            text:"Hey I loved the video.. Awesome video it was",
           replies:[
         
        ],
          }
         
        ],}
        
       ],
       },
 
       {name:"Tom Pathak",
       text:"Hey I loved the video.. Awesome video it was",
       replies:[],
       }
 
       
     ],
   },
   //2
   {
     name:"Bihan Chaterjee",
     text:"Good Going Brother",
     replies: [],
   },
   //3
   {    name:"Shovan",
       text:"Good One",
       replies:[
         {
           name:"Angshuman Pathak",
           text:"Hey I loved the video.. Awesome video it was",
           replies:[],
       
         }
       ],
   }
 ]



const CommentContainer = () => {
  return (
    <div className="px-5 m-1 py-25">
        <h1 className="text-2xl font-bold">Comments: </h1>
       <CommentsList comments={CommentsData} />
    </div>
  )
}

export default CommentContainer