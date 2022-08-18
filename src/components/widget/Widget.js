import React from "react";
import { Search } from "@mui/icons-material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widget.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>いまどうしている？</h2>
        <TwitterTweetEmbed tweetId={"1557327336319889410"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="xunmogy2022"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/xunmogy2022"}
          options={{ text: "#React.js勉強中", via: "xunmogy2022" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
