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
    "email": "rodrigo@mail.com",
    "password": "123456",
    "name": "Rodrigo",
    "gender": "M",
    "city": "Manaus",
    "state": "Am",
    "age": 38,
    "bio": "dsadsa",
    "friendsList": []
}

```
output: 

```json
{
    {
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZHJpZ29AbWFpbC5jb20iLCJpYXQiOjE2NjE4Njk4NjQsImV4cCI6MTY2MTg3MzQ2NCwic3ViIjoiMiJ9.MuW7Qf5iKwClSVzndn85heM2_V5fO-UuohxUeoEtF1A",
	"user": {
		"email": "rodrigo@mail.com",
		"name": "Rodrigo",
		"gender": "M",
		"city": "Manaus",
		"state": "Am",
		"age": 38,
		"bio": "dsadsa",
		"friendsList": [],
		"id": 2
	}
}
}
```

### Autenticar Usuário
> post /users/login
```json
{
    "email": "kenzinho@mail.com",
    "password": "123456"
}
```
output:
```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjYxODc3MjgyLCJleHAiOjE2NjE4ODA4ODIsInN1YiI6IjEifQ.OVzG75LP0x5Q-34fCxGf6VC2o4Xe09mKoYFgbCsUtEY",
	"user": {
		"id": 1,
		"email": "kenzinho@mail.com",
		"name": "Kenzinho",
		"gender": "f",
		"city": "Manaus",
		"state": "Am",
		"age": 38,
		"bio": "",
		"friendsList": []
	}
}
```

### **Listar todos os posts**

> get /posts

output: 

```json
[
	{
		"id": 2,
		"name": "Nome 1",
		"url_avatar": "path",
		"message": "Teste 1",
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
	},
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
]
```

### **Listar todos os usuarios**

> get /users

```json
[
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
	},
	{
		"email": "rodrigo@mail.com",
		"password": "$2a$10$N9lpvKwjsCJdxOe2rbXij.wp7NEgjIi0I5zpHl8op8nWNG0Tza2NO",
		"name": "Rodrigo",
		"gender": "M",
		"city": "Manaus",
		"state": "Am",
		"age": 38,
		"bio": "Teste",
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
]
```

### **Procurar por um usuario**

> get /users/:user_id

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

```
{
	"email": "rodrigo@mail.com",
	"password": "$2a$10$N9lpvKwjsCJdxOe2rbXij.wp7NEgjIi0I5zpHl8op8nWNG0Tza2NO",
	"name": "Rodrigo",
	"gender": "M",
	"city": "Manaus",
	"state": "Am",
	"age": 38,
	"bio": "Teste",
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


