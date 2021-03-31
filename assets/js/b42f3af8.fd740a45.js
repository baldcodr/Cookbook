(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(87)),i={sidebar_label:"Hands On Course",title:" "},s={unversionedId:"04-HandsOnCourse",id:"04-HandsOnCourse",isDocsHomePage:!1,title:" ",description:"Data Engineering Course: Building A Data Platform",source:"@site/docs/04-HandsOnCourse.md",slug:"/04-HandsOnCourse",permalink:"/docs/04-HandsOnCourse",version:"current",sidebar_label:"Hands On Course",sidebar:"projectsSidebar",previous:{title:" ",permalink:"/docs/03-AdvancedSkills"},next:{title:" ",permalink:"/docs/05-CaseStudies"}},c=[{value:"Contents",id:"contents",children:[]},{value:"What We Want To Do",id:"what-we-want-to-do",children:[]},{value:"Thoughts On Choosing A Development Environment",id:"thoughts-on-choosing-a-development-environment",children:[]},{value:"A Look Into the Twitter API",id:"a-look-into-the-twitter-api",children:[]},{value:"Ingesting Tweets with Apache Nifi",id:"ingesting-tweets-with-apache-nifi",children:[]},{value:"Writing from Nifi to Apache Kafka",id:"writing-from-nifi-to-apache-kafka",children:[]},{value:"Apache Zeppelin",id:"apache-zeppelin",children:[{value:"Install and Ingest Kafka Topic",id:"install-and-ingest-kafka-topic",children:[]},{value:"Processing Messages with Spark and SparkSQL",id:"processing-messages-with-spark-and-sparksql",children:[]},{value:"Visualizing Data",id:"visualizing-data",children:[]}]},{value:"Switch Processing from Zeppelin to Spark",id:"switch-processing-from-zeppelin-to-spark",children:[{value:"Install Spark",id:"install-spark",children:[]},{value:"Ingest Messages from Kafka",id:"ingest-messages-from-kafka",children:[]},{value:"Writing from Spark to Kafka",id:"writing-from-spark-to-kafka",children:[]},{value:"Move Zeppelin Code to Spark",id:"move-zeppelin-code-to-spark",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"data-engineering-course-building-a-data-platform"},"Data Engineering Course: Building A Data Platform"),Object(o.b)("h2",{id:"contents"},"Contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#what-we-want-to-do"},"What We Want To Do")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#thoughts-on-choosing-a-development-environment"},"Thoughts On Choosing A Development Environment")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#a-look-into-the-twiiter-api"},"A Look Into the Twitter API")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#ingesting-tweets-with-apache-nifi"},"Ingesting Tweets with Apache Nifi")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#writing-from-nifi-to-kafka"},"Writing from Nifi to Apache Kafka")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#apache-zeppelin"},"Apache Zeppelin"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#install-and-ingest-kafka-topic"},"Install and Ingest Kafka Topic")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#processing-messages-with-spark-and-sparksql"},"Processing Messages with Spark & SparkSQL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#visualizing-data"},"Visualizing Data")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/04-HandsOnCourse#switch-processing-from-zeppelin-to-spark"},"Switch Processing from Zeppelin to Spark"))),Object(o.b)("h2",{id:"what-we-want-to-do"},"What We Want To Do"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Twitter data to predict best time to post using the hashtag\ndatascience or ai")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Find top tweets for the day")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Top users")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Analyze sentiment and keywords"))),Object(o.b)("h2",{id:"thoughts-on-choosing-a-development-environment"},"Thoughts On Choosing A Development Environment"),Object(o.b)("p",null,"For a local environment you need a good PC. I thought a bit about a\nbudget build around 1.000 Dollars or Euros."),Object(o.b)("p",null,"| Podcast Episode: #068 How to Build a Budget Data Science PC\n|------------------|\n|In this podcast we look into con\ufb01guring a sub 1000 dollar PC for data engineering and machine learning.\n| ",Object(o.b)("a",{parentName:"p",href:"https://youtu.be/00NWR-II6ek"},"Watch on YouTube")," \\ ",Object(o.b)("a",{parentName:"p",href:"https://anchor.fm/andreaskayy/episodes/068-A-Budget-Data-Science-PC-Build-e45inh"},"Listen on Anchor"),"|"),Object(o.b)("h2",{id:"a-look-into-the-twitter-api"},"A Look Into the Twitter API"),Object(o.b)("p",null,"| Podcast Episode: #081 Twitter API Research\n|------------------|\n|In this podcast we were looking into how the Twitter API works and how you get access to it.\n| ",Object(o.b)("a",{parentName:"p",href:"https://youtu.be/UnAXKxeIlyg"},"Watch on YouTube")),Object(o.b)("h2",{id:"ingesting-tweets-with-apache-nifi"},"Ingesting Tweets with Apache Nifi"),Object(o.b)("p",null,"| Podcast Episode: #082 Reading Tweets With Apache Ni\ufb01 & IaaS vs PaaS vs SaaS\n|------------------|\n|In this podcast we are trying to read Twitter Data with Ni\ufb01.\n| ",Object(o.b)("a",{parentName:"p",href:"https://youtu.be/pWuT4UAocUY"},"Watch on YouTube")),Object(o.b)("p",null,"| Podcast Episode: #085 Trying to read Tweets with Ni\ufb01 Part 2\n|------------------|\n|We are looking into the Big Data landscape chart and we are trying to read Twitter Data with Ni\ufb01 again.\n| ",Object(o.b)("a",{parentName:"p",href:"https://youtu.be/OLUwXr8-gAk"},"Watch on YouTube")),Object(o.b)("h2",{id:"writing-from-nifi-to-apache-kafka"},"Writing from Nifi to Apache Kafka"),Object(o.b)("p",null,"| Podcast Episode: #086 How to Write from Ni\ufb01 to Kafka Part 1\n|------------------|\n|I\u2019ve been working a lot on the cookbook, because it\u2019s so much fun. I gotta tell you what I added. Then we are trying to write the Tweets from Apache Ni\ufb01 into Kafka. Also talk about Kafka basics.\n| ",Object(o.b)("a",{parentName:"p",href:"https://youtu.be/F7Y-ygnyJMg"},"Watch on YouTube")),Object(o.b)("p",null,"| Podcast Episode: #088 How to Write from Ni\ufb01 to Kafka Part 2\n|------------------|\n|In this podcast we \ufb01nally \ufb01gure out how to write to Kafka from Ni\ufb01. The problem was the network con\ufb01guration of the Docker containers.\n| ",Object(o.b)("a",{parentName:"p",href:"https://youtu.be/pJbRnBQmoCs"},"Watch on YouTube")),Object(o.b)("h2",{id:"apache-zeppelin"},"Apache Zeppelin"),Object(o.b)("h3",{id:"install-and-ingest-kafka-topic"},"Install and Ingest Kafka Topic"),Object(o.b)("p",null,"Start the container:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker run -d -p 8081:8080 --rm \\\n-v /Users/xxxx/Documents/DockerFiles/logs:/logs \\\n-v /Users/xxxx/Documents/DockerFiles/Notebooks:/notebook \\\n-e ZEPPELIN_LOG_DIR='/logs' \\\n-e ZEPPELIN_NOTEBOOK_DIR='/notebook' \\\n--network app-tier --name zeppelin apache/zeppelin:0.7.3\n")),Object(o.b)("h3",{id:"processing-messages-with-spark-and-sparksql"},"Processing Messages with Spark and SparkSQL"),Object(o.b)("h3",{id:"visualizing-data"},"Visualizing Data"),Object(o.b)("h2",{id:"switch-processing-from-zeppelin-to-spark"},"Switch Processing from Zeppelin to Spark"),Object(o.b)("h3",{id:"install-spark"},"Install Spark"),Object(o.b)("h3",{id:"ingest-messages-from-kafka"},"Ingest Messages from Kafka"),Object(o.b)("h3",{id:"writing-from-spark-to-kafka"},"Writing from Spark to Kafka"),Object(o.b)("h3",{id:"move-zeppelin-code-to-spark"},"Move Zeppelin Code to Spark"))}l.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(h,s(s({ref:t},p),{},{components:n})):r.a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);