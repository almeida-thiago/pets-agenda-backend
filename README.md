## Pet's agenda - Api

Api to access data of Pet's agenda.

### Create user

`POST /user - JSON`

|Param     |Description               |
|:--------:|--------------------------|
|`username`|Login username. `Required`|
|`password`|Login password. `Required`|

#### Response

```json
{
  "success": true,
  "user": "4edd40c86762e0fb12000003"
}
```

```json
{
  "error": true,
  "message": "Erro on create data."
}
```

#### Post exemple

```json
  {
    "username": "name@provider.com",
    "password": "123456",
  }
```

---

### Login

`POST /login - JSON`

|Param     |Description               |
|:--------:|--------------------------|
|`username`|Login username. `Required`|
|`password`|Login password. `Required`|

#### Response

```json
{
  "success": true,
  "token": "TOKEN"
}
```

```json
{
  "error": true,
  "message": "Access denied."
}
```

#### Post exemple

```json
  {
    "username": "name@provider.com",
    "password": "123456",
  }
```

---

### Revalidate login

`PUT /revalidate - JSON`

|Param  |Description        |
|:-----:|-------------------|
|`user` |User id. `Required`|

#### Response

```json
{
  "success": true,
  "token": "TOKEN"
}
```

```json
{
  "error": true,
  "message": "Access denied."
}
```

#### Post exemple

```json
  {
    "user": "4edd40c86762e0fb12000003"
  }
```

---

### Create pet

`POST /pet - JSON`

|Param   |Description           |
|:------:|----------------------|
|`user`  |User id. `Required`   |
|`name`  |Pet name. `Required`  |
|`specie`|Pet specie. `Required`|

#### Response

```json
{
  "success": true
}
```

```json
{
  "error": true,
  "message": "Erro on create data."
}
```

#### Post exemple

```json
  {
    "user": "4edd40c86762e0fb12000003",
    "name": "Kitty",
    "specie": "cat",
  }
```

---

### Get pets list

`GET /pet - JSON`

|Param   |Description           |
|:------:|----------------------|
|`user`  |User id. `Required`   |

#### Response

```json
{
  "success": true,
  "data": ["DATA"]
}
```

```json
{
  "error": true,
  "message": "Erro on get data."
}
```

#### Post exemple

```json
  {
    "user": "4edd40c86762e0fb12000003"
  }
```

---

### Delete pet

`DELETE /pet - JSON`

|Param|Description        |
|:---:|-------------------|
|`id` |Task id. `Required`|

#### Response

```json
{
  "success": true
}
```

```json
{
  "error": true,
  "message": "Erro on delete data."
}
```

#### Delete exemple

```json
  {
    "id": "4edd40c86762e0fb12000003"
  }
```

---

### Create task

`POST /task - JSON`

|Param        |Description                 |
|:-----------:|----------------------------|
|`pet`        |Pet id. `Required`          |
|`agenda`     |Agenda id. `Required`       |
|`date`       |Date and time. `Required`   |
|`description`|Task description. `Required`|

#### Response

```json
{
  "success": true
}
```

```json
{
  "error": true,
  "message": "Erro on create data."
}
```

#### Post exemple

```json
  {
    "pet": "4edd40c86762e0fb12000003",
    "agenda": "food",
    "date": "04/12/2019 06:30:00",
    "description": "Buy tricks.",
  }
```

---

### Load tasks

`GET /task - JSON`

|Param        |Description          |
|:-----------:|---------------------|
|`pet`        |Pet id. `Required`   |
|`agenda`     |Agenda id. `Required`|
|`date`       |Date and time.       |

#### Response

```json
{
  "success": true,
  "data": ["DATA"]
}
```

```json
{
  "error": true,
  "message": "Erro on get data."
}
```

#### Get exemple

```json
  {
    "pet": "4edd40c86762e0fb12000003",
    "agenda": "food"
  }
```

---

### Delete task

`DELETE /task - JSON`

|Param|Description        |
|:---:|-------------------|
|`id` |Task id. `Required`|

#### Response

```json
{
  "success": true
}
```

```json
{
  "error": true,
  "message": "Erro on delete data."
}
```

#### Delete exemple

```json
  {
    "id": "4edd40c86762e0fb12000003"
  }
```

### Environment variables

|Varible      |Data                        |
|:-----------:|----------------------------|
|APP_NAME     |Application name            |
|APP_VERSION  |Application version         |
|URL_ACCESS   |Application url access point|
|PORT         |Application access port     |
|DB_NAME      |Database name               |
|DB_USER      |Database username           |
|DB_PASSWORD  |Database password           |
|DB_URL_ACCESS|Database url access point   |
|DB_PORT      |Database access port        |
|SECRET_KEY   |Private key                 |