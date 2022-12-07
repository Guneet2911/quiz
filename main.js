function login()
{
  user_name = document.getElementById("user").value; 
  
  localStorage.setItem("user_name" , user_name);

  window.location = "ques_one.html";
}