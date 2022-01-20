// Reffering a particular element
let page=document.getElementById("page");
let title=document.getElementById("title");
let content=document.getElementById("content");
let footer=document.getElementById("footer");
let prevBtn=document.getElementById("prev");
let nextBtn=document.getElementById("next");
let pageNumber=document.getElementById("pageNumber");
let contentImage=document.getElementById("contentImage"); 
let favBtn=document.getElementById("favBtn"); 
let favouriteSection=document.getElementById("favouriteSec"); 

// Setting Up the data for NoteBook
let titleData=["iNoteBook<br>Tagline will go here","Table Of Content","Title 1","Title 2","Title 3","Title 4","Title 5","Title 6","Title 7","Title 8","Title 9","Title 10"];
let contentData=["<font color='white'>EDITION 2022</font>",
                "<table class='table h-auto text-center'><thead><tr><th scope='col'>*</th><th scope='col'>Title</th><th scope='col'>Page Number</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Title 1</td><td>3</td></tr><tr><th scope='row'>2</th><td>Title 2</td><td>4</td></tr><tr><th scope='row'>3</th><td>Title 3</td><td>5</td></tr><tr><th scope='row'>4</th><td>Title 4</td><td>6</td></tr><tr><th scope='row'>5</th><td>Title 5</td><td>7</td></tr><tr><th scope='row'>6</th><td>Title 6</td><td>8</td></tr><tr><th scope='row'>7</th><td>Title 7</td><td>9</td></tr><tr><th scope='row'>8</th><td>Title 8</td><td>10</td></tr><tr><th scope='row'>9</th><td>Title 9</td><td>11</td></tr><tr><th scope='row'>10</th><td>Title 10</td><td>12</td></tr></tbody></table>",
                "Within this report is information on how Java Script is used on the Internet. This report will contain information that will help you learn about Java Script and its uses on the Internet. It mentions what Java Script is, where it originated and what some of its uses are.JavaScript is a loosely typed scripting language that resembles the programming language C. It is designed to be an extension to HTML and is usually included within HTML scripts. Java Script is object-oriented and has block-structuring features. The main feature of Java Script is that it lets you build interactive web pages.",
                "Java Script allows you to respond to a user's input in the form of text, buttons selected, or mouse clicks, and can generate a response to the user's computer. Java Script originated from within the labs of Netscape Communications Corporation in 1994. It was invented so a computing language could build web pages and applications more effectively. When it first appeared it was thought that it was a new form of C, but later turned out to be this wonderful new language called JavaScript.",
                "There were skeptics that said the language was a dud and would never catch on, but now more people are learning Java Script then ever before.JavaScript is used within HTML tags so that the page setup in already present when the Java Script starts to run. There are many different uses for Java Script on the Net. It can be used to make mail forms that a customer or person trying to input information can use. The program will allow the user to input information, then it will automatically send that info to a designated email address with the click of a button. It can also be used to put a password on a certain web page; a user trying to enter the page must then input the correct commands and passwords to enter the page.",
                "In the middle of May 1995 Java was introduced into the world, and along with Netscape it would be the new way for Internet users to access this new information superhighway. But before it got to this point, Java technology was developed almost by accident. Back in 1991, Sun Microsystems was looking into the future in anticipation of the future of computing, and they tasked a team that became know as the “Green Project”. Their main focus was to come up with a plan for the future of computing, but what they came out with was something quite unexpected.",
                "Under the guidance of James Gosling, a team was locked away in an external site to work on the project that would define Sun’s technology direction for the future. Their conclusions pointed toward a future that had computers and digitally controlled devices converging. What they came out with was a language called “Oak”, named for the type of tree outside their office window. After failed attempts at selling the technology to the cable industry, the team convened again to determine the future of this new language.",
                "Before jQuery was developed, the web developers created their own custom frameworks in javascript. This allowed them to work around specific bugs, it reduces the time to work with common bugs. This led to group of developers creating their custom libraries and those were open source and free to use. jQuery is a cross platform javascript library designed to simpilify the client side scripting of HTML. It was developed by team of developers led by  Dave Methvin.It was released in January 2006 at BarCamp NYC by John Resig. Over 10000 most visited web pages, 80% of web pages were developed by using jQuery. Now a days  jQuery is most popular javascript library in use.",
                "You should place all your JavaScript code within <script> tags (<script> and </script>) if you are keeping your JavaScript code within the HTML document itself. This helps your browser distinguish your JavaScript code from the rest of the code. As there are other client-side scripting languages (Example: VBScript), it is highly recommended that you specify the scripting language you use. You have to use the type attribute within the <script> tag and set its value to text/javascript like this:",
                "JavaScript is not a programming language in strict sense. Instead, it is a scripting language because it uses the browser to do the dirty work. If you command an image to be replaced by another one, JavaScript tells the browser to go do it. Because the browser actually does the work, you only need to pull some strings by writing some relatively easy lines of code. That’s what makes JavaScript an easy language to start with.",
                "But don’t be fooled by some beginner’s luck: JavaScript can be pretty difficult, too. First of all, despite its simple appearance it is a full fledged programming language: it is possible to write quite complex programs in JavaScript. This is rarely necessary when dealing with web pages, but it is possible. This means that there are some complex programming structures that you’ll only understand after protracted studies.",
                "Even with all these improvements, there is still a catch: JavaScript is flaky. Not the language itself but the environment it is implemented in. You do not know what computer is on the receiving end of your web page, you do not know how busy the computer is with other things, and you do not know if some other JavaScript in another tab of the browser is grinding things down to a halt. Until browsers begin having different processing resources for different tabs and windows (also known as threads), this will always remain an issue. Multiple threading is made available to a certain degree by a new HTML5 feature called Web workers, and this has reasonable browser support."]
