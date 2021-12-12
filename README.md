# Peakmind Assignment 📝

The website is hosted on: [Click here!](https://assignment-d4203.web.app/ "Click here!")
The backend is hosted on: [Click here!](https://peakmind-assignment.herokuapp.com/api/ "Click here!")

peakmind-assignment/
┣ backend/
┗ frontend/


For Frontend:
1. Clone the code from the repository using `git clone`
2. Locate the folder in terminal and run `npm install` to install required dependecies
3. To start the website locally, run command `npm start`

For Backend:
1. Clone the code from the repository using `git clone`
2. Locate the folder in terminal and run `npm install` to install required dependecies
3. To start the backend server locally on the device, run command `npm start`
4. To request the api for data use the following urls,

```json
"requests": [
    {
      "name": "Login",
      "url": "https://peakmind-assignment.herokuapp.com/api/login",
      "method": "POST",
      "params": [],
      "body": {
        "type": "json",
        "raw": "{\n    \"email\": \"harsh@gmail.com\",\n    \"password\": \"harshmalviya\"\n}",
        "form": []
      },
      "tests": []
    },
    {
      "name": "Signup",
      "url": "https://peakmind-assignment.herokuapp.com/api/signup",
      "method": "POST",
      "params": [],
      "body": {
        "type": "json",
        "raw": "{\n    \"name\":\"Harsh Malviya\",\n    \"email\": \"harsh@gmail.com\",\n    \"password\": \"harshmalviya\"\n}",
        "form": []
      },
      "tests": []
    },
    {
      "headers": [
        {
          "name": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjMzMWRmMjExZTVmMjNjMmRhZGMyMSIsImlhdCI6MTYzOTEzMzY3MiwiZXhwIjoxNjQ2OTA5NjcyfQ.vb62S5Mz_Yh_7eZRaloMYgQLusMViRFPNIK7F69WTps"
        }
      ],
      "name": "NewComparison",
      "url": "http://localhost:5000/api/history",
      "method": "POST",
      "params": [],
      "body": {
        "type": "json",
        "raw": "{\n  \"recentComparisons\": [\n    \"eth\"\n  ]\n}",
        "form": []
      },
      "tests": []
    },
    {
      "headers": [
        {
          "name": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjYzMzg3MDQ1MjNhNDdjZDUzZjM0MyIsImlhdCI6MTYzOTMzMDcyMiwiZXhwIjoxNjQ3MTA2NzIyfQ.FpwoTMnNOtYM00OgXNbxLJe3v7HtRPmlibTJWy10yP0"
        }
      ],
      "name": "GetComparisons",
      "url": "https://peakmind-assignment.herokuapp.com/api/history",
      "method": "GET",
      "params": [],
      "tests": []
    }
  ]
```
