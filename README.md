# dev-lov

# EndPoints

O JSON para utilizar no Insomnia é este aqui -> https://drive.google.com/file/d/1S6vrXVsLYqRSdE1o5QHEck8L3FvGSz2f/view?usp=sharing

O url base da API é https://json-server-apikenzie.herokuapp.com

## Rotas que não precisam de autenticação

<h1 align="center">
  Users
</h1>

### **Registrar Usuário**
> post /register

Ao registrar um usuário inicializar `friendsList` como []

```json
{
	{
		"email": "kenzinho@mail.com",
		"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
		"name": "Kenzinho",
		"url_avatar": "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg",
		"gender": "f",
		"city": "Manaus",
		"state": "Am",
		"age": 38,
		"bio": "",
		"friendsList": [],
		"unFriendsList": []
	},
}

```
output: 

```json
{
    {
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZHJpZ29AbWFpbC5jb20iLCJpYXQiOjE2NjE4Njk4NjQsImV4cCI6MTY2MTg3MzQ2NCwic3ViIjoiMiJ9.MuW7Qf5iKwClSVzndn85heM2_V5fO-UuohxUeoEtF1A",
	{
		"id":1,
		"email": "kenzinho@mail.com",
		"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
		"name": "Kenzinho",
		"url_avatar": "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg",
		"gender": "f",
		"city": "Manaus",
		"state": "Am",
		"age": 38,
		"bio": "",
		"friendsList": [],
		"unFriendsList": []
	},
}
}
```

### Autenticar Usuário
> post /login
```json
{
    "email": "kenzinho@mail.com",
    "password": "123456"
}
```
output:
```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjYyMTE2NTk4LCJleHAiOjE2NjIxMjAxOTgsInN1YiI6IjEifQ.W_O3LyJZkC5u8a28PL7TVX0KlTKTYZwuzaJ7l1SV5Rg",
	"user": {
		"id": 1,
		"email": "kenzinho@mail.com",
		"name": "Kenzinho",
		"url_avatar": "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg",
		"gender": "f",
		"city": "Manaus",
		"state": "Am",
		"age": 38,
		"bio": "",
		"friendsList": [],
		"unFriendsList": []
	}
}
```

### **Listar todos os posts**

> get /posts

output: 

```json
[
	{
		"id": 1,
		"name": "Kenzinho",
		"url_avatar": "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg",
		"message": "Teste 1",
		"created_at": "2022-08-29T19:24:25.145Z",
		"updated_at": "2022-08-29T19:24:25.145Z",
		"userId": 1,
		"like": 0,
		"comments": [
			{
				"id": 1,
				"user": {
					"userId": 2,
					"name": "rodrigo",
					"url_avatar": "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg",
					"message": "Teste 1",
					"created_at": "2022-08-29T19:24:25.145Z",
					"updated_at": "2022-08-29T19:24:25.145Z"
				}
			}
		]
	},
	{
		"name": "Kenzinho",
		"url_avatar": "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg",
		"message": "Teste 2",
		"created_at": "2022-08-29T19:24:25.145Z",
		"updated_at": "2022-08-29T19:24:25.145Z",
		"userId": 1,
		"like": 0,
		"comments": [],
		"friendsList": [],
		"id": 2
	}
]
```

### **Listar todos os usuários**

> get /users

```json
[
	{
		"id": 1,
		"email": "kenzinho@mail.com",
		"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
		"name": "Kenzinho",
		"url_avatar": "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg",
		"gender": "f",
		"city": "Manaus",
		"state": "Am",
		"age": 38,
		"bio": "",
		"friendsList": [],
		"unFriendsList": []
	},
	{
		"email": "rodrigo@mail.com",
		"password": "$2a$10$N9lpvKwjsCJdxOe2rbXij.wp7NEgjIi0I5zpHl8op8nWNG0Tza2NO",
		"url_avatar": "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg",
		"name": "Rodrigo",
		"gender": "M",
		"city": "Manaus",
		"state": "Am",
		"age": 38,
		"bio": "Teste",
		"friendsList": [],
		"unFriendsList": [],
		"id": 2
	}
]
```

### **Procurar por um usuário**

> get /users/:user_id

output:
```json
{
	"id": 1,
	"email": "kenzinho@mail.com",
	"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
	"name": "Kenzinho",
	"gender": "f",
	"city": "Manaus",
	"state": "Am",
	"age": 38,
	"bio": "",
	"friendsList": []
}
```

## Rotas que precisam de autenticação

### Atualizar perfil
> patch /users/:user_id
```json
{
"bio": "Teste"

}
```
output: 

