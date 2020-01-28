<h1 align="center">
  Frontend <br> SpaceX Consumer
</h1>

Elaborar um Frontend em React que consuma a "Web browsable API SpaceX Consumer" e seja capaz de apresentar as seguintes informações:

- Próximo Lançamento
- Último Lançamento
- Próximos Lançamentos
- Lançamentos Passados

## 👨🏼‍💻 Deploy no Heroku
**Experimente o app no link abaixo.**

[https://api-spacex-consumer.herokuapp.com/](https://api-spacex-consumer.herokuapp.com/)

## 👨🏼‍💻 Desenvolvedor

- [Paulo Henrique Bernardes Martins](http://phdeveloper.com.br/)

## 🚀 Tecnologias

- ⚡ [Django](https://www.djangoproject.com/) — A web framework for Python.
- 💾 [Django REST framework](https://www.django-rest-framework.org/) — Toolkit Web APIs for Python.

## ✋🏻 Pré-requisitos

- [Python](https://www.python.org/)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd ApiSpaceXConsumer`;
3. Rode `python -m venv venv` para criar a Virtual Environment;
4. Rode `\env\Scripts\activate` para ativar a Virtual Environment;
5. Rode `pip install -r requirements-dev.txt` para instalar as dependências;
6. Rode `python manage.py migrate` para fazer as migrações;
8. Rode `python manage.py createsuperuser` escolha um nome de usuário e senha;
7. Rode `python manage.py runserver` para subir o servidor de desenvolvimento;

## 📚 Testes

1. Rode `python manage.py test` para os testes.

## 📚 Implementação

O projeto Django chamado ApiSpaceXConsumer é o local onde ficam as configurações básicas do projeto:

`Pasta => ApiSpaceXConsumer `
- `urls.py`
- `settings.py`

Em seguida, inicio um app Django chamado `api` no qual é encontrado a regra de negocio da api para a criação do db:

`Pasta => api `
- `admin.py` 
- `models.py`

Na pasta `core` encontramos os arquivos utilizados pelo Django Rest Framework, expondo a api:

`Pasta => api => core`
- `serializers.py` 
- `viewsets.py`

---
