function showReplyForm(button) {
    const replyForm = button.nextElementSibling;
    replyForm.style.display = 'block';
  }
  
  const replyForms = document.querySelectorAll('.reply-form');
  
  replyForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const replyText = form.querySelector('textarea').value;
   
      console.log(`Resposta enviada: ${replyText}`);
    });
  });
  
  function saveReply() {
    var reply = document.getElementById("reply").value;
    var replies = localStorage.getItem("replies");
    if (replies === null) {
        replies = [];
    } else {
        replies = JSON.parse(replies);
    }
    replies.push(reply);
    localStorage.setItem("replies", JSON.stringify(replies));
    alert("Resposta enviada");
  }
  
  function getTopicFromReplyForm() {
    
    var replyForm = document.querySelector('.reply-form');
    var topicElement = replyForm.previousElementSibling; 
    var topic = topicElement.textContent;
    return topic;
  }

  function displayReplies(topic) {
    var replies = localStorage.getItem("replies");
    if (replies!== null) {
      replies = JSON.parse(replies);
      if (replies[topic]) {
        var replyList = document.getElementById("reply-list");
        replyList.innerHTML = "";
        replies[topic].forEach(reply => {
          var replyElement = document.createElement("li");
          replyElement.textContent = reply;
          replyList.appendChild(replyElement);
        });
      }
    }
  }
