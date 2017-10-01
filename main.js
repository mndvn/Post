// Create Post(); Func;
    function isPost() {
        // 3 Steps of JavaScript Dom Create var Element, append and property
        // 1.Creating
        var postFrame = document.createElement("div");
        var textBtnIs = document.createTextNode("The First meaningful Java Script!");
        postFrame.setAttribute("id", "postFrame_id");
        // 2.Appending
        document.body.appendChild(postFrame);
        postFrame.appendChild(textBtnIs);//this.TextNode will be the name of btn object
        // 3.Adding Property
        postFrame.style.backgroundColor = "gray";
        postFrame.style.fontSize = "25px";
        postFrame.style.fontWeight = "600";
        postFrame.style.margin = "30px";
        postFrame.style.padding = "30px";
        postFrame.style.color = "white";
    }

    function isPostRemover(){
        document.getElementById("postFrame_id").remove();
    }
