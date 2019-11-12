# Introduction
This is a flask restful service which is made using python and flask restful api. This api can insert record and display record. This is just an example which can be used as a template for the Machine learning deployment or any other service deployment as a microservice.
Follow the given steps to run this application

# How to run ?
Step 1: Backend Hosting : https://remotemysql.com/ (Free public mysql hosting)
Create the tables using .sql file inside the github Repo and Note Down the credentials given in the database<br />

Step 2: Python flask restful hosting (Heroku): First note down the Dependencies using (pip freeze > requirements.txt) command in requirements.txt and change the mysql credentials<br>
then run (Locally) : Python app.py<br/>using postman Run a Get (localhost:5000) and post request(localhost:5000) with data.<br>
{<br>
	"sensorid":"4",<br>
	"sensordata":"44"<br>
}<br>
If it worked successfully then go for deployment to the heroku<br>
<h2>Heroku Part</h2>
Create a Procfile and add the gurnicorn run command (web: gunicorn app:app) make sure ( pip install gunicorn ) should be present in the local requirements.txt file<br/>
Push the Repo to github and login with heroku <br>
Create one app with Unique Name and Select Github and connect a particular respository with it that you want to deploy<br>

<h4>Easy Way </h4>
Click on the deploy to heroku button below and fill the details. Deployement process will start.<br>


# Deploy
<a href="https://heroku.com/deploy?template=https://github.com/purnimsinha/MyApi.git">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
<br><p>HAPPY CODING</p>