let footerData=["SLOGAN TEXT WILL GO HERE<br>LOREM IPSUM DOLOR SITE AMET","Table Of Content Footer","Footer 1","Footer 2","Footer 3","Footer 4","Footer 5","Footer 6","Footer 7","Footer 8","Footer 9","Footer 10"];
let favourite=[0,0,0,0,0,0,0,0,0,0,0,0];

let count=1;
let btns=new Array();

// Function for adding a particular page to favourite
let addFav=()=>{
    if(favourite[count-1]==1){
        alert("Already Added To Favourite");
    }
    else{
        favourite[count-1]=1
        btns.push(`<button class="btn btn-primary mx-2" onclick="customPage(this.value)" value="${count}">${count}</button>`);
        favouriteSection.innerHTML=favouriteSection.innerHTML+btns[(btns.length)-1];
        alert("Added To Favourite");
    }
}

// Function for checking the current value of count
let checkCount=()=>{
    if(count==1){
        prevBtn.disabled=true;
        nextBtn.disabled=false;
        page.style.backgroundImage="url('b1.png')";
        content.style.height="60vh";
    }
    if(count==12){
        page.style.backgroundImage="url('b2.png')";
        content.style.height="70vh";
        nextBtn.disabled=true;
        prevBtn.disabled=false;
    }
    if(count>1 && count <12){
        page.style.backgroundImage="url('b2.png')";
        content.style.height="70vh";
        nextBtn.disabled=false;
        prevBtn.disabled=false;
    }
    count<=2?contentImage.style.display="none":contentImage.style.display="block";
}

// Function for setting content on a particular page
let setData=(data)=>{
    title.innerHTML=titleData[data];
    content.innerHTML=contentData[data];
    footer.innerHTML=footerData[data];
}

// Function for getting desired page number
let customPage=(num)=>{
    let temp=parseInt(num);
    if(temp<=0 || temp>12){
        alert('Enter a value between 1-12');
    }
    else{
        count=temp;
        checkCount();
        title.innerHTML=titleData[count-1];
        content.innerHTML=contentData[count-1];
        footer.innerHTML=footerData[count-1];
        pageNumber.innerHTML=`Page No. ${count}`;
    }
}

// Function for navigating to next page
let next=()=>{
    count++;
    checkCount();
    setData(count-1);
    contentImage.style.visibility="visible";
    pageNumber.innerHTML=`Page No. ${count}`;
}

// Function for navigating to previous page
let prev=()=>{
    count--;
    checkCount();
    setData(count-1);
    pageNumber.innerHTML=`Page No. ${count}`;
}

// Setting things for initial load-up
page.style.backgroundImage="url('b1.png')";
content.style.height="60vh";

title.innerHTML=titleData[0];
content.innerHTML=contentData[0];
footer.innerHTML=footerData[0];
pageNumber.innerHTML=`Page No. ${count}`;
