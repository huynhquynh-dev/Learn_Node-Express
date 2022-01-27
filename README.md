Cài Init
```python
npm init
```

Cài thư viện
```python
npm i express express-handlebars method-override mongoose nodemon body-parser 
```

Run project
`npm start`

Cài thêm
```python
npm i config
```

Deploy lên app
Tải heroku cli

Dùng lệnh
```python
heroku login
heroku create
git add .
git commit -am "make it better"
heroku git:remote -a learn-nodeexpress-app-post
git push heroku master
heroku open
```

Đổi tên app khi đã deploy
```python
heroku apps:rename abc...
```