```json
{
	"email": "rodrigo@mail.com",
	"password": "$2a$10$N9lpvKwjsCJdxOe2rbXij.wp7NEgjIi0I5zpHl8op8nWNG0Tza2NO",
	"url_avatar": "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg",
	"name": "Rodrigo",
	"gender": "M",
	"city": "Manaus",
	"state": "Am",
	"age": 38,
	"bio": "Teste",
	"friendsList": [],
	"unFriendsList": [],
	"id": 2
}
```

### Adicionar conexão
> patch /users/:user_id 

```json
{
	"friendsList": [
		{
			
		"email": "asdas@mail.com",
		"name": "Rodrigo",
		"gender": "M",
		"city": "Manaus",
		"state": "Am",
		"age": 38,
		"bio": "dsadsa",
		"friendsList": [],
		"id": 1

        }
    ]
}
```
output:
```json
{
	"email": "rodrigo@mail.com",
	"password": "$2a$10$N9lpvKwjsCJdxOe2rbXij.wp7NEgjIi0I5zpHl8op8nWNG0Tza2NO",
	"name": "Rodrigo",
	"gender": "M",
	"city": "Manaus",
	"state": "Am",
	"age": 38,
	"bio": "dsadsa",
	"friendsList": [
		{
			"email": "asdas@mail.com",
			"name": "Rodrigo",
			"gender": "M",
			"city": "Manaus",
			"state": "Am",
			"age": 38,
			"bio": "dsadsa",
			"friendsList": [],
			"id": 1
		}
	],
	"id": 2
}
```

<h1 align="center">
  Posts
</h1>

### Criar post
> post /posts

Ao criar um post inicializar o `like` como 0 e `comments` como []

```json
{
      "name": "Nome 2",
      "url_avatar":"path",
      "message": "Teste 2",
      "created_at": "2022-08-29T19:24:25.145Z",
      "updated_at": "2022-08-29T19:24:25.145Z",
      "userId": 1,
      "like":0,
      "comments": []
}
```
output:
```json
{
	"name": "Nome 2",
	"url_avatar": "path",
	"message": "Teste 2",
	"created_at": "2022-08-29T19:24:25.145Z",
	"updated_at": "2022-08-29T19:24:25.145Z",
	"userId": 1,
	"like": 0,
	"comments": [],
	"id": 2
}
```

### Atualizar posts

> patch /posts/:post_id

```json
{

	"message": "Menssagem de teste",
	"created_at": "2022-08-29T19:24:25.145Z",
	"updated_at": "2022-08-29T19:24:25.145Z"

}
```
output
```json
{
	"id": 1,
	"name": "Nome 1",
	"url_avatar": "path",
	"message": "Menssagem de teste",
	"created_at": "2022-08-29T19:24:25.145Z",
	"updated_at": "2022-08-29T19:24:25.145Z",
	"userId": 1,
	"like": 0,
	"comments": [
		{
			"id": 1,
			"user": {
				"userId": 1,
				"name": "Nome 1",
				"url_avatar": "path",
				"message": "Teste 1",
				"created_at": "2022-08-29T19:24:25.145Z",
				"updated_at": "2022-08-29T19:24:25.145Z"
			}
		}
	]
}
```

### Deletar post
> delete /posts/1

```
Não é necessário um corpo da requisição.
```

<h1 align="center">
  Comments
</h1>

### Criar um comentário
Para o id do comentário vamos usar o uuid.
> patch /posts/:post_id
```json
{
	"comments": [
		{
			"id": "bfd7e496-2ab0-11ed-a261-0242ac120002",
			"user": {
				"userId": 2,
				"name": "rodrigo",
				"url_avatar": "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg",
				"message": "Teste 1",
				"created_at": "2022-08-29T19:24:25.145Z",
				"updated_at": "2022-08-29T19:24:25.145Z"
			}
		}
	]
}
```

output: 
```json
{
	"id": 1,
	"name": "Kenzinho",
	"url_avatar": "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg",
	"message": "Teste 1",
	"created_at": "2022-08-29T19:24:25.145Z",
	"updated_at": "2022-08-29T19:24:25.145Z",
	"userId": 1,
	"like": 0,
	"comments": [
		{
			"id": "bfd7e496-2ab0-11ed-a261-0242ac120002",
			"user": {
				"userId": 2,
				"name": "rodrigo",
				"url_avatar": "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg",
				"message": "Teste 1",
				"created_at": "2022-08-29T19:24:25.145Z",
				"updated_at": "2022-08-29T19:24:25.145Z"
			}
		}
	]
}
```
