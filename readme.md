# NTH Main Website Backend

---

> ### **How to run the project**

#### Cloning Git Repository:
```
git clone https://github.com/credenz/CTD_main_website_backend.git
cd CTD_main_website_backend
```

#### Creating Virtual Enviornment:
```
virtualenv venv
```
#### Activating Virtual Env on Windows:
```
venv\Scripts\activate
```

#### Activating Virtual Env on Linux:
```
source venv/bin/activate
```

#### Installing Dependencies:
```
pip install -r requirements.txt
```
#### Run Python Development Server:
```
python manage.py runserver
```


> ### **API Endpoints**

| Endpoint    | Method      | Description |
| ----------- | ----------- | ----------- |
| /users      | GET         | Get List of the users. |
| /users      | POST        | Create User. |
| /users/{id}   | GET         | Get a particular User. |




